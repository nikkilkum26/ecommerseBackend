import jwt from 'jsonwebtoken'

const generateToken = (id) => {
  return jwt.sign({ id }, '4387yufhiwfhjh34yr78y34ihfu3h', {
    expiresIn: '30d',
  })
}

export default generateToken
