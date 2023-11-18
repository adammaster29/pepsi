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
            <svg className='contacto__svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000b76" fill-opacity="1" d="M0,256L1440,32L1440,0L0,0Z"></path></svg>
           <div>  <h1 className='contacto__title animate__animated animate__bounceInDown'>CONTACTOS</h1>
            <i onClick={home} className='contacto__home bx bx-home-alt animate__animated animate__zoomInUp '></i>
            </div>
                {/* ***********sol y nube********** */}
                
       <div className="contacto__contenedor-cards animate__animated animate__bounceInUp">
       <img className='contacto-nube animate__animated animate__bounceInLeft' src="/img/nube.png" alt="" />
       </div>

       <div className="contacto__tarjetas ">
        <div className="tarjeta animate__animated animate__bounceInLeft">
        <i onClick={correo} class='bx bx-mail-send animate__animated animate__bounceInDown'></i>
        <i  onClick={correo} class='bx bxl-github animate__animated animate__bounceInDown'></i>
        <i  onClick={correo} class='bx bxl-whatsapp-square animate__animated animate__bounceInDown' ></i>
        </div>
       </div>
         </div>
        
    );
};

export default Contacts;