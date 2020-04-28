"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const pkgConf = require("pkg-conf");
const default_options_1 = require("./default-options");
function getPackageOptions(cwd) {
    var _a;
    const settings = pkgConf.sync('ts-standard', { cwd });
    cwd = (_a = cwd !== null && cwd !== void 0 ? cwd : settings.cwd) !== null && _a !== void 0 ? _a : process.cwd();
    return {
        files: settings.files,
        project: exports._resolveTSConfigPath(cwd, settings.project),
        fix: settings.fix,
        report: settings.report,
        ignore: settings.ignore,
        noDefaultIgnore: settings.noDefaultIgnore,
        globals: settings.globals,
        plugins: settings.plugins,
        envs: settings.envs,
        parser: settings.parser,
        eslint: settings.eslint
    };
}
exports.getPackageOptions = getPackageOptions;
function _resolveTSConfigPath(cwd, settingsProjectPath) {
    if (settingsProjectPath !== undefined) {
        const settingsPath = path.join(cwd, settingsProjectPath);
        if (default_options_1._isValidPath(settingsPath)) {
            return settingsPath;
        }
    }
}
exports._resolveTSConfigPath = _resolveTSConfigPath;
