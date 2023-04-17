import {useEffect, useState} from "react";
import axios from "axios";
import "./News.css"
import bannerNews from "../../Assets/img/banners/banner-news.jpg"



const News = () => {
    let [news, setNews] = useState([]);
    useEffect(() => {
        axios.get('https://gnews.io/api/v4/top-headlines?category=technology&lang=en&country=us&max=8&apikey=e9ae6b098326b3733f3d92790db39f50')
            .then(response => {
                setNews(response.data.articles)
            })

    },[])
    return(
        <div className="news-block">
            <img className="banner-news" src={bannerNews} alt="banner"/>
            <h2>NEWS</h2>

            <div className="card-news">
                {
                    news.map( (card) => {
                        return (
                            <div className="card">
                                <img className="card-image" src={card.image} alt="article"/>
                                <h3>{card.title}</h3>
                                <p>{card.description}</p>
                                <p>{card.content}</p>
                          </div>
                        )
                    })
                }
            </div>

        </div>

    )
}
export default News