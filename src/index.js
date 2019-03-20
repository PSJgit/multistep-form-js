
/* Imports
–––––––––––––––––––––––––––––––––––––––––––––––––– */

import FormWizard from './js/wizardClass.js'

// style
import "./scss/index.scss"


/* ON READY 
–––––––––––––––––––––––––––––––––––––––––––––––––– */

document.addEventListener("DOMContentLoaded", (e) => {
	
	const form = document.getElementById('form-wizard')
	const sections = [].slice.call(document.querySelectorAll('.section'))
	const controls = document.getElementById('controls')

	// init the form
	const twoStepForm = new FormWizard(form, sections, controls)

});