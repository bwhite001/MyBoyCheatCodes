// Use code on website https://etherealgames.com/gba/a/
var xml = "<?xml version='1.0' encoding='UTF-8' ?><cheats>"
var start = document.querySelector("article ol")
start.querySelectorAll("li").forEach(function(item, index) {
    items = item.innerText.split("\n")
    if (items.length > 1) {
        codes = items.slice(1);
        xml += '<cheat type="cb" name="' + items[0] + '" enabled="false">'
        for (var i = 0; i < codes.length; i++) {
            xml += '<code>' + codes[i] + '</code>'
        }
        xml += "</cheat>"
    }
})
xml += "</cheats>"
copy(xml)
console.log(xml)