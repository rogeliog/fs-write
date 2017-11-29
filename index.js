const fs = require('fs');

setInterval(() => {
  const parallel = 100;
  for (let i = 0; i < parallel; i++) {
    const content = new Array(20).fill('foo bar biz').join('\n');
    fs.writeFile(`./fixtures/file_${i}`, 'foo', () => {});
  }
}, 10);
