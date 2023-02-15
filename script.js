// API  
const api_url = "https://fakestoreapi.com/products";  

//To store data in a fetch.
let products = [];
let display_products = [];

//Get data
fetch(api_url)
.then(response =>  response.json())
.then(data => {
        data.forEach(element => {
            products.push(element);   
        })

        display_products = [...products]
        displayData(display_products)
    }
)
.catch(error => console.log(error.message));


// Function for Displaying Data 
function displayData(products){
    document.getElementById("results").innerHTML ='';
    products.forEach(product => {

 const markup = `
    <div id="product" style="text-align:left; position:relative; top:100px; display:inline-block;">
        <div ><img src=${product.image} style="height:200px; width:auto;"></div>
        <div id="details">
        <p id="title">${product.title}</p>
        <p id="price">Price: ${product.price}</p>
        <p id="category">Category: ${product.category}</p>
        <p id="category">Rating: ${product.rating.rate}</p>
    </div>
</div> 

`
document.getElementById("results").innerHTML += markup;  
});
}

// Function for Order by category
function sortByCategory(){
    const category = document.getElementById("category").value;
    display_products = products.filter(product => product.category === category)
    displayData(display_products)
}

// Filter products by Rating 
function sortByRating(){
    const rating = document.getElementById("rating").value;
    display_products = products.filter(product => product.rating.rate >= rating)
    displayData(display_products)
}

// Filter products by Order
function sortByOrder(){
    const order = document.getElementById("order").value;
    if(order === "rating_desc"){
        display_products.sort((a, b) => b.rating.rate - a.rating.rate);
        displayData(display_products)
    }else{
        display_products.sort((a, b) => a.rating.rate - b.rating.rate);
        displayData(display_products)
    }
}

// Filter by search term
function filterBySearch(){
    const search = document.getElementById("title").value;
    display_products = products.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));
    displayData(display_products);
}


// Sort by Category and Rating and Ordering by Ascending and Descending order.
function sortByCategoryAndRatingAndOrdering() {
    const category = document.getElementById("category").value;
    const rating = document.getElementById("rating").value;
    const order = document.getElementById("order").value;
    
    // category and rating 
    display_products = products.filter(product => product.category === category && product.rating.rate >= rating);

    // orderby 
    if(order === "rating_desc"){
        display_products.sort((a, b) => b.rating.rate - a.rating.rate);
    }else if(order === "rating_asc"){
        display_products.sort((a, b) => a.rating.rate - b.rating.rate);
    }
    displayData(display_products);
  }
  
