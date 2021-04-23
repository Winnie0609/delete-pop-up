const container = document.querySelector(".class")
const file = document.querySelectorAll(".file")
const div = document.querySelectorAll("div")
const del = document.querySelectorAll(".delete")
const overlay = document.getElementById("overlay")
const cancel = document.querySelector("#cancel-btn")
const del_btn = document.querySelector("#delete-btn")
const clear = document.querySelector(".clear")

const del_btn_one = document.querySelector(".del-one")
const file_one = document.querySelector(".one")
const del_btn_two = document.querySelector(".del-two")
const file_two = document.querySelector(".two")
const del_btn_three = document.querySelector(".del-three")
const file_three = document.querySelector(".three")

let count = 3

for(let i = 0; i < del.length; i++){
    del[i].addEventListener("click", function(){

        document.getElementById("overlay").style.display = "block"
        
        del_btn.addEventListener("click",function(){

            overlay.style.display = "none";

            if(del[i].classList.contains("del-one")){
                file_one.remove()
                console.log(count--)
            }else if(del[i].classList.contains("del-two")){
                file_two.remove()
                console.log(count--)
            }else if(del[i].classList.contains("del-three")){
                file_three.remove()
                console.log(count--)
            }

            if (count <= -1 ){
                clear.style.display = "block"
                console.log("clear")
            }
        })
        
        cancel.addEventListener("click", function(){
            overlay.style.display = "none"
        })
    }
)}
