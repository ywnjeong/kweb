let itemcount=0;
let itemtotal=0;

function addtocart(productname,productprice){
    itemcount++;
    itemtotal+=productprice;
    document.getElementById('itemcount').innerHTML=itemcount;
    document.getElementById('itemprice').innerHTML=itemtotal;
}