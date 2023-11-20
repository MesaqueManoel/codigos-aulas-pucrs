// 01a_funcaoSemParametro
function funcaoSemRetorno() {
    console.log("Alô Mundo!");
}

function funcaoComRetorno() {
    return "Alô Mundo!";
}

let msg = funcaoSemRetorno()
console.log(msg)

msg = funcaoComReturn()
console.log(msg)