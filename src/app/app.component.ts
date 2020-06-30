import { HttpClient } from '@angular/common/http';
import { Component , OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'Fq';
  vars:boolean =false;
  symbolName ="";
  price="";
  searchSymbol ="";
  symbols =[];
  compareSymbols =[];
  subscription: Subscription;
statusText: string;
  isInputProvided:boolean= false
    constructor(private test:AuthService){}
  ngOnInit(){
    this.test.getSymbolData().subscribe((res)=>{
      console.log(res[0].symbol)
    for(let q =0 ; q<=10; q++){
      this.symbols[q] = res[q]
    }
     localStorage.setItem("symbols",JSON.stringify(this.symbols))
    })

    this.subscription = timer(0,5000).subscribe((res)=>{
      this.test.getSymbolData().subscribe((res)=>{
     
        for(let q =0 ; q<=10; q++){
        
           this.compareSymbols[q] =res[q]
                       
        }
       
        for(let h =0; h<=10; h++){
                  if(this.compareSymbols[h].price !=this.symbols[h].price){
           
              this.vars = true
          }
          else{
            this.vars = false
          }
        }
        
        
      })
    })
  
  }
  showAddSymbol(){
    this.isInputProvided = true
    console.log("hello ")
  }
  symbolSubmit(){
    console.log(this.symbolName)  
    this.test.checkSymbol(this.symbolName)
      
      .subscribe(
        data => confirm("This Symbol Already Exist "),
        error => confirm("You can not add a Symbol ")
        
      );
  }
  symbolSearch(){
  let sym =[];
  sym=this.symbols.find(x=>x.symbol==this.searchSymbol)
    this.symbols= [];
    this.symbols.push(sym)
  console.log(sym)
  }
  symbolDelete(x){
    
    for(let k =0; k<= this.symbols.length; k++){
      if(this.symbols[k].symbol== x.symbol){
        this.symbols.splice(k,1);
        k--;

        console.log(k)
      }
    }   
  }
}

