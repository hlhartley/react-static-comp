/*  
    Kinda a silly example of how to use a helper module
    Let's say you had multiple components that need to calculate 
    the average and standard deviation for a chunk of data. 
    You could define these functions once in a helper module, 
    and then import that into whatever component needs it.
*/

const allCaps = (string) => {
    return string.toUpperCase();
}

module.exports = {
    allCaps,
}