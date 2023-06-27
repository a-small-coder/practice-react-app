import { useState } from 'react'
import './loginPage.css'
const LoginPage = () => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const [checkbox, setCheckbox] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        setLogin('')
        setPassword('')   
        console.log(checkbox)
    }

    return (
        <div className="container">
            <div className="main-login login-page">
                <form className='form' onSubmit={onSubmit}>
                    <div className='login-form__item form-item'>
                        <label className='form-item__label'>
                            Login
                        </label>
                        <input 
                            type="text" 
                            className='form-item__input'
                            value={login}
                            onChange={(event) => setLogin(event.target.value)}
                        />
                    </div>
                    <div className='login-form__item form-item'>
                        <label className='form-item__label'>
                            password
                        </label>
                        <input 
                            type="password" 
                            className='form-item__input'

                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        
                    </div>

                    <div className='login-form__item form-item'>
                        <label className='form-item__label'>
                            password
                        </label>
                        <input type='checkbox' 
                            className='form-item__checkbox'
                            value={checkbox}
                            onChange={() => setCheckbox(!checkbox)}
                        />
                        
                    </div>

                    <button type='submit'>
                        Войти
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage