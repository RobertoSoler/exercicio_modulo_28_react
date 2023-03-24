import { useState, useEffect } from "react"
import styles from './Form.module.css';

const Formulario = () => {

    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);

    const renderizaResultado = () => {

        const imc = peso / (altura ** 2);
        let avaliacao = "";

        if (imc < 18.5) {
            avaliacao = "Peso Baixo";
          } else if (imc >= 18.5 && imc <= 24.9) {
            avaliacao = "Peso Normal";
          } else if (imc >= 25 && imc <= 29.9) {
            avaliacao = "Sobrepeso";
          } else if (imc >= 30 && imc <= 34.9) {
            avaliacao = "Obesidade Grau I";
          } else if (imc >= 35 && imc <= 39.9) {
            avaliacao = "Obesidade Grau II";
          } else {
            avaliacao = "Obesidade Grau III";
          };

        if (peso >= 1 && altura > 0)
        return (
            <p>Resultado: { imc.toFixed(1) } - { avaliacao }</p>
        )

    }

    return (
      <div className="container">
        <h1>Cálculo de IMC - Índice de Massa Corporal</h1>
        <form className={styles.form}>
            <label for="peso">Informe seu Peso (kg)</label>
            <label for="peso">Informe sua altura (m)</label><br></br>
            <input type="number" step=".1" id="peso" onChange={evento => setPeso(evento.target.value)} />
            <input type="number" step=".01" id="altura" onChange={evento => setAltura(evento.target.value)} />
            {renderizaResultado()}
        </form>
        <img className={styles.tabela} src="https://falandodeobesidade.com/wp-content/uploads/2021/07/classiicacao-IMC-por-1.png"/>
      </div>
    )
}

export default Formulario