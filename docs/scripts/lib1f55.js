 ! function (e) {
 	"use strict";
 	"function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
 }(function (e) {
 	"use strict";
 	var t = window.Slick || {};
 	t = function () {
 		function t(t, n) {
 			var o, r = this;
 			r.defaults = {
 				accessibility: !0,
 				adaptiveHeight: !1,
 				appendArrows: e(t),
 				appendDots: e(t),
 				arrows: !0,
 				asNavFor: null,
 				prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
 				nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
 				autoplay: !1,
 				autoplaySpeed: 3e3,
 				centerMode: !1,
 				centerPadding: "50px",
 				cssEase: "ease",
 				customPaging: function (e, t) {
 					return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (t + 1) + "</button>"
 				},
 				dots: !1,
 				dotsClass: "slick-dots",
 				draggable: !0,
 				easing: "linear",
 				edgeFriction: .35,
 				fade: !1,
 				focusOnSelect: !1,
 				infinite: !0,
 				initialSlide: 0,
 				lazyLoad: "ondemand",
 				mobileFirst: !1,
 				pauseOnHover: !0,
 				pauseOnDotsHover: !1,
 				respondTo: "window",
 				responsive: null,
 				rows: 1,
 				rtl: !1,
 				slide: "",
 				slidesPerRow: 1,
 				slidesToShow: 1,
 				slidesToScroll: 1,
 				speed: 500,
 				swipe: !0,
 				swipeToSlide: !1,
 				touchMove: !0,
 				touchThreshold: 5,
 				useCSS: !0,
 				useTransform: !1,
 				variableWidth: !1,
 				vertical: !1,
 				verticalSwiping: !1,
 				waitForAnimate: !0,
 				zIndex: 1e3
 			}, r.initials = {
 				animating: !1,
 				dragging: !1,
 				autoPlayTimer: null,
 				currentDirection: 0,
 				currentLeft: null,
 				currentSlide: 0,
 				direction: 1,
 				$dots: null,
 				listWidth: null,
 				listHeight: null,
 				loadIndex: 0,
 				$nextArrow: null,
 				$prevArrow: null,
 				slideCount: null,
 				slideWidth: null,
 				$slideTrack: null,
 				$slides: null,
 				sliding: !1,
 				slideOffset: 0,
 				swipeLeft: null,
 				$list: null,
 				touchObject: {},
 				transformsEnabled: !1,
 				unslicked: !1
 			}, e.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, r.breakpoints = [], r.breakpointSettings = [], r.cssTransitions = !1, r.hidden = "hidden", r.paused = !1, r.positionProp = null, r.respondTo = null, r.rowCount = 1, r.shouldClick = !0, r.$slider = e(t), r.$slidesCache = null, r.transformType = null, r.transitionType = null, r.visibilityChange = "visibilitychange", r.windowWidth = 0, r.windowTimer = null, o = e(t).data("slick") || {}, r.options = e.extend({}, r.defaults, o, n), r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, "undefined" != typeof document.mozHidden ? (r.hidden = "mozHidden", r.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (r.hidden = "webkitHidden", r.visibilityChange = "webkitvisibilitychange"), r.autoPlay = e.proxy(r.autoPlay, r), r.autoPlayClear = e.proxy(r.autoPlayClear, r), r.changeSlide = e.proxy(r.changeSlide, r), r.clickHandler = e.proxy(r.clickHandler, r), r.selectHandler = e.proxy(r.selectHandler, r), r.setPosition = e.proxy(r.setPosition, r), r.swipeHandler = e.proxy(r.swipeHandler, r), r.dragHandler = e.proxy(r.dragHandler, r), r.keyHandler = e.proxy(r.keyHandler, r), r.autoPlayIterator = e.proxy(r.autoPlayIterator, r), r.instanceUid = i++, r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, r.registerBreakpoints(), r.init(!0), r.checkResponsive(!0)
 		}
 		var i = 0;
 		return t
 	}(), t.prototype.addSlide = t.prototype.slickAdd = function (t, i, n) {
 		var o = this;
 		if ("boolean" == typeof i) n = i, i = null;
 		else if (0 > i || i >= o.slideCount) return !1;
 		o.unload(), "number" == typeof i ? 0 === i && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : n ? e(t).insertBefore(o.$slides.eq(i)) : e(t).insertAfter(o.$slides.eq(i)) : n === !0 ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function (t, i) {
 			e(i).attr("data-slick-index", t)
 		}), o.$slidesCache = o.$slides, o.reinit()
 	}, t.prototype.animateHeight = function () {
 		var e = this;
 		if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
 			var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
 			e.$list.animate({
 				height: t
 			}, e.options.speed)
 		}
 	}, t.prototype.animateSlide = function (t, i) {
 		var n = {},
 			o = this;
 		o.animateHeight(), o.options.rtl === !0 && o.options.vertical === !1 && (t = -t), o.transformsEnabled === !1 ? o.options.vertical === !1 ? o.$slideTrack.animate({
 			left: t
 		}, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({
 			top: t
 		}, o.options.speed, o.options.easing, i) : o.cssTransitions === !1 ? (o.options.rtl === !0 && (o.currentLeft = -o.currentLeft), e({
 			animStart: o.currentLeft
 		}).animate({
 			animStart: t
 		}, {
 			duration: o.options.speed,
 			easing: o.options.easing,
 			step: function (e) {
 				e = Math.ceil(e), o.options.vertical === !1 ? (n[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(n)) : (n[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(n))
 			},
 			complete: function () {
 				i && i.call()
 			}
 		})) : (o.applyTransition(), t = Math.ceil(t), o.options.vertical === !1 ? n[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : n[o.animType] = "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(n), i && setTimeout(function () {
 			o.disableTransition(), i.call()
 		}, o.options.speed))
 	}, t.prototype.asNavFor = function (t) {
 		var i = this,
 			n = i.options.asNavFor;
 		n && null !== n && (n = e(n).not(i.$slider)), null !== n && "object" == typeof n && n.each(function () {
 			var i = e(this).slick("getSlick");
 			i.unslicked || i.slideHandler(t, !0)
 		})
 	}, t.prototype.applyTransition = function (e) {
 		var t = this,
 			i = {};
 		t.options.fade === !1 ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
 	}, t.prototype.autoPlay = function () {
 		var e = this;
 		e.autoPlayTimer && clearInterval(e.autoPlayTimer), e.slideCount > e.options.slidesToShow && e.paused !== !0 && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
 	}, t.prototype.autoPlayClear = function () {
 		var e = this;
 		e.autoPlayTimer && clearInterval(e.autoPlayTimer)
 	}, t.prototype.autoPlayIterator = function () {
 		var e = this;
 		e.options.infinite === !1 ? 1 === e.direction ? (e.currentSlide + 1 === e.slideCount - 1 && (e.direction = 0), e.slideHandler(e.currentSlide + e.options.slidesToScroll)) : (e.currentSlide - 1 === 0 && (e.direction = 1), e.slideHandler(e.currentSlide - e.options.slidesToScroll)) : e.slideHandler(e.currentSlide + e.options.slidesToScroll)
 	}, t.prototype.buildArrows = function () {
 		var t = this;
 		t.options.arrows === !0 && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), t.options.infinite !== !0 && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
 			"aria-disabled": "true",
 			tabindex: "-1"
 		}))
 	}, t.prototype.buildDots = function () {
 		var t, i, n = this;
 		if (n.options.dots === !0 && n.slideCount > n.options.slidesToShow) {
 			for (i = '<ul class="' + n.options.dotsClass + '">', t = 0; t <= n.getDotCount(); t += 1) i += "<li>" + n.options.customPaging.call(this, n, t) + "</li>";
 			i += "</ul>", n.$dots = e(i).appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
 		}
 	}, t.prototype.buildOut = function () {
 		var t = this;
 		t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function (t, i) {
 			e(i).attr("data-slick-index", t).data("originalStyling", e(i).attr("style") || "")
 		}), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), (t.options.centerMode === !0 || t.options.swipeToSlide === !0) && (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.options.draggable === !0 && t.$list.addClass("draggable")
 	}, t.prototype.buildRows = function () {
 		var e, t, i, n, o, r, s, a = this;
 		if (n = document.createDocumentFragment(), r = a.$slider.children(), a.options.rows > 1) {
 			for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), e = 0; o > e; e++) {
 				var l = document.createElement("div");
 				for (t = 0; t < a.options.rows; t++) {
 					var c = document.createElement("div");
 					for (i = 0; i < a.options.slidesPerRow; i++) {
 						var d = e * s + (t * a.options.slidesPerRow + i);
 						r.get(d) && c.appendChild(r.get(d))
 					}
 					l.appendChild(c)
 				}
 				n.appendChild(l)
 			}
 			a.$slider.html(n), a.$slider.children().children().children().css({
 				width: 100 / a.options.slidesPerRow + "%",
 				display: "inline-block"
 			})
 		}
 	}, t.prototype.checkResponsive = function (t, i) {
 		var n, o, r, s = this,
 			a = !1,
 			l = s.$slider.width(),
 			c = window.innerWidth || e(window).width();
 		if ("window" === s.respondTo ? r = c : "slider" === s.respondTo ? r = l : "min" === s.respondTo && (r = Math.min(c, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
 			o = null;
 			for (n in s.breakpoints) s.breakpoints.hasOwnProperty(n) && (s.originalSettings.mobileFirst === !1 ? r < s.breakpoints[n] && (o = s.breakpoints[n]) : r > s.breakpoints[n] && (o = s.breakpoints[n]));
 			null !== o ? null !== s.activeBreakpoint ? (o !== s.activeBreakpoint || i) && (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), t === !0 && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), t === !0 && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, t === !0 && (s.currentSlide = s.options.initialSlide), s.refresh(t), a = o), t || a === !1 || s.$slider.trigger("breakpoint", [s, a])
 		}
 	}, t.prototype.changeSlide = function (t, i) {
 		var n, o, r, s = this,
 			a = e(t.target);
 		switch (a.is("a") && t.preventDefault(), a.is("li") || (a = a.closest("li")), r = s.slideCount % s.options.slidesToScroll !== 0, n = r ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, t.data.message) {
 			case "previous":
 				o = 0 === n ? s.options.slidesToScroll : s.options.slidesToShow - n, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, i);
 				break;
 			case "next":
 				o = 0 === n ? s.options.slidesToScroll : n, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, i);
 				break;
 			case "index":
 				var l = 0 === t.data.index ? 0 : t.data.index || a.index() * s.options.slidesToScroll;
 				s.slideHandler(s.checkNavigable(l), !1, i), a.children().trigger("focus");
 				break;
 			default:
 				return
 		}
 	}, t.prototype.checkNavigable = function (e) {
 		var t, i, n = this;
 		if (t = n.getNavigableIndexes(), i = 0, e > t[t.length - 1]) e = t[t.length - 1];
 		else
 			for (var o in t) {
 				if (e < t[o]) {
 					e = i;
 					break
 				}
 				i = t[o]
 			}
 		return e
 	}, t.prototype.cleanUpEvents = function () {
 		var t = this;
 		t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide), t.options.pauseOnDotsHover === !0 && t.options.autoplay === !0 && e("li", t.$dots).off("mouseenter.slick", e.proxy(t.setPaused, t, !0)).off("mouseleave.slick", e.proxy(t.setPaused, t, !1))), t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.$list.off("mouseenter.slick", e.proxy(t.setPaused, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.setPaused, t, !1)), t.options.accessibility === !0 && t.$list.off("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition)
 	}, t.prototype.cleanUpRows = function () {
 		var e, t = this;
 		t.options.rows > 1 && (e = t.$slides.children().children(), e.removeAttr("style"), t.$slider.html(e))
 	}, t.prototype.clickHandler = function (e) {
 		var t = this;
 		t.shouldClick === !1 && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
 	}, t.prototype.destroy = function (t) {
 		var i = this;
 		i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), e(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
 			e(this).attr("style", e(this).data("originalStyling"))
 		}), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.unslicked = !0, t || i.$slider.trigger("destroy", [i])
 	}, t.prototype.disableTransition = function (e) {
 		var t = this,
 			i = {};
 		i[t.transitionType] = "", t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
 	}, t.prototype.fadeSlide = function (e, t) {
 		var i = this;
 		i.cssTransitions === !1 ? (i.$slides.eq(e).css({
 			zIndex: i.options.zIndex
 		}), i.$slides.eq(e).animate({
 			opacity: 1
 		}, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
 			opacity: 1,
 			zIndex: i.options.zIndex
 		}), t && setTimeout(function () {
 			i.disableTransition(e), t.call()
 		}, i.options.speed))
 	}, t.prototype.fadeSlideOut = function (e) {
 		var t = this;
 		t.cssTransitions === !1 ? t.$slides.eq(e).animate({
 			opacity: 0,
 			zIndex: t.options.zIndex - 2
 		}, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
 			opacity: 0,
 			zIndex: t.options.zIndex - 2
 		}))
 	}, t.prototype.filterSlides = t.prototype.slickFilter = function (e) {
 		var t = this;
 		null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
 	}, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function () {
 		var e = this;
 		return e.currentSlide
 	}, t.prototype.getDotCount = function () {
 		var e = this,
 			t = 0,
 			i = 0,
 			n = 0;
 		if (e.options.infinite === !0)
 			for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
 		else if (e.options.centerMode === !0) n = e.slideCount;
 		else
 			for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
 		return n - 1
 	}, t.prototype.getLeft = function (e) {
 		var t, i, n, o = this,
 			r = 0;
 		return o.slideOffset = 0, i = o.$slides.first().outerHeight(!0), o.options.infinite === !0 ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, r = i * o.options.slidesToShow * -1), o.slideCount % o.options.slidesToScroll !== 0 && e + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (e > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (e - o.slideCount)) * o.slideWidth * -1, r = (o.options.slidesToShow - (e - o.slideCount)) * i * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, r = o.slideCount % o.options.slidesToScroll * i * -1))) : e + o.options.slidesToShow > o.slideCount && (o.slideOffset = (e + o.options.slidesToShow - o.slideCount) * o.slideWidth, r = (e + o.options.slidesToShow - o.slideCount) * i), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, r = 0), o.options.centerMode === !0 && o.options.infinite === !0 ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : o.options.centerMode === !0 && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), t = o.options.vertical === !1 ? e * o.slideWidth * -1 + o.slideOffset : e * i * -1 + r, o.options.variableWidth === !0 && (n = o.slideCount <= o.options.slidesToShow || o.options.infinite === !1 ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow), t = o.options.rtl === !0 ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, o.options.centerMode === !0 && (n = o.slideCount <= o.options.slidesToShow || o.options.infinite === !1 ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow + 1), t = o.options.rtl === !0 ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, t += (o.$list.width() - n.outerWidth()) / 2)), t
 	}, t.prototype.getOption = t.prototype.slickGetOption = function (e) {
 		var t = this;
 		return t.options[e]
 	}, t.prototype.getNavigableIndexes = function () {
 		var e, t = this,
 			i = 0,
 			n = 0,
 			o = [];
 		for (t.options.infinite === !1 ? e = t.slideCount : (i = -1 * t.options.slidesToScroll, n = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); e > i;) o.push(i), i = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
 		return o
 	}, t.prototype.getSlick = function () {
 		return this
 	}, t.prototype.getSlideCount = function () {
 		var t, i, n, o = this;
 		return n = o.options.centerMode === !0 ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, o.options.swipeToSlide === !0 ? (o.$slideTrack.find(".slick-slide").each(function (t, r) {
 			return r.offsetLeft - n + e(r).outerWidth() / 2 > -1 * o.swipeLeft ? (i = r, !1) : void 0
 		}), t = Math.abs(e(i).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
 	}, t.prototype.goTo = t.prototype.slickGoTo = function (e, t) {
 		var i = this;
 		i.changeSlide({
 			data: {
 				message: "index",
 				index: parseInt(e)
 			}
 		}, t)
 	}, t.prototype.init = function (t) {
 		var i = this;
 		e(i.$slider).hasClass("slick-initialized") || (e(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots()), t && i.$slider.trigger("init", [i]), i.options.accessibility === !0 && i.initADA()
 	}, t.prototype.initArrowEvents = function () {
 		var e = this;
 		e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.on("click.slick", {
 			message: "previous"
 		}, e.changeSlide), e.$nextArrow.on("click.slick", {
 			message: "next"
 		}, e.changeSlide))
 	}, t.prototype.initDotEvents = function () {
 		var t = this;
 		t.options.dots === !0 && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("click.slick", {
 			message: "index"
 		}, t.changeSlide), t.options.dots === !0 && t.options.pauseOnDotsHover === !0 && t.options.autoplay === !0 && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.setPaused, t, !0)).on("mouseleave.slick", e.proxy(t.setPaused, t, !1))
 	}, t.prototype.initializeEvents = function () {
 		var t = this;
 		t.initArrowEvents(), t.initDotEvents(), t.$list.on("touchstart.slick mousedown.slick", {
 			action: "start"
 		}, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
 			action: "move"
 		}, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
 			action: "end"
 		}, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
 			action: "end"
 		}, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), t.$list.on("mouseenter.slick", e.proxy(t.setPaused, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.setPaused, t, !1)), t.options.accessibility === !0 && t.$list.on("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
 	}, t.prototype.initUI = function () {
 		var e = this;
 		e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.show(), e.options.autoplay === !0 && e.autoPlay()
 	}, t.prototype.keyHandler = function (e) {
 		var t = this;
 		e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && t.options.accessibility === !0 ? t.changeSlide({
 			data: {
 				message: "previous"
 			}
 		}) : 39 === e.keyCode && t.options.accessibility === !0 && t.changeSlide({
 			data: {
 				message: "next"
 			}
 		}))
 	}, t.prototype.lazyLoad = function () {
 		function t(t) {
 			e("img[data-lazy]", t).each(function () {
 				var t = e(this),
 					i = e(this).attr("data-lazy"),
 					n = document.createElement("img");
 				n.onload = function () {
 					t.animate({
 						opacity: 0
 					}, 100, function () {
 						t.attr("src", i).animate({
 							opacity: 1
 						}, 200, function () {
 							t.removeAttr("data-lazy").removeClass("slick-loading")
 						})
 					})
 				}, n.src = i
 			})
 		}
 		var i, n, o, r, s = this;
 		s.options.centerMode === !0 ? s.options.infinite === !0 ? (o = s.currentSlide + (s.options.slidesToShow / 2 + 1), r = o + s.options.slidesToShow + 2) : (o = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), r = 2 + (s.options.slidesToShow / 2 + 1) + s.currentSlide) : (o = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, r = o + s.options.slidesToShow, s.options.fade === !0 && (o > 0 && o--, r <= s.slideCount && r++)), i = s.$slider.find(".slick-slide").slice(o, r), t(i), s.slideCount <= s.options.slidesToShow ? (n = s.$slider.find(".slick-slide"), t(n)) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? (n = s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow), t(n)) : 0 === s.currentSlide && (n = s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow), t(n))
 	}, t.prototype.loadSlider = function () {
 		var e = this;
 		e.setPosition(), e.$slideTrack.css({
 			opacity: 1
 		}), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
 	}, t.prototype.next = t.prototype.slickNext = function () {
 		var e = this;
 		e.changeSlide({
 			data: {
 				message: "next"
 			}
 		})
 	}, t.prototype.orientationChange = function () {
 		var e = this;
 		e.checkResponsive(), e.setPosition()
 	}, t.prototype.pause = t.prototype.slickPause = function () {
 		var e = this;
 		e.autoPlayClear(), e.paused = !0
 	}, t.prototype.play = t.prototype.slickPlay = function () {
 		var e = this;
 		e.paused = !1, e.autoPlay()
 	}, t.prototype.postSlide = function (e) {
 		var t = this;
 		t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.setPosition(), t.swipeLeft = null, t.options.autoplay === !0 && t.paused === !1 && t.autoPlay(), t.options.accessibility === !0 && t.initADA()
 	}, t.prototype.prev = t.prototype.slickPrev = function () {
 		var e = this;
 		e.changeSlide({
 			data: {
 				message: "previous"
 			}
 		})
 	}, t.prototype.preventDefault = function (e) {
 		e.preventDefault()
 	}, t.prototype.progressiveLazyLoad = function () {
 		var t, i, n = this;
 		t = e("img[data-lazy]", n.$slider).length, t > 0 && (i = e("img[data-lazy]", n.$slider).first(), i.attr("src", null), i.attr("src", i.attr("data-lazy")).removeClass("slick-loading").load(function () {
 			i.removeAttr("data-lazy"), n.progressiveLazyLoad(), n.options.adaptiveHeight === !0 && n.setPosition()
 		}).error(function () {
 			i.removeAttr("data-lazy"), n.progressiveLazyLoad()
 		}))
 	}, t.prototype.refresh = function (t) {
 		var i, n, o = this;
 		n = o.slideCount - o.options.slidesToShow, o.options.infinite || (o.slideCount <= o.options.slidesToShow ? o.currentSlide = 0 : o.currentSlide > n && (o.currentSlide = n)), i = o.currentSlide, o.destroy(!0), e.extend(o, o.initials, {
 			currentSlide: i
 		}), o.init(), t || o.changeSlide({
 			data: {
 				message: "index",
 				index: i
 			}
 		}, !1)
 	}, t.prototype.registerBreakpoints = function () {
 		var t, i, n, o = this,
 			r = o.options.responsive || null;
 		if ("array" === e.type(r) && r.length) {
 			o.respondTo = o.options.respondTo || "window";
 			for (t in r)
 				if (n = o.breakpoints.length - 1, i = r[t].breakpoint, r.hasOwnProperty(t)) {
 					for (; n >= 0;) o.breakpoints[n] && o.breakpoints[n] === i && o.breakpoints.splice(n, 1), n--;
 					o.breakpoints.push(i), o.breakpointSettings[i] = r[t].settings
 				} o.breakpoints.sort(function (e, t) {
 				return o.options.mobileFirst ? e - t : t - e
 			})
 		}
 	}, t.prototype.reinit = function () {
 		var t = this;
 		t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.checkResponsive(!1, !0), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses(0), t.setPosition(), t.$slider.trigger("reInit", [t]), t.options.autoplay === !0 && t.focusHandler()
 	}, t.prototype.resize = function () {
 		var t = this;
 		e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function () {
 			t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
 		}, 50))
 	}, t.prototype.removeSlide = t.prototype.slickRemove = function (e, t, i) {
 		var n = this;
 		return "boolean" == typeof e ? (t = e, e = t === !0 ? 0 : n.slideCount - 1) : e = t === !0 ? --e : e, n.slideCount < 1 || 0 > e || e > n.slideCount - 1 ? !1 : (n.unload(), i === !0 ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(e).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, void n.reinit())
 	}, t.prototype.setCSS = function (e) {
 		var t, i, n = this,
 			o = {};
 		n.options.rtl === !0 && (e = -e), t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px", o[n.positionProp] = e, n.transformsEnabled === !1 ? n.$slideTrack.css(o) : (o = {}, n.cssTransitions === !1 ? (o[n.animType] = "translate(" + t + ", " + i + ")", n.$slideTrack.css(o)) : (o[n.animType] = "translate3d(" + t + ", " + i + ", 0px)", n.$slideTrack.css(o)))
 	}, t.prototype.setDimensions = function () {
 		var e = this;
 		e.options.vertical === !1 ? e.options.centerMode === !0 && e.$list.css({
 			padding: "0px " + e.options.centerPadding
 		}) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), e.options.centerMode === !0 && e.$list.css({
 			padding: e.options.centerPadding + " 0px"
 		})), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), e.options.vertical === !1 && e.options.variableWidth === !1 ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : e.options.variableWidth === !0 ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
 		var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
 		e.options.variableWidth === !1 && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
 	}, t.prototype.setFade = function () {
 		var t, i = this;
 		i.$slides.each(function (n, o) {
 			t = i.slideWidth * n * -1, i.options.rtl === !0 ? e(o).css({
 				position: "relative",
 				right: t,
 				top: 0,
 				zIndex: i.options.zIndex - 2,
 				opacity: 0
 			}) : e(o).css({
 				position: "relative",
 				left: t,
 				top: 0,
 				zIndex: i.options.zIndex - 2,
 				opacity: 0
 			})
 		}), i.$slides.eq(i.currentSlide).css({
 			zIndex: i.options.zIndex - 1,
 			opacity: 1
 		})
 	}, t.prototype.setHeight = function () {
 		var e = this;
 		if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
 			var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
 			e.$list.css("height", t)
 		}
 	}, t.prototype.setOption = t.prototype.slickSetOption = function (t, i, n) {
 		var o, r, s = this;
 		if ("responsive" === t && "array" === e.type(i))
 			for (r in i)
 				if ("array" !== e.type(s.options.responsive)) s.options.responsive = [i[r]];
 				else {
 					for (o = s.options.responsive.length - 1; o >= 0;) s.options.responsive[o].breakpoint === i[r].breakpoint && s.options.responsive.splice(o, 1), o--;
 					s.options.responsive.push(i[r])
 				}
 		else s.options[t] = i;
 		n === !0 && (s.unload(), s.reinit())
 	}, t.prototype.setPosition = function () {
 		var e = this;
 		e.setDimensions(), e.setHeight(), e.options.fade === !1 ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
 	}, t.prototype.setProps = function () {
 		var e = this,
 			t = document.body.style;
 		e.positionProp = e.options.vertical === !0 ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && e.options.useCSS === !0 && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && e.animType !== !1 && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && e.animType !== !1
 	}, t.prototype.setSlideClasses = function (e) {
 		var t, i, n, o, r = this;
 		i = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(e).addClass("slick-current"), r.options.centerMode === !0 ? (t = Math.floor(r.options.slidesToShow / 2), r.options.infinite === !0 && (e >= t && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = r.options.slidesToShow + e, i.slice(n - t + 1, n + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && i.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(e).addClass("slick-center")) : e >= 0 && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= r.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow, n = r.options.infinite === !0 ? r.options.slidesToShow + e : e, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? i.slice(n - (r.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === r.options.lazyLoad && r.lazyLoad()
 	}, t.prototype.setupInfinite = function () {
 		var t, i, n, o = this;
 		if (o.options.fade === !0 && (o.options.centerMode = !1), o.options.infinite === !0 && o.options.fade === !1 && (i = null, o.slideCount > o.options.slidesToShow)) {
 			for (n = o.options.centerMode === !0 ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - n; t -= 1) i = t - 1, e(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
 			for (t = 0; n > t; t += 1) i = t, e(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
 			o.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
 				e(this).attr("id", "")
 			})
 		}
 	}, t.prototype.setPaused = function (e) {
 		var t = this;
 		t.options.autoplay === !0 && t.options.pauseOnHover === !0 && (t.paused = e, e ? t.autoPlayClear() : t.autoPlay())
 	}, t.prototype.selectHandler = function (t) {
 		var i = this,
 			n = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
 			o = parseInt(n.attr("data-slick-index"));
 		return o || (o = 0), i.slideCount <= i.options.slidesToShow ? (i.setSlideClasses(o), void i.asNavFor(o)) : void i.slideHandler(o)
 	}, t.prototype.slideHandler = function (e, t, i) {
 		var n, o, r, s, a = null,
 			l = this;
 		return t = t || !1, l.animating === !0 && l.options.waitForAnimate === !0 || l.options.fade === !0 && l.currentSlide === e || l.slideCount <= l.options.slidesToShow ? void 0 : (t === !1 && l.asNavFor(e), n = e, a = l.getLeft(n), s = l.getLeft(l.currentSlide), l.currentLeft = null === l.swipeLeft ? s : l.swipeLeft, l.options.infinite === !1 && l.options.centerMode === !1 && (0 > e || e > l.getDotCount() * l.options.slidesToScroll) ? void(l.options.fade === !1 && (n = l.currentSlide, i !== !0 ? l.animateSlide(s, function () {
 			l.postSlide(n);
 		}) : l.postSlide(n))) : l.options.infinite === !1 && l.options.centerMode === !0 && (0 > e || e > l.slideCount - l.options.slidesToScroll) ? void(l.options.fade === !1 && (n = l.currentSlide, i !== !0 ? l.animateSlide(s, function () {
 			l.postSlide(n)
 		}) : l.postSlide(n))) : (l.options.autoplay === !0 && clearInterval(l.autoPlayTimer), o = 0 > n ? l.slideCount % l.options.slidesToScroll !== 0 ? l.slideCount - l.slideCount % l.options.slidesToScroll : l.slideCount + n : n >= l.slideCount ? l.slideCount % l.options.slidesToScroll !== 0 ? 0 : n - l.slideCount : n, l.animating = !0, l.$slider.trigger("beforeChange", [l, l.currentSlide, o]), r = l.currentSlide, l.currentSlide = o, l.setSlideClasses(l.currentSlide), l.updateDots(), l.updateArrows(), l.options.fade === !0 ? (i !== !0 ? (l.fadeSlideOut(r), l.fadeSlide(o, function () {
 			l.postSlide(o)
 		})) : l.postSlide(o), void l.animateHeight()) : void(i !== !0 ? l.animateSlide(a, function () {
 			l.postSlide(o)
 		}) : l.postSlide(o))))
 	}, t.prototype.startLoad = function () {
 		var e = this;
 		e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
 	}, t.prototype.swipeDirection = function () {
 		var e, t, i, n, o = this;
 		return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, i = Math.atan2(t, e), n = Math.round(180 * i / Math.PI), 0 > n && (n = 360 - Math.abs(n)), 45 >= n && n >= 0 ? o.options.rtl === !1 ? "left" : "right" : 360 >= n && n >= 315 ? o.options.rtl === !1 ? "left" : "right" : n >= 135 && 225 >= n ? o.options.rtl === !1 ? "right" : "left" : o.options.verticalSwiping === !0 ? n >= 35 && 135 >= n ? "left" : "right" : "vertical"
 	}, t.prototype.swipeEnd = function (e) {
 		var t, i = this;
 		if (i.dragging = !1, i.shouldClick = !(i.touchObject.swipeLength > 10), void 0 === i.touchObject.curX) return !1;
 		if (i.touchObject.edgeHit === !0 && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) switch (i.swipeDirection()) {
 			case "left":
 				t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.slideHandler(t), i.currentDirection = 0, i.touchObject = {}, i.$slider.trigger("swipe", [i, "left"]);
 				break;
 			case "right":
 				t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.slideHandler(t), i.currentDirection = 1, i.touchObject = {}, i.$slider.trigger("swipe", [i, "right"])
 		} else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
 	}, t.prototype.swipeHandler = function (e) {
 		var t = this;
 		if (!(t.options.swipe === !1 || "ontouchend" in document && t.options.swipe === !1 || t.options.draggable === !1 && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, t.options.verticalSwiping === !0 && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
 			case "start":
 				t.swipeStart(e);
 				break;
 			case "move":
 				t.swipeMove(e);
 				break;
 			case "end":
 				t.swipeEnd(e)
 		}
 	}, t.prototype.swipeMove = function (e) {
 		var t, i, n, o, r, s = this;
 		return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !s.dragging || r && 1 !== r.length ? !1 : (t = s.getLeft(s.currentSlide), s.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX, s.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY, s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))), s.options.verticalSwiping === !0 && (s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curY - s.touchObject.startY, 2)))), i = s.swipeDirection(), "vertical" !== i ? (void 0 !== e.originalEvent && s.touchObject.swipeLength > 4 && e.preventDefault(), o = (s.options.rtl === !1 ? 1 : -1) * (s.touchObject.curX > s.touchObject.startX ? 1 : -1), s.options.verticalSwiping === !0 && (o = s.touchObject.curY > s.touchObject.startY ? 1 : -1), n = s.touchObject.swipeLength, s.touchObject.edgeHit = !1, s.options.infinite === !1 && (0 === s.currentSlide && "right" === i || s.currentSlide >= s.getDotCount() && "left" === i) && (n = s.touchObject.swipeLength * s.options.edgeFriction, s.touchObject.edgeHit = !0), s.options.vertical === !1 ? s.swipeLeft = t + n * o : s.swipeLeft = t + n * (s.$list.height() / s.listWidth) * o, s.options.verticalSwiping === !0 && (s.swipeLeft = t + n * o), s.options.fade === !0 || s.options.touchMove === !1 ? !1 : s.animating === !0 ? (s.swipeLeft = null, !1) : void s.setCSS(s.swipeLeft)) : void 0)
 	}, t.prototype.swipeStart = function (e) {
 		var t, i = this;
 		return 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {}, !1) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, void(i.dragging = !0))
 	}, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function () {
 		var e = this;
 		null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
 	}, t.prototype.unload = function () {
 		var t = this;
 		e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
 	}, t.prototype.unslick = function (e) {
 		var t = this;
 		t.$slider.trigger("unslick", [t, e]), t.destroy()
 	}, t.prototype.updateArrows = function () {
 		var e, t = this;
 		e = Math.floor(t.options.slidesToShow / 2), t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && t.options.centerMode === !1 ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && t.options.centerMode === !0 && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
 	}, t.prototype.updateDots = function () {
 		var e = this;
 		null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
 	}, t.prototype.visibility = function () {
 		var e = this;
 		document[e.hidden] ? (e.paused = !0, e.autoPlayClear()) : e.options.autoplay === !0 && (e.paused = !1, e.autoPlay())
 	}, t.prototype.initADA = function () {
 		var t = this;
 		t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
 			"aria-hidden": "true",
 			tabindex: "-1"
 		}).find("a, input, button, select").attr({
 			tabindex: "-1"
 		}), t.$slideTrack.attr("role", "listbox"), t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function (i) {
 			e(this).attr({
 				role: "option",
 				"aria-describedby": "slick-slide" + t.instanceUid + i
 			})
 		}), null !== t.$dots && t.$dots.attr("role", "tablist").find("li").each(function (i) {
 			e(this).attr({
 				role: "presentation",
 				"aria-selected": "false",
 				"aria-controls": "navigation" + t.instanceUid + i,
 				id: "slick-slide" + t.instanceUid + i
 			})
 		}).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), t.activateADA()
 	}, t.prototype.activateADA = function () {
 		var e = this;
 		e.$slideTrack.find(".slick-active").attr({
 			"aria-hidden": "false"
 		}).find("a, input, button, select").attr({
 			tabindex: "0"
 		})
 	}, t.prototype.focusHandler = function () {
 		var t = this;
 		t.$slider.on("focus.slick blur.slick", "*", function (i) {
 			i.stopImmediatePropagation();
 			var n = e(this);
 			setTimeout(function () {
 				t.isPlay && (n.is(":focus") ? (t.autoPlayClear(), t.paused = !0) : (t.paused = !1, t.autoPlay()))
 			}, 0)
 		})
 	}, e.fn.slick = function () {
 		var e, i, n = this,
 			o = arguments[0],
 			r = Array.prototype.slice.call(arguments, 1),
 			s = n.length;
 		for (e = 0; s > e; e++)
 			if ("object" == typeof o || "undefined" == typeof o ? n[e].slick = new t(n[e], o) : i = n[e].slick[o].apply(n[e].slick, r), "undefined" != typeof i) return i;
 		return n
 	}
 }),
 function (e) {
 	"function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], e) : e("undefined" != typeof module && module.exports ? require("jquery") : jQuery)
 }(function (e) {
 	"use strict";

 	function t(t) {
 		return !t || void 0 !== t.allowPageScroll || void 0 === t.swipe && void 0 === t.swipeStatus || (t.allowPageScroll = d), void 0 !== t.click && void 0 === t.tap && (t.tap = t.click), t || (t = {}), t = e.extend({}, e.fn.swipe.defaults, t), this.each(function () {
 			var n = e(this),
 				o = n.data(O);
 			o || (o = new i(this, t), n.data(O, o))
 		})
 	}

 	function i(t, i) {
 		function n(t) {
 			if (!(ce() || e(t.target).closest(i.excludedElements, Ze).length > 0)) {
 				var n, o = t.originalEvent ? t.originalEvent : t,
 					r = o.touches,
 					s = r ? r[0] : o;
 				return qe = x, r ? Be = r.length : i.preventDefaultEvents !== !1 && t.preventDefault(), Le = 0, De = null, ze = null, je = null, Fe = 0, He = 0, Re = 0, Ne = 1, Ue = 0, We = ve(), ae(), ue(0, s), !r || Be === i.fingers || i.fingers === w || W() ? (Ke = Ce(), 2 == Be && (ue(1, r[1]), He = Re = we(Ye[0].start, Ye[1].start)), (i.swipeStatus || i.pinchStatus) && (n = D(o, qe))) : n = !1, n === !1 ? (qe = k, D(o, qe), n) : (i.hold && (et = setTimeout(e.proxy(function () {
 					Ze.trigger("hold", [o.target]), i.hold && (n = i.hold.call(Ze, o, o.target))
 				}, this), i.longTapThreshold)), de(!0), null)
 			}
 		}

 		function P(e) {
 			var t = e.originalEvent ? e.originalEvent : e;
 			if (qe !== S && qe !== k && !le()) {
 				var n, o = t.touches,
 					r = o ? o[0] : t,
 					s = pe(r);
 				if (Xe = Ce(), o && (Be = o.length), i.hold && clearTimeout(et), qe = T, 2 == Be && (0 == He ? (ue(1, o[1]), He = Re = we(Ye[0].start, Ye[1].start)) : (pe(o[1]), Re = we(Ye[0].end, Ye[1].end), je = xe(Ye[0].end, Ye[1].end)), Ne = be(He, Re), Ue = Math.abs(He - Re)), Be === i.fingers || i.fingers === w || !o || W()) {
 					if (De = ke(s.start, s.end), ze = ke(s.last, s.end), U(e, ze), Le = Te(s.start, s.end), Fe = ye(), he(De, Le), n = D(t, qe), !i.triggerOnTouchEnd || i.triggerOnTouchLeave) {
 						var a = !0;
 						if (i.triggerOnTouchLeave) {
 							var l = Ee(this);
 							a = Ie(s.end, l)
 						}!i.triggerOnTouchEnd && a ? qe = L(T) : i.triggerOnTouchLeave && !a && (qe = L(S)), qe != k && qe != S || D(t, qe)
 					}
 				} else qe = k, D(t, qe);
 				n === !1 && (qe = k, D(t, qe))
 			}
 		}

 		function A(e) {
 			var t = e.originalEvent ? e.originalEvent : e,
 				n = t.touches;
 			if (n) {
 				if (n.length && !le()) return se(t), !0;
 				if (n.length && le()) return !0
 			}
 			return le() && (Be = Ge), Xe = Ce(), Fe = ye(), H() || !F() ? (qe = k, D(t, qe)) : i.triggerOnTouchEnd || 0 == i.triggerOnTouchEnd && qe === T ? (i.preventDefaultEvents !== !1 && e.preventDefault(), qe = S, D(t, qe)) : !i.triggerOnTouchEnd && V() ? (qe = S, z(t, qe, h)) : qe === T && (qe = k, D(t, qe)), de(!1), null
 		}

 		function M() {
 			Be = 0, Xe = 0, Ke = 0, He = 0, Re = 0, Ne = 1, ae(), de(!1)
 		}

 		function $(e) {
 			var t = e.originalEvent ? e.originalEvent : e;
 			i.triggerOnTouchLeave && (qe = L(S), D(t, qe))
 		}

 		function _() {
 			Ze.unbind(Pe, n), Ze.unbind(_e, M), Ze.unbind(Ae, P), Ze.unbind(Me, A), $e && Ze.unbind($e, $), de(!1)
 		}

 		function L(e) {
 			var t = e,
 				n = N(),
 				o = F(),
 				r = H();
 			return !n || r ? t = k : !o || e != T || i.triggerOnTouchEnd && !i.triggerOnTouchLeave ? !o && e == S && i.triggerOnTouchLeave && (t = k) : t = S, t
 		}

 		function D(e, t) {
 			var i, n = e.touches;
 			return (Y() || B()) && (i = z(e, t, p)), (Z() || W()) && i !== !1 && (i = z(e, t, f)), oe() && i !== !1 ? i = z(e, t, m) : re() && i !== !1 ? i = z(e, t, v) : ne() && i !== !1 && (i = z(e, t, h)), t === k && (B() && (i = z(e, t, p)), W() && (i = z(e, t, f)), M(e)), t === S && (n ? n.length || M(e) : M(e)), i
 		}

 		function z(t, n, d) {
 			var u;
 			if (d == p) {
 				if (Ze.trigger("swipeStatus", [n, De || null, Le || 0, Fe || 0, Be, Ye, ze]), i.swipeStatus && (u = i.swipeStatus.call(Ze, t, n, De || null, Le || 0, Fe || 0, Be, Ye, ze), u === !1)) return !1;
 				if (n == S && q()) {
 					if (clearTimeout(Je), clearTimeout(et), Ze.trigger("swipe", [De, Le, Fe, Be, Ye, ze]), i.swipe && (u = i.swipe.call(Ze, t, De, Le, Fe, Be, Ye, ze), u === !1)) return !1;
 					switch (De) {
 						case o:
 							Ze.trigger("swipeLeft", [De, Le, Fe, Be, Ye, ze]), i.swipeLeft && (u = i.swipeLeft.call(Ze, t, De, Le, Fe, Be, Ye, ze));
 							break;
 						case r:
 							Ze.trigger("swipeRight", [De, Le, Fe, Be, Ye, ze]), i.swipeRight && (u = i.swipeRight.call(Ze, t, De, Le, Fe, Be, Ye, ze));
 							break;
 						case s:
 							Ze.trigger("swipeUp", [De, Le, Fe, Be, Ye, ze]), i.swipeUp && (u = i.swipeUp.call(Ze, t, De, Le, Fe, Be, Ye, ze));
 							break;
 						case a:
 							Ze.trigger("swipeDown", [De, Le, Fe, Be, Ye, ze]), i.swipeDown && (u = i.swipeDown.call(Ze, t, De, Le, Fe, Be, Ye, ze))
 					}
 				}
 			}
 			if (d == f) {
 				if (Ze.trigger("pinchStatus", [n, je || null, Ue || 0, Fe || 0, Be, Ne, Ye]), i.pinchStatus && (u = i.pinchStatus.call(Ze, t, n, je || null, Ue || 0, Fe || 0, Be, Ne, Ye), u === !1)) return !1;
 				if (n == S && j()) switch (je) {
 					case l:
 						Ze.trigger("pinchIn", [je || null, Ue || 0, Fe || 0, Be, Ne, Ye]), i.pinchIn && (u = i.pinchIn.call(Ze, t, je || null, Ue || 0, Fe || 0, Be, Ne, Ye));
 						break;
 					case c:
 						Ze.trigger("pinchOut", [je || null, Ue || 0, Fe || 0, Be, Ne, Ye]), i.pinchOut && (u = i.pinchOut.call(Ze, t, je || null, Ue || 0, Fe || 0, Be, Ne, Ye))
 				}
 			}
 			return d == h ? n !== k && n !== S || (clearTimeout(Je), clearTimeout(et), G() && !ee() ? (Qe = Ce(), Je = setTimeout(e.proxy(function () {
 				Qe = null, Ze.trigger("tap", [t.target]), i.tap && (u = i.tap.call(Ze, t, t.target))
 			}, this), i.doubleTapThreshold)) : (Qe = null, Ze.trigger("tap", [t.target]), i.tap && (u = i.tap.call(Ze, t, t.target)))) : d == m ? n !== k && n !== S || (clearTimeout(Je), clearTimeout(et), Qe = null, Ze.trigger("doubletap", [t.target]), i.doubleTap && (u = i.doubleTap.call(Ze, t, t.target))) : d == v && (n !== k && n !== S || (clearTimeout(Je), Qe = null, Ze.trigger("longtap", [t.target]), i.longTap && (u = i.longTap.call(Ze, t, t.target)))), u
 		}

 		function F() {
 			var e = !0;
 			return null !== i.threshold && (e = Le >= i.threshold), e
 		}

 		function H() {
 			var e = !1;
 			return null !== i.cancelThreshold && null !== De && (e = me(De) - Le >= i.cancelThreshold), e
 		}

 		function R() {
 			return null !== i.pinchThreshold ? Ue >= i.pinchThreshold : !0
 		}

 		function N() {
 			var e;
 			return e = i.maxTimeThreshold ? !(Fe >= i.maxTimeThreshold) : !0
 		}

 		function U(e, t) {
 			if (i.preventDefaultEvents !== !1)
 				if (i.allowPageScroll === d) e.preventDefault();
 				else {
 					var n = i.allowPageScroll === u;
 					switch (t) {
 						case o:
 							(i.swipeLeft && n || !n && i.allowPageScroll != g) && e.preventDefault();
 							break;
 						case r:
 							(i.swipeRight && n || !n && i.allowPageScroll != g) && e.preventDefault();
 							break;
 						case s:
 							(i.swipeUp && n || !n && i.allowPageScroll != y) && e.preventDefault();
 							break;
 						case a:
 							(i.swipeDown && n || !n && i.allowPageScroll != y) && e.preventDefault()
 					}
 				}
 		}

 		function j() {
 			var e = K(),
 				t = X(),
 				i = R();
 			return e && t && i
 		}

 		function W() {
 			return !!(i.pinchStatus || i.pinchIn || i.pinchOut)
 		}

 		function Z() {
 			return !(!j() || !W())
 		}

 		function q() {
 			var e = N(),
 				t = F(),
 				i = K(),
 				n = X(),
 				o = H(),
 				r = !o && n && i && t && e;
 			return r
 		}

 		function B() {
 			return !!(i.swipe || i.swipeStatus || i.swipeLeft || i.swipeRight || i.swipeUp || i.swipeDown)
 		}

 		function Y() {
 			return !(!q() || !B())
 		}

 		function K() {
 			return Be === i.fingers || i.fingers === w || !C
 		}

 		function X() {
 			return 0 !== Ye[0].end.x
 		}

 		function V() {
 			return !!i.tap
 		}

 		function G() {
 			return !!i.doubleTap
 		}

 		function Q() {
 			return !!i.longTap
 		}

 		function J() {
 			if (null == Qe) return !1;
 			var e = Ce();
 			return G() && e - Qe <= i.doubleTapThreshold
 		}

 		function ee() {
 			return J()
 		}

 		function te() {
 			return (1 === Be || !C) && (isNaN(Le) || Le < i.threshold)
 		}

 		function ie() {
 			return Fe > i.longTapThreshold && b > Le
 		}

 		function ne() {
 			return !(!te() || !V())
 		}

 		function oe() {
 			return !(!J() || !G())
 		}

 		function re() {
 			return !(!ie() || !Q())
 		}

 		function se(e) {
 			Ve = Ce(), Ge = e.touches.length + 1
 		}

 		function ae() {
 			Ve = 0, Ge = 0
 		}

 		function le() {
 			var e = !1;
 			if (Ve) {
 				var t = Ce() - Ve;
 				t <= i.fingerReleaseThreshold && (e = !0)
 			}
 			return e
 		}

 		function ce() {
 			return !(Ze.data(O + "_intouch") !== !0)
 		}

 		function de(e) {
 			Ze && (e === !0 ? (Ze.bind(Ae, P), Ze.bind(Me, A), $e && Ze.bind($e, $)) : (Ze.unbind(Ae, P, !1), Ze.unbind(Me, A, !1), $e && Ze.unbind($e, $, !1)), Ze.data(O + "_intouch", e === !0))
 		}

 		function ue(e, t) {
 			var i = {
 				start: {
 					x: 0,
 					y: 0
 				},
 				last: {
 					x: 0,
 					y: 0
 				},
 				end: {
 					x: 0,
 					y: 0
 				}
 			};
 			return i.start.x = i.last.x = i.end.x = t.pageX || t.clientX, i.start.y = i.last.y = i.end.y = t.pageY || t.clientY, Ye[e] = i, i
 		}

 		function pe(e) {
 			var t = void 0 !== e.identifier ? e.identifier : 0,
 				i = fe(t);
 			return null === i && (i = ue(t, e)), i.last.x = i.end.x, i.last.y = i.end.y, i.end.x = e.pageX || e.clientX, i.end.y = e.pageY || e.clientY, i
 		}

 		function fe(e) {
 			return Ye[e] || null
 		}

 		function he(e, t) {
 			t = Math.max(t, me(e)), We[e].distance = t
 		}

 		function me(e) {
 			return We[e] ? We[e].distance : void 0
 		}

 		function ve() {
 			var e = {};
 			return e[o] = ge(o), e[r] = ge(r), e[s] = ge(s), e[a] = ge(a), e
 		}

 		function ge(e) {
 			return {
 				direction: e,
 				distance: 0
 			}
 		}

 		function ye() {
 			return Xe - Ke
 		}

 		function we(e, t) {
 			var i = Math.abs(e.x - t.x),
 				n = Math.abs(e.y - t.y);
 			return Math.round(Math.sqrt(i * i + n * n))
 		}

 		function be(e, t) {
 			var i = t / e * 1;
 			return i.toFixed(2)
 		}

 		function xe() {
 			return 1 > Ne ? c : l
 		}

 		function Te(e, t) {
 			return Math.round(Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)))
 		}

 		function Se(e, t) {
 			var i = e.x - t.x,
 				n = t.y - e.y,
 				o = Math.atan2(n, i),
 				r = Math.round(180 * o / Math.PI);
 			return 0 > r && (r = 360 - Math.abs(r)), r
 		}

 		function ke(e, t) {
 			var i = Se(e, t);
 			return 45 >= i && i >= 0 ? o : 360 >= i && i >= 315 ? o : i >= 135 && 225 >= i ? r : i > 45 && 135 > i ? a : s
 		}

 		function Ce() {
 			var e = new Date;
 			return e.getTime()
 		}

 		function Ee(t) {
 			t = e(t);
 			var i = t.offset(),
 				n = {
 					left: i.left,
 					right: i.left + t.outerWidth(),
 					top: i.top,
 					bottom: i.top + t.outerHeight()
 				};
 			return n
 		}

 		function Ie(e, t) {
 			return e.x > t.left && e.x < t.right && e.y > t.top && e.y < t.bottom
 		}
 		var i = e.extend({}, i),
 			Oe = C || I || !i.fallbackToMouseEvents,
 			Pe = Oe ? I ? E ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
 			Ae = Oe ? I ? E ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
 			Me = Oe ? I ? E ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
 			$e = Oe ? I ? "mouseleave" : null : "mouseleave",
 			_e = I ? E ? "MSPointerCancel" : "pointercancel" : "touchcancel",
 			Le = 0,
 			De = null,
 			ze = null,
 			Fe = 0,
 			He = 0,
 			Re = 0,
 			Ne = 1,
 			Ue = 0,
 			je = 0,
 			We = null,
 			Ze = e(t),
 			qe = "start",
 			Be = 0,
 			Ye = {},
 			Ke = 0,
 			Xe = 0,
 			Ve = 0,
 			Ge = 0,
 			Qe = 0,
 			Je = null,
 			et = null;
 		try {
 			Ze.bind(Pe, n), Ze.bind(_e, M)
 		} catch (tt) {
 			e.error("events not supported " + Pe + "," + _e + " on jQuery.swipe")
 		}
 		this.enable = function () {
 			return Ze.bind(Pe, n), Ze.bind(_e, M), Ze
 		}, this.disable = function () {
 			return _(), Ze
 		}, this.destroy = function () {
 			_(), Ze.data(O, null), Ze = null
 		}, this.option = function (t, n) {
 			if ("object" == typeof t) i = e.extend(i, t);
 			else if (void 0 !== i[t]) {
 				if (void 0 === n) return i[t];
 				i[t] = n
 			} else {
 				if (!t) return i;
 				e.error("Option " + t + " does not exist on jQuery.swipe.options")
 			}
 			return null
 		}
 	}
 	var n = "1.6.15",
 		o = "left",
 		r = "right",
 		s = "up",
 		a = "down",
 		l = "in",
 		c = "out",
 		d = "none",
 		u = "auto",
 		p = "swipe",
 		f = "pinch",
 		h = "tap",
 		m = "doubletap",
 		v = "longtap",
 		g = "horizontal",
 		y = "vertical",
 		w = "all",
 		b = 10,
 		x = "start",
 		T = "move",
 		S = "end",
 		k = "cancel",
 		C = "ontouchstart" in window,
 		E = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled && !C,
 		I = (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && !C,
 		O = "TouchSwipe",
 		P = {
 			fingers: 1,
 			threshold: 75,
 			cancelThreshold: null,
 			pinchThreshold: 20,
 			maxTimeThreshold: null,
 			fingerReleaseThreshold: 250,
 			longTapThreshold: 500,
 			doubleTapThreshold: 200,
 			swipe: null,
 			swipeLeft: null,
 			swipeRight: null,
 			swipeUp: null,
 			swipeDown: null,
 			swipeStatus: null,
 			pinchIn: null,
 			pinchOut: null,
 			pinchStatus: null,
 			click: null,
 			tap: null,
 			doubleTap: null,
 			longTap: null,
 			hold: null,
 			triggerOnTouchEnd: !0,
 			triggerOnTouchLeave: !1,
 			allowPageScroll: "auto",
 			fallbackToMouseEvents: !0,
 			excludedElements: "label, button, input, select, textarea, a, .noSwipe",
 			preventDefaultEvents: !0
 		};
 	e.fn.swipe = function (i) {
 		var n = e(this),
 			o = n.data(O);
 		if (o && "string" == typeof i) {
 			if (o[i]) return o[i].apply(this, Array.prototype.slice.call(arguments, 1));
 			e.error("Method " + i + " does not exist on jQuery.swipe")
 		} else if (o && "object" == typeof i) o.option.apply(this, arguments);
 		else if (!(o || "object" != typeof i && i)) return t.apply(this, arguments);
 		return n
 	}, e.fn.swipe.version = n, e.fn.swipe.defaults = P, e.fn.swipe.phases = {
 		PHASE_START: x,
 		PHASE_MOVE: T,
 		PHASE_END: S,
 		PHASE_CANCEL: k
 	}, e.fn.swipe.directions = {
 		LEFT: o,
 		RIGHT: r,
 		UP: s,
 		DOWN: a,
 		IN: l,
 		OUT: c
 	}, e.fn.swipe.pageScroll = {
 		NONE: d,
 		HORIZONTAL: g,
 		VERTICAL: y,
 		AUTO: u
 	}, e.fn.swipe.fingers = {
 		ONE: 1,
 		TWO: 2,
 		THREE: 3,
 		FOUR: 4,
 		FIVE: 5,
 		ALL: w
 	}
 }),
 function (e, t) {
 	"function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipe = t()
 }(this, function () {
 	"use strict";
 	var e = function (e, t, i, n) {
 		var o = {
 			features: null,
 			bind: function (e, t, i, n) {
 				var o = (n ? "remove" : "add") + "EventListener";
 				t = t.split(" ");
 				for (var r = 0; r < t.length; r++) t[r] && e[o](t[r], i, !1)
 			},
 			isArray: function (e) {
 				return e instanceof Array
 			},
 			createEl: function (e, t) {
 				var i = document.createElement(t || "div");
 				return e && (i.className = e), i
 			},
 			getScrollY: function () {
 				var e = window.pageYOffset;
 				return void 0 !== e ? e : document.documentElement.scrollTop
 			},
 			unbind: function (e, t, i) {
 				o.bind(e, t, i, !0)
 			},
 			removeClass: function (e, t) {
 				var i = new RegExp("(\\s|^)" + t + "(\\s|$)");
 				e.className = e.className.replace(i, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
 			},
 			addClass: function (e, t) {
 				o.hasClass(e, t) || (e.className += (e.className ? " " : "") + t)
 			},
 			hasClass: function (e, t) {
 				return e.className && new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
 			},
 			getChildByClass: function (e, t) {
 				for (var i = e.firstChild; i;) {
 					if (o.hasClass(i, t)) return i;
 					i = i.nextSibling
 				}
 			},
 			arraySearch: function (e, t, i) {
 				for (var n = e.length; n--;)
 					if (e[n][i] === t) return n;
 				return -1
 			},
 			extend: function (e, t, i) {
 				for (var n in t)
 					if (t.hasOwnProperty(n)) {
 						if (i && e.hasOwnProperty(n)) continue;
 						e[n] = t[n]
 					}
 			},
 			easing: {
 				sine: {
 					out: function (e) {
 						return Math.sin(e * (Math.PI / 2))
 					},
 					inOut: function (e) {
 						return -(Math.cos(Math.PI * e) - 1) / 2
 					}
 				},
 				cubic: {
 					out: function (e) {
 						return --e * e * e + 1
 					}
 				}
 			},
 			detectFeatures: function () {
 				if (o.features) return o.features;
 				var e = o.createEl(),
 					t = e.style,
 					i = "",
 					n = {};
 				if (n.oldIE = document.all && !document.addEventListener, n.touch = "ontouchstart" in window, window.requestAnimationFrame && (n.raf = window.requestAnimationFrame, n.caf = window.cancelAnimationFrame), n.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !n.pointerEvent) {
 					var r = navigator.userAgent;
 					if (/iP(hone|od)/.test(navigator.platform)) {
 						var s = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
 						s && s.length > 0 && (s = parseInt(s[1], 10), s >= 1 && 8 > s && (n.isOldIOSPhone = !0))
 					}
 					var a = r.match(/Android\s([0-9\.]*)/),
 						l = a ? a[1] : 0;
 					l = parseFloat(l), l >= 1 && (4.4 > l && (n.isOldAndroid = !0), n.androidVersion = l), n.isMobileOpera = /opera mini|opera mobi/i.test(r)
 				}
 				for (var c, d, u = ["transform", "perspective", "animationName"], p = ["", "webkit", "Moz", "ms", "O"], f = 0; 4 > f; f++) {
 					i = p[f];
 					for (var h = 0; 3 > h; h++) c = u[h], d = i + (i ? c.charAt(0).toUpperCase() + c.slice(1) : c), !n[c] && d in t && (n[c] = d);
 					i && !n.raf && (i = i.toLowerCase(), n.raf = window[i + "RequestAnimationFrame"], n.raf && (n.caf = window[i + "CancelAnimationFrame"] || window[i + "CancelRequestAnimationFrame"]))
 				}
 				if (!n.raf) {
 					var m = 0;
 					n.raf = function (e) {
 						var t = (new Date).getTime(),
 							i = Math.max(0, 16 - (t - m)),
 							n = window.setTimeout(function () {
 								e(t + i)
 							}, i);
 						return m = t + i, n
 					}, n.caf = function (e) {
 						clearTimeout(e)
 					}
 				}
 				return n.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, o.features = n, n
 			}
 		};
 		o.detectFeatures(), o.features.oldIE && (o.bind = function (e, t, i, n) {
 			t = t.split(" ");
 			for (var o, r = (n ? "detach" : "attach") + "Event", s = function () {
 					i.handleEvent.call(i)
 				}, a = 0; a < t.length; a++)
 				if (o = t[a])
 					if ("object" == typeof i && i.handleEvent) {
 						if (n) {
 							if (!i["oldIE" + o]) return !1
 						} else i["oldIE" + o] = s;
 						e[r]("on" + o, i["oldIE" + o])
 					} else e[r]("on" + o, i)
 		});
 		var r = this,
 			s = 25,
 			a = 3,
 			l = {
 				allowPanToNext: !0,
 				spacing: .12,
 				bgOpacity: 1,
 				mouseUsed: !1,
 				loop: !0,
 				pinchToClose: !0,
 				closeOnScroll: !0,
 				closeOnVerticalDrag: !0,
 				verticalDragRange: .75,
 				hideAnimationDuration: 333,
 				showAnimationDuration: 333,
 				showHideOpacity: !1,
 				focus: !0,
 				escKey: !0,
 				arrowKeys: !0,
 				mainScrollEndFriction: .35,
 				panEndFriction: .35,
 				isClickableElement: function (e) {
 					return "A" === e.tagName
 				},
 				getDoubleTapZoom: function (e, t) {
 					return e ? 1 : t.initialZoomLevel < .7 ? 1 : 1.33
 				},
 				maxSpreadZoom: 1.33,
 				modal: !0,
 				scaleMode: "fit"
 			};
 		o.extend(l, n);
 		var c, d, u, p, f, h, m, v, g, y, w, b, x, T, S, k, C, E, I, O, P, A, M, $, _, L, D, z, F, H, R, N, U, j, W, Z, q, B, Y, K, X, V, G, Q, J, ee, te, ie, ne, oe, re, se, ae, le, ce, de, ue = function () {
 				return {
 					x: 0,
 					y: 0
 				}
 			},
 			pe = ue(),
 			fe = ue(),
 			he = ue(),
 			me = {},
 			ve = 0,
 			ge = {},
 			ye = ue(),
 			we = 0,
 			be = !0,
 			xe = [],
 			Te = {},
 			Se = !1,
 			ke = function (e, t) {
 				o.extend(r, t.publicMethods), xe.push(e)
 			},
 			Ce = function (e) {
 				var t = Jt();
 				return e > t - 1 ? e - t : 0 > e ? t + e : e
 			},
 			Ee = {},
 			Ie = function (e, t) {
 				return Ee[e] || (Ee[e] = []), Ee[e].push(t)
 			},
 			Oe = function (e) {
 				var t = Ee[e];
 				if (t) {
 					var i = Array.prototype.slice.call(arguments);
 					i.shift();
 					for (var n = 0; n < t.length; n++) t[n].apply(r, i)
 				}
 			},
 			Pe = function () {
 				return (new Date).getTime()
 			},
 			Ae = function (e) {
 				le = e, r.bg.style.opacity = e * l.bgOpacity
 			},
 			Me = function (e, t, i, n, o) {
 				(!Se || o && o !== r.currItem) && (n /= o ? o.fitRatio : r.currItem.fitRatio), e[A] = b + t + "px, " + i + "px" + x + " scale(" + n + ")"
 			},
 			$e = function (e) {
 				ne && (e && (y > r.currItem.fitRatio ? Se || (ui(r.currItem, !1, !0), Se = !0) : Se && (ui(r.currItem), Se = !1)), Me(ne, he.x, he.y, y))
 			},
 			_e = function (e) {
 				e.container && Me(e.container.style, e.initialPosition.x, e.initialPosition.y, e.initialZoomLevel, e)
 			},
 			Le = function (e, t) {
 				t[A] = b + e + "px, 0px" + x
 			},
 			De = function (e, t) {
 				if (!l.loop && t) {
 					var i = p + (ye.x * ve - e) / ye.x,
 						n = Math.round(e - yt.x);
 					(0 > i && n > 0 || i >= Jt() - 1 && 0 > n) && (e = yt.x + n * l.mainScrollEndFriction)
 				}
 				yt.x = e, Le(e, f)
 			},
 			ze = function (e, t) {
 				var i = wt[e] - ge[e];
 				return fe[e] + pe[e] + i - i * (t / w)
 			},
 			Fe = function (e, t) {
 				e.x = t.x, e.y = t.y, t.id && (e.id = t.id)
 			},
 			He = function (e) {
 				e.x = Math.round(e.x), e.y = Math.round(e.y)
 			},
 			Re = null,
 			Ne = function () {
 				Re && (o.unbind(document, "mousemove", Ne), o.addClass(e, "pswp--has_mouse"), l.mouseUsed = !0, Oe("mouseUsed")), Re = setTimeout(function () {
 					Re = null
 				}, 100)
 			},
 			Ue = function () {
 				o.bind(document, "keydown", r), R.transform && o.bind(r.scrollWrap, "click", r), l.mouseUsed || o.bind(document, "mousemove", Ne), o.bind(window, "resize scroll", r), Oe("bindEvents")
 			},
 			je = function () {
 				o.unbind(window, "resize", r), o.unbind(window, "scroll", g.scroll), o.unbind(document, "keydown", r), o.unbind(document, "mousemove", Ne), R.transform && o.unbind(r.scrollWrap, "click", r), B && o.unbind(window, m, r), Oe("unbindEvents")
 			},
 			We = function (e, t) {
 				var i = ai(r.currItem, me, e);
 				return t && (ie = i), i
 			},
 			Ze = function (e) {
 				return e || (e = r.currItem), e.initialZoomLevel
 			},
 			qe = function (e) {
 				return e || (e = r.currItem), e.w > 0 ? l.maxSpreadZoom : 1
 			},
 			Be = function (e, t, i, n) {
 				return n === r.currItem.initialZoomLevel ? (i[e] = r.currItem.initialPosition[e], !0) : (i[e] = ze(e, n), i[e] > t.min[e] ? (i[e] = t.min[e], !0) : i[e] < t.max[e] ? (i[e] = t.max[e], !0) : !1)
 			},
 			Ye = function () {
 				if (A) {
 					var t = R.perspective && !$;
 					return b = "translate" + (t ? "3d(" : "("), void(x = R.perspective ? ", 0px)" : ")")
 				}
 				A = "left", o.addClass(e, "pswp--ie"), Le = function (e, t) {
 					t.left = e + "px"
 				}, _e = function (e) {
 					var t = e.fitRatio > 1 ? 1 : e.fitRatio,
 						i = e.container.style,
 						n = t * e.w,
 						o = t * e.h;
 					i.width = n + "px", i.height = o + "px", i.left = e.initialPosition.x + "px", i.top = e.initialPosition.y + "px"
 				}, $e = function () {
 					if (ne) {
 						var e = ne,
 							t = r.currItem,
 							i = t.fitRatio > 1 ? 1 : t.fitRatio,
 							n = i * t.w,
 							o = i * t.h;
 						e.width = n + "px", e.height = o + "px", e.left = he.x + "px", e.top = he.y + "px"
 					}
 				}
 			},
 			Ke = function (e) {
 				var t = "";
 				l.escKey && 27 === e.keyCode ? t = "close" : l.arrowKeys && (37 === e.keyCode ? t = "prev" : 39 === e.keyCode && (t = "next")), t && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault ? e.preventDefault() : e.returnValue = !1, r[t]()))
 			},
 			Xe = function (e) {
 				e && (X || K || oe || Z) && (e.preventDefault(), e.stopPropagation())
 			},
 			Ve = function () {
 				r.setScrollOffset(0, o.getScrollY())
 			},
 			Ge = {},
 			Qe = 0,
 			Je = function (e) {
 				Ge[e] && (Ge[e].raf && L(Ge[e].raf), Qe--, delete Ge[e])
 			},
 			et = function (e) {
 				Ge[e] && Je(e), Ge[e] || (Qe++, Ge[e] = {})
 			},
 			tt = function () {
 				for (var e in Ge) Ge.hasOwnProperty(e) && Je(e)
 			},
 			it = function (e, t, i, n, o, r, s) {
 				var a, l = Pe();
 				et(e);
 				var c = function () {
 					if (Ge[e]) {
 						if (a = Pe() - l, a >= n) return Je(e), r(i), void(s && s());
 						r((i - t) * o(a / n) + t), Ge[e].raf = _(c)
 					}
 				};
 				c()
 			},
 			nt = {
 				shout: Oe,
 				listen: Ie,
 				viewportSize: me,
 				options: l,
 				isMainScrollAnimating: function () {
 					return oe
 				},
 				getZoomLevel: function () {
 					return y
 				},
 				getCurrentIndex: function () {
 					return p
 				},
 				isDragging: function () {
 					return B
 				},
 				isZooming: function () {
 					return J
 				},
 				setScrollOffset: function (e, t) {
 					ge.x = e, H = ge.y = t, Oe("updateScrollOffset", ge)
 				},
 				applyZoomPan: function (e, t, i, n) {
 					he.x = t, he.y = i, y = e, $e(n)
 				},
 				init: function () {
 					if (!c && !d) {
 						var i;
 						r.framework = o, r.template = e, r.bg = o.getChildByClass(e, "pswp__bg"), D = e.className, c = !0, R = o.detectFeatures(), _ = R.raf, L = R.caf, A = R.transform, F = R.oldIE, r.scrollWrap = o.getChildByClass(e, "pswp__scroll-wrap"), r.container = o.getChildByClass(r.scrollWrap, "pswp__container"), f = r.container.style, r.itemHolders = k = [{
 							el: r.container.children[0],
 							wrap: 0,
 							index: -1
 						}, {
 							el: r.container.children[1],
 							wrap: 0,
 							index: -1
 						}, {
 							el: r.container.children[2],
 							wrap: 0,
 							index: -1
 						}], k[0].el.style.display = k[2].el.style.display = "none", Ye(), g = {
 							resize: r.updateSize,
 							scroll: Ve,
 							keydown: Ke,
 							click: Xe
 						};
 						var n = R.isOldIOSPhone || R.isOldAndroid || R.isMobileOpera;
 						for (R.animationName && R.transform && !n || (l.showAnimationDuration = l.hideAnimationDuration = 0), i = 0; i < xe.length; i++) r["init" + xe[i]]();
 						if (t) {
 							var s = r.ui = new t(r, o);
 							s.init()
 						}
 						Oe("firstUpdate"), p = p || l.index || 0, (isNaN(p) || 0 > p || p >= Jt()) && (p = 0), r.currItem = Qt(p), (R.isOldIOSPhone || R.isOldAndroid) && (be = !1), e.setAttribute("aria-hidden", "false"), l.modal && (be ? e.style.position = "fixed" : (e.style.position = "absolute", e.style.top = o.getScrollY() + "px")), void 0 === H && (Oe("initialLayout"), H = z = o.getScrollY());
 						var u = "pswp--open ";
 						for (l.mainClass && (u += l.mainClass + " "), l.showHideOpacity && (u += "pswp--animate_opacity "), u += $ ? "pswp--touch" : "pswp--notouch", u += R.animationName ? " pswp--css_animation" : "", u += R.svg ? " pswp--svg" : "", o.addClass(e, u), r.updateSize(), h = -1, we = null, i = 0; a > i; i++) Le((i + h) * ye.x, k[i].el.style);
 						F || o.bind(r.scrollWrap, v, r), Ie("initialZoomInEnd", function () {
 							r.setContent(k[0], p - 1), r.setContent(k[2], p + 1), k[0].el.style.display = k[2].el.style.display = "block", l.focus && e.focus(), Ue()
 						}), r.setContent(k[1], p), r.updateCurrItem(), Oe("afterInit"), be || (T = setInterval(function () {
 							Qe || B || J || y !== r.currItem.initialZoomLevel || r.updateSize()
 						}, 1e3)), o.addClass(e, "pswp--visible")
 					}
 				},
 				close: function () {
 					c && (c = !1, d = !0, Oe("close"), je(), ti(r.currItem, null, !0, r.destroy))
 				},
 				destroy: function () {
 					Oe("destroy"), Kt && clearTimeout(Kt), e.setAttribute("aria-hidden", "true"), e.className = D, T && clearInterval(T), o.unbind(r.scrollWrap, v, r), o.unbind(window, "scroll", r), kt(), tt(), Ee = null
 				},
 				panTo: function (e, t, i) {
 					i || (e > ie.min.x ? e = ie.min.x : e < ie.max.x && (e = ie.max.x), t > ie.min.y ? t = ie.min.y : t < ie.max.y && (t = ie.max.y)), he.x = e, he.y = t, $e()
 				},
 				handleEvent: function (e) {
 					e = e || window.event, g[e.type] && g[e.type](e)
 				},
 				goTo: function (e) {
 					e = Ce(e);
 					var t = e - p;
 					we = t, p = e, r.currItem = Qt(p), ve -= t, De(ye.x * ve), tt(), oe = !1, r.updateCurrItem()
 				},
 				next: function () {
 					r.goTo(p + 1)
 				},
 				prev: function () {
 					r.goTo(p - 1)
 				},
 				updateCurrZoomItem: function (e) {
 					if (e && Oe("beforeChange", 0), k[1].el.children.length) {
 						var t = k[1].el.children[0];
 						ne = o.hasClass(t, "pswp__zoom-wrap") ? t.style : null
 					} else ne = null;
 					ie = r.currItem.bounds, w = y = r.currItem.initialZoomLevel, he.x = ie.center.x, he.y = ie.center.y, e && Oe("afterChange")
 				},
 				invalidateCurrItems: function () {
 					S = !0;
 					for (var e = 0; a > e; e++) k[e].item && (k[e].item.needsUpdate = !0)
 				},
 				updateCurrItem: function (e) {
 					if (0 !== we) {
 						var t, i = Math.abs(we);
 						if (!(e && 2 > i)) {
 							r.currItem = Qt(p), Se = !1, Oe("beforeChange", we), i >= a && (h += we + (we > 0 ? -a : a), i = a);
 							for (var n = 0; i > n; n++) we > 0 ? (t = k.shift(), k[a - 1] = t, h++, Le((h + 2) * ye.x, t.el.style), r.setContent(t, p - i + n + 1 + 1)) : (t = k.pop(), k.unshift(t), h--, Le(h * ye.x, t.el.style), r.setContent(t, p + i - n - 1 - 1));
 							if (ne && 1 === Math.abs(we)) {
 								var o = Qt(C);
 								o.initialZoomLevel !== y && (ai(o, me), ui(o), _e(o))
 							}
 							we = 0, r.updateCurrZoomItem(), C = p, Oe("afterChange")
 						}
 					}
 				},
 				updateSize: function (t) {
 					if (!be && l.modal) {
 						var i = o.getScrollY();
 						if (H !== i && (e.style.top = i + "px", H = i), !t && Te.x === window.innerWidth && Te.y === window.innerHeight) return;
 						Te.x = window.innerWidth, Te.y = window.innerHeight, e.style.height = Te.y + "px"
 					}
 					if (me.x = r.scrollWrap.clientWidth, me.y = r.scrollWrap.clientHeight, Ve(), ye.x = me.x + Math.round(me.x * l.spacing), ye.y = me.y, De(ye.x * ve), Oe("beforeResize"), void 0 !== h) {
 						for (var n, s, c, d = 0; a > d; d++) n = k[d], Le((d + h) * ye.x, n.el.style), c = p + d - 1, l.loop && Jt() > 2 && (c = Ce(c)), s = Qt(c), s && (S || s.needsUpdate || !s.bounds) ? (r.cleanSlide(s), r.setContent(n, c), 1 === d && (r.currItem = s, r.updateCurrZoomItem(!0)), s.needsUpdate = !1) : -1 === n.index && c >= 0 && r.setContent(n, c), s && s.container && (ai(s, me), ui(s), _e(s));
 						S = !1
 					}
 					w = y = r.currItem.initialZoomLevel, ie = r.currItem.bounds, ie && (he.x = ie.center.x, he.y = ie.center.y, $e(!0)), Oe("resize")
 				},
 				zoomTo: function (e, t, i, n, r) {
 					t && (w = y, wt.x = Math.abs(t.x) - he.x, wt.y = Math.abs(t.y) - he.y, Fe(fe, he));
 					var s = We(e, !1),
 						a = {};
 					Be("x", s, a, e), Be("y", s, a, e);
 					var l = y,
 						c = {
 							x: he.x,
 							y: he.y
 						};
 					He(a);
 					var d = function (t) {
 						1 === t ? (y = e, he.x = a.x, he.y = a.y) : (y = (e - l) * t + l, he.x = (a.x - c.x) * t + c.x, he.y = (a.y - c.y) * t + c.y), r && r(t), $e(1 === t)
 					};
 					i ? it("customZoomTo", 0, 1, i, n || o.easing.sine.inOut, d) : d(1)
 				}
 			},
 			ot = 30,
 			rt = 10,
 			st = {},
 			at = {},
 			lt = {},
 			ct = {},
 			dt = {},
 			ut = [],
 			pt = {},
 			ft = [],
 			ht = {},
 			mt = 0,
 			vt = ue(),
 			gt = 0,
 			yt = ue(),
 			wt = ue(),
 			bt = ue(),
 			xt = function (e, t) {
 				return e.x === t.x && e.y === t.y
 			},
 			Tt = function (e, t) {
 				return Math.abs(e.x - t.x) < s && Math.abs(e.y - t.y) < s
 			},
 			St = function (e, t) {
 				return ht.x = Math.abs(e.x - t.x), ht.y = Math.abs(e.y - t.y), Math.sqrt(ht.x * ht.x + ht.y * ht.y)
 			},
 			kt = function () {
 				V && (L(V), V = null)
 			},
 			Ct = function () {
 				B && (V = _(Ct), Ut())
 			},
 			Et = function () {
 				return !("fit" === l.scaleMode && y === r.currItem.initialZoomLevel)
 			},
 			It = function (e, t) {
 				return e && e !== document ? e.getAttribute("class") && e.getAttribute("class").indexOf("pswp__scroll-wrap") > -1 ? !1 : t(e) ? e : It(e.parentNode, t) : !1
 			},
 			Ot = {},
 			Pt = function (e, t) {
 				return Ot.prevent = !It(e.target, l.isClickableElement), Oe("preventDragEvent", e, t, Ot), Ot.prevent
 			},
 			At = function (e, t) {
 				return t.x = e.pageX, t.y = e.pageY, t.id = e.identifier, t
 			},
 			Mt = function (e, t, i) {
 				i.x = .5 * (e.x + t.x), i.y = .5 * (e.y + t.y)
 			},
 			$t = function (e, t, i) {
 				if (e - U > 50) {
 					var n = ft.length > 2 ? ft.shift() : {};
 					n.x = t, n.y = i, ft.push(n), U = e
 				}
 			},
 			_t = function () {
 				var e = he.y - r.currItem.initialPosition.y;
 				return 1 - Math.abs(e / (me.y / 2))
 			},
 			Lt = {},
 			Dt = {},
 			zt = [],
 			Ft = function (e) {
 				for (; zt.length > 0;) zt.pop();
 				return M ? (de = 0, ut.forEach(function (e) {
 					0 === de ? zt[0] = e : 1 === de && (zt[1] = e), de++
 				})) : e.type.indexOf("touch") > -1 ? e.touches && e.touches.length > 0 && (zt[0] = At(e.touches[0], Lt), e.touches.length > 1 && (zt[1] = At(e.touches[1], Dt))) : (Lt.x = e.pageX, Lt.y = e.pageY, Lt.id = "", zt[0] = Lt), zt
 			},
 			Ht = function (e, t) {
 				var i, n, o, s, a = 0,
 					c = he[e] + t[e],
 					d = t[e] > 0,
 					u = yt.x + t.x,
 					p = yt.x - pt.x;
 				return i = c > ie.min[e] || c < ie.max[e] ? l.panEndFriction : 1, c = he[e] + t[e] * i, !l.allowPanToNext && y !== r.currItem.initialZoomLevel || (ne ? "h" !== re || "x" !== e || K || (d ? (c > ie.min[e] && (i = l.panEndFriction, a = ie.min[e] - c, n = ie.min[e] - fe[e]), (0 >= n || 0 > p) && Jt() > 1 ? (s = u, 0 > p && u > pt.x && (s = pt.x)) : ie.min.x !== ie.max.x && (o = c)) : (c < ie.max[e] && (i = l.panEndFriction, a = c - ie.max[e], n = fe[e] - ie.max[e]), (0 >= n || p > 0) && Jt() > 1 ? (s = u, p > 0 && u < pt.x && (s = pt.x)) : ie.min.x !== ie.max.x && (o = c))) : s = u, "x" !== e) ? void(oe || G || y > r.currItem.fitRatio && (he[e] += t[e] * i)) : (void 0 !== s && (De(s, !0), G = s !== pt.x), ie.min.x !== ie.max.x && (void 0 !== o ? he.x = o : G || (he.x += t.x * i)), void 0 !== s)
 			},
 			Rt = function (e) {
 				if (!("mousedown" === e.type && e.button > 0)) {
 					if (Gt) return void e.preventDefault();
 					if (!q || "mousedown" !== e.type) {
 						if (Pt(e, !0) && e.preventDefault(), Oe("pointerDown"), M) {
 							var t = o.arraySearch(ut, e.pointerId, "id");
 							0 > t && (t = ut.length), ut[t] = {
 								x: e.pageX,
 								y: e.pageY,
 								id: e.pointerId
 							}
 						}
 						var i = Ft(e),
 							n = i.length;
 						Q = null, tt(), B && 1 !== n || (B = se = !0, o.bind(window, m, r), W = ce = ae = Z = G = X = Y = K = !1, re = null, Oe("firstTouchStart", i), Fe(fe, he), pe.x = pe.y = 0, Fe(ct, i[0]), Fe(dt, ct), pt.x = ye.x * ve, ft = [{
 							x: ct.x,
 							y: ct.y
 						}], U = N = Pe(), We(y, !0), kt(), Ct()), !J && n > 1 && !oe && !G && (w = y, K = !1, J = Y = !0, pe.y = pe.x = 0, Fe(fe, he), Fe(st, i[0]), Fe(at, i[1]), Mt(st, at, bt), wt.x = Math.abs(bt.x) - he.x, wt.y = Math.abs(bt.y) - he.y, ee = te = St(st, at))
 					}
 				}
 			},
 			Nt = function (e) {
 				if (e.preventDefault(), M) {
 					var t = o.arraySearch(ut, e.pointerId, "id");
 					if (t > -1) {
 						var i = ut[t];
 						i.x = e.pageX, i.y = e.pageY
 					}
 				}
 				if (B) {
 					var n = Ft(e);
 					if (re || X || J) Q = n;
 					else if (yt.x !== ye.x * ve) re = "h";
 					else {
 						var r = Math.abs(n[0].x - ct.x) - Math.abs(n[0].y - ct.y);
 						Math.abs(r) >= rt && (re = r > 0 ? "h" : "v", Q = n)
 					}
 				}
 			},
 			Ut = function () {
 				if (Q) {
 					var e = Q.length;
 					if (0 !== e)
 						if (Fe(st, Q[0]), lt.x = st.x - ct.x, lt.y = st.y - ct.y, J && e > 1) {
 							if (ct.x = st.x, ct.y = st.y, !lt.x && !lt.y && xt(Q[1], at)) return;
 							Fe(at, Q[1]), K || (K = !0, Oe("zoomGestureStarted"));
 							var t = St(st, at),
 								i = Bt(t);
 							i > r.currItem.initialZoomLevel + r.currItem.initialZoomLevel / 15 && (ce = !0);
 							var n = 1,
 								o = Ze(),
 								s = qe();
 							if (o > i)
 								if (l.pinchToClose && !ce && w <= r.currItem.initialZoomLevel) {
 									var a = o - i,
 										c = 1 - a / (o / 1.2);
 									Ae(c), Oe("onPinchClose", c), ae = !0
 								} else n = (o - i) / o, n > 1 && (n = 1), i = o - n * (o / 3);
 							else i > s && (n = (i - s) / (6 * o), n > 1 && (n = 1), i = s + n * o);
 							0 > n && (n = 0), ee = t, Mt(st, at, vt), pe.x += vt.x - bt.x, pe.y += vt.y - bt.y, Fe(bt, vt), he.x = ze("x", i), he.y = ze("y", i), W = i > y, y = i, $e()
 						} else {
 							if (!re) return;
 							if (se && (se = !1, Math.abs(lt.x) >= rt && (lt.x -= Q[0].x - dt.x), Math.abs(lt.y) >= rt && (lt.y -= Q[0].y - dt.y)), ct.x = st.x, ct.y = st.y, 0 === lt.x && 0 === lt.y) return;
 							if ("v" === re && l.closeOnVerticalDrag && !Et()) {
 								pe.y += lt.y, he.y += lt.y;
 								var d = _t();
 								return Z = !0, Oe("onVerticalDrag", d), Ae(d), void $e()
 							}
 							$t(Pe(), st.x, st.y), X = !0, ie = r.currItem.bounds;
 							var u = Ht("x", lt);
 							u || (Ht("y", lt), He(he), $e())
 						}
 				}
 			},
 			jt = function (e) {
 				if (R.isOldAndroid) {
 					if (q && "mouseup" === e.type) return;
 					e.type.indexOf("touch") > -1 && (clearTimeout(q), q = setTimeout(function () {
 						q = 0
 					}, 600))
 				}
 				Oe("pointerUp"), Pt(e, !1) && e.preventDefault();
 				var t;
 				if (M) {
 					var i = o.arraySearch(ut, e.pointerId, "id");
 					if (i > -1)
 						if (t = ut.splice(i, 1)[0], navigator.pointerEnabled) t.type = e.pointerType || "mouse";
 						else {
 							var n = {
 								4: "mouse",
 								2: "touch",
 								3: "pen"
 							};
 							t.type = n[e.pointerType], t.type || (t.type = e.pointerType || "mouse")
 						}
 				}
 				var s, a = Ft(e),
 					c = a.length;
 				if ("mouseup" === e.type && (c = 0), 2 === c) return Q = null, !0;
 				1 === c && Fe(dt, a[0]), 0 !== c || re || oe || (t || ("mouseup" === e.type ? t = {
 					x: e.pageX,
 					y: e.pageY,
 					type: "mouse"
 				} : e.changedTouches && e.changedTouches[0] && (t = {
 					x: e.changedTouches[0].pageX,
 					y: e.changedTouches[0].pageY,
 					type: "touch"
 				})), Oe("touchRelease", e, t));
 				var d = -1;
 				if (0 === c && (B = !1, o.unbind(window, m, r), kt(), J ? d = 0 : -1 !== gt && (d = Pe() - gt)), gt = 1 === c ? Pe() : -1, s = -1 !== d && 150 > d ? "zoom" : "swipe", J && 2 > c && (J = !1, 1 === c && (s = "zoomPointerUp"), Oe("zoomGestureEnded")), Q = null, X || K || oe || Z)
 					if (tt(), j || (j = Wt()), j.calculateSwipeSpeed("x"), Z) {
 						var u = _t();
 						if (u < l.verticalDragRange) r.close();
 						else {
 							var p = he.y,
 								f = le;
 							it("verticalDrag", 0, 1, 300, o.easing.cubic.out, function (e) {
 								he.y = (r.currItem.initialPosition.y - p) * e + p, Ae((1 - f) * e + f), $e()
 							}), Oe("onVerticalDrag", 1)
 						}
 					} else {
 						if ((G || oe) && 0 === c) {
 							var h = qt(s, j);
 							if (h) return;
 							s = "zoomPointerUp"
 						}
 						if (!oe) return "swipe" !== s ? void Yt() : void(!G && y > r.currItem.fitRatio && Zt(j))
 					}
 			},
 			Wt = function () {
 				var e, t, i = {
 					lastFlickOffset: {},
 					lastFlickDist: {},
 					lastFlickSpeed: {},
 					slowDownRatio: {},
 					slowDownRatioReverse: {},
 					speedDecelerationRatio: {},
 					speedDecelerationRatioAbs: {},
 					distanceOffset: {},
 					backAnimDestination: {},
 					backAnimStarted: {},
 					calculateSwipeSpeed: function (n) {
 						ft.length > 1 ? (e = Pe() - U + 50, t = ft[ft.length - 2][n]) : (e = Pe() - N, t = dt[n]), i.lastFlickOffset[n] = ct[n] - t, i.lastFlickDist[n] = Math.abs(i.lastFlickOffset[n]), i.lastFlickDist[n] > 20 ? i.lastFlickSpeed[n] = i.lastFlickOffset[n] / e : i.lastFlickSpeed[n] = 0, Math.abs(i.lastFlickSpeed[n]) < .1 && (i.lastFlickSpeed[n] = 0), i.slowDownRatio[n] = .95, i.slowDownRatioReverse[n] = 1 - i.slowDownRatio[n], i.speedDecelerationRatio[n] = 1
 					},
 					calculateOverBoundsAnimOffset: function (e, t) {
 						i.backAnimStarted[e] || (he[e] > ie.min[e] ? i.backAnimDestination[e] = ie.min[e] : he[e] < ie.max[e] && (i.backAnimDestination[e] = ie.max[e]), void 0 !== i.backAnimDestination[e] && (i.slowDownRatio[e] = .7, i.slowDownRatioReverse[e] = 1 - i.slowDownRatio[e], i.speedDecelerationRatioAbs[e] < .05 && (i.lastFlickSpeed[e] = 0, i.backAnimStarted[e] = !0, it("bounceZoomPan" + e, he[e], i.backAnimDestination[e], t || 300, o.easing.sine.out, function (t) {
 							he[e] = t, $e()
 						}))))
 					},
 					calculateAnimOffset: function (e) {
 						i.backAnimStarted[e] || (i.speedDecelerationRatio[e] = i.speedDecelerationRatio[e] * (i.slowDownRatio[e] + i.slowDownRatioReverse[e] - i.slowDownRatioReverse[e] * i.timeDiff / 10), i.speedDecelerationRatioAbs[e] = Math.abs(i.lastFlickSpeed[e] * i.speedDecelerationRatio[e]), i.distanceOffset[e] = i.lastFlickSpeed[e] * i.speedDecelerationRatio[e] * i.timeDiff, he[e] += i.distanceOffset[e])
 					},
 					panAnimLoop: function () {
 						return Ge.zoomPan && (Ge.zoomPan.raf = _(i.panAnimLoop), i.now = Pe(), i.timeDiff = i.now - i.lastNow, i.lastNow = i.now, i.calculateAnimOffset("x"), i.calculateAnimOffset("y"), $e(), i.calculateOverBoundsAnimOffset("x"), i.calculateOverBoundsAnimOffset("y"), i.speedDecelerationRatioAbs.x < .05 && i.speedDecelerationRatioAbs.y < .05) ? (he.x = Math.round(he.x), he.y = Math.round(he.y), $e(), void Je("zoomPan")) : void 0
 					}
 				};
 				return i
 			},
 			Zt = function (e) {
 				return e.calculateSwipeSpeed("y"), ie = r.currItem.bounds, e.backAnimDestination = {}, e.backAnimStarted = {}, Math.abs(e.lastFlickSpeed.x) <= .05 && Math.abs(e.lastFlickSpeed.y) <= .05 ? (e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0, e.calculateOverBoundsAnimOffset("x"), e.calculateOverBoundsAnimOffset("y"), !0) : (et("zoomPan"), e.lastNow = Pe(), void e.panAnimLoop())
 			},
 			qt = function (e, t) {
 				var i;
 				oe || (mt = p);
 				var n;
 				if ("swipe" === e) {
 					var s = ct.x - dt.x,
 						a = t.lastFlickDist.x < 10;
 					s > ot && (a || t.lastFlickOffset.x > 20) ? n = -1 : -ot > s && (a || t.lastFlickOffset.x < -20) && (n = 1)
 				}
 				var c;
 				n && (p += n, 0 > p ? (p = l.loop ? Jt() - 1 : 0, c = !0) : p >= Jt() && (p = l.loop ? 0 : Jt() - 1, c = !0), c && !l.loop || (we += n, ve -= n, i = !0));
 				var d, u = ye.x * ve,
 					f = Math.abs(u - yt.x);
 				return i || u > yt.x == t.lastFlickSpeed.x > 0 ? (d = Math.abs(t.lastFlickSpeed.x) > 0 ? f / Math.abs(t.lastFlickSpeed.x) : 333, d = Math.min(d, 400), d = Math.max(d, 250)) : d = 333, mt === p && (i = !1), oe = !0, Oe("mainScrollAnimStart"), it("mainScroll", yt.x, u, d, o.easing.cubic.out, De, function () {
 					tt(), oe = !1, mt = -1, (i || mt !== p) && r.updateCurrItem(), Oe("mainScrollAnimComplete")
 				}), i && r.updateCurrItem(!0), i
 			},
 			Bt = function (e) {
 				return 1 / te * e * w
 			},
 			Yt = function () {
 				var e = y,
 					t = Ze(),
 					i = qe();
 				t > y ? e = t : y > i && (e = i);
 				var n, s = 1,
 					a = le;
 				return ae && !W && !ce && t > y ? (r.close(), !0) : (ae && (n = function (e) {
 					Ae((s - a) * e + a)
 				}), r.zoomTo(e, 0, 200, o.easing.cubic.out, n), !0)
 			};
 		ke("Gestures", {
 			publicMethods: {
 				initGestures: function () {
 					var e = function (e, t, i, n, o) {
 						E = e + t, I = e + i, O = e + n, P = o ? e + o : ""
 					};
 					M = R.pointerEvent, M && R.touch && (R.touch = !1), M ? navigator.pointerEnabled ? e("pointer", "down", "move", "up", "cancel") : e("MSPointer", "Down", "Move", "Up", "Cancel") : R.touch ? (e("touch", "start", "move", "end", "cancel"), $ = !0) : e("mouse", "down", "move", "up"), m = I + " " + O + " " + P, v = E, M && !$ && ($ = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), r.likelyTouchDevice = $, g[E] = Rt, g[I] = Nt, g[O] = jt, P && (g[P] = g[O]), R.touch && (v += " mousedown", m += " mousemove mouseup", g.mousedown = g[E], g.mousemove = g[I], g.mouseup = g[O]), $ || (l.allowPanToNext = !1)
 				}
 			}
 		});
 		var Kt, Xt, Vt, Gt, Qt, Jt, ei, ti = function (t, i, n, s) {
 				Kt && clearTimeout(Kt), Gt = !0, Vt = !0;
 				var a;
 				t.initialLayout ? (a = t.initialLayout, t.initialLayout = null) : a = l.getThumbBoundsFn && l.getThumbBoundsFn(p);
 				var c = n ? l.hideAnimationDuration : l.showAnimationDuration,
 					d = function () {
 						Je("initialZoom"), n ? (r.template.removeAttribute("style"), r.bg.removeAttribute("style")) : (Ae(1), i && (i.style.display = "block"), o.addClass(e, "pswp--animated-in"), Oe("initialZoom" + (n ? "OutEnd" : "InEnd"))), s && s(), Gt = !1
 					};
 				if (!c || !a || void 0 === a.x) return Oe("initialZoom" + (n ? "Out" : "In")), y = t.initialZoomLevel, Fe(he, t.initialPosition), $e(), e.style.opacity = n ? 0 : 1, Ae(1), void(c ? setTimeout(function () {
 					d()
 				}, c) : d());
 				var f = function () {
 					var i = u,
 						s = !r.currItem.src || r.currItem.loadError || l.showHideOpacity;
 					t.miniImg && (t.miniImg.style.webkitBackfaceVisibility = "hidden"), n || (y = a.w / t.w, he.x = a.x, he.y = a.y - z, r[s ? "template" : "bg"].style.opacity = .001, $e()), et("initialZoom"), n && !i && o.removeClass(e, "pswp--animated-in"), s && (n ? o[(i ? "remove" : "add") + "Class"](e, "pswp--animate_opacity") : setTimeout(function () {
 						o.addClass(e, "pswp--animate_opacity")
 					}, 30)), Kt = setTimeout(function () {
 						if (Oe("initialZoom" + (n ? "Out" : "In")), n) {
 							var r = a.w / t.w,
 								l = {
 									x: he.x,
 									y: he.y
 								},
 								u = y,
 								p = le,
 								f = function (t) {
 									1 === t ? (y = r, he.x = a.x, he.y = a.y - H) : (y = (r - u) * t + u, he.x = (a.x - l.x) * t + l.x, he.y = (a.y - H - l.y) * t + l.y), $e(), s ? e.style.opacity = 1 - t : Ae(p - t * p)
 								};
 							i ? it("initialZoom", 0, 1, c, o.easing.cubic.out, f, d) : (f(1), Kt = setTimeout(d, c + 20))
 						} else y = t.initialZoomLevel, Fe(he, t.initialPosition), $e(), Ae(1), s ? e.style.opacity = 1 : Ae(1), Kt = setTimeout(d, c + 20)
 					}, n ? 25 : 90)
 				};
 				f()
 			},
 			ii = {},
 			ni = [],
 			oi = {
 				index: 0,
 				errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
 				forceProgressiveLoading: !1,
 				preload: [1, 1],
 				getNumItemsFn: function () {
 					return Xt.length
 				}
 			},
 			ri = function () {
 				return {
 					center: {
 						x: 0,
 						y: 0
 					},
 					max: {
 						x: 0,
 						y: 0
 					},
 					min: {
 						x: 0,
 						y: 0
 					}
 				}
 			},
 			si = function (e, t, i) {
 				var n = e.bounds;
 				n.center.x = Math.round((ii.x - t) / 2), n.center.y = Math.round((ii.y - i) / 2) + e.vGap.top, n.max.x = t > ii.x ? Math.round(ii.x - t) : n.center.x, n.max.y = i > ii.y ? Math.round(ii.y - i) + e.vGap.top : n.center.y, n.min.x = t > ii.x ? 0 : n.center.x, n.min.y = i > ii.y ? e.vGap.top : n.center.y
 			},
 			ai = function (e, t, i) {
 				if (e.src && !e.loadError) {
 					var n = !i;
 					if (n && (e.vGap || (e.vGap = {
 							top: 0,
 							bottom: 0
 						}), Oe("parseVerticalMargin", e)), ii.x = t.x, ii.y = t.y - e.vGap.top - e.vGap.bottom, n) {
 						var o = ii.x / e.w,
 							r = ii.y / e.h;
 						e.fitRatio = r > o ? o : r;
 						var s = l.scaleMode;
 						"orig" === s ? i = 1 : "fit" === s && (i = e.fitRatio), i > 1 && (i = 1), e.initialZoomLevel = i, e.bounds || (e.bounds = ri())
 					}
 					if (!i) return;
 					return si(e, e.w * i, e.h * i), n && i === e.initialZoomLevel && (e.initialPosition = e.bounds.center), e.bounds
 				}
 				return e.w = e.h = 0, e.initialZoomLevel = e.fitRatio = 1, e.bounds = ri(), e.initialPosition = e.bounds.center, e.bounds
 			},
 			li = function (e, t, i, n, o, s) {
 				t.loadError || n && (t.imageAppended = !0, ui(t, n, t === r.currItem && Se), i.appendChild(n), s && setTimeout(function () {
 					t && t.loaded && t.placeholder && (t.placeholder.style.display = "none", t.placeholder = null)
 				}, 500))
 			},
 			ci = function (e) {
 				e.loading = !0, e.loaded = !1;
 				var t = e.img = o.createEl("pswp__img", "img"),
 					i = function () {
 						e.loading = !1, e.loaded = !0, e.loadComplete ? e.loadComplete(e) : e.img = null, t.onload = t.onerror = null, t = null
 					};
 				return t.onload = i, t.onerror = function () {
 					e.loadError = !0, i()
 				}, t.src = e.src, t
 			},
 			di = function (e, t) {
 				return e.src && e.loadError && e.container ? (t && (e.container.innerHTML = ""), e.container.innerHTML = l.errorMsg.replace("%url%", e.src), !0) : void 0
 			},
 			ui = function (e, t, i) {
 				if (e.src) {
 					t || (t = e.container.lastChild);
 					var n = i ? e.w : Math.round(e.w * e.fitRatio),
 						o = i ? e.h : Math.round(e.h * e.fitRatio);
 					e.placeholder && !e.loaded && (e.placeholder.style.width = n + "px", e.placeholder.style.height = o + "px"), t.style.width = n + "px", t.style.height = o + "px"
 				}
 			},
 			pi = function () {
 				if (ni.length) {
 					for (var e, t = 0; t < ni.length; t++) e = ni[t], e.holder.index === e.index && li(e.index, e.item, e.baseDiv, e.img, !1, e.clearPlaceholder);
 					ni = []
 				}
 			};
 		ke("Controller", {
 			publicMethods: {
 				lazyLoadItem: function (e) {
 					e = Ce(e);
 					var t = Qt(e);
 					t && (!t.loaded && !t.loading || S) && (Oe("gettingData", e, t), t.src && ci(t))
 				},
 				initController: function () {
 					o.extend(l, oi, !0), r.items = Xt = i, Qt = r.getItemAt, Jt = l.getNumItemsFn, ei = l.loop, Jt() < 3 && (l.loop = !1), Ie("beforeChange", function (e) {
 						var t, i = l.preload,
 							n = null === e ? !0 : e >= 0,
 							o = Math.min(i[0], Jt()),
 							s = Math.min(i[1], Jt());
 						for (t = 1;
 							(n ? s : o) >= t; t++) r.lazyLoadItem(p + t);
 						for (t = 1;
 							(n ? o : s) >= t; t++) r.lazyLoadItem(p - t)
 					}), Ie("initialLayout", function () {
 						r.currItem.initialLayout = l.getThumbBoundsFn && l.getThumbBoundsFn(p)
 					}), Ie("mainScrollAnimComplete", pi), Ie("initialZoomInEnd", pi), Ie("destroy", function () {
 						for (var e, t = 0; t < Xt.length; t++) e = Xt[t], e.container && (e.container = null), e.placeholder && (e.placeholder = null), e.img && (e.img = null), e.preloader && (e.preloader = null), e.loadError && (e.loaded = e.loadError = !1);
 						ni = null
 					})
 				},
 				getItemAt: function (e) {
 					return e >= 0 && void 0 !== Xt[e] ? Xt[e] : !1
 				},
 				allowProgressiveImg: function () {
 					return l.forceProgressiveLoading || !$ || l.mouseUsed || screen.width > 1200
 				},
 				setContent: function (e, t) {
 					l.loop && (t = Ce(t));
 					var i = r.getItemAt(e.index);
 					i && (i.container = null);
 					var n, s = r.getItemAt(t);
 					if (!s) return void(e.el.innerHTML = "");
 					Oe("gettingData", t, s), e.index = t, e.item = s;
 					var a = s.container = o.createEl("pswp__zoom-wrap");
 					if (!s.src && s.html && (s.html.tagName ? a.appendChild(s.html) : a.innerHTML = s.html), di(s), ai(s, me), !s.src || s.loadError || s.loaded) s.src && !s.loadError && (n = o.createEl("pswp__img", "img"), n.style.opacity = 1, n.src = s.src, ui(s, n), li(t, s, a, n, !0));
 					else {
 						if (s.loadComplete = function (i) {
 								if (c) {
 									if (e && e.index === t) {
 										if (di(i, !0)) return i.loadComplete = i.img = null, ai(i, me), _e(i), void(e.index === p && r.updateCurrZoomItem());
 										i.imageAppended ? !Gt && i.placeholder && (i.placeholder.style.display = "none", i.placeholder = null) : R.transform && (oe || Gt) ? ni.push({
 											item: i,
 											baseDiv: a,
 											img: i.img,
 											index: t,
 											holder: e,
 											clearPlaceholder: !0
 										}) : li(t, i, a, i.img, oe || Gt, !0)
 									}
 									i.loadComplete = null, i.img = null, Oe("imageLoadComplete", t, i)
 								}
 							}, o.features.transform) {
 							var d = "pswp__img pswp__img--placeholder";
 							d += s.msrc ? "" : " pswp__img--placeholder--blank";
 							var u = o.createEl(d, s.msrc ? "img" : "");
 							s.msrc && (u.src = s.msrc), ui(s, u), a.appendChild(u), s.placeholder = u
 						}
 						s.loading || ci(s), r.allowProgressiveImg() && (!Vt && R.transform ? ni.push({
 							item: s,
 							baseDiv: a,
 							img: s.img,
 							index: t,
 							holder: e
 						}) : li(t, s, a, s.img, !0, !0))
 					}
 					Vt || t !== p ? _e(s) : (ne = a.style, ti(s, n || s.img)), e.el.innerHTML = "", e.el.appendChild(a)
 				},
 				cleanSlide: function (e) {
 					e.img && (e.img.onload = e.img.onerror = null), e.loaded = e.loading = e.img = e.imageAppended = !1
 				}
 			}
 		});
 		var fi, hi = {},
 			mi = function (e, t, i) {
 				var n = document.createEvent("CustomEvent"),
 					o = {
 						origEvent: e,
 						target: e.target,
 						releasePoint: t,
 						pointerType: i || "touch"
 					};
 				n.initCustomEvent("pswpTap", !0, !0, o), e.target.dispatchEvent(n)
 			};
 		ke("Tap", {
 			publicMethods: {
 				initTap: function () {
 					Ie("firstTouchStart", r.onTapStart), Ie("touchRelease", r.onTapRelease), Ie("destroy", function () {
 						hi = {}, fi = null
 					})
 				},
 				onTapStart: function (e) {
 					e.length > 1 && (clearTimeout(fi), fi = null)
 				},
 				onTapRelease: function (e, t) {
 					if (t && !X && !Y && !Qe) {
 						var i = t;
 						if (fi && (clearTimeout(fi), fi = null, Tt(i, hi))) return void Oe("doubleTap", i);
 						if ("mouse" === t.type) return void mi(e, t, "mouse");
 						var n = e.target.tagName.toUpperCase();
 						if ("BUTTON" === n || o.hasClass(e.target, "pswp__single-tap")) return void mi(e, t);
 						Fe(hi, i), fi = setTimeout(function () {
 							mi(e, t), fi = null
 						}, 300)
 					}
 				}
 			}
 		});
 		var vi;
 		ke("DesktopZoom", {
 			publicMethods: {
 				initDesktopZoom: function () {
 					F || ($ ? Ie("mouseUsed", function () {
 						r.setupDesktopZoom()
 					}) : r.setupDesktopZoom(!0))
 				},
 				setupDesktopZoom: function (t) {
 					vi = {};
 					var i = "wheel mousewheel DOMMouseScroll";
 					Ie("bindEvents", function () {
 						o.bind(e, i, r.handleMouseWheel)
 					}), Ie("unbindEvents", function () {
 						vi && o.unbind(e, i, r.handleMouseWheel)
 					}), r.mouseZoomedIn = !1;
 					var n, s = function () {
 							r.mouseZoomedIn && (o.removeClass(e, "pswp--zoomed-in"), r.mouseZoomedIn = !1), 1 > y ? o.addClass(e, "pswp--zoom-allowed") : o.removeClass(e, "pswp--zoom-allowed"), a()
 						},
 						a = function () {
 							n && (o.removeClass(e, "pswp--dragging"), n = !1)
 						};
 					Ie("resize", s), Ie("afterChange", s), Ie("pointerDown", function () {
 						r.mouseZoomedIn && (n = !0, o.addClass(e, "pswp--dragging"))
 					}), Ie("pointerUp", a), t || s()
 				},
 				handleMouseWheel: function (e) {
 					if (y <= r.currItem.fitRatio) return l.modal && (!l.closeOnScroll || Qe || B ? e.preventDefault() : A && Math.abs(e.deltaY) > 2 && (u = !0, r.close())), !0;
 					if (e.stopPropagation(), vi.x = 0, "deltaX" in e) 1 === e.deltaMode ? (vi.x = 18 * e.deltaX, vi.y = 18 * e.deltaY) : (vi.x = e.deltaX, vi.y = e.deltaY);
 					else if ("wheelDelta" in e) e.wheelDeltaX && (vi.x = -.16 * e.wheelDeltaX), e.wheelDeltaY ? vi.y = -.16 * e.wheelDeltaY : vi.y = -.16 * e.wheelDelta;
 					else {
 						if (!("detail" in e)) return;
 						vi.y = e.detail
 					}
 					We(y, !0);
 					var t = he.x - vi.x,
 						i = he.y - vi.y;
 					(l.modal || t <= ie.min.x && t >= ie.max.x && i <= ie.min.y && i >= ie.max.y) && e.preventDefault(), r.panTo(t, i)
 				},
 				toggleDesktopZoom: function (t) {
 					t = t || {
 						x: me.x / 2 + ge.x,
 						y: me.y / 2 + ge.y
 					};
 					var i = l.getDoubleTapZoom(!0, r.currItem),
 						n = y === i;
 					r.mouseZoomedIn = !n, r.zoomTo(n ? r.currItem.initialZoomLevel : i, t, 333), o[(n ? "remove" : "add") + "Class"](e, "pswp--zoomed-in")
 				}
 			}
 		});
 		var gi, yi, wi, bi, xi, Ti, Si, ki, Ci, Ei, Ii, Oi, Pi = {
 				history: !0,
 				galleryUID: 1
 			},
 			Ai = function () {
 				return Ii.hash.substring(1)
 			},
 			Mi = function () {
 				gi && clearTimeout(gi), wi && clearTimeout(wi)
 			},
 			$i = function () {
 				var e = Ai(),
 					t = {};
 				if (e.length < 5) return t;
 				var i, n = e.split("&");
 				for (i = 0; i < n.length; i++)
 					if (n[i]) {
 						var o = n[i].split("=");
 						o.length < 2 || (t[o[0]] = o[1])
 					} if (l.galleryPIDs) {
 					var r = t.pid;
 					for (t.pid = 0, i = 0; i < Xt.length; i++)
 						if (Xt[i].pid === r) {
 							t.pid = i;
 							break
 						}
 				} else t.pid = parseInt(t.pid, 10) - 1;
 				return t.pid < 0 && (t.pid = 0), t
 			},
 			_i = function () {
 				if (wi && clearTimeout(wi), Qe || B) return void(wi = setTimeout(_i, 500));
 				bi ? clearTimeout(yi) : bi = !0;
 				var e = p + 1,
 					t = Qt(p);
 				t.hasOwnProperty("pid") && (e = t.pid);
 				var i = Si + "&gid=" + l.galleryUID + "&pid=" + e;
 				ki || -1 === Ii.hash.indexOf(i) && (Ei = !0);
 				var n = Ii.href.split("#")[0] + "#" + i;
 				Oi ? "#" + i !== window.location.hash && history[ki ? "replaceState" : "pushState"]("", document.title, n) : ki ? Ii.replace(n) : Ii.hash = i, ki = !0, yi = setTimeout(function () {
 					bi = !1
 				}, 60)
 			};
 		ke("History", {
 			publicMethods: {
 				initHistory: function () {
 					if (o.extend(l, Pi, !0), l.history) {
 						Ii = window.location, Ei = !1, Ci = !1, ki = !1, Si = Ai(), Oi = "pushState" in history, Si.indexOf("gid=") > -1 && (Si = Si.split("&gid=")[0], Si = Si.split("?gid=")[0]), Ie("afterChange", r.updateURL), Ie("unbindEvents", function () {
 							o.unbind(window, "hashchange", r.onHashChange)
 						});
 						var e = function () {
 							Ti = !0, Ci || (Ei ? history.back() : Si ? Ii.hash = Si : Oi ? history.pushState("", document.title, Ii.pathname + Ii.search) : Ii.hash = ""), Mi()
 						};
 						Ie("unbindEvents", function () {
 							u && e()
 						}), Ie("destroy", function () {
 							Ti || e()
 						}), Ie("firstUpdate", function () {
 							p = $i().pid
 						});
 						var t = Si.indexOf("pid=");
 						t > -1 && (Si = Si.substring(0, t), "&" === Si.slice(-1) && (Si = Si.slice(0, -1))), setTimeout(function () {
 							c && o.bind(window, "hashchange", r.onHashChange)
 						}, 40)
 					}
 				},
 				onHashChange: function () {
 					return Ai() === Si ? (Ci = !0, void r.close()) : void(bi || (xi = !0, r.goTo($i().pid), xi = !1))
 				},
 				updateURL: function () {
 					Mi(), xi || (ki ? gi = setTimeout(_i, 800) : _i())
 				}
 			}
 		}), o.extend(r, nt)
 	};
 	return e
 }),
 function (e, t) {
 	"function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipeUI_Default = t()
 }(this, function () {
 	"use strict";
 	var e = function (e, t) {
 		var i, n, o, r, s, a, l, c, d, u, p, f, h, m, v, g, y, w, b, x = this,
 			T = !1,
 			S = !0,
 			k = !0,
 			C = {
 				barsSize: {
 					top: 44,
 					bottom: "auto"
 				},
 				closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
 				timeToIdle: 4e3,
 				timeToIdleOutside: 1e3,
 				loadingIndicatorDelay: 1e3,
 				addCaptionHTMLFn: function (e, t) {
 					return e.title ? (t.children[0].innerHTML = e.title, !0) : (t.children[0].innerHTML = "", !1)
 				},
 				closeEl: !0,
 				captionEl: !0,
 				fullscreenEl: !0,
 				zoomEl: !0,
 				shareEl: !0,
 				counterEl: !0,
 				arrowEl: !0,
 				preloaderEl: !0,
 				tapToClose: !1,
 				tapToToggleControls: !0,
 				clickToCloseNonZoomable: !0,
 				shareButtons: [{
 					id: "facebook",
 					label: "Share on Facebook",
 					url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
 				}, {
 					id: "twitter",
 					label: "Tweet",
 					url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
 				}, {
 					id: "pinterest",
 					label: "Pin it",
 					url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
 				}, {
 					id: "download",
 					label: "Download image",
 					url: "{{raw_image_url}}",
 					download: !0
 				}],
 				getImageURLForShare: function () {
 					return e.currItem.src || ""
 				},
 				getPageURLForShare: function () {
 					return window.location.href
 				},
 				getTextForShare: function () {
 					return e.currItem.title || ""
 				},
 				indexIndicatorSep: " / ",
 				fitControlsWidth: 1200
 			},
 			E = function (e) {
 				if (g) return !0;
 				e = e || window.event, v.timeToIdle && v.mouseUsed && !d && z();
 				for (var i, n, o = e.target || e.srcElement, r = o.getAttribute("class") || "", s = 0; s < Z.length; s++) i = Z[s], i.onTap && r.indexOf("pswp__" + i.name) > -1 && (i.onTap(), n = !0);
 				if (n) {
 					e.stopPropagation && e.stopPropagation(), g = !0;
 					var a = t.features.isOldAndroid ? 600 : 30;
 					y = setTimeout(function () {
 						g = !1
 					}, a)
 				}
 			},
 			I = function () {
 				return !e.likelyTouchDevice || v.mouseUsed || screen.width > v.fitControlsWidth
 			},
 			O = function (e, i, n) {
 				t[(n ? "add" : "remove") + "Class"](e, "pswp__" + i)
 			},
 			P = function () {
 				var e = 1 === v.getNumItemsFn();
 				e !== m && (O(n, "ui--one-slide", e), m = e)
 			},
 			A = function () {
 				O(l, "share-modal--hidden", k)
 			},
 			M = function () {
 				return k = !k, k ? (t.removeClass(l, "pswp__share-modal--fade-in"), setTimeout(function () {
 					k && A()
 				}, 300)) : (A(), setTimeout(function () {
 					k || t.addClass(l, "pswp__share-modal--fade-in")
 				}, 30)), k || _(), !1
 			},
 			$ = function (t) {
 				t = t || window.event;
 				var i = t.target || t.srcElement;
 				return e.shout("shareLinkClick", t, i), i.href ? i.hasAttribute("download") ? !0 : (window.open(i.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), k || M(), !1) : !1
 			},
 			_ = function () {
 				for (var e, t, i, n, o, r = "", s = 0; s < v.shareButtons.length; s++) e = v.shareButtons[s], i = v.getImageURLForShare(e), n = v.getPageURLForShare(e), o = v.getTextForShare(e), t = e.url.replace("{{url}}", encodeURIComponent(n)).replace("{{image_url}}", encodeURIComponent(i)).replace("{{raw_image_url}}", i).replace("{{text}}", encodeURIComponent(o)), r += '<a href="' + t + '" target="_blank" class="pswp__share--' + e.id + '"' + (e.download ? "download" : "") + ">" + e.label + "</a>", v.parseShareButtonOut && (r = v.parseShareButtonOut(e, r));
 				l.children[0].innerHTML = r, l.children[0].onclick = $
 			},
 			L = function (e) {
 				for (var i = 0; i < v.closeElClasses.length; i++)
 					if (t.hasClass(e, "pswp__" + v.closeElClasses[i])) return !0
 			},
 			D = 0,
 			z = function () {
 				clearTimeout(b), D = 0, d && x.setIdle(!1)
 			},
 			F = function (e) {
 				e = e ? e : window.event;
 				var t = e.relatedTarget || e.toElement;
 				t && "HTML" !== t.nodeName || (clearTimeout(b), b = setTimeout(function () {
 					x.setIdle(!0)
 				}, v.timeToIdleOutside))
 			},
 			H = function () {
 				v.fullscreenEl && !t.features.isOldAndroid && (i || (i = x.getFullscreenAPI()), i ? (t.bind(document, i.eventK, x.updateFullscreen), x.updateFullscreen(), t.addClass(e.template, "pswp--supports-fs")) : t.removeClass(e.template, "pswp--supports-fs"))
 			},
 			R = function () {
 				v.preloaderEl && (N(!0), u("beforeChange", function () {
 					clearTimeout(h), h = setTimeout(function () {
 						e.currItem && e.currItem.loading ? (!e.allowProgressiveImg() || e.currItem.img && !e.currItem.img.naturalWidth) && N(!1) : N(!0)
 					}, v.loadingIndicatorDelay)
 				}), u("imageLoadComplete", function (t, i) {
 					e.currItem === i && N(!0)
 				}))
 			},
 			N = function (e) {
 				f !== e && (O(p, "preloader--active", !e), f = e)
 			},
 			U = function (e) {
 				var i = e.vGap;
 				if (I()) {
 					var s = v.barsSize;
 					if (v.captionEl && "auto" === s.bottom)
 						if (r || (r = t.createEl("pswp__caption pswp__caption--fake"), r.appendChild(t.createEl("pswp__caption__center")), n.insertBefore(r, o), t.addClass(n, "pswp__ui--fit")), v.addCaptionHTMLFn(e, r, !0)) {
 							var a = r.clientHeight;
 							i.bottom = parseInt(a, 10) || 44
 						} else i.bottom = s.top;
 					else i.bottom = "auto" === s.bottom ? 0 : s.bottom;
 					i.top = s.top
 				} else i.top = i.bottom = 0
 			},
 			j = function () {
 				v.timeToIdle && u("mouseUsed", function () {
 					t.bind(document, "mousemove", z), t.bind(document, "mouseout", F), w = setInterval(function () {
 						D++, 2 === D && x.setIdle(!0)
 					}, v.timeToIdle / 2)
 				})
 			},
 			W = function () {
 				u("onVerticalDrag", function (e) {
 					S && .95 > e ? x.hideControls() : !S && e >= .95 && x.showControls()
 				});
 				var e;
 				u("onPinchClose", function (t) {
 					S && .9 > t ? (x.hideControls(), e = !0) : e && !S && t > .9 && x.showControls()
 				}), u("zoomGestureEnded", function () {
 					e = !1, e && !S && x.showControls()
 				})
 			},
 			Z = [{
 				name: "caption",
 				option: "captionEl",
 				onInit: function (e) {
 					o = e
 				}
 			}, {
 				name: "share-modal",
 				option: "shareEl",
 				onInit: function (e) {
 					l = e
 				},
 				onTap: function () {
 					M()
 				}
 			}, {
 				name: "button--share",
 				option: "shareEl",
 				onInit: function (e) {
 					a = e
 				},
 				onTap: function () {
 					M()
 				}
 			}, {
 				name: "button--zoom",
 				option: "zoomEl",
 				onTap: e.toggleDesktopZoom
 			}, {
 				name: "counter",
 				option: "counterEl",
 				onInit: function (e) {
 					s = e
 				}
 			}, {
 				name: "button--close",
 				option: "closeEl",
 				onTap: e.close
 			}, {
 				name: "button--arrow--left",
 				option: "arrowEl",
 				onTap: e.prev
 			}, {
 				name: "button--arrow--right",
 				option: "arrowEl",
 				onTap: e.next
 			}, {
 				name: "button--fs",
 				option: "fullscreenEl",
 				onTap: function () {
 					i.isFullscreen() ? i.exit() : i.enter()
 				}
 			}, {
 				name: "preloader",
 				option: "preloaderEl",
 				onInit: function (e) {
 					p = e
 				}
 			}],
 			q = function () {
 				var e, i, o, r = function (n) {
 					if (n)
 						for (var r = n.length, s = 0; r > s; s++) {
 							e = n[s], i = e.className;
 							for (var a = 0; a < Z.length; a++) o = Z[a], i.indexOf("pswp__" + o.name) > -1 && (v[o.option] ? (t.removeClass(e, "pswp__element--disabled"), o.onInit && o.onInit(e)) : t.addClass(e, "pswp__element--disabled"))
 						}
 				};
 				r(n.children);
 				var s = t.getChildByClass(n, "pswp__top-bar");
 				s && r(s.children)
 			};
 		x.init = function () {
 			t.extend(e.options, C, !0), v = e.options, n = t.getChildByClass(e.scrollWrap, "pswp__ui"), u = e.listen, W(), u("beforeChange", x.update), u("doubleTap", function (t) {
 				var i = e.currItem.initialZoomLevel;
 				e.getZoomLevel() !== i ? e.zoomTo(i, t, 333) : e.zoomTo(v.getDoubleTapZoom(!1, e.currItem), t, 333)
 			}), u("preventDragEvent", function (e, t, i) {
 				var n = e.target || e.srcElement;
 				n && n.getAttribute("class") && e.type.indexOf("mouse") > -1 && (n.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(n.tagName)) && (i.prevent = !1)
 			}), u("bindEvents", function () {
 				t.bind(n, "pswpTap click", E), t.bind(e.scrollWrap, "pswpTap", x.onGlobalTap), e.likelyTouchDevice || t.bind(e.scrollWrap, "mouseover", x.onMouseOver)
 			}), u("unbindEvents", function () {
 				k || M(), w && clearInterval(w), t.unbind(document, "mouseout", F), t.unbind(document, "mousemove", z), t.unbind(n, "pswpTap click", E), t.unbind(e.scrollWrap, "pswpTap", x.onGlobalTap), t.unbind(e.scrollWrap, "mouseover", x.onMouseOver), i && (t.unbind(document, i.eventK, x.updateFullscreen), i.isFullscreen() && (v.hideAnimationDuration = 0, i.exit()), i = null)
 			}), u("destroy", function () {
 				v.captionEl && (r && n.removeChild(r), t.removeClass(o, "pswp__caption--empty")), l && (l.children[0].onclick = null), t.removeClass(n, "pswp__ui--over-close"), t.addClass(n, "pswp__ui--hidden"), x.setIdle(!1)
 			}), v.showAnimationDuration || t.removeClass(n, "pswp__ui--hidden"), u("initialZoomIn", function () {
 				v.showAnimationDuration && t.removeClass(n, "pswp__ui--hidden")
 			}), u("initialZoomOut", function () {
 				t.addClass(n, "pswp__ui--hidden")
 			}), u("parseVerticalMargin", U), q(), v.shareEl && a && l && (k = !0), P(), j(), H(), R()
 		}, x.setIdle = function (e) {
 			d = e, O(n, "ui--idle", e)
 		}, x.update = function () {
 			S && e.currItem ? (x.updateIndexIndicator(), v.captionEl && (v.addCaptionHTMLFn(e.currItem, o), O(o, "caption--empty", !e.currItem.title)), T = !0) : T = !1, k || M(), P()
 		}, x.updateFullscreen = function (n) {
 			n && setTimeout(function () {
 				e.setScrollOffset(0, t.getScrollY())
 			}, 50), t[(i.isFullscreen() ? "add" : "remove") + "Class"](e.template, "pswp--fs")
 		}, x.updateIndexIndicator = function () {
 			v.counterEl && (s.innerHTML = e.getCurrentIndex() + 1 + v.indexIndicatorSep + v.getNumItemsFn())
 		}, x.onGlobalTap = function (i) {
 			i = i || window.event;
 			var n = i.target || i.srcElement;
 			if (!g)
 				if (i.detail && "mouse" === i.detail.pointerType) {
 					if (L(n)) return void e.close();
 					t.hasClass(n, "pswp__img") && (1 === e.getZoomLevel() && e.getZoomLevel() <= e.currItem.fitRatio ? v.clickToCloseNonZoomable && e.close() : e.toggleDesktopZoom(i.detail.releasePoint))
 				} else if (v.tapToToggleControls && (S ? x.hideControls() : x.showControls()), v.tapToClose && (t.hasClass(n, "pswp__img") || L(n))) return void e.close()
 		}, x.onMouseOver = function (e) {
 			e = e || window.event;
 			var t = e.target || e.srcElement;
 			O(n, "ui--over-close", L(t))
 		}, x.hideControls = function () {
 			t.addClass(n, "pswp__ui--hidden"), S = !1
 		}, x.showControls = function () {
 			S = !0, T || x.update(), t.removeClass(n, "pswp__ui--hidden")
 		}, x.supportsFullscreen = function () {
 			var e = document;
 			return !!(e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen)
 		}, x.getFullscreenAPI = function () {
 			var t, i = document.documentElement,
 				n = "fullscreenchange";
 			return i.requestFullscreen ? t = {
 				enterK: "requestFullscreen",
 				exitK: "exitFullscreen",
 				elementK: "fullscreenElement",
 				eventK: n
 			} : i.mozRequestFullScreen ? t = {
 				enterK: "mozRequestFullScreen",
 				exitK: "mozCancelFullScreen",
 				elementK: "mozFullScreenElement",
 				eventK: "moz" + n
 			} : i.webkitRequestFullscreen ? t = {
 				enterK: "webkitRequestFullscreen",
 				exitK: "webkitExitFullscreen",
 				elementK: "webkitFullscreenElement",
 				eventK: "webkit" + n
 			} : i.msRequestFullscreen && (t = {
 				enterK: "msRequestFullscreen",
 				exitK: "msExitFullscreen",
 				elementK: "msFullscreenElement",
 				eventK: "MSFullscreenChange"
 			}), t && (t.enter = function () {
 				return c = v.closeOnScroll, v.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? e.template[this.enterK]() : void e.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
 			}, t.exit = function () {
 				return v.closeOnScroll = c, document[this.exitK]()
 			}, t.isFullscreen = function () {
 				return document[this.elementK]
 			}), t
 		}
 	};
 	return e
 }),
 function (e) {
 	"function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
 }(function (e) {
 	var t, i, n, o, r, s, a = "Close",
 		l = "BeforeClose",
 		c = "AfterClose",
 		d = "BeforeAppend",
 		u = "MarkupParse",
 		p = "Open",
 		f = "Change",
 		h = "mfp",
 		m = "." + h,
 		v = "mfp-ready",
 		g = "mfp-removing",
 		y = "mfp-prevent-close",
 		w = function () {},
 		b = !!window.jQuery,
 		x = e(window),
 		T = function (e, i) {
 			t.ev.on(h + e + m, i)
 		},
 		S = function (t, i, n, o) {
 			var r = document.createElement("div");
 			return r.className = "mfp-" + t, n && (r.innerHTML = n), o ? i && i.appendChild(r) : (r = e(r), i && r.appendTo(i)), r
 		},
 		k = function (i, n) {
 			t.ev.triggerHandler(h + i, n), t.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), t.st.callbacks[i] && t.st.callbacks[i].apply(t, e.isArray(n) ? n : [n]))
 		},
 		C = function (i) {
 			return i === s && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), s = i), t.currTemplate.closeBtn
 		},
 		E = function () {
 			e.magnificPopup.instance || (t = new w, t.init(), e.magnificPopup.instance = t)
 		},
 		I = function () {
 			var e = document.createElement("p").style,
 				t = ["ms", "O", "Moz", "Webkit"];
 			if (void 0 !== e.transition) return !0;
 			for (; t.length;)
 				if (t.pop() + "Transition" in e) return !0;
 			return !1
 		};
 	w.prototype = {
 		constructor: w,
 		init: function () {
 			var i = navigator.appVersion;
 			t.isLowIE = t.isIE8 = document.all && !document.addEventListener, t.isAndroid = /android/gi.test(i), t.isIOS = /iphone|ipad|ipod/gi.test(i), t.supportsTransition = I(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), n = e(document), t.popupsCache = {}
 		},
 		open: function (i) {
 			var o;
 			if (i.isObj === !1) {
 				t.items = i.items.toArray(), t.index = 0;
 				var s, a = i.items;
 				for (o = 0; o < a.length; o++)
 					if (s = a[o], s.parsed && (s = s.el[0]), s === i.el[0]) {
 						t.index = o;
 						break
 					}
 			} else t.items = e.isArray(i.items) ? i.items : [i.items], t.index = i.index || 0;
 			if (t.isOpen) return void t.updateItemHTML();
 			t.types = [], r = "", i.mainEl && i.mainEl.length ? t.ev = i.mainEl.eq(0) : t.ev = n, i.key ? (t.popupsCache[i.key] || (t.popupsCache[i.key] = {}), t.currTemplate = t.popupsCache[i.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, i), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = S("bg").on("click" + m, function () {
 				t.close()
 			}), t.wrap = S("wrap").attr("tabindex", -1).on("click" + m, function (e) {
 				t._checkIfClose(e.target) && t.close()
 			}), t.container = S("container", t.wrap)), t.contentContainer = S("content"), t.st.preloader && (t.preloader = S("preloader", t.container, t.st.tLoading));
 			var l = e.magnificPopup.modules;
 			for (o = 0; o < l.length; o++) {
 				var c = l[o];
 				c = c.charAt(0).toUpperCase() + c.slice(1), t["init" + c].call(t)
 			}
 			k("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (T(u, function (e, t, i, n) {
 				i.close_replaceWith = C(n.type)
 			}), r += " mfp-close-btn-in") : t.wrap.append(C())), t.st.alignTop && (r += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({
 				overflow: t.st.overflowY,
 				overflowX: "hidden",
 				overflowY: t.st.overflowY
 			}) : t.wrap.css({
 				top: x.scrollTop(),
 				position: "absolute"
 			}), (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
 				height: n.height(),
 				position: "absolute"
 			}), t.st.enableEscapeKey && n.on("keyup" + m, function (e) {
 				27 === e.keyCode && t.close()
 			}), x.on("resize" + m, function () {
 				t.updateSize()
 			}), t.st.closeOnContentClick || (r += " mfp-auto-cursor"), r && t.wrap.addClass(r);
 			var d = t.wH = x.height(),
 				f = {};
 			if (t.fixedContentPos && t._hasScrollBar(d)) {
 				var h = t._getScrollbarSize();
 				h && (f.marginRight = h)
 			}
 			t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : f.overflow = "hidden");
 			var g = t.st.mainClass;
 			return t.isIE7 && (g += " mfp-ie7"), g && t._addClassToMFP(g), t.updateItemHTML(), k("BuildControls"), e("html").css(f), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)), t._lastFocusedEl = document.activeElement, setTimeout(function () {
 				t.content ? (t._addClassToMFP(v), t._setFocus()) : t.bgOverlay.addClass(v), n.on("focusin" + m, t._onFocusIn)
 			}, 16), t.isOpen = !0, t.updateSize(d), k(p), i
 		},
 		close: function () {
 			t.isOpen && (k(l), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(g), setTimeout(function () {
 				t._close()
 			}, t.st.removalDelay)) : t._close())
 		},
 		_close: function () {
 			k(a);
 			var i = g + " " + v + " ";
 			if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (i += t.st.mainClass + " "), t._removeClassFromMFP(i), t.fixedContentPos) {
 				var o = {
 					marginRight: ""
 				};
 				t.isIE7 ? e("body, html").css("overflow", "") : o.overflow = "", e("html").css(o)
 			}
 			n.off("keyup" + m + " focusin" + m), t.ev.off(m), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, k(c)
 		},
 		updateSize: function (e) {
 			if (t.isIOS) {
 				var i = document.documentElement.clientWidth / window.innerWidth,
 					n = window.innerHeight * i;
 				t.wrap.css("height", n), t.wH = n
 			} else t.wH = e || x.height();
 			t.fixedContentPos || t.wrap.css("height", t.wH), k("Resize")
 		},
 		updateItemHTML: function () {
 			var i = t.items[t.index];
 			t.contentContainer.detach(), t.content && t.content.detach(), i.parsed || (i = t.parseEl(t.index));
 			var n = i.type;
 			if (k("BeforeChange", [t.currItem ? t.currItem.type : "", n]), t.currItem = i, !t.currTemplate[n]) {
 				var r = t.st[n] ? t.st[n].markup : !1;
 				k("FirstMarkupParse", r), r ? t.currTemplate[n] = e(r) : t.currTemplate[n] = !0
 			}
 			o && o !== i.type && t.container.removeClass("mfp-" + o + "-holder");
 			var s = t["get" + n.charAt(0).toUpperCase() + n.slice(1)](i, t.currTemplate[n]);
 			t.appendContent(s, n), i.preloaded = !0, k(f, i), o = i.type, t.container.prepend(t.contentContainer), k("AfterChange")
 		},
 		appendContent: function (e, i) {
 			t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[i] === !0 ? t.content.find(".mfp-close").length || t.content.append(C()) : t.content = e : t.content = "", k(d), t.container.addClass("mfp-" + i + "-holder"), t.contentContainer.append(t.content)
 		},
 		parseEl: function (i) {
 			var n, o = t.items[i];
 			if (o.tagName ? o = {
 					el: e(o)
 				} : (n = o.type, o = {
 					data: o,
 					src: o.src
 				}), o.el) {
 				for (var r = t.types, s = 0; s < r.length; s++)
 					if (o.el.hasClass("mfp-" + r[s])) {
 						n = r[s];
 						break
 					} o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"))
 			}
 			return o.type = n || t.st.type || "inline", o.index = i, o.parsed = !0, t.items[i] = o, k("ElementParse", o), t.items[i]
 		},
 		addGroup: function (e, i) {
 			var n = function (n) {
 				n.mfpEl = this, t._openClick(n, e, i)
 			};
 			i || (i = {});
 			var o = "click.magnificPopup";
 			i.mainEl = e, i.items ? (i.isObj = !0, e.off(o).on(o, n)) : (i.isObj = !1, i.delegate ? e.off(o).on(o, i.delegate, n) : (i.items = e, e.off(o).on(o, n)))
 		},
 		_openClick: function (i, n, o) {
 			var r = void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick;
 			if (r || !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)) {
 				var s = void 0 !== o.disableOn ? o.disableOn : e.magnificPopup.defaults.disableOn;
 				if (s)
 					if (e.isFunction(s)) {
 						if (!s.call(t)) return !0
 					} else if (x.width() < s) return !0;
 				i.type && (i.preventDefault(), t.isOpen && i.stopPropagation()), o.el = e(i.mfpEl), o.delegate && (o.items = n.find(o.delegate)), t.open(o)
 			}
 		},
 		updateStatus: function (e, n) {
 			if (t.preloader) {
 				i !== e && t.container.removeClass("mfp-s-" + i), n || "loading" !== e || (n = t.st.tLoading);
 				var o = {
 					status: e,
 					text: n
 				};
 				k("UpdateStatus", o), e = o.status, n = o.text, t.preloader.html(n), t.preloader.find("a").on("click", function (e) {
 					e.stopImmediatePropagation()
 				}), t.container.addClass("mfp-s-" + e), i = e
 			}
 		},
 		_checkIfClose: function (i) {
 			if (!e(i).hasClass(y)) {
 				var n = t.st.closeOnContentClick,
 					o = t.st.closeOnBgClick;
 				if (n && o) return !0;
 				if (!t.content || e(i).hasClass("mfp-close") || t.preloader && i === t.preloader[0]) return !0;
 				if (i === t.content[0] || e.contains(t.content[0], i)) {
 					if (n) return !0
 				} else if (o && e.contains(document, i)) return !0;
 				return !1
 			}
 		},
 		_addClassToMFP: function (e) {
 			t.bgOverlay.addClass(e), t.wrap.addClass(e)
 		},
 		_removeClassFromMFP: function (e) {
 			this.bgOverlay.removeClass(e), t.wrap.removeClass(e)
 		},
 		_hasScrollBar: function (e) {
 			return (t.isIE7 ? n.height() : document.body.scrollHeight) > (e || x.height())
 		},
 		_setFocus: function () {
 			(t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
 		},
 		_onFocusIn: function (i) {
 			return i.target === t.wrap[0] || e.contains(t.wrap[0], i.target) ? void 0 : (t._setFocus(), !1)
 		},
 		_parseMarkup: function (t, i, n) {
 			var o;
 			n.data && (i = e.extend(n.data, i)), k(u, [t, i, n]), e.each(i, function (i, n) {
 				if (void 0 === n || n === !1) return !0;
 				if (o = i.split("_"), o.length > 1) {
 					var r = t.find(m + "-" + o[0]);
 					if (r.length > 0) {
 						var s = o[1];
 						"replaceWith" === s ? r[0] !== n[0] && r.replaceWith(n) : "img" === s ? r.is("img") ? r.attr("src", n) : r.replaceWith(e("<img>").attr("src", n).attr("class", r.attr("class"))) : r.attr(o[1], n)
 					}
 				} else t.find(m + "-" + i).html(n)
 			})
 		},
 		_getScrollbarSize: function () {
 			if (void 0 === t.scrollbarSize) {
 				var e = document.createElement("div");
 				e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
 			}
 			return t.scrollbarSize
 		}
 	}, e.magnificPopup = {
 		instance: null,
 		proto: w.prototype,
 		modules: [],
 		open: function (t, i) {
 			return E(), t = t ? e.extend(!0, {}, t) : {}, t.isObj = !0, t.index = i || 0, this.instance.open(t)
 		},
 		close: function () {
 			return e.magnificPopup.instance && e.magnificPopup.instance.close()
 		},
 		registerModule: function (t, i) {
 			i.options && (e.magnificPopup.defaults[t] = i.options), e.extend(this.proto, i.proto), this.modules.push(t)
 		},
 		defaults: {
 			disableOn: 0,
 			key: null,
 			midClick: !1,
 			mainClass: "",
 			preloader: !0,
 			focus: "",
 			closeOnContentClick: !1,
 			closeOnBgClick: !0,
 			closeBtnInside: !0,
 			showCloseBtn: !0,
 			enableEscapeKey: !0,
 			modal: !1,
 			alignTop: !1,
 			removalDelay: 0,
 			prependTo: null,
 			fixedContentPos: "auto",
 			fixedBgPos: "auto",
 			overflowY: "auto",
 			closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
 			tClose: "Close (Esc)",
 			tLoading: "Loading...",
 			autoFocusLast: !0
 		}
 	}, e.fn.magnificPopup = function (i) {
 		E();
 		var n = e(this);
 		if ("string" == typeof i)
 			if ("open" === i) {
 				var o, r = b ? n.data("magnificPopup") : n[0].magnificPopup,
 					s = parseInt(arguments[1], 10) || 0;
 				r.items ? o = r.items[s] : (o = n, r.delegate && (o = o.find(r.delegate)), o = o.eq(s)), t._openClick({
 					mfpEl: o
 				}, n, r)
 			} else t.isOpen && t[i].apply(t, Array.prototype.slice.call(arguments, 1));
 		else i = e.extend(!0, {}, i), b ? n.data("magnificPopup", i) : n[0].magnificPopup = i, t.addGroup(n, i);
 		return n
 	};
 	var O, P, A, M = "inline",
 		$ = function () {
 			A && (P.after(A.addClass(O)).detach(), A = null)
 		};
 	e.magnificPopup.registerModule(M, {
 		options: {
 			hiddenClass: "hide",
 			markup: "",
 			tNotFound: "Content not found"
 		},
 		proto: {
 			initInline: function () {
 				t.types.push(M), T(a + "." + M, function () {
 					$()
 				})
 			},
 			getInline: function (i, n) {
 				if ($(), i.src) {
 					var o = t.st.inline,
 						r = e(i.src);
 					if (r.length) {
 						var s = r[0].parentNode;
 						s && s.tagName && (P || (O = o.hiddenClass, P = S(O), O = "mfp-" + O), A = r.after(P).detach().removeClass(O)), t.updateStatus("ready")
 					} else t.updateStatus("error", o.tNotFound), r = e("<div>");
 					return i.inlineElement = r, r
 				}
 				return t.updateStatus("ready"), t._parseMarkup(n, {}, i), n
 			}
 		}
 	});
 	var _, L = "ajax",
 		D = function () {
 			_ && e(document.body).removeClass(_)
 		},
 		z = function () {
 			D(), t.req && t.req.abort()
 		};
 	e.magnificPopup.registerModule(L, {
 		options: {
 			settings: null,
 			cursor: "mfp-ajax-cur",
 			tError: '<a href="%url%">The content</a> could not be loaded.'
 		},
 		proto: {
 			initAjax: function () {
 				t.types.push(L), _ = t.st.ajax.cursor, T(a + "." + L, z), T("BeforeChange." + L, z)
 			},
 			getAjax: function (i) {
 				_ && e(document.body).addClass(_), t.updateStatus("loading");
 				var n = e.extend({
 					url: i.src,
 					success: function (n, o, r) {
 						var s = {
 							data: n,
 							xhr: r
 						};
 						k("ParseAjax", s), t.appendContent(e(s.data), L), i.finished = !0, D(), t._setFocus(), setTimeout(function () {
 							t.wrap.addClass(v)
 						}, 16), t.updateStatus("ready"), k("AjaxContentAdded")
 					},
 					error: function () {
 						D(), i.finished = i.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", i.src))
 					}
 				}, t.st.ajax.settings);
 				return t.req = e.ajax(n), ""
 			}
 		}
 	});
 	var F, H = function (i) {
 		if (i.data && void 0 !== i.data.title) return i.data.title;
 		var n = t.st.image.titleSrc;
 		if (n) {
 			if (e.isFunction(n)) return n.call(t, i);
 			if (i.el) return i.el.attr(n) || ""
 		}
 		return ""
 	};
 	e.magnificPopup.registerModule("image", {
 		options: {
 			markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
 			cursor: "mfp-zoom-out-cur",
 			titleSrc: "title",
 			verticalFit: !0,
 			tError: '<a href="%url%">The image</a> could not be loaded.'
 		},
 		proto: {
 			initImage: function () {
 				var i = t.st.image,
 					n = ".image";
 				t.types.push("image"), T(p + n, function () {
 					"image" === t.currItem.type && i.cursor && e(document.body).addClass(i.cursor)
 				}), T(a + n, function () {
 					i.cursor && e(document.body).removeClass(i.cursor), x.off("resize" + m)
 				}), T("Resize" + n, t.resizeImage), t.isLowIE && T("AfterChange", t.resizeImage)
 			},
 			resizeImage: function () {
 				var e = t.currItem;
 				if (e && e.img && t.st.image.verticalFit) {
 					var i = 0;
 					t.isLowIE && (i = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - i)
 				}
 			},
 			_onImageHasSize: function (e) {
 				e.img && (e.hasSize = !0, F && clearInterval(F), e.isCheckingImgSize = !1, k("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1))
 			},
 			findImageSize: function (e) {
 				var i = 0,
 					n = e.img[0],
 					o = function (r) {
 						F && clearInterval(F), F = setInterval(function () {
 							return n.naturalWidth > 0 ? void t._onImageHasSize(e) : (i > 200 && clearInterval(F), i++, void(3 === i ? o(10) : 40 === i ? o(50) : 100 === i && o(500)))
 						}, r)
 					};
 				o(1)
 			},
 			getImage: function (i, n) {
 				var o = 0,
 					r = function () {
 						i && (i.img[0].complete ? (i.img.off(".mfploader"), i === t.currItem && (t._onImageHasSize(i), t.updateStatus("ready")), i.hasSize = !0, i.loaded = !0, k("ImageLoadComplete")) : (o++, 200 > o ? setTimeout(r, 100) : s()))
 					},
 					s = function () {
 						i && (i.img.off(".mfploader"), i === t.currItem && (t._onImageHasSize(i), t.updateStatus("error", a.tError.replace("%url%", i.src))), i.hasSize = !0, i.loaded = !0, i.loadError = !0)
 					},
 					a = t.st.image,
 					l = n.find(".mfp-img");
 				if (l.length) {
 					var c = document.createElement("img");
 					c.className = "mfp-img", i.el && i.el.find("img").length && (c.alt = i.el.find("img").attr("alt")), i.img = e(c).on("load.mfploader", r).on("error.mfploader", s), c.src = i.src, l.is("img") && (i.img = i.img.clone()), c = i.img[0], c.naturalWidth > 0 ? i.hasSize = !0 : c.width || (i.hasSize = !1)
 				}
 				return t._parseMarkup(n, {
 					title: H(i),
 					img_replaceWith: i.img
 				}, i), t.resizeImage(), i.hasSize ? (F && clearInterval(F), i.loadError ? (n.addClass("mfp-loading"), t.updateStatus("error", a.tError.replace("%url%", i.src))) : (n.removeClass("mfp-loading"), t.updateStatus("ready")), n) : (t.updateStatus("loading"), i.loading = !0, i.hasSize || (i.imgHidden = !0, n.addClass("mfp-loading"), t.findImageSize(i)), n)
 			}
 		}
 	});
 	var R, N = function () {
 		return void 0 === R && (R = void 0 !== document.createElement("p").style.MozTransform), R
 	};
 	e.magnificPopup.registerModule("zoom", {
 		options: {
 			enabled: !1,
 			easing: "ease-in-out",
 			duration: 300,
 			opener: function (e) {
 				return e.is("img") ? e : e.find("img")
 			}
 		},
 		proto: {
 			initZoom: function () {
 				var e, i = t.st.zoom,
 					n = ".zoom";
 				if (i.enabled && t.supportsTransition) {
 					var o, r, s = i.duration,
 						c = function (e) {
 							var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
 								n = "all " + i.duration / 1e3 + "s " + i.easing,
 								o = {
 									position: "fixed",
 									zIndex: 9999,
 									left: 0,
 									top: 0,
 									"-webkit-backface-visibility": "hidden"
 								},
 								r = "transition";
 							return o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = n, t.css(o), t
 						},
 						d = function () {
 							t.content.css("visibility", "visible")
 						};
 					T("BuildControls" + n, function () {
 						if (t._allowZoom()) {
 							if (clearTimeout(o), t.content.css("visibility", "hidden"), e = t._getItemToZoom(), !e) return void d();
 							r = c(e), r.css(t._getOffset()), t.wrap.append(r), o = setTimeout(function () {
 								r.css(t._getOffset(!0)), o = setTimeout(function () {
 									d(), setTimeout(function () {
 										r.remove(), e = r = null, k("ZoomAnimationEnded")
 									}, 16)
 								}, s)
 							}, 16)
 						}
 					}), T(l + n, function () {
 						if (t._allowZoom()) {
 							if (clearTimeout(o), t.st.removalDelay = s, !e) {
 								if (e = t._getItemToZoom(), !e) return;
 								r = c(e)
 							}
 							r.css(t._getOffset(!0)), t.wrap.append(r), t.content.css("visibility", "hidden"), setTimeout(function () {
 								r.css(t._getOffset())
 							}, 16)
 						}
 					}), T(a + n, function () {
 						t._allowZoom() && (d(), r && r.remove(), e = null)
 					})
 				}
 			},
 			_allowZoom: function () {
 				return "image" === t.currItem.type
 			},
 			_getItemToZoom: function () {
 				return t.currItem.hasSize ? t.currItem.img : !1
 			},
 			_getOffset: function (i) {
 				var n;
 				n = i ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
 				var o = n.offset(),
 					r = parseInt(n.css("padding-top"), 10),
 					s = parseInt(n.css("padding-bottom"), 10);
 				o.top -= e(window).scrollTop() - r;
 				var a = {
 					width: n.width(),
 					height: (b ? n.innerHeight() : n[0].offsetHeight) - s - r
 				};
 				return N() ? a["-moz-transform"] = a.transform = "translate(" + o.left + "px," + o.top + "px)" : (a.left = o.left, a.top = o.top), a
 			}
 		}
 	});
 	var U = "iframe",
 		j = "//about:blank",
 		W = function (e) {
 			if (t.currTemplate[U]) {
 				var i = t.currTemplate[U].find("iframe");
 				i.length && (e || (i[0].src = j), t.isIE8 && i.css("display", e ? "block" : "none"))
 			}
 		};
 	e.magnificPopup.registerModule(U, {
 		options: {
 			markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
 			srcAction: "iframe_src",
 			patterns: {
 				youtube: {
 					index: "youtube.com",
 					id: "v=",
 					src: "//www.youtube.com/embed/%id%?autoplay=1"
 				},
 				vimeo: {
 					index: "vimeo.com/",
 					id: "/",
 					src: "//player.vimeo.com/video/%id%?autoplay=1"
 				},
 				gmaps: {
 					index: "//maps.google.",
 					src: "%id%&output=embed"
 				}
 			}
 		},
 		proto: {
 			initIframe: function () {
 				t.types.push(U), T("BeforeChange", function (e, t, i) {
 					t !== i && (t === U ? W() : i === U && W(!0))
 				}), T(a + "." + U, function () {
 					W()
 				})
 			},
 			getIframe: function (i, n) {
 				var o = i.src,
 					r = t.st.iframe;
 				e.each(r.patterns, function () {
 					return o.indexOf(this.index) > -1 ? (this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1) : void 0
 				});
 				var s = {};
 				return r.srcAction && (s[r.srcAction] = o), t._parseMarkup(n, s, i), t.updateStatus("ready"), n
 			}
 		}
 	});
 	var Z = function (e) {
 			var i = t.items.length;
 			return e > i - 1 ? e - i : 0 > e ? i + e : e
 		},
 		q = function (e, t, i) {
 			return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, i)
 		};
 	e.magnificPopup.registerModule("gallery", {
 		options: {
 			enabled: !1,
 			arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
 			preload: [0, 2],
 			navigateByImgClick: !0,
 			arrows: !0,
 			tPrev: "Previous (Left arrow key)",
 			tNext: "Next (Right arrow key)",
 			tCounter: "%curr% of %total%"
 		},
 		proto: {
 			initGallery: function () {
 				var i = t.st.gallery,
 					o = ".mfp-gallery";
 				return t.direction = !0, i && i.enabled ? (r += " mfp-gallery", T(p + o, function () {
 					i.navigateByImgClick && t.wrap.on("click" + o, ".mfp-img", function () {
 						return t.items.length > 1 ? (t.next(), !1) : void 0
 					}), n.on("keydown" + o, function (e) {
 						37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
 					})
 				}), T("UpdateStatus" + o, function (e, i) {
 					i.text && (i.text = q(i.text, t.currItem.index, t.items.length))
 				}), T(u + o, function (e, n, o, r) {
 					var s = t.items.length;
 					o.counter = s > 1 ? q(i.tCounter, r.index, s) : ""
 				}), T("BuildControls" + o, function () {
 					if (t.items.length > 1 && i.arrows && !t.arrowLeft) {
 						var n = i.arrowMarkup,
 							o = t.arrowLeft = e(n.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass(y),
 							r = t.arrowRight = e(n.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass(y);
 						o.click(function () {
 							t.prev()
 						}), r.click(function () {
 							t.next()
 						}), t.container.append(o.add(r))
 					}
 				}), T(f + o, function () {
 					t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function () {
 						t.preloadNearbyImages(), t._preloadTimeout = null
 					}, 16)
 				}), void T(a + o, function () {
 					n.off(o), t.wrap.off("click" + o), t.arrowRight = t.arrowLeft = null
 				})) : !1
 			},
 			next: function () {
 				t.direction = !0, t.index = Z(t.index + 1), t.updateItemHTML()
 			},
 			prev: function () {
 				t.direction = !1, t.index = Z(t.index - 1), t.updateItemHTML()
 			},
 			goTo: function (e) {
 				t.direction = e >= t.index, t.index = e, t.updateItemHTML()
 			},
 			preloadNearbyImages: function () {
 				var e, i = t.st.gallery.preload,
 					n = Math.min(i[0], t.items.length),
 					o = Math.min(i[1], t.items.length);
 				for (e = 1; e <= (t.direction ? o : n); e++) t._preloadItem(t.index + e);
 				for (e = 1; e <= (t.direction ? n : o); e++) t._preloadItem(t.index - e)
 			},
 			_preloadItem: function (i) {
 				if (i = Z(i), !t.items[i].preloaded) {
 					var n = t.items[i];
 					n.parsed || (n = t.parseEl(i)), k("LazyLoad", n), "image" === n.type && (n.img = e('<img class="mfp-img" />').on("load.mfploader", function () {
 						n.hasSize = !0
 					}).on("error.mfploader", function () {
 						n.hasSize = !0, n.loadError = !0, k("LazyLoadError", n)
 					}).attr("src", n.src)), n.preloaded = !0
 				}
 			}
 		}
 	});
 	var B = "retina";
 	e.magnificPopup.registerModule(B, {
 		options: {
 			replaceSrc: function (e) {
 				return e.src.replace(/\.\w+$/, function (e) {
 					return "@2x" + e
 				})
 			},
 			ratio: 1
 		},
 		proto: {
 			initRetina: function () {
 				if (window.devicePixelRatio > 1) {
 					var e = t.st.retina,
 						i = e.ratio;
 					i = isNaN(i) ? i() : i, i > 1 && (T("ImageHasSize." + B, function (e, t) {
 						t.img.css({
 							"max-width": t.img[0].naturalWidth / i,
 							width: "100%"
 						})
 					}), T("ElementParse." + B, function (t, n) {
 						n.src = e.replaceSrc(n, i)
 					}))
 				}
 			}
 		}
 	}), E()
 }),
 function (e) {
 	"function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? module.exports = e() : window.noUiSlider = e()
 }(function () {
 	"use strict";

 	function e(e) {
 		return e.filter(function (e) {
 			return this[e] ? !1 : this[e] = !0
 		}, {})
 	}

 	function t(e, t) {
 		return Math.round(e / t) * t
 	}

 	function i(e) {
 		var t = e.getBoundingClientRect(),
 			i = e.ownerDocument,
 			n = i.documentElement,
 			o = p();
 		return /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (o.x = 0), {
 			top: t.top + o.y - n.clientTop,
 			left: t.left + o.x - n.clientLeft
 		}
 	}

 	function n(e) {
 		return "number" == typeof e && !isNaN(e) && isFinite(e)
 	}

 	function o(e) {
 		var t = Math.pow(10, 7);
 		return Number((Math.round(e * t) / t).toFixed(7))
 	}

 	function r(e, t, i) {
 		c(e, t), setTimeout(function () {
 			d(e, t)
 		}, i)
 	}

 	function s(e) {
 		return Math.max(Math.min(e, 100), 0)
 	}

 	function a(e) {
 		return Array.isArray(e) ? e : [e]
 	}

 	function l(e) {
 		var t = e.split(".");
 		return t.length > 1 ? t[1].length : 0
 	}

 	function c(e, t) {
 		e.classList ? e.classList.add(t) : e.className += " " + t
 	}

 	function d(e, t) {
 		e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ")
 	}

 	function u(e, t) {
 		return e.classList ? e.classList.contains(t) : new RegExp("\\b" + t + "\\b").test(e.className)
 	}

 	function p() {
 		var e = void 0 !== window.pageXOffset,
 			t = "CSS1Compat" === (document.compatMode || ""),
 			i = e ? window.pageXOffset : t ? document.documentElement.scrollLeft : document.body.scrollLeft,
 			n = e ? window.pageYOffset : t ? document.documentElement.scrollTop : document.body.scrollTop;
 		return {
 			x: i,
 			y: n
 		}
 	}

 	function f(e) {
 		e.stopPropagation()
 	}

 	function h(e) {
 		return function (t) {
 			return e + t
 		}
 	}

 	function m(e, t) {
 		return 100 / (t - e)
 	}

 	function v(e, t) {
 		return 100 * t / (e[1] - e[0])
 	}

 	function g(e, t) {
 		return v(e, e[0] < 0 ? t + Math.abs(e[0]) : t - e[0])
 	}

 	function y(e, t) {
 		return t * (e[1] - e[0]) / 100 + e[0]
 	}

 	function w(e, t) {
 		for (var i = 1; e >= t[i];) i += 1;
 		return i
 	}

 	function b(e, t, i) {
 		if (i >= e.slice(-1)[0]) return 100;
 		var n, o, r, s, a = w(i, e);
 		return n = e[a - 1], o = e[a], r = t[a - 1], s = t[a], r + g([n, o], i) / m(r, s)
 	}

 	function x(e, t, i) {
 		if (i >= 100) return e.slice(-1)[0];
 		var n, o, r, s, a = w(i, t);
 		return n = e[a - 1], o = e[a], r = t[a - 1], s = t[a], y([n, o], (i - r) * m(r, s))
 	}

 	function T(e, i, n, o) {
 		if (100 === o) return o;
 		var r, s, a = w(o, e);
 		return n ? (r = e[a - 1], s = e[a], o - r > (s - r) / 2 ? s : r) : i[a - 1] ? e[a - 1] + t(o - e[a - 1], i[a - 1]) : o
 	}

 	function S(e, t, i) {
 		var o;
 		if ("number" == typeof t && (t = [t]), "[object Array]" !== Object.prototype.toString.call(t)) throw new Error("noUiSlider: 'range' contains invalid value.");
 		if (o = "min" === e ? 0 : "max" === e ? 100 : parseFloat(e), !n(o) || !n(t[0])) throw new Error("noUiSlider: 'range' value isn't numeric.");
 		i.xPct.push(o), i.xVal.push(t[0]), o ? i.xSteps.push(isNaN(t[1]) ? !1 : t[1]) : isNaN(t[1]) || (i.xSteps[0] = t[1])
 	}

 	function k(e, t, i) {
 		return t ? void(i.xSteps[e] = v([i.xVal[e], i.xVal[e + 1]], t) / m(i.xPct[e], i.xPct[e + 1])) : !0
 	}

 	function C(e, t, i, n) {
 		this.xPct = [], this.xVal = [], this.xSteps = [n || !1], this.xNumSteps = [!1], this.snap = t, this.direction = i;
 		var o, r = [];
 		for (o in e) e.hasOwnProperty(o) && r.push([e[o], o]);
 		for (r.length && "object" == typeof r[0][0] ? r.sort(function (e, t) {
 				return e[0][0] - t[0][0]
 			}) : r.sort(function (e, t) {
 				return e[0] - t[0]
 			}), o = 0; o < r.length; o++) S(r[o][1], r[o][0], this);
 		for (this.xNumSteps = this.xSteps.slice(0), o = 0; o < this.xNumSteps.length; o++) k(o, this.xNumSteps[o], this)
 	}

 	function E(e, t) {
 		if (!n(t)) throw new Error("noUiSlider: 'step' is not numeric.");
 		e.singleStep = t
 	}

 	function I(e, t) {
 		if ("object" != typeof t || Array.isArray(t)) throw new Error("noUiSlider: 'range' is not an object.");
 		if (void 0 === t.min || void 0 === t.max) throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
 		if (t.min === t.max) throw new Error("noUiSlider: 'range' 'min' and 'max' cannot be equal.");
 		e.spectrum = new C(t, e.snap, e.dir, e.singleStep)
 	}

 	function O(e, t) {
 		if (t = a(t), !Array.isArray(t) || !t.length || t.length > 2) throw new Error("noUiSlider: 'start' option is incorrect.");
 		e.handles = t.length, e.start = t
 	}

 	function P(e, t) {
 		if (e.snap = t, "boolean" != typeof t) throw new Error("noUiSlider: 'snap' option must be a boolean.")
 	}

 	function A(e, t) {
 		if (e.animate = t, "boolean" != typeof t) throw new Error("noUiSlider: 'animate' option must be a boolean.")
 	}

 	function M(e, t) {
 		if ("lower" === t && 1 === e.handles) e.connect = 1;
 		else if ("upper" === t && 1 === e.handles) e.connect = 2;
 		else if (t === !0 && 2 === e.handles) e.connect = 3;
 		else {
 			if (t !== !1) throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
 			e.connect = 0
 		}
 	}

 	function $(e, t) {
 		switch (t) {
 			case "horizontal":
 				e.ort = 0;
 				break;
 			case "vertical":
 				e.ort = 1;
 				break;
 			default:
 				throw new Error("noUiSlider: 'orientation' option is invalid.")
 		}
 	}

 	function _(e, t) {
 		if (!n(t)) throw new Error("noUiSlider: 'margin' option must be numeric.");
 		if (0 !== t && (e.margin = e.spectrum.getMargin(t), !e.margin)) throw new Error("noUiSlider: 'margin' option is only supported on linear sliders.")
 	}

 	function L(e, t) {
 		if (!n(t)) throw new Error("noUiSlider: 'limit' option must be numeric.");
 		if (e.limit = e.spectrum.getMargin(t), !e.limit) throw new Error("noUiSlider: 'limit' option is only supported on linear sliders.")
 	}

 	function D(e, t) {
 		switch (t) {
 			case "ltr":
 				e.dir = 0;
 				break;
 			case "rtl":
 				e.dir = 1, e.connect = [0, 2, 1, 3][e.connect];
 				break;
 			default:
 				throw new Error("noUiSlider: 'direction' option was not recognized.")
 		}
 	}

 	function z(e, t) {
 		if ("string" != typeof t) throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
 		var i = t.indexOf("tap") >= 0,
 			n = t.indexOf("drag") >= 0,
 			o = t.indexOf("fixed") >= 0,
 			r = t.indexOf("snap") >= 0,
 			s = t.indexOf("hover") >= 0;
 		if (n && !e.connect) throw new Error("noUiSlider: 'drag' behaviour must be used with 'connect': true.");
 		e.events = {
 			tap: i || r,
 			drag: n,
 			fixed: o,
 			snap: r,
 			hover: s
 		}
 	}

 	function F(e, t) {
 		var i;
 		if (t !== !1)
 			if (t === !0)
 				for (e.tooltips = [], i = 0; i < e.handles; i++) e.tooltips.push(!0);
 			else {
 				if (e.tooltips = a(t), e.tooltips.length !== e.handles) throw new Error("noUiSlider: must pass a formatter for all handles.");
 				e.tooltips.forEach(function (e) {
 					if ("boolean" != typeof e && ("object" != typeof e || "function" != typeof e.to)) throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")
 				})
 			}
 	}

 	function H(e, t) {
 		if (e.format = t, "function" == typeof t.to && "function" == typeof t.from) return !0;
 		throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.")
 	}

 	function R(e, t) {
 		if (void 0 !== t && "string" != typeof t) throw new Error("noUiSlider: 'cssPrefix' must be a string.");
 		e.cssPrefix = t
 	}

 	function N(e) {
 		var t, i = {
 			margin: 0,
 			limit: 0,
 			animate: !0,
 			format: q
 		};
 		t = {
 			step: {
 				r: !1,
 				t: E
 			},
 			start: {
 				r: !0,
 				t: O
 			},
 			connect: {
 				r: !0,
 				t: M
 			},
 			direction: {
 				r: !0,
 				t: D
 			},
 			snap: {
 				r: !1,
 				t: P
 			},
 			animate: {
 				r: !1,
 				t: A
 			},
 			range: {
 				r: !0,
 				t: I
 			},
 			orientation: {
 				r: !1,
 				t: $
 			},
 			margin: {
 				r: !1,
 				t: _
 			},
 			limit: {
 				r: !1,
 				t: L
 			},
 			behaviour: {
 				r: !0,
 				t: z
 			},
 			format: {
 				r: !1,
 				t: H
 			},
 			tooltips: {
 				r: !1,
 				t: F
 			},
 			cssPrefix: {
 				r: !1,
 				t: R
 			}
 		};
 		var n = {
 			connect: !1,
 			direction: "ltr",
 			behaviour: "tap",
 			orientation: "horizontal"
 		};
 		return Object.keys(t).forEach(function (o) {
 			if (void 0 === e[o] && void 0 === n[o]) {
 				if (t[o].r) throw new Error("noUiSlider: '" + o + "' is required.");
 				return !0
 			}
 			t[o].t(i, void 0 === e[o] ? n[o] : e[o])
 		}), i.pips = e.pips, i.style = i.ort ? "top" : "left", i
 	}

 	function U(t, n) {
 		function o(e, t, i) {
 			var n = e + t[0],
 				o = e + t[1];
 			return i ? (0 > n && (o += Math.abs(n)), o > 100 && (n -= o - 100), [s(n), s(o)]) : [n, o]
 		}

 		function m(e, t) {
 			e.preventDefault();
 			var i, n, o = 0 === e.type.indexOf("touch"),
 				r = 0 === e.type.indexOf("mouse"),
 				s = 0 === e.type.indexOf("pointer"),
 				a = e;
 			return 0 === e.type.indexOf("MSPointer") && (s = !0), o && (i = e.changedTouches[0].pageX, n = e.changedTouches[0].pageY), t = t || p(), (r || s) && (i = e.clientX + t.x, n = e.clientY + t.y), a.pageOffset = t, a.points = [i, n], a.cursor = r || s, a
 		}

 		function v(e, t) {
 			var i = document.createElement("div"),
 				n = document.createElement("div"),
 				o = ["-lower", "-upper"];
 			return e && o.reverse(), c(n, ne[3]), c(n, ne[3] + o[t]), c(i, ne[2]), i.appendChild(n), i
 		}

 		function g(e, t, i) {
 			switch (e) {
 				case 1:
 					c(t, ne[7]), c(i[0], ne[6]);
 					break;
 				case 3:
 					c(i[1], ne[6]);
 				case 2:
 					c(i[0], ne[7]);
 				case 0:
 					c(t, ne[6])
 			}
 		}

 		function y(e, t, i) {
 			var n, o = [];
 			for (n = 0; e > n; n += 1) o.push(i.appendChild(v(t, n)));
 			return o
 		}

 		function w(e, t, i) {
 			c(i, ne[0]), c(i, ne[8 + e]), c(i, ne[4 + t]);
 			var n = document.createElement("div");
 			return c(n, ne[1]), i.appendChild(n), n
 		}

 		function b(e, t) {
 			if (!n.tooltips[t]) return !1;
 			var i = document.createElement("div");
 			return i.className = ne[18], e.firstChild.appendChild(i)
 		}

 		function x() {
 			n.dir && n.tooltips.reverse();
 			var e = V.map(b);
 			n.dir && (e.reverse(), n.tooltips.reverse()), B("update", function (t, i, o) {
 				e[i] && (e[i].innerHTML = n.tooltips[i] === !0 ? t[i] : n.tooltips[i].to(o[i]))
 			})
 		}

 		function T(e, t, i) {
 			if ("range" === e || "steps" === e) return ee.xVal;
 			if ("count" === e) {
 				var n, o = 100 / (t - 1),
 					r = 0;
 				for (t = [];
 					(n = r++ * o) <= 100;) t.push(n);
 				e = "positions"
 			}
 			return "positions" === e ? t.map(function (e) {
 				return ee.fromStepping(i ? ee.getStep(e) : e)
 			}) : "values" === e ? i ? t.map(function (e) {
 				return ee.fromStepping(ee.getStep(ee.toStepping(e)))
 			}) : t : void 0
 		}

 		function S(t, i, n) {
 			function o(e, t) {
 				return (e + t).toFixed(7) / 1
 			}
 			var r = ee.direction,
 				s = {},
 				a = ee.xVal[0],
 				l = ee.xVal[ee.xVal.length - 1],
 				c = !1,
 				d = !1,
 				u = 0;
 			return ee.direction = 0, n = e(n.slice().sort(function (e, t) {
 				return e - t
 			})), n[0] !== a && (n.unshift(a), c = !0), n[n.length - 1] !== l && (n.push(l), d = !0), n.forEach(function (e, r) {
 				var a, l, p, f, h, m, v, g, y, w, b = e,
 					x = n[r + 1];
 				if ("steps" === i && (a = ee.xNumSteps[r]), a || (a = x - b), b !== !1 && void 0 !== x)
 					for (l = b; x >= l; l = o(l, a)) {
 						for (f = ee.toStepping(l), h = f - u, g = h / t, y = Math.round(g), w = h / y, p = 1; y >= p; p += 1) m = u + p * w, s[m.toFixed(5)] = ["x", 0];
 						v = n.indexOf(l) > -1 ? 1 : "steps" === i ? 2 : 0, !r && c && (v = 0), l === x && d || (s[f.toFixed(5)] = [l, v]), u = f
 					}
 			}), ee.direction = r, s
 		}

 		function k(e, t, i) {
 			function o(e) {
 				return ["-normal", "-large", "-sub"][e]
 			}

 			function r(e, t, i) {
 				return 'class="' + t + " " + t + "-" + a + " " + t + o(i[1]) + '" style="' + n.style + ": " + e + '%"'
 			}

 			function s(e, n) {
 				ee.direction && (e = 100 - e), n[1] = n[1] && t ? t(n[0], n[1]) : n[1], d += "<div " + r(e, ne[21], n) + "></div>", n[1] && (d += "<div " + r(e, ne[22], n) + ">" + i.to(n[0]) + "</div>")
 			}
 			var a = ["horizontal", "vertical"][n.ort],
 				l = document.createElement("div"),
 				d = "";
 			return c(l, ne[20]), c(l, ne[20] + "-" + a), Object.keys(e).forEach(function (t) {
 				s(t, e[t])
 			}), l.innerHTML = d, l
 		}

 		function C(e) {
 			var t = e.mode,
 				i = e.density || 1,
 				n = e.filter || !1,
 				o = e.values || !1,
 				r = e.stepped || !1,
 				s = T(t, o, r),
 				a = S(i, t, s),
 				l = e.format || {
 					to: Math.round
 				};
 			return Q.appendChild(k(a, n, l))
 		}

 		function E() {
 			var e = X.getBoundingClientRect(),
 				t = "offset" + ["Width", "Height"][n.ort];
 			return 0 === n.ort ? e.width || X[t] : e.height || X[t]
 		}

 		function I(e, t, i) {
 			void 0 !== t && 1 !== n.handles && (t = Math.abs(t - n.dir)), Object.keys(ie).forEach(function (n) {
 				var o = n.split(".")[0];
 				e === o && ie[n].forEach(function (e) {
 					e.call(G, a(U()), t, a(O(Array.prototype.slice.call(te))), i || !1, J)
 				})
 			})
 		}

 		function O(e) {
 			return 1 === e.length ? e[0] : n.dir ? e.reverse() : e
 		}

 		function P(e, t, i, o) {
 			var r = function (t) {
 					return Q.hasAttribute("disabled") ? !1 : u(Q, ne[14]) ? !1 : (t = m(t, o.pageOffset), e === W.start && void 0 !== t.buttons && t.buttons > 1 ? !1 : o.hover && t.buttons ? !1 : (t.calcPoint = t.points[n.ort], void i(t, o)))
 				},
 				s = [];
 			return e.split(" ").forEach(function (e) {
 				t.addEventListener(e, r, !1), s.push([e, r])
 			}), s
 		}

 		function A(e, t) {
 			if (-1 === navigator.appVersion.indexOf("MSIE 9") && 0 === e.buttons && 0 !== t.buttonsProperty) return M(e, t);
 			var i, n, r = t.handles || V,
 				s = !1,
 				a = 100 * (e.calcPoint - t.start) / t.baseSize,
 				l = r[0] === V[0] ? 0 : 1;
 			if (i = o(a, t.positions, r.length > 1), s = F(r[0], i[l], 1 === r.length), r.length > 1) {
 				if (s = F(r[1], i[l ? 0 : 1], !1) || s)
 					for (n = 0; n < t.handles.length; n++) I("slide", n)
 			} else s && I("slide", l)
 		}

 		function M(e, t) {
 			var i = X.querySelector("." + ne[15]),
 				n = t.handles[0] === V[0] ? 0 : 1;
 			null !== i && d(i, ne[15]), e.cursor && (document.body.style.cursor = "", document.body.removeEventListener("selectstart", document.body.noUiListener));
 			var o = document.documentElement;
 			o.noUiListeners.forEach(function (e) {
 				o.removeEventListener(e[0], e[1])
 			}), d(Q, ne[12]), I("set", n), I("change", n), void 0 !== t.handleNumber && I("end", t.handleNumber)
 		}

 		function $(e, t) {
 			"mouseout" === e.type && "HTML" === e.target.nodeName && null === e.relatedTarget && M(e, t)
 		}

 		function _(e, t) {
 			var i = document.documentElement;
 			if (1 === t.handles.length && (c(t.handles[0].children[0], ne[15]), t.handles[0].hasAttribute("disabled"))) return !1;
 			e.preventDefault(), e.stopPropagation();
 			var n = P(W.move, i, A, {
 					start: e.calcPoint,
 					baseSize: E(),
 					pageOffset: e.pageOffset,
 					handles: t.handles,
 					handleNumber: t.handleNumber,
 					buttonsProperty: e.buttons,
 					positions: [J[0], J[V.length - 1]]
 				}),
 				o = P(W.end, i, M, {
 					handles: t.handles,
 					handleNumber: t.handleNumber
 				}),
 				r = P("mouseout", i, $, {
 					handles: t.handles,
 					handleNumber: t.handleNumber
 				});
 			if (i.noUiListeners = n.concat(o, r), e.cursor) {
 				document.body.style.cursor = getComputedStyle(e.target).cursor, V.length > 1 && c(Q, ne[12]);
 				var s = function () {
 					return !1
 				};
 				document.body.noUiListener = s, document.body.addEventListener("selectstart", s, !1)
 			}
 			void 0 !== t.handleNumber && I("start", t.handleNumber)
 		}

 		function L(e) {
 			var t, o, s = e.calcPoint,
 				a = 0;
 			return e.stopPropagation(), V.forEach(function (e) {
 				a += i(e)[n.style]
 			}), t = a / 2 > s || 1 === V.length ? 0 : 1, V[t].hasAttribute("disabled") && (t = t ? 0 : 1), s -= i(X)[n.style], o = 100 * s / E(), n.events.snap || r(Q, ne[14], 300), V[t].hasAttribute("disabled") ? !1 : (F(V[t], o), I("slide", t, !0), I("set", t, !0), I("change", t, !0), void(n.events.snap && _(e, {
 				handles: [V[t]]
 			})))
 		}

 		function D(e) {
 			var t = e.calcPoint - i(X)[n.style],
 				o = ee.getStep(100 * t / E()),
 				r = ee.fromStepping(o);
 			Object.keys(ie).forEach(function (e) {
 				"hover" === e.split(".")[0] && ie[e].forEach(function (e) {
 					e.call(G, r)
 				})
 			})
 		}

 		function z(e) {
 			var t, i;
 			if (!e.fixed)
 				for (t = 0; t < V.length; t += 1) P(W.start, V[t].children[0], _, {
 					handles: [V[t]],
 					handleNumber: t
 				});
 			if (e.tap && P(W.start, X, L, {
 					handles: V
 				}), e.hover)
 				for (P(W.move, X, D, {
 						hover: !0
 					}), t = 0; t < V.length; t += 1)["mousemove MSPointerMove pointermove"].forEach(function (e) {
 					V[t].children[0].addEventListener(e, f, !1)
 				});
 			e.drag && (i = [X.querySelector("." + ne[7])], c(i[0], ne[10]), e.fixed && i.push(V[i[0] === V[0] ? 1 : 0].children[0]), i.forEach(function (e) {
 				P(W.start, e, _, {
 					handles: V
 				})
 			}))
 		}

 		function F(e, t, i) {
 			var o = e !== V[0] ? 1 : 0,
 				r = J[0] + n.margin,
 				a = J[1] - n.margin,
 				l = J[0] + n.limit,
 				u = J[1] - n.limit;
 			return V.length > 1 && (t = o ? Math.max(t, r) : Math.min(t, a)), i !== !1 && n.limit && V.length > 1 && (t = o ? Math.min(t, l) : Math.max(t, u)), t = ee.getStep(t), t = s(parseFloat(t.toFixed(7))), t === J[o] ? !1 : (window.requestAnimationFrame ? window.requestAnimationFrame(function () {
 				e.style[n.style] = t + "%"
 			}) : e.style[n.style] = t + "%", e.previousSibling || (d(e, ne[17]), t > 50 && c(e, ne[17])), J[o] = t, te[o] = ee.fromStepping(t), I("update", o), !0)
 		}

 		function H(e, t) {
 			var i, o, r;
 			for (n.limit && (e += 1), i = 0; e > i; i += 1) o = i % 2, r = t[o], null !== r && r !== !1 && ("number" == typeof r && (r = String(r)), r = n.format.from(r), (r === !1 || isNaN(r) || F(V[o], ee.toStepping(r), i === 3 - n.dir) === !1) && I("update", o))
 		}

 		function R(e) {
 			var t, i, o = a(e);
 			for (n.dir && n.handles > 1 && o.reverse(), n.animate && -1 !== J[0] && r(Q, ne[14], 300), t = V.length > 1 ? 3 : 1, 1 === o.length && (t = 1), H(t, o), i = 0; i < V.length; i++) null !== o[i] && I("set", i)
 		}

 		function U() {
 			var e, t = [];
 			for (e = 0; e < n.handles; e += 1) t[e] = n.format.to(te[e]);
 			return O(t)
 		}

 		function j() {
 			for (ne.forEach(function (e) {
 					e && d(Q, e)
 				}); Q.firstChild;) Q.removeChild(Q.firstChild);
 			delete Q.noUiSlider
 		}

 		function q() {
 			var e = J.map(function (e, t) {
 				var i = ee.getApplicableStep(e),
 					n = l(String(i[2])),
 					o = te[t],
 					r = 100 === e ? null : i[2],
 					s = Number((o - i[2]).toFixed(n)),
 					a = 0 === e ? null : s >= i[1] ? i[2] : i[0] || !1;
 				return [a, r]
 			});
 			return O(e)
 		}

 		function B(e, t) {
 			ie[e] = ie[e] || [], ie[e].push(t), "update" === e.split(".")[0] && V.forEach(function (e, t) {
 				I("update", t)
 			})
 		}

 		function Y(e) {
 			var t = e.split(".")[0],
 				i = e.substring(t.length);
 			Object.keys(ie).forEach(function (e) {
 				var n = e.split(".")[0],
 					o = e.substring(n.length);
 				t && t !== n || i && i !== o || delete ie[e]
 			})
 		}

 		function K(e) {
 			var t, i = U(),
 				o = N({
 					start: [0, 0],
 					margin: e.margin,
 					limit: e.limit,
 					step: e.step,
 					range: e.range,
 					animate: e.animate,
 					snap: void 0 === e.snap ? n.snap : e.snap
 				});
 			for (["margin", "limit", "step", "range", "animate"].forEach(function (t) {
 					void 0 !== e[t] && (n[t] = e[t])
 				}), o.spectrum.direction = ee.direction, ee = o.spectrum, J = [-1, -1], R(i), t = 0; t < V.length; t++) I("update", t)
 		}
 		var X, V, G, Q = t,
 			J = [-1, -1],
 			ee = n.spectrum,
 			te = [],
 			ie = {},
 			ne = ["target", "base", "origin", "handle", "horizontal", "vertical", "background", "connect", "ltr", "rtl", "draggable", "", "state-drag", "", "state-tap", "active", "", "stacking", "tooltip", "", "pips", "marker", "value"].map(h(n.cssPrefix || Z));
 		if (Q.noUiSlider) throw new Error("Slider was already initialized.");
 		return X = w(n.dir, n.ort, Q), V = y(n.handles, n.dir, X), g(n.connect, Q, V), n.pips && C(n.pips), n.tooltips && x(), G = {
 			destroy: j,
 			steps: q,
 			on: B,
 			off: Y,
 			get: U,
 			set: R,
 			updateOptions: K,
 			options: n,
 			target: Q,
 			pips: C
 		}, z(n.events), G
 	}

 	function j(e, t) {
 		if (!e.nodeName) throw new Error("noUiSlider.create requires a single element.");
 		var i = N(t, e),
 			n = U(e, i);
 		return n.set(i.start), e.noUiSlider = n, n
 	}
 	var W = window.navigator.pointerEnabled ? {
 			start: "pointerdown",
 			move: "pointermove",
 			end: "pointerup"
 		} : window.navigator.msPointerEnabled ? {
 			start: "MSPointerDown",
 			move: "MSPointerMove",
 			end: "MSPointerUp"
 		} : {
 			start: "mousedown touchstart",
 			move: "mousemove touchmove",
 			end: "mouseup touchend"
 		},
 		Z = "noUi-";
 	C.prototype.getMargin = function (e) {
 		return 2 === this.xPct.length ? v(this.xVal, e) : !1
 	}, C.prototype.toStepping = function (e) {
 		return e = b(this.xVal, this.xPct, e), this.direction && (e = 100 - e), e
 	}, C.prototype.fromStepping = function (e) {
 		return this.direction && (e = 100 - e), o(x(this.xVal, this.xPct, e))
 	}, C.prototype.getStep = function (e) {
 		return this.direction && (e = 100 - e), e = T(this.xPct, this.xSteps, this.snap, e), this.direction && (e = 100 - e), e
 	}, C.prototype.getApplicableStep = function (e) {
 		var t = w(e, this.xPct),
 			i = 100 === e ? 2 : 1;
 		return [this.xNumSteps[t - 2], this.xVal[t - i], this.xNumSteps[t - i]]
 	}, C.prototype.convert = function (e) {
 		return this.getStep(this.toStepping(e))
 	};
 	var q = {
 		to: function (e) {
 			return void 0 !== e && e.toFixed(2)
 		},
 		from: Number
 	};
 	return {
 		create: j
 	}
 }),
 function (e) {
 	"use strict";
 	var t = -1,
 		i = {
 			onVisible: function (e) {
 				var t = i.isSupported();
 				if (!t || !i.hidden()) return e(), t;
 				var n = i.change(function (t, o) {
 					i.hidden() || (i.unbind(n), e())
 				});
 				return n
 			},
 			change: function (e) {
 				if (!i.isSupported()) return !1;
 				t += 1;
 				var n = t;
 				return i._callbacks[n] = e, i._listen(), n
 			},
 			unbind: function (e) {
 				delete i._callbacks[e]
 			},
 			afterPrerendering: function (e) {
 				var t = i.isSupported(),
 					n = "prerender";
 				if (!t || n != i.state()) return e(), t;
 				var o = i.change(function (t, r) {
 					n != r && (i.unbind(o), e())
 				});
 				return o
 			},
 			hidden: function () {
 				return !(!i._doc.hidden && !i._doc.webkitHidden)
 			},
 			state: function () {
 				return i._doc.visibilityState || i._doc.webkitVisibilityState || "visible"
 			},
 			isSupported: function () {
 				return !(!i._doc.visibilityState && !i._doc.webkitVisibilityState)
 			},
 			_doc: document || {},
 			_callbacks: {},
 			_change: function (e) {
 				var t = i.state();
 				for (var n in i._callbacks) i._callbacks[n].call(i._doc, e, t)
 			},
 			_listen: function () {
 				if (!i._init) {
 					var e = "visibilitychange";
 					i._doc.webkitVisibilityState && (e = "webkit" + e);
 					var t = function () {
 						i._change.apply(i, arguments)
 					};
 					i._doc.addEventListener ? i._doc.addEventListener(e, t) : i._doc.attachEvent(e, t), i._init = !0
 				}
 			}
 		};
 	"undefined" != typeof module && module.exports ? module.exports = i : e.Visibility = i
 }(this),
 function (e) {
 	"use strict";
 	var t = -1,
 		i = function (i) {
 			return i.every = function (e, n, o) {
 				i._time(), o || (o = n, n = null), t += 1;
 				var r = t;
 				return i._timers[r] = {
 					visible: e,
 					hidden: n,
 					callback: o
 				}, i._run(r, !1), i.isSupported() && i._listen(), r
 			}, i.stop = function (e) {
 				return i._timers[e] ? (i._stop(e), delete i._timers[e], !0) : !1
 			}, i._timers = {}, i._time = function () {
 				i._timed || (i._timed = !0, i._wasHidden = i.hidden(), i.change(function () {
 					i._stopRun(), i._wasHidden = i.hidden()
 				}))
 			}, i._run = function (t, n) {
 				var o, r = i._timers[t];
 				if (i.hidden()) {
 					if (null === r.hidden) return;
 					o = r.hidden
 				} else o = r.visible;
 				var s = function () {
 					r.last = new Date, r.callback.call(e)
 				};
 				if (n) {
 					var a = new Date,
 						l = a - r.last;
 					o > l ? r.delay = setTimeout(function () {
 						s(), r.id = setInterval(s, o)
 					}, o - l) : (s(), r.id = setInterval(s, o))
 				} else r.id = setInterval(s, o)
 			}, i._stop = function (e) {
 				var t = i._timers[e];
 				clearInterval(t.id), clearTimeout(t.delay), delete t.id, delete t.delay
 			}, i._stopRun = function (e) {
 				var t = i.hidden(),
 					n = i._wasHidden;
 				if (t && !n || !t && n)
 					for (var o in i._timers) i._stop(o), i._run(o, !t)
 			}, i
 		};
 	"undefined" != typeof module && module.exports ? module.exports = i(require("./visibility.core")) : i(e.Visibility)
 }(window),
 function (e) {
 	if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
 	else if ("function" == typeof define && define.amd) define([], e);
 	else {
 		var t;
 		t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.Clipboard = e()
 	}
 }(function () {
 	var e;
 	return function t(e, i, n) {
 		function o(s, a) {
 			if (!i[s]) {
 				if (!e[s]) {
 					var l = "function" == typeof require && require;
 					if (!a && l) return l(s, !0);
 					if (r) return r(s, !0);
 					var c = new Error("Cannot find module '" + s + "'");
 					throw c.code = "MODULE_NOT_FOUND", c
 				}
 				var d = i[s] = {
 					exports: {}
 				};
 				e[s][0].call(d.exports, function (t) {
 					var i = e[s][1][t];
 					return o(i ? i : t)
 				}, d, d.exports, t, e, i, n)
 			}
 			return i[s].exports
 		}
 		for (var r = "function" == typeof require && require, s = 0; s < n.length; s++) o(n[s]);
 		return o
 	}({
 		1: [function (e, t, i) {
 			var n = e("matches-selector");
 			t.exports = function (e, t, i) {
 				for (var o = i ? e : e.parentNode; o && o !== document;) {
 					if (n(o, t)) return o;
 					o = o.parentNode
 				}
 			}
 		}, {
 			"matches-selector": 5
 		}],
 		2: [function (e, t, i) {
 			function n(e, t, i, n, r) {
 				var s = o.apply(this, arguments);
 				return e.addEventListener(i, s, r), {
 					destroy: function () {
 						e.removeEventListener(i, s, r)
 					}
 				}
 			}

 			function o(e, t, i, n) {
 				return function (i) {
 					i.delegateTarget = r(i.target, t, !0), i.delegateTarget && n.call(e, i)
 				}
 			}
 			var r = e("closest");
 			t.exports = n
 		}, {
 			closest: 1
 		}],
 		3: [function (e, t, i) {
 			i.node = function (e) {
 				return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
 			}, i.nodeList = function (e) {
 				var t = Object.prototype.toString.call(e);
 				return void 0 !== e && ("[object NodeList]" === t || "[object HTMLCollection]" === t) && "length" in e && (0 === e.length || i.node(e[0]))
 			}, i.string = function (e) {
 				return "string" == typeof e || e instanceof String
 			}, i.fn = function (e) {
 				var t = Object.prototype.toString.call(e);
 				return "[object Function]" === t
 			}
 		}, {}],
 		4: [function (e, t, i) {
 			function n(e, t, i) {
 				if (!e && !t && !i) throw new Error("Missing required arguments");
 				if (!a.string(t)) throw new TypeError("Second argument must be a String");
 				if (!a.fn(i)) throw new TypeError("Third argument must be a Function");
 				if (a.node(e)) return o(e, t, i);
 				if (a.nodeList(e)) return r(e, t, i);
 				if (a.string(e)) return s(e, t, i);
 				throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
 			}

 			function o(e, t, i) {
 				return e.addEventListener(t, i), {
 					destroy: function () {
 						e.removeEventListener(t, i)
 					}
 				}
 			}

 			function r(e, t, i) {
 				return Array.prototype.forEach.call(e, function (e) {
 					e.addEventListener(t, i)
 				}), {
 					destroy: function () {
 						Array.prototype.forEach.call(e, function (e) {
 							e.removeEventListener(t, i)
 						})
 					}
 				}
 			}

 			function s(e, t, i) {
 				return l(document.body, e, t, i)
 			}
 			var a = e("./is"),
 				l = e("delegate");
 			t.exports = n
 		}, {
 			"./is": 3,
 			delegate: 2
 		}],
 		5: [function (e, t, i) {
 			function n(e, t) {
 				if (r) return r.call(e, t);
 				for (var i = e.parentNode.querySelectorAll(t), n = 0; n < i.length; ++n)
 					if (i[n] == e) return !0;
 				return !1
 			}
 			var o = Element.prototype,
 				r = o.matchesSelector || o.webkitMatchesSelector || o.mozMatchesSelector || o.msMatchesSelector || o.oMatchesSelector;
 			t.exports = n
 		}, {}],
 		6: [function (e, t, i) {
 			function n(e) {
 				var t;
 				if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) e.focus(), e.setSelectionRange(0, e.value.length), t = e.value;
 				else {
 					e.hasAttribute("contenteditable") && e.focus();
 					var i = window.getSelection(),
 						n = document.createRange();
 					n.selectNodeContents(e), i.removeAllRanges(), i.addRange(n), t = i.toString()
 				}
 				return t
 			}
 			t.exports = n
 		}, {}],
 		7: [function (e, t, i) {
 			function n() {}
 			n.prototype = {
 				on: function (e, t, i) {
 					var n = this.e || (this.e = {});
 					return (n[e] || (n[e] = [])).push({
 						fn: t,
 						ctx: i
 					}), this
 				},
 				once: function (e, t, i) {
 					function n() {
 						o.off(e, n), t.apply(i, arguments)
 					}
 					var o = this;
 					return n._ = t, this.on(e, n, i)
 				},
 				emit: function (e) {
 					var t = [].slice.call(arguments, 1),
 						i = ((this.e || (this.e = {}))[e] || []).slice(),
 						n = 0,
 						o = i.length;
 					for (n; o > n; n++) i[n].fn.apply(i[n].ctx, t);
 					return this
 				},
 				off: function (e, t) {
 					var i = this.e || (this.e = {}),
 						n = i[e],
 						o = [];
 					if (n && t)
 						for (var r = 0, s = n.length; s > r; r++) n[r].fn !== t && n[r].fn._ !== t && o.push(n[r]);
 					return o.length ? i[e] = o : delete i[e], this
 				}
 			}, t.exports = n
 		}, {}],
 		8: [function (t, i, n) {
 			! function (o, r) {
 				if ("function" == typeof e && e.amd) e(["module", "select"], r);
 				else if ("undefined" != typeof n) r(i, t("select"));
 				else {
 					var s = {
 						exports: {}
 					};
 					r(s, o.select), o.clipboardAction = s.exports
 				}
 			}(this, function (e, t) {
 				"use strict";

 				function i(e) {
 					return e && e.__esModule ? e : {
 						"default": e
 					}
 				}

 				function n(e, t) {
 					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
 				}
 				var o = i(t),
 					r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
 						return typeof e
 					} : function (e) {
 						return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
 					},
 					s = function () {
 						function e(e, t) {
 							for (var i = 0; i < t.length; i++) {
 								var n = t[i];
 								n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
 							}
 						}
 						return function (t, i, n) {
 							return i && e(t.prototype, i), n && e(t, n), t
 						}
 					}(),
 					a = function () {
 						function e(t) {
 							n(this, e), this.resolveOptions(t), this.initSelection()
 						}
 						return e.prototype.resolveOptions = function () {
 							var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
 							this.action = e.action, this.emitter = e.emitter, this.target = e.target, this.text = e.text, this.trigger = e.trigger, this.selectedText = ""
 						}, e.prototype.initSelection = function () {
 							this.text ? this.selectFake() : this.target && this.selectTarget()
 						}, e.prototype.selectFake = function () {
 							var e = this,
 								t = "rtl" == document.documentElement.getAttribute("dir");
 							this.removeFake(), this.fakeHandler = document.body.addEventListener("click", function () {
 								return e.removeFake()
 							}), this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "fixed", this.fakeElem.style[t ? "right" : "left"] = "-9999px", this.fakeElem.style.top = (window.pageYOffset || document.documentElement.scrollTop) + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, document.body.appendChild(this.fakeElem), this.selectedText = (0, o["default"])(this.fakeElem), this.copyText()
 						}, e.prototype.removeFake = function () {
 							this.fakeHandler && (document.body.removeEventListener("click"), this.fakeHandler = null), this.fakeElem && (document.body.removeChild(this.fakeElem), this.fakeElem = null)
 						}, e.prototype.selectTarget = function () {
 							this.selectedText = (0, o["default"])(this.target), this.copyText()
 						}, e.prototype.copyText = function () {
 							var e = void 0;
 							try {
 								e = document.execCommand(this.action)
 							} catch (t) {
 								e = !1
 							}
 							this.handleResult(e)
 						}, e.prototype.handleResult = function (e) {
 							e ? this.emitter.emit("success", {
 								action: this.action,
 								text: this.selectedText,
 								trigger: this.trigger,
 								clearSelection: this.clearSelection.bind(this)
 							}) : this.emitter.emit("error", {
 								action: this.action,
 								trigger: this.trigger,
 								clearSelection: this.clearSelection.bind(this)
 							})
 						}, e.prototype.clearSelection = function () {
 							this.target && this.target.blur(), window.getSelection().removeAllRanges()
 						}, e.prototype.destroy = function () {
 							this.removeFake()
 						}, s(e, [{
 							key: "action",
 							set: function () {
 								var e = arguments.length <= 0 || void 0 === arguments[0] ? "copy" : arguments[0];
 								if (this._action = e, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
 							},
 							get: function () {
 								return this._action
 							}
 						}, {
 							key: "target",
 							set: function (e) {
 								if (void 0 !== e) {
 									if (!e || "object" !== ("undefined" == typeof e ? "undefined" : r(e)) || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');
 									if ("copy" === this.action && e.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
 									if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
 									this._target = e
 								}
 							},
 							get: function () {
 								return this._target
 							}
 						}]), e
 					}();
 				e.exports = a
 			})
 		}, {
 			select: 6
 		}],
 		9: [function (t, i, n) {
 			! function (o, r) {
 				if ("function" == typeof e && e.amd) e(["module", "./clipboard-action", "tiny-emitter", "good-listener"], r);
 				else if ("undefined" != typeof n) r(i, t("./clipboard-action"), t("tiny-emitter"), t("good-listener"));
 				else {
 					var s = {
 						exports: {}
 					};
 					r(s, o.clipboardAction, o.tinyEmitter, o.goodListener), o.clipboard = s.exports
 				}
 			}(this, function (e, t, i, n) {
 				"use strict";

 				function o(e) {
 					return e && e.__esModule ? e : {
 						"default": e
 					}
 				}

 				function r(e, t) {
 					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
 				}

 				function s(e, t) {
 					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
 					return !t || "object" != typeof t && "function" != typeof t ? e : t
 				}

 				function a(e, t) {
 					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
 					e.prototype = Object.create(t && t.prototype, {
 						constructor: {
 							value: e,
 							enumerable: !1,
 							writable: !0,
 							configurable: !0
 						}
 					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
 				}

 				function l(e, t) {
 					var i = "data-clipboard-" + e;
 					if (t.hasAttribute(i)) return t.getAttribute(i)
 				}
 				var c = o(t),
 					d = o(i),
 					u = o(n),
 					p = function (e) {
 						function t(i, n) {
 							r(this, t);
 							var o = s(this, e.call(this));
 							return o.resolveOptions(n), o.listenClick(i), o
 						}
 						return a(t, e), t.prototype.resolveOptions = function () {
 							var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
 							this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, this.text = "function" == typeof e.text ? e.text : this.defaultText
 						}, t.prototype.listenClick = function (e) {
 							var t = this;
 							this.listener = (0, u["default"])(e, "click", function (e) {
 								return t.onClick(e)
 							})
 						}, t.prototype.onClick = function (e) {
 							var t = e.delegateTarget || e.currentTarget;
 							this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new c["default"]({
 								action: this.action(t),
 								target: this.target(t),
 								text: this.text(t),
 								trigger: t,
 								emitter: this
 							})
 						}, t.prototype.defaultAction = function (e) {
 							return l("action", e)
 						}, t.prototype.defaultTarget = function (e) {
 							var t = l("target", e);
 							return t ? document.querySelector(t) : void 0
 						}, t.prototype.defaultText = function (e) {
 							return l("text", e)
 						}, t.prototype.destroy = function () {
 							this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
 						}, t
 					}(d["default"]);
 				e.exports = p
 			})
 		}, {
 			"./clipboard-action": 8,
 			"good-listener": 4,
 			"tiny-emitter": 7
 		}]
 	}, {}, [9])(9)
 });
