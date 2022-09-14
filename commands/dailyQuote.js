const fs = require("fs");
const puppeteer = require('puppeteer');

module.exports = {
    name: 'dailyQuote',
    description: "A web scraping function that gets a quote of the day. (Via brainyquote.com) ", 


    execute(message, args){
        async function scrapeProduct(url){
            const browser = await puppeteer.launch({
                headless: false,
                args: ["--no-sandbox"]
            });
        
            const page = await browser.newPage();
        
            await page.goto(url);
        
            //Selecting by 'xpath', pulling item into variable called 'el'
            const [el] = await page.$x('/html/body/main/div[1]/div[3]/div/div/a[1]/div/text()');
            const txt = await el.getProperty('textContent');
            const quote = await txt.jsonValue();


            message.channel.send("Quote of the Day: " + quote + "\n (via brainyquote.com)");
            browser.close();
        }

        scrapeProduct('https://www.brainyquote.com/quote_of_the_day');
    }

}
