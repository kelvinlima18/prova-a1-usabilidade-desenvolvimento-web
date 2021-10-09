import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'prova-a1-usabilidade-web';
  @Input() binario = '';

  ngOnInit(): void { }

  decimal = 0;
  calcularDecimal() {
    this.decimal = parseInt(this.binario, 2);
  }
}
