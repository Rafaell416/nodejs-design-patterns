console.log(localStorage.length)

const uid = localStorage.getItem('uid')

console.log('user_id', uid)

if (!uid) {
  console.log('User id not found, Setting the user id and a token...')
  localStorage.setItem('user_id', '12345')
  localStorage.setItem('token', 'añlkdsaru938wh12kx231809csesx')
} else {
  console.log('User id found', uid)
  console.log('Clearing the user id...')
  localStorage.clear()
}
