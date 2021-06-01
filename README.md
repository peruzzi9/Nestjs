# ===== 01062021 2=========
- solve prettier and ESLint errors
# ===== 01062021 1=========
- add compodoc to broject to make auto documentation
- npm i -D @compodoc/compodoc
- npx @compodoc/compodoc -p tsconfig.json -s
- Open your browser and navigate to http://localhost:8080. You should see an initial Nest CLI project:

- define todo entity
- define todo dto (server >>> client)
- define todo create dto (client >>> server)
- define todo list dto (server >>> client)

# ===== 31052021 3=========
- create ToDo module/controller/service with auto import/include
- using commands :
nest generate module Todo
nest generate controller Todo
nest generate service Todo

note : generated class name will be TodoModule and so on for controller and service .
# ===== 31052021 2=========
- install dotenv with its types (for typescript)
-  dotenv NPM package to easily manage your environment variables in your application
- npm i  dotenv
- npm i @types/dotenv -D
- create .env file and add port inside
- use nestjs Logger.log instead of console.log

# ===== 31052021 =========
# create basic server with nestjs 
- first run with hello world using command as start of implementation of article :
https://www.codemag.com/Article/1907081/Nest.js-Step-by-Step
