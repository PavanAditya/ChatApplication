import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/* Importing services starts*/
import { SocketService } from './../../services/socket/socket.service';
import { ChatService } from './../../services/chat/chat.service';
import { DataShareService } from './../../services/utils/data-share.service';
/* Importing services ends*/

/* importing interfaces starts */
import { Auth } from './../../interfaces/auth';
import { stringify } from 'querystring';
/* importing interfaces ends */

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	public userId: string;
	public username: string;
	public overlayDisplay: boolean;

	constructor(
		private chatService: ChatService,
		private socketService: SocketService,
		private dataShareService: DataShareService,
		private router: Router
	) { }

	ngOnInit() {
		this.userId = this.dataShareService.getUserId();
		this.username = this.dataShareService.getUserName();
		this.establishSocketConnection();
	}

	async establishSocketConnection() {
		try {
			if (this.userId === '' || typeof this.userId === 'undefined' || this.userId === null) {
				this.router.navigate(['/']);
			} else {
				/* making socket connection by passing UserId. */
				await this.socketService.connectSocket(this.userId);
				this.overlayDisplay = false;
			}
		} catch (error) {
			alert('Something went wrong');
		}
	}

}
