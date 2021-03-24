import React from "react";

import logo from "./images/logo.jpg";

import { SiFacebook } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

import Useform from "./Useform";
import Validate from "./Validate";

export default function Inscription({ submitForm }) {
  const [Container, setContainer] = React.useState("container");
  const [DivContainer, setDivContainer] = React.useState("forms-container");
  const handleClickSignUp = () => {
    setContainer(" container sign-up-mode");
    setDivContainer("forms-container sign-up-mode");
  };

  const handleClickSignIn = () => {
    setContainer(" container ");
    setDivContainer("forms-container");
  };

  const [value, setValue] = React.useState(2);
  const handleRadio = (val) => setValue(val);

  const { handleChange, values, handleSubmit, errors } = Useform(
    submitForm,
    Validate
  );

  return (
    <div>
      <div class={Container}>
        <div class={DivContainer}>
          <div class="signin-signup">
            <form action="#" class="sign-in-form" onSubmit={handleSubmit}>
              <img
                src={logo}
                alt=""
                style={{
                  width: "15vh",
                  float: "left",
                  marginTop: "5px",
                  marginRight: "20px",
                  borderRadius: "50px",
                }}
                align="center"
              ></img>
              <h2 class="title">Se connecter</h2>

              <div></div>

              <div class="input-field ">
                <i>
                  <MdEmail />
                </i>
                <input
                  id="email"
                  type="email"
                  name="emailc"
                  placeholder="Email"
                  value={values.emailc}
                  onChange={handleChange}
                />
                {errors.emailc && <p>{errors.emailc}</p>}
              </div>

              <div class="input-field">
                <i>
                  <RiLockPasswordFill />
                </i>
                <input
                  type="password"
                  placeholder="mot de passe"
                  name="pwdc"
                  value={values.pwdc}
                  onChange={handleChange}
                />
                {errors.pwdc && <p>{errors.pwdc}</p>}
              </div>

              <input type="submit" value="Connexion" class="btn solid" style={{  marginTop: 30
}} />
              {
                <a style={{ marginTop: 50 }} href="#">
                  Mot de passe oublié ?
                </a>
              }
            </form>

            <form action="#" class="sign-up-form" onSubmit={handleSubmit}>
              <h3 class="title">S'inscrire</h3>
              <div class="input-field">
                <i>
                  <FaUserAlt />
                </i>
                <input
                  type="text"
                  placeholder="Nom"
                  name="nom"
                  defaultValue={values.nom}
                  onChange={handleChange}
                />
                {errors.nom && <p>{errors.nom}</p>}
              </div>
              <div class="input-field">
                <i>
                  <FaUserAlt />
                </i>
                <input
                  type="text"
                  placeholder="Prenom"
                  name="prenom"
                  defaultValue={values.prenom}
                  onChange={handleChange}
                />
                {errors.prenom && <p>{errors.prenom}</p>}
              </div>
              <div class="input-field">
                <i>
                  <MdEmail />
                </i>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  id="email"
                  defaultValue={values.email}
                  onChange={handleChange}
                />
                {errors.email && <p>{errors.email}</p>}
              </div>
              <div class="input-field">
                <i>
                  <RiLockPasswordFill />
                </i>
                <input
                  type="password"
                  placeholder="mot de passe"
                  name="pwd"
                  defaultValue={values.pwd}
                  onChange={handleChange}
                />
                {errors.pwd && <p>{errors.pwd}</p>}
              </div>
              <div class="input-field">
                <i>
                  <RiLockPasswordFill />
                </i>
                <input
                  type="password"
                  placeholder="Confirmer mot de passe"
                  name="mpwd"
                  defaultValue={values.mpwd}
                  onChange={handleChange}
                />
                {errors.mpwd && <p>{errors.mpwd}</p>}
              </div>
              <div class="input">
                <ToggleButtonGroup
                  name="value"
                  type="radio"
                  value={value}
                  onChange={handleRadio}
                >
                  <ToggleButton
                    style={{ backgroundColor: "white", color: "black" }}
                    value={1}
                  >
                    Enseignant
                  </ToggleButton>
                  <ToggleButton
                    style={{
                      marginLeft: 80,
                      backgroundColor: "white",
                      color: "black",
                    }}
                    value={2}
                  >
                    Etudiant
                  </ToggleButton>
                </ToggleButtonGroup>
              </div>

              <input type="submit" class="btn" value="Créer" />

              {
                <div class="social-media">
                  <p class="social-text">Inscrivez-vous avec</p>
                  <a href="#" class="social-icon">
                    <SiFacebook />
                  </a>
                  <a href="#" class="social-icon">
                    <FcGoogle />
                  </a>
                </div>
              }
            </form>
          </div>
        </div>

        <div class="panels-container">
          <div class="panel left-panel">
            <div class="content">
              <h3>Welcome To Uniswap</h3>

              <p>Créez un compte et et swapez avec vos profs et vos amis !</p>

              <button
                class="btn transparent"
                id="sign-up-btn"
                onClick={handleClickSignUp}
              >
                Inscription
              </button>
            </div>
          </div>
          <div class="panel right-panel">
            <div class="content">
              <h3>Vous possedez déja un compte ?</h3>
              <p>Connectez-vous alors !</p>
              <button
                class="btn transparent"
                id="sign-in-btn"
                onClick={handleClickSignIn}
              >
                Connexion
              </button>
            </div>
            <img src="img/register.svg" class="image" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
