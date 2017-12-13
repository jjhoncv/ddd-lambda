import { Process }  from './Process'
import { Printed }  from './Printed'

export class Sns {
	
	let message;

	constructor(data) {
	 	this.message = JSON.parse(data.Message)
	 	//this.LESS = true;
	}	

	run () {
		
		let message = this.message;
		
		let success = await Printed.pendingLess(message)

		let count = await Api.sendModels(success)

		// Process.

		//Printed.pendingMore()

		//dynamo.get().update(message).then(Process.message)
		// this.settings();

	}
}