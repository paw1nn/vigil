





export class ParallelRunner{
    constructor(private testFiles :string[]){
    }
    runTest():void{
        this.testFiles.forEach(file=>{
            console.log('RunningTest')
        })
    }
}