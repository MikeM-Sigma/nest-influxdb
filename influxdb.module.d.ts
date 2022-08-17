import { DynamicModule } from "@nestjs/common";
import { InfluxModuleAsyncOptions, InfluxModuleOptions } from "./interfaces";
export declare class InfluxDbModule {
    static forRoot(options: InfluxModuleOptions): DynamicModule;
    static forRootAsync(options: InfluxModuleAsyncOptions): DynamicModule;
}
//# sourceMappingURL=influxdb.module.d.ts.map