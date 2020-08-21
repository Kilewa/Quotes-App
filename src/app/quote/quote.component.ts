import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes=[new Quote("Kilewa","George Kilewa","Change is Permanent"),
  new Quote("George Kilewa","Martin Lutha King Jnr","Every man must decide whether he will walk in the light of creative altruism or in the darkness of destructive selfishness.")]
  initial_val:number
  high_val:number
  counter:number

  addQuote(emittedQuote){
    this.quotes.push(emittedQuote)
  }

  upvote(i){
      this.quotes[i].upvotes+=1
  }
  downvote(i){
    this.quotes[i].downvotes-=1
  }
  delQuote(i){
    this.quotes.splice(i, 1)
  }
  highestUpvote(){
    this.initial_val = 0
    this.high_val = 0

    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.high_val = this.quotes[this.counter].upvotes;
      if(this.high_val > this.initial_val){this.initial_val = this.high_val}
    }
    return  this.initial_val
  }
  constructor() { }

  ngOnInit() {
  }

}