const childProcess = require("child_process");
const fs = require("fs");
const path = require("path");

let i = 0;
process.argv.forEach((parameter) => {
	console.log(i++ + ': ' + parameter);
})

if (process.argv.length !== 3) {
	throw new Error("Requires the base path as argument.");
}

const basePath = process.argv[2];
if (!basePath.match(/[\\\/]$/)) {
	throw new Error("Path must end with a slash - any slash will do.");
} else if (!fs.existsSync(basePath)) {
	throw new Error(`Invalid path, '${basePath}' does not exist or is not readable.`);
}

const absoluteBasePath = path.toNamespacedPath(basePath) + "\\";
[
	`files\\js\\3rdParty\\ace\\`,
].forEach((path) => {
	const directory = absoluteBasePath + path;
	console.log(`##### Searching in ${directory} #####\n`);
	
	fs.readdirSync(directory)
	.filter(filename => {
		let stat = fs.statSync(directory + filename);
		
		return !!(stat.isFile() && !stat.isSymbolicLink() && filename.match(/^theme-(.*)\.js$/i) && !filename.match(/\.min\.js$/i));
	})
	.forEach(async filename => {
		let displayName = filename;
		let theme = filename;
		
		theme = theme.replace(/\.js$/i, '');
		theme = theme.replace(/^(theme\-)/i, '');
		
		displayName = theme.replace(/^([a-z])/, (match, g1) => {
			return g1.toUpperCase();
		});
		displayName = displayName.replace(/_([a-z])/gi, (match, g1) => {
			return ' ' + g1.toUpperCase();
		});
		
		console.log(theme + ':' + displayName);
	})
});
