#!/usr/bin/env osascript -l JavaScript

ObjC.import("stdlib");
ObjC.import("Foundation");
app = Application.currentApplication();
app.includeStandardAdditions = true;

function readFile (path, encoding) {
	if (!encoding) encoding = $.NSUTF8StringEncoding;
	const fm = $.NSFileManager.defaultManager;
	const data = fm.contentsAtPath(path);
	const str = $.NSString.alloc.initWithDataEncoding(data, encoding);
	return ObjC.unwrap(str);
}

const homepath = app.pathTo("home folder");
const currentVault = $.getenv("vault_path").replace(/^~/, homepath);
const vaultListJson = homepath + "/Library/Application Support/obsidian/obsidian.json";

// get vault paths
const vaultList = JSON.parse(readFile(vaultListJson)).vaults;
const vaultArray = [];
for (const hash in vaultList) vaultArray.push(vaultList[hash].path);

const jsonArray = [];
vaultArray.forEach(vaultPath => {
	const vaultName = vaultPath.replace(/.*\//, "");
	const vaultURI = "obsidian://open?vault=" + encodeURIComponent(vaultName);

	// visual: icons & shorter path
	let currentIcon = "";
	if (currentVault === vaultPath) currentIcon = "✅ ";
	const shortPath = vaultPath.replace (/\/Users\/[^/]*/, "~");

	jsonArray.push({
		"title": currentIcon + vaultName,
		"subtitle": shortPath,
		"arg": vaultURI,
		"mods": {
			"alt": { "arg": vaultPath },
			"cmd": { "arg": vaultPath },
			"shift": { "arg": vaultPath },
			"fn": { "arg": vaultPath },
		}
	});
});

jsonArray.push({
	"title": "Vault Menu",
	"subtitle": "Create or delete vaults",
	"arg": "obsidian://advanced-uri?commandid=app%253Aopen-vault",
	"icon": { "path": "icons/settings.png" },
	"mods": {
		"alt": { "valid": false },
		"cmd": { "valid": false },
		"shift": { "valid": false }
	}
});

JSON.stringify({ items: jsonArray });
