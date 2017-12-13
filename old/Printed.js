import { Dynamo }  from './Dynamo'
import { Items }  from './Items'

export class Printed {

	constructor() {
	 
	}

	async static pendingMore (message) {
		let dynamo = dynamo.get();

		let message = {
			TableName: process.env.tblName,
			Key: {
			  id: message.params.idSellerType
			},
			UpdateExpression: "set pending = pending + :val",
			ExpressionAttributeValues: {
			  ":val": Items.total(message.items)
			},
			ReturnValues: "UPDATED_NEW"
		}
		return dynamo.update(message).catch(() => dynamo.insert(message))		
	}

	static pendingLess (message) {

	}
}