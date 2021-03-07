import React, { Component } from 'react';

import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import {SiFacebook} from 'react-icons/si' ; 
import {FcGoogle} from 'react-icons/fc'


export default function Inscription() {
    const [Container,setContainer]=React.useState("container")
    const[DivContainer,setDivContainer]=React.useState("forms-container")
    const handleClickSignUp=()=>{ 
          setContainer(" container sign-up-mode")
          setDivContainer("forms-container sign-up-mode")
        }

    const handleClickSignIn=()=>{
        setContainer(" container ")
        setDivContainer("forms-container ")
     }

    return(
      <div>
        <div class={Container}>
      <div class={DivContainer}>
        <div class="signin-signup">
          <form action="#" class="sign-in-form">
            <h2 class="title">Se connecter</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Nom d'utilisateur" /> </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="mot de passe" /> </div>
          <input type="submit" value="Connexion" class="btn solid" />
            <p class="social-text">Connectez-vous avec</p>
            <div class="social-media">
              <a href="#" class="social-icon">
              <SiFacebook/>
              </a>
              <a href="#" class="social-icon">
              <FcGoogle/>
              </a></div>
          </form>
          <form action="#" class="sign-up-form">
            <h2 class="title">S'inscrire</h2>
              <div class="input-field">
                <i class="fas fa-user"></i>

            <input type="text" placeholder="Nom d'utilisateur" /></div>
              <div class="input-field">
                <i class="fas fa-envelope"></i>
                <input type="email" placeholder="Email" /> </div>
              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="mot de passe" /></div>
              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Confirmer mot de passe" /></div>

            <input type="submit" class="btn" value="Créer" />
              <p class="social-text">Inscrivez-vous avec</p>
              <div class="social-media">
                <a href="#" class="social-icon">
                <SiFacebook/>
                </a>
                <a href="#" class="social-icon">
                <FcGoogle/>
                </a></div>
          </form>
        </div>
      </div>

      <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <h3>Welcome To Uniswap</h3>
            <p>
          Créez un compte et et swapez avec vos profs et vos amis !
            </p>
            <button class="btn transparent" id="sign-up-btn" onClick={handleClickSignUp}>
                Inscription
            </button>
          </div>
          <img src="img/log.svg" class="image" alt="" />
        </div>
        <div class="panel right-panel">
          <div class="content">
            <h3>Vous possedez déja un compte ?</h3>
            <p>
             Connectez-vous alors !
            </p>
            <button class="btn transparent" id="sign-in-btn" onClick={handleClickSignIn} >
              Connexion
            </button>
          </div>
          <img src="img/register.svg" class="image" alt="" />
        </div>
      </div>
    </div>
</div>  
        )
    
}



