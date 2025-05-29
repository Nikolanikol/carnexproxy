const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const PORT = 9000;
app.use(cors());

app.get("/", (req, res) => {
  return res.send("hello");
});
app.get("/catalog", async (req, res) => {
  const { q } = req.query;

  const responce = (
    await axios.get(
      `https://api.encar.com/search/car/list/general?count=true&q=${q}&inav=%7CMetadata%7CSort`,
      {
        headers: {
          "user-agent":
            "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1",
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
          "Accept-Language": "en-US,en;q=0.9",
          Referer: "http://www.encar.com/",
          "sec-fetch-mode": "cors",
        },
      }
    )
  ).data;
  return res.send(responce);
});

app.get("/subcategory", async (req, res) => {
  const { q } = req.query;
  const responce = (
    await axios.get(
      `https://api.encar.com/search/car/list/general?count=true&q=${q}&inav=%7CMetadata%7CSort`,
      {
        headers: {
          "user-agent":
            "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1",
        },
      }
    )
  ).data;

  return res.send(responce);
});
app.get("/generation", async (req, res) => {
  const { q } = req.query;
  const responce = (
    await axios.get(
      `https://api.encar.com/search/car/list/general?count=true&q=${q}&inav=%7CMetadata%7CSort`,
      {
        headers: {
          "user-agent":
            "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1",
        },
      }
    )
  ).data;
  res.send(responce);
});
app.get("/subgeneration", async (req, res) => {
  const { q } = req.query;
  const responce = (
    await axios.get(
      `https://api.encar.com/search/car/list/general?count=true&q=${q}&inav=%7CMetadata%7CSort`,
      {
        headers: {
          "user-agent":
            "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1",
        },
      }
    )
  ).data;

  res.send(responce);
});
app.get("/subrow", async (req, res) => {
  const { q } = req.query;
  const responce = (
    await axios.get(
      `https://api.encar.com/search/car/list/general?count=true&q=${q}&inav=%7CMetadata%7CSort`,
      {
        headers: {
          "user-agent":
            "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1",
        },
      }
    )
  ).data;

  res.send(responce);
});

app.get("/getcars", async (req, res) => {
  const { q, offset } = req.query;
  console.log(q, offset);
  console.log("catalog");
  const responce = (
    await axios.get(
      `https://api.encar.com/search/car/list/premium?count=true&q=${q}&sr=%7CModifiedDate%7C${offset}%7C20`,
      {
        headers: {
          "user-agent":
            "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1",
        },
      }
    )
  ).data;
  console.log(responce);
  res.send(responce);
});
app.listen(PORT, () => console.log("server started on " + PORT));
