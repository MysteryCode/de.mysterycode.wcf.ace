const childProcess = require("child_process");
const compiler = require("./compiler");
const fs = require("fs");

let i = 0;
process.argv.forEach((parameter) => {
	console.log(i++ + ': ' + parameter);
})

if (process.argv.length < 3) {
	throw new Error('Requires the path to an existing repository.');
} else if (process.argv.length > 4) {
	throw new Error('Got too many parameters.');
}

let generateTinyBuilds = true;
if (process.argv.length === 4) {
	generateTinyBuilds = process.argv[3] === 'true' || process.argv[3] === true;
}

const directory = process.argv[2];
if (!fs.existsSync(directory)) {
	throw new Error(`Unable to locate directory, the path ${directory} is invalid.`);
}
process.chdir(directory);

let rjsPaths = [];

fs.readdirSync(directory)
.filter(filename => {
	// ignore build configurations
	if (filename === 'require.build.js') {
		if (rjsPaths.indexOf(directory) === -1) rjsPaths.push(directory);
		
		return false;
	}
	
	let stat = fs.statSync(directory + filename);
	// allow only non-minified *.js files
	if (stat.isFile() && !stat.isSymbolicLink() && filename.match(/\.js$/) && !filename.match(/\.min\.js$/)) {
		return true;
	}
	
	return false;
})
.forEach(async filename => {
	let buildVariants;
	if (generateTinyBuilds) {
		buildVariants = [true, false];
	} else {
		buildVariants = [true];
	}
	
	for (const COMPILER_TARGET_DEFAULT of buildVariants) {
		let outFilename = filename.replace(/\.js$/, (COMPILER_TARGET_DEFAULT ? '' : '.tiny') + '.min.js');
		console.time('[write]' + outFilename);
		{
			let output = await compiler.compile(fs.readFileSync(directory + filename, 'utf-8'), {
				compress: {
					global_defs: {
						COMPILER_TARGET_DEFAULT: COMPILER_TARGET_DEFAULT
					}
				}
			});
			
			fs.writeFileSync(directory + outFilename, output.code);
		}
		console.timeEnd('[write]' + outFilename);
	}
});

const rjsCmd = (process.platform === "win32") ? "r.js.cmd" : "r.js";
rjsPaths.forEach(async path => {
	let buildConfig = `${path}require.build.js`;
	let outFilename = require(process.cwd() + `/${buildConfig}`).out;
	
	for (const COMPILER_TARGET_DEFAULT of [true, false]) {
		let overrides = '';
		if (!COMPILER_TARGET_DEFAULT) {
			outFilename = outFilename.replace(/\.min\.js$/, '.tiny.min.js');
			overrides += ' out=' + outFilename;
		}
		
		console.time('[write]' + outFilename);
		childProcess.execSync(`${rjsCmd} -o require.build.js ${overrides}`, {
			cwd: path,
			stdio: [0, 1, 2]
		});
		const output = await compiler.compile(fs.readFileSync(path + '/' + outFilename, 'utf-8'));
		fs.writeFileSync(path + '/' + outFilename, output.code);
		console.timeEnd('[write]' + outFilename);
	}
});
