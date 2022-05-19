import './Nav.css';
import React from 'react';

function Nav () {
    return (
        <nav class="menu">
            <input type="checkbox" id="chk-menu"> </input>
            <label for="chk-menu" class="btn-menu">
                <i class="fa-solid fa-bars" ></i>
            </label>
            <li class="item"> <a href="index.html"> Inicio </a> </li>
            <li class="item"> <a href="index.html"> Galeria </a> </li>
            <li class="item"> <a href="index.html"> Productos </a> </li>
            <li class="item"> <a href="index.html"> Talleres </a> </li>
            <li class="item">

           
                <select>
                    <option value="0">Tu cuenta</option>
                    <option value="1">Crear cuenta</option>
                </select>
                 </li>
                 <li class="item"> <input type="text" placeholder="Buscar"> </input> </li>  
           
        </nav>
    )
}
export default Nav;
