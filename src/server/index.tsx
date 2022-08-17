import express from "express";
import { renderToString } from "react-dom/server";
import App from "../App";

const app = express();

app.get("/", (req, res) => {
  const html = renderToString(<App />);
  res.send(html);
});

app.listen(3010, () => {
  console.log("Listening on port 3010");
});
