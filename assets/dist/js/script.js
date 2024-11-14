let navSidebarExpanded = true;
let navSidebarOpened = false;
let chatWidgetOpened = false;
let notificationsOpened = false;

$(document).ready(function () {
    // Initialize Slick carousel on Navbar
    $('.nav-carousel').slick({
        slidesToShow: 1, // Show 1 slide at a time
        slidesToScroll: 1, // Scroll 1 slide at a time
        autoplay: true, // Autoplay enabled
        autoplaySpeed: 2000, // Autoplay speed in milliseconds
        prevArrow: false, // Hide previous arrow
        nextArrow: false, // Hide next arrow
        dots: false, // Hide navigation dots
        draggable: true, // Enable dragging
        infinite: true, // Infinite looping
        variableWidth: true // Variable width based on content width
    });

    // Initialize Slick carousel on Offers
    $('.offers').slick({
        slidesToShow: 1, // Show 1 slide at a time
        slidesToScroll: 1, // Scroll 1 slide at a time
        autoplay: false, // Autoplay enabled
        autoplaySpeed: 2000, // Autoplay speed in milliseconds
        prevArrow: '<button type="button" class="slick-arrows slick-prev"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-arrows slick-next"><i class="fa fa-chevron-right"></i></button>',
        dots: false, // Hide navigation dots
        draggable: true, // Enable dragging
        infinite: true, // Infinite looping
        variableWidth: true // Variable width based on content width
    });

    // Hero carousel
    $('.hero-carousel').slick({
        slidesToShow: 1, // Show 1 slide at a time
        slidesToScroll: 1, // Scroll 1 slide at a time
        autoplay: true, // Autoplay enabled
        autoplaySpeed: 2000, // Autoplay speed in milliseconds
        prevArrow: false, // Hide previous arrow
        nextArrow: false, // Hide next arrow
        dots: false, // Hide navigation dots
        draggable: true, // Enable dragging
        infinite: true, // Infinite looping
        variableWidth: false, // Variable width based on content width
    });

    if ($('.lobby-cards').length > 0) {
        let lobbyCards = false;
        $(window).on('resize', function () {
            if ($(window).width() < 1200) {
                if (!lobbyCards) {
                    $('.lobby-cards').slick({
                        slidesToShow: 1, // Show 2 slides at a time
                        slidesToScroll: 1, // Scroll 1 slide at a time
                        autoplay: false, // Autoplay enabled
                        autoplaySpeed: 2000, // Autoplay speed in milliseconds
                        prevArrow: false, // Hide previous arrow
                        nextArrow: false, // Hide next arrow
                        dots: false, // Hide navigation dots
                        draggable: true, // Enable dragging
                        infinite: true, // Infinite looping
                        variableWidth: true, // Variable width based on content width
                    });
                    lobbyCards = true;
                }
            } else {
                if (lobbyCards) {
                    window.location.reload();
                    lobbyCards = false;
                }
            }
        }).trigger('resize');

    }
    if ($('.reward-days').length > 0) {
        let weeklyCards = false;
        $(window).on('resize', function () {
            if ($(window).width() < 992) {
                if (!weeklyCards) {
                    $('.reward-days').slick({
                        slidesToShow: 1, // Show 2 slides at a time
                        slidesToScroll: 1, // Scroll 1 slide at a time
                        autoplay: false, // Autoplay enabled
                        autoplaySpeed: 2000, // Autoplay speed in milliseconds
                        prevArrow: false, // Hide previous arrow
                        nextArrow: false, // Hide next arrow
                        dots: false, // Hide navigation dots
                        draggable: true, // Enable dragging
                        infinite: false, // Infinite looping
                        variableWidth: true, // Variable width based on content width
                    });
                    weeklyCards = true;
                }
            } else {
                if (weeklyCards) {
                    window.location.reload();
                    weeklyCards = false;
                }
            }
        }).trigger('resize');

    }
    $('.nb-btn').on('click', function () {
        $(this).siblings('.dropdown-menu').toggle();
    })

    function openSidebar() {
        $('.sidebar').fadeIn();
    }

    function closeSidebar() {
        $('.sidebar').fadeOut();
    }

    $('.sidebar-toggler').on('click', function () {
        openSidebar();
    })
    let theme = window.localStorage.getItem('theme');
    changeTheme(theme);

    $(".testimonials").slick({
        centerMode: true,
        centerPadding: '16px',
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-arrows slick-prev"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-arrows slick-next"><i class="fa fa-chevron-right"></i></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            }
        ]
    });
});

function changeTheme(targetSwitch) {
    let switchBtn = $('.btn-switch');
    $('body').removeClass('light');
    $('body').removeClass('dark');
    $('body').addClass(targetSwitch);
    window.localStorage.setItem('theme', targetSwitch);
    if (targetSwitch == 'light') {
        switchBtn.attr('data-switch', 'dark');
    } else {
        switchBtn.attr('data-switch', 'light');
    }
}

$('.btn-switch').on('click', function (params) {
    let targetSwitch = $(this).attr('data-switch');
    changeTheme(targetSwitch);
});

function openModal(target) {
    if (target == 'signin' || target == 'signup') {
        $('.nav-' + target).tab('show');
        if ($('body').width() > 576) {
            $('#signinSignup').modal('show');
        } else {
            $('#signinSignup').addClass('show');
            $('#signinSignup').show();
            $('body').css({
                'overflow': 'hidden'
            });
        }
    } else if (target == 'pay') {
        $('#payModal').modal('show');
    } else if (target == 'user') {
        $('#userModal').modal('show');
    } else if (target == 'offer') {
        $('#offerModal').modal('show');
    }
}
$('.ss-modal .btn-modal-close').on('click', function () {
    $('#signinSignup').removeClass('show');
    $('#signinSignup').hide(); $('body').css({
        'overflow': 'auto'
    });
})
function selectPayCard() {
    $('.pay-modal .pay-card').each(function () {
        if ($(this).find('input:checked').length > 0) {
            $('.pay-modal .pay-card').removeClass('card-selected');
            $(this).addClass('card-selected');
        }
    });
}

$('.lb-tab-btn').on('shown.bs.tab', function (event) {
    let target = $(this).attr('data-bs-target');
    if (target == "#pills-daily") {
        $('#lb-range').html("Daily");
    } else {
        $('#lb-range').html("Monthly");
    }
})

// Data for the line graph
var data = {
    labels: ['10', '11', '12', '13', '14'],
    datasets: [{
        label: 'Earning',
        data: [3200, 2440, 6550, 4030, 2510],
        borderColor: 'skyblue',
        borderWidth: 2,
        fill: false
    }]
};


if ($('#lineGraph').length > 0) {
    // Get the canvas element
    var ctx = document.getElementById('lineGraph').getContext('2d');
    // Create the line chart
    var lineChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            scales: {
                x: {
                    display: true,
                    title: {
                        display: false,
                        text: 'Month'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: false,
                        text: 'Value'
                    },
                    ticks: {
                        callback: function (value, index, values) {
                            return value / 1000 + 'k'; // Convert to thousands and append 'k'
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'bottom' // Position legend at the bottom
                }
            }
        }
    });

}
function changeVisibility() {
    var checkbox = document.getElementById('flexSwitchCheckChecked');
    var label = document.getElementById('p-visibility');

    if (checkbox.checked) {
        label.textContent = 'Public';
    } else {
        label.textContent = 'Private';
    }
}

function changeBalance() {
    var checkbox = $('.balanceSwitch');
    var label = $('.balance-status');

    if (checkbox.is(':checked')) {
        $('.balance').hide();
        $('.pending-balance').show();
        label.html('Pending');
    } else {
        $('.balance').show();
        $('.pending-balance').hide();
        label.html('Balance');
    }
}

function checkLayout() {
    let mainWidth = 0;
    if (chatWidgetOpened) {
        mainWidth = 360;
    }
    if (notificationsOpened) {
        mainWidth = 360;
    }
    if (navSidebarExpanded) {
        mainWidth = mainWidth + 290;
    } else {
        mainWidth = mainWidth + 100;
    }

    console.log(navSidebarOpened, chatWidgetOpened);
    if (navSidebarOpened) {
        mainWidth = mainWidth + 0;
        console.log(1);
    } else {
        console.log(2);
    }

    if (chatWidgetOpened) {
        $('header .hidden-part').css({
            'display': 'block'
        });
    }else{
        $('header .hidden-part').css({
            'display': 'none'
        });
    }

    $('main').css({
        'width': 'calc(100% - ' + mainWidth + 'px)'
    });

    
    if (notificationsOpened) {
        $('.btn-chat-noti').find('circle').css({
            "fill": "#2568EF"
        });
        $('.btn-chat-noti').find('path').css({
            "fill": "#ffffff"
        });
    }else{
        $('.btn-chat-noti').find('circle').css({
            "fill": "#19172A"
        });
        $('.btn-chat-noti').find('path').css({
            "fill": "#A6A4BC"
        });
    }

    
    if (chatWidgetOpened) {
        $('.btn-chat-msg').find('circle').css({
            "fill": "#2568EF"
        });
        $('.btn-chat-msg').find('path').css({
            "fill": "#ffffff"
        });
    }else{
        $('.btn-chat-msg').find('circle').css({
            "fill": "#19172A"
        });
        $('.btn-chat-msg').find('path').css({
            "fill": "#A6A4BC"
        });
    }

    if(chatWidgetOpened || navSidebarOpened){
        $('body').addClass('dont-scroll');
    }else{
        $('body').removeClass('dont-scroll');
    }
}
function chatWindow() {
    if (notificationsOpened) {
        notificationsWindow();
    }
    $('#chat-widget').toggleClass('chat-shown');
    if ($('#chat-widget').hasClass('chat-shown')) {
        $('.nci-show').show();
        $('.nci-hide').hide();
        chatWidgetOpened = true;
    } else {
        $('.nci-show').hide();
        $('.nci-hide').show();
        chatWidgetOpened = false;
    }
    checkLayout();
}

function notificationsWindow() {
    if (chatWidgetOpened) {
        chatWindow();
    }
    $('#notifications-widget').toggleClass('chat-shown');
    if ($('#notifications-widget').hasClass('chat-shown')) {
        $('.nci-show').show();
        $('.nci-hide').hide();
        notificationsOpened = true;
    } else {
        $('.nci-show').hide();
        $('.nci-hide').show();
        notificationsOpened = false;
    }
    checkLayout();
}

function sideNavExpand() {
    $('body').toggleClass('side-nav-expanded');
    if ($('body').hasClass('side-nav-expanded')) {
        navSidebarExpanded = true;
    } else {
        navSidebarExpanded = false;
    }

    checkLayout();

}

function sidebarMenu() {
    $('.sidebar').toggleClass('show-sidebar');
    if ($('.sidebar').hasClass('show-sidebar')) {
        navSidebarOpened = true;
    } else {
        navSidebarOpened = false;
    }

    checkLayout();

}


$('#pills-chat-tab').click(function () {
    $('.cw-dropdown').toggle();
})

$(document).ready(function () {
    $('.os-dropdown .dropdown-item').on('click', function (e) {
        e.preventDefault();
        var checkbox = $(this).find('.item-checkbox');
        checkbox.prop('checked', !checkbox.prop('checked'));
        updateSelectedOS();
        console.log($('#offers-main').hasClass('offers-filtered'));
        if (!$('#offers-main').hasClass('offers-filtered-click')) {
            $('#offers-main').addClass('offers-filtered');
        }
    });
    checkLayout();
    $(window).scroll(function () {
        // if ($(this).scrollTop() > 100) {
        //     // The window has been scrolled down more than 100px
        //     $('.chat-widget').css({
        //         'top': '0px'
        //     })
        // } else {
        //     $('.chat-widget').css({
        //         'top': '100px'
        //     })
        // }
    });

    function updateSelectedOS() {
        var selectedItems = [];
        $('.os-dropdown .item-checkbox:checked').each(function () {
            var itemText = $(this).siblings('.item-icon').html();
            selectedItems.push(itemText);
        });
        var selectedText = selectedItems.join('');
        $('.os-dropdown .btn.dropdown-toggle #os-icons').html(selectedText || '');
    }

    if ($('.os-dropdown')) {
        updateSelectedOS();
    }

    $('.offer').each(function () {
        var offer = $(this);
        offer.on('click', function () {
            openModal('offer');
        });
    });
});
function checkSwitch() {
    $('.form-switch').each(function () {
        if ($(this).find('.form-check-input').is(':checked')) {
            $(this).closest('.form-switch').addClass('checked-switch');
        } else {
            $(this).closest('.form-switch').removeClass('checked-switch');
        }
    })
}

function checkHiddenRadio() {
    $('.hidden-radio-form').each(function () {
        let hrf = $(this);
        let hidden_radios = hrf.find('.er-cont');
        hidden_radios.each(function () {
            let radio = $(this);
            if (radio.find('input[type="radio"]').is(':checked')) {
                radio.addClass('checked-radio');
            } else {
                radio.removeClass('checked-radio');
            }
        });
    })
}

function checkGcRadio() {
    $('.gift-card-radios').each(function () {
        let gcr = $(this);
        let gc_radios = gcr.find('.gc-radio');
        gc_radios.each(function () {
            let radio = $(this);
            if (radio.find('input[type="radio"]').is(':checked')) {
                radio.addClass('gc-checked');
            } else {
                radio.removeClass('gc-checked');
            }
        });
    })
} function toggleIcon(button) {
    const icon = button.querySelector('i');
    icon.classList.toggle('fa-chevron-down');
    icon.classList.toggle('fa-chevron-up');
}

function toggleFilter() {
    let filter_box = $('.offer-search-box');
    let filter_button = $('.offer-filter-btn');
    filter_box.toggle();
    if(filter_button.hasClass('filter-opened')) {
        filter_button.removeClass('filter-opened');
        $('.ofb-text').html('Filter');
    } else {
        filter_button.addClass('filter-opened');
        $('.ofb-text').html('Close');
    }
}
$(document).ready(function () {
    $('.expandable-radio input[type="radio"]').each(function () {
        $(this).on('change', function () {
            checkHiddenRadio();
        });
    });
    $('.gc-radio input[type="radio"]').each(function () {
        $(this).on('change', function () {
            checkGcRadio();
        });
    });
    checkGcRadio()
    checkHiddenRadio();
    $('[data-bs-toggle="tooltip"]').tooltip();
    if ($.fn.select2) {
        $('#cs1').select2({
            templateResult: formatOption, // Customize the appearance of each option
            templateSelection: formatSelection,
            minimumResultsForSearch: Infinity // Disable search
        });
        $('#cs2').select2({
            templateResult: formatOption, // Customize the appearance of each option
            templateSelection: formatSelection,
            minimumResultsForSearch: Infinity // Disable search
        });
    } else {
        console.error("Select2 is not loaded.");
    }
    // Custom function to format each option
    function formatOption(option) {
        var $option = $(option.element);
        var text = $option.text();
        var value = $option.val();
        var count = $option.attr('data-count');
        var icon = $option.attr('data-icon');

        var $formattedOption = $('<span class="selected-opt"></span>');
        if (icon !== undefined) {
            var $iconSpan = $(`<i class="fa ${icon}"></i>`);
            $formattedOption.append($iconSpan);
        }

        $formattedOption.append('<span class="slct-text">' + text + '</span>');
        if (count !== undefined) {
            var $countSpan = $('<span class="slct-count">' + count + '</span>');
            $formattedOption.append($countSpan);
        }

        $formattedOption.data('value', value);

        return $formattedOption;
    }
    // Custom function to format the selected option
    function formatSelection(selection) {
        var $selectedOption = $('<span class="selected-opt"></span>'); // Use selection.text to get the text of the selected option

        if (selection.element) {
            var $option = $(selection.element);
            var count = $option.attr('data-count');
            var icon = $option.attr('data-icon');


            if (icon !== undefined) {
                var $iconSpan = $(`<i class="fa ${icon}"></i>`);
                $selectedOption.append($iconSpan);
            }

            $selectedOption.append('<span class="slct-text">' + selection.text + '</span>');
            if (count !== undefined) {
                var $countSpan = $('<span class="slct-count">' + count + '</span>');
                $selectedOption.append($countSpan);
            }
        }

        return $selectedOption;
    }

    $('#cs1').on('select2:select', function (e) {
        console.log(e.params.data.text);
        if (e.params.data.text === "Home") {
            $('#offers-main').removeClass('offers-filtered');
        } else {
            if (!$('#offers-main').hasClass('offers-filtered-click')) {
                $('#offers-main').addClass('offers-filtered');
            }
        }
    })

    if ($('[data-bs-toggle="tooltip"]')) {
        $('[data-bs-toggle="tooltip"]').tooltip();
    }

    $('.navbar-dropdowns .dropdown-item').on('click', function (e) {
        e.stopPropagation();
    })
    checkSwitch();
});

