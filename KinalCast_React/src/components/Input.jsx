import React from 'react'

export const Input = (
  {
    field,
    label,
    value,
    onChangeHandler,
    type,
    showErrorMessage,
    validationMessage,
    onBlurHandler,
    textarea
  }
) => {

  const handleValueChange = ()=>{
    onChangeHandler(e.target.value, field)
  }

  const handleInputBlur = ()=>{
    onBlurHandler(e.target.value, field)
  }


  return (
    <>
      <div className='auth-form-label'>
        <span>{label}</span>
      </div>
      {
        textarea ? (
          <textarea
            type={type}
            value={value}
            rows={5}
            style={{maxWidth: '400px'}}
          />
        ) : (
          <input
            type={type}
            value={value}
            onChange={handleValueChange}
            onBlur={handleInputBlur}
          />
        )
      }
    </>
  )
}
