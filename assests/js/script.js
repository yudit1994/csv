let input = document.getElementById("inputTag");
let imageName = document.getElementById("imageName");

input.addEventListener("change", ()=>{
    let inputImage = document.querySelector("input[type=file]").files[0];
    if(inputImage){
    imageName.innerText = inputImage.name;
    }
})

function fileValidation() {
  var fileInput =
      document.getElementById('inputTag');
   
  var filePath = fileInput.value;

  // Allowing file type
  var allowedExtensions =
   /(\.csv)$/i;
   
  if (!allowedExtensions.exec(filePath)) {
      alert('Invalid file type, upload csv file');
      fileInput.value = '';
      return false;
  }
}