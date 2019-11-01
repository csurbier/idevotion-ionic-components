import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rating-display',
  templateUrl: './rating-display.component.html',
  styleUrls: ['./rating-display.component.scss'],
})
export class IdRatingDisplayComponent implements OnInit {

  @Input() title : string="";
  @Input() note : number=0;
  @Input() totalNote : number=0;;
  @Input() nbNoteOne : number;
  @Input() nbNoteTwo :number=0;
  @Input() nbNoteThree :number=0;
  @Input() nbNoteFour :number=0;
  @Input() nbNoteFive :number=0;
  @Input() activeColor : string = '#ffa500';
  @Input() defaultColor : string = '#767676';
  activeIcon : string = 'ios-star';
  defaultIcon : string = 'ios-star-outline';
  halfIcon : string = 'ios-star-half';
  fivePourcent:number=0;
  fivePourcentProgress="0%"
  fourPourcent:number=0;
  fourPourcentProgress="0%"
  threePourcent:number=0;
  threePourcentProgress="0%"
  twoPourcent:number=0;
  twoPourcentProgress="0%"
  onePourcent:number=0;
  onePourcentProgress="0%"
  private fontSize = "32px"
  private halfStar = 'true';
  private starsArray : any;
  Math: any;
  parseFloat : any;
 
  constructor() {
    this.Math = Math;
    this.parseFloat = parseFloat;
  }
 
  calculate(){
    console.log("Note "+this.note)
    if (this.note<0){
      this.note=0
    }
    else if (this.note>5){
      this.note=5
    }
    this.onePourcent = Number(((this.nbNoteOne/this.totalNote)*100).toFixed(1))
    this.onePourcentProgress = String(this.onePourcent)+"%"
    this.twoPourcent = Number(((this.nbNoteTwo/this.totalNote)*100).toFixed(1))
    this.twoPourcentProgress = String(this.twoPourcent)+"%"
    this.threePourcent = Number(((this.nbNoteThree/this.totalNote)*100).toFixed(1))
    this.threePourcentProgress = String(this.threePourcent)+"%"
    this.fourPourcent = Number(((this.nbNoteFour/this.totalNote)*100).toFixed(1))
    this.fourPourcentProgress = String(this.fourPourcent)+"%"
    this.fivePourcent = Number(((this.nbNoteFive/this.totalNote)*100).toFixed(1))
    this.fivePourcentProgress = String(this.fivePourcent)+"%"
    console.log("On a "+this.onePourcent+" "+this.onePourcentProgress)
    console.log("On a "+this.twoPourcent+" "+this.twoPourcentProgress)
    console.log("On a "+this.threePourcent+" "+this.threePourcentProgress)
    console.log("On a "+this.fourPourcent+" "+this.fourPourcentProgress)
    console.log("On a "+this.fivePourcent+" "+this.fivePourcentProgress)
  }

  ngOnInit() {
    this.starsArray=[]
    for(var i=0; i < 5; i++) {
      this.starsArray.push(i);
    }
    console.log("On calcule les notes")
    this.calculate()
   }

}