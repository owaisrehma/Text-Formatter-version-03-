let txt = document.querySelector('#input-box')
const clr = document.querySelector('#Clear-button')

document.getElementsByName('formate-option').forEach(function(e,index){
    e.addEventListener('click',()=>{
        formateTxt(index);
    })
})

function formateTxt (index){
    switch(index){
        case 0: txt.value = txt.value.toUpperCase(); break;
        case 1: txt.value = txt.value.toLowerCase(); break;
        case 2: txt.value = CapitalizeSentence(txt.value); break;
        case 3: txt.value = CapitalizeWord(txt.value); break;
        case 4: txt.value = RemoveNumber(txt.value); break;
        case 5: txt.value = RemovePanctuation(txt.value); break;
    }
}

function CapitalizeSentence(str){
    let newString = removeExtraSpaces(str);
    let splitSentence = newString.split(". ");
    console.log(splitSentence);

    for(let i=0; i<splitSentence.length; i++){
        splitSentence[i] = splitSentence[i] [0].toUpperCase()+splitSentence[i].slice(1);
    }
        console.log(splitSentence);
        splitSentence = splitSentence.join(". ");
        return splitSentence;
}

function CapitalizeWord(str){
    let newString = removeExtraSpaces(str);
    let splitSentence = newString.split(" ");
    console.log(splitSentence);

    for(let i=0; i<splitSentence.length; i++){
        splitSentence[i] = splitSentence[i] [0].toUpperCase()+splitSentence[i].slice(1);
    }
    console.log(splitSentence);
    splitSentence = splitSentence.join(" ");
    return splitSentence;
}

function RemoveNumber(str){
    return str.replace (/[0-9]/g, '');
}

function RemovePanctuation(str){
    let regex = /[!"#$%'&()*+,-./:;<=>?@[\]^_'{|}~]/g;
    return str.replace(regex, '');
}

clr.addEventListener('click', ()=>{
    txt.value = " ";
})






function removeExtraSpaces(str){
    return str.replace(/\s+/g,' ').trim();
}

