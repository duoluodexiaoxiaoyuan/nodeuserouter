// https://blog.csdn.net/liulang68/article/details/122521546
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
// 解析表单数据的中间加
app.use(express.urlencoded({ extended: false }));
// const userRouter = require("./router/user");
app.use("/api", require("./routes/user"));
app.listen(8080, function () {
  console.log("开始监听8080端口");
});
// const express = require("express");

// let app = express();
// app.listen(8888);

// //创建路由实例，我们可以在该实例上自由的添加路由
// let usersRouter = express.Router();
// let orderRouter = express.Router();

// //添加两个路由到应用上
// app.use("/users", usersRouter);
// app.use("/order", orderRouter);

// //注意这时候再加路由，就可以不带前面的/users路径了
// usersRouter.get("/", function (req, res) {
//   res.send("用户首页");
// });

// usersRouter.get("/:id", function (req, res) {
//   res.send(`${req.params.id} 用户信息`);
// });

// //注意这时候再加路由，就可以不带前面的/order路径了
// orderRouter.get("/", function (req, res) {
//   res.send("订单首页");
// });

// orderRouter.get("/:id", function (req, res) {
//   res.send(`${req.params.id} 订单信息`);
// });

// const express = require("express");
// let app = express();
// app.listen(8888);

// //添加两个路由到应用上
// app.use("/users", require("./routes/users"));
// app.use("/order", require("./routes/order"));
// app.use("/api", require("./routes/user"));
// //404判断
// app.use(function (req, res) {
//   res.send("404 not found");
// });
