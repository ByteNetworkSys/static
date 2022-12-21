//gtg
// back, but sneaking
// :/ don't mess with it this time
// it's fine my friend
function setRole(element) {
    var aTags = document.getElementsByTagName(element);
    var found;
    for (var i = 0; i < aTags.length; i++) {
      if (aTags[i].className !== "profileUsername" && aTags[i].className !== "previewUsername" && aTags[i].id !== "newPostArea" && aTags[i].className !== "postChatInput" && aTags[i].parentElement.id !== "newPostArea" && aTags[i].className !== "postText" && aTags[i].className !== "chatText" && aTags[i].className !== "chatMinfiyText" && aTags[i].parentElement.id !== "profileDescription" && aTags[i].className !== "groupName" && aTags[i].className !== "groupInfo" && aTags[i].className !== "groupSection" && aTags[i].className !== "groupInfoInGroup" && aTags[i].id !== "groupInfo") {
        found = aTags[i];
        size = aTags[i].style.fontSize == "30px" ? "font-size: 60%" : "";
        text = found.textContent;
        if (chicknug.includes(text)) {
          found.innerHTML = generateRole("🐔") + found.innerHTML;
        }
        if (furry.includes(text)) {
          found.innerHTML = generateRole("😽") + found.innerHTML;
        }
        if (mommy.includes(text)) {
          found.innerHTML = generateRole("🫦") + found.innerHTML;
        }
        if (yter.includes(text)) {
          found.innerHTML = generateRole("📷") + found.innerHTML;
        }
        if (alt.includes(text)) {
          found.innerHTML = generateRole("ALT") + found.innerHTML;
        }
        if (sexist.includes(text)) {
          found.innerHTML = generateRole("Sexist") + found.innerHTML;
        }
        if (gamemaster.includes(text)) {
          found.innerHTML = generateRole("💻") + found.innerHTML;
        }
        if (icecream.includes(text)) {
          found.innerHTML = generateRole("🫠") + found.innerHTML;
        }
        if (chill.includes(text)) {
          found.innerHTML = generateRole("💙") + found.innerHTML;
        }
        if (imp.includes(text)) {
           found.innerHTML = generateRole("😈") + found.innerHTML;
        }
        if (prem.includes(text)) {
          found.innerHTML = generateRole("⭐️") + found.innerHTML;
        }
        if (bred.includes(text)) {
          found.innerHTML = generateRole("🍞") + found.innerHTML;
        }
        if (ded.includes(text)) {
          found.innerHTML = generateRole("🪦") + found.innerHTML;
        }
        if (angey.includes(text)) {
          found.innerHTML = generateRole("😡") + found.innerHTML;
        }
        if (tissue.includes(text)) {
          found.innerHTML = generateRole("🧻️") + found.innerHTML;
        }
        if (sax.includes(text)) {
          found.innerHTML = generateRole("👉🏽👌🏽") + found.innerHTML;
        }
        if (banned.includes(text)) {
          found.innerHTML = generateRole("Banned") + found.innerHTML;
        }
        if (slay.includes(text)) {
          found.innerHTML = generateRole("⚔️") + found.innerHTML;
        }
        if (dev.includes(text)) {
          found.innerHTML = generateRole("👩‍💻") + found.innerHTML;
        }
        if (lgbtq.includes(text)) {
          found.innerHTML = generateRole("🏳️‍🌈") + found.innerHTML;
            }
        if (clown.includes(text)) {
                found.innerHTML = generateRole("🤡") + found.innerHTML;
            }
        if (squid.includes(text)) {
                found.innerHTML = generateRole("🦑") + found.innerHTML;
            }
        if (handheart.includes(text)) {
                found.innerHTML = generateRole("🫶") + found.innerHTML;
            }
        if (loveified.includes(text)) {
            found.innerHTML = generateRole("❤️") + found.innerHTML;
        }
        if (broverse.includes(text)) {
                found.innerHTML = generateRole("💀") + found.innerHTML;
            } 
        if (ok.includes(text)) {
                found.innerHTML = generateRole("👍") + found.innerHTML;
            }
        if (cool.includes(text)) {
                found.innerHTML = generateRole("😎") + found.innerHTML;
            } 
        if (npc.includes(text)) {
                found.innerHTML = generateRole("🧍") + found.innerHTML;
            } 
        }
    }
}
function generateRole(emoji) {
    num = roles.indexOf(emoji);
    return `<span class="roleEmoji" style="background: linear-gradient(315deg, ${roles[num + 1]}, ${roles[num + 2]}); ${size}" title='${roles[num + 3]}'>${roles[num]}</span> `;
}

function addRoles() {
    setRole("div");
    setRole("span");
}

setInterval(addRoles, 10)

