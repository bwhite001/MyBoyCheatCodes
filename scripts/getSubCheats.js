function nextElement(root, fullStr, element, end, callback) {
    if (element.tagName == "LI") {
        items = element.innerText.split("\n")
        if (items.length > 1) {
            codes = items.slice(1);
            titleCode = root.innerText + " - " + items[0];
            codesStr = '<cheat type="cb" name="' + titleCode + '" enabled="false">'
            for (var i = 0; i < codes.length; i++) {
                codesStr += '<code>' + codes[i] + '</code>'
            }
            codesStr += "</cheat>"
            if (element.nextElementSibling != end) {
                fullStr += codesStr;
                console.log(fullStr);
                nextElement(root, fullStr, element.nextElementSibling, end, callback)
            } else {
                callback(fullStr)
            }
        }
    }
}

function getPCode(index, ps, xml, callback) {
    p = ps[index];
    nextP = ps[index + 1];
    console.log(xml)
    if (p.nextElementSibling.tagName == "LI") {
        element = p.nextElementSibling;
        return nextElement(p, xml, element, nextP, function(fullStr) {
            return getPCode(index + 1, ps, fullStr, callback)
        })
    } else {
        return callback(xml)
    }
}
var xml = "<?xml version='1.0' encoding='UTF-8' ?><cheats>"
var start = document.querySelector("article ol")
var ps = start.querySelectorAll("p");
getPCode(0, ps, xml, function(xml) {
    xml += "</cheats>"
    copy(xml)
    console.log(xml);
});