var trailerDB = new Firebase("https://netflix-trailers.firebaseio.com/trailers");
var newTrailerDB = new Firebase("https://netflix-trailers.firebaseio.com/trailers2");

$(document).ready(function() {
    trailerDB.on("child_added", function(snapshot) {
        var trailerTitle = snapshot.key();
        var trailerLink = snapshot.val();
        $(".container").append("<a>" + trailerTitle + "</a><br>");
        $(".container a:last").addClass("btn btn-default").attr("id", "trailer");
        $(".container #trailer:last").click(function() {
            var trailer = newTrailerDB.push({
                "title": trailerTitle,
                "link": trailerLink,
            });
            
            var trailerID = trailer.key();
            newTrailerDB.child(trailerID).update({
                "id": trailerID,
            });
        });
    });
});
