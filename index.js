const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const PORT = 9000;
app.use(cors());

// app.use("/", async (req, res) => {
//   const responce = await axios
//     .get(
//       "https://api.encar.com/search/car/list/general?count=true&q=(And.Hidden.N._.CarType.Y.)&inav=%7CMetadata%7CSort",
//       {
//         headers: {
//           "user-agent":
//             "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1",
//         },
//       }
//     )
//     .then((res) => {
//       console.log("okok");
//       return res.data;
//     })
//     .catch((e) => console.log(e));
//   res.send(responce);
// });

app.get("/", (req, res) => {
  return res.send("hello");
});
app.get("/test", (req, res) => {
  return res.send("test");
});
app.get("/test2", (req, res) => {
  return res.send("test2");
});
app.get("/helo", (req, res) => {
  //   fetch(
  //     "https://api.encar.com/search/car/list/general?count=true&q=(And.Hidden.N._.CarType.Y.)&inav=%7CMetadata%7CSort"
  //   )
  //     .then((res) => console.log(res))
  //     .catch((e) => console.log(e));
  res.send("encar ok");
});
app.listen(PORT, () => console.log("server started on " + PORT));
