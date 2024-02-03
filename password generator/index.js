const upperCaseSet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseSet="abcdefghijklmnopqrstuvwxyz";
const symbolsSet="!@#$%^&*()|?";
const numbersSet="1234567890";

const passBox=document.getElementById("pass-box");
const totalChar=document.getElementById("total-char");
const upperCase=document.getElementById("upper-case");
const lowerCase=document.getElementById("lower-case");
const symbols=document.getElementById("symbol");
const numbers=document.getElementById("number");

const getRandom = (dataSet)=>
{
  return dataSet[Math.floor(Math.random() *dataSet.length)]
}
const generatePassword = (password="")=>
{
  if( upperCase.checked){
  password+= getRandom(upperCaseSet);
  }
  if(lowerCase.checked)
  {
    password+= getRandom(lowerCaseSet);
  }
  if(symbols.checked)
  {
    password+= getRandom(symbolsSet);
  }
  if(numbers.checked)
  {
    password+= getRandom(numbersSet);
  }
  if(password.length < totalChar.value)
  {
    return generatePassword(password)
  }
  passBox.innerText=truncateString(password,totalChar.value);
}
generatePassword();
document.getElementById('btn').addEventListener("click" ,function()
{
  generatePassword();
})
function truncateString(str,num)
{
  if(str.length > num)
  {
  let subStr =str.substring(0, num);
return subStr;
  }
else
{
  return str;

}
}

