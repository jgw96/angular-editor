import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { MD_BUTTON_DIRECTIVES } from "@angular2-material/button";
import { MD_INPUT_DIRECTIVES } from "@angular2-material/input";
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';   

import { SettingsService } from "../settings.service";
import { FileService } from "../file.service";

declare var CodeMirror: any;

@Component({
  moduleId: module.id,
  selector: 'app-editor',
  templateUrl: 'editor.component.html',
  styleUrls: ['editor.component.css'],
  providers: [SettingsService, FileService, MdIconRegistry],
  directives: [MD_BUTTON_DIRECTIVES, MD_INPUT_DIRECTIVES, MdIcon]
})
export class EditorComponent implements AfterViewInit {
  
  myCodeMirror: any;
  @ViewChild("codeEditor") editor: ElementRef;
  @ViewChild("saveModal") modal: ElementRef;
  @ViewChild("modeModal") modeModal: ElementRef;

  constructor(private settings: SettingsService, private fileService: FileService) {

  }

  ngAfterViewInit() {
    this.myCodeMirror = CodeMirror.fromTextArea(this.editor.nativeElement, this.settings.getDefault());
  }

  private undoEdit(): void {
    this.myCodeMirror.undo();
  }

  private redoEdit(): void {
    this.myCodeMirror.redo();
  }

  private save(fileName: string): void {
    let code = this.myCodeMirror.getValue();
    this.fileService.saveFile(code, fileName);
    this.closeModal();
  }

  private openFile(): void {
    this.fileService.getFile().then((result) => {
      this.myCodeMirror.setValue(result.text);
      let fileType = result.name.substr(result.name.indexOf(".") + 1);
      if (fileType === "go") {
        this.myCodeMirror.setOption("mode", "go");
      } else if (fileType = "py") {
        this.myCodeMirror.setOption("mode", "python");
      } else if (fileType = "ts") {
        this.myCodeMirror.setOption("mode", "text/typescript");
      };
    })
  }

  private closeModal(): void {
    this.modal.nativeElement.close();
  }

  private openModal(): void {
    this.modal.nativeElement.showModal();
  }

  private clear(): void {
    this.myCodeMirror.setValue("");
  }

  private openSettings(): void {
    this.modeModal.nativeElement.showModal();
  }

  private closeModeModal(): void {
    this.modeModal.nativeElement.close();
  }

  private getMode(mode: string): void {
    sessionStorage.setItem("selectedMode", mode);
    this.myCodeMirror.setOption("mode", mode);
    this.closeModeModal();
  }
}
