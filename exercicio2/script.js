/* # Exercício 2

Observe a string abaixo.

```jsx
const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
```

A partir dela, execute os passos abaixo:

a) Remova o excesso de espaços no final da string;

b) exiba, em um console.log() a quantidade de caracteres da string, antes e depois da
 remoção dos espaços;

c) Substitua os traços `________` por “sticioso”. */




const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

const novaString = minhaString.trim()
 
console.log("tamnho original", minhaString.length)
console.log("tamanho som recorte", novaString.length)

const novaString1 = novaString.replace("________", "sticioso")
console.log(novaString1)