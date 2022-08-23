jQuery(document).ready(function($) {

    /*
     * Custom collapsible container for Paragraphs
     * @see
     * - bootsub.libraries.yml > collapsible
     */
    $(".collapse-header").click(function() {

        var id = $(this).attr('id');

        $("#collapse-content-" + id).slideToggle(400);
        $("#collapse-icon-" + id).toggleClass("collaps-plus collaps-minus");
        $(this).toggleClass("closed open");

    });

});