import express from 'express'

const router = express.Router()

router.get('/', (req, res, next) => {
  res.status(200).json({ 
    message: 'list of items' 
  })
})

router.post('/', (req, res, next) => {
  res.status(201).json({ 
    message: 'add new item' ,
    item: req.body
  })
})

router.get('/:id', (req, res, next) => {
  res.status(200).json({ 
    message: 'get an item',
    id: req.params.id
  })
})

router.delete('/:id', (req, res, next) => {
  res.status(200).json({ 
    message: 'delete an item',
    id: req.params.id
  })
})
export default router
