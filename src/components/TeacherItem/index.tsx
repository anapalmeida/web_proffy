import React from 'react'
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'
import api from '../../services/api'

export interface Teacher {
  name: string
  id: number
  avatar: string
  whatsapp: string
  bio: string
  cost: number
  subject: string
}

interface TeacherItemProps {
  teacher: Teacher
}

const TeacherItem: React.FunctionComponent<TeacherItemProps> = ({ teacher }) => {

  function createNewConnection() {
    api.post('/connections', {
      user_id: teacher.id
    })
  }

  return (
    <main>
      <article className='teacher-item'>
        <header>
          <img
            src={teacher.avatar}
            alt={teacher.name}
          />
          <div>
            <strong>{teacher.name}</strong>
            <span>{teacher.subject}</span>
          </div>
        </header>

        <p>{teacher.bio}</p>

        <footer>
          <p>
            Preço/hora
               <strong>R$ {teacher.cost}</strong>
          </p>
          <a
            target='_blank'
            href={`https://wa.me/${teacher.whatsapp}`}
            onClick={createNewConnection}>
            <img src={whatsAppIcon} alt='WhatsApp' />
              Entrar em contato
            </a>
        </footer>
      </article>
    </main>
  )
}

export default TeacherItem