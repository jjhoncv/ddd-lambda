import { SNS } from '../../sdk/sns';
import { Printed } from '../../services/printed'

export class Notification {
    constructor(
        public sns: SNS,
        public printed: Printed
    ){}

    send(){
        let params = {};
        this.printed.sendByModel(params);
    }
    sendasdas(){
    	
    }
}