class Calculadora {

    somar(a, b) {
        return a + b;
    }

    subtrair(a, b) {
        return a - b;
    }

    multiplicar(a, b) {
        return a * b;
    }

    dividir(a, b) {
        if (b === 0) {
            throw new Error('Divisão por zero não é permitida.');
        }
        return a / b;
    }

    // Novo método: calcular potência usando while
    potencia(base, expoente) {
        let resultado = 1;
        let contador = 0;
        while (contador < expoente) {
            resultado *= base;
            contador++;
        }
        return resultado;
    }

    // Novo método: calcular fatorial
    fatorial(n) {
        if (n < 0) {
            throw new Error('Fatorial não é definido para números negativos.');
        }
        let resultado = 1;
        for (let i = 1; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    }

    // Novo método: operação com switch case
    operar(a, b, operador) {
        switch (operador) {
            case '+':
                return this.somar(a, b);
            case '-':
                return this.subtrair(a, b);
            case '*':
                return this.multiplicar(a, b);
            case '/':
                return this.dividir(a, b);
            default:
                throw new Error('Operador inválido.');
        }
    }

}

module.exports = Calculadora;