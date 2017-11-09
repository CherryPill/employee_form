import {Injectable} from '@angular/core';
import {Employee} from './employee';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs/Subject';
@Injectable()
export class AppService{
	private emp = new Subject<Employee>();
	addEmployee(emp: Employee): void {
		this.emp.next(emp);
	}
	getData(): Observable<Employee>{
		return this.emp.asObservable();
	}
}
