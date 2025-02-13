
 gsap.from(".nav i, .nav h6 ",{
   y:-100,
   duration:3,
   delay:0.5,
   stagger:true
   
})


var crsr = document.querySelector(".cursor")
document.addEventListener("mousemove",function(dets){
crsr.style.left = dets.x+"px"
crsr.style.top = dets.y+"px"
})




var iphone = [{
    image:"https://static1.xdaimages.com/wordpress/wp-content/uploads/2023/09/iphone-15-pro-max-render.png",
    name:"iphone15 Pro",
    discription: "The ultimate iPhone.",
    price:"From ₹134900.00*",
},
    {
    image:"https://images.frandroid.com/wp-content/uploads/2022/09/iphone-14-pro-max-officiel-frandroid-2022.png",
    name:"iphone15",
    discription: "A total powerhouse.",
    price:"From ₹79900.00*"},
{   image:"https://pngimg.com/uploads/iphone_14/iphone_14_PNG21.png",
    name:"iphone14",
    discription: "As amazing as ever.",
    price:"From ₹69900.00*",
},
{   image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-black-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1586574260051",
    name:"iphone SE",
    discription: "Serious power.",
    price:"From ₹49900.00*",
}]

var flag = ""
iphone.forEach(function(elem){
    flag += `<div class="icard">
    <img src=${elem.image} alt="">
    <h2>${elem.name}</h2>
    <h3>${elem.discription}</h3>
      <p>${elem.price}</p>
      <button>Buy</button>
    </div>`
})

document.querySelector("#inpage").innerHTML = flag
