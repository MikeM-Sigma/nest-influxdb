import { InfluxDB, IPingStats, IResults, IQueryOptions } from "influx";
import { InfluxModuleOptions } from "./interfaces";
export declare class InfluxDbService {
    private readonly config;
    connection: InfluxDB | null;
    constructor(config: InfluxModuleOptions);
    connect(): void;
    alterRetentionPolicy(...args: Parameters<InfluxDB["alterRetentionPolicy"]>): Promise<void>;
    createContinuousQuery(...args: Parameters<InfluxDB["createContinuousQuery"]>): Promise<void>;
    createDatabase(...args: Parameters<InfluxDB["createDatabase"]>): Promise<void>;
    createRetentionPolicy(...args: Parameters<InfluxDB["createRetentionPolicy"]>): Promise<void>;
    createUser(...args: Parameters<InfluxDB["createUser"]>): Promise<void>;
    dropContinuousQuery(...args: Parameters<InfluxDB["dropContinuousQuery"]>): Promise<void>;
    dropDatabase(...args: Parameters<InfluxDB["dropDatabase"]>): Promise<void>;
    dropMeasurement(...args: Parameters<InfluxDB["dropMeasurement"]>): Promise<void>;
    dropRetentionPolicy(...args: Parameters<InfluxDB["dropRetentionPolicy"]>): Promise<void>;
    dropSeries(...args: Parameters<InfluxDB["dropSeries"]>): Promise<void>;
    dropUser(...args: Parameters<InfluxDB["dropUser"]>): Promise<void>;
    getDatabaseNames(...args: Parameters<InfluxDB["getDatabaseNames"]>): Promise<string[]>;
    getMeasurements(...args: Parameters<InfluxDB["getMeasurements"]>): Promise<string[]>;
    getSeries(...args: Parameters<InfluxDB["getSeries"]>): Promise<string[]>;
    getUsers(...args: Parameters<InfluxDB["getUsers"]>): Promise<Array<{
        user: string;
        admin: boolean;
    }>>;
    grantAdminPrivilege(...args: Parameters<InfluxDB["grantAdminPrivilege"]>): Promise<void>;
    grantPrivilege(...args: Parameters<InfluxDB["grantPrivilege"]>): Promise<void>;
    ping(...args: Parameters<InfluxDB["ping"]>): Promise<IPingStats[]>;
    query<T>(query: string, options?: IQueryOptions): Promise<IResults<T>>;
    queryRaw<T>(query: string, options?: IQueryOptions): Promise<any>;
    revokeAdminPrivilege(...args: Parameters<InfluxDB["revokeAdminPrivilege"]>): Promise<void>;
    revokePrivilege(...args: Parameters<InfluxDB["revokePrivilege"]>): Promise<void>;
    setPassword(...args: Parameters<InfluxDB["setPassword"]>): Promise<void>;
    showContinousQueries(...args: Parameters<InfluxDB["showContinousQueries"]>): Promise<IResults<{
        name: string;
        query: string;
    }>>;
    showRetentionPolicies(...args: Parameters<InfluxDB["showRetentionPolicies"]>): Promise<IResults<{
        default: boolean;
        duration: string;
        name: string;
        replicaN: number;
        shardGroupDuration: string;
    }>>;
    writeMeasurement(...args: Parameters<InfluxDB["writeMeasurement"]>): Promise<void>;
    writePoints(...args: Parameters<InfluxDB["writePoints"]>): Promise<void>;
}
//# sourceMappingURL=influxdb.service.d.ts.map