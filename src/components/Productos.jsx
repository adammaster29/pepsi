import React from 'react';
import { useNavigate } from 'react-router-dom';

const Productos = () => {
    const navegate = useNavigate()
    const home = ()=>{
        navegate('/')
    }
    return (
        <div className='padre__producto'>
            <svg className='svg-contenedor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="0.2" d="M0,224L30,208C60,192,120,160,180,128C240,96,300,64,360,53.3C420,43,480,53,540,80C600,107,660,149,720,170.7C780,192,840,192,900,170.7C960,149,1020,107,1080,101.3C1140,96,1200,128,1260,117.3C1320,107,1380,53,1410,26.7L1440,0L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>
            <h1 className='producto__titulo animate__animated animate__fadeInBottomRight'>productos</h1>
            <i onClick={home} className='producto__home bx bx-home-alt animate__animated animate__zoomInUp '></i>
            <div className="producto__cards">
                <div className="card animate__animated animate__bounceInDown">
                    <img src="/img-producto/gatorade.png" alt="gatorade" />
                    <p className="card__subtitulo">GATORADE</p>
                </div>
                <div className="card card__animate-dos animate__animated animate__bounceInDown">
                    <img src="/img-producto/pepsi-lata.png" alt="pepsi-lata" />
                    <p className="card__subtitulo">PEPSI LATA</p>
                </div>
                <div className="card card__animate-tres animate__animated animate__bounceInDown">
                    <img src="img-producto/mountaindew.png" alt="mountaindew" />
                    <p className="card__subtitulo">NOUNTAINDEW</p>
                </div>
                <div className="card card__animate-cuatro animate__animated animate__bounceInDown">
                    <img src="img-producto/pepsi botella.png" alt="pepsi-botella" />
                    <p className="card__subtitulo">PEPSI BOTELLA</p>
                </div>
                <div className="card card__animate-cinco animate__animated animate__bounceInDown">
                    <img src="img-producto/pepsi-lata-negra.png" alt="" />
                    <p className="card__subtitulo">PEPSI  NEGRA</p>
                </div>
                <div className="card card__animate-seis animate__animated animate__bounceInDown">
                    <img src="img-producto/aquafina.png" alt="aquafina" />
                    <p className="card__subtitulo">AQUAFINA</p>
                </div>
            </div>
        </div>
    );
};

export default Productos;