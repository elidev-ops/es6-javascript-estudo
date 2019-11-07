"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Exercicio 01
console.log('// Exercicio 1');

var Usuario =
/*#__PURE__*/
function () {
  function Usuario(email, senha) {
    _classCallCheck(this, Usuario);

    this.email = email;
    this.senha = senha;
  }

  _createClass(Usuario, [{
    key: "isAdmin",
    value: function isAdmin() {
      if (this.admin === true) {
        return true;
      } else {
        return false;
      }
    }
  }]);

  return Usuario;
}();

var Admin =
/*#__PURE__*/
function (_Usuario) {
  _inherits(Admin, _Usuario);

  function Admin() {
    var _this;

    _classCallCheck(this, Admin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Admin).call(this));
    _this.admin = true;
    return _this;
  }

  return Admin;
}(Usuario);

var User1 = new Usuario('email@teste.com', 'senha123');
var Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin());
console.log(Adm1.isAdmin());
console.log('------------------------------------------------'); // Separar valores entre exercicios
// Exercicio 02

console.log('// Exercicio 2');
var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}]; // 2.1 Map

var idades = usuarios.map(function (user) {
  return user.idade;
});
console.log(idades); // 2.2 Filter

var userRocketIdade = usuarios.filter(function (user) {
  return user.empresa === 'Rocketseat' && user.idade > 18;
});
console.log(userRocketIdade); // 2.3 Find

var userWork = usuarios.find(function (user) {
  return user.empresa === 'Google';
});
console.log(userWork); // 2.4 Union

var somaIdade = usuarios.map(function (user) {
  user.idade = user.idade * 2;
  return user;
});
var filterOldUsers = somaIdade.filter(function (users) {
  return users.idade <= 50;
});
console.log(somaIdade);
console.log(filterOldUsers);
console.log('------------------------------------------------'); // Separar valores entre exercicios
// Exercicio 03

console.log('// Exercicio 3'); // 3.1

var arr = [1, 2, 3, 4, 5];
arr.map(function (item) {
  return item + 10;
});
console.log(arr.map(function (item) {
  return item + 10;
})); // 3.2

var usuario = {
  nome: 'Diego',
  idade: 23
};

var mostrarIdade = function mostrarIdade(usuario) {
  return usuario.idade;
};

mostrarIdade(usuario);
console.log(mostrarIdade(usuario)); // 3.3

var nome1 = "Diego";
var idade = 23;

var mostraUsuario = function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
};

mostraUsuario(nome1, idade);
mostraUsuario(nome1);
console.log(mostraUsuario(nome1, idade));
console.log(mostraUsuario(nome1)); // 3.4

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};

console.log(promise());
console.log('------------------------------------------------'); // Separar valores entre exercicios
// Exercicio 04
// 4.1 Desestruturação simples

console.log('// Exercicio 4');
var empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};
var nome = empresa.nome,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado;
console.log(nome);
console.log(cidade);
console.log(estado); // 4.2 

function mostraInfo() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : usuarios,
      nome = _ref.nome,
      idade = _ref.idade;

  return "".concat(nome, " tem ").concat(idade, " anos.");
}

mostraInfo({
  nome: 'Diego',
  idade: 23
});
console.log(mostraInfo({
  nome: 'Diego',
  idade: 23
}));
console.log('------------------------------------------------'); // Separar valores entre exercicios
// Exercicio 05
// 5.1 Rest

console.log('Exercicio 5');
var arr2 = [1, 2, 3, 4, 5, 6];
var x = arr[0],
    y = arr.slice(1);
console.log(x);
console.log(y);

function soma() {
  for (var _len = arguments.length, y = new Array(_len), _key = 0; _key < _len; _key++) {
    y[_key] = arguments[_key];
  }

  var soma = y.reduce(function (x, y) {
    return x + y;
  });
  return soma;
}

console.log(soma(1, 2, 3, 4, 5, 6));
console.log(soma(1, 2)); // 5.2 Spread

var usuario2 = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
};

var usuario3 = _objectSpread({}, usuario2, {
  nome: 'Gabriel'
});

var usuario4 = _objectSpread({}, usuario2, {
  endereco: _objectSpread({}, usuario2.endereco, {
    cidade: 'Lontras'
  })
});

console.log(usuario3);
console.log(usuario4);
console.log('------------------------------------------------'); // Separar valores entre exercicios
// Exercicio 06

console.log('Exercicio 6');
var usuarioT1 = 'Diego';
var idadeT1 = 23;
console.log("O usuario ".concat(usuarioT1, " possui ").concat(idadeT1, " anos"));
console.log('------------------------------------------------'); // Separar valores entre exercicios
// Exercicio 07

console.log('Exercicio 7');
var nomeT2 = 'Diego';
var idadeT2 = 23;
var usuarioT3 = {
  nomeT2: nomeT2,
  idadeT2: idadeT2,
  cidade: 'Rio do Sul'
};
console.log(usuarioT3);
