const puppeteer = require('puppeteer');
async function scrapeProduct(url){
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox']
    });

    const page = await browser.newPage();

    await page.goto(url);

    //Selecting by 'xpath', pulling item into variable called 'el'
    const [el] = await page.$x('/html/body/main/div[1]/div[3]/div/div/a[1]/div/text()');
    const txt = await el.getProperty('textContent');
    const rawTxt = txt.jsonValue();

    console.log({rawTxt});

    browser.close();
}

scrapeProduct('https://www.brainyquote.com/quote_of_the_day')