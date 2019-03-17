/*
* Real time private chatting app using Angular 2, Nodejs, mongodb and Socket.io
* @author Shashank Tiwari
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UISupportModule } from './../../modules/ui-support/ui-support.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ConversationModule } from './conversation/conversation.module';
import { ChatListModule } from './chat-list/chat-list.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
	imports: [
		CommonModule,
		HomeRoutingModule,
		UISupportModule,
		ConversationModule,
		ChatListModule,
		NgbModule
	],
	declarations: [HomeComponent]
})
export class HomeModule { }
