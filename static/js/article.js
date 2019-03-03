$( function () {

    // change format from text to html for displaying markdown
    // ==========================================================

    +function () {
        var article_md = $('.article-md');
        article_md.html(article_md.text());
        article_md.removeClass('article-hide')
    }();
});