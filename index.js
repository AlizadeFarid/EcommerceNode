const epxress = require("express");
const connectDB = require("./config/conncetDB");
const app = epxress();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 3333;
const authRouter = require("./routes/authRoutes");
const userRouter = require("./routes/userRoutes");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { notFound, errorHandler } = require("./middlewares/errorHandler");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1", authRouter);
app.use("/api/v1/users", userRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, (req, res) => {
  connectDB();
  console.log(`Server is listening at port ${PORT}`);
});
