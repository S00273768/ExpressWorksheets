import express, {Application, Request, Response} from "express";

const PORT = process.env.PORT||2500;
const app: Application = express();

app.use((req, _res, next) =>{
    console.log("${req.method} ${req.originalUrl}");
    next();

});

app.get("/ping", async (_req : Request, res: Response) => {
    res.json({
        message: "Hello from Eliska"
    });
});

app.get("/bananas", async (_req : Request, res: Response) => {
    res.json({
        message: "this is bananas"
    });
});

app.get("/cake", async (_req : Request, res: Response) => {
    res.json({
        message: "this is recipe for cake in czech ",
        Korpus_ingredience:" 240 g kvalitní čokolády (min. 52%) 240 g másla pokojové teploty 320 g cukru krupice 300 g polohrubé mouky 12 vajec pokojové teploty 6 lžic mléka 2 lžíce kakaa  1 prášek do pečiva olej ve spreji na vystříkání ráfku ",
        Korpus_postup:"Zapneme troubu na pečení na 160 °C.Navážíme si všechny suroviny na korpus. Dáme rozpustit čokoládu (ať vychladne). Utřeme máslo s cukrem, přidáme žloutky a šleháme do pěny. Přidáme rozpuštěnou čokoládu. Vmícháme mléko. Kakao smícháme s mouku a práškem do pečiva. Postupně vmícháme. V řádně odmaštěné míse (citronem/octem) vyšleháme pevný sníh z bílků a pár zrníčky soli. Nakonec vmícháme ručně ušlehaný sníh z bílků. Nalejeme do dvou ráfků (vystříkaných olejem. (Pokud pečeme ve 2 ráfcích je vždy korpus vyšší, než když budeme péct jen v jednom a lépe se i rozkrajuje.) Pořádně zarovnáme dohladka a dáme péct najednou. Pečeme ve středně vyhřáté troubě asi 45 minut. (Zkouším špejlí, zda je propečený.)",
        Krem_ingredience :"1,2 l mléka 4 čokoládové pudinky extra s mátou 500 g másla pokojové teploty 200 g čokolády rozpustit + 100 g nechat do krému moučkový cukr dle chuti",
        Krem_postup :"Uvaříme puding v mléce. Vychlazený puding přendáme do mísy, vyšleháme do hladké kaše postupně vmícháme rozměklé máslo. Čokoládu rozehřejeme v kastrolku ve vodní lázni a za stálého šlehání ji přiléváme do krému. Osladíme podle chuti moučkovým cukrem a šleháme asi 2 minuty či do požadované hladkosti. Než vychladne korpus, připravíme ještě kakaový sirup."
    });
   
});

app.listen(PORT, () =>{
    console.log("Server is running on port", PORT);
});

