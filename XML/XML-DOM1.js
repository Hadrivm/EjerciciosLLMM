// 1. Título del primer libro

document.getElementsByTagName("title")[0].childNodes[0].nodeValue;

// 2. Año del primer libro

document.getElementsByTagName("year")[0].childNodes[0].nodeValue;

// 3. Precio del segundo libro

document.getElementsByTagName("price")[1].childNodes[0].nodeValue;

// 4. Autor del primer libro

document.getElementsByTagName("book")[0].getElementsByTagName("author")[0].childNodes[0].nodeValue;

// 5. Primer autor del tercer libro

document.getElementsByTagName("book")[2].getElementsByTagName("author")[0].childNodes[0].nodeValue;

// 6. Segundo autor del tercer libro

document.getElementsByTagName("book")[2].getElementsByTagName("author")[1].childNodes[0].nodeValue;

// 7. Nombre del primer atributo del primer libro

document.getElementsByTagName("book")[0].attributes[0].nodeName;

// 8 Valor del primer atributo del primer libro

document.getElementsByTagName("book")[0].attributes[0].nodeValue;

// 9. Número de autores del tercer libro

document.getElementsByTagName("book")[2].getElementsByTagName("author").length;

// 10. Mostrar todos los autores del tercer libro

l = document.getElementsByTagName("book")[2].getElementsByTagName("author").length;
a = document.getElementsByTagName("book")[2].getElementsByTagName("author");
for(i = 0; i < l; i++)
    console.log(a[i].childNodes[0].nodeValue);

// 11. Mostrar el número de atributos del cuarto libro

document.getElementsByTagName("book")[3].attributes.length;

// 12. Mostrar el valor de los atributos del cuarto libro

l = document.getElementsByTagName("book")[3].attributes.length;
a = document.getElementsByTagName("book")[3].attributes;
for(i = 0; i < l; i++)
    console.log(a[i].nodeValue);

