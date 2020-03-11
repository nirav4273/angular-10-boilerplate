import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {
	
	language:string;

	constructor(private translate: TranslateService) { }

	ngOnInit(): void {
		this.language = this.translate.getDefaultLang();
	}

	onChange(event): void{
		console.log(event);
		this.translate.use(event.target.value);
		this.translate.setDefaultLang(event.target.value);
	}

}
