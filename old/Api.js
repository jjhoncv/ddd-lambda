import axios from 'axios'

export class Api {

	let RESPONSE_SUCCESS = 200;

	static sendModels (success) {
		success (this.successModels)
	}

	successModels (msg) {
		let urlModels = `${process.env.urlApi}/concessionaire/${obj.params.idConcessionaire}/models/prints`
		return axios.post(urlModels, msg).then(() => this.successPost(response, msg))
	}

	successPost (response, msg) {
		if (res.status === RESPONSE_SUCCESS) {
			if (msg.flagComercio || msg.flagTalan) {
				
			}
		}
	}

}