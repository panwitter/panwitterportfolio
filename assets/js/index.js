let work = document.getElementById("work");
let education = document.getElementById("education");
let list = document.querySelector(".page-about_profile-list")

console.log(work,education,list);

function click() {
    console.log("нажали");
}

work.onclick = function () {
    console.log("нажали на work");
    list.innerHTML = "";
    list.insertAdjacentHTML("afterbegin",` <article class="profile-item">
              <h5>помидор</h5>
              <div class="profile-item_bottom">
                <h5>ЧТО ЭТО ЧЁ ПОМИДОР</h5>
                <div class="profile-item_date">
                  <img src="./assets/img/calendar.svg" alt="" />
                  <h6>2009-2014</h6>
                </div>
              </div>
            </article>`)
};

education.onclick = () => {
    console.log("нажали на education");
    list.innerHTML = "";
    list.insertAdjacentHTML("afterbegin",` <article class="profile-item">
              <h5>хлеб</h5>
              <div class="profile-item_bottom">
                <h5>Я НЕ МОГУ ПОНЯТЬ</h5>
                <div class="profile-item_date">
                  <img src="./assets/img/calendar.svg" alt="" />
                  <h6>2009-2014</h6>
                </div>
              </div>
            </article>`)
}