// pattern singleton
// const AWS = require('aws-sdk')



export class Dynamo extends AWS {

	var db;
	// var table;

	constructor() {
	 	super();
	}

	static init (conf) {
		if (!db) {
			// this.AWS
			db = this.dynamoDB.DocumentClient;
		}
	}

	static get () {
		if (!db){
			throw new Error('The db amazon has not been initialized, call init({}) prior to get().');
		}
		return db;
	}
}

// let dynamoDB = new Dynamo();
// dynamoDB.init()

// export 