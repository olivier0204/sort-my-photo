const fs = require('fs')

fs.readdirSync('d:/test/').forEach((e) => {

});

function getMetaInfo(e) {
    return fs.stat('d:/test/'+ e, function(err, stats) {
        console.log('d:/test/'+ e);
        console.log();
        console.log(stats);
        console.log();
     
        if (stats.isFile()) {
            console.log('    file');
        }
        if (stats.isDirectory()) {
            console.log('    directory');
        }
    });
}