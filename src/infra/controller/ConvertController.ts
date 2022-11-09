import Http from "../http/Http";
import Convert from "../../application/Convert";

export default class ConvertController {

    constructor (readonly http: Http, readonly convert: Convert) {
        http.on("post", "/convert", function (params: any, body: any) {
            return convert.execute(body.html);
        });
    }
}
