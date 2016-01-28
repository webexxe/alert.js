/**
 * Alert-JS Created by Tekin on 26.01.2016.
 */

/**
 * @param mode      / string    -   default = "full"                -   "full", "mini"
 * @param message   / string    -   default = "Message Not Found!"  -
 * @param status    / string    -   default = "info"                -   "info", "error", "success", "alert"
 * @param close     / number    -   default = 1                     -   0 = close function, 1 = close button, 2 = close button and mask
 * @param close     / number    -   default = 1                     -   0 = close function, 1 = close button, 300 = auto close milisecond
 * @param id        / number    -   default = Random 0 - 10         -
 */

$.alertJS = function (mode, message, status, close, id) {

    // VARIABLE CONTROLS
    mode = mode == "full" || mode == "mini" ? mode : "full";
    message = message == undefined || message == "" ? "Message Not Found!" : message;
    status = status == undefined || status == "" ? "info" : status;
    id = "alertJS-" + (id == undefined ? Math.round(Math.random() * 100) : id);

    //ALERT BOX CONTROL
    if ($("#" + id).length == 0) {

        if (mode == "full") {
            // MODE/FULL VARIABLE CONTROLS
            close = close == 0 || close == 1 ? close : 2;

            //ALERT BOX INSERT
            $("body").append("<div id='" + id + "' class='alertJS-mask'><div class='alertJS-content " + status + "'><div class='alertJS-message'>" + message + "</div></div></div>");
            var idSelector = $("#" + id);

            //ALERT BOX SHOW
            setTimeout(function () {
                idSelector.fadeIn();
                idSelector.children(".alertJS-content").css("margin-top", "-" + (idSelector.children(".alertJS-content").outerHeight() / 2) + "px");
            }, 100);

            //CLOSE and NOT CLOSE BUTTON INSERT
            if (close == 1 || close == 2) {
                idSelector.children(".alertJS-content").prepend("<i class='close fa fa-times'></i>");
                if (close == 2) {
                    idSelector.prepend("<div class='close'></div>")
                }

                //CLOSE BUTTON ACTION
                idSelector.find(".close").on("click", function () {
                    idSelector.fadeOut(200);

                    setTimeout(function () {
                        idSelector.remove();
                    }, 300);
                });
            } else if (close == 0) {
                idSelector.prepend("<div class='notClose'></div>");

                //NOT CLOSE BUTTON ACTION
                idSelector.children(".notClose").on("click", function () {
                    var thiss = $(this);
                    thiss.siblings(".alertJS-content").addClass("jello animated");

                    setTimeout(function () {
                        thiss.siblings(".alertJS-content").removeClass("jello animated");
                    }, 1000);

                });
            }

        } else if (mode == "mini") {
            // MODE/MINI VARIABLE CONTROLS
            close = close == 0 || close == 1 ? close : close >= 200 ? close : 0;

            //ALERT BOX INSERT
            $("body").append("<div id='" + id + "' class='alertJS-mini'><div class='alertJS-content " + status + "'><div class='alertJS-message'>" + message + "</div></div></div>");
            var idSelector = $("#" + id);

            //ALERT BOX SHOW
            setTimeout(function () {
                idSelector.fadeIn();
            }, 100);

            //CLOSE and NOT CLOSE BUTTON INSERT
            if (close == 1) {
                idSelector.children(".alertJS-content").prepend("<i class='close fa fa-times'></i>");

                //CLOSE BUTTON ACTION
                idSelector.find(".close").on("click", function () {
                    idSelector.fadeOut(200);

                    setTimeout(function () {
                        idSelector.remove();
                    }, 300);
                });
            } else if (close >= 200) {

                //AUTO CLOSE
                setTimeout(function () {
                    idSelector.fadeOut(200);

                    setTimeout(function () {
                        idSelector.remove();
                    }, 300);
                }, close)
            }
        }
    }

};

/**
 * @param mode      / string    -   default = "full"                -   "full", "mini"
 * @param message   / string    -   default = "Message Not Found!"  -
 * @param id        / number    -   default = Random 0 - 10         -
 * @param loadFigur / string    -   default = "refresh"             -   "spinner", "circle-o-notch", "refresh", "cog"
 * @param status    / string    -   default = "info"                -   "info", "error", "success", "alert"
 */

$.alertJSLoad = function (mode, message, id, loadFigur, status) {

    // VARIABLE CONTROLS
    mode = mode == "full" || mode == "mini" ? mode : "full";
    message = message == undefined || message == "" ? "Message Not Found!" : message;
    loadFigur = loadFigur == undefined ? "<i class='fa fa-refresh fa-spin'></i>" : "<i class='fa fa-" + loadFigur + " fa-spin'></i>";
    message = loadFigur + message;

    // VARIABLE ROUTING
    $.alertJS(mode, message, status, 0, id);
};

/**
 * @param id        / number    -   target id number
 */

$.alertJSX = function (id) {
    id = "alertJS-" + id;
    $("#" + id).fadeOut(200);
    setTimeout(function () {
        $("#" + id).remove();
    }, 300);
};