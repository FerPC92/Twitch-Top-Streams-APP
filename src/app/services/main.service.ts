import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MainService {

  


  topStreamers:object[] = []

  summary:object;

  chartNames:object[] = [];

  chartViews:object[] = [];


  constructor(public _http : HttpClient) { 
     this.getStreamers();
     this.getSummary();
     this.getChartInfo();
    
  }


   get(url: string, headers:any = {'Accept': 'application/vnd.twitchtv.v5+json','Client-ID':'Your client ID'}): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders(headers)
    };
    return this._http.get(url, httpOptions)
  }

  getStreamers(){

    this.get(`https://api.twitch.tv/kraken/streams`).subscribe(response => { 

      this.topStreamers = []
  
        for(let i=0 ; i < response["streams"].length ; i++){
        
           this.topStreamers.push(response["streams"][i])

        } 
     
      })

      
      
      
  } 

  getSummary(){
    this.get(`https://api.twitch.tv/kraken/streams/summary`).subscribe(response => { 
  
        this.summary = response;  
    })
    
  }

  getChartInfo(){
    this.get(`https://api.twitch.tv/kraken/streams`).subscribe(response => { 

  
        for(let i=0 ; i < 10 ; i++){
        
           this.chartNames.push(response["streams"][i]["channel"]["display_name"])
           this.chartViews.push(response["streams"][i]["viewers"])
        } 

      })


  }


    



 }



