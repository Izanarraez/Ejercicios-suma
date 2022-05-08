//Ejercicio1
function suma() {
	let a = parseInt(prompt("Intoduce un valor"));
     let b = parseInt(prompt("Intoduce un valor"));

     return a+b;
}
//Ejercicio2
function mayor(){
     let a = parseInt(prompt("Intoduce un valor"));
	let b = parseInt(prompt("Intoduce un valor"));

     if(a>b){
          return a;
     }
     else{
          return b;

     }
}
//Ejercicio3
function divisionpar(){
     let a = parseInt(prompt("Intoduce un valor"));

     let b= a/2;
     let c= a/4;
     let d= a/8;

     return b+" "+c+" "+d;
}
//Ejercicico4
function parinpar(){
     let a = parseInt(prompt("Intoduce un valor"));

     if(a %2==0){
          return "par";
     }
     else{
          return "impar";
     }
}
//Ejercicio5
function cuentatras(){
     let a = parseInt(prompt("Intoduce un valor"));

     for(i=a;i>0;i--){
          document.write(i);
     }
}
//Ejercicio6 
function menormen(){
     let a = parseInt(prompt("Intoduce un valor"));
     let b = parseInt(prompt("Intoduce un valor"));
     let c = parseInt(prompt("Intoduce un valor"));

     let d = [a,b,c];
     if(a < b && a < c ){
          document.write(a);
     }
     else if(b < a && b < c){
          document.write(b);
     }
     else if(c < a && c < b){
          document.write(c);
     }
}
//Ejercicio6.1
function menormen2(){

     let num = parseInt(prompt("Cuantos numeros quieres introducir"));
     let arri = [];

     while(num != 0){
          for(let i=0;i<arri.length;i++){
               let n = parseInt(prompt("Introduce numeros"));
               arri[i] = n;
          }
     }

     for(let i=0;i<arri.length;i++){
          for(let j=0;j<arri.length;j++){
               if(arri[i] > arri[j]){
                    document.write(i);
               }
          }
     }


}
//Ejercicio7 
function central(){
     let a = parseInt(prompt("Intoduce un valor"));
     let b = parseInt(prompt("Intoduce un valor"));
     let c = parseInt(prompt("Intoduce un valor"));  
     
     if(a > b && a > c && b >= c){
          document.write(b);
     }
     else if(a > b && a > c && c >= b){
          document.write(c);
     }
     else if(b > a && b > c && c >= a){
          document.write(c);
     }
     else if(b > a && b > c && a >= c){
          document.write(a);
     }
     else if(c > a && c > b  && a >= b){
          document.write(a);
     }
     else if(c > b && c > a && b >= a){
          document.write(b);
     }
}
//Ejercicio8 (inacabado)
function orden(){
     let a = parseInt(prompt("Intoduce un valor"));
     let b = parseInt(prompt("Intoduce un valor"));
     let c = parseInt(prompt("Intoduce un valor"));
     let d = parseInt(prompt("Intoduce un valor")); 
     //8492 --> 

     let e = [a,b,c,d];

     for(let i=0;i<e.length;i++){
          for(let j=1;j<e.length;j++){
                 while (j != 3) {
                   	 
              }
          }
     }
 
}
//Ejercicio9(no se porque me sale NaN)
function marigmetica(){
	let t = [];
	let cont = 0;
	let bol = false;
	let suma = 0;
	let resultado = 0;

	do{
		let a = parseInt(prompt("Intoduce un valor y si quieres salir introduce uno negativo"));
		if (a < 0) {
			bol = true;
		}
		else{
			for (let i = 0; i < t.length; i++) {
			t[i] = a;
			cont++;
			}
		}
	}while (bol == false);	

     for (let i = 0; i < t.length; i++) {
          suma = suma + t[i];
     }
     resultado = suma/cont;
     document.write(resultado);
}
//Ejercicio10
//Ejercicio11
function pesoIMC(){
     let a = parseFloat(prompt("Intoduce un peso en KG"));
     let b = parseFloat(prompt("Intoduce un altura en M"));
     let IMC = 0;

     IMC = a/b;
     if(IMC < 18.5){
          document.write("Insuficiencia");
     }
     else if(IMC == 18.5 && IMC <=24.9){
          document.write("Insuficiencia");
     }
     else if(IMC >= 25.0 && IMC <=29.9){
          document.write("sobrepeso");
     }
     else if(IMC >= 30){
          document.write("sobrepeso");
     }
}
//Ejercicio12
function contardes(){
     let a = parseInt(prompt("Introduce un numero entero"));
     let suma =0;

          for(let i=a;i > 0;i--){
               suma = suma + i;
          }

     document.write(suma);
}
//Ejercicio13
function contardos(){
     let a = parseInt(prompt("Introduce un numero entero"));
     let b = parseInt(prompt("Introduce un numero entero"));

     let suma1 =0;
     let suma2 = 0;
     let sumaTotal = 0;

          for(let i=a;i > 0;i--){
               suma1 = suma1 + i;
          }
          for(let i=b;i > 0;i--){
               suma2 = suma2 + i;
          }

     sumaTotal = suma1 + suma2;
     document.write(sumaTotal);
}
//Ejercicio14
function relojpas(){

     let res = 0;

     do{
     let a = parseInt(prompt("Introduce una hora"));
     }while(a < 0 && a > 11);

     let b = parseInt(prompt("Introduce un numero de horas"));

     res = a+b;

     if(res > 12){
          res = res-12;
          document.write(res);
     }
     else{
          
     }
}
//Ejercicio21
function durVij(){

     let min = 0;
     let minT = 0;
     let horas = 0;
     let bol = false;

     do{
          let a = parseInt(prompt("Introduce tramos de viajes en minutos"));

          min = min + a;

          while(min >= 60){
               horas++;
               min = min - 60;
          }

          if(a <= 0){
               bol = true;
          }

     }while(bol == false);

     document.write(horas+" "+"horas"+" "+"y"+" "+min+" "+"min");
}
//Ejercicio25
function expo(){
     let a = parseFloat(prompt("Introduce una base"));
     let b = parseInt(prompt("Introduce un exponente"));

     let resultado = 0;

     resultado=Math.pow(a,b);
     document.write(resultado);
}