import React, { Component } from "react";
import "../../style/style.css";

export default class Conversor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moedaA_valor: "",
      moedaB_valor: 0,
    };

    this.converter = this.converter.bind(this);
  }

  converter() {
    let de_para = `${this.props.moedaA}_${this.props.moedaB}`;
    let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=4d1c18c1bf24e044dcba`;

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        let cotacao = json[de_para];
        let moedaB_valor = parseFloat(
          this.state.moedaA_valor * cotacao
        ).toFixed(2);
        this.setState({ moedaB_valor });
      });
  }

  render() {
    return (
      <div className="conversor">
        <h2 className="title">
          {this.props.moedaA} para {this.props.moedaB}
        </h2>

        <form>
            <input
            className="convert-input"
            placeholder="Digite o valor a ser convertido"
            onChange={(event) => {
                this.setState({ moedaA_valor: event.target.value });
            }}
            ></input>
            
            <input className="convert-btn" type="button" value='Converter' onClick={this.converter}></input>
        </form>

        <h2 className="result">{this.state.moedaB_valor}</h2>
      </div>
    );
  }
}
