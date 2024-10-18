import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})
export class TestService {
    writeHello() :string {
        return "hello"
    }
}
