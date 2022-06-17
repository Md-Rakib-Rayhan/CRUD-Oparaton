let btn = document.getElementById("add_btn");
let title = btn.previousElementSibling; //getElementById("text_title"); same
let list = document.querySelector("ul");
let li0 = document.querySelectorAll("li")[0];

btn.addEventListener('click', function(){
    let data = title.value;

    let tag = document.createElement("li");
    tag.classList.add("item");
    tag.innerHTML = `<h1>${data}</h1>
    <button class="edit" onclick="edit(this)">edit</button>
    <button class="remove" onclick="removeIt(this)">remove</button>`; // remove korar jonno jonno addEventLisner use kora jabe na cuz innerHTML pore create hoise so aita js select korbe na

    list.appendChild(tag);


    // list.querySelector("h3").remove(); // kiso na thakle je massage ta asto - seta remove
    // same but it will not show error in console everytimg i click
    if(list.children[0].tagName == 'H3'){ // this condition i checked in console
        list.children[0].remove();
    }

})

//when noting in frist show this masssage
let tagH1 = document.createElement("h3");
    tagH1.innerText = "Nothing is here, add a new data";
    tagH1.style.textAlign = "center";
    list.appendChild(tagH1);

// remove & last er ta remove kore dile abar same massage show hobe
function removeIt(e){
    e.parentElement.remove(); // item onnek golo pore create hobe__ niddisto ta select kore delete korar jonno avabe deya hoise

    if(list.children.length <= 0){
        let tagH1 = document.createElement("h3");
        tagH1.innerText = "Nothing is here, add a new data";
        tagH1.style.textAlign = "center";
        list.appendChild(tagH1);
    }
}

function edit(curElem){
    
    if(curElem.textContent == "edit"){
        curElem.innerText = "Done";
        
        let preDataH1 = curElem.previousElementSibling;
        let inputTag = document.createElement("input");
        inputTag.type="text";
        inputTag.maxLength = "20";
        inputTag.style.flexGrow = "1";
        inputTag.value = preDataH1.innerText;
        curElem.parentElement.replaceChild(inputTag, preDataH1);
    
    }else{
        curElem.innerText = "edit";
        // console.log(curElem.previousElementSibling.value); sora sori inputTag use use kora jabe na cur aita create hoise select hoyni
        let newData = curElem.previousElementSibling.value;
        let newtag = document.createElement("h1");
        newtag.innerText = newData;

        curElem.parentElement.replaceChild(newtag, curElem.previousElementSibling);

    }
}