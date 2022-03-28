const express = require("express");
//创建路由对象
const router = express.Router();

//注册新用户
router.get("/register", (req, res) => {
  console.log("haha");
  res.send("注册成功");
});

//登录
router.get("/login", (req, res) => {
  console.log("haha1");
  res.send("登录成功");
});

module.exports = router;
