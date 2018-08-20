document.getElementById('getQuote').addEventListener('click',loadQuotes)


function loadQuotes(){




const xhr = new XMLHttpRequest();

xhr.open('GET','https://talaikis.com/api/quotes/random/',true)

xhr.onload = function(){

  if(this.status === 200){

    const response =JSON.parse(this.responseText)

    console.log(response)


    let output = `<p><q>${response.quote}</q></p>

    <br>

    <cite>-- ${response.author}</cite>

    <br>

    <a href = "" id = "btn"><img src="https://simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter" /></a>

    `

    document.querySelector('.quote').innerHTML = output


    document.querySelector('#btn').addEventListener('click',function(){
      window.open(`https://twitter.com/intent/tweet?text=${response.quote} --${response.author}`)
    })

  }



}




xhr.send()

}
