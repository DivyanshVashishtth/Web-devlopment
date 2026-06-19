// Immediatley Invoked Function Expression (IIFE)

// named IIFE
(function chai() {
    console.log(`DB CONNECTED`);
    
})();

( () => {
    console.log(`DB CONNECTED TWO`);
    
})();

( (name) => {
    console.log(`DB CONNECTED - ${name}`);
    
})("Divyansh")