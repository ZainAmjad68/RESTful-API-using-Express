const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const bookRouter = express.Router();

bookRouter.route('/books')
.get((req, res) => {
  res.json('books ok.')
})

app.use('/api', bookRouter);

app.get('/', (req, res) => {
    res.send('Welcome to my API');
});

app.listen(port, () => {
    console.log(`running on Port ${port}`);
});
