
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
		this.prevBtn = this.controls.querySelector('#prev')
		this.nextBtn = this.controls.querySelector('#next')
		this.submitBtn = this.controls.querySelector('#submit')

		this.results = this.form.querySelector('#results')

		this.index = 0
		// run the instance
		this.init()
	}

	onControlsClick(e) {
		// stop expected form button behaviour
		e.preventDefault()

		// update current section
		this.currentSection = this.sections[this.index]

		// check which button is clicked, update index, then call move func
		if (e.target.id === 'next' && this.index !== this.sections.length-1) {
			this.index++
			this.moveTo(this.currentSection, this.sections[this.index])
		} else if (e.target.id === 'prev' && this.index !== 0) {
			this.index--
			this.moveTo(this.currentSection, this.sections[this.index])
		} else if (e.target.id === 'submit') {
			console.warn('submit event')
		}

		// show or hide the controls
		this.hideShowControls()
	}

	hideShowControls() {
		// show/hide prev/next buttons
		if (this.index === 0) {
			this.prevBtn.classList.add('hidden-display')
		} else if (this.index === this.sections.length-1) {
			this.submitBtn.classList.remove('hidden-display')
			this.nextBtn.classList.add('hidden-display')
		} else {
			this.prevBtn.classList.remove('hidden-display')
			this.nextBtn.classList.remove('hidden-display')	
			this.submitBtn.classList.add('hidden-display')
		}

	}

	moveTo(currentSection, nextSection){
		console.log(currentSection, nextSection)
		// update the current and nextSection sections visibility
 		currentSection.classList.add('hidden-display')
 		nextSection.classList.remove('hidden-display')
	}

	displayInputData() {

	}

	events(){
		this.controls.addEventListener('click', this.onControlsClick.bind(this))
	}

	init() {
		this.events()
	}
}

export default FormWizard

