loadScript("https://lazer-v.github.io/static/bytetop/roles/roles.js")

loadScript("https://lazer-v.github.io/static/bytetop/roles/roleUsers.js")

// Mark for history purposes (Dec 10, 11:02 EST) You fixed ByteTop with @Siri!

loadScript("https://lazer-v.github.io/static/bytetop/roles/generateRoles.js")



function removeThemes() {
  localStorage.removeItem("theme")
}
// it worked :D
function setThemes() {
if (localStorage.getItem("theme") == "PurpOled") {
            premiumDisplay("PurpOled")
          }

if (localStorage.getItem("theme") == "BlueOled") {
            premiumDisplay("BlueOled")
          }
if (localStorage.getItem("theme") == "pride") {
            premiumDisplay("Pride")
          }
}
// THE PURPOLED THEME NO WROKKKK!!!?!?!?!? yeah I think I fixed it though with this O_O though now wene
// you fixed it | yes. thing is, we now need to set theme to blank when you click the other theme things
// That already works.
// well 
// nvm | it was bugging out lmao

// it worked
