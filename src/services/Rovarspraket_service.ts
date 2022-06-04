import { Request, Response } from 'express'
import JokeAPI from 'sv443-joke-api';
import { ConvertToEncoding } from '../utilities';
import https from 'https';


const vowels = ['a', 'e', 'i', 'o', 'u'];
const baseURL = "https://v2.jokeapi.dev";
const categories = ["Programming", "Misc", "Pun", "Spooky", "Christmas"];


export const TranslateToRoverSprak = (req: Request, res: Response) => {

    const { body: { text } } = req

    const splitText = text.split('');

    let result = ConvertToEncoding(splitText, vowels)

    return res.status(200).json(result)
}



export const TranslateToNormal = (req: Request, res: Response) => {
    const { body: { codedText } } = req
    const splitText = codedText.split('')
    let result = ''
    let i = 0
    while (i < splitText.length) {
        if (splitText[i + 1] === 'o' && splitText[i + 2] === splitText[i]) {
            result += splitText[i]
            i = i + 3
        } else {
            result += splitText[i]
            i++
        }
    }

    return res.status(200).json(result)
}


export const JOKEAPI = (req: Request, res: Response) => {

    const { body: { category } } = req

    https.get(`${baseURL}/joke/${category || categories.join(",")}`, httpResponse => {
        httpResponse.on("data", (chunk: any) => {
            // On data received, convert it to a JSON object
            let randomJoke = JSON.parse(chunk.toString());

            if (randomJoke.type == "single") {
                // If type == "single", the joke only has the "joke" property
                let result = ConvertToEncoding(randomJoke.joke.split(''), vowels)
                return res.status(200).json({ Joke: randomJoke.joke, Rövarspråk: result })
            }
            else {
                // If type == "twopart", the joke has the "setup" and "delivery" properties
                const finalJoke = randomJoke.setup + ', ' + randomJoke.delivery
                let result = ConvertToEncoding(finalJoke.split(''), vowels)

                return res.status(200).json({ Joke: finalJoke, Rövarspråk: result })

            }
        });

        httpResponse.on("error", (err: any) => {
            // On error, log to console
            return res.status(500).json(err)

        });
    });

}



