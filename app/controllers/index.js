// Index Controller

export function helloWorld(req, res, next){
    res.setHeader('Content-Type','text/html');
    res.end('Hello World');
}

export function goodbyeWorld(req, res, next){
    res.setHeader('Content-Type','text/html');
    res.end('Goodbye World');
} 