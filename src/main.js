// @ is a vite alias for ./src folder from project root. So, we can use the @ alias to specify absolute paths relative to the project root. Especially useful when there are very deep complex folders and relative paths have to be specified between js or other assets.

// Import our custom CSS
import '@/scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// or, specify which plugins you need:
// import Alert from 'bootstrap/js/dist/alert'
// import { Tooltip, Toast, Popover } from 'bootstrap'

// My ES modules
import { tada } from '@/modules/confetti'
// tada()
document.addEventListener('click', () => tada())
