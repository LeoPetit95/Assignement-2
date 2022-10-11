import express from 'express';
import path from 'path';
const app = express();

app.get('/', (_, res) => {
    res.sendFile('C:/Users/grdan/OneDrive/Documents/EFREI/Etats-Unis/Cours/Web Prog/Module 2/Public/index.html');
});

app.get('/api/task', (req, res) => {
    console.log(req.query)
    if (req.query.value== 'Kitchen'){
        res.send([{Nom:"Faire la Vaisselle"},{Nom:"Netoyer le sol"},{Nom:"Acheter de la nouriture" }])
    }
    if (req.query.value== 'Bedroom'){
        res.send([{Nom:"Ranger la chambre"},{Nom:"Netoyer le sol"},{Nom:"Ranger ces affaires" }])
    }
    if (req.query.value== 'Outside'){
        res.send([{Nom:"Ranger la chambre"},{Nom:"Netoyer le sol"},{Nom:"Ranger ces affaires" }])
    }
});

app.use(express.static('Public'))

app.listen(3000, () => {
    console.log('Listening on port 3000');
});