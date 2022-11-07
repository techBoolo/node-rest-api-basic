import express from 'express'

// routes
// routes/*
import itemsRoute from './routes/items.js'

// middlewares
import requestLogger from './middlewares/requestLogger.js'
import errorHandler from './middlewares/errorHandler.js'
import routeNotFound from './middlewares/routeNotFound.js'

const app = express()

app.use(express.json())
app.use(requestLogger)

app.get('/', (req, res, next) => {
  res.status(200).json({ message: 'it works' })
})
app.use('/items', itemsRoute)

app.use(routeNotFound)
app.use(errorHandler)

export default app
