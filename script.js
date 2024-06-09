document.addEventListener('DOMContentLoaded', function () {
    var toggles = document.querySelectorAll('.sidebar .btn')

    for (var i = 0; i < toggles.length; i++) {
        toggles[i].addEventListener('click', function (e) {
            e.preventDefault()
            var target = e.target.getAttribute('data-target')

            document.querySelector(target).classList.toggle('active')
        })
    }
})