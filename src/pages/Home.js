import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [news, setNews] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=b91dd222bbd54278a82017a30d38b181')
            .then((res) => {
                setNews(res.data.articles);
                console.log(res.data.articles);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    const navigation = (e)=>{
        navigate(`/news/${e.author}` , {
            state:{
                e
            }
        })
    }
    return (
        <div>
            <div className="container text-center">
                <div className="row">
                    {news.map((item, index) => {
                        return <div key={index} className="col">
                            <Card style={{ width: '18rem', marginBottom: '2rem' }}>
                                <Card.Img style={{ width: '100%', height: '10rem' }} variant="top" src={item.urlToImage} />
                                <Card.Body>
                                    <Card.Title>{item.title.slice(0, 45) + '...'}</Card.Title>
                                    <Card.Text>
                                        {item.description.slice(0, 80) + '.....'}
                                    </Card.Text>
                                    <Button variant="primary" onClick={()=> navigation(item)}>Click Here</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home