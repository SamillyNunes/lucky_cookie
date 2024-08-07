import React, { Component } from "react";
import './App.css';
import CookieBtn from "./components/CookieBtn";

class App extends Component{

  constructor (props){
    super(props);
    this.state={
      currentPhrase: '',
    }

    this.breakCookie = this.breakCookie.bind(this);

    this.phrases= [
      'Siga os bons e aprenda com eles.', 
      'O bom-senso vale mais do que muito conhecimento.', 
      'O riso é a menor distância entre duas pessoas.', 
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.'
    ];
  }

  breakCookie(){
    let state = this.state;
    let randomNumber = Math.floor(Math.random() * this.phrases.length);
    state.currentPhrase = '" '+ this.phrases[randomNumber] + ' "';
    this.setState(state);
  }

  render(){
    return (
      <div className="container">
        <img src={require('./assets/biscoito.png')} className="img" />
        <CookieBtn title="Abrir Biscoito" action={this.breakCookie} />
        <h3 className="phrase">{this.state.currentPhrase}</h3>

      </div>
    );
  }
}



export default App;