
const addProduct=()=>{
   const productName= document.getElementById("name");
   const quantity= document.getElementById("quantity");
   const productValue=productName.value;
   const productQuantity=quantity.value;
   productName.value="";
   quantity.value="";
   saveToLocalStorage(productValue,productQuantity);
   
//    emptyInputFiled(productName,quantity);
}
const displayProduct=()=>{
    // get localStorage Value 
const localStorageValue=localStorage.getItem("cart");
const convertObj=JSON.parse(localStorageValue);

const loadProduct=document.getElementById("product__load");
    // display value 
for (const key in convertObj) {
    const li=document.createElement("li");
    li.innerHTML=`
    ${key} ${convertObj[key]}
    `;
    loadProduct.appendChild(li)
}
   
    
}

const checkLocalStorage=()=>{
    cart={};
    const stored= localStorage.getItem("cart");
    if (stored) {
        cart=JSON.parse(stored)
    }
    return cart;
}

const saveToLocalStorage=(productName,quantity)=>{

   const cart= checkLocalStorage();
   cart[productName]=quantity;

  const strinify= JSON.stringify(cart);
  localStorage.setItem("cart",strinify)

  
}
displayProduct()