import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWhatsapp, faLinkedin, faXTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faWhatsapp, faLinkedin, faXTwitter, faGithub, faEnvelope, faBars)

createApp(App).mount('#app')
