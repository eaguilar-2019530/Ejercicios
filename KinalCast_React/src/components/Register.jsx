import { Input } from "./Input.jsx"
import { useState } from "react"


export const Register = ({switchAuthHandler}) => {

  const [formData, setFormData] = useState(
    {
      email: {
        value: '',
        isValid: false,
        showError: false
      },
      username: {
        value: '',
        isValid: false,
        showError: false
      },
      password: { 
        value: '',
        isValid: false,
        showError: false
      },
      passwordConfirm:{
        value: '',
        isValid: false,
        showError: false
      }
    }
  )
  return (
    <div className='register-container'>
      <form>
        <Input
          field='email'
          label=' Email '
          value={formData.email.value}
          onChangeHandler={()=> console.log(formData)}
        />
        <button>
          Register
        </button>
      </form>
      <span onClick={switchAuthHandler}>
        ¿Ya tienes una cuenta? ¡Inicia sesión acá!
      </span>
    </div>
  )
}
