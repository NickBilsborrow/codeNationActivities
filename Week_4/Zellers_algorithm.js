let D = 2;
let M = 2;
let y = 1998;
if(M < 3){
    M = M + 12;
    y = y - 1;
}
let F = Math.floor(y / 100);
let L = y - 100 * F;
let S = Math.floor(2.6*M - 5.39) + Math.floor(L / 4) + Math.floor(F / 4) + D + L -2*F
let X = S - (7*Math.floor(S / 7));
console.log(X)