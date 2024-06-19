$(window).on("scroll", function () {
    const scrolled = $(window).scrollTop();
    if (scrolled > 75) {
        $("#navbar").addClass('transform_top')
    } else {
        $("#navbar").removeClass('transform_top')
    }
});

// search 
$(".search_btn").click(function () {
    const input = $('.search_input').val();
    if (input == '') {
        $('.search_input').focus();
    } else {
        searchAnimation()
    }

});

function searchAnimation() {
    $(".search_btn").empty().html("<i class='bx bx-dots-horizontal-rounded fs-4 bx-flashing'></i>");
    setTimeout(() => {
        $('.search_btn').empty().html("<span>Search</span><i class='bx bx-search fs-5 ms-1'></i>");
    }, 5000);
}

$(".trend_search_tag a").click(function (e) {
    e.preventDefault();
    const value = $(this).text();
    $('.search_input').val(value);
    searchAnimation();
});