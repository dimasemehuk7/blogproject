const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    tittle: String,
    label: String,
    creationDate: String,
    labels: [String],
    body: String,
    commonId: String
});

const Article = mongoose.model('article', ArticleSchema);

module.exports = Article;
