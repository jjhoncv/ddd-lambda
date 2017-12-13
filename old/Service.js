import { Dynamo }  from './Dynamo' 

export class Service {
	constructor() {
		Dynamo.init()
	}
}