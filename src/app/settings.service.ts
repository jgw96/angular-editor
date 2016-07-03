import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {

  defaultSettings: any;

  constructor() {
    this.defaultSettings = {
      mode: "text/typescript",
      theme: "cobalt",
      lineNumbers: true,
      viewportMargin: Infinity
    }
  }

  public getDefault() {
    return this.defaultSettings;
  }

}
