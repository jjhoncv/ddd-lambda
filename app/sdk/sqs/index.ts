import { QueueService } from '../interface/service.queue';
import AWS from '../../config';

export class SQS implements QueueService {
    public sqs: any
    constructor(){
        this.sqs = new AWS.SQS({
            apiVersion: '2012-11-05'
        })
    }
    create(){
        // TODO: code here
    }
    read(){
        // TODO: code here
    }
    delete(){
        // TODO: code here
    }
}