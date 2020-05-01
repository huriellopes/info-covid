import React from 'react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import './style.css'

function Footer () {
  return (
    <footer className="container footer-covid">
      <div className="direitos">
        <p>&copy; Todos os direitos reservados</p>
      </div>
      <div className="redes">
        <span>
          <a rel="noopener noreferrer" href="//github.com/huriellopes" target="_blank">
            <FiGithub size={20} color="#000000" />
          </a>
        </span>
        <span>
          <a rel="noopener noreferrer" href="//www.linkedin.com/in/huriellopes" target="_blank">
            <FiLinkedin size={24} />
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer