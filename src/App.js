import us from '../src/kateryna-ivanova-Tazf11eJaDk-unsplash2.jpg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import React, { useEffect, useRef } from 'react';
import "aos/dist/aos.css"
import Aos from 'aos';
import whataspp from "../src/w.png";
import facebook from "../src/f.png";
import instagram from "../src/i.png";
import 'bootstrap';
import logo from "../src/logor1.png"
import img1 from "../src/productos/Imagen1.jpg"
import img2 from "../src/productos/Imagen2.jpg"
import img3 from "../src/productos/Imagen3.jpg"
import img4 from "../src/productos/Imagen4.jpg"
import img5 from "../src/productos/Imagen5.jpg"
import img6 from "../src/productos/Imagen6.jpg"
import img7 from "../src/productos/Imagen7.jpg"
import img8 from "../src/productos/Imagen8.jpg"
import img9 from "../src/productos/Imagen9.jpg"
import img10 from "../src/productos/Imagen10.jpg"
import img11 from "../src/productos/acidofosforico.jpeg"
import img12 from "../src/productos/Imagen12.jpg"
import img13 from "../src/productos/pro.png"
import img14 from "../src/productos/Agrofulca.jpeg"
import emailjs from '@emailjs/browser';
import mision from "../src/productos/mision.jpg"
import vision from "../src/productos/vision.jpg"
import portada from "../src/portada.jpg"
import logo1 from "../src/logo1.png"
import logo2 from "../src/logo2.png"
import asesoria from "../src/instruccion.jpg"
import $ from 'jquery';
function App() {
  useEffect(() => {
    $('article').hide();
    $('#2').show();

    $('select').change(function () {
      $('article').hide();
      var a = $(this).val();
      $("#" + a).show();
    });
  }, []);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_x8chgp7', 'template_pf2fdwq', form.current, 'tL_5_LssMfxChReg0')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };
  useEffect(() => {

    Aos.init({ duration: 2000 })
  }, []);
  return (
    <div>

      <nav class="navbar fixed-top navbar-expand-lg">
        <img className='logo' src={logo}></img>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">

          <ul class="navbar-nav  mx-auto justify-content-end">

            <li class="nav-item active">
              <a class="nav-link" href="#">INICIO </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#nosotros">NOSOTROS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#productos">PRODUCTOS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#beneficios">BENEFICIOS</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#contacto">CONTACTO</a>
            </li>


          </ul>

        </div>
      </nav>






      <div class="home" data-aos="fade-up">
        <div className='iniciop'>
          <div className='inicio'>
            <div class="col-md-6">

              <h4 data-aos="fade-up" class="subheading">AGROMOBER SAS</h4>
              <p data-aos="fade-up" className='pres'>"Somos una empresa dedicada a la comercialización de insumos agrícolas tales como fertilizantes, insecticidas y funguicidas ofreciendo asistencia técnica y garantizando la calidad de los productos."</p>
            </div>

            <div class="col-md-6">
              <img data-aos="fade-up" className='img-inicio' src={portada} class="img-fluid" alt="" />
            </div>
          </div>
        </div>
        <div class="row justify-content-center text-center">
          <div class="col-md-8 col-lg-10">
            <div class="header">

              <h3>Aliados</h3>

            </div>
            <div class="row">

              <div class="col-md-12">
                <p className='pres'>Agromober cuenta con el respaldo de sus proveedores los cuales tienen reconocimiento nacional e internacional por la calidad y reconocimientos de sus productos.</p>
              </div>
              <div class="col-md-6">
                <img className="img2" data-aos="fade-up" src={logo2} alt="" />
              </div>
              <div class="col-md-6">
                <br></br>
                <img data-aos="fade-up" className='img-inicio' src={logo1} alt="" />
              </div>

            </div>
            <br></br>  <br></br>
          </div>
        </div>
      </div>
      <div >
        <div >
          <img data-aos="fade-up" src={us} className='img' alt="Responsive image" />
        </div>

      </div>
      <div class="iniciop" id='nosotros'>

        <div data-aos="fade-up" class="col-md-12">


          <p class="pres">Agromober SAS es una empresa familiar que fue constituida en noviembre del año 2019,
            gracias a la generación de nuevas alternativas de comercio relacionado con el sector
            agrícola de Colombia, con la que se ha buscado suplir las necesidades del sector
            agropecuario incrementando la productividad de sus cultivos; permitiéndonos crecer de
            manera exponencial y posicionarnos en el mercado en relación con la cadena productiva
            y necesidades de nuestro campo. </p>

        </div>
      </div>
      <br></br>
      <div class="row">
        <div data-aos="fade-up" class="col-md-6">
          <h3 >MISIÓN</h3>
          <div className='left-c' >
            <br></br>
            <img data-aos="fade-up" src={mision} className='img-i' alt="Responsive image" />
          </div>
        </div>

        <div data-aos="fade-up" class="col-md-6">
          <br /><br /><br /><br /><br />
          <p className='tex'>Agromober S.A.S es una empresa dedicada a la comercialización de insumos agrícolas
            tales como fertilizantes, insecticidas, funguicidas de alta calidad y asistencia técnica que
            permitan a nuestros agricultores obtener cosechas de excelente calidad que cumplan con
            las buenas prácticas agrícolas y el cuidado del medio ambiente, generándoles una
            excelente producción y mayor rentabilidad. </p>
        </div>
      </div>

      <br></br><br></br><br></br><br></br>
      <div class="row">
        <div data-aos="fade-up" class="col-md-6">
          <h3 >VISIÓN</h3>
          <div className='left-c' >
            <br></br>
            <img data-aos="fade-up" src={vision} className='img-i ' alt="Responsive image" />
          </div>


        </div>
        <div data-aos="fade-up" class="col-md-6">
          <br></br> <br></br><br /><br /><br />
          <p className='tex'>Ser en el año 2027 una empresa establecida en el mercado agropecuario colombiano,
            reconocidos como una compañía líder, dedicada a la distribución de productos de alta
            calidad, que se ajustan a las necesidades del agricultor, logrando una satisfacción de un
            buen servicio y acompañamiento a nuestros clientes.</p>
        </div>
      </div>

      <br></br>  <br></br>  <br></br><br></br>  <br></br>  <br></br>
      <div class="row justify-content-center text-center">
        <div class="col-md-8 col-lg-6">
          <div class="header" id='productos'>
            <h3>Productos</h3>

          </div><br></br>  <br></br>
        </div>
        <div>
          <select className='filtro' >
            <option value="2" selected="selected">FERTILIZANTES HIDROSOLUBLES</option>
            <option value="1">FERTILIZANTES GRANULADOS</option>
            <option value="3">FERTILIZANTES LÍQUIDOS</option>
            <option value="4">INSUMOS AGRICOLAS: FOLIARES</option>
            <option value="5">Insecticidas y Fungicidas</option>
          </select></div>

      </div>



      <div >
        <article id="1" class="row">
          <p className='tex'>FERTILIZANTES GRANULADOS</p>
          <div data-aos="flip-up" class="col-md-3">
            <div class="product-wrapper mb-45 text-center">
              <div class="img__wrap">
                <img src={img12} class="img-fluid1" alt="Responsive image" />
                <i class="img__description">Qrop® nitrato de potasio, aborda los cultivos y condiciones de suelo más específicas, permitiéndote obtener el máximo rendimiento, ya que entrega los nutrientes necesarios para una correcta nutrición, como el potasio y el nitrógeno nítrico. En forma granulada</i>
                <span>QROP KS</span>
              </div> </div>
          </div>
          <div data-aos="flip-up" class="col-md-3">
            <div class="product-wrapper mb-45 text-center">
              <div class="img__wrap">
                <img src={img10} class="img-fluid1" alt="Responsive image" />
                <i class="img__description">Cloruro de potasio granular y estándar (soluble) alta fuente de potasio </i>
                <span>CLORURO DE POSTASIO</span>
              </div> </div>
          </div>
        </article>
        <article id="2" class="row">

          <p className='tex'>FERTILIZANTES HIDROSOLUBLES</p>
          <div data-aos="flip-up" class="col-md-3">
            <div class="product-wrapper mb-45 text-center">
              <div class="img__wrap">
                <img src={img13} class="img-fluid" alt="Responsive image" />
                <i class="img__description">El Nitrato de potasio es un fertilizante hidrosoluble   que suministra los macronutrientes a la planta de la forma más concentrada y rapida para mejorar su produccion.</i>
                <span>NITRATO DE POSTASIO</span>
              </div> </div>
          </div>
          <div data-aos="flip-up" class="col-md-3">
            <div class="product-wrapper mb-45 text-center">
              <div class="img__wrap">
                <img src={img4} class="img-fluid1" alt="Responsive image" />
                <i class="img__description">Fórmula diseñada para estimular la brotación y desarrollo de raíces, tallos y hojas, gracias a sus nutrientes balanceados y alto contenido de fósforo para ser usado específicamente durante las primeras semanas del ciclo vegetativo.</i>
                <span>AMISOL INICIAL</span>
              </div>
            </div>
          </div>
          <div data-aos="flip-up" class="col-md-3">
            <div class="product-wrapper mb-45 text-center">
              <div class="img__wrap">
                <img src={img8} class="img-fluid" alt="Responsive image" />
                <i class="img__description">Fórmula diseñada para el proceso más intensivo en el ciclo del cultivo: desde la floración hasta la formación del fruto, donde el potasio es responsable del transporte de carbohidratos desde las hojas a los órganos reproductivos (fruta, semilla, tubérculo) para obtener mayor calibre, mejor calidad y peso.</i>
                <span>AMISOL PRODUCCIÓN</span>
              </div> </div>
          </div>
          <div data-aos="flip-up" class="col-md-3">
            <div class="product-wrapper mb-45 text-center">
              <div class="img__wrap">
                <img src={img7} class="img-fluid" alt="Responsive image" />
                <i class="img__description">Fórmula diseñada para ser usada en cualquier etapa de crecimiento y desarrollo, además puede corregir deficiencias nutricionales cuando es difícil de identificar la causa de esta deficiencia. Contiene un completo rango de macro y micronutrientes</i>
                <span>AMISOL MULTIPROPOSITO</span>
              </div> </div>
          </div>
          <div data-aos="flip-up" class="col-md-3">
            <div class="product-wrapper mb-45 text-center">
              <div class="img__wrap">
                <img src={img5} class="img-fluid" alt="Responsive image" />
                <i class="img__description">El Nitrato de Potasio es también un fuerte antagonista de los Cloruros, evitando que sean absorbidos por las plantas cultivadas en suelos/aguas de alta salinidad.
                  Producto  utilizado en programas de fertilización vía riego por goteo, microjet, microaspersión y fertilización foliar en flores, frutales, hortalizas y cultivos tradicionales.
                </i>
                <span>AMISOL KP</span>
              </div> </div>
          </div>

          <div data-aos="flip-up" class="col-md-3">
            <div class="product-wrapper mb-45 text-center">
              <div class="img__wrap">
                <img src={img6} class="img-fluid" alt="Responsive image" />
                <i class="img__description">Contiene 52% de P2O5 y 34% de K2O. es el producto soluble en agua más concentrado con un total de 86% de nutrientes. La ausencia de nitrógeno amoniacal permite el uso de Amilsol® MKP en todos los sistemas intensivos de producción agrícola. Posee muy bajos contenidos de cloruro, sodio y metales pesados. </i>
                <span>AMISOL MKP</span>
              </div> </div>

          </div>

        </article>
        <article id="3" class="row">
          <p className='tex'>FERTILIZANTES LÍQUIDOS</p>
          <div data-aos="flip-up" class="col-md-3">
            <div class="product-wrapper mb-45 text-center">
              <div class="img__wrap">
                <img src={img2} class="img-fluid" alt="Responsive image" />
                <i class="img__description">Fertilizante liquido nitrato de Magnesio, especifico para fertirriego y foliar. </i>
                <span> AGROFUL Mg</span>
              </div>
            </div>
          </div>
          <div data-aos="flip-up" class="col-md-3">
            <div class="product-wrapper mb-45 text-center">
              <div class="img__wrap">
                <img src={img3} class="img-fluid" alt="Responsive image" />
                <i class="img__description">Fertilizante liquido de  nitrato de Potasio  específico para fertirriego y foliar. </i>
                <span>AGRONIK SABANA</span>
              </div>
            </div>
          </div>
          <div data-aos="flip-up" class="col-md-3">
            <div class="product-wrapper mb-45 text-center">
              <div class="img__wrap">
                <img src={img11} class="img-fluid" alt="Responsive image" />
                <i class="img__description">Fertilizante simple P liquido concentrado soluble</i>
                <span>ACIDO FOSFORICO</span>
              </div>
            </div>
          </div>
          <div data-aos="flip-up" class="col-md-3">
            <div class="product-wrapper mb-45 text-center">
              <div class="img__wrap">
                <img src={img14} className="img-fluid" alt="Responsive image" />
                <i class="img__description">Fertilizante simple N para la aplicación al suelo mediante sitemas de fertirriego </i>
                <span>NITRATO DE POSTASIO</span>
              </div>
            </div>
          </div>

        </article>

      </div>
      <article id="4" class="row">
        <p className='tex'>INSUMOS AGRICOLAS: FOLIARES</p>
        <div class="col-md-3">
          <div class="product-wrapper mb-45 text-center">
            <div class="img__wrap">
              <img src={img9} class="img-fluid" alt="Responsive image" />
              <i class="img__description">Línea de fertilizantes foliares a base de aminoácidos para los diferentes  estados fenológicos del cultivo</i>
              <span>AMINOCOL</span>
            </div>

          </div>

        </div>
      </article>
      <article id="5" class="row">
        <p className='tex'>Insecticidas y Fungicidas</p>
        <div class="col-md-3">
          <div class="product-wrapper mb-45 text-center">
            <div data-aos="flip-up" class="img__wrap">
              <img src={img1} class="img-fluid" alt="Responsive image" />
              <i class="img__description">Fungicida y bactericida  para aplicación al suelo para control de patógenos  a base de yodo</i>
              <span >AGRODYNE SL</span>
              <div class="product-action">
              </div>
            </div>

          </div>

        </div>
      </article>
      <div class="row justify-content-center text-center">
        <div class="col-md-8 col-lg-6">
          <div class="header">

            <h3>SERVICIOS</h3>

          </div>
          <br></br>  <br></br>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <p className='tex'>Asesorías profesionales:</p>
          <p className='pres' > Asistencia técnica en cultivos de clima frio,
            Capacitaciones, implementación de registro ICA, Buenas prácticas
            Agrícolas (BPA) en cultivo y viveros.</p>
        </div>
        <div class="col-md-6">
          <img data-aos="fade-up" className='img-inicio1' src={asesoria} alt="" />
        </div>
      </div>
      <br></br>   <br></br>   <br></br>
      <div class="row">
        <div class="col-md-6">
          <p className='tex'>Mapeo con drone:</p>
          <p className='pres' > Medición de fincas, cultivos, producción,
            rendimiento con rapidez y precisión; aplicación en explotaciones
            ganaderas para localización de animales.</p>
        </div>
        <div class="col-md-6">
          <img data-aos="fade-up" className='img-inicio1' src=" https://images.unsplash.com/photo-1519482859092-6e854b0f2c5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
        </div>
      </div>
      <br id='beneficios'></br>  <br></br>  <br></br>  <br></br>
      <div class="row justify-content-center text-center">
        <div class="col-md-8 col-lg-6">
          <div class="header">

            <h3>Beneficios</h3>

          </div>
          <br></br>  <br></br>
        </div>
      </div>
      <div class="row" >
        <div data-aos="fade-in" data-aos-duration="3000" class="col-md-4">
      
          <img data-aos="fade-up" className='img-inicio1' src="https://images.unsplash.com/photo-1603218200734-775810ca3715?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=790&q=80" alt="" />

          <p >• Fuente de potasio libre de cloruros.</p>
          <p >• Elevada solubilidad, lo que permite un fácil manejo en riego tecnificado. </p>
        </div>
        <div data-aos="fade-in" data-aos-duration="3500" class="col-md-4">

       
          <p >• Unica fuente de N que no acidifica suelos tropicales</p>
          <p >• Aumenta la resistencia de flores y vegetales al estrés hídrico y biótico.  </p>


          <img data-aos="fade-up" className='img-inicio1' src="https://images.unsplash.com/photo-1457530378978-8bac673b8062?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80
          " alt="" />
        </div>
        <div data-aos="fade-in" data-aos-duration="4000" class="col-md-4">
     

          <img data-aos="fade-up" className='img-inicio1' src="https://images.unsplash.com/photo-1618158807378-35769f30af82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80
          " alt="" />

          <p >• Mayor uniformidad de la aplicación, al lograr una solución nutritiva estable y uniforme</p>
          <p >• Ahorro en el mantenimiento de los equipos de riego, al disminuir los problemas de obturación de los goteros  </p>
          <p >• El aporte de potasio permite obtener altos rendimientos y cosechas de alta calidad de exportación.   </p>
        </div>
      </div>
      <br></br><br></br><br></br><br></br>
      <div class="row justify-content-center text-center">
        <div id='contacto' class="col-md-8 col-lg-6">
          <div class="header">
            <h3>Contacto</h3>

          </div>
        </div>
        <br></br><br></br><br></br><br></br>
      </div>
      <div class="row">
        <div class="col-md-6" data-aos="fade-up">

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2221.6808727006787!2d-74.36494658746707!3d4.35193594297023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f04fe8dd70417%3A0x664d43af43fe13e!2sCra.%208%20%23423%2C%20Sabaneta%2C%20Fusagasug%C3%A1%2C%20Cundinamarca!5e0!3m2!1ses!2sco!4v1686096966511!5m2!1ses!2sco"
            className='mapa' style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


        </div>
        <div class="col-md-6" data-aos="fade-up">


          <div className='center'>
            <form ref={form} onSubmit={sendEmail} className='form-controller'>
              <input class="text" name='from_name' type='text' placeholder='Nombre completo' />
              <input class="text" name='correo' type='text' placeholder='Correo electronico' />
              <input class="text" name='telefono' type='number' placeholder='Numero de telefono' />
              <textarea class="textm" name='message' type="text" placeholder='Mensaje' />
              <button type='submit' class="btn btn-success">Enviar</button>
            </form>
          </div>

          <br></br>
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-md-3" >
          <p>Correo: <br />  contacto@agromober.com <br />
            agromobersas@gmail.com</p>
        </div>
        <div class="col-md-3" >

          <p >Telefono: <br /> (+57) 3142077966<br />(+57) 3147681895<br />(+57) 3115314053</p>
        </div>
        <div class="col-md-3" >
          <p >Dirección: <br /> Carrera 8 No. 4-23 Fusagasugá</p>
        </div>
        <div class="col-md-3" >
          <p >Horario: <br /> lunes a viernes: 7:30 am a 12:00m <br /> 1:00 pm a 5:00 pm
            <br /> sábados: 7:30 am a 1:00 pm</p>
        </div>

      </div>
      <br /> <br />
      <footer class=" text-center text-lg-start">

        <div className='row'>
          <div class="col-md-8" >
            <div className='dereca'>
              <div class="text-center p-3" >

                <a class="text-white">© 2023 Copyright:  AGROMOBER   </a>

              </div>
            </div>
          </div>
          <div class="col-md-4" >

            <div className='dereca'>
              <div className='m-a-c'> Por: Ecoproyectsas</div>
            </div>
          </div>
        </div>

      </footer>
      <div id='delegar' fill="currentColor" >
        <a href='https://www.instagram.com/agromobersas/'>
          <img className='i1' src={instagram}></img>
        </a>
      </div>

      <div id='delegar1' fill="currentColor" >
        <a href='https://www.facebook.com/profile.php?id=100093497696980&mibextid=ZbWKwL'>
          <img className='i2' src={facebook}></img>
        </a>
      </div>
      <div id='delegar2' fill="currentColor" >
        <a href='https://wa.me/3142077966'>
          <img className='i3' src={whataspp}></img>
        </a>
      </div>
    </div>
  );
}

export default App;
