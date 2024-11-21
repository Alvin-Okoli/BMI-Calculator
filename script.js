// trial=()=>{
//  return  document.getElementById('wt3').style.backgroundColor = 'green';
// }

function trial(){
  let weight = document.getElementById('weight').value;
  let height = document.getElementById('height').value;
  let meter = (height*(0.3048*1000))/1000;
  let get = weight/(meter**2)
//console.log(get)
if(get>=1 && get <= 18.5){
  document.getElementById('wt1').style.backgroundColor = 'green';
  console.log('yes');
}else if(get >=18.6 && get <= 24.9){
  document.getElementById('wt2').style.backgroundColor = 'green';
  console.log('no');
}else if(get >=25 && get <= 39.9){
  document.getElementById('wt3').style.backgroundColor = 'green';
  console.log('maybe');
}else if(get >= 40){
  document.getElementById('wt4').style.backgroundColor = 'green';
  console.log('each');
}
};

reset=()=>{
  let ret = document.getElementById('reset');
  ret.addEventListener('click', function(){
    document.getElementById('wt1').style.backgroundColor = 'white';
    document.getElementById('wt2').style.backgroundColor = 'white';
    document.getElementById('wt3').style.backgroundColor = 'white';
    document.getElementById('wt4').style.backgroundColor = 'white';
    document.getElementById('weight').value = ' ';
    let height = document.getElementById('height').value = " ";
  })
}
reset();