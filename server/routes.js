const express = require('express');
const router = express.Router();
const Blog = require('./models/Blog');
const Article = require('./models/Article');
const fs = require('fs/promises');
router.get('/shortBlog', async (req, res) => {
    try {
        const shortBlogs = await Blog.find(); // Получение только заголовков блогов
        console.log(shortBlogs)
        res.json(shortBlogs);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/article/:id', async (req, res) => {
    try {
        const articleId = req.params.id;
        const article = await Article.findOne({ commonId: articleId });

        if (!article) {
            return res.status(404).json({ error: 'Article not found' });
        }

        try {
            article.body = await fs.readFile(article.body, {encoding: 'utf8'});
            res.json(article);
        } catch (readFileError) {
            console.error('Error by reading file ', readFileError);
            res.status(500).send('Ошибка сервера');
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Ошибка сервера');
    }
});

module.exports = router;
