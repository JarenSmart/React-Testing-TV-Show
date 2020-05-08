import axios from "axios";

const fetchShow = () => {
  return axios
    .get(
      "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log("There was an error: ", err);
    });
};

export default fetchShow;
