export function passwordValidator(password) {
  if (!password) return "sport can't be empty."
  if (password.length < 5) return 'sport must be at least 5 characters long.'
  return ''
}
