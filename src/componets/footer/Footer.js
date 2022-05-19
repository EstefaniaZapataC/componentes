import './Footer.css';
import React from 'react';


function Footer() {
    return (
        <footer>
            <section class="footer-op">
            

                <section id="footer-con-info">
                    <article class="footer-info">
                        <h2 class="footer-title"> Cuenta </h2>
                        <ul> 
                            <li> Mi cuenta</li>
                            <li> Registrarse </li>
                            <li> Busqueda </li>
                        </ul>
                        </article> 
                        <article clas="footer-info">
                            <h2 class="footer-tittle">Envios</h2>
                            <ul>
                                <li> Bogota </li>
                                <li> Cali </li>
                                <li> Medellin </li>
                            </ul>
                        </article>

                        <article clas="footer-info">
                            <h2 class="footer-tittle">Contacto</h2>
                            <div class="footer-contact-sm">

                                <p> 300 123 41 54 </p>
                                <p> 300 123 41 54 </p>
                                <p> pigmento@gmail.com </p>
                            </div>
                        </article>

                        <article clas="footer-info">
                            <h2 class="footer-tittle">Contactanosv</h2>
                            <form  id="footer-form">
                                <input class="footer-form-input" type="email" placeholder='correo electronico'></input>
                                <textarea name='mensaje' placeholder='Dejanos tu mensaje aqui'> </textarea> 
                                <input class='btn-enviar' type='submit' value='enviar'> </input>
                                </form>

                            
                            
                        </article>
                        </section>
            </section>
        </footer>

);
}
export default Footer;