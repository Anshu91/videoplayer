import axios from "axios";

const KEY = "AIzaSyDXy8tQHaELm5A29gpurRPWA9TrIL1tr6w";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: 5,
    key: KEY,
    type: "video",
  },
});
