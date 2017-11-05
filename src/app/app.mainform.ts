import {Component} from '@angular/core';

@Component({
	selector: 'mainform';
	templateUrl: './app.mainform.html',
	styleUrl: './app.component.css'
	}
)
export class AppMainForm{
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
}
