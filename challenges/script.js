const result = document.getElementById('result')



// Running Sum Array
// Some o número atual com o seu antecessor e retorne o array
const runningSum = (nums) => {
    let newArr = []
    for (let i = 0; i < nums.length; i++) {
        let sum = nums[i] + nums[i - 1]
        newArr.push(sum)

    }
    console.log(newArr)
    console.log(nums)
    return
    /*
        Fazer um loop através do array
        Pegar cada item individual do array
        somar cada item com o próximo
        retornar o array com as somas dos itens
    */
}
runningSum([1, 1, 1, 1, 1])

// ============================================================

/**
 * Primeiro caractere único em uma string
 * Tendo uma string, encontre o primeiro caractere não repetido
 * e retorne o seu index.
 * 
 * Se não existir, retorne -1.
 * 
 * Exemplo 
 * str = 'javascript'
 * retorna 0
 * 
 * str = 'ana'
 * retorna 1
*/
