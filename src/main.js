import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWhatsapp, faLinkedin, faXTwitter, faGithub, faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faBars, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

library.add(faWhatsapp, faLinkedin, faXTwitter, faGithub, faFacebookSquare, faInstagram, faEnvelope, faBars, faChevronLeft, faChevronRight)

createApp(App).mount('#app')
