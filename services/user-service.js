class UserService {
  async save (body) {
    let message = `Hello ${body.firstName} ${body.lastName}, Thank you for signing up. Your account is now created.`
    if (body.isSubscribedToNewsLetter) {
      message += `You would be receiving our periodic newsletters to your email: ${body.email}`
    }
    return message
  }
}

module.exports = new UserService()
