const minimist = require('minimist');
const rawArgs = process.argv.slice(2);
const args = minimist(rawArgs);
const path = require('path');
const figlet = require('figlet');
const versionStr = figlet.textSync('LX Lib');
const Printer = require('@darkobits/lolcatjs');
let rootDir = path.resolve(__dirname, '../');
const ora = require('ora');
if (args.p) {
  rootDir = rootDir + '/packages/' + args.p;
  const _version = require(rootDir + '/package.json').name;
  console.log(
    Printer.default.fromString(`${_version} test cases \n${versionStr}`)
  );
}
const jestArgs = ['--runInBand', '--rootDir', rootDir];
const spinner = ora(`\n ⏰ ===> running: jest ${jestArgs.join(' ')}`);
spinner.start();
require('jest').run(jestArgs);
spinner.stop();
