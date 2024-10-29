
/*
import data from './elastic_bulk_health_articles.json' assert { type: 'json' };

const numb = data.length

for (let i = 0; i < numb; i++) {
    const doc = data[i]
    console.log(doc)
}
*/


import { Client } from 'es6'
import fs from 'fs'

const client = new Client({
  node: 'https://localhost:9200',
  auth: {
    username: 'elastic',
    password: 'FokPpOKqXaEC+ItgCdKQ'
  },
  tls: {
    ca: fs.readFileSync('D:/elasticsearch-8.15.2-windows-x86_64/elasticsearch-8.15.2/config/certs/http_ca.crt'),
    rejectUnauthorized: false
  }
})

//client.info().then(console.log, console.log)

//await client.indices.create({ index: 'semantic_search' })

export default client;