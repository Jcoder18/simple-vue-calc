const ReadMore = class 
{
    constructor(
        {
        element,
        index=0,
        length=3,
        mask='.'
        
    })
    {
        let el = document.querySelector(element)
        let extracted_string = el.innerText;  
        let sliced_string = extracted_string.slice(0,index)
        let repeated_Mask = ''
       
        for(let i=1;i<=length;i++)
        {
            repeated_Mask+=mask
        }
         
        el.innerHTML = `${sliced_string+repeated_Mask}<a href="#" id="readMore">ReadMore</a>
        <span style="display:none">${extracted_string}</span>`
        let read = document.querySelector(element+' #readMore')
        read.addEventListener('click',()=>
        {
            el.innerHTML =  el.children[el.childElementCount-1].innerText
        })
    }
}