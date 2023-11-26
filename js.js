'use strict';

/** Task 1 → функция-калькулятор "Расчет электроэнерги" **/

{

function Electricity(){

    this.state = false;
    this.rate = 0.1057;

    this.on = function(){
        this.state =  true;
    };

    this.off = function(){
        this.state = false;
    };

    this.getData = function(){
            this.current = +prompt('Введите текущие показания', '200');
            this.previous = +prompt('Введите предыдущие показания', '100');
            this.calcData();
    };

    this.calcData = function(){
        if (this.state === false) {
            console.log('Включите калькулятор');
        } else {
            this.consumption = this.current - this.previous;
            this.cost = (this.rate  * this.consumption).toFixed(2);

        this.result();
        }
    };

    this.result = function(){
        console.log(`Расчет электроэнергии:
    текущие показания: ${this.current} кВт, 
    предыдущие показания: ${this.previous} кВт,
    расход: ${this.consumption} кВт,
    сумма к оплате составляет ${this.cost} бел.руб.`);
    };
}

// let electricity = new Electricity();
// electricity.on();

// electricity.getData();

// electricity.off();

// console.log(electricity);
}

/** Task 2 → функция-калькулятор "Лампочка" **/
{

function Bulb(){
   
    this.state = false;

    this.on = function(){
        this.state = true;
    };

    this.off = function(){
        this.state = false;
    }

    this.getData = function(){
        if (this.state === false) {
            console.log('Включите калькулятор');
        } else {
            this.power = +prompt('Введите мощность лампочки', '220');
            this.quantityBuld = +prompt('Введите количество лампочек', '5');
            this.hoursWork = +prompt('Введите время работы (сколько часов)', '25');
            this.rate = +prompt('Введите стоимость одного кВт.ч', '0.1057');
    
            this.calc();
        }
    };

    this.calc = function(){
        this.energy = this.power / 1000 * this.quantityBuld * this.hoursWork;
        this.result =  (this.energy * this.rate).toFixed(2);

        this.showResult();
    };

    this.showResult = function(){
        console.log(`Расчет расходов на работу лампочек:
за ${this.quantityBuld} лампочек мощностью ${this.power} Ватт за ${this.hoursWork} ч.,
сумма к оплате составит - ${this.result} бел. руб.`);
    };
};

// let bulb = new Bulb();
// // bulb.on();
// bulb.getData();
// console.log(bulb);

}


/** Task 3 → функция-конструктор "Чайник" **/

{
    function Kettle(){

        this.state = false;

        this.on = function(){
            this.state = true;
        };

        this.off = function(){
            this.state = false;
        };

        this.getData = function(){
            if (this.state === false) {
                console.log('Включите калькулятор');
            } else {
                this.power = +prompt('Введите мощность чайника в ваттах', '2400');
            this.volume = +prompt('Введите объем чайника в литрах', '1.5');

            this.calcTime();
            }
        };
        
        this.calcTime= function(){
            this.heatCapacity = 4.18;
            this.waterTemperature = 20;
            this.result = (this.volume * this.heatCapacity * this.waterTemperature / this.power * 60).toFixed(2);

            this.showResult();
        };

        this.showResult = function(){
            console.log(`Время закипания Вашего чайника составит ${this.result} мин.`);
        };
    }

    // let kettle = new Kettle();
    // kettle.on();
    // kettle.getData();
    // console.log(kettle);

}


/** Task 4 → функция-конструктор "Калькулятор" (онлайн-урок)**/
{
    function Calculator (){

        this.state = false;

        this.on = function(){
            this.state = true;
        }

        this.off = function(){
            this.state =  false;
        };

        // this.onOff = function(){
        //     this.state !== this.state;
        // }

        this.read = function(){
            this.a = +prompt('a?', 0);
            this.b = +prompt('b?', 0);
        };

        this.sum = function(){
            if(this.state === false) return 'Включите калькулятор';
            return this.a + this.b;
        };

        this.mul = function(){
            if(this.state === false) return 'Включите калькулятор';
            return this.a * this.b;
        }

    }

    let calculator = new Calculator();

    // прежде чем работать с калькулятором - надо вкл или выкл
//     calculator.read();
//     calculator.on();
//     console.log(calculator.sum());
//     console.log(calculator.mul());
//     calculator.off();
//     console.log(calculator);
}
