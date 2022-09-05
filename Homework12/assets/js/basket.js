let products = [];

if (localStorage.getItem("products") != null) {
    products = JSON.parse(localStorage.getItem("products"))
}

let tableBody = document.querySelector(".table .table-body");

// deleteIcon.classList.add("fa-solid")
// deleteIcon.classList.add("fa-trash")
// deleteIcon.style.cursor = "pointer";
// deleteIcon.style.float = "right";





for (const product of products) {
    tableBody.innerHTML += `<tr>
    <td><img src="${product.image}" height="100px" width="100px" class="card-img-top " alt="..."></td>
    <td>${product.name}</td>
    <td>${product.desc}</td>
    <td>${product.count}</td>
    <td class="delete" ><i class= "fa-solid fa-trash"></i></td>
  </tr>`
    // tableBody.appendChild(deleteIcon);
}

let deleteIcon = document.querySelectorAll(".delete");


deleteIcon.forEach(e=>{
    e.addEventListener("click", function(){
        this.parentElement.remove()
        localStorage.clear() ;
    })
})



// document.querySelector("sup").innerText = getProductsCount(products);

// function getProductsCount(items) {
//     let resultCount = 0;
//     for (const item of items) {
//         resultCount += item.count
//     }
//     return resultCount;
// }

// deleteIcon.forEach(e => {
//     e.addEventListener("click",function() {
//         if (localStorage.getItem("products") != null){
//             tableBody.remove();
//             localStorage.clear();
//         }
        


//     })
// });

// deleteIcon.addEventListener("click", function (e) {
//     e.preventDefault();
//     if (localStorage.getItem("products") != null) {


//         tableBody.remove();
//         localStorage.clear();

//     }
//     else {
//         alert("Card empty!")
//     }
// })


