// ...existing code...
const {
    Connection,
    clusterApiUrl,
    Keypair,
    LAMPORTS_PER_SOL
} = require("@solana/web3.js")

// use the public API to create a keypair
const wallet = new Keypair()

const publicKey = wallet.publicKey
const secretKey = wallet.secretKey

const getWalletBalance = async () => {
    try {
        const connection = new Connection(clusterApiUrl('devnet'), 'confirmed')
        const walletBalance = await connection.getBalance(publicKey)
        console.log(`Wallet: ${publicKey.toBase58()}`)
        console.log(`Wallet balance is ${walletBalance} lamports (${walletBalance / LAMPORTS_PER_SOL} SOL)`)
    } catch (err) {
        console.error(err)
    }
}

const airdropsol = async () => {
    try {
        const connection = new Connection(clusterApiUrl('devnet'), 'confirmed') 
        const fromAirdropSignature = await connection.requestAirdrop(publicKey,2 * LAMPORTS_PER_SOL)
        await connection.confirmTransaction(fromAirdropSignature)
    }
    catch (err) {
        console.error(err)
    }
}


const main = async () => {
    await getWalletBalance()
    await airdropsol()
    await getWalletBalance()
}

main()
// ...existing code...