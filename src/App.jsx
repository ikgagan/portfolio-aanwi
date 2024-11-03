import { useState } from 'react'
import './App.css'
import NavBar from './components/NaavBar'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  const [count, setCount] = useState(0)
  const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)


  return (
    <>
<NavBar/>
  <Home/>
  <About/>
      {/* <!--===== SKILLS =====--> */}
      <section class="skills section" id="skills">
        <h2 class="section-title">Skills</h2>

        <div class="skills__container bd-grid">
          <div>
            <h2 class="skills__subtitle">Profesional Skills</h2>
            <p class="skills__text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
              optio id vero amet, alias architecto consectetur error eum eaque
              sit.
            </p>
            <div class="skills__data">
              <div class="skills__names">
                <i class="bx bxl-html5 skills__icon"></i>
                <span class="skills__name">HTML5</span>
              </div>
              <div class="skills__bar skills__html"></div>
              <div>
                <span class="skills__percentage">95%</span>
              </div>
            </div>
            <div class="skills__data">
              <div class="skills__names">
                <i class="bx bxl-css3 skills__icon"></i>
                <span class="skills__name">CSS3</span>
              </div>
              <div class="skills__bar skills__css"></div>
              <div>
                <span class="skills__percentage">85%</span>
              </div>
            </div>
            <div class="skills__data">
              <div class="skills__names">
                <i class="bx bxl-javascript skills__icon"></i>
                <span class="skills__name">JAVASCRIPT</span>
              </div>
              <div class="skills__bar skills__js"></div>
              <div>
                <span class="skills__percentage">65%</span>
              </div>
            </div>
            <div class="skills__data">
              <div class="skills__names">
                <i class="bx bxs-paint skills__icon"></i>
                <span class="skills__name">UX/UI</span>
              </div>
              <div class="skills__bar skills__ux"></div>
              <div>
                <span class="skills__percentage">85%</span>
              </div>
            </div>
          </div>

          <div>
            <img src="assets/img/work3.jpg" alt="" class="skills__img" />
          </div>
        </div>
      </section>
      {/* <!--===== FOOTER =====--> */}
    <footer class="footer" id="contact">
      <p class="footer__title">Marlon</p>
      <div class="footer__social">
        <a href="#" class="footer__icon"><i class="bx bxl-facebook"></i></a>
        <a href="#" class="footer__icon"><i class="bx bxl-instagram"></i></a>
        <a href="#" class="footer__icon"><i class="bx bxl-twitter"></i></a>
      </div>
      <p class="footer__copy">&#169; All rigths reserved</p>
    </footer>

    </>
  )
}

export default App
