import express from 'express';
import { engine } from 'express-handlebars';


const app = express(); 


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');
 
const students =[ 
    {
        id: 1,
        name: "s1",
    },
    {
        id: 2,
        name: "s2",
    },
    {
        id: 3,
        name: "s3",
    },
    {
        id: 4,
        name: "s4",
    },
    {
        id: 5,
        name: "s5",
    },
];


app.get("/students", (req, res) => {
res.render("students" , { students });
});
app.listen(5000);