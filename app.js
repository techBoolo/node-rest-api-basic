import express from 'express'

// routes
// routes/*
import itemsRoute from './routes/items.js'

const app = express()
app.use(express.json())

app.get('/', (req, res, next) => {
  res.status(200).json({ message: 'it works' })
})
app.use('/items', itemsRoute)


export default app
