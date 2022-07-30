const imgPreview = document.querySelector(".img-preview");
const removePreviewPadding = document.querySelector("section.second-section.next-section img");
const uploadedPassport = document.querySelector("#uploaded-passport");


// ABILITY OF THE USER TO UPLOAD PASSPORT
function previewPassport(uploadedPassport){
    let reader = new FileReader();
    reader.readAsDataURL(uploadedPassport.files[0]);
    reader.onload = () => {
        imgPreview.setAttribute("src", reader.result);
    }
    // console.log(uploadedPassport.files[0].name);
}

uploadedPassport.addEventListener("change", () => {
    previewPassport(uploadedPassport);

    // removing the padding in the img preview
    removePreviewPadding.style.padding = '0';
});
