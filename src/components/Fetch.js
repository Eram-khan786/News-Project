import React, { useEffect, useState } from "react";
import axios from "axios";

const Fetch = ({category}) => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios
      .get(
        category?`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=7a270aaa599f45e4af7ed94815b2a31a`:
        "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7a270aaa599f45e4af7ed94815b2a31a"
      )
      .then((res) => {
        console.log(res.data.articles);
        setData(res.data.articles);
      })
      .catch((error) => {
        console.log(error);useEffect(() => {
            const apiUrl = category
              ? `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=7a270aaa599f45e4af7ed94815b2a31a`
              : "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7a270aaa599f45e4af7ed94815b2a31a";
          
            console.log("API URL:", apiUrl);
          
            axios
              .get(apiUrl)
              .then((res) => {
                console.log(res.data.articles);
                setData(res.data.articles);
              })
              .catch((error) => {
                console.log(error);
              });
          }, [category]);
          
      });
  }, [category]);

  return (
    <div className="container my-5">
      <h1>
        <u>Top Headlines</u>
      </h1>
      <div className="d-flex flex-column align-items-center">
        {data.map((ele, index) => (
          <div key={index} className="container my-3" style={{ width: "700px",boxShadow:"2px 5px 7px" }}>
            <h5>{ele.title}</h5>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <img src={ele.urlToImage} alt="Image Not Found" className="image-fluid" style={{ width: "auto", height: "300px", objectFit: "cover" }} />
            </div>
           
            <p>{ele.description}</p>
            <p>{ele.content}</p>
            <a href={ele.url} target="_blank" rel="noopener noreferrer">View More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fetch;
