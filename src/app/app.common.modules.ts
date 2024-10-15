import { AsyncPipe } from '@angular/common'
import { SafeHTMLPipe } from './pipes/safe-html.pipe'
import { NgModule } from '@angular/core'
import { DatePipe } from '@angular/common'


@NgModule({
    imports: [ AsyncPipe ], 
    exports: [ AsyncPipe ],
    providers: [
        DatePipe
    ],
    declarations: [
        SafeHTMLPipe,
    ],
})
export class AppModule {
}
