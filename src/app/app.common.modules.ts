import { AsyncPipe } from '@angular/common'
import { NgModule } from '@angular/core'
import { DatePipe } from '@angular/common'

@NgModule({
    imports: [ AsyncPipe ], 
    exports: [ AsyncPipe ],
    providers: [
        DatePipe
    ]
})
export class AppModule {
}
