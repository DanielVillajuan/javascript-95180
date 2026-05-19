const socket = io()


const inputChat = document.querySelector("#send-chat") 
const buttonChat = document.querySelector("#send-button-chat") 
const chatContainer = document.querySelector("#chat")

const user = {
    username: ''
}

Swal.fire({
    input:'text',
    title: 'Logueate',
    text: 'Necesitas un nombre para identificarte en el chat!',
    allowOutsideClick: false,
    inputValidator: (value) => {
        // validacion de caracteres.
        if(!value) return 'Por favor ingrese un nick!'
    }
}).then((response) => {
    user.username = response.value
    socket.emit('nueva-conexion',user.username)
})

buttonChat.addEventListener("click", () =>{
    socket.emit("mensaje", { username: user.username, mensaje: inputChat.value})
    inputChat.value = ""
})

socket.on("saludo", (dataDesdeElServer) => {
    console.log("El servidor envio esto a travez de socket -> ",dataDesdeElServer)
})

socket.on("chat-logs", (data) => {
    chatContainer.innerHTML = ''
    data.forEach(user=> {
        chatContainer.innerHTML+= `
            <p>${user.username}:</p> <span><b>${user.mensaje}</b></span>
            <hr>
        `
    })
    console.log(data)
})

socket.on("nueva-conexion", (userConectado) => {
     Toastify({
        text: `${userConectado} se ha conectado`,
        duration: 5000,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
})