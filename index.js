import dotenv from 'dotenv';
import { oraPromise } from 'ora' //spinner for terminal loading
import fetch from 'node-fetch';

dotenv.config();

import { ChatGPTUnofficialProxyAPI } from 'chatgpt'

async function example(prompt) {
  const api = new ChatGPTUnofficialProxyAPI({
    accessToken: process.env.OPENAI_ACCESS_TOKEN,
    debug: false,
    fetch: fetch
  }) 

  let res = await oraPromise(api.sendMessage(prompt), {
    text: prompt
  })

  console.log('\n' + res.text + '\n')
  console.log(res.text)
}

example().catch((err) => {
  console.error(err, 'err') 
})

console.log(example("What is your name?"))