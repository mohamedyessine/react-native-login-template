const express = require("express");
const mongoose = require ("mongoose");
const Athlete = require ("./models/athlete");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


app.get('/athletes', async (req, res)=> {
    try {
        await Athlete.find({})
        .then(result => {
            res.send(result)
        })
    }
    catch(err) {
        console.log(err)
    }
});

app.delete("/delete/:id", async (req,res) => {
    try {
        await Athlete.findOneAndDelete({ id: req.params.id });
        res.send("supprimé avec succes !");
    } catch (err) {
        res.send(err);
    }
});

app.put("/maj/:id", async (req, res) => {
    try {
        await Athlete.findOneAndUpdate(
            {_id: req.params.id },
            {
                email: req.body.email,
              
            });
            res.send("mise a jour avec succes !");
    }catch (err) {
        res.send(err);
    }
});

app.post('/ajouter_athlete', async(req, res) => {
try {
    let new_athlete = new Athlete({
        name: req.body.name,
        email: req.body.email,
        sex: req.body.sex,
        age: req.body.age,
        size: req.body.size,
        weight: req.body.weight,
        picture: req.body.picture

        

    });
    await new_athlete.save()
    res.send('save effectué avec succes !')
} catch (err) {
    console.log(err);
}
    
});



mongoose.connect
('mongodb+srv://yessine:yessine07@cluster0.bx2lv.mongodb.net/ApplicationPFE?retryWrites=true&w=majority', (err, done) => {
if (err){
    console.log(err)
}
if (done){
    console.log('base de donnes connecté avec succes !')
}
});

app.listen(5000, () => console.log("server en marche"));