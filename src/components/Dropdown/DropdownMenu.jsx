import React, { useState } from "react";
import DropdownItem from "./DropdownItem";
import { HiOutlineCog } from "react-icons/hi";
import { AiFillCaretLeft, AiOutlineThunderbolt } from "react-icons/ai";
import { CSSTransition } from "react-transition-group";
import "./DropdownMenu.css";

const DropdownMenu = () => {
  // state for csstransition
  const [active, setActive] = useState("main"); // State to manage the active menu
  const [menuHeight, setMenuHeight] = useState(null); // State to manage the height of the menu container

  /* This function is used as a callback in CSSTransition onEnter prop. It runs when the component is mounted to the DOM.
  It calculates the height of the menu component and sets it in the menuHeight state.
  */
  function calcHeight(el) {
    const height = el.offsetHeight; // Height in pixels of the component
    setMenuHeight(height); // Update the menuHeight state with the calculated height
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      {/* CSSTransition component for the main menu */}
      <CSSTransition
        in={active === "main"} // If active is "main", this CSSTransition component renders
        unmountOnExit // The component is unmounted from the DOM when it exits
        timeout={500} // Duration of the transition animation in milliseconds
        classNames="menu-primary" // CSS class name for the primary menu
        onEnter={calcHeight} // Callback function to calculate the height when entering the main menu
      >
        <div className="menu">
          <DropdownItem>QA Testing</DropdownItem>
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"introqa"} // When this item is clicked, setActive will set the active state to "testingautomation"
            setActive={setActive}
          >
            Introducción al QA
          </DropdownItem>
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"testingmanual"} // When this item is clicked, setActive will set the active state to "testingautomation"
            setActive={setActive}
          >
            Testing Manual
          </DropdownItem>
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"testingautomation"} // When this item is clicked, setActive will set the active state to "testingautomation"
            setActive={setActive}
          >
            Testing Automation Y Performance
          </DropdownItem>
        </div>
      </CSSTransition>

      {/* CSSTransition component for the testing automation submenu */}
      <CSSTransition
        in={active === "testingautomation"} // If active is "testingautomation", this CSSTransition component renders
        unmountOnExit // The component is unmounted from the DOM when it exits
        timeout={500} // Duration of the transition animation in milliseconds
        classNames="menu-primary" // CSS class name for the secondary menu
        onEnter={calcHeight} // Callback function to calculate the height when entering the testing automation submenu
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<AiFillCaretLeft />}
            goToMenu={"main"} // When this item is clicked, setActive will set the active state back to "main"
            setActive={setActive}
          />
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"introduccion-al-desarrollo-web"} // When this item is clicked, setActive will set the active state to "introduccion"
            setActive={setActive}
          >
            Introducción al Desarrollo Web
          </DropdownItem>
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"sistema-de-control-de-versiones"} // When this item is clicked, setActive will set the active state to "introduccion"
            setActive={setActive}
          >
            Sistema de control de versiones
          </DropdownItem>{" "}
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"recuperatorio-sistema-de-control-de-versiones"} // When this item is clicked, setActive will set the active state to "introduccion"
            setActive={setActive}
          >
            Recuperatorio sistema de control de versiones
          </DropdownItem>{" "}
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"java"} // When this item is clicked, setActive will set the active state to "introduccion"
            setActive={setActive}
          >
            Introducción a JAVA
          </DropdownItem>{" "}
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"junit-maven"} // When this item is clicked, setActive will set the active state to "introduccion"
            setActive={setActive}
          >
            JUnit + Maven
          </DropdownItem>{" "}
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"java-poo"} // When this item is clicked, setActive will set the active state to "introduccion"
            setActive={setActive}
          >
            JAVA POO Nivel 1
          </DropdownItem>{" "}
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"mockito"} // When this item is clicked, setActive will set the active state to "introduccion"
            setActive={setActive}
          >
            Mockito
          </DropdownItem>{" "}
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"java-time-api"} // When this item is clicked, setActive will set the active state to "introduccion"
            setActive={setActive}
          >
            JAVA Time API
          </DropdownItem>{" "}
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"java-collections"} // When this item is clicked, setActive will set the active state to "introduccion"
            setActive={setActive}
          >
            JAVA Collections - Nivel 1
          </DropdownItem>{" "}
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"principios-de-testing-automation"} // When this item is clicked, setActive will set the active state to "introduccion"
            setActive={setActive}
          >
            Principios de Testing Automation
          </DropdownItem>{" "}
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"web-automation-fundamentos"} // When this item is clicked, setActive will set the active state to "introduccion"
            setActive={setActive}
          >
            Web Automation: Fundamentos
          </DropdownItem>{" "}
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"automation-en-mobile"} // When this item is clicked, setActive will set the active state to "introduccion"
            setActive={setActive}
          >
            Automation en Mobile
          </DropdownItem>{" "}
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"testing-automatizado-de-api"} // When this item is clicked, setActive will set the active state to "introduccion"
            setActive={setActive}
          >
            Testing Automatizado de API
          </DropdownItem>{" "}
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"serenity-+-screenplay"} // When this item is clicked, setActive will set the active state to "introduccion"
            setActive={setActive}
          >
            Serenity + Screenplay
          </DropdownItem>
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"testing-automation-con-cypress"} // When this item is clicked, setActive will set the active state to "introduccion"
            setActive={setActive}
          >
            Testing Automation con Cypress
          </DropdownItem>{" "}
        </div>
      </CSSTransition>

      {/* CSSTransition component for the introduccion al desarrollo web submenu */}
      <CSSTransition
        in={active === "introduccion-al-desarrollo-web"} // If active is "testingautomation", this CSSTransition component renders
        unmountOnExit // The component is unmounted from the DOM when it exits
        timeout={500} // Duration of the transition animation in milliseconds
        classNames="menu-primary" // CSS class name for the secondary menu
        onEnter={calcHeight} // Callback function to calculate the height when entering the testing automation submenu
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<AiFillCaretLeft />}
            goToMenu={"testingautomation"} // When this item is clicked, setActive will set the active state back to "main"
            setActive={setActive}
          />
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"introduccion-al-desarrollo-web"} // When this item is clicked, setActive will set the active state to "introduccion"
            setActive={setActive}
          >
            Introducción al Desarrollo Web & HTML
          </DropdownItem>
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"	introducción-a-css	"} // When this item is clicked, setActive will set the active state to introduccion"
            setActive={setActive}
          >
            {" "}
            Introducción a CSS{" "}
          </DropdownItem>
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"	maquetación-y-diseño-en-css	"} // When this item is clicked, setActive will set the active state to introduccion"
            setActive={setActive}
          >
            {" "}
            Maquetación y diseño en CSS{" "}
          </DropdownItem>
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"	introducción-a-javascript	"} // When this item is clicked, setActive will set the active state to introduccion"
            setActive={setActive}
          >
            {" "}
            Introducción a JavaScript{" "}
          </DropdownItem>
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"	integrando-javascript-en-el-sitio-web	"} // When this item is clicked, setActive will set the active state to introduccion"
            setActive={setActive}
          >
            {" "}
            Integrando JavaScript en el sitio web{" "}
          </DropdownItem>
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"	a-practicar	"} // When this item is clicked, setActive will set the active state to introduccion"
            setActive={setActive}
          >
            {" "}
            A practicar{" "}
          </DropdownItem>
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"	creación-de-una-barra-de-navegación-responsive	"} // When this item is clicked, setActive will set the active state to introduccion"
            setActive={setActive}
          >
            {" "}
            Creación de una barra de navegación responsive{" "}
          </DropdownItem>
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"	optimización-del-contenido-y-estructura-del-sitio	"} // When this item is clicked, setActive will set the active state to introduccion"
            setActive={setActive}
          >
            {" "}
            Optimización del contenido y estructura del sitio{" "}
          </DropdownItem>
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={
              "	creación-de-portfolio-en-github-y-subida-del-sitio-a-github-pages"
            } // When this item is clicked, setActive will set the active state to introduccion"
            setActive={setActive}
          >
            {" "}
            Creación de portfolio en Github y subida del sitio a Github Pages{" "}
          </DropdownItem>
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"	evaluación-general	"} // When this item is clicked, setActive will set the active state to introduccion"
            setActive={setActive}
          >
            {" "}
            Evaluación general{" "}
          </DropdownItem>
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"	introducción-a-versiones-de-un-sitio-con-chatgpt"} // When this item is clicked, setActive will set the active state to introduccion"
            setActive={setActive}
          >
            {" "}
            Introducción a versiones de un sitio con ChatGPT{" "}
          </DropdownItem>
        </div>
      </CSSTransition>
      {/* CSSTransition component for the sistema-de-control-de-versiones submenu */}
      <CSSTransition
        in={active === "sistema-de-control-de-versiones"} // If active is "testingautomation", this CSSTransition component renders
        unmountOnExit // The component is unmounted from the DOM when it exits
        timeout={500} // Duration of the transition animation in milliseconds
        classNames="menu-primary" // CSS class name for the secondary menu
        onEnter={calcHeight} // Callback function to calculate the height when entering the testing automation submenu
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<AiFillCaretLeft />}
            goToMenu={"testingautomation"} // When this item is clicked, setActive will set the active state back to "main"
            setActive={setActive}
          />
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"	introducción-a-git.	"} // When this item is clicked, setActive will set the active state to introduccion"
            setActive={setActive}
          >
            {" "}
            Introducción a Git.{" "}
          </DropdownItem>
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"	resolución-de-conflictos	"} // When this item is clicked, setActive will set the active state to introduccion"
            setActive={setActive}
          >
            {" "}
            Resolución de conflictos{" "}
          </DropdownItem>
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"	git-&-github:-repositorios-y-colaboración-en-proyectos	"} // When this item is clicked, setActive will set the active state to introduccion"
            setActive={setActive}
          >
            {" "}
            Git & GitHub: Repositorios y colaboración en proyectos{" "}
          </DropdownItem>
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"	colaboración-y-buenas-prácticas	"} // When this item is clicked, setActive will set the active state to introduccion"
            setActive={setActive}
          >
            {" "}
            Colaboración y buenas prácticas{" "}
          </DropdownItem>
        </div>
      </CSSTransition>
      {/* CSSTransition component for the recuperatorio-sistema-de-control-de-versiones submenu */}
      <CSSTransition
        in={active === "recuperatorio-sistema-de-control-de-versiones"} // If active is "testingautomation", this CSSTransition component renders
        unmountOnExit // The component is unmounted from the DOM when it exits
        timeout={500} // Duration of the transition animation in milliseconds
        classNames="menu-primary" // CSS class name for the secondary menu
        onEnter={calcHeight} // Callback function to calculate the height when entering the testing automation submenu
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<AiFillCaretLeft />}
            goToMenu={"testingautomation"} // When this item is clicked, setActive will set the active state back to "main"
            setActive={setActive}
          />
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"	recuperatorio-sistema-de-control-de-versiones	"} // When this item is clicked, setActive will set the active state to introduccion"
            setActive={setActive}
          >
            {" "}
            Recuperatorio Sistema de control de versiones{" "}
          </DropdownItem>
        </div>
      </CSSTransition>
      {/* CSSTransition component for the java submenu */}
      <CSSTransition
        in={active === "java"} // If active is "testingautomation", this CSSTransition component renders
        unmountOnExit // The component is unmounted from the DOM when it exits
        timeout={500} // Duration of the transition animation in milliseconds
        classNames="menu-primary" // CSS class name for the secondary menu
        onEnter={calcHeight} // Callback function to calculate the height when entering the testing automation submenu
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<AiFillCaretLeft />}
            goToMenu={"testingautomation"} // When this item is clicked, setActive will set the active state back to "main"
            setActive={setActive}
          />
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"java"} // When this item is clicked, setActive will set the active state to "introduccion"
            setActive={setActive}
          >
            Primeros Pasos con Java - I
          </DropdownItem>{" "}
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Primeros Pasos con Java - II
          </DropdownItem>
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"java"} // When this item is clicked, setActive will set the active state to "introduccion"
            setActive={setActive}
          >
            Primeros Pasos con Java - III
          </DropdownItem>{" "}
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Desafíos primeros pasos con Java
          </DropdownItem>
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"java"} // When this item is clicked, setActive will set the active state to "introduccion"
            setActive={setActive}
          >
            Estructuras de control - If
          </DropdownItem>{" "}
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Estructuras de control - Switch
          </DropdownItem>{" "}
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Estructuras de control - Try Catch
          </DropdownItem>{" "}
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Clase String - I
          </DropdownItem>{" "}
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Clase String - II
          </DropdownItem>{" "}
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Clase Math - I
          </DropdownItem>{" "}
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Clase Math - II
          </DropdownItem>{" "}
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Desafíos Integradores - I
          </DropdownItem>{" "}
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Desafíos Integradores - II
          </DropdownItem>
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"java"} // When this item is clicked, setActive will set the active state to "introduccion"
            setActive={setActive}
          >
            Bucles y Arrays - I
          </DropdownItem>
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Bucles y Arrays - II
          </DropdownItem>
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Bucles y Arrays - III
          </DropdownItem>
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Bucles y Arrays - IV
          </DropdownItem>
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Bucles y Arrays - V
          </DropdownItem>
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Bucles y Arrays - VI
          </DropdownItem>
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Bucles y Arrays - VII
          </DropdownItem>
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Bucles y Arrays - VIII
          </DropdownItem>
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Wrappers - I
          </DropdownItem>
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Wrappers - II
          </DropdownItem>
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Desafío Integrador - I
          </DropdownItem>
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Desafío Integrador - II
          </DropdownItem>
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Desafío Integrador - III
          </DropdownItem>
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Desafío Integrador - IV / Parte 1
          </DropdownItem>
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Desafío Integrador - IV / Parte 2
          </DropdownItem>
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Desafío Integrador - V / Parte 1
          </DropdownItem>
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Desafío Integrador - V / Parte 2
          </DropdownItem>
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"java"} // When this item is clicked, setActive will set the active state to "introduccion"
            setActive={setActive}
          >
            Métodos - I
          </DropdownItem>{" "}
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Métodos - II
          </DropdownItem>
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Desafío Métodos - I
          </DropdownItem>
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Desafío Métodos - II
          </DropdownItem>
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Desafío Métodos - III
          </DropdownItem>
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Desafío Métodos - IV
          </DropdownItem>
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Desafío Métodos - V
          </DropdownItem>
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Desafío Métodos - VI
          </DropdownItem>
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Desafío Métodos - VII
          </DropdownItem>
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"java"} // When this item is clicked, setActive will set the active state to "introduccion"
            setActive={setActive}
          >
            Debugger
          </DropdownItem>{" "}
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Integrador Intro a JAVA
          </DropdownItem>
        </div>
      </CSSTransition>
      {/* CSSTransition component for the testing automation submenu */}
      <CSSTransition
        in={active === "junit-maven"} // If active is "testingautomation", this CSSTransition component renders
        unmountOnExit // The component is unmounted from the DOM when it exits
        timeout={500} // Duration of the transition animation in milliseconds
        classNames="menu-primary" // CSS class name for the secondary menu
        onEnter={calcHeight} // Callback function to calculate the height when entering the testing automation submenu
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<AiFillCaretLeft />}
            goToMenu={"testingautomation"} // When this item is clicked, setActive will set the active state back to "main"
            setActive={setActive}
          />
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"junit-maven"} // When this item is clicked, setActive will set the active state to "introduccion"
            setActive={setActive}
          >
            Testing - I
          </DropdownItem>{" "}
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Testing - II
          </DropdownItem>
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Testing - III
          </DropdownItem>
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Testing - IV
          </DropdownItem>
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Testing - V
          </DropdownItem>
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Testing - VI
          </DropdownItem>
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Testing - VII
          </DropdownItem>
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"junit-maven"} // When this item is clicked, setActive will set the active state to "introduccion"
            setActive={setActive}
          >
            Maven - I
          </DropdownItem>
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"junit-maven"} // When this item is clicked, setActive will set the active state to "introduccion"
            setActive={setActive}
          >
            Maven - II
          </DropdownItem>
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Integrador JUnit + Maven
          </DropdownItem>
        </div>
      </CSSTransition>
      {/* CSSTransition component for the testing automation submenu */}
      <CSSTransition
        in={active === "java-poo"} // If active is "testingautomation", this CSSTransition component renders
        unmountOnExit // The component is unmounted from the DOM when it exits
        timeout={500} // Duration of the transition animation in milliseconds
        classNames="menu-primary" // CSS class name for the secondary menu
        onEnter={calcHeight} // Callback function to calculate the height when entering the testing automation submenu
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<AiFillCaretLeft />}
            goToMenu={"testingautomation"} // When this item is clicked, setActive will set the active state back to "main"
            setActive={setActive}
          />
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"java-poo"} // When this item is clicked, setActive will set the active state to "introduccion"
            setActive={setActive}
          >
            Introducción al Desarrollo Web & HTML
          </DropdownItem>{" "}
        </div>
      </CSSTransition>
      {/* CSSTransition component for the testing automation submenu */}
      <CSSTransition
        in={active === "principios-de-testing-automation"} // If active is "testingautomation", this CSSTransition component renders
        unmountOnExit // The component is unmounted from the DOM when it exits
        timeout={500} // Duration of the transition animation in milliseconds
        classNames="menu-primary" // CSS class name for the secondary menu
        onEnter={calcHeight} // Callback function to calculate the height when entering the testing automation submenu
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<AiFillCaretLeft />}
            goToMenu={"testingautomation"} // When this item is clicked, setActive will set the active state back to "main"
            setActive={setActive}
          />
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"principios-de-testing-automation"} // When this item is clicked, setActive will set the active state to "introduccion"
            setActive={setActive}
          >
            Introducción al Desarrollo Web & HTML
          </DropdownItem>{" "}
        </div>
      </CSSTransition>
      {/* CSSTransition component for the testing automation submenu */}
      <CSSTransition
        in={active === "web-automation-fundamentos"} // If active is "testingautomation", this CSSTransition component renders
        unmountOnExit // The component is unmounted from the DOM when it exits
        timeout={500} // Duration of the transition animation in milliseconds
        classNames="menu-primary" // CSS class name for the secondary menu
        onEnter={calcHeight} // Callback function to calculate the height when entering the testing automation submenu
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<AiFillCaretLeft />}
            goToMenu={"testingautomation"} // When this item is clicked, setActive will set the active state back to "main"
            setActive={setActive}
          />
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"web-automation-fundamentos"} // When this item is clicked, setActive will set the active state to "introduccion"
            setActive={setActive}
          >
            Introducción al Desarrollo Web & HTML
          </DropdownItem>{" "}
        </div>
      </CSSTransition>
      {/* CSSTransition component for the testing automation submenu */}
      <CSSTransition
        in={active === "automation-en-mobile"} // If active is "testingautomation", this CSSTransition component renders
        unmountOnExit // The component is unmounted from the DOM when it exits
        timeout={500} // Duration of the transition animation in milliseconds
        classNames="menu-primary" // CSS class name for the secondary menu
        onEnter={calcHeight} // Callback function to calculate the height when entering the testing automation submenu
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<AiFillCaretLeft />}
            goToMenu={"testingautomation"} // When this item is clicked, setActive will set the active state back to "main"
            setActive={setActive}
          />
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"automation-en-mobile"} // When this item is clicked, setActive will set the active state to "introduccion"
            setActive={setActive}
          >
            ...Proximamente
          </DropdownItem>{" "}
        </div>
      </CSSTransition>
      {/* CSSTransition component for the testing automation submenu */}
      <CSSTransition
        in={active === "testing-automatizado-de-api"} // If active is "testingautomation", this CSSTransition component renders
        unmountOnExit // The component is unmounted from the DOM when it exits
        timeout={500} // Duration of the transition animation in milliseconds
        classNames="menu-primary" // CSS class name for the secondary menu
        onEnter={calcHeight} // Callback function to calculate the height when entering the testing automation submenu
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<AiFillCaretLeft />}
            goToMenu={"testingautomation"} // When this item is clicked, setActive will set the active state back to "main"
            setActive={setActive}
          />
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"testing-automatizado-de-api"} // When this item is clicked, setActive will set the active state to "introduccion"
            setActive={setActive}
          >
            ...Proximamente
          </DropdownItem>{" "}
        </div>
      </CSSTransition>
      {/* CSSTransition component for the testing automation submenu */}
      <CSSTransition
        in={active === "serenity-+-screenplay"} // If active is "testingautomation", this CSSTransition component renders
        unmountOnExit // The component is unmounted from the DOM when it exits
        timeout={500} // Duration of the transition animation in milliseconds
        classNames="menu-primary" // CSS class name for the secondary menu
        onEnter={calcHeight} // Callback function to calculate the height when entering the testing automation submenu
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<AiFillCaretLeft />}
            goToMenu={"testingautomation"} // When this item is clicked, setActive will set the active state back to "main"
            setActive={setActive}
          />
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"serenity-+-screenplay"} // When this item is clicked, setActive will set the active state to "introduccion"
            setActive={setActive}
          >
            ...Proximamente
          </DropdownItem>{" "}
        </div>
      </CSSTransition>
      {/* CSSTransition component for the testing automation submenu */}
      <CSSTransition
        in={active === "testing-automation-con-cypress"} // If active is "testingautomation", this CSSTransition component renders
        unmountOnExit // The component is unmounted from the DOM when it exits
        timeout={500} // Duration of the transition animation in milliseconds
        classNames="menu-primary" // CSS class name for the secondary menu
        onEnter={calcHeight} // Callback function to calculate the height when entering the testing automation submenu
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<AiFillCaretLeft />}
            goToMenu={"testingautomation"} // When this item is clicked, setActive will set the active state back to "main"
            setActive={setActive}
          />
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"testing-automation-con-cypress"} // When this item is clicked, setActive will set the active state to "introduccion"
            setActive={setActive}
          >
            ...Proximamente
          </DropdownItem>{" "}
        </div>
      </CSSTransition>
      {/* CSSTransition component for the introduction submenu */}
      <CSSTransition
        in={active === "introduccion-al-desarrollo-web-html"} // If active is "introduccion", this CSSTransition component renders
        unmountOnExit // The component is unmounted from the DOM when it exits
        timeout={500} // Duration of the transition animation in milliseconds
        classNames="menu-secondary" // CSS class name for the secondary menu
        onEnter={calcHeight} // Callback function to calculate the height when entering the introduction submenu
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<AiFillCaretLeft />}
            goToMenu={"introduccion-al-desarrollo-web"} // When this item is clicked, setActive will set the active state back to "testingautomation"
            setActive={setActive}
          />
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            ¡Te damos la bienvenida!
          </DropdownItem>
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            ¿Qué es el desarrollo web?
          </DropdownItem>
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Principios básicos del desarrollo web
          </DropdownItem>
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Editores de código
          </DropdownItem>
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Estructura del HTML
          </DropdownItem>
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Desafío del día
          </DropdownItem>
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Resolución del desafío
          </DropdownItem>
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Valida tus conocimientos
          </DropdownItem>
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Mapa de conceptos vistos y encuesta final
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};

export default DropdownMenu;
