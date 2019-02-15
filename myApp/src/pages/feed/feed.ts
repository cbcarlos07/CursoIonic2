import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { FilmeDetalhesPage } from '../filme-detalhes/filme-detalhes';

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
  private loader
  private refresher
  private isRefreshing = false
  private infiniteScroll
  public page = 1
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private movieProvider: MovieProvider,
              private loadingCtrl: LoadingController) {
  }
  somaDoisNumeros( num1: number, num2: number ){
    
     alert( `Resultado do calculo: ${num1 + num2}` )
  }
  ionViewDidEnter() {
     
     this.carregarFilmes() 
  }
  carregarFilmes(newPage: boolean =  false){
    this.abreCarregando()
    this.movieProvider.getLatestMovies(this.page)
                       .subscribe( data => {
                         const response = (data as any)
                         const obj_retorno = JSON.parse(response._body)
                         if( newPage ){
                          this.listaFilmes = this.listaFilmes.concat(obj_retorno.results)
                          //this.infiniteScroll.complete()
                         }else{
                           this.listaFilmes = obj_retorno.results
                         }
                         console.log(obj_retorno)
                         this.fechaCarregando()
                         
                         if(this.isRefreshing){
                          this.refresher.complete()
                          this.isRefreshing = false
                         }
                         
                       }, error =>{
                         console.log('error',error);
                         this.fechaCarregando() 
                         this.infiniteScroll.complete() 
                         if(this.isRefreshing){
                          this.refresher.complete()
                          this.isRefreshing = false
                         }
                       } )
  }

  abreCarregando() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando filmes"
    });
    this.loader.present();
  }
  fechaCarregando(){
    this.loader.dismiss()
  }

  doRefresh(refresher) {
    this.refresher = refresher 
    this.isRefreshing = true 
    this.carregarFilmes()
  }

  abrirDetalhes( id ){
    this.navCtrl.push( FilmeDetalhesPage, {id: id} )
  }

  doInfinite( infiniteScroll ){
     this.page++
     this.infiniteScroll = infiniteScroll
     this.carregarFilmes(true);
  }

}
