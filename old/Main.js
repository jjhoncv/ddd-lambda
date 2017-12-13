// import Lambda from './Lambda';
// const AWS = require('./Lambda');
// const AWS = require('./Lambda');

/// Pattern Factory

import { Sns }  from './Sns'
import { Sqs }  from './Sqs'


export class Main extends Service {

	let service;	
	// let process;

	constructor() {
		this.super();
		//this.env = env;
		// new env(env);

	}

	static init(records) {
		if(this.records) {
			this.service = new Sns(records[0].Sns)
		} else {
			this.service = new Sqs()
		}	
		// this.service.setEnv(this.env)
		// Process = await this.service.run()
		this.service.run()
	}
}


