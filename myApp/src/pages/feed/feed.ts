import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  somaDoisNumeros( num1: number, num2: number ){
    
     alert( `Resultado do calculo: ${num1 + num2}` )
  }
  ionViewDidLoad() {
   // this.somaDoisNumeros(20, 10)
  }

}
