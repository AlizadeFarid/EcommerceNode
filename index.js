const epxress = require("express");
const connectDB = require("./config/conncetDB");
const app = epxress();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 3333;
const authRouter = require("./routes/authRoutes");
const userRouter = require("./routes/userRoutes");
const productRouter = require("./routes/productRoutes");
const productCategoryRouter = require("./routes/productCategoryRoutes");
const blogCategoryRouter = require("./routes/blogCategoryRoutes");
const blogRouter = require("./routes/blogRoutes");
const brandRouter = require("./routes/brandRoutes");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const { notFound, errorHandler } = require("./middlewares/errorHandler");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/blogs", blogRouter);
app.use("/api/v1/product-categories", productCategoryRouter);
app.use("/api/v1/blog-categories", blogCategoryRouter);
app.use("/api/v1/brands", brandRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, (req, res) => {
  connectDB();
  console.log(`Server is listening at port ${PORT}`);
});
