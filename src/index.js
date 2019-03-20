
/* Imports
–––––––––––––––––––––––––––––––––––––––––––––––––– */


import FormWizard from './js/wizardClass.js'
import {animateCSSHelper} from './js/utils.js'

// style
import "./scss/index.scss"


/* ON READY 
–––––––––––––––––––––––––––––––––––––––––––––––––– */

document.addEventListener("DOMContentLoaded", (e) => {
	
	const form = document.getElementById('form-wizard')

	const sections = [].slice.call(document.querySelectorAll('.section'))
	const controls = document.getElementById('nav')

	// init the form
	const twoStepForm = new FormWizard(form, sections, controls)


	/* Events
	–––––––––––––––––––––––––––––––––––––––––––––––––– */


});