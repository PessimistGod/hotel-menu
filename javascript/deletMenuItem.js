let viewMenu = document.getElementById("deleteList")

let data = JSON.parse(localStorage.getItem('HotelMenu'))



function handleDelete(id){
    data.splice(id,1)
    localStorage.setItem('HotelMenu',JSON.stringify(data))
    viewMenu.innerHTML = '';
    fetchData();
}

function fetchData() {
    viewMenu.innerHTML = '';
    data.map((item, index) => {
        viewMenu.innerHTML += `
            <div class="card-container" style="position:relative">
                <i class="material-icons delete-button" onClick="handleDelete(${index})">delete</i>
                <div class="image-container">
                    <img src="${item.image}" class="imageDesign" alt="${item.dishName}" />
                </div>
                <div class="flexBetween">
                    <div class="card-text-font">${item.dishName}</div>
                    <div class="card-text-font">₹${item.price}.00</div>
                </div>
            </div>`;
    });
}

fetchData()