var cnt = 3
var arr = []
let y = document.getElementsByClassName('day')

function check () {
  let x = this.id

  // console.log(this);

  if (arr.indexOf(x) == -1) {
    if (x == 'check8') {
      let c = arr.length

      for (let i = 0; i < c; i++) {
        document.getElementById(arr[0]).checked = false
        arr.shift()
      }
      document.getElementById(x).checked = true
      cnt = 3
    } else if (cnt > 0) {
      document.getElementById('check8').checked = false
      document.getElementById(x).checked = true
              arr.push(x)
              cnt--
             } else {
              document.getElementById(x).checked = false
              alert('Only 3 days can be selected')
             }
  } else {
            let a = arr.indexOf(x)
            arr.splice(a, 1)
            document.getElementById(x).checked = false
            cnt++
  }

for (let j = 0; j < y.length; j++) {
  // console.log(y[j]);
  y[j].addEventListener('click', check)
}
