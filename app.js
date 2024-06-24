// function validationCharacters(text) {
//   const regex = /^[a-z\s]+$/;
//   return regex.test(text);
// }

// const encrypt = () => {
//   let input = document.getElementById("textarea").value;
//   let message = document.getElementById("message_warning");
//   let image = document.getElementById("image");
//   let paraghrap = document.getElementById("paraghrap");
//   let conditionsMessage = document.getElementById("conditions_message");
//   let textArea = document.getElementById("textarea");
//   let text = input.toString();

//   if (!validationCharacters(input)) {
//     conditionsMessage.style.color = "red";
//     setTimeout(() => {
//       conditionsMessage.style.color = "gray";
//       textArea.value = "";
//     }, 4000);
//     return;
//   } else {
//     let encryptText = text
//       .replace(/e/gi, "enter")
//       .replace(/i/gi, "imes")
//       .replace(/a/gi, "ai")
//       .replace(/o/gi, "ober")
//       .replace(/u/gi, "ufat");

//     if (text.length > 0) {
//       text = encryptText;
//       message.textContent = "Mensaje cifrado con éxito";
//       paraghrap.textContent = "";
//       image.src = "./assets/candado.jpg";

//       Mostrar el popup con el texto encriptado
//       let modal = document.getElementById("modal");
//       let span = document.getElementsByClassName("close")[0];
//       let encryptedTextElement = document.getElementById("encryptedText");
//       let copyBtn = document.getElementById("copyBtn");
//       let textArea = document.getElementById("textarea");

//       function showPopUp() {
//         setTimeout(() => {
//           encryptedTextElement.textContent = encryptText;
//           modal.style.display = "block";
//           textArea.value = "";
//         }, 3000);
//       }
//       showPopUp();

//       Cuando el usuario haga clic en la 'x', cerrar el popup
//       span.onclick = function () {
//         modal.style.display = "none";
//         message.textContent = "Ningún mensaje fue encontrado";
//         image.src = "./assets/muñeco.png";
//       };

//       Cuando el usuario haga clic fuera del popup, cerrarlo
//       window.onclick = function (event) {
//         if (event.target == modal) {
//           modal.style.display = "none";
//           message.textContent = "Ningún mensaje fue encontrado";
//           image.src = "./assets/muñeco.png";
//         }
//       };

//       Copiar texto al portapapeles
//       copyBtn.onclick = function () {
//         navigator.clipboard.writeText(encryptText).then(
//           function () {
//             copyBtn.onclick = function () {
//               modal.style.display = "none";
//               message.textContent = "Ningún mensaje fue encontrado";
//               image.src = "./assets/muñeco.png";
//             };
//           },
//           function (err) {
//             console.error("Error al copiar el texto: ", err);
//           }
//         );
//       };
//     } else {
//       alert("Debes ingresar un texto");
//     }
//   }
// };

// function desEncrypt() {
//   let input = document.getElementById("textarea").value;
//   let message = document.getElementById("message_warning");
//   let image = document.getElementById("image");
//   let paraghrap = document.getElementById("paraghrap");
//   let conditionsMessage = document.getElementById("conditions_message");
//   let textArea = document.getElementById("textarea");
//   let text = input.toString();

//   if (!validationCharacters(input)) {
//     conditionsMessage.style.color = "red";
//     setTimeout(() => {
//       conditionsMessage.style.color = "gray";
//       textArea.value = "";
//     }, 4000);
//     return;
//   } else {
//     let encryptText = text
//       .replace(/ufat/gi, "u")
//       .replace(/ober/gi, "o")
//       .replace(/ai/gi, "a")
//       .replace(/imes/gi, "i")
//       .replace(/enter/gi, "e");

//     if (text.length > 0) {
//       text = encryptText;
//       message.textContent = "Mensaje descrifrado con éxito";
//       paraghrap.textContent = "";
//       image.src = "./assets/muñeco.png";

//       Mostrar el popup con el texto encriptado
//       let modal = document.getElementById("modal");
//       let span = document.getElementsByClassName("close")[0];
//       let encryptedTextElement = document.getElementById("encryptedText");
//       let copyBtn = document.getElementById("copyBtn");
//       let textArea = document.getElementById("textarea");

//       function showPopUp() {
//         setTimeout(() => {
//           encryptedTextElement.textContent = encryptText;
//           modal.style.display = "block";
//           textArea.value = "";
//         }, 3000);
//       }
//       showPopUp();

//       Cuando el usuario haga clic en la 'x', cerrar el popup
//       span.onclick = function () {
//         modal.style.display = "none";
//         message.textContent = "Ningún mensaje fue encontrado";
//         image.src = "./assets/muñeco.png";
//       };

//       Cuando el usuario haga clic fuera del popup, cerrarlo
//       window.onclick = function (event) {
//         if (event.target == modal) {
//           modal.style.display = "none";
//           message.textContent = "Ningún mensaje fue encontrado";
//           image.src = "./assets/muñeco.png";
//         }
//       };

//       Copiar texto al portapapeles
//       copyBtn.onclick = function () {
//         navigator.clipboard.writeText(encryptText).then(
//           function () {
//             copyBtn.onclick = function () {
//               modal.style.display = "none";
//               message.textContent = "Ningún mensaje fue encontrado";
//               image.src = "./assets/muñeco.png";
//             };
//           },
//           function (err) {
//             console.error("Error al copiar el texto: ", err);
//           }
//         );
//       };
//     } else {
//       alert("Debes ingresar un texto");
//     }
//   }
// }

function validationCharacters(text) {
  const regex = /^[a-z\s]+$/;
  return regex.test(text);
}

function processText(action) {
  let input = document.getElementById("textarea").value;
  let message = document.getElementById("message_warning");
  let image = document.getElementById("image");
  let paraghrap = document.getElementById("paraghrap");
  let conditionsMessage = document.getElementById("conditions_message");
  let textArea = document.getElementById("textarea");
  let text = input.toString();

  if (!validationCharacters(input)) {
    conditionsMessage.style.color = "red";
    setTimeout(() => {
      conditionsMessage.style.color = "gray";
      textArea.value = "";
    }, 4000);
    return;
  } else {

    let processedText;
    if (action === "encrypt") {
      processedText = text
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    } else if (action === "decrypt") {
      processedText = text
        .replace(/ufat/gi, "u")
        .replace(/ober/gi, "o")
        .replace(/ai/gi, "a")
        .replace(/imes/gi, "i")
        .replace(/enter/gi, "e");
    }

    if (text.length > 0) {
      message.textContent =
        action === "encrypt"
          ? "Mensaje cifrado con éxito"
          : "Mensaje descifrado con éxito";
      paraghrap.textContent = "";
      image.src =
        action === "encrypt" ? "./assets/candado.jpg" : "./assets/candado_abierto.png";

      // Mostrar el modal con el texto procesado
      let modal = document.getElementById("modal");
      let span = document.getElementsByClassName("close")[0];
      let encryptedTextElement = document.getElementById("encryptedText");
      let copyBtn = document.getElementById("copyBtn");

      function showPopUp() {
        setTimeout(() => {
          encryptedTextElement.textContent = processedText;
          modal.style.display = "block";
          textArea.value = "";
        }, 3000);
      }
      showPopUp();

      // Cuando el usuario haga clic en la 'x', cerrar el popup
      span.onclick = function () {
        modal.style.display = "none";
        message.textContent = "Ningún mensaje fue encontrado";
        image.src = "./assets/muñeco.png";
      };

      // Cuando el usuario haga clic fuera del popup, cerrarlo
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
          message.textContent = "Ningún mensaje fue encontrado";
          image.src = "./assets/muñeco.png";
        }
      };

      // Copiar texto al portapapeles
      copyBtn.onclick = function () {
        navigator.clipboard.writeText(processedText).then(
          function () {
            modal.style.display = "none";
            message.textContent = "Ningún mensaje fue encontrado";
            image.src = "./assets/muñeco.png";
          },
          function (err) {
            console.error("Error al copiar el texto: ", err);
          }
        );
      };
    } else {
      alert("Debes ingresar un texto");
    }
  }
}

const encrypt = () => processText("encrypt");
const decrypt = () => processText("decrypt");
