import Convert from '@/application/convert';
import Http from '@/infra/http/http';

export default class ConvertController {
  constructor(readonly http: Http, readonly convert: Convert) {
    http.on('post', '/convert', (params: any, body: any) => convert.execute(body.html));
  }
}
