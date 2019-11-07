// Exercicio 01
console.log('// Exercicio 1');
class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
    }

    isAdmin() {
        if(this.admin === true) {
            return true;
        } else {
            return false;
        }
    }
}

class Admin extends Usuario {
    constructor() {
        super();
        this.admin = true;
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin());
console.log(Adm1.isAdmin());

console.log('------------------------------------------------') // Separar valores entre exercicios
// Exercicio 02
console.log('// Exercicio 2');
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },  
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },  
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' }
];

// 2.1 Map
const idades = usuarios.map(user => user.idade);
console.log(idades);
// 2.2 Filter
const userRocketIdade = usuarios.filter(user => user.empresa === 'Rocketseat' && user.idade > 18);
console.log(userRocketIdade);
// 2.3 Find
const userWork = usuarios.find(user => user.empresa === 'Google');
console.log(userWork);
// 2.4 Union
const somaIdade = usuarios.map(user => {
    user.idade = user.idade * 2;
    return user;
});

const filterOldUsers = somaIdade.filter(users => users.idade <= 50);
console.log(somaIdade);
console.log(filterOldUsers);
console.log('------------------------------------------------') // Separar valores entre exercicios

// Exercicio 03
console.log('// Exercicio 3');
// 3.1
const arr = [1, 2, 3, 4, 5];
arr.map(item => item + 10);  
console.log(arr.map(item => item + 10));
// 3.2
const usuario = { nome: 'Diego', idade: 23 };
const mostrarIdade = usuario => usuario.idade;
mostrarIdade(usuario);
console.log(mostrarIdade(usuario));
// 3.3
const nome1 = "Diego";
const idade = 23;
const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });
mostraUsuario(nome1, idade);
mostraUsuario(nome1);
console.log(mostraUsuario(nome1, idade));
console.log(mostraUsuario(nome1));
// 3.4
const promise = () => new Promise((resolve,reject) => resolve());
console.log(promise());
console.log('------------------------------------------------') // Separar valores entre exercicios

// Exercicio 04
// 4.1 Desestruturação simples
console.log('// Exercicio 4')
const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC'
    }
};
const { nome, endereco: { cidade, estado } } = empresa;
console.log(nome);
console.log(cidade);
console.log(estado);
// 4.2 
function mostraInfo({ nome, idade } = usuarios) {
    return `${nome} tem ${idade} anos.`;
}
mostraInfo({ nome: 'Diego', idade: 23 });
console.log(mostraInfo({ nome: 'Diego', idade: 23 }));

console.log('------------------------------------------------') // Separar valores entre exercicios
// Exercicio 05
// 5.1 Rest
console.log('Exercicio 5');
const arr2 = [1, 2, 3, 4, 5, 6];
const [x ,...y] = arr;
console.log(x);
console.log(y);
function soma(...y) {
    const soma = y.reduce((x, y) => x + y);
    return soma;
}
console.log(soma(1, 2, 3, 4, 5, 6));
console.log(soma(1, 2));

// 5.2 Spread

const usuario2 = {  
    nome: 'Diego',  
    idade: 23,  
    endereco: {    
        cidade: 'Rio do Sul',    
        uf: 'SC',    
        pais: 'Brasil'  
    }
};

const usuario3 = {...usuario2, nome: 'Gabriel' };
const usuario4 = { ...usuario2, endereco: {...usuario2.endereco, cidade: 'Lontras'} };
console.log(usuario3);
console.log(usuario4);

console.log('------------------------------------------------') // Separar valores entre exercicios
// Exercicio 06
console.log('Exercicio 6');
const usuarioT1 = 'Diego';
const idadeT1 = 23;
console.log(`O usuario ${usuarioT1} possui ${idadeT1} anos`);

console.log('------------------------------------------------') // Separar valores entre exercicios
// Exercicio 07
console.log('Exercicio 7');
const nomeT2 = 'Diego';
const idadeT2 = 23;
const usuarioT3 = {
    nomeT2,
    idadeT2,
    cidade: 'Rio do Sul'
}

console.log(usuarioT3);