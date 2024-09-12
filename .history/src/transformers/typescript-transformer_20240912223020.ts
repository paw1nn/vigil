



import * as ts from 'typescript';

export class TypescriptTransformer{
    static transform(code :string):string{
        const result = ts.transpileModule(code,{
            compilerOptions:{module :ts.ModuleDetectionKind.commonjs}
        })
    }
}