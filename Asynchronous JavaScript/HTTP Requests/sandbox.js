/* const getTodos = (resource) =>{

    return new Promise((resolve, reject) =>{

        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () =>{
            //console.log(request, request.readyState);
        
            if(request.readyState === 4 && request.status === 200){
    
                const data = JSON.parse(request.responseText);
                resolve(data);
        
            } else if(request.readyState === 4){
                reject('error getting resource');
                
            }
        });
        
        request.open('GET', resource);
        request.send();
    });

};

getTodos('todos/luigi.json').then(data => {
    console.log('promise 1 resolved:', data);
    return getTodos('todos/mario.json');
}).then(data =>{
    console.log('Promisse 2 resolved', data);
    return getTodos('todos/shaun.json');
}).then(data =>{
    console.log('Promisse 3 resolved', data);
}).catch(err => {
    console.log('promise rejected', err);
}); */

// promise exemple

/* const getSomething = () => {
    return new Promise((resolve, reject) =>{
        //resolve('some data');
        reject('some error');
    });
}; */

/* getSomething().then((data) =>{
    console.log(data);

}, (err) => {
    console.log(err);
}) */

/* getSomething().then(data =>{
    console.log(data);

}).catch(err => {
    console.log(err);
}) */






// fetch api

/* fetch('todos/luigi.json').then((response) =>{
    console.log('resolved', response);
    return response.json();

}).then(data =>{
    console.log('Promisse 1 resolved: ', data);
    
}).catch((err) =>{
    console.log('rejected', err);

}); */

//async await

const getTodos = async () =>{

    const response = await fetch('todos/luigi.json');

    if(response.status !== 200){
        throw new Error('Can not fetch the data!');
    }

    const data = await response.json();
    
    return data;

};

getTodos().then(data =>{
    console.log('Promisse 1:', data);
    return getTodos('todos/mario.json');

}).then(data =>{
    console.log('Promisse 2:', data);
    return getTodos('todos/shaun.json');

}).then(data =>{
    console.log('Promisse 3:', data);
}).catch(err => {
    console.log('rejected:', err.message);
});