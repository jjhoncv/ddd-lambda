import { SQS } from '../../sdk/sqs';
import { Printed } from '../../services/printed'

export class Queue {
    constructor(
        public sns: SQS,
        public printed: Printed
    ){}

    send(){
        let params = {};
        this.printed.sendByModel(params);
    }
    sendasdas(){}
}