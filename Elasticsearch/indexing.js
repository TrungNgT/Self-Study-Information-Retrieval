import data from './elastic_bulk_health_articles.json' assert { type: 'json' };
import client from './client.js';

await client.indices.create({ index: "more_doc" });

client.info().then(console.log, console.log)

await client.index({
    index: 'more_doc',
    document: data[1]
})

/*
const numb = data.length

for (let i = 0; i < numb; i++) {
    const doc = data[i]
    console.log(doc["title"])
    await client.index({
      index: 'semantic_search',
      document: doc
    })
}
    */