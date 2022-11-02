/* # Exercício 3

A partir da frase a seguir, faça o que se pede

```
Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"
```

a) Crie uma `const` no seu código para guardar a frase (com aspas e tudo);

b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;

c) Verifique se a nova string inclui **verde**, e se inclui **laranja**.

**EXTRA:** tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS” */





//Crie a const para a frase aqui

const aviso = `Jorge tem uma casa verde e com portão azul, com os dizeres:
 "BOAS VINDAS, mas não deixe o gato sair"`

 console.log(aviso)
 const cor = aviso.replace("verde", "rosa").replace("azul","laranja")
 console.log(cor) 
 console.log(cor.includes("verde"))
 console.log(cor.includes("laranja"))
 
 const frase = "mas não deixe o gato sair".toUpperCase()
 //console.log(frase.toLocaleUpperCase())

 const frase2 = `Jorge tem uma casa verde e com portão azul, com os dizeres:"${frase}"`

 console.log(frase2)
