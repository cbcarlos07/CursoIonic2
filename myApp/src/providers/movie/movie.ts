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

  getLatestMovies( page = 1 ){
    
    //return this.http.get(`${this.baseApiPath}/movie/popular?api_key=${this.api_key}`)
    return this.http.get(this.baseApiPath + `/movie/popular?page=${page}&api_key=` + this.api_key)
    //return this.http.get('https://api.themoviedb.org/3/movie/popular?page=1&api_key=bcd9f1ea08ec22eca153e63973a0e9ef')
  }

  getMovie(id){
     return this.http.get( `${this.baseApiPath}/movie/${id}?api_key=${this.api_key}` )
  }

}
