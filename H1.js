// Console data input handling

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Ask for user name and age

rl.question('¿Cual es tu nombre?:', (name) => {

    // function to repeatedly ask for age
    function question() {

        rl.question(`¿Que edad tienes ${name}?: `, (age) => {

        // age verification


        const agenumber = Number(age);

        if (isNaN(agenumber) || agenumber <=0 ) {

            console.log('Edad no valida. Por favor ingrese un numero valido');

            // Ask again for age

            question();

        } else if (agenumber >= 18) {

            console.log(`
                Hola ${name}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`
            );

            rl.close();


        } else {

            console.log(`
                Hola ${name}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`
            );

            rl.close();
        }
    });
}

question();
});