import puppeteer from "puppeteer";

export const busqueda=async(req)=>{
    
    const parametro = req+" icon"
    const browser = await puppeteer.launch({    headless:false,
     args: ['--no-sandbox', '--disable-setuid-sandbox'] ,ignoreDefaultArgs: ['--disable-extensions']})
    const page = await browser.newPage()
    await page.goto("https://images.google.com/")
    await page.type('#APjFqb',parametro)
    await page.click('button.Tg7LZd')
    await page.waitForSelector('img.rg_i.Q4LuWd');
    await page.click('img.rg_i.Q4LuWd')
    await page.waitForSelector('img.r48jcc.pT0Scc');
    const result = await page.evaluate(()=>{
        const data =  document.querySelector('img.r48jcc.pT0Scc');
        const url = data.getAttribute('src')
        return url
    })
    
    await browser.close()
    return result
}
