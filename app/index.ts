import { initialize }  from './main'

exports.handler = (event, context, cb) => {	
	initialize(event.Records);
}

//$150 -
//$150 -