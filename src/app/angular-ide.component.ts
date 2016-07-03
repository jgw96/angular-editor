import { Component } from '@angular/core';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';

import { EditorComponent } from "../app/editor/editor.component";

@Component({
  moduleId: module.id,
  selector: 'angular-ide-app',
  templateUrl: 'angular-ide.component.html',
  styleUrls: ['angular-ide.component.css'],
  directives: [EditorComponent, MD_TOOLBAR_DIRECTIVES]
})
export class AngularIdeAppComponent {

  constructor() {
    
  }


}
