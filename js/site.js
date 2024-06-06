document.getElementById("Privacy-Page").addEventListener("click", function () {
    let url = new URL(window.location.href);
    url.pathname = '/Privacy';
    window.location.href = url;
});

document.getElementById("Home-Page").addEventListener("click", function () {
    let url = new URL(window.location.href);
    url.pathname = '';
    window.location.href = url;
});

document.getElementById("Messaging-Page").addEventListener("click", function () {
    window.location.href = '/Messaging/Login';
});

function LoginCheck() {
    var username = document.getElementById("messageUsername").value;
    var password = document.getElementById("messagePassword").value;
    if (username.trim() != "" && password.trim() != "") {
        event.preventDefault();
        $.ajax({
            url: "../Messaging/LoginCheck",
            type: "POST",
            data: {
                username: username,
                password: password
            },
            success: function (response) {
                if (!response.correct) {
                    document.getElementById("alertLogin").innerHTML = response.message;
                    document.getElementById("alertLogin").style.display = "block";
                }
                else {
                    window.location.href = response.url;
                }
            },
            error: function (request) {
                alert(request.responseText);
            }
        });
    }
}