// Create web server
// Create comments array
// Create web server
const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
// Create comments array
const comments = [
    {
        id: 1,
        username: 'Alice',
        comment: 'I love this blog',
    },
    {
        id: 2,
        username: 'Bob',
        comment: 'This blog is great',
    },
    {
        id: 3,
        username: 'Charlie',
        comment: 'This blog is awesome',
    },
];
// GET /comments
app.get('/comments', (req, res) => {
    res.json(comments);
});
// POST /comments
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.json(comment);
});
// DELETE /comments/:id
app.delete('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = comments.findIndex(comment => comment.id === id);
    if (index !== -1) {
        comments.splice(index, 1);
    }
    res.json(comments);
});
// PUT /comments/:id
app.put('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const comment = req.body;
    const index = comments.findIndex(comment => comment.id === id);
    if (index !== -1) {
        comments[index] = comment;
    }
    res.json(comment);
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
// Run the server
// Open Postman
// Test GET /comments
// Test POST /comments
// Test DELETE /comments/:id
// Test PUT /comments/:id