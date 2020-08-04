import React from 'react'
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem() {
  return (
    <main>
      <article className="teacher-item">
        <header>
          <img
            src="https://pbs.twimg.com/profile_images/1290456912798969856/6T1KLVpH_400x400.jpg"
            alt="Ana Almeida"
          />
          <div>
            <strong>Ana Almeida</strong>
            <span>Língua Portuguesa</span>
          </div>
        </header>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            Minus modi aut sunt. Modi delectus rerum adipisci et, enim ut atque, facere amet, aut consequatur eius optio. Qui neque tenetur cum.
          </p>

        <footer>
          <p>
            Preço/hora
               <strong>R$ 80,00</strong>
          </p>
          <button type="button">
            <img src={whatsAppIcon} alt="WhatsApp" />
              Entrar em contato
            </button>
        </footer>
      </article>
    </main>
  )
}

export default TeacherItem