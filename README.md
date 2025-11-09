To run this project, clone this repo and follow these commands:

cd into the app folder
Run npm install at the root of your directory
Set up your .env file in the /app directory as follows
REACT_APP_CANDY_MACHINE_ID=<YOUR CANDY MACHINE ID GOES HERE>
REACT_APP_SOLANA_NETWORK=devnet
REACT_APP_SOLANA_RPC_HOST=https://explorer-api.devnet.solana.com
Run npm run start to start the project



(Optional) Add permanent fix


In package.json, edit your start script to:



"start": "set NODE_OPTIONS=--openssl-legacy-provider && react-scripts start"


