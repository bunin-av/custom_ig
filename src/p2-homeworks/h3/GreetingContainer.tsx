import React, {useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: React.ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value)
        setError('')
    }
    const addUser = () => {
        if (name) {
            addUserCallback(name)
            setName('')
            alert(`Hello ${name}!`)
        } else {
            setError('Name required!')
        }
    }

    const addUserWithEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addUser()
        }
    }

    const totalUsers = users.length

    return (
      <Greeting
        name={name}
        setNameCallback={setNameCallback}
        addUser={addUser}
        error={error}
        totalUsers={totalUsers}
        addUserWithEnter={addUserWithEnter}
      />
    )
}

export default GreetingContainer
