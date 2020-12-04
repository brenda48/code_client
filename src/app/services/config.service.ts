import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AppConfig } from '../base.config.module';

export const CONFIG = {
    production: environment.production,
    rest_prefix: environment.REST_API_URL,
} as AppConfig;

@Injectable()
export class ConfigService implements AppConfig {

    constructor() {
    }

    private static singleton: ConfigService = new ConfigService();
    production = environment.production;
    rest_prefix = CONFIG.rest_prefix;

    static get_instance() {
        return ConfigService.singleton;
    }
}

export function config_service_factory() {
    return ConfigService.get_instance();
}
