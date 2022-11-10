import ConvertPuppeteerAdapter from '@/application/convert-puppeteer-adapter';
import ConvertController from '@/infra/controller/convert-controller';
import ExpressAdapter from '@/infra/http/express-adapter';

const http = new ExpressAdapter();
const convert = new ConvertPuppeteerAdapter();
new ConvertController(http, convert);
http.listen(3000);
