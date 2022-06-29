"use strict";

//Récupérer les produits 
getProducts();

//Création  des articles
createProducts();

async function getProducts() {
    let products = await fetch('http://127.0.0.1:3000/api/products');
    console.log("Les produits sont bien été récupérés")
    return products.json();
}

async function createProducts() {
    let displayProduct = await getProducts().then((product) => {
        for (let i = 0; i < product.length; i++) {

            //insertion de l'élement "a"
            let productLink = document.createElement("a");
            document.querySelector(".items").appendChild(productLink);
            productLink.href = `product.html?id=${product[i]._id}`;

            //insertion de l'article
            let productArticle = document.createElement("article");
            productLink.appendChild(productArticle);

            //insertion de l'image
            let productImage = document.createElement("img");
            productArticle.appendChild(productImage);
            productImage.src = product[i].imageUrl;
            productImage.alt = product[i].altTxt;

            //insertion du nom de l'article
            let productName = document.createElement("h3");
            productArticle.appendChild(productName);
            productName.classList.add("productName");
            productImage.alt = product[i].name;

            //insertion de la description
            let productDescription = document.createElement("p");
            productArticle.appendChild(productDescription);
            productDescription.classList.add("productName");
            productDescription.innerHTML = product[i].description;

        }

    });

    console.log("les produits ont été bien crées !!")

}