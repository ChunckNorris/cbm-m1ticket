import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

import { Environment } from '../app.environment';

import {
    Authorization,
    Token,
    Tickets
} from '../models/index';


export class Endpoint {
    constructor(relativeUrl: string) { this.relativeUrl = relativeUrl };
    relativeUrl: string;
    getUrl(paramDict = {}) {
        let result = this.relativeUrl;
        for (let key in paramDict) {
            result = result.replace('{' + key + '}', paramDict[key]);
        }
        return result;
    }
}

export class Endpoints {
    static token = new Endpoint('api/user/login');

    static getUserTickets = new Endpoint('api/tickets/{userId}');
}

export class HttpMethods {
    static get = 'GET';
    static post = 'POST';
    static put = 'PUT';
    static delete = 'DELETE';
}


@Injectable()
export class Api {

    public dataUser: any[];
    examList: any = {};

    constructor(private env: Environment, private http: Http) { }

    private convertToUrlSearchParams(obj: any) {
        let params = new URLSearchParams();
        for (let key in obj) {
            params.append(key, obj[key].toString());
        }

        return params;
    }

   
    static bearerToken: string;

    private request<T>(method: string, relativeUrl: string, searchParams?: any, requestBody?: any, requestHeaders?: Headers, useBearerToken = true): Observable<T> {
        let options = new RequestOptions();
        options.headers = requestHeaders || new Headers();
        options.method = method.toUpperCase();

        options.body = options.body || requestBody;
        if (searchParams) options.search = options.search || this.convertToUrlSearchParams(searchParams);

        options.headers.append('Accept', 'application/json');
        if (Api.bearerToken && useBearerToken) {
            options.headers.append('Authorization', 'Bearer ' + Api.bearerToken);
        }

        return this.http.request(this.env.settings.apiUrl + relativeUrl, options)
            .map((res: Response) => { return res.json(); })
            .map((stream => { return stream; }))
            .share();;
    }



    public getBearerToken(username: string, password: string): Observable<Authorization> {
        let requestBody = new Token();
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        requestBody.username = username;
        requestBody.password = password;
        requestBody.client_id = this.env.settings.apiClientId;
        requestBody.client_secret = this.env.settings.apiClientSecret;
        requestBody.grant_type = this.env.settings.apiGrantType;

        return this.request<Authorization>(HttpMethods.post, Endpoints.token.getUrl(), null, this.convertToUrlSearchParams(requestBody).toString(), headers, false);
    }




    public getOpenTickets(userId: number): Observable<Tickets[]> {
        //*****Later after setup api*****//
        //let endpoint = Endpoints.getUserTickets.getUrl({ 'userId': userId });
       // return this.request<Tickets[]>(HttpMethods.get, endpoint);      
        //****************************** */

        //Dev work around
          return this.http.get('data/tickets.json').map((res: Response) => res.json());
          

    }
   


}
