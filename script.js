function playMovie(videoSrc) {
    var modal = document.getElementById('video-modal');
    var videoPlayer = document.getElementById('video-player');

    videoPlayer.src = videoSrc;
    modal.style.display = "flex";
}

function closeModal() {
    var modal = document.getElementById('video-modal');
    var videoPlayer = document.getElementById('video-player');

    videoPlayer.src = "";
    modal.style.display = "none";
}

// Cerrar el modal si el usuario hace clic fuera del contenido del modal
window.onclick = function(event) {
    var modal = document.getElementById('video-modal');
    if (event.target == modal) {
        closeModal();
    }
}
