const container=document.querySelector(".container");
const count=document.querySelector("#count")
const amount=document.querySelector("#amount")
const select= document.querySelector("#select")
const btn=document.querySelector("#btn")

container.addEventListener("click",function(e){



if(e.target.classList.contains("sit")){
   e.target.classList.toggle("selected");
   calculateTotal()
 

}});

select.addEventListener("change",function(e){
    calculateTotal()
})



function calculateTotal(){
    let selectedSeatCount =container.querySelectorAll(".sit.selected").length;
   
    
     let price= select.value;
     console.log(price)
    count.innerHTML=selectedSeatCount;
   amount.innerText=selectedSeatCount*price


}


function click(){

    let bakiye=20000;
    let selectedSeatCount =container.querySelectorAll(".sit.selected").length;
   
    let price= select.value;
    let pay=selectedSeatCount*price
   confirm("Ödeme Ekranına Gitmeye Emin Misiniz?")
   let yeniSatir="\r\n"
   let odeme = prompt("Ödeme Şeklini Seçiniz"+yeniSatir+"1-Banka kartı"+yeniSatir+"2-Kredi Kartı")
   switch(odeme){
       case"1":
       prompt("Ödemeniz "+ pay+ " TL' dir"+yeniSatir+ "Kart Numarasını Giriniz")
       prompt("Şifrenizi Giriniz")
     let kart=  confirm("Ödemeniz Alınacaktır.Emin misiniz?")
       if(kart==true && bakiye>=pay){
           alert("Biletiniz Hazırlanmıştır. İyi Seyirler")
       }else{
           alert("Bakiyeniz Yetersizdir.Lütfen başka bir kart deneyiniz")
       }
    break;
         case"2":
    let cevap= confirm ("Taksit ister Misiniz?")
if(cevap===true){
let answer=   prompt("Kaç Taksit İstersiniz?"+yeniSatir+"1-3 taksit"+yeniSatir+"2-6 Taksit")
  switch(answer){
      case"1":
      prompt("Ödemeniz "+ pay+ " TL' dir"+yeniSatir+ "Kart Numarasını Giriniz")
           prompt("Şifrenizi Giriniz")
       let cevabı=   confirm( "Ödemeniz 3x"+Math.floor(pay/3)+ "Tl şeklinde hesabınızdan alınacaktır");
          if(cevabı==true && bakiye>=Math.floor(pay/3)){
              alert("Ödemeniz alınmıştır.İyi Seyirler")
          }else{ alert(" Bakiyeniz Yetersizdir.Yeni bir ödeme türü seçiniz")}
          break;
          case"2":
          prompt("Ödemeniz "+ pay+ " TL' dir"+yeniSatir+ "Kart Numarasını Giriniz")
          prompt("Şifrenizi Giriniz")
        let cevabın=    confirm ("Ödemeniz "+Math.floor(pay/6) + "Tl şeklinde hesabınızdan alınacaktır")
          if(cevabın==true && bakiye>=Math.floor(pay/6)){
              alert("Ödemeniz alınmıştır.İyi Seyirler")
          }else{ alert(" Bakiyeniz Yetersizdir.Yeni bir ödeme türü seçiniz")}
  }

break;

}}}
btn.addEventListener("click",click)










const selectedSeat=container.querySelectorAll(".sit.selected")
console.log(selectedSeat);