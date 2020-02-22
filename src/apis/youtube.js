import axios from "axios";

const API_KEY = "AIzaSyBTuis68C8tWLAqE5ASr_kExPmT9cxFzTc";

export const baseParam = {
  part: "snippet",
  maxResults: 5,
  key: API_KEY
};
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});
