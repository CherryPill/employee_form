import{Component} from '@angular/core';

@Component({
	selector: 'maintable',
	templateUrl: './app.maintable.html',
	styleUrl: './app.component.css',
})
export class AppMainTable{
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
}
