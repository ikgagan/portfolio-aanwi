import { useState } from 'react'
import '../App.css'
import PhotoNoBg from '../assets/photonobg.png'

function Home() {
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
    <div class="home bd-grid" id="home">
        <div class="home__data">
          <h1 class="home__title">
            Hi,<br />I'am <span class="home__title-color">Aanwi</span><br />
            Data Analyst
          </h1>

          <a href="#" class="button">Download Resume</a>
        </div>

        <div class="home__social">
          <a href="" class="home__social-icon"
            ><i class="bx bxl-linkedin"></i
          ></a>
          <a href="" class="home__social-icon"
            ><i class="bx bxl-behance"></i
          ></a>
          <a href="" class="home__social-icon"><i class="bx bxl-github"></i></a>
        </div>

        <div class="home__img">
          <svg
            class="home__blob"
            viewBox="0 0 479 467"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <mask id="mask0" mask-type="alpha">
              <path
                d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"
              />
            </mask>
            <g mask="url(#mask0)">
              <path
                d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"
              />
              <image
                class="home__blob-img"
                x=""
                y="10"
                href={PhotoNoBg}
              />
            </g>
          </svg>
        </div>
</div>
 </>
  )
}

export default Home
