var assert = require("assert");
const Calculadora = require("../src/calculadora");
const { beforeEach } = require("mocha");

describe("Testes da Calculadora", function () {
  let calc;
  beforeEach(function () {
    calc = new Calculadora();
  });

  it("teste de soma", function () {
    assert.equal(calc.somar(2, 3), 5);
  });

  it("teste de subtrair", function () {
    assert.equal(calc.subtrair(3, 3), 0);
  });

  it("teste de multiplicar", function () {
    assert.equal(calc.multiplicar(3, 2), 6);
  });

  it("teste de dividir", function () {
    assert.equal(calc.dividir(4, 2), 2);
  });

  it("deve lançar um erro quando tentar dividir por zero", function () {
    assert.throws(
      () => calc.dividir(10, 0),
      /Divisão por zero não é permitida./
    );
  });

  it("deve retornar 1 para qualquer base com expoente 0", function () {
    const resultado = calc.potencia(5, 0);
    assert.strictEqual(resultado, 1);
  });

  it("deve lançar um erro para um operador inválido", function () {
    assert.throws(() => calc.operar(5, 3, "%"), /Operador inválido/);
  });
});
