// 1.Algoritmo que realiza la suma entre 2 valores ingresados por el usuario 
function suma (){
    //declaro las variables necesarias para este algoritmo
    let a;
    let b;
    let s;
    //solicito los valores al usuario
    a=parseInt(prompt("Ingrese el primer valor a sumar "));
    b=parseInt(prompt("Ingrese el segundo valor a sumar "));

    //Realizar la operacion
    s=a+b;

    //mostrar el resultado
    console.log("El resultado de la suma es: "+ s)
    alert("el resultado de la suma es: "+s)
}

//2.Algoritmo que determina la suma,resta,multiplicacion y division entre 2 valores ingresados por el usuario 

function opBasicas(){
    let numero1;
    let numero2;
    let suma;
    let resta;
    let multiplicacion;
    let division;

    numero1=parseInt(prompt("Ingrese el primer valor a operar"));
    numero2=parseInt(prompt("Ingrese el segundo valor a operar"));


    suma= numero1+numero2;
    resta= numero1-numero2;
    multiplicacion= numero1*numero2;
    division= numero1/numero2;

    alert("El resultado de la las Operaciones son: suma: "+suma +" resta: "+resta +" Multiplicacion: "+ multiplicacion+" Division: "+division );
}

//3. se va pedir un numero para sacarle el cuadrado realizar un algortimo que determine el cuadrado 
function cuadrado() {
    let Numero = parseInt(prompt("Ingrese un numero para convertirlo en su cuadrado"));
    let cuadrado = Numero**2;

    alert ("Su numero es "+ Numero + " y su Cuadrado es: "+ cuadrado);

}

//4.Realizar un algoritmo que determine el area de un triangulo apartir por la base y altura ingresadas por el usuario

function areaTriangulo () {
    let B,A,H=0;
    
    alert ("Vamos a calcular el area de algunas figuras geometricas")

    let p= parseInt (prompt("Bienvenidos al menu de areas:"+"\n"+"pon el numero del area que quieres averiguar"+"\n"+"1.Cuadrado"+"\n"+"2.Triangulo"+"\n"+"3.Rectangulo"+"\n"+"4.circulo"))
    
    if (p==1) {
        B=parseInt(prompt("Ingrese el cuanto mide un lado de su Cuadrado: "));

        A=B**2;
        
        alert ("El area de su Cuadrado es: "+A);
        return;
        
    }
    else if (p==2) {
        
        B= parseInt(prompt("Ingrese la base de su Triangulo: "));
        H= parseInt(prompt("Ingrese la altura de su Triangulo: "));
        
        A=(B*H)/2;
        
        alert ("El area de su triangulo es: "+A);
        return;
    }
    else if (p==3) {

        B= parseInt(prompt("Ingrese el largo de su Rectangulo: "));
        H= parseInt(prompt("Ingrese el ancho de su Rectangulo: "));
    
        A=B*H;
    
        alert ("El area de su Rectangulo es: "+A);
        return;
    }
    else if (p==4){
        
        B= parseInt(prompt("Ingrese el radio de su Circulo: "));
    
        A=3.14*(B**2);
    
        alert ("El area de su Circulo es: "+A);
        return;

    }
    else{
        alert ("El numero ingresado es invalido o no existe en el menu")
    }
    
}

// 5.Conversion de unidades Realizar un algoritmo que determine los kilometros pulgadas y metros de un valor dado en centimetros.

function conversionUnidades() {
    let Metros,Pulgadas,Centimetros,Kilometros

    Metros = parseInt(prompt("Ingrese el valor de metros a calcular: "));

    Pulgadas= Metros*39.37;
    Centimetros=Metros*100;
    Kilometros=Metros/1000;

    alert (Metros + " Metros en pulgadas son: "+ Pulgadas +"\n"+Metros + " Metros en centimetros son: "+ Centimetros +"\n"+Metros + " Metros en Kilometros son: "+ Kilometros +"\n")
}

//6.Relaizar un algoritmo que determine el nuemero mayor de 2 numeros ingresados por el usuario
function Mayor(){
    let A,B;

    A=parseFloat(prompt("Ingresa un número: "));
    B=parseFloat(prompt("Ingresa otro número: "));

    if (A>B){
        alert ("El número mayor es: "+A+"\n"+"El número menor es: "+B);
    } 
    else if(B>A){
        alert ("El número mayor es: "+B+"\n"+"El número menor es: "+A);
    }
    else if (B===A) {
        alert ("Ambos numeros son el mismo ");
    }
    else {
        alert ("No ingresaste un número")
    }

}

//Realizar un algoritmo que determine el numero mayor de 3 numeros ingresados por el usuario
function mayor3 () {
    let x,y,z;

    x=parseInt(prompt("Ingrese un número: "));
    y=parseInt(prompt("Ingrese un segundo número: "));
    z=parseInt(prompt("Ingrese el ultimo número: "));

    if (x>=y && x>=z && y>=z){

        alert ("El numero mayor es: "+x+"\n"+"El que le sigue es: "+y+"\n"+"El menor es: "+z+"\n");

    }
    else if (z>=x && z>=y && x>=y){

        alert ("El numero mayor es: "+z+"\n"+"El que le sigue es: "+x+"\n"+"El menor es: "+y+"\n");

    }
    else if (y>=x && y>=z && x>=z) {

        alert ("El numero mayor es: "+y+"\n"+"El que le sigue es: "+x+"\n"+"El menor es: "+z+"\n");

    }
    else if (z>=y && z>=x && y>=x){

        alert ("El numero mayor es: "+z+"\n"+"El que le sigue es: "+y+"\n"+"El menor es: "+x+"\n");

    }
    else if (z===y && z===x && y===x){

        alert ("El numero mayor es: "+z+"\n"+"El que le sigue es: "+y+"\n"+"El menor es: "+x+"\n");

    }
    else{
        alert ("No ingresaste un número");
    }

}


//Realizar un algoritmo que solicite al estudiante su nombre la materia y 8 calificaciones de la mismas entre 1 y 10 dterminar con la informacion si el estudiante aprobo o reprobo teniendo encuenta que se aprueba con 6.2 en adelante
function Notas() {
    let nota1,nota2,nota3,nota4,nota5,nota6,nota7,nota8,notaFinal;
    let materia="";
    let nombre="";

    nombre= prompt("Hola estudiante ingresa tu Nombre: ");
    materia=prompt("Que materia deseas revisar: ");

    alert("A continuacion escribe 8 notas del 1 al 10");

    nota1= parseInt(prompt("Recuerda notas del 1-10"+"\n"+"\n"+"Ingrese la primera nota"));
    nota2= parseInt(prompt("Recuerda notas del 1-10"+"\n"+"\n"+"Ingrese la primera nota"));
    nota3= parseInt(prompt("Recuerda notas del 1-10"+"\n"+"\n"+"Ingrese la primera nota"));
    nota4= parseInt(prompt("Recuerda notas del 1-10"+"\n"+"\n"+"Ingrese la primera nota"));
    nota5= parseInt(prompt("Recuerda notas del 1-10"+"\n"+"\n"+"Ingrese la primera nota"));
    nota6= parseInt(prompt("Recuerda notas del 1-10"+"\n"+"\n"+"Ingrese la primera nota"));
    nota7= parseInt(prompt("Recuerda notas del 1-10"+"\n"+"\n"+"Ingrese la primera nota"));
    nota8= parseInt(prompt("Recuerda notas del 1-10"+"\n"+"\n"+"Ingrese la primera nota"));

    notaFinal=(nota1+nota2+nota3+nota4+nota5+nota6+nota7+nota8)/8

    if (notaFinal>=8.5){
        alert ("Felicidades "+nombre+"\n"+"pasaste "+materia+"\n"+"Con un promedio de "+notaFinal);
    }
    else if (notaFinal>=6.2){
        alert("Felicidades "+nombre+" Pero puedes mejorar"+"\n"+"pasaste "+materia+"\n"+"Con un promedio de "+notaFinal);
    }
    else {
        alert("Perdiste "+nombre+"\n"+"No pasaste "+materia+"\n"+"y tienes un mal promedio de "+notaFinal);
    }

}

//Realizar un algoritmo que determinar si un numero ingreado por el usuario es par o impar 
function numeroP () {
    let a;

    alert("A continuacion pon un numero y te vamos a decir si es impar o par.")
    a=parseInt(prompt("Elige un numero: "))

    if (a%2 == 0){
        alert ("El numero es par")
    }
    else {
        alert ("El numero es impar ")
    }
}

//Realizar un algoritmo para un individuo que desea invertir su capital en un banco y requiere saber cuanto dinero ganara despues de n numeros de anios teniendo encuenta que pagan un interes mensual del 0,7%
function inversion(){
    
    let dinero;
    let anios;
    let rentabilidad;
    let totalDinero;

    alert ("Hola usuario vamos a calcular la rentabilidad de tu dinero: ");
    let nombre = prompt("Como te llamas:");
    dinero = parseInt (prompt("Cuanto dinero desas ingresar "));
    anios = parseInt (prompt("Cuantos anios lo piensan dejar "));

    //calculamos la rentabilidad 

    rentabilidad= (dinero*0.007*(anios*12));
    totalDinero= dinero + rentabilidad;

    console.log("Hola "+nombre+"\n"+"Vas a tener una rentabilidad de  "+rentabilidad+"\n"+"Y el total que vas a sacar es: $"+totalDinero);
    alert ("Hola "+nombre+"\n"+"Vas a tener una rentabilidad de  "+rentabilidad+"\n"+"Y el total que vas a sacar es: $"+totalDinero);
    
}

//Realizar un algoritmo que solicite al usuario un rango entre 2 valores y mustre los numeros que hay entre ellos

function rango() {
    let numeroA, numeroB;
    let rango = [];
    alert("Vamos a calcular los números que hay entre 2 opciones que dejes");

    numeroA = parseInt(prompt("Dijita el primer número: "));
    numeroB = parseInt(prompt("Dijita el segundo número: "));

    if (numeroB < numeroA) {
        for (let i = numeroB + 1; i < numeroA; i++) {
            rango.push(i);
        }
        alert("Los números entre " + numeroB + " y " + numeroA + " son: " + rango.join(", "));
    }
    else if (numeroA < numeroB) {
        for (let i = numeroA + 1; i < numeroB; i++) {
            rango.push(i);
        }
        alert("Los números entre " + numeroA + " y " + numeroB + " son: " + rango.join(", "));
    }
    else if (numeroA === numeroB) {
        alert("No tienen números intermedios, son iguales.");
    }
    else {
        alert("No se agregó algún número.");
    }
}

//Realizar un algoritmo que solicite al usuario un numero para identificar si es primo o no

function numerosPrimos(){
    alert ("Determina si un numero es primo o no");

    let numero = parseInt (prompt("Ingrese el número "));

    if (numero<= 1) {
        alert (numero+ " ,no es un número primo");
        return;
    }
    for (let i=2;i<=numero/2 ; i++){

        if (numero% i === 0) {
            alert (numero+ " ,no es un número primo");
            return;            
        }
    }
    alert (numero+ " ,Si es un número primo");
}

//Realizar un algoritmo quede informacion
function peliculas() {
    
    alert ("Aqui puedes averiguar la informacion de una pelicula de disney que este en este sistema")
    const peliculas = [
        {
            titulo: "El Rey Leon",
            director: "Roger Allers y Rob Minkoff",
            anio: 1994,
            genero: "Aventura"
        },
        {
            titulo: "La Bella y la Bestia",
            director: "Gary Trousdale y Kirk Wise",
            anio: 1991,
            genero: "Romance"
        },
        {
            titulo: "Aladdin",
            director: "Ron Clements y John Musker",
            anio: 1992,
            genero: "Fantasia"
        },
        {
            titulo: "Frozen",
            director: "Chris Buck y Jennifer Lee",
            anio: 2013,
            genero: "Musical"
        },
        {
            titulo: "Mulan",
            director: "Barry Cook y Tony Bancroft",
            anio: 1998,
            genero: "Accion"
        },
        {
            titulo: "Moana",
            director: "Ron Clements y John Musker",
            anio: 2016,
            genero: "Aventura"
        },
        {
            titulo: "Hercules",
            director: "Ron Clements y John Musker",
            anio: 1997,
            genero: "Fantasia"
        },
        {
            titulo: "Enredados",
            director: "Nathan Greno y Byron Howard",
            anio: 2010,
            genero: "Aventura"
        },
        {
            titulo: "Zootopia",
            director: "Byron Howard y Rich Moore",
            anio: 2016,
            genero: "Comedia"
        },
        {
            titulo: "La Sirenita",
            director: "Ron Clements y John Musker",
            anio: 1989,
            genero: "Fantasia"
        },
        {
            titulo: "Blancanieves",
            director: "David Hand",
            anio: 1937,
            genero: "Fantasia"
        },
        {
            titulo: "Pinocho",
            director: "Ben Sharpsteen y Hamilton Luske",
            anio: 1940,
            genero: "Aventura"
        },
        {
            titulo: "Bambi",
            director: "David Hand",
            anio: 1942,
            genero: "Drama"
        },
        {
            titulo: "Dumbo",
            director: "Ben Sharpsteen",
            anio: 1941,
            genero: "Fantasia"
        },
        {
            titulo: "Cenicienta",
            director: "Clyde Geronimi, Wilfred Jackson y Hamilton Luske",
            anio: 1950,
            genero: "Romance"
        },
        {
            titulo: "Alicia en el Pais de las Maravillas",
            director: "Clyde Geronimi, Wilfred Jackson y Hamilton Luske",
            anio: 1951,
            genero: "Fantasia"
        },
        {
            titulo: "Peter Pan",
            director: "Clyde Geronimi, Wilfred Jackson y Hamilton Luske",
            anio: 1953,
            genero: "Aventura"
        },
        {
            titulo: "101 Dalmatas",
            director: "Clyde Geronimi, Hamilton Luske y Wolfgang Reitherman",
            anio: 1961,
            genero: "Comedia"
        },
        {
            titulo: "El Libro de la Selva",
            director: "Wolfgang Reitherman",
            anio: 1967,
            genero: "Aventura"
        },
        {
            titulo: "Pocahontas",
            director: "Mike Gabriel y Eric Goldberg",
            anio: 1995,
            genero: "Romance"
        }
    ];
    
    
    let nombreP = prompt("Ingresa el nombre de la pelicula de disney que quieres averiguar");
    let info="";
    for (let pelicula of peliculas){
        if (pelicula.titulo===nombreP){ 
            info= "Titulo: "+ pelicula.titulo +"\n"+
                  "Director: "+ pelicula.director +"\n"+
                  "Año: "+ pelicula.anio +"\n"+
                  "Genero: "+ pelicula.genero;
            break;
        }
    }
    
        if (info !== ""){
    
            alert ("La informacion de la pelicula es: "+"\n"+ info);
        }
        else {
            alert ("La pelicula no se encuentra en nuestro sistema");
        }
    
    
}

