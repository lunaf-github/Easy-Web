const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;

app.use(express.json());

console.log(__dirname)
app.get('/styles.css', (req, res) => {
 return res.status(200).sendFile(path.join(__dirname, './styles.css'));
});

app.get('/login', (req,res) =>{
 return res.status(200).sendFile(path.join(__dirname,'./login.htm'))
})



app.listen(PORT, () => {
 console.log(`Server listening on port: ${PORT}...`);
});