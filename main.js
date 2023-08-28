console.log('main.js is working')
const populate=async (value,currency,targetCurrency) => { 
    let mystr=""
    url="https://api.currencyapi.com/v3/latest?apikey=cur_live_TcyoGra5DgvnCuuk4cMvhtOdvfU1coT4s2r0mTiv&base_currency="+currency
    let response=await fetch(url)
    let rjson=await response.json()
    document.querySelector(".output").style.display='block'
    const targetCurrencyValue = rjson['data'][targetCurrency]["value"];
    const equivalentValue = Math.round(targetCurrencyValue * value);
   
    mystr+= `
    <tr>
        <td>${targetCurrency}</td>
        <td>${rjson['data'][targetCurrency]["code"]}</td>
        <td>${equivalentValue}</td>
    </tr>`;
    
    const tablebody=document.querySelector('tbody')
tablebody.innerHTML=mystr

}
const btn=document.querySelector('.btn')
btn.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log('button is clicked')
    const value=parseInt(document.querySelector("input[name='quantity']").value)
    const currency=document.querySelector("select[name='currency']").value
    const targetCurrency = document.querySelector("select[name='targetCurrency']").value;
    populate(value,currency,targetCurrency)
})

