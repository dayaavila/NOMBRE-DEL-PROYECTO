function main ()
{
	
		var n1 =parseInt(prompt("Introduce un número"));
		var n2 =parseInt(prompt("Introduce otro número"));
		var n3 =parseInt(prompt("Introduce otro número"));

		document.write("Los números introducidos fueron: "+n1+", "+n2+" y "+n3+".<br><br>");

		if ( (n1 < 10) || (n2 < 10) || (n3 < 10) )
		{
			document.write("Alguno de los números son menores a diez.<br><br>");
		}
		
		var exp = Math.pow(n1,n2);
		document.write(n1+" Elevado a la "+n2+" es igual a: "+exp+"<br><br>");
		var raiz = Math.sqrt(n3);
		document.write("La raiz cuadrada de "+n3+" es igual a: "+raiz);

}