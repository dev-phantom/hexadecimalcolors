let body, changer,hexavalue;
changer = document.getElementById('changer')
body = document.getElementsByTagName('body')[0];
hexavalue = [1,2,3,4,5,6,7,8,9,0,'a','b','c','d','e','f'];
changer.onclick = () => {
    let demo = document.getElementById('demo');
sixrandomcharacter();
let final  = '#' + (sixrandomcharacter(hexavalue, 6))
body.style.backgroundColor = final;
demo.innerHTML = final;

}
 let sixrandomcharacter = (hexavalue, num) =>{
    let result =[];
    for (let i = 0; i < num; i++) {
        result.push(hexavalue[Math.floor(Math.random()*hexavalue.length)]);
    }
    return result.join('');
}