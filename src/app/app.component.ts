import { Component, OnDestroy, OnInit } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import EventListener from '../app/services/event-listener.service'
import { Subscription } from 'rxjs'
import { AppModule } from '../app/app.common.modules'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppModule],
  template: `
    <h3>{{ title }}<label [innerHtml]="SEPARATOR | safeHTML"></label>{{ loginInfo }}</h3>
    <div>
      <a href="/home">
        Home
      </a>
      <label [innerHtml]="SEPARATOR | safeHTML"></label>
      <a href="/clock">
        Clock
      </a>
      <label [innerHtml]="SEPARATOR | safeHTML"></label>
    </div>
    <hr/>
    <div>
      <router-outlet />
    </div>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit,OnDestroy {
  static readonly _SEPARATOR = "&nbsp;|&nbsp;"
  get SEPARATOR(): string {
    return AppComponent._SEPARATOR
  }

  title = 'Angular19'
  eventSubscription: Subscription|undefined
  loginInfo?: string = ""

  constructor(
    private eventListener :EventListener<any>
  ) { 
  }
 
  ngOnInit(): void {
  
      this.eventSubscription = this.eventListener.subscribe((data?: any) => {
        this.loginInfo = data
      } )
  
    }
  
    ngOnDestroy(): void {
      if (this.eventSubscription !== undefined) {
        this.eventSubscription.unsubscribe()
      }
    }

}
