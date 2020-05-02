import React, { useState, useEffect } from 'react'
import Moment from 'moment/moment'

import './style.css'

import api from '../../services/api'

export default function Conteudo() {
  const [cases, setCases] = useState({})

  useEffect(() => {
    api.get('/brazil/uf/df')
    .then(response => {
      if (Array(response.data).length > 0) {
        setCases(response.data)
      } else {
        setCases(response.data)
      }
    })
  }, [])

  async function search(uf) {
    try {
      const data = await api.get('/brazil/uf/'+uf)
      const dados = data.data

      if (dados < 0) throw new Error('Não há dados!')

      setCases(dados)
    } catch (err) {
      console.erro('Deu erro!')
    }
  }

  return (
    <section className="container section-covid">
      <div className="search">
        <form>
          <select name="uf" defaultValue="" id="ufCovid" onChange={(e) => search(e.target.value)}>
            <option value="" disabled>Selecione o seu estado</option>
            <option value="AC">AC</option>
            <option value="AL">AL</option>
            <option value="AM">AM</option>
            <option value="AP">AP</option>
            <option value="BA">BA</option>
            <option value="CE">CE</option>
            <option value="DF">DF</option>
            <option value="ES">ES</option>
            <option value="GO">GO</option>
            <option value="MA">MA</option>
            <option value="MG">MG</option>
            <option value="MS">MS</option>
            <option value="MT">MT</option>
            <option value="PA">PA</option>
            <option value="PB">PB</option>
            <option value="PE">PE</option>
            <option value="PI">PI</option>
            <option value="PR">PR</option>
            <option value="RJ">RJ</option>
            <option value="RN">RN</option>
            <option value="RS">RS</option>
            <option value="RO">RO</option>
            <option value="RR">RR</option>
            <option value="SC">SC</option>
            <option value="SE">SE</option>
            <option value="SP">SP</option>
            <option value="TO">TO</option>
          </select>
        </form>
      </div>
      {/* <div className="pesquisa-covid">
        <form action="">
          <input type="text" name="" placeholder="Pesquise aqui..." />
        </form>
      </div> */}
      <div className="cards">
          <div className="card">
            <div className="number-cases">
              <span className="card-text">{cases.cases}</span>
            </div>
            <div className="cases-content">
              <h5 className="card-title">Casos</h5>
            </div>
          </div>

          <div className="card">
            <div className="number-cases">
              <span className="card-text">{cases.suspects}</span>
            </div>
            <div className="cases-content">
              <h5 className="card-title">Suspeitos</h5>
            </div>
          </div>

          <div className="card">
            <div className="number-cases">
              <span className="card-text">{cases.deaths}</span>
            </div>
            <div className="cases-content">
              <h5 className="card-title">Mortes</h5>
            </div>
          </div>
      </div>

      <div className="info-locale-date">
        <div className="info-locale">
          <span>{'Estado: '+cases.state}</span>
        </div>
        <div className="info-date">
          <span>{'Atualização: '+Moment(cases.datetime).format('DD/MM/YYYY H:m')}</span>
        </div>
      </div>
    </section>
  )
}