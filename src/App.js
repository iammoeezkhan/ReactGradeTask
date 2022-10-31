import { useState,useEffect} from 'react';
import './App.css';
import  axios  from 'axios';
import img from './bmw.jpg'

// const URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
// function App() {
// const[items, setItems] = useState([]);
//   const [id, setId] = useState(0)
//   const [drink, setDrink] = useState("")
//   const [category, setCategory] = useState("")
//   const[img, setImg] = useState("")
//   // const[search, setSearch] = useState("")
//   const [data, setData] = useState("");
  

//   useEffect(() => {
//     const myApp = async () => {
//     axios.get(URL)
//     .then((response) =>{
//       const data = response.data.drinks[0];
//       const data2 = response.data.drinks;
//       console.log(response.data)
//       setItems(data2)
//       setDrink(data.strDrink)
//       setId(data.idDrink)
//       setCategory(data.strCategory)
//       setImg(data.strDrinkThumb)
//       //console.log(response.data)
//     }).catch(error => {
//       alert(error.response.data.error)
//     })
//   }
//   myApp()
//     }, [])

   
     



    // console.log("our drinks : " + drink + "id: " + id + "category" + category)

  // return (

    // <div>
    {/* <h3>Cocktail of the Day</h3> */}
    {/* <input name="" id="name" placeholder="Search by name" onChange= {(e) => setSearch( e.target.value.toLowerCase())} ></input> */}
    {/* <ol>

      <li>{id}</li>
      <li>{drink}</li>
      <li>{category}</li>
      <li><img src={img} alt="" /></li> */}
    {/* {drinks.map(drinks=> (
      <li key = {drinks.id}>{drinks.str}</li>
    ))} */}
   {/* </ol> */}
   {/* <ol>
    {items.map(item=>{
      <li>{item.idDrink}</li>
    })}
   </ol>
   <div>{data}</div> */}

    
    {/* </div> */}
  // );
// }
// export default App;

function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
     
      const response = await axios.get(
        "https://newsapi.org/v2/everything?q=tesla&from=2022-09-12&sortBy=publishedAt&apiKey=679a46886c8a4f49aa20a80098e17d08"
      );
      setPosts(response.data.articles);
      console.log(response.data)
      setLoading(false);
    };

    loadPosts();
  }, []);

  return (
    <div className="App">
       <div className="imgapp">
        {/* <img src={img} alt=""  className= "Appimg"></img> */}
      <h3 className="Apptext">News</h3>
      <input style={{ width: "30%", height: "25px",}}
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTitle(e.target.value)}
        
      />
      </div>
      <div className="my-news">
      {loading ? (
        <h4>Loading ...</h4>
      ) : (
        posts
          .filter((value) => {
            if (searchTitle === "") {
              return value;
            } else if (
              value.title.toLowerCase().includes(searchTitle.toLowerCase())
            ) {
              return value;
            }
          })
          
          .map((item) => <li key={item.url}>{item.title}<a href={item.url}> here</a></li>
          
          )
      )}
      
      </div>
    </div>
  );
}

export default App;