/*  ===============================
 *  toggle between Edit and preview
 *  =============================== */


// serialize form as a array of object
var serializeForm = function ( Jform ) {
    var formArray = Jform.map( function () {
        return $(this).serializeArray();
    });
    return formArray;
};

$.fn.editchange = function () {
    var ec = $(this);

    // show editor tab
    $('.nav-item1', ec).on('click', function() {
        $('.nav-item1').addClass('active');
        $('.nav-item2').removeClass('active');
        $('.edit-area').show();
        $('.preview-aritle').hide();

        return false; // no bubbling
    });

    // show preview tab
    $('.nav-item2', ec).on('click', function() {
        $('.nav-item2').addClass('active');
        $('.nav-item1').removeClass('active');
        $('.preview-aritle').show();
        $('.edit-area').hide();

        // get markdown content of textarea
        +function ( value ) {
            $.ajax ({
            method: "POST",
            url: '/markup/',
            data: value,
            success: function( responseTxt ) {
                $('.preview-aritle').html(responseTxt);
            }
        })
        } ( $('textarea').serialize() );

        return false; // no bubbling
    });

    // post data to backend and show relative modal
    $('.submit-article-button', $('.editchange')).on('click', function () {
        var data_array = serializeForm($( 'form' ));
        $.ajax ({
            method: "POST",
            url: '/article_save/',
            data: data_array,
            statusCode: {
                500: function () {
                    alert("This is a bad request")
                }
            },
            success: function( responseTxt ) {
                // if success show the modal of success
                if (responseTxt == 'Success') {
                    $('#myModal .modal-title').text( responseTxt ).css('color', 'green');
                    $('#myModal .modal-body').text( "Your article is successfully submitted" );
                } else {
                    $('#myModal .modal-title').text( responseTxt ).css('color', 'red');
                    $('#myModal .modal-body').text( "you have none of article or category" );
                }
                $('.showMymodal').click();
            }
        })

        /* =============================
         * this can also submit forms
         * ============================= */
        // $("form").submit(function (evt) {
        //     evt.preventDefault();    // prevent form submit event
        //     var data_array = $("form").map(function () {
        //         return $(this).serializeArray();
        //     });
        //     $.ajax({
        //         method: "POST",
        //         url:'/test',
        //         data:data_array,
        //         success:function(html){
        //             // alert(html);
        //         }
        //     });
        // }).submit();
    })
};


$(function () {
    $('.blog-edit').editchange();
});
