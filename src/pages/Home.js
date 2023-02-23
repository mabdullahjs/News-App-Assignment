import axios from 'axios'
import React, { useEffect } from 'react'
import Navbars from './components/Navbar'

function Home() {
    useEffect(() => {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=b91dd222bbd54278a82017a30d38b181')
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [])
    return (
        <div>
            <Navbars />
        </div>
    )
}

export default Home