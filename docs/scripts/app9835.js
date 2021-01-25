 function scrollTo(t, e, s) {
 	if (t) {
 		var n = "number" != typeof t ? t.offset().top : t,
 			e = e || 700;
 		s || (n -= $HEADER.outerHeight()), $("html,body").animate({
 			scrollTop: n
 		}, e)
 	}
 }

 function elemInView(t, e) {
 	if ($(t).length) {
 		var s = $(t),
 			n = e || .9,
 			i = $(document).scrollTop(),
 			a = s.offset().top,
 			o = $(window).height(),
 			r = a - o * n,
 			l = a + s.height() * n;
 		return i > r && l > i
 	}
 }! function (t) {
 	t.fn.removeClassWild = function (t) {
 		return this.removeClass(function (e, s) {
 			var n = t.replace(/\*/g, "\\S+");
 			return (s.match(new RegExp("\\b" + n, "g")) || []).join(" ")
 		})
 	}
 }(jQuery), $(function () {
 		function t(t) {
 			setTimeout(function () {
 				t.hasClass("has-error") && $W.resize()
 			}, 200)
 		}

 		function e() {
 			d = r.find("._active").height(), r.animate({
 				height: d
 			}, 400)
 		}
 		var s = $(".js-steps");
 		if (s.length) {
 			var s = $(".js-steps"),
 				n = $(".form-group.required"),
 				i = $(".form-group.required input"),
 				a = s.find(".js-steps-line"),
 				o = a.find(".js-steps-row-clone"),
 				r = s.find(".js-steps-block"),
 				l = s.find(".steps-block__item"),
 				c = a.find(".js-steps-row").width(),
 				d = r.find("._active").height();
 			o.find(".steps-line__row").width(c), s.hasClass("_step0") ? (r.find(".steps-block__item:nth-child(1)").addClass("_active"), d = r.find("._active").height(), setTimeout(function () {
 				s.removeClass("_step0").addClass("_step1"), r.css("height", d)
 			}, 500)) : s.hasClass("_step1") ? (r.find(".steps-block__item:nth-child(2)").addClass("_active"), d = r.find("._active").height(), setTimeout(function () {
 				s.removeClass("_step1").addClass("_step2"), r.css("height", d)
 			}, 500)) : s.hasClass("_step2") ? (r.find(".steps-block__item:nth-child(3)").addClass("_active"), d = r.find("._active").height(), setTimeout(function () {
 				s.removeClass("_step2").addClass("_step3"), r.css("height", d)
 			}, 500)) : s.hasClass("_step3") && (r.find(".steps-block__item:nth-child(4)").addClass("_active"), d = r.find("._active").height());
 			var u = function (t) {
 				var e;
 				t ? (e = l.eq(t - 1), s.removeClassWild("_step*").addClass("_step" + t)) : e = r.find("._active").next(".steps-block__item"), r.find("._active").removeClass("_active"), e.addClass("_active"), d = e.height(), r.animate({
 					height: d
 				}, {
 					duration: 400,
 					complete: function () {}
 				})
 			};
 			$(".js-buy-step-btn").bind("click", function (t) {
 				var e = $(this).data("step");
 				u(e), t.preventDefault()
 			}), $("#steps-block1").submit(function (t) {
 				s.hasClass("_step1") && (n.length ? n.hasClass("has-success") && (s.removeClass("_step1").addClass("_step2"), u()) : (s.removeClass("_step1").addClass("_step2"), u()), t.preventDefault())
 			}), $(".js-buy-step").click(function () {
 				if (s.hasClass("_step2")) {
 					var t = s.offset().top - 150;
 					return s.removeClass("_step2").addClass("_step3"), setTimeout(function () {
 						$("html,body").animate({
 							scrollTop: t
 						}, 500)
 					}, 200), u(), !1
 				}
 			}), i.bind("input blur", function () {
 				var e = $(this).parents(".form-group.required");
 				t(e)
 			});
 			var f;
 			$(window).resize(function () {
 				c = a.find(".js-steps-row").width(), o.find(".steps-line__row").width(c), clearTimeout(f), f = setTimeout(e, 100)
 			}), $W.resize()
 		}
 	}), $(function () {
 		var t = $(".js-payment-types");
 		if (t.length) {
 			var e = t.find(".payment-types__item");
 			e.click(function () {
 				var t = $(this),
 					s = t.find("input");
 				return t.addClass("_checked"), e.not(this).removeClass("_checked"), console.log(s.length), s.length && s.prop("checked", !0), !1
 			})
 		}
 	}),
 	function (t) {
 		t.fn.catTabs = function () {
 			t(this).each(function () {
 				function e(e) {
 					var s;
 					return t.ajax({
 						type: "GET",
 						url: e,
 						async: !1,
 						success: function (t) {
 							s = t
 						}
 					}), s
 				}

 				function s(e) {
 					var s = $W.scrollTop(),
 						n = a.filter("._active"),
 						i = n.find(".js-prod"),
 						o = e || .8;
 					i.each(function () {
 						var e = t(this);
 						(elemInView(e.parent(), o) || s > e.offset().top) && e.addClass("_animated")
 					})
 				}
 				var n = t(this),
 					i = n.find(".js-pr-cat-btn"),
 					a = n.find(".js-pr-cat-tab");
 				i.bind("click", function (s) {
 					var n, o = t(this),
 						r = o.data("url"),
 						l = o.parent().index(),
 						c = a.eq(l);
 					"" === c.text().trim() && (n = e(r), c.html(n).find(".js-countdown").countdown()), a.removeClass("_active").find(".js-prod").removeClass("_animated"), c.addClass("_active"), i.removeClass("_active").parent().removeClass("_active"), o.addClass("_active").parent().addClass("_active"), $W.scroll()
 				}), $W.scroll(function () {
 					s()
 				}), s(1)
 			})
 		}
 	}(jQuery), $(function () {
 		var t = $(".js-catalog-tabs");
 		t.length && t.catTabs()
 	}),
 	function (t) {
 		t.fn.dropdown = function () {
 			t(this).each(function () {
 				var e = t(this),
 					s = e.find(".js-dropdown-btn");
 				s.bind("click", function () {
 					e.toggleClass("_active")
 				}), $W.bind("click", function (s) {
 					var n = t(s.target),
 						i = e.hasClass("_active") && !n.closest(e).length;
 					i && e.removeClass("_active")
 				})
 			})
 		}
 	}(jQuery),
 	function (t) {
 		t.fn.rangeInputsOne = function () {
 			t(this).each(function () {
 				function e(t) {
 					var e = n.data("min-value"),
 						s = n.data("max-value"),
 						o = Number(t[0]).toFixed(),
 						r = Number(t[1]).toFixed(),
 						l = (o - e) / (.01 * (s - e)) + "%",
 						c = (r - e) / (.01 * (s - e)) + "%";
 					i.css("left", l).find(".js-ranges-txt-value").text(o), i.find("input").val(o), a.css("left", c).find(".js-ranges-txt-value").text(r), a.find("input").val(r)
 				}
 				var s, n = t(this),
 					i = n.find(".js-ranges-start"),
 					a = n.find(".js-ranges-end"),
 					o = n.data("step") || 1,
 					r = n.data("min-value"),
 					l = n.data("max-value"),
 					c = n.data("start") || r,
 					d = n.data("end") || l;
 				noUiSlider.create(n[0], {
 					start: [c],
 					connect: !1,
 					range: {
 						min: r,
 						max: l
 					},
 					step: o,
 					animate: !1
 				}), s = n[0].noUiSlider, e(s.get()), n[0].noUiSlider.on("update", function (t, s) {
 					e(t)
 				})
 			})
 		}
 	}(jQuery),
 	function (t) {
 		t.fn.rangeInputs = function () {
 			t(this).each(function () {
 				function e(t) {
 					var e = n.data("min-value"),
 						s = n.data("max-value"),
 						o = Number(t[0]).toFixed(),
 						r = Number(t[1]).toFixed(),
 						l = (o - e) / (.01 * (s - e)) + "%",
 						c = (r - e) / (.01 * (s - e)) + "%";
 					i.css("left", l).find(".js-ranges-txt-value").text(o), i.find("input").val(o), a.css("left", c).find(".js-ranges-txt-value").text(r), a.find("input").val(r)
 				}
 				var s, n = t(this),
 					i = n.find(".js-ranges-start"),
 					a = n.find(".js-ranges-end"),
 					o = n.data("step") || 1,
 					r = n.data("min-value"),
 					l = n.data("max-value"),
 					c = n.data("start") || r,
 					d = n.data("end") || l;
 				noUiSlider.create(n[0], {
 					start: [c, d],
 					connect: !1,
 					range: {
 						min: r,
 						max: l
 					},
 					step: o,
 					animate: !1
 				}), s = n[0].noUiSlider, e(s.get()), n[0].noUiSlider.on("update", function (t, s) {
 					e(t)
 				})
 			})
 		}
 	}(jQuery), $(function () {
 		var t = $(".js-dropdown");
 		t.length && t.dropdown()
 	}), $(function () {
 		var t = $(".js-ranges");
 		t.length && t.rangeInputs()
 	}), $(function () {
 		var t = $(".js-ranges-one");
 		t.length && t.rangeInputsOne()
 	}), $(function () {
 		var t = $(".js-filter"),
 			e = $(".js-catalog-wr");
 		if (t.length || e.length) {
 			var s = $W.scrollTop();
 			$W.scroll(function () {
 				var n = $W.scrollTop(),
 					i = e.offset().top,
 					a = t.outerHeight(),
 					o = i + parseInt(a) + 100;
 				s > o ? ($B.addClass("_filter-fix"), e.css("padding-top", a), s > n ? $B.addClass("_scrolling-up") : ($B.removeClass("_scrolling-up"), $(".js-dropdown").removeClass("_active"))) : ($B.removeClass("_filter-fix _scrolling"), e.css("padding-top", "")), s = n
 			})
 		}
 	}), $(function () {
 		function t(t) {
 			var e = o.find("*").not('[name="_csrf"]').serialize();
 			if (t) {
 				var s = $(".js-live-search_input"),
 					n = s.attr("name"),
 					i = s.val();
 				e += "&" + n + "=" + i
 			}
 			return e
 		}

 		function e(e, o, l) {
 			var d = t(o),
 				f = !0;
 			void 0 != l && (f = l);
 			var p = function () {
 				$.ajax({
 					type: "GET",
 					url: C,
 					data: d,
 					success: function (t) {
 						var e = JSON.parse(t),
 							o = e.founded,
 							r = e.itemsLeft,
 							l = e.priceRange,
 							p = e.paramStatuses;
 						!o || 0 >= o ? c.addClass("_empty") : c.removeClass("_empty"), r ? c.removeClass("_no-more-items") : c.addClass("_no-more-items"), S(o), u.html(e.html), s(l), n(p), a(), f && i(d)
 					}
 				})
 			};
 			clearInterval(r), r = setTimeout(function () {
 				p()
 			}, e || 0)
 		}

 		function s(t) {
 			m = !1, p.data("min-value", t[0]), p.data("max-value", t[1]), h.updateOptions({
 				range: {
 					min: t[0],
 					max: t[1]
 				}
 			}), m = !0
 		}

 		function n(t) {
 			$.each(t, function (t) {
 				for (var e = this, s = t, n = g.filter('[data-p-name="' + s + '"]'), i = n.find(".js-param-chkb"), a = 0; a < i.length; a++) {
 					var o = i.eq(a),
 						r = o.parents("label"),
 						l = o.val(),
 						c = e[l];
 					l in e && (c ? (o.prop("disabled", !1), r.removeClass("_disabled")) : (o.prop("checked", !1).prop("disabled", !0), r.addClass("_disabled")))
 				}
 			})
 		}

 		function i(t) {
 			Modernizr.history && (console.log("pushstate?"), history.pushState({}, "Search", "?" + t))
 		}

 		function a(t) {
 			var e = c.find(".js-prod"),
 				s = $W.scrollTop(),
 				n = t || .8;
 			e.each(function () {
 				var t = $(this);
 				(elemInView(t.parent(), n) || s > t.offset().top) && t.addClass("_animated")
 			})
 		}
 		var o = $(".js-catalog-form");
 		if (o.length) {
 			var r, l = $(".js-catalog-wr"),
 				c = $(".js-catalog"),
 				d = $(".js-filter"),
 				u = $(".js-catalog-loadout"),
 				f = $(".js-catalog_more-btn"),
 				p = l.find(".js-ranges"),
 				h = p[0].noUiSlider,
 				m = !0,
 				v = 0,
 				g = d.find(".js-filter-param"),
 				_ = d.find(".js-filter-apply-btn"),
 				j = $(".js-sorting"),
 				b = j.find(".js-sorting_btn"),
 				k = j.find(".js-sorting_way-input"),
 				w = $(".js-sorting_result-counter"),
 				C = o.attr("action"),
 				y = f.data("url"),
 				T = window.location.search,
 				S = function (t) {
 					var e = t + " ",
 						s = t[t.length - 1];
 					e += 1 == s && 11 != t ? "игра" : (2 == s || 3 == s || 4 == s) && 12 >= t && t >= 14 ? "игры" : "игр", w.text(e)
 				},
 				O = function () {
 					return l.find(".js-prod").length
 				};
 			"scrollRestoration" in history && (history.scrollRestoration = "manual"), window.addEventListener("popstate", function (t) {
 				if (console.log("popstate func!"), o) {
 					var s = window.location.search;
 					s && s != T && (e(0, !0, !1), T = s, console.log("popstate happens"))
 				}
 			}, !1), h.on("update", function () {
 				return m && 2 == v ? void e(400, !0) : void(2 != v && (v += 1))
 			}), b.bind("click", function () {
 				var t = $(this),
 					s = t.find("input"),
 					n = t.hasClass("_active"),
 					i = t.hasClass("_reverse");
 				n ? i ? (t.removeClass("_reverse"), k.val("asc")) : (t.addClass("_reverse"), k.val("desc")) : (b.removeClass("_active"), t.addClass("_active").removeClass("_reverse"), s.prop("checked", !0), k.val("asc")), e(0, !0)
 			}), _.bind("click", function () {
 				e(0, !0), $(this).parents(".js-dropdown").removeClass("_active")
 			}), _GLOB.catalogSendForm = e, f.bind("click", function () {
 				var e = t(),
 					s = O();
 				e += "&loaded=" + s, $.ajax({
 					type: "GET",
 					url: y,
 					data: e,
 					success: function (t) {
 						var e = JSON.parse(t),
 							s = e.html,
 							n = e.itemsLeft;
 						n ? c.removeClass("_no-more-items") : c.addClass("_no-more-items"), u.append(s), a()
 					}
 				})
 			}), $W.scroll(function () {
 				a()
 			}), a(1)
 		}
 	}), $(function () {
 		function t(t, e) {
 			var s = t.parents(".js-comment").data("id");
 			return _GLOB.userActionsTimeout ? !1 : void $.ajax({
 				type: "POST",
 				url: d,
 				data: {
 					id: s,
 					blockId: l
 				},
 				success: function (e) {
 					var s = JSON.parse(e),
 						n = s.status,
 						i = s.manyActions;
 					n ? t.addClass("_active") : t.removeClass("_active"), i && _GLOB.setUserActionsTimeout()
 				}
 			})
 		}

 		function e(t, e) {
 			var s = t.parents(".js-comment");
 			return s.siblings(".js-comments-form").length ? !1 : ($(".js-comms-list .js-comments-form").remove(), s.after(a[0].outerHTML), void $W.bind("click", function (e) {
 				var s = $(e.target);
 				s.closest(t.parents(".comms-list__comm-wr")).length || s.closest(".js-comment_reply-btn").length || ($(".js-comms-list .js-comments-form").remove(), $W.unbind())
 			}))
 		}

 		function s(t, e, s) {
 			var n = t.find("textarea").val(),
 				i = {
 					comment: n,
 					blockId: l
 				};
 			return n.length < 3 ? (e.preventDefault(), !1) : (s && (i.id = s), $.ajax({
 				type: "POST",
 				url: c,
 				data: i,
 				success: function (e) {
 					var s = JSON.parse(e),
 						n = s.html,
 						i = s.manyActions;
 					i && _GLOB.setUserActionsTimeout(), n && (t.parents(".js-comms-list").length ? (t.parents(".comms-list__comm-wr").append(n), t.remove()) : $(".js-comms-list").prepend(n))
 				}
 			}), e.preventDefault(), !1)
 		}

 		function n(t, e) {
 			var s = i.find(".js-comment").length;
 			$.ajax({
 				type: "GET",
 				url: t,
 				data: {
 					loaded: s,
 					blockId: l
 				},
 				success: function (t) {
 					var e = JSON.parse(t),
 						s = e.html,
 						n = e.itemsLeft;
 					r.append(s), n && o.hide(), manyActions && _GLOB.setUserActionsTimeout()
 				}
 			})
 		}
 		var i = $(".js-comments-list");
 		if (i.length) {
 			var a = i.find(".js-comments-form"),
 				o = i.find(".js-comms-more"),
 				r = i.find(".js-comms-list"),
 				l = i.data("comms-group-id"),
 				c = i.data("url"),
 				d = i.data("likes-url");
 			$D.on("click", ".js-comment_like-btn", function (e) {
 				t($(this), e)
 			}), $D.on("click", ".js-comment_reply-btn", function (t) {
 				e($(this), t)
 			}), $D.on("submit", ".js-comments-form", function (t) {
 				s($(this), t)
 			}), o.bind("click", function (t) {
 				var e = $(this).data("url");
 				n(e, t)
 			})
 		}
 	}),
 	function (t) {
 		t.fn.imgSimpleUpload = function (e) {
 			var s = t(this),
 				n = s.find('input[type="file"]'),
 				i = s.data("min-w"),
 				a = s.data("min-w");
 			n.bind("change input", function (t) {
 				var o = new FileReader,
 					r = n[0].files[0];
 				o.onload = function (t) {
 					return function (t) {
 						var o = t.target.result,
 							r = new Image;
 						return r.src = o, r.width || r.height ? r.width < i && r.height < a ? (n.val(""), void s.after('<p class="help-block help-block-error">Неверный размер изображения, минимальный размер' + i + "x" + a + "</p>")) : (s.siblings(".help-block").remove(), "bg" == e.type && s.css("background-image", "url('" + o + "')"), "img" == e.type && s.html('<img src="' + o + '">'), void s.addClass("_loaded")) : (s.after('<p class="help-block help-block-error">Неверный формат файла, загрузить можно только изображения.</p>'), void n.val(""))
 					}
 				}(r), o.readAsDataURL(r)
 			})
 		}
 	}(jQuery),
 	function (t) {
 		t.fn.onlyListedKeys = function (e) {
 			t(this).each(function () {
 				var s = t(this),
 					n = s.val();
 				s.bind("change input", function () {
 					var t = s.val();
 					e.test(t) ? n = t : s.val(n)
 				})
 			})
 		}
 	}(jQuery), $(function () {
 		var t = $(".js-ava-upload");
 		t.length && t.each(function () {
 			var t = $(this);
 			$(this).imgSimpleUpload({
 				target: t,
 				type: "bg"
 			})
 		})
 	}), $(function () {
 		var t = $(".js-only-digits");
 		t.length && t.onlyListedKeys(/^([0-9](\.)?(-)?(,)?){0,}$/)
 	}), $(function () {
 		var t = $(".js-mob-btn"),
 			e = $(".js-search-toggle");
 		t.bind("click", function (t) {
 			$B.toggleClass("_mob-menu-open")
 		}), e.bind("click", function (t) {
 			$B.toggleClass("_mob-search-open")
 		})
 	}), $(function () {
 		function t() {
 			var t = $W.scrollTop();
 			t > 250 ? $B.hasClass("_scrolled") || $B.addClass("_scrolled") : $B.removeClass("_scrolled")
 		}
 		t(), $W.scroll(function () {
 			t()
 		})
 	}),
 	function (t) {
 		t.fn.liveSearch = function () {
 			t(this).each(function () {
 				function e() {
 					var e = i.serialize();
 					t.ajax({
 						type: "GET",
 						url: d,
 						data: e,
 						success: function (t) {
 							var e = JSON.parse(t);
 							o.addClass("_active"), r.html(e.html), e.url ? (o.removeClass("_no-results"), l.attr("href", e.url)) : (o.addClass("_no-results"), l.attr("href", ""))
 						}
 					})
 				}
 				var s, n = t(this),
 					i = n.find("form"),
 					a = n.find(".js-live-search_input"),
 					o = (n.find(".js-live-search_btn"), n.find(".js-live-search_loadout-wr")),
 					r = n.find(".js-live-search_loadout"),
 					l = n.find(".js-live-search_all-link"),
 					c = n.data("delay") || 300,
 					d = n.data("url");
 				a.bind("input", function () {
 					var n = t(this).val();
 					return clearTimeout(s), n.length < 2 ? void o.removeClass("_active") : void(s = setTimeout(function () {
 						e(n)
 					}, c))
 				}), i.on("submit", function (e) {
 					return t(".js-catalog-form").length ? (_GLOB.catalogSendForm(0, !0), e.preventDefault(), !1) : void 0
 				}), $W.bind("click", function (e) {
 					var s = t(e.target);
 					s.closest(n).length || o.removeClass("_active")
 				})
 			})
 		}
 	}(jQuery), $(function () {
 		var t = $(".js-live-search");
 		t.length && t.liveSearch()
 	}), $(function () {
 		var t = $(".js-gall");
 		if (t.length) {
 			var e = {},
 				s = 0,
 				n = $(".js-pswp")[0],
 				i = {
 					index: 0
 				};
 			$.each(t, function () {
 				var t, n, i = $(this),
 					a = i.data("gall-gr"),
 					o = i.attr("href") || i.data("href"),
 					r = i.data("width"),
 					l = i.data("height"),
 					c = i.find("img");
 				a || (a = s, i.data("gall-gr", s), s++), e[a] || (e[a] = []), c.length && (t = c[0].naturalWidth, n = c[0].naturalHeight), e[a].push({
 					src: o,
 					w: r || t || 600,
 					h: l || n || 400
 				})
 			}), $D.on("click", ".js-gall", function (s) {
 				var a, o = $(this),
 					r = o.data("gall-gr");
 				o.attr("href") || o.data("href");
 				return i.index = t.filter('[data-gall-gr="' + r + '"]').index(o), a = new PhotoSwipe(n, PhotoSwipeUI_Default, e[r], i), a.init(), s.preventDefault(), !1
 			})
 		}
 	}), $(function () {
 		var t = $(".js-video-popup");
 		t.length && t.magnificPopup({
 			disableOn: 700,
 			type: "iframe",
 			mainClass: "mfp-fade",
 			removalDelay: 160,
 			preloader: !1,
 			fixedContentPos: !1
 		})
 	});
 var $W = $(window),
 	$D = $(document),
 	$H = $("html"),
 	$B = $("body"),
 	$HEADER = $(".js-header"),
 	_GLOB = {
 		breakpoints: {
 			xl: 1800,
 			ll: 1500,
 			ls: 1380,
 			m: 1288,
 			mm: 1168,
 			ms: 1020,
 			sl: 960,
 			sm: 860,
 			s: 767,
 			ss: 630,
 			xs: 480
 		},
 		userActionsTimeout: !1,
 		userActionsDisableDuration: 2e4,
 		setUserActionsTimeout: function () {
 			_GLOB.userActionsTimeout = setTimeout(function () {
 				clearTimeout(_GLOB.userActionsTimeout), _GLOB.userActionsTimeout = !1
 			}, _GLOB.userActionsDisableDuration)
 		}
 	};
 ! function (t) {
 	t.fn.scrollTrigger = function (e) {
 		var s = 700,
 			e = e || "";
 		t(this).each(function () {
 			var n = t(this);
 			e.speed && (s = e.speed), n.bind("click", function (i) {
 				var a = n.attr("href") || n.data("href");
 				"number" != typeof a && (a = t(a), e.margin && (a = a.offset().top - parseInt(a.css("margin-top")))), e && e.callbackBefore && e.callbackBefore(), scrollTo(a, s), e && e.callbackAfter && e.callbackAfter(), i.preventDefault()
 			})
 		})
 	}
 }(jQuery),
 function (t) {
 	t.fn.tabs = function () {
 		t(this).each(function () {
 			function e(t) {
 				i.removeClass("_active").eq(t).addClass("_active"), n.removeClass("_active").eq(t).addClass("_active")
 			}
 			var s = t(this),
 				n = s.find(".js-tabs-btn"),
 				i = s.find(".js-tabs-tab");
 			n.bind("click", function () {
 				var s = t(this).index();
 				e(s)
 			})
 		})
 	}
 }(jQuery),
 function (t) {
 	t.fn.countdown = function () {
 		t(this).each(function (e) {
 			function s() {
 				var t = new Date,
 					e = (u - t) / 1e3,
 					s = Math.floor(e % 60),
 					a = Math.floor(e / 60 % 60),
 					o = Math.floor(e / 60 / 60),
 					r = "";
 				0 >= e ? (r = "окончено", clearInterval(n)) : (o > 99 && (o = 99), 1 == String(s).length && (s = "0" + s), 1 == String(a).length && (a = "0" + a), 1 == String(o).length && (o = "0" + o), r = o + l + a + l + s), i.text(r)
 			}
 			var n, i = t(this),
 				a = i.data("final"),
 				o = a.split(" ")[0],
 				r = a.split(" ")[1],
 				l = ":",
 				c = o.split("."),
 				d = r.split(":"),
 				u = new Date(c[2], parseInt(c[1]) - 1, c[0], d[0], d[1]);
 			s(), n = setInterval(function () {
 				s()
 			}, 1e3)
 		})
 	}
 }(jQuery),
 function (t) {
 	t.fn.countdownNods = function () {
 		t(this).each(function (e) {
 			function s() {
 				var t = new Date,
 					e = (h - t) / 1e3,
 					s = Math.floor(e % 60),
 					c = Math.floor(e / 60 % 60),
 					d = Math.floor(e / 60 / 60) % 24,
 					u = Math.floor(e / 60 / 60 / 24);
 				0 >= e ? (i.html('<p class="h3">Окончено</p>'), clearInterval(n)) : (1 == String(s).length && (s = "0" + s), 1 == String(c).length && (c = "0" + c), 1 == String(d).length && (d = "0" + d), 1 == String(u).length && (u = "0" + u), a.text(u), o.text(d), r.text(c), l.text(s))
 			}
 			var n, i = t(this),
 				a = i.find(".js-cd-days"),
 				o = i.find(".js-cd-hours"),
 				r = i.find(".js-cd-mins"),
 				l = i.find(".js-cd-secs"),
 				c = i.data("final"),
 				d = c.split(" ")[0],
 				u = c.split(" ")[1],
 				f = d.split("."),
 				p = u.split(":"),
 				h = new Date(f[2], parseInt(f[1]) - 1, f[0], p[0], p[1]);
 			console.log(f[1]), s(), n = setInterval(function () {
 				s()
 			}, 1e3)
 		})
 	}
 }(jQuery), $(function () {
 		var t = $(".js-scroll-trigger");
 		t.length && t.scrollTrigger()
 	}), $(function () {
 		var t = $(".js-tabs");
 		t.length && t.tabs({})
 	}), $(function () {
 		var t = $(".js-hide-bl-btn");
 		t.length && $D.on("click", ".js-hide-bl-btn", function () {
 			var t = $(this),
 				e = t.parents(".js-hide-bl"),
 				s = e.hasClass("_active");
 			e.toggleClass("_active"), s ? t.text("Показать все") : t.text("Скрыть")
 		})
 	}), $(function () {
 		var t = $(".js-countdown");
 		t.length && t.countdown();
 		setInterval(function () {
 			var t = $(".js-countdown");
 			t.length && t.countdown();
 		}, 1000);
 	}), $(function () {
 		var t = $(".js-countdown-nods");
 		t.length && t.countdownNods()
 	}), $(function () {
 		var t = $(".js-p404");
 		t.length && t.addClass("_animation")
 	}), $(function () {
 		var t = $(".js-popup-btn");
 		_GLOB.closerReference = '<span class="mfp-close popup__closer js-popup_closer"></span>', t.magnificPopup({
 			preloader: !1,
 			type: t.data("type") || "inline",
 			closeMarkup: _GLOB.closerReference
 		})
 	}), $(function () {
 		var t = $(".js-code-copy");
 		t.length && t.each(function () {
 			var t = $(this),
 				e = t.find(".js-code-copy__inp"),
 				s = t.find(".js-code-copy__btn");
 			new Clipboard(s[0], {
 				target: function () {
 					return e[0]
 				}
 			})
 		})
 	}), _GLOB.slickNextArrHtml = '<button type="button" class="slick-next slick-arrow"></button>', _GLOB.slickPrevArrHtml = '<button type="button" class="slick-prev slick-arrow"></button>',
 	function (t) {
 		t.fn.promoSlider = function (e) {
 			t(this).each(function () {
 				var e, s = t(this);
 				s.slick({
 					slidesToShow: 1,
 					pauseOnHover: !1,
 					autoplay: !0,
 					autoplaySpeed: 5e3,
 					fade: !0,
 					speed: 0,
 					swipe: !1,
 					arrows: !0,
 					dots: !0,
 					nextArrow: _GLOB.slickNextArrHtml,
 					prevArrow: _GLOB.slickPrevArrHtml,
 					responsive: [{
 						breakpoint: _GLOB.breakpoints.ls,
 						settings: {
 							swipe: !0,
 							arrows: !1
 						}
 					}, {
 						breakpoint: 800,
 						settings: {
 							swipe: !0,
 							arrows: !1,
 							speed: 500
 						}
 					}]
 				}), s.addClass("_animated"), $W.scroll(function () {
 					s.slick("slickSetOption", "swipe", !1), clearTimeout(e), e = setTimeout(function () {
 						s.slick("slickSetOption", "swipe", !0)
 					}, 200)
 				})
 			})
 		}
 	}(jQuery),
 	function (t) {
 		t.fn.luckSlider = function () {
 			t(this).each(function () {
 				var e, s = t(this);
 				s.slick({
 					slidesToShow: 3,
 					swipe: !1,
 					arrows: !1,
 					dots: !1,
 					responsive: [{
 						breakpoint: 767,
 						settings: {
 							slidesToShow: 1,
 							swipe: !0,
 							dots: !0
 						}
 					}]
 				}), $W.scroll(function () {
 					s.slick("slickSetOption", "swipe", !1), clearTimeout(e), e = setTimeout(function () {
 						s.slick("slickSetOption", "swipe", !0)
 					}, 200)
 				})
 			})
 		}
 	}(jQuery),
 	function (t) {
 		t.fn.discountSlider = function () {
 			t(this).each(function () {
 				var e, s = t(this);
 				s.slick({
 					slidesToShow: 1,
 					swipe: !1,
 					arrows: !0,
 					dots: !0,
 					nextArrow: _GLOB.slickNextArrHtml,
 					prevArrow: _GLOB.slickPrevArrHtml,
 					responsive: [{
 						breakpoint: _GLOB.breakpoints.s,
 						settings: {
 							swipe: !0
 						}
 					}, {
 						breakpoint: _GLOB.breakpoints.ss,
 						settings: {
 							swipe: !0,
 							arrows: !1
 						}
 					}]
 				}), $W.scroll(function () {
 					s.slick("slickSetOption", "swipe", !1), clearTimeout(e), e = setTimeout(function () {
 						s.slick("slickSetOption", "swipe", !0)
 					}, 200)
 				})
 			})
 		}
 	}(jQuery),
 	function (t) {
 		t.fn.promoCommSlider = function () {
 			t(this).each(function () {
 				function e() {
 					var e = n.find(".js-promo-comm__group"),
 						s = 0,
 						i = 0;
 					e.each(function () {
 						var e = t(this),
 							n = e.find(".js-promo-comm__comm"),
 							a = n.eq(0).outerHeight(),
 							o = n.eq(1).outerHeight();
 						a > s && (s = a), o > i && (i = o)
 					}), e.each(function () {
 						var e = t(this).find(".js-promo-comm__comm");
 						e.eq(0).css("min-height", s + "px"), e.eq(1).css("min-height", i + "px")
 					})
 				}
 				var s, n = t(this);
 				n.on("init", function () {
 					e()
 				}), n.slick({
 					slidesToShow: 2,
 					swipe: !1,
 					arrows: !0,
 					dots: !0,
 					nextArrow: _GLOB.slickNextArrHtml,
 					prevArrow: _GLOB.slickPrevArrHtml,
 					responsive: [{
 						breakpoint: _GLOB.breakpoints.s,
 						settings: {
 							swipe: !0
 						}
 					}, {
 						breakpoint: _GLOB.breakpoints.ss,
 						settings: {
 							slidesToShow: 1,
 							adaptiveHeight: !0,
 							swipe: !0,
 							arrows: !1
 						}
 					}]
 				}), $W.resize(function () {
 					_GLOB.breakpoints.ss <= $W.width() && e()
 				}), $W.scroll(function () {
 					n.slick("slickSetOption", "swipe", !1), clearTimeout(s), s = setTimeout(function () {
 						n.slick("slickSetOption", "swipe", !0)
 					}, 200)
 				})
 			})
 		}
 	}(jQuery),
 	function (t) {
 		t.fn.sellsTracker = function () {
 			t(this).each(function () {
 				function e() {
 					s = setInterval(function () {
 						t.ajax({
 							type: "GET",
 							url: o,
 							async: !1,
 							success: function (t) {
 								n = t
 							}
 						})
 					}, r)
 				}
 				var s, n, i = t(this),
 					a = t(".js-sells-loadout"),
 					o = i.data("url"),
 					r = 7500;
 				i.slick({
 					slidesToShow: 10,
 					arrows: !1,
 					dots: !1,
 					autoplay: !0,
 					autoplaySpeed: 2e3,
 					speed: 1500,
 					infinite: !0,
 					centerMode: !0,
 					variableWidth: !0,
 					swipe: !1
 				}), i.on("afterChange", function () {
 					if (n) {
 						var t = i.slick("getSlick").slideCount,
 							e = 100 * Math.random();
 						i.slick("slickAdd", n), a.css("left", e + "%").html(n), t > 100 && i.slick("slickRemove", 0), n = !1
 					}
 				}), e(), Visibility.change(function (t, n) {
 					"hidden" == n && clearInterval(s), "visible" == n && e()
 				})
 			})
 		}
 	}(jQuery),
 	function (t) {
 		t.fn.gvProds = function () {
 			t(this).each(function () {
 				var e, s = t(this);
 				s.slick({
 					slidesToShow: 2,
 					arrows: !0,
 					dots: !1,
 					speed: 500,
 					infinite: !0,
 					swipe: !1,
 					nextArrow: _GLOB.slickNextArrHtml,
 					prevArrow: _GLOB.slickPrevArrHtml,
 					responsive: [{
 						breakpoint: _GLOB.breakpoints.sm,
 						settings: {
 							swipe: !0
 						}
 					}, {
 						breakpoint: _GLOB.breakpoints.ss,
 						settings: {
 							swipe: !0,
 							slidesToShow: 1
 						}
 					}]
 				}), $W.scroll(function () {
 					s.slick("slickSetOption", "swipe", !1), clearTimeout(e), e = setTimeout(function () {
 						s.slick("slickSetOption", "swipe", !0)
 					}, 200)
 				})
 			})
 		}
 	}(jQuery),
 	function (t) {
 		t.fn.gvProdsCompostion = function () {
 			t(this).each(function () {
 				var e, s = t(this);
 				s.slick({
 					slidesToShow: 6,
 					arrows: !0,
 					dots: !1,
 					speed: 500,
 					infinite: !0,
 					swipe: !1,
 					nextArrow: _GLOB.slickNextArrHtml,
 					prevArrow: _GLOB.slickPrevArrHtml,
 					responsive: [{
 						breakpoint: _GLOB.breakpoints.sm,
 						settings: {
 							swipe: !0
 						}
 					}, {
 						breakpoint: _GLOB.breakpoints.ss,
 						settings: {
 							swipe: !0,
 							slidesToShow: 2
 						}
 					}]
 				}), $W.scroll(function () {
 					s.slick("slickSetOption", "swipe", !1), clearTimeout(e), e = setTimeout(function () {
 						s.slick("slickSetOption", "swipe", !0)
 					}, 200)
 				})
 			})
 		}
 	}(jQuery),
 	function (t) {
 		t.fn.gvGalls = function () {
 			t(this).each(function () {
 				var e, s = t(this);
 				s.slick({
 					slidesToShow: 1,
 					arrows: !0,
 					dots: !1,
 					speed: 500,
 					infinite: !0,
 					swipe: !1,
 					nextArrow: _GLOB.slickNextArrHtml,
 					prevArrow: _GLOB.slickPrevArrHtml,
 					responsive: [{
 						breakpoint: _GLOB.breakpoints.sm,
 						settings: {
 							swipe: !0
 						}
 					}]
 				}), $W.scroll(function () {
 					s.slick("slickSetOption", "swipe", !1), clearTimeout(e), e = setTimeout(function () {
 						s.slick("slickSetOption", "swipe", !0)
 					}, 200)
 				})
 			})
 		}
 	}(jQuery),
 	function (t) {
 		t.fn.randomBuy = function () {
 			t(this).each(function () {
 				function e() {
 					var t = n.eq(0).height();
 					i.height(t)
 				}
 				var s = t(this),
 					n = s.find(".random-slider__item-img"),
 					i = s.siblings(".random-slider-current");
 				s.on("init", e), s.find("img").eq(0).one("load", function () {
 					e()
 				}), s.slick({
 					autoplay: !1,
 					autoplaySpeed: 1,
 					arrows: !1,
 					dots: !1,
 					speed: 100,
 					infinite: !0,
 					swipe: !1,
 					slidesToShow: 1,
 					initialSlide: 0,
 					centerMode: !0,
 					variableWidth: !0
 				}), i.length && e(), $W.resize(function () {
 					i.length && e()
 				})
 			})
 		}
 	}(jQuery), $(function () {
 		var t = $(".js-random-buy-btn");
 		if (t.length) {
 			var e = !0;
 			t.click(function () {
 				if (1 == e) {
 					$(this).addClass("_disable");
 					var t = $(".js-w-n").val();
 					$(".js-random-buy").addClass("_animation-on").slick("slickGoTo", parseInt(t)), e = !1, setTimeout(function () {
 						$(".js-random-show").hide(), $(".js-random-hide").show(), $blockH = $(".js-steps-block").find("._active").height(), $(".js-steps-block").animate({
 							height: $blockH
 						}, 400)
 					}, 5500)
 				}
 			})
 		}
 	}), $(function () {
 		var t = $(".js-promo-slider");
 		t.length && t.promoSlider()
 	}), $(function () {
 		var t = $(".js-luck-slider");
 		t.length && t.luckSlider()
 	}), $(function () {
 		var t = $(".js-discount-slider");
 		t.length && t.discountSlider()
 	}), $(function () {
 		var t = $(".js-promo-comm");
 		t.length && t.promoCommSlider()
 	}), $(function () {
 		var t = $(".js-sells-tracker");
 		t.length && t.sellsTracker()
 	}), $(function () {
 		var t = $(".js-gameview-prods-sl");
 		t.length && t.gvProds()
 	}), $(function () {}), $(function () {
 		var t = $(".js-random-buy");
 		t.length && t.randomBuy()
 	}), $(function () {
 		var t = $(".js-gameview-prods-composition");
 		t.length && t.gvProdsCompostion()
 	});
