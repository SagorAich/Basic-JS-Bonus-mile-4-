const products=[
    {name:'samsung s3 phone',price:12000},
    {name:'asus laptop d34',price:120000},
    {name:'apple smart phone',price:120000},
    {name:'basundhara binding paper',price:12000},
    {name:'lg smart phone',price:1200},
    {name:'old granny land phone',price:20000},
    {name:'samsung watch',price:100}
]

/* for(const product of products){
    if(product.price<10000){
        break;
    }
    console.log(product);
} */

for(const product of products){
    if(product.price<10000){
        continue;
    }
    console.log(product);
}