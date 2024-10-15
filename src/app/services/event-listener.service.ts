import { EventEmitter } from '@angular/core'
import { Injectable } from '@angular/core'
import { Subscription } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export default class EventListener<T> {
    private listener = new EventEmitter<T>()

    constructor() {}
    
    public emit(data?: T) : void {
      this.listener.emit(data);
    }

    public subscribe(callback: Function) : Subscription {
        return this.listener.subscribe(callback)
    }

}
