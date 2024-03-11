function scrollToTarget() {
    var targetElement = document.getElementById("target");
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
}