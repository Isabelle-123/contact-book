UNDER PROGRESS

Fullstack app to keep track on contacts

Online copurse from: https://www.udemy.com/course/modern-react-front-to-back/

//npm run dev to run client (5000) and server (3000)
//npm run server to run server (3000)

ERROR
xhr.js:178 POST http://localhost:3000/api/users 431 (Request Header Fields Too Large)

Tried:
Cleared site data, cache och cookies
Update Node
Upgrade axios
Downgrade axios
changed max-http-header-size to: NODE_OPTIONS=--max-http-header-size=80000
'http://localhost:4000/api/users'
