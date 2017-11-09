import{Component} from '@angular/core';
import {Employee} from './employee';
import {AppService} from './app.service';
import { Subscription } from 'rxjs/Subscription';
import {EditService} from './app.editservice';
import {UpdateService} from './app.updateservice';
import {GUID} from './guid';
@Component({
	selector: 'maintable',
	templateUrl: './app.maintable.html',
	styleUrls: ['./app.component.css']
})
export class AppMainTable{
	private static tableLocked: boolean = false;
	static setTableLockedStatus(v){
		this.tableLocked = v;
	}
	static getTableLockedStatus(){
		return this.tableLocked;
	}
	tableCaption = 'Сотрудники';
	tableHeaderID = 'ID';
	tableHeaderName = 'ФИО';
	tableHeaderBDay = 'Дата рождения';
	tableHeaderPhone = 'Контактный телефон';
	tableHeaderEmail = 'Электронный адрес';
	tableHeaderResidence = 'Адрес проживания';
	tableHeaderPosition = 'Должность';
	tableHeaderSalary = 'Сумма оклада';
	tableHeaderActions = 'Действия';
	private employeeArr: Array<Employee> = [];
	private _emp: Employee;
	subscription: Subscription;

	constructor(private editService: EditService,
			private appService:AppService,
			private updateService: UpdateService){
		this.subscription = this.appService.getData().subscribe(_emp =>
		this.addRow(_emp));
		this.subscription = this.updateService.getData().subscribe(_emp =>
		this.updateRow(_emp));
	}
	unlockTable(){
		AppMainTable.setTableLockedStatus(false);
	}
	addRow(emp){
		emp.id = GUID.getID();
		this.employeeArr.push(JSON.parse(JSON.stringify(emp)));
	}
	deleteRow(pos){
		if(AppMainTable.getTableLockedStatus()){
			alert("Невозможно удалить запись, т.к. форма находится в режиме редактирования.\nОчистите форму чтобы продолжить.");
		}
		else{
			this.employeeArr.splice(pos, 1);
		}
	}
	editRow(pos){
		AppMainTable.setTableLockedStatus(true);
		this.editService.editEmployee(this.employeeArr[pos]);
	}
	updateRow(emp){
		this.employeeArr[this.getPosFromID(emp.id)] = JSON.parse(JSON.stringify(emp));
		AppMainTable.setTableLockedStatus(false);
	}
	getPosFromID(ID){
		for(let i = 0;i<this.employeeArr.length;i++){
			if(this.employeeArr[i].id === ID){
				return i;
			}
		}
	}

}
