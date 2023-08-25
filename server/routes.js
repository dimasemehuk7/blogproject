const express = require('express');
const router = express.Router();
const Blog = require('./models/Blog'); // Путь к вашей модели Blog

// Маршрут для получения списка шорт блогов
router.get('/shortBlog', async (req, res) => {
    try {
        const shortBlogs = await Blog.find(); // Получение только заголовков блогов
        console.log(shortBlogs)
        res.json(shortBlogs);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Маршрут для получения статьи по ID
router.get('/article/:id', async (req, res) => {
    try {
        const articleId = req.params.id;
        const article = await Blog.findById(articleId);
        res.json(article);
    } catch (error) {
        res.status(404).json({ error: 'Article not found' });
    }
});

module.exports = router;
