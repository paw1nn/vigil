export interface TestResult{
    status :'pass' | 'fail'
;
message:string
}
export interface Config{
    timeout:number;
    retries:number;
}