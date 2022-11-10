import puppeteer from 'puppeteer';

import Convert from '@/application/convert';

export default class ConvertPuppeteerAdapter implements Convert {
  async execute(htmlContent: string): Promise<string> {
    const browser = await puppeteer.launch({
      headless: true,
      executablePath: '/usr/bin/chromium-browser',
      args: ['--no-sandbox', '--disable-gpu']
    });

    const context = await browser.createIncognitoBrowserContext();
    const page = await context.newPage();
    await page.setContent(htmlContent);

    await page.emulateMediaType('screen');

    const pdf = await page.pdf({
      printBackground: true,
      format: 'A4'
    });

    const pdfBase64 = pdf.toString('base64');
    await browser.close();

    return pdfBase64;
  }
}
