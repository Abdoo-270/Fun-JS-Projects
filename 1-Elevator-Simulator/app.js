const room = document.getElementById("asansor-room")

function gotoKat(val) {
  if (val === 1) {
    room.style.top = "440px";
  }
  if (val === 2) {
    room.style.top = "330px";
  }
  if (val === 3) {
    room.style.top = "220px";
  }
  if (val === 4) {
    room.style.top = "110px";
  }
  if (val === 5) {
    room.style.top = "0px";
  }
}
