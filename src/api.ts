import ExpressAdapter from "./infra/http/ExpressAdapter";
import ConvertController from "./infra/controller/ConvertController";
import ConvertPuppeteerAdapter from "./application/ConvertPuppeteerAdapter";

const http = new ExpressAdapter();
const convert = new ConvertPuppeteerAdapter();
new ConvertController(http, convert);
http.listen(3000);
