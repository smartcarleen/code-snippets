//don't forget to prefix with scope name if necessary, i.e. sn_ace.ACEDemoDataUtils
var scriptClass = new GlideDateTime(); 

var funcArray = [];
for (var funcName in scriptClass) {
    //grab all variables and functions from the class
  	funcArray.push(funcName);
}

funcArray.sort();
gs.info(funcArray.join("\n"));
