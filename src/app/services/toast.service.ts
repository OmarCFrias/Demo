import { Injectable, Optional } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Subject, Observable } from 'rxjs';


export interface Message {
  severity?: string;
  summary?: string;
  detail?: string;
  id?: any;
  key?: string;
  life?: number;
  sticky?: boolean;
  closable?: boolean;
  data?: any;
}

@Injectable()
export class MessageService {

    private messageSource = new Subject<Message|Message[]>();
    private clearSource = new Subject<string>();

    messageObserver = this.messageSource.asObservable();
    clearObserver = this.clearSource.asObservable();

    add(message: Message) {
        if (message) {
            this.messageSource.next(message);
        }
    }

    addAll(messages: Message[]) {
        if (messages && messages.length) {
            this.messageSource.next(messages);
        }
    }

    clear(key?: string) {
        this.clearSource.next(key||null);
    }
}
