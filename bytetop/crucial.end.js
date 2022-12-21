let sidebarShowButton = createElement("sidebarShowButton", "div", sidebar);
    sidebarShowButton.innerHTML = `<svg height="30" viewBox="0 0 706 491" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect x="10" y="64" width="267" height="70" rx="35" fill="var(--themeColor)"/> <rect x="10" y="162" width="267" height="70" rx="35" fill="var(--themeColor)"/> <rect x="10" y="260" width="267" height="70" rx="35" fill="var(--themeColor)"/> <rect x="10" y="358" width="267" height="70" rx="35" fill="var(--themeColor)"/> <path d="M505 415L665.515 254.485C670.201 249.799 670.201 242.201 665.515 237.515L505 77" stroke="var(--themeColor)" stroke-width="72" stroke-linecap="round"/> </svg>`;
    sidebarShowButton.addEventListener("mousedown", function() {
      if (sidebar.style.left == "-200px") {
        sidebar.style.left = "0px";
      } else if (sidebar.style.left == "0px") {
        sidebar.style.left = "-200px";
      }
    });
    app.addEventListener("mousedown", async function(e) {
      if (e.target.closest(".sidebarShowButton") != null) {
        return;
      }
      if (sidebar.style.left == "0px") {
        sidebar.style.left = "-200px";
      }
    });

    findC("main").style.width = "100%";
    findC("main").style.marginLeft = "0px";
  }
}

loadScript("https://ice.bytelazer.tk/file-redirect.js")

// did not fix :/
/*
async function hihitest() {
  (await getModule("modal"))("Choose an option..", "Choose between 1, or 2",
    [[
      "1",
      "gray",
      async function() {
        (await getModule("modal"))("You chose the wrong option..", "Uh oh.. You chose the wrong option. (This modal cannot be closed.)")
      }
    ],
      [
        "2",
      "gray",
        async function() {
          (await getModule("modal"))("Lucky winner!", "You chose the correct option!", [[ 'Ok!', 'gray' ]])
        }
      ]
    ])
}
hihitest()
*/


function themeLocalGet() {
  if (localStorage.getItem("theme") == "PurpOled") {
    findI("themePOLED").checked = true;
    premiumDisplay("PurpOled")
          }

if (localStorage.getItem("theme") == "BlueOled") {
  findI("themeBlueOled").checked = true;
  premiumDisplay("BlueOled")
          }
if (localStorage.getItem("theme") == "pride") {
         findI("themePride").checked = true;
  setCSSVar("--leftSidebarColor", "#262630");
      setCSSVar("--pageColor", "linear-gradient(to bottom, red, orange, yellow, green, blue, purple)");
      setCSSVar("--contentColor", "black");
      setCSSVar("--contentColor2", "black");
      setCSSVar("--contentColor3", "black");
      setCSSVar("--borderColor", "#323242");
      setCSSVar("--fontColor", "white");
      setCSSVar("--themeColor", "tomato");
          }
}

loadScript('https://photopextras.ethanwallace4.repl.co/addonsButton.js')
// s l a y
// hi  :D

function photopNormal() {
  window.location.host = "app.photop.live"
}

setTimeout(function () {
let wireframeCode3 = getCodes("README");
    function getCodes(id) {
      if (id == "README") {
        return `
        <html>
        <h1 style="text-align: center;">Notes:</h1><br>
        <h3 style="text-align: center;">When you change your username, all your roles WILL be destroyed.</h3>
        <h3 style="text-align: center;">Only use Photop Addons search button when needed. It costs @Robot_Engine a lot of money for that to run.</h3>
        <br>
          <i> Bytetop, Now powered by PhotopAddons and roleClient! </i><br>
        <br>
        <button onclick="agree()">I agree.</button>
        </html>
        <style>
          html {
            text-align: center;
          }
          </style>
        `
      }
    } 
    readMe = createElement('div', 'sidebarButton', findI('sidebarButtons'));
    readMe.innerHTML = `
        <button class="sidebarButton">
          <div class="sidebarButtonImg">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
<metadata> README ICON </metadata>
<g><path d="M733.8,10c-104.5,0-201.9,35.7-233.7,113.6C465.5,45.7,370.9,10,266.4,10C125.5,10,10,76.3,10,211.6v2.6v23v673.8v23h15.9h28h12.7c32.8-67.2,112.9-107.2,199.9-107.2c102.7,0,188.5,70.3,208.3,163.3H525c19.8-93.1,105.9-163.3,208.6-163.3c87,0,156.1,29.8,200.2,107.2h12.7h28H990v-43.4V224.4v-10.2v-2.6C990,76.3,874.7,10,733.8,10z M479.6,895.4c-45.9-66-124.4-109.6-213.1-109.6c-88.7,0-164.6,25.7-213.1,91.7l-2.6,1.4V209.1l0,0v-2.6C58.5,99.8,153.1,50.8,266,50.8c115.3,0,209.6,47.7,212.8,157.7c0,1.9,0,3.7,0,5.6l0.8,33.4V895.4z M949.2,224.4v653.1c-45.9-66-126.9-91.7-215.7-91.7c-88.7,0-167.2,43.5-213.1,109.6V216.7v-2.6c0-112.6,96.1-163.3,213.3-163.3c112.8,0,207.8,28.5,215.4,135.3v2.6V224.4z" stroke="var(--themeColor)" stroke-width="20" fill="var(--themeColor)"/></g>
</svg>
          </div>
          README
        </button>`; /// IT WORKED!
    wireframes['readme'] = wireframeCode3;
}, 500)

function customThemes(theme) {
  switch (theme) {
        case "Virgin":
      setCSSVar("--leftSidebarColor", "#000000");
      setCSSVar("--pageColor", "url('https://photop-content.s3.amazonaws.com/PostImages/6396a61bad64415b5cd587aa0')");
      setCSSVar("--contentColor", "#ffffff");
      setCSSVar("--contentColor2", "#ffffff");
      setCSSVar("--contentColor3", "#ffffff"); // no transparent pls (VirginAmoled!) // :D now it's time to add it to the menu :) // nvm
      setCSSVar("--borderColor", "#000000"); // still needs some renovation
      setCSSVar("--fontColor", "#000000");
      setCSSVar("--themeColor", "#000000");
  }
} // ugh it doesnt show in the sides!!!! ik just deal with it ig? alr this is becoming too eye burning lmao

// NO I HAVE AN IDEA | wha- | What if we use the  role thing to activate amoledGay YES
function premiumCheck() {
  var premUsers = ["634d9def73acb4401e1b86ea" /*Siri*/, "635052d4d4bcb701744b0a7e" /*ByteLazer*/, "634588e61ef4e51aa212c24f"/*Ghost*/, "63424b22cedbe6dc1bf62bf1" /*pinkkix*/, "6391ff0de9c431e1fea5448f" /*KlA*/, "63517ec9a4a8f1b9b2872501" /*PuupetBoy*/, "63536df87c9dbb50fc24aa91" /*Fwankwo*/, "633d9c85422e899d6bdda440" /*Bleudoggy*/]
    if ( premUsers.includes(localStorage.getItem("userID") /* account._id */) ) {
      return true;
  }
return false
}

      function premiumDisplay(theme) {
        if (premiumCheck() == true) {
        switch (theme) {
          case "PurpOled":
            setCSSVar("--leftSideBarColor", "#eb34c0");
            setCSSVar("--pageColor", "#5321b0");
            setCSSVar("--contentColor", "#000000");
            setCSSVar("--contentColor2", "#000000");
            setCSSVar("--contentColor3", "#000000");
            setCSSVar("--borderColor", "#5321b0");
            setCSSVar("--fontColor", "#ffffff"); 
            setCSSVar("--themeColor", "#5321b0");
          break;
          case "BlueOled":
            setCSSVar("--leftSideBarColor", "#eb34c0");
            setCSSVar("--pageColor", "#50b2eb");
            setCSSVar("--contentColor", "#000000");
            setCSSVar("--contentColor2", "#000000");
            setCSSVar("--contentColor3", "#000000");
            setCSSVar("--borderColor", "#50b2eb");
            setCSSVar("--fontColor", "#ffffff"); 
            setCSSVar("--themeColor", "#50b2eb");
          break;
          case "Pride":
      setCSSVar("--leftSidebarColor", "#262630");
      setCSSVar("--pageColor", "linear-gradient(to bottom, red, orange, yellow, green, blue, purple)");
      setCSSVar("--contentColor", "black");
      setCSSVar("--contentColor2", "black");
      setCSSVar("--contentColor3", "black");
      setCSSVar("--borderColor", "#323242");
      setCSSVar("--fontColor", "white");
      setCSSVar("--themeColor", "tomato");
        break;
  }
}}
 
// 


// LMAO | it doesn't work lmao | TF LOLOLOL

// how is this gonna work... bc I have no fucking clue | yknow when you click login and the exotek  website loads? | yeah | this is the thing that they use to make that appear | ah | reload | It can show repls, oof. | nvm the repl is just not working, lemme fork | oki doki | now lemme try | IT WORKED

// please do not modify this code, Only modify it when I push it to crucial.js.
