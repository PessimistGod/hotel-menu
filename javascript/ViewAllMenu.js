let viewMenu = document.getElementById("displayMenu")

let data = JSON.parse(localStorage.getItem('HotelMenu'))

console.log(data)

data.map((item,index)=>
viewMenu.innerHTML += `
<div class="card-container">
    <div class="image-container">
        <img src="${item.image}" class="imageDesign" alt="${item.dishName}" />
    </div>
    <div class="flexBetween">
        <div class="card-text-font">${item.dishName}</div>
        <div class="card-text-font">₹${item.price}.00</div>
    </div>
</div>
`
)