
/* PLAN TEMP
–––––––––––––––––––––––––––––––––––––––––––––––––– */
/*
	no render func - keep html simple
	sections - hide show based upon index (needs to have all items validated before we can continue)
	prog bar - can run from the above sections index/sections.length*100, submit at the very end when displaying user data back
	user data - can be shown by lifting direct from the form. not ideal practice but can do it ok if the sections are hidden on next/prev
	on complete - add a submit with the displayed user data? wipe it and confirm submission?
	validation - on click/or on blur of input field

*/

class FormWizard {
	constructor(form, sections, controls) {
		this.form = form
		this.form.noValidate = true
		this.sections = sections
		this.controls = controls

		// run the instance
		this.init()
	}

	onControlsClick(e) {
		e.preventDefault()
		console.log('controls clicked', e.target.id)
	}

	events(){
		this.controls.addEventListener('click', this.onControlsClick.bind(this))
	}

	init() {
		this.events()
	}
}

export default FormWizard


