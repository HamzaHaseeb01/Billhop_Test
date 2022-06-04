This app can be run using (npm run dev) after installing dependencies using (npm i)

the main root file is in root directory (index.ts) and routes can be found under src/routes/Rovarspraket_routes and services are defined in src/services/Rovarspraket_service.ts.

First post api route (/translate/normal) convert normal text in to RoverSprak.String name (text) should be passed in body.

Second post api (/translate/rovarsprak) convert RoverSprak encoded message in to normal text.String name (codedText) should be passed in body. 

Third post api (/jokeapi) is the answer to second point of assignment which I didn't quite understand so have done what I can.This api selects jokes using joke API (https://sv443.net/jokeapi/v2/) and return joke as well as its RoverSprak coded text.Category can be send if you want specific jokes in request body.