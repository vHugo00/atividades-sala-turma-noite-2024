let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numero1, numero2;

rl.question('Digite o primeiro número: ', (num1) => {
    numero1 = parseInt(num1);

    rl.question('Digite o segundo número: ', (num2) => {
        numero2 = parseInt(num2);

        // Função para calcular o MMC
        function calcularMMC(a, b) {
            return (a * b) / calcularMDC(a, b);
        }

        // Função para calcular o MDC
        function calcularMDC(a, b) {
            if (b === 0) {
                return a;
            } else {
                return calcularMDC(b, a % b);
            }
        }

        // Calculando e exibindo o MMC e o MDC
        let mmc = calcularMMC(numero1, numero2);
        let mdc = calcularMDC(numero1, numero2);

        console.log(`MMC de ${numero1} e ${numero2}: ${mmc}`);
        console.log(`MDC de ${numero1} e ${numero2}: ${mdc}`);

        rl.close();
    });
});
