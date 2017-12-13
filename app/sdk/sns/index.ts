import { NotificationService } from '../interface/service.notification';
import AWS from '../../config';

export class SNS implements NotificationService {
    public sns: any
    constructor(){
        this.sns = new AWS.SNS({
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