"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_standard_1 = require("./ts-standard");
// All exports are to satisfy the `standard-engine` export interface used by
// the vscode standard extension and other editor extensions
// Yes this is a singleton and I don't really like them either
let singletonInstance;
let cachedCWD;
// Typically called before any lint calls, allows early reading and manipulation of options provided
// to the later lint call
function parseOpts(options) {
    // If the singleton does not exist or a new working directory is given then create a new instance
    if (singletonInstance == null || cachedCWD !== options.cwd) {
        cachedCWD = options.cwd;
        singletonInstance = new ts_standard_1.TSStandard({
            cwd: options.cwd
        });
    }
    return options;
}
exports.parseOpts = parseOpts;
function lintText(text, options, callback) {
    let cb = callback;
    if (typeof options === 'function') {
        cb = options;
        options = {};
    }
    if (singletonInstance == null) {
        exports.parseOpts(options);
    }
    singletonInstance.lintText(text, options)
        .then(res => cb(undefined, res))
        .catch(cb);
}
exports.lintText = lintText;
function lintFiles(files, options, callback) {
    let cb = callback;
    if (typeof options === 'function') {
        cb = options;
        options = {};
    }
    if (singletonInstance == null) {
        exports.parseOpts(options);
    }
    singletonInstance.lintFiles(files, options)
        .then(res => cb(undefined, res))
        .catch(cb);
}
exports.lintFiles = lintFiles;
