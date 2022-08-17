import { ModuleMetadata } from "@nestjs/common/interfaces";
import { IClusterConfig, ISingleHostConfig } from "influx";
export declare type InfluxModuleOptions = IClusterConfig | ISingleHostConfig;
export interface InfluxModuleAsyncOptions extends Pick<ModuleMetadata, "imports"> {
    useFactory: (...args: any[]) => Promise<InfluxModuleOptions> | InfluxModuleOptions;
    inject: any[];
}
//# sourceMappingURL=interfaces.d.ts.map