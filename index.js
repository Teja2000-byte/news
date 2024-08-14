import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
function dis()
{
    for(let i=0;i<result.length;i++)
    {
        console.log("Hello");
        console.log(JSON.stringify(result[i]));
    }

}
app.get("/", async (req, res) => {
    try {
        const response = await axios.get("https://newsapi.org/v2/top-headlines?apiKey=16057bdcb0544151af91b4b4421aea6f&q=us&language=en");
        const result = response.data;
        console.log(result);

        res.render("index.ejs", { newx: result.articles });
} catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});
app.post("/", async (req,res) => {
    try {
        const country = req.body.country;
        const category=req.body.category;
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?apiKey=16057bdcb0544151af91b4b4421aea6f&q=${country}&q=${category}&language=en`);
        const result = response.data;
        console.log(result);

        res.render("index.ejs", { newx: result.articles });

    } catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("index.ejs", {
          error: error.message,
        });
      }
    });



app.listen(port,()=>
{
    console.log(`server running on ${port}.`);
});
