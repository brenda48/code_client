import {InjectionToken, NgModule} from '@angular/core';


export declare interface AppConfig {
    rest_prefix: string;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

@NgModule({})
export class BaseConfigModule {
}
