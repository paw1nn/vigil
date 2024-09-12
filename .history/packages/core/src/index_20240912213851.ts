import { TestResult } from "../../../types";
export class Core{
    runTest(testName :string):TestResult{
        console.log(`Running ${testName}`)
    return  {status:'pass' ,message:`${testName} passed !`}
    }

}