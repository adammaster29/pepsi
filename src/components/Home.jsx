import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [menu, setMenu] = useState("Amburgueinicial")
    const amburgue = () => {
        setMenu(menu === 'Amburgueinicial' ? "menuAmburgue" : "Amburgueinicial")
    }
    const[buy,setBuy] = useState(false);
    const compras = ()=>{
        setBuy(!buy)
    }
    const navegate = useNavigate();
    const produto  = () =>{
        navegate("/productos");
    }
    const news = ()=>{
        navegate('/news')
    }
    const about = ()=>{
        navegate("/about")
    }
    const contacto = ()=>{
        navegate('/contacto')
    }
    return (
        <div className='padre__home'>
            <nav className="nav__navbar ">
                <img className='navbar__img-logo animate__animated animate__fadeInLeft' src="/img/logo pepsi.png" alt="img" />
                <ul className={menu} >
                    <li onClick={produto}>Products</li>
                    <li onClick={news}>News</li>
                    <li onClick={about}>About us</li>
                    <li onClick={contacto}>Contacts</li>
                </ul>
                <div className="nav__icon-burgue-buy">
                    <i onClick={amburgue} class='bx bx-menu animate__animated animate__fadeInRight'></i>
                    <button onClick={compras} className='navbar__button animate__animated animate__backInDown'>Buy Products</button>
                </div>
                {buy &&(
                    <div className="padre__modal">
                        <div className="hijo__modal">
                        </div>
                    </div>
                )}
            </nav>
            <div className="contenedor__especificaciones ">
                <div className='detalles '>
                    <div className='contenedor__titulo animate__animated animate__fadeInLeft'>
                        <h1 className='titulo'>Pepsi Classic</h1>
                        <p className='subtitulo'>"Pepsi Classic has a characteristic and distinctive flavor that combines sweet and slightly citrus notes. It is known for its refreshing and effervescent taste, and its formula has evolved over the years to stay current and appealing to its consumer base."</p>
                    </div>
                    <div className='contenedor__caja animate__animated animate__fadeInLeft'>
                        <h1>Nutrition facts</h1>
                        <div className='cajas__all'>
                            <div className="caja"><p><span>Nutricional</span><span>100cl</span></p><span className='caja__footer'>7%</span></div>
                            <div className="caja"><p><span>Grasas</span><span>0.0g</span></p><span className='caja__footer'>0%</span></div>
                            <div className="caja"><p><span>Sal</span><span>0.0g</span></p><span className='caja__footer'>1%</span></div>
                            <div className="caja"><p><span>proteinas</span><span>0.0g</span></p><span className='caja__footer'>0.0g</span></div>
                            <div className="caja"><p><span>Azucares</span><span>4.6g</span></p><span className='caja__footer'>13%</span></div>
                        </div>
                    </div>
                    <button className='button-animate animate__animated animate__fadeInLeft'>Buy Now</button>
                    <div className='cantidad__pepsi animate__animated animate__fadeInLeft'>
                        <div className="litros uno">0.3</div>
                        <div className="litros dos">0.33</div>
                        <div className="litros tres">0.5</div>
                        <div className="litros cuatro">1</div>
                        <div className="litros cinco">1.5</div>
                        <div className="litros seis">2</div>

                    </div>
                </div>
                <div className="img__lata animate__animated animate__fadeInRight">
                    <div className="militro__porcentajes-lata">
                        <div className="porcentaje__lata">
                            <p>300 ml</p>
                            <p>pepsi classic</p>
                            <p>sugar 0%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;