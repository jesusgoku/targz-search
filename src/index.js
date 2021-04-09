const pkg = require('../package.json');
const { Command } = require('commander');
const searchPatternInFile = require('./commands/searchPatternInFile');

const program = new Command();

program
  .version(pkg.version)
  .arguments('<pattern> <file>')
  .description('search pattern into .tar.gz compress file')
  .option('-f, --flags <flags>', 'pattern flags', 'igu')
  .action(searchPatternInFile);

program.parse(process.argv);
