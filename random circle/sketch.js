function setup() {
  createCanvas(400, 400);
}

let ran = (lower, upper) => (Math.floor(Math.random()*(upper-lower+1)+lower));

let intialise = (n) => {    //set value of array with size n to 0
  let arr=[];
  for(let i=0;i<n;i++){
    arr.push(0);
  }
  return arr;
}

function intialiseAcc(n){    //starting from 0 to n-1, with size n
  let arr=[];
  //arr=new Array();
  for(let i=0;i<n;i++){
    arr.push(i);
  }
  return arr;
}

//console.table(intialise(3));
/*for(let i=0;i<=30;i++){
  console.log(ran(2,5));
}*/

function ranNoRepeat(arr){    //random without repeated ranged in a to b
  let flag=intialise(10);    //if flag is used, then flag[n]=1, 1 is occupied
  let n=ran(0, 10);
  arr=intialiseAcc(10);
  for(let i=0;i<arr.length;i++){
    while(flag[n]===1){
      n=ran(0, 10);
    }
    arr[n]=i;
    flag[n]=1;
  }
  return arr; 
}

let a;
a=ranNoRepeat(a);
console.table(a);

function draw() {
  background(220);
  for(let i=0;i<10;i++){
    ellipse(i*100, i*100, 100, 100);
  }
}
