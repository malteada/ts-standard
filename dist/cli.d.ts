import * as eslint from 'eslint';
import { LintReport } from 'standard-engine';
import { DefaultOptions } from './options';
import { TSStandard } from './ts-standard';
export declare const ESLINT_BUILTIN_REPORTERS: string[];
export interface Options {
    files?: string[];
    test?: string;
    stdIn?: boolean;
    project?: string;
    fix?: boolean;
    report?: string;
    envs?: string[];
    ignore?: string[];
    noDefaultIgnore?: boolean;
    globals?: string[];
    plugins?: string[];
    parser?: string;
    eslint?: typeof eslint;
}
export declare function cli(): Promise<void>;
export declare function lintStdIn(linter: TSStandard, options: Pick<DefaultOptions, 'fix'>): Promise<LintReport>;
export declare function lintFiles(linter: TSStandard, options: Pick<DefaultOptions, 'files'>): Promise<LintReport>;
export declare function printReport(lintReport: LintReport, options: Pick<DefaultOptions, 'report' | 'fix' | 'useStdIn'>): Promise<void>;
