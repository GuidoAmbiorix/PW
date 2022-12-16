import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password:string = '';
  isLength = true;

  @ViewChild('length') length!: ElementRef;

  constructor(){

  }

  ngOnInit(): void {
    if(this.length != null){
      this.isLength = false;
    }else{
      this.isLength = true;
    }
  }

  //Length:number = 0;

  onChangeUseLetters(){
  this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }


  onButtonClick(){
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwyz';
    const symbols = '!@#$%^&*()';

    let validChars:string = '';
    if(this.includeLetters){
    validChars += letters;
    }

    if(this.includeNumbers)
    {
    validChars += numbers;
    }

    if(this.includeSymbols){
    validChars += symbols;
    }

    let generatedPassword = '';
    for(let i = 0;i<this.length.nativeElement.value;i++){
    const index = Math.floor(Math.random() * validChars.length);
    generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }


}
