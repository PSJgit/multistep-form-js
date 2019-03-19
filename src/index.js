
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

	// init the form
	const twoStepForm = new FormWizard(form)

	
	/* Events
	–––––––––––––––––––––––––––––––––––––––––––––––––– */


});