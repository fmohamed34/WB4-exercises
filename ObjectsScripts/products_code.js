// Exercise 2: Test code
function parsePartCode(params){
    const supplier = text.slice(0, text.indexOf(":"));
    const number = text.slice(text.indexOf(":")+1, text.indexOf("-"));
    const size = text.slice(text.indexOf("-"))
return {
    supplierCode: supplier,
    productNumber: number,
    size: size
}
}
