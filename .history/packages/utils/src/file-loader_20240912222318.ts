import { promises  as fs } from 'fs';
export class FileLoader{
    static async loadFile(filePath : string):Promise<string>{
        return await fs.readFile(filePath,'utf-8')
    }
}