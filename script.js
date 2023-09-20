const getId = s => document.getElementById(s)
const jp = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん".split("")
const id = "a i u e o ka ki ku ke ko sa shi su se so ta chi tsu te to na ni nu ne no ha hi fu he ho ma mi mu me mo ya yu yo ra ri ru re ro wa wo n".split(" ")
var usedJp = jp.slice(0)
var usedId = id.slice(0)
var benar = 0
var salah = 0
var jawaban = ""
function pilihAcak() {
  if (usedJp.length == 0) {
    usedJp = jp
    usedId = id
  }
  let hasilAcak = Math.floor(Math.random()*usedJp.length)
  getId("teks").innerHTML = usedJp[hasilAcak]
  jawaban = usedId[hasilAcak][0].toUpperCase()+usedId[hasilAcak].split("").slice(1).join("")
  usedJp.splice(hasilAcak, 1)
  usedId.splice(hasilAcak, 1)
}
function cek() {
  var input = getId("input").value.toLowerCase()
  if (input == jawaban.toLowerCase()) {
    getId("output").innerHTML = "Jawaban Benar!"
    getId("benar").innerHTML = ++benar
  } else {
    getId("output").innerHTML = "Jawaban Salah!<br>Jawaban Benar: "+jawaban
    getId("salah").innerHTML = ++salah
  }
  getId("cek").disabled = true
  setTimeout("reset()", 2000)
}
function reset() {
  getId("cek").disabled = false
  getId("input").focus()
  getId("input").value = ""
  getId("output").innerHTML = "Jawaban ..."
  pilihAcak()
}
reset()
