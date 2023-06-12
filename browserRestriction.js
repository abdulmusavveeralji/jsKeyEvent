$(document).ready(function(){
    $("body").on("contextmenu", function(e){
        alert("context menu");
        return false;
    });

    document.oncontextmenu = function() {
        alert("context menu fun");
        return false;
    }

    // $("#youDivSectionId").bind("contextmenu", function(e) {
    //     alert("right click");
    //     return false;
    // });

    $('body').bind('cut copy paste', function (e) {
        alert("cut, copy, paste");
        e.preventDefault();
    });

    $(document).keydown(function(event) {
        console.log('which', event.which);
        $("#pressedKeys").append('<p> key = ' + event.key + ' | Code = ' + event.code + ' | keyCode = ' + event.keyCode +'</p>');
        if (event.ctrlKey == true && (event.which == '118' || event.which == '86')) {
            alert("key down");
            event.preventDefault();
        }

        console.log('key', event.key, 'Code', event.code, 'keyCode', event.keyCode);
        if (event.keyCode == 123) {
            alert("F12");
            return false;
        }

        if (event.ctrlKey && (event.keyCode === 85 || event.keyCode === 83 || event.keyCode ===65 )) {
            alert("Control with U S OR A");
            return false;
        }
        else if (event.ctrlKey && event.shiftKey && event.keyCode === 73) {
            alert("Control shift i");
            return false;
        }
        else if(event.ctrlKey && event.keyCode===80) {
            alert("Control P");
            return false;
        }

        if (event.key === "PrintScreen" || event.code === "PrintScreen") {
            // Print Screen key was pressed
            console.log("Print Screen key was pressed");
        }
    });
});

function abortPrint()
{
    alert("Printing is not allowed");
    document.write();
}