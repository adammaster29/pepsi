import React from 'react';
import { useNavigate } from 'react-router-dom';
const Contacts = () => {
    const navegate = useNavigate()
    function home (){
        navegate('/')
    };
  function correo (){
    alert('Hola esta es una prueba gracias por visitarme')
  }

  
    return (
        <div className='padre__contacto'>
           <div className='contacto__title'> 
             <h1 className='title animate__animated animate__bounceInDown'>CONTACTOS</h1>
             <img onClick={home} className='contacto__home bx bx-home-alt animate__animated animate__zoomInUp ' src="/img/home.gif" alt="" />
            </div>
                {/* ***********sol y nube********** */}
                
       <div className="contenedor__sol animate__animated animate__bounceInUp">
        <div className="sol"></div>
       <img className='nube animate__animated animate__bounceInLeft' src="/img/nube.png" alt="" />
       </div>

       {/* <div className="contacto__tarjetas "> */}
        <div className="contacto__icon-barco ">
       <img className='barco animate__animated animate__bounceInLeft' src="/img/barco.gif" alt="barco" />

       <div className="icon">
       <i onClick={correo} class='bx bx-mail-send animate__animated animate__bounceInDown'></i>
        <i  onClick={correo} class='bx bxl-github animate__animated animate__bounceInDown'></i>
        <i  onClick={correo} class='bx bxl-whatsapp-square animate__animated animate__bounceInDown' ></i>
       </div>
        </div>
       </div>
        //  </div>
        
    );
};

export default Contacts;