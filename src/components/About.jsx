import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navegate = useNavigate()
  const home = ()=>{
    navegate("/")
}
    return (
        <div className='about__padre'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffff33" fill-opacity="1" d="M0,32L26.7,26.7C53.3,21,107,11,160,16C213.3,21,267,43,320,58.7C373.3,75,427,85,480,74.7C533.3,64,587,32,640,42.7C693.3,53,747,107,800,138.7C853.3,171,907,181,960,186.7C1013.3,192,1067,192,1120,181.3C1173.3,171,1227,149,1280,165.3C1333.3,181,1387,235,1413,261.3L1440,288L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path></svg>
            <h1 className="about__titulo  animate__animated animate__backInDown  ">About Us</h1>
            <i onClick={home} className='about__home bx bx-home-alt animate__animated animate__zoomInUp '></i>
           <div className="contenedor__text">  
            <p className=' text__about animate__animated animate__zoomInUp '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam nihil maxime aliquid, repellat reiciendis maiores delectus similique eius. Tempora sapiente quam sed molestias tenetur ullam veniam natus soluta nam nihil?
            Aliquam ea, numquam, Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit facere error cum fugit nesciunt. Maxime ex doloremque aliquid accusantium dolore eos quisquam rem reiciendis culpa. Recusandae quasi quisquam placeat possimus.
            Quisquam rerum sapiente temporibus ipsam, porro quas repellendus dolorum nulla expedita laboriosam obcaecati incidunt, totam perspiciatis accusamus voluptate! Non quas soluta laboriosam! Tenetur deleniti maiores vel maxime eos possimus quos. porro id exercitationem quidem, nisi tempore ullam et doloribus ducimus omnis vel! Dignissimos ipsa, nulla quasi maiores odio atque dicta ab, ut incidunt consequatur quam impedit eligendi.
            </p>
            <p className=' text__about text__img animate__animated animate__zoomInUp '>
                <img src="/img/empleado.jpg" alt="empleado" />
                <img src="/img/empleado-2.jpg" alt="empleados" />
            </p>
            </div>
        </div>
    );
};

export default About;