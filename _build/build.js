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
	console.log(`##### Building ${path} #####\n`);
	
	childProcess.execSync(`node _cleanupDirectory.js ${absoluteBasePath}${path}`, {
		stdio: [0, 1, 2]
	});
	childProcess.execSync(`node _buildDirectory.js ${absoluteBasePath}${path} false`, {
		stdio: [0, 1, 2]
	});
});
