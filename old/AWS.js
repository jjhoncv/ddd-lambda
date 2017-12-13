import * as AWS  from 'aws-sdk'

export class AWS {
	
	var dynamoDB;

	constructor() {

		AWS.config.update({
		    'region': 'eu-west-1'
		})
		
		this.dynamoDB = new AWS.DynamoDB
	}

}