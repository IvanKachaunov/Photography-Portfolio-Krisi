
var lastScrollTop = 0;
function menuAnimation () {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    var $navMenuEl = $('.top-nav');
    if (st > lastScrollTop){ // scroll down
        $navMenuEl.addClass('collapsing-menu-down');
        setTimeout(function () {
            $navMenuEl.removeClass('collapsing-menu-down');
            $navMenuEl.addClass('scrolledIn');
        }, 300);
    } else { // scroll up
        $navMenuEl.addClass('collapsing-menu-up');

        setTimeout(function () {
            $navMenuEl.removeClass('collapsing-menu-up');
            $navMenuEl.removeClass('scrolledIn');
        }, 300);
    }
    lastScrollTop = st;
}

$(document).ready(function () {
    $(window).on('scroll', function () {
        menuAnimation();
    });
});
