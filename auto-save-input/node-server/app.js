const express = require("express");
const cors = require('cors');
const multer = require('multer');
const form_data = multer();


const app = express();

const PORT = 3000 || process.env.PORT;

const userInfo = {
  username: "dcode71",
  biography: "I make web development videos on YouTube, and I think pure JavaScript is the best way to learn.",
};

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(form_data.array());

app.get("/", (req, res) => {
  res.send("Hello World!");  
});

app.post("/save-profile", (req, res) => {
  // console.log(req.body.username);
  // console.log(req.body.biography);

  if (req.body?.username) {
    userInfo.username = req.body.username;
  } else if (req.body?.biography) {
    userInfo.biography = req.body.biography;
  } else {
    setTimeout(() => {
      res.send("Fail");
    }, 2000);
  }

  console.log(userInfo);

  setTimeout(() => {
    res.send("Success");
  }, 2000);
});

app.listen(PORT, () => console.log(`Server is running... at ${PORT}`));