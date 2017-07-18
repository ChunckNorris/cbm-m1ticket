import { Injectable } from '@angular/core';
import { BUILD_ENVIRONMENT } from './config'

//ToDo: Leave for now untill initial design and stuff is good to go and we know what we need.
interface IEnvironmentSettings {
    apiUrl: string
    apiGrantType: string
    apiClientId: string
    apiClientSecret: string
}

//Todo when have an api for data. 
class ProdEnvironmentSettings implements IEnvironmentSettings {
    apiUrl = 'http://apiurl.com'
    apiGrantType = ""
    apiClientId = ""
    apiClientSecret = ""
}

class StageEnvironmentSettings extends ProdEnvironmentSettings {
    apiUrl = 'http://apiurl.com'
    apiClientId = 'ClientAPI'
    apiClientSecret = ''
}

//Can be used to configure to point at an endpoint or to a static data.
class LocalEnvironmentSettings extends StageEnvironmentSettings {
    apiUrl = 'http://apiurl.com'
}

@Injectable()
export class Environment {
    constructor() {
        switch (BUILD_ENVIRONMENT.trim().toLowerCase()) {
            case 'l':
            case 'local':
            case 'dev':
            case 'development':
            case 'debug':
                this.settings = new LocalEnvironmentSettings()
                break;
            case 's':
            case 'stage':
            case 'staging':
                this.settings = new StageEnvironmentSettings()
                break;
            default:
                this.settings = new ProdEnvironmentSettings()
                break;
        }
    }

    public settings: IEnvironmentSettings;
} 