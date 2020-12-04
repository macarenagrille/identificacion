//INDENTIFICACIÓN

let user = 'admin';
let password = 1234;
switch (true) {
    case user == 'admin' && password == 1234:
        console.log('¡Bienvenido a nuestro sitio!');
        break;
    case user == 'admin' && password !== 1234:
        console.log('Contraseña incorrecta');
            break;
    case user !== 'admin' && password == 1234:
        console.log('Usuario incorrecto');
        break;
    default:
        console.log('Debe ingresar los datos requeridos')
        break;
}