import { Core } from "../packages/core/src";


test('App renders correctly' ,()=>{
    const core  = new Core()
    const result =core.runTest('AppTest')
    expect(result.status).toBe('pass')
})