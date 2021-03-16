import React, { Component } from 'react';

import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import logo from "./images/logo.jpg";
import educ from "./images/educ.svg";
import {SiFacebook} from 'react-icons/si' ; 
import {FcGoogle} from 'react-icons/fc';
import {MdEmail}  from 'react-icons/md' ; 
import {RiLockPasswordFill} from 'react-icons/ri';
import {FaUserAlt} from 'react-icons/fa';


export default function Inscription() {
  //declaration des var 
    const [Container,setContainer]=React.useState("container");
    const [DivContainer,setDivContainer]=React.useState("forms-container");
    const [nom , setNom] = React.useState("");
    const [prenom , setPrenom] = React.useState("");
    const [email , setEmail] = React.useState("");
    const [emailc , setEmailc] = React.useState("");
    const [pwdc , setPwdc] = React.useState("");
    const [pwd , setPwd] = React.useState("");
    const [mpwd , setMpwd] = React.useState("");

    const [radio , setRadio] = React.useState("nr");


    const handleClickSignUp=()=>{ 
          setContainer(" container sign-up-mode")
          setDivContainer("forms-container sign-up-mode")
        }

    const handleClickSignIn=()=>{
        setContainer(" container ")
        setDivContainer("forms-container")
     }

     

     //modifier le contenu du champ ----nom----
     const handleNom = e => {
      //maitre a jour le state
      setNom(e.target.value  ) }

      //modifier le contenu du champ ----prenom----
      const handlePrenom = e => {
        //maitre a jour le state
        setPrenom(e.target.value  ) }

        //modifier le contenu du champ ----email----
      const handleEmail = e => {
        //maitre a jour le state
        setEmail(e.target.value  ) }

        //modifier le contenu du champ ----pwd----
      const handlePwd = e => {
        //maitre a jour le state
        setPwd(e.target.value  ) }
         //modifier le contenu du champ ----emailc----
      const handleEmailc = e => {
        //maitre a jour le state
        setEmailc(e.target.value  ) }

        //modifier le contenu du champ ----pwdc----
      const handlePwdc = e => {
        //maitre a jour le state
        setPwdc(e.target.value  ) }

        //modifier le contenu du champ ----mpwd----
      const handleMpwd = e => {
        //maitre a jour le state
        setMpwd(e.target.value  ) }
       

    return(
      <div>
        <div class={Container}>
      <div class={DivContainer}>
        <div class="signin-signup">
          <form action="#" class="sign-in-form">
          <img src={logo}  style={{width:"15vh" ,float:"left",marginTop:'5px',marginRight:'20px', borderRadius: "50px"}} align="center" ></img>
            <h2 class="title">Se connecter</h2>

            <div class="input-field">
                <i><MdEmail/></i>
                <input type="email" placeholder="Email" value={emailc} onChange={handleEmailc} required /> 
            </div>
              <div class="input-field">
                <i ><RiLockPasswordFill/></i>
                <input type="password" placeholder="mot de passe" value={pwdc} onChange={handlePwdc} required />
              </div>

          <input type="submit" value="Connexion" class="btn solid" />
          </form>

          
          <form action="#" class="sign-up-form">
            <h3 class="title">S'inscrire</h3>
              <div class="input-field">
                <i><FaUserAlt/></i>
            <input type="text" placeholder="Nom" value={nom} onChange={handleNom}  required/>
            </div>
            <div class="input-field">
                <i><FaUserAlt/></i>
            <input type="text" placeholder="Prenom" value={prenom} onChange={handlePrenom} required/>
            </div>
              <div class="input-field">
                <i><MdEmail/></i>
                <input type="email" placeholder="Email" value={email} onChange={handleEmail} required/> </div>
              <div class="input-field">
                <i ><RiLockPasswordFill/></i>
                <input type="password" placeholder="mot de passe" value={pwd} onChange={handlePwd} required/></div>
              <div class="input-field">
                <i ><RiLockPasswordFill/></i>
                <input type="password" placeholder="Confirmer mot de passe" value={mpwd} onChange={handleMpwd} required/></div>
                <div class="input">
                <label class="social-text" >Vous êtes</label>
               
                 <label  class="social-text"> <input type="radio" onClick={() => setRadio(radio+1)} checked={radio===1 ? true : false}/>Enseignant </label> 
                 <label class="social-text"><input type="radio" onClick={() => setRadio(radio+2)} checked={radio===2? true : false}/>Etudiant</label> 
                
                </div>
                
            <input type="submit" class="btn" value="Créer" />
             
              <div class="social-media">
              <p class="social-text">Inscrivez-vous avec</p>
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



