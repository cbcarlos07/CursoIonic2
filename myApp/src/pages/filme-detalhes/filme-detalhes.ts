import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FilmeDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filme-detalhes',
  templateUrl: 'filme-detalhes.html',
})
export class FilmeDetalhesPage {
  public filme;
  private loader
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private movieProvider: MovieProvider,
              private loadingCtrl: LoadingController ) {
       
  }

  ionViewDidEnter() {
      let id = this.navParams.get('id')
       this.carregarFilme( id )
  }
  carregarFilme( id ){
     this.carregandoFilme()
      this.movieProvider.getMovie( id )
                        .subscribe( data => {
                           let response = (data as any)
                           this.filme = JSON.parse(response._body)
                           this.fecharCarregando()
                        },error => {
                          console.error(error)
                          this.fecharCarregando()
                        })
  }

  carregandoFilme(){
    this.loader = this.loadingCtrl.create({
      content: 'Carregando o filme selecionado'
    })
    this.loader.present()
  }
  fecharCarregando(){
    this.loader.dismiss()
  }

}
