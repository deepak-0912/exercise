class Box {
  constructor(limit) {
    this.parentId = document.getElementById("parentId");
    this.parentClass = document.getElementsByClassName("day1");
    this.childClass = document.getElementsByClassName("day");
    this.limit = limit;
    this.checkArr = [];
    this.cnt = limit;
  }

  checkToggel(checkId) {
    const index = this.checkArr.indexOf(checkId.id);
    if (index === -1) {
      // eslint-disable-next-line no-console
      // console.log("deepak");
      if (checkId.id === "checkNone") {
        const len = this.checkArr.length;
        for (let i = 0; i < len; i++) {
          document.getElementById(this.checkArr[i]).checked = false;
        }
        this.checkArr = [];
        this.limit = this.cnt;
      } else if (this.limit > 0) {
        document.getElementById("checkNone").checked = false;
        this.checkArr.push(checkId.id);
        this.limit -= 1;
      } else {
        document.getElementById(checkId.id).checked = false;
        // eslint-disable-next-line no-alert
        alert("only 3 day can be select");
      }
    } else {
      // eslint-disable-next-line no-console
      // console.log("badgujjar");
      document.getElementById(checkId.id).checked = false;
      this.checkArr.splice(index, 1);
      this.limit += 1;
    }
  }

  check() {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < this.childClass.length; i++) {
      this.childClass[i].addEventListener(
        "click",
        // eslint-disable-next-line func-names
        function() {
          this.checkToggel(this.childClass[i]);
        }.bind(this)
      );
    }
  }
}
const object1 = new Box(3);
object1.check();
