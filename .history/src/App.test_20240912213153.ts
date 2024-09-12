import { Core } from "../packages/core";


test('App renders correctly' ,()=>{
    const core  = new Core()
    const result =core.runTest('AppTest')
})