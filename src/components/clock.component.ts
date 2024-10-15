import { Component, OnInit, OnDestroy, afterNextRender } from '@angular/core'
import { DatePipe } from '@angular/common'
import { Observable, Observer } from 'rxjs'
import { AsyncPipe } from '@angular/common'

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [AsyncPipe],
  providers: [DatePipe],  
  template: `
    <p>Clock page</p>
    <p>{{ time | async }}</p>
  `
})
export class ClockComponent implements OnInit {
    time?: Observable<string|null>

    constructor(private datePipe: DatePipe) {
        afterNextRender(() => {
    
            this.time = new Observable<string|null>((observer: Observer<string|null>) => {
    
                setInterval(() => observer.next(
                    this.datePipe.transform(new Date(),'hh:mm:ss')
                ), 1000)
        
            })
    
        })
    }

    ngOnInit(): void {

    }
    
}
