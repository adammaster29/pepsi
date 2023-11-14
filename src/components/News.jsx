import React from 'react';
import { useNavigate } from 'react-router-dom';

const News = () => {
    const navegate = useNavigate()
    const home = ()=>{
        navegate('/')
    }
    return (
        <div className='padre__news'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000b76" fill-opacity="1" d="M0,320L40,298.7C80,277,160,235,240,208C320,181,400,171,480,170.7C560,171,640,181,720,181.3C800,181,880,171,960,186.7C1040,203,1120,245,1200,266.7C1280,288,1360,288,1400,288L1440,288L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
           <h1 className='news__titulo animate__animated animate__flip'>News</h1>
           <i onClick={home} className='about__news bx bx-home-alt animate__animated animate__zoomInUp '></i>
           <div className="news__grid">
            <div className="grid__cards one animate__animated animate__fadeInDownBig">
                <h2>Pepsico</h2>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta et, numquam atque quibusdam maxime sequi totam sunt ratione, odit ipsum mollitia aperiam vero quae pariatur officia nam natus optio nisi.
                Aut exercitationem illo veniam dignissimos sequi reprehenderit, ipsa minus beatae neque, maxime illum et quia quaerat ea possimus soluta ab nulla, at doloribus error impedit magnam. Earum aliquid molestiae iste?</p>
            </div>
            <div className="grid__cards two animate__animated animate__fadeInDownBig">
                <h2>Noticias</h2>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta et, numquam atque quibusdam maxime sequi totam sunt ratione, odit ipsum mollitia aperiam vero quae pariatur officia nam natus optio nisi.
                Aut exercitationem illo veniam dignissimos sequi reprehenderit, ipsa minus beatae neque, maxime illum et quia quaerat ea possimus soluta ab nulla, at doloribus error impedit magnam. Earum aliquid molestiae iste?</p>
            </div>
            <div className="grid__cards three animate__animated animate__fadeInUpBig">
                <h2>Mision</h2>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta et, numquam atque quibusdam maxime sequi totam sunt ratione, odit ipsum mollitia aperiam vero quae pariatur officia nam natus optio nisi.
                Aut exercitationem illo veniam dignissimos sequi reprehenderit, ipsa minus beatae neque, maxime illum et quia quaerat ea possimus soluta ab nulla, at doloribus error impedit magnam. Earum aliquid molestiae iste?</p>
            </div>
            <div className="grid__cards four animate__animated animate__fadeInUpBig">
                <h2>Vision</h2>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta et, numquam atque quibusdam maxime sequi totam sunt ratione, odit ipsum mollitia aperiam vero quae pariatur officia nam natus optio nisi.
                Aut exercitationem illo veniam dignissimos sequi reprehenderit, ipsa minus beatae neque, maxime illum et quia quaerat ea possimus soluta ab nulla, at doloribus error impedit magnam. Earum aliquid molestiae iste?</p>
            </div>
            <div className="grid__cards five animate__animated animate__fadeInUpBig">
                <h2>Demas</h2>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta et, numquam atque quibusdam maxime sequi totam sunt ratione, odit ipsum mollitia aperiam vero quae pariatur officia nam natus optio nisi.
                Aut exercitationem illo veniam dignissimos sequi reprehenderit, ipsa minus beatae neque, maxime illum et quia quaerat ea possimus soluta ab nulla, at doloribus error impedit magnam. Earum aliquid molestiae iste?</p>
            </div>
            
           </div>
            </div>
    );
};

export default News;