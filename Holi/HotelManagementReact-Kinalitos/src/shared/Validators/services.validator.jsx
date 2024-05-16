export const validateName = (name) => {
    return name.lenght >= 3 && name.lenght <= 30
}

/* --------------------- MENSAJES DE VALIDACIÓN DE CAMPOS ------------------------------ */
export const nameValidationMessage =
    'El nombre debe tener entre 3 y 12 caracteres'
export const descriptionValidateMessage = 'Debe contener más de 10 caracteres'
