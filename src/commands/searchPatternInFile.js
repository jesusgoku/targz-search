const fs = require('fs');
const zlib = require('zlib');
const readline = require('readline');
const tarStream = require('tar-stream');

function searchPatternInFile(patternStr, filePath, { flags }) {
  const txtPattern = /\.txt$/i;
  const pattern = new RegExp(patternStr, flags);
  const extract = tarStream.extract();

  const file = fs.createReadStream(filePath);
  const gunzip = zlib.createGunzip();

  extract.on('entry', (header, stream, next) => {
    const { name, type } = header;

    if (type === 'file' && txtPattern.test(name)) {
      const readLine = readline.createInterface({
        input: stream,
        terminal: false,
      });

      readLine.on('line', (line) => {
        if (line.match(pattern)) {
          process.stdout.write(`${line}\n`);
        }
      });
    }

    stream.on('end', () => {
      next();
    });

    stream.resume();
  });

  extract.on('finish', () => {});

  file.pipe(gunzip).pipe(extract);
}

module.exports = searchPatternInFile;
