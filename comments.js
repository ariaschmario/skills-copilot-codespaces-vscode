// Create web server
// npm install express
const express = require('express');
const app = express();
// Middleware
app.use(express.json());
// Data
let comments = [
    { id: 1, author: 'John', content: 'Comment 1' },
    { id: 2, author: 'Alex', content: 'Comment 2' },
    { id: 3, author: 'Bob', content: 'Comment 3' }
];
app.get('/comments', (req, res) => {
    res.json(comments);
});
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.json(comment);
});
app.get('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const comment = comments.find(comment => comment.id === id);
    res.json(comment);
});
app.put('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const newComment = req.body;
    comments = comments.map(comment => comment.id === id ? newComment : comment);
    res.json(newComment);
});
app.delete('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    comments = comments.filter(comment => comment.id !== id);
    res.json({ id });
});
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
// Run server
// node comments.js
// Test endpoints
// GET /comments
// POST /comments
// GET /comments/1
// PUT /comments/1
// DELETE /comments/1
// GET /comments
// GET /comments/2
// PUT /comments/2
// DELETE /comments/2
// GET /comments
// GET /comments/3
// PUT /comments/3
// DELETE /comments/3
// GET /comments
// DELETE /comments/4