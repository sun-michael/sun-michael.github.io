// const express = require("express");
// const app = express();
// const path = require("path");
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "/views"));

// app.get("/", (req, res) => {
//   q2;
//   res.render("home.ejs");
// });
// app.listen(3000, () => {
//   console.log("listening on");
// });

const jokes = document.querySelector("#jokes");
const button = document.querySelector("#jokes-button");
const addNewJokes = async () => {
  const res = await getJokes();
  const newLi = document.createElement("LI");
  newLi.append(res);
  jokes.append(newLi);
};
const getJokes = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (err) {
    return "something went wrong! no jokes found";
  }
};
button.addEventListener("click", addNewJokes);
