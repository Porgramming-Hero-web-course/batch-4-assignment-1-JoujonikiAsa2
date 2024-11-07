const removeDuplicates = (array:number[]):number[] =>{
    const uniqueArray = array.filter((value, index) => array.indexOf(value) === index);
    return uniqueArray
} 
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))