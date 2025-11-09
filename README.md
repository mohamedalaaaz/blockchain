cd app




npm install

npm run start 
if dont work try this in terminal or wsl or you use other terminal linux or ubentu wsl: 'set NODE_OPTIONS=--openssl-legacy-provider'



another solution



npm start



(Optional) Add permanent fix


In package.json, edit your start script to:



"start": "set NODE_OPTIONS=--openssl-legacy-provider && react-scripts start"


