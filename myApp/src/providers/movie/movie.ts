//import { HttpClient, Http } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MovieProvider {
  api_key = 'bcd9f1ea08ec22eca153e63973a0e9ef'
  private baseApiPath = 'https://api.themoviedb.org/3'
  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  getLatestMovies(){
    
    //return this.http.get(`${this.baseApiPath}/movie/latest?api_key=${this.api_key}`)
    return this.http.get(`${this.baseApiPath}/movie/popular?api_key=${this.api_key}`)
  }

}
