import React from 'react'
import s from './Greeting.module.css'


type GreetingPropsType = {
    name: string
    setNameCallback: (e: React.ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    addUserWithEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  {name, setNameCallback, addUser, error, totalUsers, addUserWithEnter} // деструктуризация пропсов
) => {
    const inputClass = (!name) ? s.error : s.someClass

    return (
      <div className={s.wrapper}>
          <input value={name} onChange={setNameCallback} className={inputClass} onKeyPress={addUserWithEnter}/>
          <button onClick={addUser}>add</button>
          <span>{totalUsers}</span>
          <div style={{color: "red", height: "50px"}}>{error}</div>
      </div>
    )
}

export default Greeting
