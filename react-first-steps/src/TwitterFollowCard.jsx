import { useState } from "react";


export function TwitterFollowCard ({ children, userName, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  console.log('[TwitterFollowCard] render with userName: ', userName)

  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          alt='El avatar de midudev'
          src={`https://unavatar.io/${userName}`}
        />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}

//Imperativo: Tienes que darle instrucciones precisas de que hacer, donde, y como actuar. Muchos pasos
//Declarativo: Es cuando le das solo una instrucion, la UI es declarada sin pasos.

// Lo que hace react, es ir de forma practicamente quirurgica y modificar un elemento del dom, sin tener que recargar toda la pagina entera, y como hace esto?
// con el virtual dom, almacena en memoria la ultima version del dom y despues los compara, pero solo hace un cambio especifico. 