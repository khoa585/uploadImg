const express = require('express')
const app = express()
var multer  = require('multer')
const port = 3000
app.set('views', './views')
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('index'))
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './my-uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
 
var upload = multer({ storage: storage })
app.post('/upload', upload.single('file'), function (req, res, next) {
	console.log(req.file);
	res.send('oke')
  
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))