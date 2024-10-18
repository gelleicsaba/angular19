import { Component, OnInit, OnDestroy, signal, effect, WritableSignal, Injector } from '@angular/core'

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  template: `
    <p>Signal example</p>
    <p><button on-click = "incCount($event)">Increment counter</button></p>
    <p>Counter is : {{ counter() }}</p>
  `
})
export class SignalsComponent implements OnInit {
    readonly counter:WritableSignal<number> = signal(0)

    constructor(private injector: Injector) {}

    incCount($event: any){ 
        console.log("button is clicked!")
        this.counter.update((q) => q + 1)
    }

    initializeEffect(): void {
        effect(
            () => { 
                console.log(`The counter is: ${this.counter()}`);    
            }
            , {injector: this.injector})  
    }

    ngOnInit(): void {
        console.log("Init started")
    }    
}
