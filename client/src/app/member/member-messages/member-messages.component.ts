import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from 'src/app/_models/message';
import { MessageService } from 'src/app/_services/message.service';

@Component({
  selector: 'app-member-messages',
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.scss']
})
export class MemberMessagesComponent implements OnInit {
  @Input() messages: Message[];
  @Input() username: string;
  @ViewChild('messageFrom') messageForm: NgForm;
  messageContent: string;

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

  sendMessage(): void {
    this.messageService.sendMessage(this.username, this.messageContent).then(() => {
      this.messageForm.reset();
    });
  }
}
