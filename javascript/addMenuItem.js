const handleSubmit =(event)=>{
    event.preventDefault();
    const dishName = event.target.name.value;
    const price = event.target.price.value;
    const image = event.target.image.value;
    
    let previousValue = JSON.parse(localStorage.getItem('HotelMenu')) || []
    console.log(previousValue);


    localStorage.setItem('HotelMenu',JSON.stringify([...previousValue, {dishName,image,price}]))

    document.getElementById("form").reset()
    
}