// TEXT
var mystring : string = 'abc';
mystring = 'abc,123,4576      ';

// console.log('char at ',mystring[0]);
// console.log('char at ',mystring.charCodeAt(0));
// console.log('char at ',mystring.replace('abc','ABC'));
// console.log('char at ',mystring.split(','));
// console.log('char at ',mystring.codePointAt(0));
// console.log('char at ',mystring.startsWith('abc'));
// console.log('char at ',mystring.substr(2));
// console.log('char at ',mystring.substr(2,2));
// console.log('char at ',mystring.substring(2,3));
// console.log('char at ',mystring.toUpperCase());
// console.log('char at ',mystring.trim());

var mynumber : number = 1; // - , + , undefined 

var mybool : boolean = true ;// false, true , undefined

var myarray : string[] = [];
myarray.push('1'); // 0
myarray.push('2'); // 1
myarray.push('true'); // 2
// console.log(myarray[0]);
console.log(myarray);

console.log(myarray.reverse());
var myarray2 =myarray.reverse().concat([]);
//myarray.shift();
myarray2.shift();
console.log('myarray ',myarray);
console.log('myarray ', myarray2);

var myconcat = myarray.concat([]);
myarray.shift();
console.log('concat',myconcat);


var mynumber1 = 1;
var mynumber2: any = 2;

mynumber1 = <number>mynumber2;
mynumber1 = mynumber2 as number;

var myobj: {number1:number,string1:string} = <{number1:number,string1:string}>{};

var myobj1: {number1:number,string1:string} = {} as {number1:number,string1:string};

// var head : {haircolor:string,eyescolor:string,nose:boolean} = {} as {haircolor:string,eyescolor:string,nose:boolean}; 
// head.eyescolor ='black';
// head.haircolor ='black';
// head.nose =true;

// var heads ={
// haircolor:'',
// nose:'',
// };

interface myhead {
    haircolor:string,
    nose:boolean,
}

var head:myhead = <myhead>{};
head.haircolor ='black';
head.nose = true;

console.log('my head',head);





var mytruple :[string,number]= ['',1];

enum myenum {
    Newspaper = 1,
    Newsletter = 5,
    Magazine = 5,
    Book = 10
}
enum myenum2 {
    Newspaper = 'Newspaper',
    Newsletter = 'Newsletter',
    Magazine = 'Magazine',
    Book = 'Book',
}

var myuniion : number|string|boolean =true;

var myany : any =[];


var myvoid2 :void =undefined;

function mvoid ():void{

}

var myvoid3 : void = mvoid();

myvoid3;
