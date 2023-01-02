console.log("========= start plugin ============");

setInterval(() => {
   console.log("BUSCA MONARK"); 
   const elements = document.querySelectorAll('[data-testid=cellInnerDiv]');
   if(elements) {
    elements.forEach((item) => {
        const toText = item.outerHTML;
        if(toText.search("/monark") !== -1) {
            console.log("Credo, tem post do monark aqui");
            
            const div = document.createElement("div");
            div.style.width = "100%";
            div.style.height = "420px";
            div.style.padding = "12px 16px";
            
            const text = document.createElement("h1");
            text.innerText = "Um tweet do monark foi substituido por um gatinho fofo :)";

            const image = document.createElement("img");
            image.src = "https://placekitten.com/300/300";
            
            div.appendChild(text);
            div.appendChild(image);
            item.replaceChild(div, item.childNodes[0]);
        }
    });
    }
}, 2000);
