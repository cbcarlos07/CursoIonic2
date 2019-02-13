import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
      MovieProvider
  ]
})
export class FeedPage {
  feed = {
      titulo:    'Carlos Bruno',
      data:      'November 5, 1955',
      descricao: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.',
      likes: 12,
      comments: 4,
      timeComments: '11h ago'
  }
  listaFilmes = new Array<any>()
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private movieProvider: MovieProvider) {
  }
  somaDoisNumeros( num1: number, num2: number ){
    
     alert( `Resultado do calculo: ${num1 + num2}` )
  }
  ionViewDidLoad() {
     this.movieProvider.getLatestMovies()
                       .subscribe( data => {
                         const response = (data as any)
                         const obj_retorno = JSON.parse(response._body)
                         this.listaFilmes = obj_retorno.results
                         console.log(obj_retorno)
                       } )
  }

}
