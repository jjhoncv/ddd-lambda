import { Notification } from './domain/notification';
import { Queue } from './domain/queue';
import { SQS } from './sdk/sqs'
import { SNS } from './sdk/sns'
import { Printed } from './services/printed' //api

export function initialize(params){
    //sns
    if (params){
        new Notification( // ID
            new SNS(), // DI
            new Printed()
        );
    // sqs    
    } else {
        new Queue(
            new SQS(),
            new Printed()
        );
    }
}