import express from "express";
import { middlewareUrl } from "../middleware/IsUrl.js";
import { nanoid } from "nanoid";
import path from "path";
import URL from "../models/UrlModel.js";

const router = express.Router();
let __dirname = path.resolve();

router.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// encode route, receiving a long URL and outputing a shortened one
router.post("/encode", middlewareUrl, async (req, res) => {
  const { url } = req.body;
  // Generate a unique id to identify the URL
  let shortid = nanoid(10); // I chose to set up to id size to 10

  try {
    // save to db
    const newURL = await URL.create({ id: shortid, url: url });
    // send the shortened link as a response:
    res.status(200).json({
      message: `http://localhost:3000/${newURL.id}`,
      type: "success",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json("Response 500: server error");
  }
});

// decode route, receiving a shortened URL and outputing the original one:
router.get("/decode/:id", async (req, res) => {
  const id = req.params.id;
  let longURL;

  try {
    // go into the db and search:
    longURL = await URL.findOne({ id });
    // send the original link as a response:
    res.status(200).json({ message: `${longURL.url}`, type: "success" });
  } catch (err) {
    res.status(404).json({
      message: "Response 404. URL not found. Please try with an other one.",
      type: "failure",
    });
  }
});

// route to directly access the original url with the shortened link:
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const originalLink = await URL.findOne({ id });

  if (!originalLink) {
    return res.status(404).sendFile(__dirname + "/public/error.html");
  }
  // redirect to original url:
  res.status(200).redirect(originalLink.url);
});

export { router };
