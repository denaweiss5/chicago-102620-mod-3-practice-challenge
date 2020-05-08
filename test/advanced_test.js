const puppeteer = require('puppeteer');
const { expect } = require('chai');
const path = require('path');
const htmlFilePath = `file:${path.join(__dirname, '/../index.html')}`;
const json = require('../db.json');
// const feedbackToArray = () => Array.from(document.querySelectorAll('.feedback ul li')).map(el => el.textContent);

let browser;
let page;

before(async () => {
  browser = await puppeteer.launch();
  page = await browser.newPage();
  await page.goto(htmlFilePath);
});

describe('Advanced Features', () => {
  it('persists feedback', async () => {
    const feedback = `New feedback ${Math.random()}`;

    await page.type('#new-feedback', feedback);
    await page.click('input[type="submit"]');
    await page.goto(htmlFilePath, { waitUntil: 'networkidle2' });

    const lastFeedback = await page.evaluate(() => document.querySelector('.feedback ul li:last-of-type').textContent.trim());

    expect(lastFeedback).to.equal(feedback);
  }).timeout(10000);

  it('persistently deletes feedback when clicking on a feedback LI', async () => {
    const oldFeedback = await page.evaluate(() => Array.from(document.querySelectorAll('.feedback ul li')).map(el => el.textContent));

    await page.click('.feedback ul li:first-of-type');
    await page.goto(htmlFilePath, { waitUntil: 'networkidle2' });

    const currentFeedback = await page.evaluate(() => Array.from(document.querySelectorAll('.feedback ul li')).map(el => el.textContent));

    expect(currentFeedback[0]).to.not.equal(oldFeedback[0]);
    expect(currentFeedback.length).to.not.equal(oldFeedback.length);
  }).timeout(10000);
});