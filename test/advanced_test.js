const puppeteer = require('puppeteer');
const { expect } = require('chai');
const path = require('path');
const htmlFilePath = `file:${path.join(__dirname, '/../index.html')}`;
const json = require('../db.json');

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
});