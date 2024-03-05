const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors({
  origin:'*',
}))

const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const UserRoute = require('./routes/users');
const PostRoute =require('./routes/posts');
const CategoryRoute =require('./routes/categories');
const multer = require('multer');

dotenv.config();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
  
})
.then(console.log("hey backend"))
.catch(err => console.log(err));

const Mulstorage = multer.diskStorage({
  destination:(req,file,cb) =>{
     cb(null, "images/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
    
  },
});

const upload = multer({ storage: Mulstorage, });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json({message:"File has been uploaded", filename: req.file.filename});
  console.log(req.file);
});

app.use("/api/auth", authRoute);
app.use("/api/users", UserRoute);
app.use("/api/posts",PostRoute);
app.use("/api/categories", CategoryRoute);

app.listen("5000" ,()=>{
     console.log('listening on port 5000');
       });