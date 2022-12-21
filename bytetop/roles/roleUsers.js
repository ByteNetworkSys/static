// max roles for non-admin: 4
// max roles for admin: 6
var banned = [/*(userID, username)*/]
var dev = ["Siri", "ByteNetwork", "Novaker", "Novakkix", "Novakkix-", "Unovakkix", "robloxlover"]
var clown = ["BBQBunger2", "BBQBunger"]
var broverse = ["Ghost", "2Kixx", "KlA", "Siri"]
var cool = ["-bozy-","FR3AK","Siri"]
var Nova = ["Novakixx"]
var loveified = ["Alexdauhidk"]
var squid = ["Squidsii"]
var handheart = ["xX_catiburn", "nya", "Franco", "Ghost"]
var ok = ["soxx"]
var lgbtq = ["FR3AK", "ByteNetwork", "PeriodAhPeriodUh", "Franco", "nya", "mcsheeeeeeeeesh", "xX_catiburn", "WMG_", "Max_The_Furry", "Nugget", "BerryBlast"];
var slay = ["ByteNetwork", "Siri", "nya", "Franco", "Novaker", "Novakkix", "Novakkix-", "Unovakkix"]
var npc = ["TheAwareNPC"]
var sax = ["Itachi_Uchiha"]
var tissue = ["abandonmentissues", "UrCuteDommy", "Ghost", "robloxlover"]
var angey = ["wawa"]
var ded = ["CytonicSpeed"]
var bred = ["WMG_", "WMG-", "WMG", "WMG--", "wawa", "FABO"]
var imp = ["UrDommy", "The_demon_slayerfan", "The_DoomSlayer"]
var prem = ["ByteNetwork", "Siri", "KlA", "pinkkix", "Ghost", "PuppetBoy", "Franco", "Bleudoggy",  "xX_catiburn"]
var chill = ["Bleudoggy"]
var icecream = ["Ghost"]
var sexist = ["yamaaa"]
var gamemaster = ["PuppetBoy"]
var alt = ["Apple_Siri", "PuppetBoyPlus"]
var yter = ["Yhzsyy"]
var mommy = ["xX_catiburn", "BerryBlast"]
var furry = ["Max_The_Furry"]
var chicknug = ["Nugget"]
// Epic CheckBanned code below













function checkBanned(userID) {
  if (banned.includes(userID)) {
    return true
  }
  return false
}

function onLoad() {
  if (checkBanned(getLocalStore("userID")) == true) {
    document.getElementsByClassName('app')[0].remove()
    window.alert("You're banned from ByteTop.")
  }
}
onLoad()
