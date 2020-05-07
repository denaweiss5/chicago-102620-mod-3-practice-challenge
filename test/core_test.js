const puppeteer = require('puppeteer');
const { expect } = require('chai');
const path = require('path');
const htmlFilePath = `file:${path.join(__dirname, '/../index.html')}`;
const firstDancer = {
  id: 1,
  name: "Carlton",
  image: "https://i.imgur.com/iM8ybeC.gif",
  description: "20 years of experience in all forms of dance. Known for shiny outfits.",
  likes: 26,
  feedback: [
    "Nice moves!",
    "Never stop never stopping"
  ]
};

let browser;
let page;

before(async () => {
  browser = await puppeteer.launch();
  page = await browser.newPage();
});

describe('View first dancer', () => {
  it('has the name Carlton in an h2', async () => {
    await page.goto(htmlFilePath);
    const h2 = await page.evaluate(() => document.querySelector('#dancer-name').textContent.trim());

    expect(h2).to.equal(firstDancer.name);
  }).timeout(10000);

  it('shows the number of likes', async () => {
    await page.goto(htmlFilePath);
    const likes = await page.evaluate(() => document.querySelector('#like-count').textContent.trim());

    expect(likes).to.equal(firstDancer.likes);
  }).timeout(10000);
});
