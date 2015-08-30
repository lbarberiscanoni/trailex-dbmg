var trailerDB = new Firebase("https://netflix-trailers.firebaseio.com/trailers");

$(document).ready(function() {
    trailerDB.on("child_added", function(snapshot) {
        var trailerTitle = snapshot.key();
        var trailerLink = snapshot.val();
        $(".container").append("<a>" + trailerTitle + "</a><br>");
        $(".container a:last").addClass("btn btn-default").attr("id", "trailer");
        $(".container #trailer:last").click(function() {
            var thisID = $(this).text();
            $("<a class='btn btn-default' id='watch'>" + "Watch" + "</a>").insertAfter(this);
            $("<a class='btn btn-default' id='change'>" + "Change" + "</a>").insertAfter(this);
            $("<div class='col-md-4'><input type='text' class='form-control' placeholder='Enter new URL' id='newURL'></input></div>").insertAfter(this);
            $("#watch").attr("href", trailerLink).attr("target", "blank");
            $("#change").click(function() {
                var newURL = $("#newURL").val();
                trailerDB.child(trailerTitle).push({
                    trailerTitle: newURL,
                });
                window.location.reload();
            });
        });
    });
});
