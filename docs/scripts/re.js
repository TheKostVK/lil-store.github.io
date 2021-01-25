 /*!
  * jQuery Cookie Plugin v1.4.1
  * https://github.com/carhartl/jquery-cookie
  *
  * Copyright 2006, 2014 Klaus Hartl
  * Released under the MIT license
  */
 (function (factory) {
 	if (typeof define === 'function' && define.amd) {
 		define(['jquery'], factory);
 	} else if (typeof exports === 'object') {
 		module.exports = factory(require('jquery'));
 	} else {
 		factory(jQuery);
 	}
 }(function ($) {
 	var pluses = /\+/g;

 	function encode(s) {
 		return config.raw ? s : encodeURIComponent(s);
 	}

 	function decode(s) {
 		return config.raw ? s : decodeURIComponent(s);
 	}

 	function stringifyCookieValue(value) {
 		return encode(config.json ? JSON.stringify(value) : String(value));
 	}

 	function parseCookieValue(s) {
 		if (s.indexOf('"') === 0) {
 			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
 		}
 		try {
 			s = decodeURIComponent(s.replace(pluses, ' '));
 			return config.json ? JSON.parse(s) : s;
 		} catch (e) {}
 	}

 	function read(s, converter) {
 		var value = config.raw ? s : parseCookieValue(s);
 		return $.isFunction(converter) ? converter(value) : value;
 	}
 	var config = $.cookie = function (key, value, options) {
 		if (arguments.length > 1 && !$.isFunction(value)) {
 			options = $.extend({}, config.defaults, options);
 			if (typeof options.expires === 'number') {
 				var days = options.expires,
 					t = options.expires = new Date();
 				t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
 			}
 			return (document.cookie = [encode(key), '=', stringifyCookieValue(value), options.expires ? '; expires=' + options.expires.toUTCString() : '', options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join(''));
 		}
 		var result = key ? undefined : {},
 			cookies = document.cookie ? document.cookie.split('; ') : [],
 			i = 0,
 			l = cookies.length;
 		for (; i < l; i++) {
 			var parts = cookies[i].split('='),
 				name = decode(parts.shift()),
 				cookie = parts.join('=');
 			if (key === name) {
 				result = read(cookie, value);
 				break;
 			}
 			if (!key && (cookie = read(cookie)) !== undefined) {
 				result[name] = cookie;
 			}
 		}
 		return result;
 	};
 	config.defaults = {};
 	$.removeCookie = function (key, options) {
 		$.cookie(key, '', $.extend({}, options, {
 			expires: -1
 		}));
 		return !$.cookie(key);
 	};
 }));
 $(document).ready(function () {
 	function get(data, day) {
 		data = data.split('/');
 		data = new Date(data[2], +data[1] - 1, +data[0] - day, 0, 0, 0, 0);
 		data = [data.getDate(), data.getMonth() + 1, data.getFullYear()];
 		data = data.join('/').replace(/(^|\/)(\d)(?=\/)/g, "$10$2");
 		return data
 	}
 	var c;
 	var ta = new Date();
 	var a;
 	D = ta.getDate();
 	c = -1;
 	myincermant = 0;
 	$(".comment__date").each(function (index) {
 		a = $(this).text();
 		Data = new Date();
 		Hour = Data.getHours();
 		if (index < 4) {
 			do {
 				c = Math.round(Math.random() * (23 - 0) + 0);
 				b = Hour - c;
 			} while (b < 0);
 		} else
 			b = Math.round(Math.random() * (23 - 0) + 0);
 		g = Math.round(Math.random() * (60 - 1) + 1);
 		a = a.replace(/,/g, " ");
 		a = a.match(/[^ -]+/g).splice(1, 2);
 		c = c + 1;
 		if (c == 4) {
 			myincermant = myincermant + 1;
 			c = 0;
 		}
 		if (b < 10)
 			b = '0' + b;
 		if (g < 10)
 			g = '0' + g;
 		$(this).html(a + " " + get(ta.getDate() + "/" + (ta.getMonth() + 1) + "/" + ta.getFullYear(), myincermant) + " в " + b + ":" + g);
 	});
 	var randimg = Math.round(Math.random() * (30 - 1) + 1);
 	$('.my_comment_text_cont img').attr("src", "//gabenstore.ru/images/avatar/1.jpg");
 	var day = new Date();
 	$('#my_comment_submit').click(function () {
 		if ($('.my_comment_textarea').val() == '' || $('.my_comment_name').val() == '')
 			$('#mycomment').text('Введите комментарий или имя!');
 		else {
 			$.cookie('mycoockieindex', '1', {
 				expires: 7
 			});
 			$.cookie('name', $('.my_comment_textarea').val(), {
 				expires: 7
 			});
 			$.cookie('komment', $('.my_comment_name').val(), {
 				expires: 7
 			});
 			$.cookie('myday', day.toDateString(), {
 				expires: 7
 			});
 			$.cookie('vremya', day.toLocaleTimeString(), {
 				expires: 7
 			});
 			$.cookie('randimgm', randimg, {
 				expires: 7
 			});
 			$('#my_comment_submit').attr('disabled', 'disabled');
 			$('#comments2').prepend(`<div class="comms-list__comm-wr " style="">
    <div class="comment">
                    <div class="avatar">
                <span class="avatar__img">
                    <img src="//gabenstore.ru/images/avatar/1.jpg" alt="">
                </span>
                <!--span class="avatar__soc avatar__soc--fb"></span-->
            </div>
                <div class="comment__main" style="">
            <div class="comment__speech">
                <p>
       ` + $.cookie('name') + `            </p>
            </div>

            <div class="comment__bot">
                <span class="comment__date">` + $.cookie('komment') + ` ` + $.cookie('myday') + ` в ` + $.cookie('vremya') + `</span>

                            </div>
        </div>
    </div>
            <div class="comms-list__comm-wr">
                    </div>
    </div>`);
 		}
 	});
 	if ($.cookie('mycoockieindex') == '1') {
 		$('#my_comment_submit').attr('disabled', 'disabled');
 		$('#mycomment').text('Вы уже оставили отзыв.');
 		$('#comments2').prepend(`<div class="comms-list__comm-wr " style="">
    <div class="comment">
                    <div class="avatar">
                <span class="avatar__img">
                    <img src="//gabenstore.ru/images/avatar/1.jpg" alt="">
                </span>
                <!--span class="avatar__soc avatar__soc--fb"></span-->
            </div>
                <div class="comment__main" style="">
            <div class="comment__speech">
                <p>
       ` + $.cookie('name') + `            </p>
            </div>

            <div class="comment__bot">
                <span class="comment__date">` + $.cookie('komment') + ` ` + $.cookie('myday') + ` в ` + $.cookie('vremya') + `</span>

                            </div>
        </div>
    </div>
            <div class="comms-list__comm-wr">
                    </div>
    </div>`);
 	}
 	$('.btn--more').click(function () {
 		$('.hidden-comment').css('display', 'block');
 		$(this).css('display', 'none');
 	});
 });
