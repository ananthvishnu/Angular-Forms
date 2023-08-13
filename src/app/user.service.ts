import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class UserService {
// activatedEmitter = new  EventEmitter<boolean>();
//use subject observable
activatedEmitter = new  Subject<boolean>();
}