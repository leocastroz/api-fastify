// import {createServer } from 'node:http'

// const server = createServer((request, response) => {
//   response.write('Server is running');

//   return response.end();
// })

// server.listen(8484)

import { fastify } from 'fastify';

import { DatabaseMemory } from './database-memory.js'

const server = fastify();

const database = new DatabaseMemory;

server.post('/videos', (resquest, reply) => {
  const { title, description, duration } = resquest.body

  database.create({
    title,
    description,
    duration,
  })
  console.log(database.list())
  return reply.status(201).send()
})

server.get('/videos', () => {
  const videos = database.list()
  return videos
})

// server.get('/name', () => {
//   return 'Meu nome é Leonardo'
// }) 

// server.get('/teste', () => {
//   return 'Rota de teste'
// })

server.listen({
  port: 8484
})