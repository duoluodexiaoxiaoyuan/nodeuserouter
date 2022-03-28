const express = require("express");

let router = express.Router();
const userHandler = require("../router_handle/user");
router.get("/", userHandler.regUser);

router.get("/:id", function (req, res) {
  res.send(`${req.params.id} 用户信息`);
});

//导出该路由
module.exports = router;
