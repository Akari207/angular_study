import { Component } from '@angular/core';

/*
@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.sass']
})
*/

@Component({
   selector: 'my-app',
   template: `<h1>Hello {{title}}</h1>`,
})

export class AppComponent {
   title = 'angular-study';
}
