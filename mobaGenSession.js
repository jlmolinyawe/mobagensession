var fs = require('fs');
var os = require('os');
var header = '[Bookmarks]\nSubRep=APPLICATION\nImgNum=41';
var template = '{HOSTNAME}=#109#0%{HOSTNAME}%22%<default>%%-1%-1%%%22%%0%0%Interactive shell%%%-1%0%0%0%%1080%%0%0#MobaFont%12%0%0%0%15%236,236,236%0,0,0%180,180,192%0%-1%0%%xterm%-1%0%0,0,0%54,54,54%255,96,96%255,128,128%96,255,96%128,255,128%255,255,54%255,255,128%96,96,255%128,128,255%255,54,255%255,128,255%54,255,255%128,255,255%236,236,236%255,255,255%80%24%0%1%-1%<none>%%0#0#';
var regex = new RegExp('{HOSTNAME}','g');

var ipList = fs.readFileSync('./ipAsList.txt', 'utf8').split(os.EOL);

for (var i in ipList) {
	ipList[i] = template.replace(regex, ipList[i]);
}

if (process.argv[2]) header = header.replace('APPLICATION', process.argv[2]);

fs.writeFileSync('MobaXterm Sessions.mxtsessions', header + '\n' + ipList, 'utf8');