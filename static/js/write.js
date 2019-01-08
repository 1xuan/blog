/*  ===============================
 *  toggle between Edit and preview
 *  =============================== */
$.fn.editchange = function () {
    var ec = $(this);
    $('.nav-item1', ec).on('click', function() {
        $('.nav-item1').addClass('active');
        $('.nav-item2').removeClass('active');
        $('.edit-area').show();
        $('.preview-aritle').hide();

        return false; // no bubbling
    })

    $('.nav-item2', ec).on('click', function() {
        $('.nav-item2').addClass('active');
        $('.nav-item1').removeClass('active');
        $('.preview-aritle').show();
        $('.edit-area').hide();
        // alert($('textarea').val());    // capture textarea content

        return false; // no bubbling
    })
}


$(function () {
    $('.blog-edit').editchange();
})
