import { useEffect, useState } from "react";
import "../styles/App.css";
import Header from "./Header";
import axios from "axios";
import QuoraPost from "./QuoraPost";
import AccountComponent from "./AccountComponent";
import Spaces from "./Spaces";
import CircularProgress from "@mui/material/CircularProgress";

function App() {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://academics.newtonschool.co/api/v1/quora/post?limit=100",
    headers: {
      projectID: "nnd8lcol1rly",
    },
  };
  useEffect(() => {
    axios
      .request(config)
      .then((response) => {
        setPostData(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="App">
      <div>
        <Header />
        <div className="main-content">
          <div className="left-div">
            <Spaces />
          </div>
          <div>
            <AccountComponent />
            {loading && <CircularProgress />}
            {postData.map((item, index) => {
              const obj = {
                authorName: item.author.name,
                authorImage: item.author.profileImage,
                title: item.title,
                content: item.content,
                images: item.images,
                channelName: item.channel.name,
                channelImage: item.channel.image,
                likeCount: item.likeCount,
                commentCount: item.commentCount,
              };
              return (
                <div className="post-container">
                  <QuoraPost key={index} {...obj} />
                </div>
              );
            })}
          </div>
          <div className="right-div">
            <div>Adverisement Area</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
