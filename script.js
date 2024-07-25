const templateSource = document.getElementById('shop-now').innerHTML
const template = Handlebars.compile(templateSource);
const context = {
    items: [
        {
            image: "images/oil-goody.JPG",
            name: Goody Vegetable Oil 2L,
            description: 
        }
    ]
};

const compiledHtml = template(context);
const fill = document.getElementById('front-page');
fill.innerHTML = compiledHtml;