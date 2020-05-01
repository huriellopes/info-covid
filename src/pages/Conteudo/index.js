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

  return (
    <section className="container section-covid">
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