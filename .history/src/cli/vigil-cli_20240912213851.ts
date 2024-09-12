








import { Core } from "../../packages/core/src";
const args  = process.argv.slice(2)
const testName  = args[0];

const core  =new Core();
const result = core.runTest(testName);
console.log(result.message)