const products=[
    {name:'samsung s3 phone',price:12000},
    {name:'asus laptop d34',price:12000},
    {name:'apple smart phone',price:12000},
    {name:'basundhara binding paper',price:12000},
    {name:'lg smart phone',price:12000},
    {name:'old granny land phone',price:12000},
    {name:'samsung watch',price:12000}
]

function searchProducts(products,searchText){
    let matched = [];
    for(const product of products){
        if(product.name.indexOf(searchText) != -1){
            matched.push(product.name);
        } 
    }
    return matched;
}

console.log(searchProducts(products,'phone'));