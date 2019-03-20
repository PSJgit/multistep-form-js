
/* Multi-step form class
–––––––––––––––––––––––––––––––––––––––––––––––––– */

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
		this.progBar = this.form.querySelector('#prog-bar')
		this.hideClassStr = 'hidden-display' 

		this.complete = false
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
		if (e.target.id === 'next' && this.index !== this.sections.length-1 && this.validate(this.currentSection)) {
			this.index++
			this.updateProgress()
			this.moveTo(this.currentSection, this.sections[this.index])
		} else if (e.target.id === 'prev' && this.index !== 0) {
			this.index--
			this.moveTo(this.currentSection, this.sections[this.index])
		} else if (e.target.id === 'submit') {
			this.complete = true
			this.completeForm()
			this.updateProgress(100)
		}

		// show or hide the controls
		this.hideShowControls()

		// if we're done, display the data
		if (this.index === this.sections.length-1) {
			this.displayInputData()
		}
	}

	hideShowControls() {
		// show/hide prev/next buttons
		if (this.index === 0) {
			this.prevBtn.classList.add(this.hideClassStr)
		} else if (this.index === this.sections.length-1) {
			this.submitBtn.classList.remove(this.hideClassStr)
			this.nextBtn.classList.add(this.hideClassStr)
		} else {
			this.prevBtn.classList.remove(this.hideClassStr)
			this.nextBtn.classList.remove(this.hideClassStr)	
			this.submitBtn.classList.add(this.hideClassStr)
		}
	}

	moveTo(currentSection, nextSection){
		// update the current and nextSection sections visibility
 		currentSection.classList.add(this.hideClassStr)
 		nextSection.classList.remove(this.hideClassStr)
	}

	validate(currentSection) {
		
		let validationResult = true

		// get the currentSection sections inputs through the inputs
		let inputs = currentSection.querySelectorAll('input, select')
		inputs = [].slice.call(inputs)

		inputs.forEach( (elem, index) => {
			elem.oninvalid = () => {
				if (elem.hasErrorDiv === undefined) {
					elem.hasErrorDiv = true
					elem.insertAdjacentHTML('afterend', '<div class="error "></div>')
				}

				elem.nextSibling.textContent = elem.validationMessage

				validationResult = false
			}
			
      elem.nextSibling.textContent = ''
      elem.checkValidity()

		})

		return validationResult
	}

	displayInputData() {

		if (!this.complete) {

			// clear any previous 
			this.results.innerHTML = ''

			// get latest inputs
			let allInputs = this.form.querySelectorAll('input, select')
			allInputs = [].slice.call(allInputs)

			// show them
			allInputs.forEach( (elem) => {
				console.log(elem.name)
				let name = elem.name.split('-').join(' ').toUpperCase()
				let content = `<p>${name}: ${elem.value}</p>`
				this.results.insertAdjacentHTML('beforeend', content)
			}) 
		}
	}
	
	updateProgress(max) {
		let allInputs = this.form.getElementsByTagName('input')
		let completed = this.index / this.sections.length * 100
		this.progBar.setAttribute('style', `width: ${max || completed}%`)
	}

	completeForm() {
 		this.controls.classList.add(this.hideClassStr)
 		this.results.innerHTML = '<p class="center">Form complete!</p>'
 	}

	events(){
		this.controls.addEventListener('click', this.onControlsClick.bind(this))
	}

	init() {
		this.events()
	}
}

export default FormWizard


