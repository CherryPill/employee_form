import {Component, ViewChild, Input} from '@angular/core';
import {AppMainTable} from './app.maintable';
import {AppService} from './app.service';
import {Employee} from './employee';
import {Subscription } from 'rxjs/Subscription';
import {EditService} from './app.editservice';
import {UpdateService} from './app.updateservice';
@Component({
	selector: 'mainform',
	templateUrl: './app.mainform.html',
	styleUrls: ['./app.component.css']
	}
)
export class AppMainForm{
	@ViewChild('frm') frm;
	workingMode = 'add';
	formTitle = 'Форма добавления сотрудника';
	formInputLabelFName = 'Имя';
	formInputLabelLName = 'Фамилия';
	formInputLabelMName = 'Отчество';
	formInputLabelBDay = 'Дата рождения';
	formInputLabelPhone = 'Контактный телефон';
	formInputLabelEmail = 'Электронный адрес';
	formInputLabelResidence = 'Адрес';
	formInputLabelPosition = 'Должность';
	formInputLabelSalary = 'Сумма оклада, USD';
	formBtnTextAdd = 'Добавить';
	formBtnTextClear = 'Очистить форму';
	formHandler = "addNewEmployee()";
	private emp: Employee = new Employee();

	subscription: Subscription;

	constructor(private _appService: AppService,
			private editService:EditService,
			private updateService:UpdateService){
		this.subscription = this.editService.getData().subscribe(_emp=>
		this.editEmployee(_emp));
	}
	editEmployee(emp){
		this.emp.id = emp.id;
		this.emp.f_name = emp.f_name;
		this.emp.l_name = emp.l_name ;
		this.emp.m_name = emp.m_name;
		this.emp.f_name = emp.f_name;
		this.emp.bDay = emp.bDay;
		this.emp.phone = emp.phone;
		this.emp.email = emp.email;
		this.emp.residence = emp.residence;
		this.emp.position = emp.position;
		this.emp.salary = emp.salary;
		this.formBtnTextAdd = "Обновить";
		this.workingMode = 'edit';
	}
	addNewEmployee(){
		if(this.frm.valid){
			if(this.workingMode === 'edit'){
				this.updateAddedEmployee();
			}
			else{
				this._appService.addEmployee(this.emp);
				this.resetForm();
			}
		}
		else{
			this.frm.validateAllFields();
		}

	}
	updateAddedEmployee(){
		this.updateService.updateEmployee(this.emp);
		this.resetForm();
	}
	resetForm(){
		this.emp.f_name = "";
		this.emp.l_name = "";
		this.emp.m_name = "";
		this.emp.f_name = "";
		this.emp.bDay = "";
		this.emp.phone = "";
		this.emp.email = "";
		this.emp.residence = "";
		this.emp.position = "";
		this.emp.salary = 0;
		this.formBtnTextAdd = "Добавить";
		this.workingMode = 'add';
		AppMainTable.setTableLockedStatus(false);
	}

}
