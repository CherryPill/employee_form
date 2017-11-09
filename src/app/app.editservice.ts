import {Injectable} from '@angular/core';
import {Employee} from './employee';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs/Subject';
@Injectable()
export class EditService{
	private emp = new Subject<Employee>();
	editEmployee(emp: Employee): void {
		this.emp.next(emp);
	}

	getData(): Observable<Employee>{
		return this.emp.asObservable();
	}
}
