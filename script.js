function download() {
    var input = document.getElementById("code");
    var json = $.getJSON('codes.json').done(function () {
        var codes = json.responseJSON
        console.log(codes)
        console.log(codes.beta + codes.title)
        for (var i = 0; i < codes.beta.length; i++) {
            var a = codes.beta[i]
            if (a.includes(input.value)) {
                window.location.href = "/Prods/" + codes.title[i++] + ".mp3"
            }
        }
    });
}