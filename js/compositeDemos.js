jQuery.noConflict();
jQuery.fn.exists = function () { return this.length > 0; }
jQuery(document).ready(function ($) {
    //Demos Nav
    /*$(".entry-listing-parent").live("click", function () {
        $(".entry-listing-children:visible").each(function () {
            $(this).toggle("blind", 500);
        });
        $(this).parent().children(".entry-listing-children").toggle("blind", 500);
    });*/
    $(".entry-listing-link").live("click", function () {
        var newDemo = $(this).attr("rel");
        $(".demo-frame").attr("src", newDemo);
    });
    $(".entry-listing-nav").accordion({
        collapsible: true,
        active: false
    });
    //General Functions
    jQuery('.watermark').each(function () {
        if (jQuery(this).val() == "") {
            jQuery(this).val(jQuery(this).attr('title')).addClass('watermarked');
        }
        jQuery(this).focus(function () {
            if (jQuery(this).val() == jQuery(this).attr('title')) {
                jQuery(this).val("").removeClass('watermarked');
            }
        });
        jQuery(this).blur(function () {
            if (jQuery(this).val() == "") {
                jQuery(this).val(jQuery(this).attr('title')).addClass('watermarked');
            }
        });
    });
    //Tool Tips
    $(".entry-content-desc li .info-icon-wrap").tooltip({
        items: "[title]",
        content: function () {
            return $(this).attr("title");
        }
    });
});