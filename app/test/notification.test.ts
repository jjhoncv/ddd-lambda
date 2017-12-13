import { Notification } from './../domain/notification';
import { SNS } from './../sdk/sns';
import { Printed } from './../services/printed'

let notification = new Notification(
									new SNS(),
									new Printed()
								);