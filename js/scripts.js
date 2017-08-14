for (i = 1; i <= 1; i++) {
    var site_day = Number($('.day_fs_' + i).text());
    var site_month = $('.month_fs_' + i).text();
    month = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    otherDate = new Date(2017, month.indexOf(site_month), site_day);
    nowDate = new Date();
    delta = nowDate.getTime() - otherDate.getTime();
    if ((Math.ceil(delta / 1000 / 60 / 60 / 24) % 10) * 10 > 0) {
        newDate = new Date(2017, month.indexOf(site_month), site_day + (Math.ceil(delta / 1000 / 60 / 60 / 24 / 10)) * 10);
        var new_month = newDate.getMonth();
        $('.day_fs_' + i).text(newDate.getDate());
        $('.month_fs_' + i).text(month[new_month]);
    } else if ((Math.ceil(delta / 1000 / 60 / 60 / 24) % 10) * 10 == 0) {
        newDate = new Date(2017, month.indexOf(site_month), site_day + (Math.ceil(delta / 1000 / 60 / 60 / 24) / 10 + 1) * 10);
        var new_month = newDate.getMonth();
        $('.day_fs_' + i).text(newDate.getDate());
        $('.month_fs_' + i).text(month[new_month]);
    }
}
$(document).ready(function() {
    $('.month_2').text($('.day_fs').text() + ' ' + $('.month_fs').text());
})
setInterval(function() {
    var phone = 'tel:' + $('.header_phone').text();
    $('.header_phone').attr('href', phone);
}, 1000);
setInterval(function() {
    var phone = 'tel:' + $('.contact_exchange').text();
    $('.contact_exchange').attr('href', phone);
}, 1000);
setInterval(function() {
    var phone = 'tel:' + $('.footer_phone').text();
    $('.footer_phone').attr('href', phone);
}, 1000);
$('document').ready(function() {
    function inp_1() {
        var inp_val = $('.inp_range_1').val();
        var inp_min = $('.inp_range_1').attr('min');
        var inp_max = $('.inp_range_1').attr('max');
        var inp_width = $('.inp_range_1').width();
        var count = (((inp_width / (inp_max - inp_min)) * inp_val) / inp_width) * 100 - ((100 / (inp_max - inp_min)) * inp_min) - (inp_val - (inp_max - inp_min)/2)*0.025;
        var text_inp_margin = ($('.inp_range_1').css('width').substring(0, $('.inp_range_1').css('width').length -2))/100*(count + (inp_val - (inp_max - inp_min)/2)*0.015) - 30;
        $('.text_inp_1').css('margin-left', text_inp_margin + 'px');
        $('.inp_range_1').css('background', 'linear-gradient(45deg, rgba(255, 0, 0, 1) 0%, rgba(255, 0, 0, 1) ' + count + '%, transparent ' + count + '%, transparent 100%) 0 0 no-repeat, linear-gradient(-45deg, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0) 7px, rgba(0, 0, 0, 0) 7px, rgba(0, 0, 0, 0) 14px) 0 100% no-repeat');
        $('.text_inp_1').val(inp_val);
        $('.text_inp_1').change(function() {
            $('.inp_range_1').val($('.text_inp_1').val());
        })
    }

    function inp_2() {
        var inp_val = $('.inp_range_2').val();
        var inp_min = $('.inp_range_2').attr('min');
        var inp_max = $('.inp_range_2').attr('max');
        var inp_width = $('.inp_range_2').width();
        var count = (((inp_width / (inp_max - inp_min)) * inp_val) / inp_width) * 100 - ((100 / (inp_max - inp_min)) * inp_min);
        $('.inp_range_2').css('background', 'linear-gradient(45deg, rgba(255, 7, 7, 0.67) 0%, rgba(255, 7, 7, 0.67) ' + count + '%, transparent ' + count + '%, transparent 100%) 0 0 no-repeat, repeating-linear-gradient(-45deg, #d0d0d0 0px, #d0d0d0 7px, #949494 7px, #949494 14px) 0 100% no-repeat');
        $('.val_range').val(inp_val);
        $('.val_range').change(function() {
            $('.inp_range_2').val($('.val_range').val());
        })
    }
    inp_1();
    inp_2();
    $('.text_inp_1').change(inp_1);
    $('.val_range').change(inp_2);
    $('.inp_range_1').bind('mousemove click touchmove touchend', inp_1);
    $('.inp_range_2').bind('mousemove click touchmove touchend', inp_2);
})
$(document).ready(function() {
    var $menu = $(".header_fix");
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100 && $menu.hasClass("default")) {
            $menu.removeClass("default").addClass("navbar-fixed-top");
            var head_height = String(Number($('.header_fix').css('height').substring(0, $('.header_fix').css('height').length - 2))) + 'px';
            $('main').css('margin-top', head_height);
            $('main').css('margin-top', '180px');
            $('.navbar_xs').css('margin-top', String(Number($('.header_fix').css('height').substring(0, $('.header_fix').css('height').length - 2))) + 'px');
        } else if ($(this).scrollTop() <= 100 && $menu.hasClass("navbar-fixed-top")) {
            $menu.removeClass("navbar-fixed-top").addClass("default");
            $('main').css('margin-top', '0px');
            $('.navbar_xs').css('margin-top', '132px');
        }
    });
});
var w_d = $(window).width();
if (w_d > 769) {
    $('.navbar_xs').css('margin-top', String(Number($('.header_fix').css('height').substring(0, $('.header_fix').css('height').length - 2)) - 5) + 'px');
} else if (w_d <= 769) {
    $('.navbar_xs').css('margin-top', String(Number($('.header_fix').css('height').substring(0, $('.header_fix').css('height').length - 2)) - 10) + 'px');
}
$('document').ready(function() {
    $("nav, .navbar_xs").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 130;
        if (w_d < 583) {
            top = $(id).offset().top - 240;
        }
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });
});
$(".navbar-toggle").click(function() {
    $('.navbar_xs').toggle();
});
$(document).on('click', function(e) {
    if (!$(e.target).closest(".navbar-toggle").length) {
        $('.navbar_xs').hide();
    }
    e.stopPropagation();
});
$('.panel-title').bind('touch click', function() {
    var $panel = $(this);
    $('.panel-title').not(this).each(function() {
        if ($(this).hasClass("minus")) {
            $(this).removeClass("minus").addClass("plus");
        }
    })
    if ($panel.hasClass("plus")) {
        $panel.removeClass("plus").addClass("minus");
    } else if ($panel.hasClass("minus")) {
        $panel.removeClass("minus").addClass("plus");
    }
})
$(document).ready(function() {
    $('[data-toggle="popover"]').popover({});
})
var myElement = document.getElementById('slider_our_team');
var mc = new Hammer(myElement);
mc.on('swipeleft', function() {
    $('.carousel').carousel('next');
});
mc.on('swiperight', function() {
    $('.carousel').carousel('prev');
});
function after_1(event) {
    width2 = event.screenX;
    width3 = document.getElementById("tech_block_1").offsetLeft;
    document.getElementById('dimg_1_2').style.width = width2 - width3 + "px";
    var margin_left = width2 - width3 - 20;
    if (margin_left > $('#tech_block_1').width() - 20) {
        margin_left = $('#tech_block_1').width() - 20 + "px";
    }
    if (margin_left < -20) {
        margin_left = -20 + "px";
    }
    $('.tech_arrow_1').css('margin-left', margin_left)
}
var docw = $(window).width();
if (docw > 700) {
    $("#tech_block_1").bind("mousemove", after_1);
};
if (docw < 700) {
    $("#tech_block_1").bind("click touch touchmove", after_1);
};

function after_2(event) {
    width2 = event.screenX;
    width3 = document.getElementById("tech_block_2").offsetLeft;
    document.getElementById('dimg_2_2').style.width = width2 - width3 + "px";
    var margin_left = width2 - width3 - 20;
    if (margin_left > $('#tech_block_2').width() - 20) {
        margin_left = $('#tech_block_2').width() - 20 + "px";
    }
    if (margin_left < -20) {
        margin_left = -20 + "px";
    }
    $('.tech_arrow_2').css('margin-left', margin_left)
}
var docw = $(window).width();
if (docw > 700) {
    $("#tech_block_2").bind("mousemove", after_2);
};
if (docw < 700) {
    $("#tech_block_2").bind("click touch touchmove", after_2);
};

function after_3(event) {
    width2 = event.screenX;
    width3 = document.getElementById("tech_block_3").offsetLeft;
    document.getElementById('dimg_3_2').style.width = width2 - width3 + "px";
    var margin_left = width2 - width3 - 20;
    if (margin_left > $('#tech_block_3').width() - 20) {
        margin_left = $('#tech_block_3').width() - 20 + "px";
    }
    if (margin_left < -20) {
        margin_left = -20 + "px";
    }
    $('.tech_arrow_3').css('margin-left', margin_left)
}
var docw = $(window).width();
if (docw > 700) {
    $("#tech_block_3").bind("mousemove", after_3);
};
if (docw < 700) {
    $("#tech_block_3").bind("click touch touchmove", after_3);
};

function after_4(event) {
    width2 = event.screenX;
    width3 = document.getElementById("tech_block_4").offsetLeft;
    document.getElementById('dimg_4_2').style.width = width2 - width3 + "px";
    var margin_left = width2 - width3 - 20;
    if (margin_left > $('#tech_block_4').width() - 20) {
        margin_left = $('#tech_block_4').width() - 20 + "px";
    }
    if (margin_left < -20) {
        margin_left = -20 + "px";
    }
    $('.tech_arrow_4').css('margin-left', margin_left)
}
var docw = $(window).width();
if (docw > 700) {
    $("#tech_block_4").bind("mousemove", after_4);
};
if (docw < 700) {
    $("#tech_block_4").bind("click touch touchmove", after_4);
};

function after_5(event) {
    width2 = event.screenX;
    width3 = document.getElementById("tech_block_5").offsetLeft;
    document.getElementById('dimg_5_2').style.width = width2 - width3 + "px";
    var margin_left = width2 - width3 - 20;
    if (margin_left > $('#tech_block_5').width() - 20) {
        margin_left = $('#tech_block_5').width() - 20 + "px";
    }
    if (margin_left < -20) {
        margin_left = -20 + "px";
    }
    $('.tech_arrow_5').css('margin-left', margin_left)
}
var docw = $(window).width();
if (docw > 700) {
    $("#tech_block_5").bind("mousemove", after_5);
};
if (docw < 700) {
    $("#tech_block_5").bind("click touch touchmove", after_5);
};

function after_6(event) {
    width2 = event.screenX;
    width3 = document.getElementById("tech_block_6").offsetLeft;
    document.getElementById('dimg_6_2').style.width = width2 - width3 + "px";
    var margin_left = width2 - width3 - 20;
    if (margin_left > $('#tech_block_6').width() - 20) {
        margin_left = $('#tech_block_6').width() - 20 + "px";
    }
    if (margin_left < -20) {
        margin_left = -20 + "px";
    }
    $('.tech_arrow_6').css('margin-left', margin_left)
}
var docw = $(window).width();
if (docw > 700) {
    $("#tech_block_6").bind("mousemove", after_6);
};
if (docw < 700) {
    $("#tech_block_6").bind("click touch touchmove", after_6);
};

function after_7(event) {
    width2 = event.screenX;
    width3 = document.getElementById("tech_block_7").offsetLeft;
    document.getElementById('dimg_7_2').style.width = width2 - width3 + "px";
    var margin_left = width2 - width3 - 20;
    if (margin_left > $('#tech_block_7').width() - 20) {
        margin_left = $('#tech_block_7').width() - 20 + "px";
    }
    if (margin_left < -20) {
        margin_left = -20 + "px";
    }
    $('.tech_arrow_7').css('margin-left', margin_left)
}
var docw = $(window).width();
if (docw > 700) {
    $("#tech_block_7").bind("mousemove", after_7);
};
if (docw < 700) {
    $("#tech_block_7").bind("click touch touchmove", after_7);
};

function after_8(event) {
    width2 = event.screenX;
    width3 = document.getElementById("tech_block_8").offsetLeft;
    document.getElementById('dimg_8_2').style.width = width2 - width3 + "px";
    var margin_left = width2 - width3 - 20;
    if (margin_left > $('#tech_block_8').width() - 20) {
        margin_left = $('#tech_block_8').width() - 20 + "px";
    }
    if (margin_left < -20) {
        margin_left = -20 + "px";
    }
    $('.tech_arrow_8').css('margin-left', margin_left)
}
var docw = $(window).width();
if (docw > 700) {
    $("#tech_block_8").bind("mousemove", after_8);
};
if (docw < 700) {
    $("#tech_block_8").bind("click touch touchmove", after_8);
};

function after_9(event) {
    width2 = event.screenX;
    width3 = document.getElementById("tech_block_9").offsetLeft;
    document.getElementById('dimg_9_2').style.width = width2 - width3 + "px";
    var margin_left = width2 - width3 - 20;
    if (margin_left > $('#tech_block_9').width() - 20) {
        margin_left = $('#tech_block_9').width() - 20 + "px";
    }
    if (margin_left < -20) {
        margin_left = -20 + "px";
    }
    $('.tech_arrow_9').css('margin-left', margin_left)
}
var docw = $(window).width();
if (docw > 700) {
    $("#tech_block_9").bind("mousemove", after_9);
};
if (docw < 700) {
    $("#tech_block_9").bind("click touch touchmove", after_9);
};

function after_10(event) {
    width2 = event.screenX;
    width3 = document.getElementById("tech_block_10").offsetLeft;
    document.getElementById('dimg_10_2').style.width = width2 - width3 + "px";
    var margin_left = width2 - width3 - 20;
    if (margin_left > $('#tech_block_10').width() - 20) {
        margin_left = $('#tech_block_10').width() - 20 + "px";
    }
    if (margin_left < -20) {
        margin_left = -20 + "px";
    }
    $('.tech_arrow_10').css('margin-left', margin_left)
}
var docw = $(window).width();
if (docw > 700) {
    $("#tech_block_10").bind("mousemove", after_10);
};
if (docw < 700) {
    $("#tech_block_10").bind("click touch touchmove", after_10);
};

function after_11(event) {
    width2 = event.screenX;
    width3 = document.getElementById("tech_block_11").offsetLeft;
    document.getElementById('dimg_11_2').style.width = width2 - width3 + "px";
    var margin_left = width2 - width3 - 20;
    if (margin_left > $('#tech_block_11').width() - 20) {
        margin_left = $('#tech_block_11').width() - 20 + "px";
    }
    if (margin_left < -20) {
        margin_left = -20 + "px";
    }
    $('.tech_arrow_11').css('margin-left', margin_left)
}
var docw = $(window).width();
if (docw > 700) {
    $("#tech_block_11").bind("mousemove", after_11);
};
if (docw < 700) {
    $("#tech_block_11").bind("click touch touchmove", after_11);
};

function after_12(event) {
    width2 = event.screenX;
    width3 = document.getElementById("tech_block_12").offsetLeft;
    document.getElementById('dimg_12_2').style.width = width2 - width3 + "px";
    var margin_left = width2 - width3 - 20;
    if (margin_left > $('#tech_block_12').width() - 20) {
        margin_left = $('#tech_block_12').width() - 20 + "px";
    }
    if (margin_left < -20) {
        margin_left = -20 + "px";
    }
    $('.tech_arrow_12').css('margin-left', margin_left)
}
var docw = $(window).width();
if (docw > 700) {
    $("#tech_block_12").bind("mousemove", after_12);
};
if (docw < 700) {
    $("#tech_block_12").bind("click touch touchmove", after_12);
};

function after_13(event) {
    width2 = event.screenX;
    width3 = document.getElementById("tech_block_13").offsetLeft;
    document.getElementById('dimg_13_2').style.width = width2 - width3 + "px";
    var margin_left = width2 - width3 - 20;
    if (margin_left > $('#tech_block_13').width() - 20) {
        margin_left = $('#tech_block_13').width() - 20 + "px";
    }
    if (margin_left < -20) {
        margin_left = -20 + "px";
    }
    $('.tech_arrow_13').css('margin-left', margin_left)
}
var docw = $(window).width();
if (docw > 700) {
    $("#tech_block_13").bind("mousemove", after_13);
};
if (docw < 700) {
    $("#tech_block_13").bind("click touch touchmove", after_13);
};

function after_14(event) {
    width2 = event.screenX;
    width3 = document.getElementById("tech_block_14").offsetLeft;
    document.getElementById('dimg_14_2').style.width = width2 - width3 + "px";
    var margin_left = width2 - width3 - 20;
    if (margin_left > $('#tech_block_14').width() - 20) {
        margin_left = $('#tech_block_14').width() - 20 + "px";
    }
    if (margin_left < -20) {
        margin_left = -20 + "px";
    }
    $('.tech_arrow_14').css('margin-left', margin_left)
}
var docw = $(window).width();
if (docw > 700) {
    $("#tech_block_14").bind("mousemove", after_14);
};
if (docw < 700) {
    $("#tech_block_14").bind("click touch touchmove", after_14);
};

function after_15(event) {
    width2 = event.screenX;
    width3 = document.getElementById("tech_block_15").offsetLeft;
    document.getElementById('dimg_15_2').style.width = width2 - width3 + "px";
    var margin_left = width2 - width3 - 20;
    if (margin_left > $('#tech_block_15').width() - 20) {
        margin_left = $('#tech_block_15').width() - 20 + "px";
    }
    if (margin_left < -20) {
        margin_left = -20 + "px";
    }
    $('.tech_arrow_15').css('margin-left', margin_left)
}
var docw = $(window).width();
if (docw > 700) {
    $("#tech_block_15").bind("mousemove", after_15);
};
if (docw < 700) {
    $("#tech_block_15").bind("click touch touchmove", after_15);
};
$('.service_select').change(function() {
    var checked_opt = $(".service_select").val();
    $('.service_tab_pane').removeClass("active in").addClass('fade');
    $('#' + checked_opt).removeClass("fade").addClass('active in');
})
$('.example_select').change(function() {
    var checked_opt = $(".example_select").val();
    $('.example_tab_pane').removeClass("active in").addClass('fade');
    $('#' + checked_opt).removeClass("fade").addClass('active in');
})
$('.movies_select').change(function() {
    var checked_opt = $(".movies_select").val();
    $('.movies_tab_pane').removeClass("active in").addClass('fade');
    $('#' + checked_opt).removeClass("fade").addClass('active in');
})
var count_1 = 3;
var count_2 = 2;
var count_3 = 3;
var count_gen_1 = 1;
$('document').ready(function() {
    $('.example_ul').bind('click touch', function() {
        count_1 = 3;
    })
    $('.example_select').bind('touch', function() {
        count_1 = 3;
    })
    $('.example_more_1').bind('click touch', function() {
        if (count_1 == $('.active > .examples_item_global').length) {
            $('.active > .example_more_1').hide(100);
        }
        $('.active > .examples_item_global_' + count_1).css('display', 'block');
        count_1++;
    })
    $('.movies_ul').bind('click touch', function() {
        count_2 = 2;
    })
    $('.movies_select').bind('touch', function() {
        count_2 = 2;
    })
    $('.more_movies').bind('click touch', function() {
        if (count_2 == $('.active > .movies_item_global').length) {
            $('.active > .more_movies').hide(100);
        }
        $('.active > .movies_item_global_' + count_2).css('display', 'block');
        count_2++;
    })
    $('.panel:gt(5)').hide();
    $('.more_answ').bind('touch click', function() {
        $('.panel:gt(5)').show(500);
        $('.more_answ').hide(100);
    })
    $('.cos_2').hide();
    $('.more_cos').bind('touch click', function() {
        $('.cos_2').css({
            'display': 'inline',
            'visibility': 'visible'
        });
        $('.more_cos').css({
            'display': 'none',
            'visibility': 'hidden'
        });
    })
    $('.gen_2').hide();
    $('.more_gen').bind('touch click', function() {
        $('.gen_2').css({
            'display': 'inline',
            'visibility': 'visible'
        });
        $('.more_gen').css({
            'display': 'none',
            'visibility': 'hidden'
        });
    })
    $('.key_2').hide();
    $('.more_key').bind('touch click', function() {
        $('.key_2').css({
            'display': 'inline',
            'visibility': 'visible'
        });
        $('.more_key').css({
            'display': 'none',
            'visibility': 'hidden'
        });
    })
    $('.des_2').hide();
    $('.more_des').bind('touch click', function() {
        $('.des_2').css({
            'display': 'inline',
            'visibility': 'visible'
        });
        $('.more_des').css({
            'display': 'none',
            'visibility': 'hidden'
        });
    })
    $('.tech_row:gt(1)').hide();
    $('.more_tech').bind('click touch', function() {
        if (count_3 == $('.tech_row').length) {
            $('.more_tech').hide(100);
        }
        $('.tech_row_' + count_3).show(500);
        count_3++;
    })
    $('.more_service_cards').bind('touch click', function () {
        $('.add_service_cards').css('display', 'inline');
        $('.more_service_cards').css('display', 'none');
    })
})
$('.checkbox_block').css('display', 'none');
$('.checkbox_block_cos').css('display', 'block');
$('.free_ul').click(function() {
    $("input[type=checkbox]").each(function() {
        $(this).prop('checked', false)
    })
})
$('.free_ul').on('change', ":radio[name='free_radio']", function() {
    var free_val = $(this).val();
    if (free_val == 'cos') {
        $('.checkbox_block').css('display', 'none');
        $('.checkbox_block').find('input').css('visibility', 'hidden');
        $('.checkbox_block_cos').css('display', 'block');
        $('.checkbox_block_cos').find('input').css('visibility', 'visible');
    } else if (free_val == 'gen') {
        $('.checkbox_block').css('display', 'none');
        $('.checkbox_block').find('input').css('visibility', 'hidden');
        $('.checkbox_block_gen').css('display', 'block');
        $('.checkbox_block_gen').find('input').css('visibility', 'visible');
    } else if (free_val == 'key') {
        $('.checkbox_block').css('display', 'none');
        $('.checkbox_block').find('input').css('visibility', 'hidden');
        $('.checkbox_block_key').css('display', 'block');
        $('.checkbox_block_key').find('input').css('visibility', 'visible');
    } else if (free_val == 'des') {
        $('.checkbox_block').css('display', 'none');
        $('.checkbox_block').find('input').css('visibility', 'hidden');
        $('.checkbox_block_des').css('display', 'block');
        $('.checkbox_block_des').find('input').css('visibility', 'visible');
    }
})
jQuery(function($) {
    $.mask.definitions['q'] = '[1, 2, 3, 4, 5, 6, 9]';
    $(".modal_header_phone").mask("+7(q99) 999-99-99");
    $(".modal_count_1_phone").mask("+7(q99) 999-99-99");
    $(".modal_count_2_phone").mask("+7(q99) 999-99-99");
    $(".modal_ask_phone").mask("+7(q99) 999-99-99");
    $(".modal_want_phone").mask("+7(q99) 999-99-99");
    $(".modal_service_phone").mask("+7(q99) 999-99-99");
    $(".input_fs_2").mask("+7(q99) 999-99-99");
    $(".old_phone").mask("+7(q99) 999-99-99");
    $(".service_inp_2").mask("+7(q99) 999-99-99");
});

function success_page() {
    location.href = 'success.php';
}
var header_modal = ' ';
var comment_1 = ' ';
var comment_2 = ' ';
var name_form = ' ';
$('.service_button').bind('click touch', function() {
    $('.modal_service_name').css('border', '1px solid #cbcbcb').val('');
    $('.modal_service_phone').css('border', '1px solid #cbcbcb').val('');
    header_modal = $(this).attr('att');
    name_form = $(this).attr('name_form');
    $('.not_permanent').html(header_modal);
    if ($(this).attr('ask') == 'ask') {
        $('#question').css('display', 'block');
    } else {
        $('#question').css('display', 'none');
    }
    if ($(this).attr('ask') == 'service') {
        $(".modal").addClass('service_modal');
        $('.not_permanent_content').html($(this).attr('modal_content'));
        $(".modal_service_button").text($(this).attr('button_text'));
        if ($(this).attr('modal_content').indexOf('header_ol') == -1) {
            $('.modal_column_2').css('margin', '20px 0px 20px 0px');
            $('.modal_service_name').css('margin-right', '8%');
            $('.modal_service_phone').css({
                'margin-right': '8%',
                'margin-bottom': '50px'
            });
        }
    } else if ($(this).attr('ask') == 'calc_2') {
        $(".modal_service_button").text('Получить подробную смету бесплатно!');
        var square_2 = 0;
        square_2 = $('.val_range').val();
        var kind_2 = 0;
        if ($('.free_select').css('display') == 'none') {
            kind_2 = $('.free_ul').find('input[type=radio]:checked').val();
        } else if ($('.free_ul').css('display') == 'none') {
            kind_2 = $('.free_select').val();
        }
        var price_2 = 2820;
        var summ_2 = 0;
        if ($('.service_button').hasClass('kitchen_button')) {
            price_2 = 2700;
        }
        if ($('.service_button').hasClass('bathroom_button')) {
            price_2 = 7694;
        }
        if ($('.service_button').hasClass('house_button')) {
            price_2 = 3443;
        }
        if ($('.fs_button').hasClass('office_button')) {
            price_2 = 1696;
        }
        summ_2 = Math.round(price_2 * square_2);
        var count_services = -1;
        $('.add_service').each(function() {
            if ($(this).prop('checked')) {
                count_services++;
            }
        })
        if (count_services > 8) {
            $('.addons').text('Выбрано услуг: ' + count_services);
            $('.add_service:checked').each(function() {
                var input_id_2 = $(this).attr('id');
                var label_for_2 = $('label[for=' + input_id_2 + ']').text();
                if (label_for_2 != 'Косметический' && label_for_2 != 'Дизайнерский' && label_for_2 != 'Капитальный' && label_for_2 != 'Под ключ') {
                    $('.hidden_addons').append('<p style="margin-bottom: 0px; margin-left: 12px"> ' + label_for_2 + ' </p>');
                }
            })
        } else if (count_services <= 8) {
            $('.add_service:checked').each(function() {
                var input_id = $(this).attr('id');
                var label_for = $('label[for=' + input_id + ']').text();
                if (label_for != 'Косметический' && label_for != 'Дизайнерский' && label_for != 'Капитальный' && label_for != 'Под ключ') {
                    $('.addons').append('<p style="margin-bottom: 0px; margin-left: 12px; font-size: 0.77em; line-height: 20px"><img src="/img/red_square.jpg" /> ' + label_for + ' </p>');
                    $('.hidden_addons').append('<p style="margin-bottom: 0px; margin-left: 12px"> ' + label_for + ' </p>');
                }
            })
        }
        if ($('.addons').text() == 'Дополнительно:') {
            $('.addons').css('display', 'none');
        }
        var add_send = $('.hidden_addons').text();
        $('.square').text(square_2);
        summ_2 = String(summ_2).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        document.cookie = "c=" + summ_2 + " ;expires=1";
        var kind_text = 0;
        if (kind_2 == 'cos') {
            kind_text = 'косметический'
            $('.kind_rem').text(kind_text);
        } else if (kind_2 == 'gen') {
            kind_text = 'капитальный'
            $('.kind_rem').text(kind_text);
        } else if (kind_2 == 'key') {
            kind_text = 'под ключ'
            $('.kind_rem_key').text(kind_text);
        } else if (kind_2 == 'des') {
            kind_text = 'дизайнерский'
            $('.kind_rem').text(kind_text);
        }
        comment_2 = square_2 + ' метров, Вид: ' + kind_text + ' , озвучить цену от ' + summ_2 + ' ' + add_send;
        $(".modal").find($("input[name='comment']")).val(comment_2);
    } else if ($(this).attr('ask') == 'old') {
        $(".modal_service_button").text($(this).attr('button_text'));
    } else {
        $(".modal").removeClass('service_modal');
        $(".modal_service_button").text('Заказать звонок');
    }
    /*CSS MODALS*/
    if ($(this).attr('ask') == 'header_form' || $(this).attr('name_form') == 'Хочу так же!' || $(this).attr('ask') == 'old' || $(this).attr('ask') == 'ask' || $(this).attr('ask') == 'calc_2') {
        $(".modal_service_button").css('margin-top', '0px');
        $(".modal_service_name").css('margin', '30px auto 20px auto');
        $(".modal_service_phone").css('margin', '0px auto 20px auto');
        $(".modal-body").css('padding-bottom', '35px');
    }
    else {
        $(".modal_service_button").css('margin-top', '60px');
        $(".modal_service_name").css('margin', '0px 8% 20px auto');
        $(".modal_service_phone").css('margin', '0px 8% 20px auto');
        $(".modal-body").css('padding-bottom', '95px');
    }
    $('.month_3').text($('.day_fs').text() + ' ' + $('.month_fs').text());
})
$('.modal_service_button').bind('click touch', function() {
    var modal_service_name = $('.modal_service_name').val();
    var modal_service_phone = $('.modal_service_phone').val();
    var modal_ask_question = $('#question').val();
    var flag_1_1 = 0;
    var flag_1_2 = 0;
    var flag_1_3 = 0;
    var error_1 = false;
    var ist = $("input[name='istochnik']").val();
    var utm_source = $("input[name='utm_source']").val();
    var utm_medium = $("input[name='utm_medium']").val();
    var utm_campaign = $("input[name='utm_campaign']").val();
    var utm_term = $("input[name='utm_term']").val();
    var utm_content = $("input[name='utm_content']").val();
    var utm_keyword = $("input[name='utm_keyword']").val();
    var str_perehoda = $("input[name='str_perehoda']").val();
    var metka = $("input[name='metka']").val();
    var ya_google = $("input[name='ya_google']").val();
    var marketdata = $("input[name='marketdata']").val();
    var utm = $("input[name='utm']").val();
    var site_form_id = $('.modal').find("input[name='site_form_id']").val();
    var comment_global = comment_2 + '\n' + modal_ask_question;
})
$('.service_button_1').bind('click touch', function() {
    var modal_service_name = $('.service_inp_1').val();
    var modal_service_phone = $('.service_inp_2').val();
    var flag_1_1 = 0;
    var flag_1_2 = 0;
    var error_1 = false;
    for (var i = 0; i < modal_service_name.length; i++)
        if (modal_service_name.charAt(i) != ' ') flag_1_1 = 1;
    if (flag_1_1 == 0) {
        $('.service_inp_1').css('border', '3px solid #fe3131');
        error_1 = true;
    } else {
        $('.service_inp_1').css('border', '3px solid #00cc33');
    }
    for (var i = 0; i < modal_service_phone.length; i++)
        if (modal_service_phone.charAt(i) != ' ') flag_1_2 = 1;
    if (flag_1_2 == 0) {
        $('.service_inp_2').css('border', '3px solid #fe3131');
        error_1 = true;
    } else {
        $('.service_inp_2').css('border', '3px solid #00cc33');
    }
    var ist = $("input[name='istochnik']").val();
    var utm_source = $("input[name='utm_source']").val();
    var utm_medium = $("input[name='utm_medium']").val();
    var utm_campaign = $("input[name='utm_campaign']").val();
    var utm_term = $("input[name='utm_term']").val();
    var utm_content = $("input[name='utm_content']").val();
    var utm_keyword = $("input[name='utm_keyword']").val();
    var str_perehoda = $("input[name='str_perehoda']").val();
    var metka = $("input[name='metka']").val();
    var ya_google = $("input[name='ya_google']").val();
    var marketdata = $("input[name='marketdata']").val();
    var utm = $("input[name='utm']").val();
    var comment_global = 'Поля ввода, которые в услугах';
    if (!error_1) {
        $.post("/action.php", {
            ima_kl: modal_service_name,
            telefon_lida: modal_service_phone,
            comment: comment_global,
            istochnik: ist,
            utm_source: utm_source,
            utm_medium: utm_medium,
            utm_campaign: utm_campaign,
            utm_term: utm_term,
            utm_content: utm_content,
            utm_keyword: utm_keyword,
            str_perehoda: str_perehoda,
            metka: metka,
            ya_google: ya_google,
            marketdata: marketdata,
            utm: utm,
        }, success_page());
    }
})
var summ_global = 0;
function dynamic_calc() {
    var square_1 = $('.text_inp_1').val();
    var price_1 = 2820;
    if ($('.fs_button').hasClass('kitchen_button')) {
        price_1 = 2700;
    }
    if ($('.fs_button').hasClass('house_button')) {
        price_1 = 3443;
    }
    if ($('.fs_button').hasClass('office_button')) {
        price_1 = 1696;
    }
    if ($('.fs_button').hasClass('bathroom_button')) {
        price_1 = 7694;
        //alert(square_1);
    }
    summ_global = String(Math.round(price_1 * square_1)).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    var percent = 0;
    if (price_1 * square_1 <= 50000) {
        percent = 0;
        summ_global_sale = String(Math.round(price_1 * square_1 - ((price_1 * square_1) / 100) * percent)).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    }
    else if (price_1 * square_1 >= 50000 && price_1 * square_1 <= 150000) {
        percent = 5;
        summ_global_sale = String(Math.round(price_1 * square_1 - ((price_1 * square_1) / 100) * percent)).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    } else if (price_1 * square_1 > 150000) {
        percent = 10;
        summ_global_sale = String(Math.round(price_1 * square_1 - ((price_1 * square_1) / 100) * percent)).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    }
    comment_1 = square_1 + ' метров, Вид: ' + $(".select_kind_1 option:selected").text() + ' , озвучить цену от ' + summ_global_sale;
}
dynamic_calc();
$('.text_inp_1').change(dynamic_calc);
$('.inp_range_1').bind('mousemove click touchmove touchend', dynamic_calc);
$('.checkbox_block').bind('mousemove click touchmove touchend', dynamic_calc);
$('.fs_button').bind('click touch', function() {
    document.cookie = "c=" + summ_global_sale + " ;expires=1";
    $('#fs_form').find($("input[name='comment']")).val(comment_1);
})
$('.fancybox-buttons_5').bind('mousemove', function(event) {
    var slider_width = String(((event.screenX - $('.fancybox-buttons_5').offset().left + 0.5) / ($(this).width() / 3.9) + 1)).substring(0, 1);
    $('.fancybox-buttons_5 > img').css('display', 'none');
    $('.fancybox-buttons_5 > .hidden_' + slider_width).css('display', 'block');
});
$(document).ready(function() {
    $('.fancybox').fancybox();
    $(".fancybox-effects-a").fancybox({
        helpers: {
            title: {
                type: 'outside'
            },
            overlay: {
                speedOut: 0
            }
        }
    });
    $(".fancybox-effects-b").fancybox({
        openEffect: 'none',
        closeEffect: 'none',
        helpers: {
            title: {
                type: 'over'
            }
        }
    });
    $(".fancybox-effects-c").fancybox({
        wrapCSS: 'fancybox-custom',
        closeClick: true,
        openEffect: 'none',
        helpers: {
            title: {
                type: 'inside'
            },
            overlay: {
                css: {
                    'background': 'rgba(238,238,238,0.85)'
                }
            }
        }
    });
    $(".fancybox-effects-d").fancybox({
        padding: 0,
        openEffect: 'elastic',
        openSpeed: 150,
        closeEffect: 'elastic',
        closeSpeed: 150,
        closeClick: true,
        helpers: {
            overlay: null
        }
    });
    for (var i = 1; i <= 31; i++) {
        $('.fancybox-buttons_' + i).fancybox({
            openEffect: 'none',
            closeEffect: 'none',
            prevEffect: 'none',
            nextEffect: 'none',
            closeBtn: false,
            helpers: {
                title: {
                    type: 'inside'
                },
                buttons: {}
            },
            afterLoad: function() {
                this.title = (this.title ? '  ' + this.title : ' ') + ' — ' + (this.index + 1) + ' из ' + this.group.length;
            }
        });
    }
    for (var i = 1; i <= 24; i++) {
        $('.fancybox-buttons_thank_' + i).fancybox({
            openEffect: 'none',
            closeEffect: 'none',
            prevEffect: 'none',
            nextEffect: 'none',
            closeBtn: false,
            helpers: {
                title: {
                    type: 'inside'
                },
                buttons: {}
            },
            afterLoad: function() {
                this.title = ' ';
            }
        });
    }
    for (var i = 1; i <= 24; i++) {
        $('.fancybox-buttons_thank_0' + i).fancybox({
            openEffect: 'none',
            closeEffect: 'none',
            prevEffect: 'none',
            nextEffect: 'none',
            closeBtn: false,
            helpers: {
                title: {
                    type: 'inside'
                },
                buttons: {}
            },
            afterLoad: function() {
                this.title = ' ';
            }
        });
    }
    for (var i = 1; i <= 12; i++) {
        $('.fancybox-buttons_movie_' + i).fancybox({
            openEffect: 'none',
            closeEffect: 'none',
            prevEffect: 'none',
            nextEffect: 'none',
            closeBtn: false,
            helpers: {
                title: {
                    type: 'inside'
                },
                buttons: {}
            },
            afterLoad: function() {
                this.title = ' ';
            }
        });
    }
    $('.fancybox-thumbs').fancybox({
        prevEffect: 'none',
        nextEffect: 'none',
        closeBtn: false,
        arrows: false,
        nextClick: true,
        helpers: {
            thumbs: {
                width: 50,
                height: 50
            }
        }
    });
    $('.fancybox-media').attr('rel', 'media-gallery').fancybox({
        openEffect: 'none',
        closeEffect: 'none',
        prevEffect: 'none',
        nextEffect: 'none',
        arrows: false,
        helpers: {
            media: {},
            buttons: {}
        }
    });
    $("#fancybox-manual-a").click(function() {
        $.fancybox.open('1_b.jpg');
    });
    $("#fancybox-manual-b").click(function() {
        $.fancybox.open({
            href: 'iframe.html',
            type: 'iframe',
            padding: 5
        });
    });
    $("#fancybox-manual-c").click(function() {
        $.fancybox.open([{
            href: '1_b.jpg',
            title: 'My title'
        }, {
            href: '2_b.jpg',
            title: '2nd title'
        }, {
            href: '3_b.jpg'
        }], {
            helpers: {
                thumbs: {
                    width: 75,
                    height: 50
                }
            }
        });
    });
});
ymaps.ready(init);
var myMap, myPlacemark;
function init() {
    myMap = new ymaps.Map("map", {
        center: [55.89, 37.6385],
        zoom: 16
    });
    myPlacemark = new ymaps.Placemark([55.890048, 37.639761], {
        balloonContent: 'Русский Ремонт<br>+7 (495) 266-44-85<br>09:00 - 22:00, без выходных'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/placemark.png',
        iconImageSize: [38, 50],
        iconImageOffset: [-10, -50]
    });
    myMap.geoObjects.add(myPlacemark);
}
$('body').activity({
'achieveTime':60
,'testPeriod':10
,useMultiMode: 1
,callBack: function (e) {
ga('send', 'event', 'Activity', '60_sec');
yaCounter41071394.reachGoal('activity60');
}
});