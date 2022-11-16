import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const URL =
  "http://newsapi.org/v2/everything?q=tesla&from=2022-10-16&sortBy=publishedAt&apiKey=ef22132a1d6e46538aff06e25a51b667";
function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    setLoading(true);

    axios
      .get(URL)
      .then((response) => {
        setPosts(response.data.articles);
        console.log(response.data);
      })
      .catch((error) => {
        alert(error);
      });

    setLoading(false);
  }, []);

  const newsSearch = posts.filter((news) => {
    return news.title.toLowerCase().includes(searchTitle.toLowerCase());
  });
  return (
    <>
      <Navbar />
      <div className="App">
        <div className="imgapp">
          {/* <img src={img} alt=""  className= "Appimg"></img> */}
          <h3 className="Apptext">News</h3>
          <input
            style={{ width: "30%", height: "25px" }}
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearchTitle(e.target.value)}
          />
        </div>
        <div className="my-news">
          {loading ? (
            <h4>Loading ...</h4>
          ) : (
            newsSearch.map((article) => (
              <li key={article.url}>
                {article.title}
                <a href={article.url}> here</a>
              </li>
            ))
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
