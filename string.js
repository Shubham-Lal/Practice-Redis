const client = require('./client.js')

async function string() {
    await client.mset('user:1', 'John', 'user:2', 'Mary', 'user:3', 'Wayne')
    await client.expire('user:3', 10)
    const result = await client.mget('user:1', 'user:2', 'user:3')
    console.log(result)
}