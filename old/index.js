import { Main }  from './Main'

// const env = process.env

// let main = Main(process.env);
//main.setParamsEnv(process.env)

exports.handler = (event, context, cb) => {	
	main.init(event.Records);
}