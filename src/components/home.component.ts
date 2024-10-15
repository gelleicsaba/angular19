import { Component, OnInit, OnDestroy } from '@angular/core'
import EventListener from '../app/services/event-listener.service'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <p>Home page</p>
    <p><button on-click = "setInfo($event)">Write info</button></p>
    @if(showMe) {
        <p>I am here!</p>
    }
    @else {
        <p>I am hidden!</p>
    }
  `
})
export class HomeComponent implements OnInit {
    showMe:boolean = false

    constructor(private eventListener :EventListener<any>) { }

    ngOnInit(): void {
   
    }

    setInfo($event: any){ 
        console.log("button is clicked!")
        if($event) { 
            console.log($event)
            this.eventListener.emit("Message sent")
        } 
    }    

    
}
