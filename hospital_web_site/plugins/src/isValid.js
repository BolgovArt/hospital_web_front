export function isValidNameAndSurname(value) {
    return value.length >= 2
}

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
export function isValidEmail (value) {
    return EMAIL_REGEXP.test(value)
}