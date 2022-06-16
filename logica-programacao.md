# Curso Lógica de Programação Completo 2021 [Iniciantes] + Desafios + Muita prática

https://www.youtube.com/watch?v=iF2MdbrTiBM

## Método 5Q's para montar um algorítimo:
Analise criticamente o problema e descubra:
(tente explicar esse problema para você mesmo em voz alta e peça mais informações/investigue mais até você compreender completamente o problema.)

1. Quais são os dados de entrada necessários?
2. Oque devo fazer com estes dados?
3. Quais são as restrições deste problema?
4. Qual é o resultado esperado?
5. Qual é a sequência de passos a serem feitas para chegar ao resultado esperado?


## PseudoCódigo
- **input:** Palavra usada para receber dados do usuário;
- **print:** Exibir algo;
- **if condição:** Condicional que controla se algo deve ou não ser feito;
- **else:** Claúsula a ser executada caso nenhuma condicional if seja executada;
- **loop de X a Y:** Laço de repetição que irá iterar de X à Y;
- **loop X em Y:** Laço de repetição que irá iterar X em uma coleção [array] Y;
- **while X:** Laço de repetição que acontecerá enquanto uma condição for verdadeira;

Ex básico:
idades = [15,46,75,34,23]
total = 0
loop idade em idades 
    total = total + idade
print total


input numeroFa
if numeroFa <= 0 retorna
var total = 1
var acrescenta = 1
loop de acrescenta à numeroFa
    total = total * acrescenta
    acrescenta + 1
print total


### Criar algoritmos
Quando for preciso fazer uma operação em algo especifico de um programa, é melhor adicionar a parte especifica à uma variavel e depois fazer a operação necessária

Ex: Adicionar uma propriedade específica de um array/objeto à uma variável para fazer uma operação seja no valor ou na key (chave)