const fs = require("fs");

let i = 0;
process.argv.forEach((parameter) => {
	console.log(i++ + ': ' + parameter);
})

if (process.argv.length !== 3) {
	throw new Error('Requires the path to an existing repository.');
}

const directory = process.argv[2];
if (!fs.existsSync(directory)) {
	console.log(`Unable to locate directory ${directory}. Skipping cleanup-task.`);
}
process.chdir(directory);

fs.readdirSync(directory)
.filter(filename => {
	// ignore build configurations
	if (filename === 'require.build.js') {
		return false;
	}
	
	let stat = fs.statSync(directory + filename);
	
	return !!(stat.isFile() && !stat.isSymbolicLink() && filename.match(/\.min\.js$/));
	
	
})
.forEach(async filename => {
	console.log('[remove] ' + filename);
	fs.unlinkSync(directory + filename);
});
