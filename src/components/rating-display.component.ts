import { Component, OnInit, Input } from '@angular/core';

const HTML_TEMPLATE = `
<div class="title">
  <h3>{{title}}</h3>
  <div class="rating">
      <button [ngStyle]="{'width' : fontSize, 'height' : fontSize}" *ngFor="let index of starsArray" id="{{index}}" type="button" ion-button icon-only>
          <ion-icon [ngStyle]="{'color':index < this.Math.round(this.parseFloat(note)) ? activeColor : defaultColor, 'font-size' : fontSize }" 
          name="{{(halfStar ==='true' && (note - index > 0) && (note - index <= 0.5)) ? halfIcon : (index < this.Math.round(this.parseFloat(note))) ? activeIcon : defaultIcon}}"></ion-icon>
      </button>
      <h4>{{note}} / 5</h4>
  </div>
  <p>{{totalNote}} Vote(s)</p>
</div>

<div class="rating-statistics">

  <div class="statistic has-rate" *ngIf="fivePourcent>0">
    <div class="label">5 {{labelStars}}</div>
    <div class="progress-bar">
      <div class="bar" [ngStyle]="{'width': fivePourcentProgress}"></div>
    </div>
    <div class="value">{{fivePourcent}}%</div>
  </div>
  <div class="statistic" *ngIf="fivePourcent==0">
      <div class="label">5 {{labelStars}}</div>
      <div class="progress-bar">
        <div class="bar" [ngStyle]="{'width': fivePourcentProgress}"></div>
      </div>
      <div class="value">{{fivePourcent}}%</div>
    </div>

  <div class="statistic has-rate" *ngIf="fourPourcent>0">
    <div class="label">4 {{labelStars}}</div>
    <div class="progress-bar">
      <div class="bar" [ngStyle]="{'width': fourPourcentProgress}"></div>
    </div>
    <div class="value">{{fourPourcent}}%</div>
  </div>
  <div class="statistic" *ngIf="fourPourcent==0">
      <div class="label">4 {{labelStars}}</div>
      <div class="progress-bar">
        <div class="bar" [ngStyle]="{'width': fourPourcentProgress}"></div>
      </div>
      <div class="value">{{fourPourcent}}%</div>
    </div>

  <div class="statistic has-rate"  *ngIf="threePourcent>0">
    <div class="label">3 {{labelStars}}</div>
    <div class="progress-bar">
      <div class="bar" [ngStyle]="{'width': threePourcentProgress}" ></div>
    </div>
    <div class="value">{{threePourcent}}%</div>
  </div>

  <div class="statistic"  *ngIf="threePourcent==0">
      <div class="label">3 {{labelStars}}</div>
      <div class="progress-bar">
        <div class="bar" [ngStyle]="{'width': threePourcentProgress}" ></div>
      </div>
      <div class="value">{{threePourcent}}%</div>
    </div>

  <div class="statistic has-rate" *ngIf="twoPourcent>0">
    <div class="label">2 {{labelStars}}</div>
    <div class="progress-bar">
      <div class="bar" [ngStyle]="{'width': twoPourcentProgress}"></div>
    </div>
    <div class="value">{{twoPourcent}}%</div>
  </div>

  <div class="statistic" *ngIf="twoPourcent==0">
      <div class="label">2 {{labelStars}}</div>
      <div class="progress-bar">
        <div class="bar" [ngStyle]="{'width': twoPourcentProgress}"></div>
      </div>
      <div class="value">{{twoPourcent}}%</div>
    </div>

    <div class="statistic has-rate" *ngIf="onePourcent>0">
        <div class="label">1 {{labelStars}}</div>
        <div class="progress-bar">
          <div class="bar" [ngStyle]="{'width': onePourcentProgress}"></div>
        </div>
        <div class="value">{{onePourcent}}%</div>
      </div>

  <div class="statistic" *ngIf="onePourcent==0">
    <div class="label">1 {{labelStars}}</div>
    <div class="progress-bar">
      <div class="bar" [ngStyle]="{'width': onePourcentProgress}"></div>
    </div>
    <div class="value">{{onePourcent}}%</div>
  </div>
 
</div>

`;
 
const CSS_STYLE = `
.title {
  padding-right: 50px;
  background-color:white;
}

.title h3{
  margin: 0;
  color: #81C200;
}

.rating{
  display: flex;
  align-items: center;
}

.title  button {
      background: none;
      box-shadow: none;
      -webkit-box-shadow: none;
      padding : 0px;
}
.title  h4{
      margin: 0 0 0 12px;
      font-size: 17px;
      font-weight: 500;
      position: relative;
      bottom: -3px;
      color: #81C200;
}
.title  p{
      font-weight: 500;
      color: #555555;
  }


 .statistic {
              display: flex;
              align-items: center;
              color: #0081C2;
              &:not(.has-rate){
                  color: #767676;
              }

              &+.statistic {
                  margin-top: 8px;
              }
}
.label {
  flex: 0 0 72px;
  font-weight: 500;
}
.value {
  flex: 0 0 50px;
  text-align: right;
  font-weight: 500;
}
.progress-bar {
  flex: 1;
  position: relative;
  height: 22px;
  background: #F3F3F3;
  border-radius: 2px;
  box-shadow: inset 0px 0px 0px 1px #D5D5D5, inset 0px 3px 6px 1px rgba(151, 151, 151, 0.4);
  
}
.bar{
  position: absolute;
  height: 100%;
  left: 0;
  top: 0;
  background-image: linear-gradient(180deg, #FFCB00 1%, #FEAF01 100%);
  box-shadow: inset 0px 0px 0px 1px #B17704;
}
`;
 
@Component({
  selector: 'rating-display',
  template: HTML_TEMPLATE,
  styles: [CSS_STYLE]
})

export class IdRatingDisplayComponent implements OnInit {

  @Input() title : string="";
  @Input() labelStars : string="étoiles";
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
   
  }

  ngOnInit() {
    this.starsArray=[]
    for(var i=0; i < 5; i++) {
      this.starsArray.push(i);
    }
    this.calculate()
   }

}