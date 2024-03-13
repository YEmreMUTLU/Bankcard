let debitCard=document.querySelector(".debit-card")
let dots=document.querySelector(".dots")
const btn2=document.querySelector("#btn2")
let debit=document.querySelector("#debit")
let credit=document.querySelector("#credit")
let yeniSatir="\r\n"
function show (){
  let pay=2000;
   let bakiye=50000;
    let yeniSatir="\r\n"
   
     let cevap= confirm ("Taksit ister Misiniz?")
 if(cevap===true){
 let answer=   prompt("Kaç Taksit İstersiniz?"+yeniSatir+"1-3 taksit"+yeniSatir+"2-6 Taksit")
   switch(answer){
       case"1":
       alert("Ödemeniz "+ pay+ " TL' dir")
           
        let cevabı=   confirm( "Ödemeniz 3x"+Math.floor(pay/3)+ "Tl şeklinde hesabınızdan alınacaktır");
           if(cevabı==true && bakiye>=Math.floor(pay/3)){
               alert("Ödemeniz alınmıştır.İyi Seyirler")
           }else{ alert(" Bakiyeniz Yetersizdir.Yeni bir ödeme türü seçiniz")}
           break;
           case"2":
           alert("Ödemeniz "+ pay+ " TL' dir")
         
         let cevabın=    confirm ("Ödemeniz "+Math.floor(pay/6) + "Tl şeklinde hesabınızdan alınacaktır")
           if(cevabın==true && bakiye>=Math.floor(pay/6)){
               alert("Ödemeniz alınmıştır.İyi Seyirler")
           }else{ alert(" Bakiyeniz Yetersizdir.Yeni bir ödeme türü seçiniz")}}
}}
credit.addEventListener("click",show)







function click(){
    
alert("Ödemeniz Alınmıştır.İyi Seyirler")

}
btn2.addEventListener("click",click)