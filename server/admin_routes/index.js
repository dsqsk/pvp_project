// 导出为函数，接受函数对象供外层使用
module.exports = app => {
  const express = require('express')
  // express子路由
  const router = express.Router()
  const Category = require('../models/Category')

  router.post('/categories', async (req, res) => {
    const model = await Category.create(req.body)
    res.send(model)
  })
  //挂载子路由
  app.use('/admin/api', router)
}