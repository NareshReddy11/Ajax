//var message="hello";
//(function () {

//    var message = "good boy";
//})();
//alert(message);

(function () {
    var link = document.getElementById("a")[0];
    link.onclick = function () {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if ((xhr.readyState == 4) && (xhr.status == 200 || xhr.status == 304)) {
                xhr.responseText;
                var body = document.getElementByTagName("body")[0];
                var p = document.createElement("p");
                var pText = document.createTextNode(xhr.responseText);
                p.appendChild(pText);
                body.appendChild(p);

            }
        };
        xhr.open("Get", "files/Ajax.txt", true);
        xhr.send();
        return false;
    };
})();