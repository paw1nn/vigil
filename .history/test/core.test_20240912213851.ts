








import { Core } from "../packages/core/src";
test('Core test runner'  ,()=>{
    const core = new Core();
    const result  = core.runTest('Sample Test');
    expect(result.status).toBe('pass')
})