


export class SnapshotCompare{
    static compare(newSnapshot :any ,oldSnapshot:any):boolean{
        return JSON.stringify(newSnapshot)
    }
}