<head>
<script type="text/javascript">
     var categories=["Select a Category","Electronics","Fashion","Footwear"];
     function bodyload()
     {
        var select=document.getElementById("selectcategory");
        for(var category of categories)
        {
            var option=document.createElement("option");
            option.text=category;
            option.value=category;
            select.appendChild(option);
        }
     }
     var Electronics=["Select a Electronic Product","Laptop","Tablet","BluetoothSpeaker"];
     var Fashion=["Select a Fashion Product","Shirt","T-shirt"];
     var Footwear=["Select a Footwear Product","Shoes","Loafers","FormalShoes"];
     function loadProducts(collection)
     {
       var select=document.getElementById("selectproduct");
       select.innerHTML="";
       for(var product of collection)
       {
           var option=document.createElement("option");
           option.text=product;
           option.value=product;
           select.appendChild(option);
       }
     }
     function categoryChanged()
     {
         var category=document.getElementById("selectcategory");
          var categoryvalue=category.value;
         switch(categoryvalue)
         {
             case "Electronics":loadProducts(Electronics);break;
             case "Fashion":loadProducts(Fashion);break;
             case "Footwear":loadProducts(Footwear);break;
             default:document.getElementById("selectproduct").innerHTML="";
         }
     }
     var products=[
                   {Name:"Laptop",Price:45000,Photo:"../Images/laptop.jpg"},
                   {Name:"Tablet",Price:17000,Photo:"../Images/tab.jpg"},
                   {Name:"BluetoothSpeaker",Price:3000,Photo:"../Images/bluetoothspeaker.jpg"},
                   {Name:"Shirt",Price:700,Photo:"../Images/shirt1.jpg"},
                   {Name:"T-shirt",Price:500,Photo:"../Images/tshirt.jpg"},
                   {Name:"Shoes",Price:1500,Photo:"../Images/shoes.jpg"},
                   {Name:"Loafers",Price:1200,Photo:"../Images/loafers.jpg"},
                   {Name:"FormalShoes",Price:2199,Photo:"../Images/formalshoes.jpg"},
                  ];
     var item=[];
     function productChanged()
     {
         var productName=document.getElementById("selectproduct").value;
         item=products.filter(function(product)
         {
             return product.Name==productName;
         });
         document.getElementById("lblName").innerHTML=item[0].Name;
         document.getElementById("lblpic").src=item[0].Photo;
         document.getElementById("lblprice").innerHTML="&#8377;"+item[0].Price;


     }
     var count=0;
     function addtocart()
     {
         var selectcategory=document.getElementById("selectcategory").value;
         if(selectcategory=="Select a Category")
         {
             alert("Please select a Category");
         }
         else
         {
         var itemName=item[0].Name;
         var itemprice=item[0].Price;
         var pic=new Image();
         pic.src=item[0].Photo;
         pic.className="img-thumbnail";
         pic.width=50;
         pic.height=50;
         count=count+item.length;
         document.getElementById("lblcount").innerHTML=count;
         var tbody=document.getElementById("tbody");
         var tr=document.createElement("tr");
         var td1=document.createElement("td");
         td1.innerHTML=itemName;
         var td2=document.createElement("td");
         td2.innerHTML=itemprice;
         var td3=document.createElement("td");
         td3.append(pic);
         tr.appendChild(td1);
         tr.appendChild(td2);
         tr.appendChild(td3);
         tbody.appendChild(tr);
         }
     }
     
    </script>
</head>
