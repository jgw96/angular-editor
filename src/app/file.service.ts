import { Injectable } from '@angular/core';

@Injectable()
export class FileService {

  constructor() { }

  public saveFile(code: any, fileName: string): void {
    let mode = sessionStorage.getItem("selectedMode");
    let type;
    if (mode === "go") {
      type = "go";
    } else if (mode === "python") {
      type = "py";
    } else {
      type = "ts";
    };
    let a = document.createElement("a");
    let file = new Blob([code], { type: type });
    a.href = URL.createObjectURL(file);
    a.setAttribute("download", fileName);
    a.click();
  }

  public getFile(): Promise<any> {
    return new Promise((resolve, reject) => {
      let fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.click();
      fileInput.addEventListener("change", (evt: any) => {
        console.log(evt.target.files)
        let files = evt.target.files;
        let reader = new FileReader();
        reader.onload = (e) => {
          console.log(reader.result);
          resolve({text: reader.result, name: files[0].name});
        }
        reader.readAsText(files[0]);
      })
    })
  }

}
