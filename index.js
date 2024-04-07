const { createApp } = Vue;

createApp({
    data() {
        return {
            display: "0",
            numeroAnterior: null,
            numeroAtual: null,
            operador: null
        }
    },
    methods: {
        lidarBotao(valor) {
            switch (valor) {
                case '*':
                case '/':
                case '-':
                case '+':
                    this.lidarOperador(valor);
                    break;

                case '.':
                    this.lidarDecimal();
                    break;

                case 'C':
                    this.lidarLimpar();
                    break;

                case '=':
                    this.lidarIgual();
                    break;

                default:
                    this.lidarNumero(valor);
            }
        },
        lidarOperador(valor) {
            this.display += valor;
        },
        lidarDecimal() {
            if (!this.display.includes('.')) {
                this.display += '.';
            }
        },
        lidarLimpar() {
            this.display = '0';
            this.numeroAtual = null;
            this.numeroAnterior = null;
            this.operador = null;
        },
        lidarIgual() {
            this.display = eval(this.display);
        },
        lidarNumero(valor) {
            if (this.display === '0') {
                this.display = valor;
            } else {
                this.display += valor;
            }
        }
    }
}).mount("#app");