function FileName() {
    return window.location.href.substr(window.location.href.lastIndexOf("/") + 1)
}

function strStartsWith(b, a) {
    return b.indexOf(a) === 0
} (function (y, E) {
    function k() {
        var a = C.elements;
        return "string" == typeof a ? a.split(" ") : a
    }

    function b(c) {
        var a = g[c[A]];
        a || (a = {}, w++, c[A] = w, g[w] = a);
        return a
    }

    function q(c, d, a) {
        d || (d = E);
        if (z) {
            return d.createElement(c)
        }
        a || (a = b(d));
        d = a.cache[c] ? a.cache[c].cloneNode() : x.test(c) ? (a.cache[c] = a.createElem(c)).cloneNode() : a.createElem(c);
        return d.canHaveChildren && !B.test(c) ? a.frag.appendChild(d) : d
    }

    function F(c, a) {
        if (!a.cache) {
            a.cache = {}, a.createElem = c.createElement, a.createFrag = c.createDocumentFragment, a.frag = a.createFrag()
        }
        c.createElement = function (d) {
            return !C.shivMethods ? a.createElem(d) : q(d, c, a)
        };
        c.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + k().join().replace(/[\w\-]+/g, function (d) {
            a.createElem(d);
            a.frag.createElement(d);
            return 'c("' + d + '")'
        }) + ");return n}")(C, a.frag)
    }

    function j(c) {
        c || (c = E);
        var f = b(c);
        if (C.shivCSS && !m && !f.hasCSS) {
            var a, d = c;
            a = d.createElement("p");
            d = d.getElementsByTagName("head")[0] || d.documentElement;
            a.innerHTML = "x<style>article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}</style>";
            a = d.insertBefore(a.lastChild, d.firstChild);
            f.hasCSS = !!a
        }
        z || F(c, f);
        return c
    }
    var D = y.html5 || {},
        B = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        x = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        m, A = "_html5shiv",
        w = 0,
        g = {},
        z;
    (function () {
        try {
            var d = E.createElement("a");
            d.innerHTML = "<xyz></xyz>";
            m = "hidden" in d;
            var f;
            if (!(f = 1 == d.childNodes.length)) {
                E.createElement("a");
                var c = E.createDocumentFragment();
                f = "undefined" == typeof c.cloneNode || "undefined" == typeof c.createDocumentFragment || "undefined" == typeof c.createElement
            }
            z = f
        } catch (a) {
            z = m = !0
        }
    })();
    var C = {
        elements: D.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
        version: "3.7.0",
        shivCSS: !1 !== D.shivCSS,
        supportsUnknownElements: z,
        shivMethods: !1 !== D.shivMethods,
        type: "default",
        shivDocument: j,
        createElement: q,
        createDocumentFragment: function (l, f) {
            l || (l = E);
            if (z) {
                return l.createDocumentFragment()
            }
            for (var f = f || b(l), h = f.frag.cloneNode(), n = 0, d = k(), c = d.length; n < c; n++) {
                h.createElement(d[n])
            }
            return h
        }
    };
    y.html5 = C;
    j(E)
})(this, document);
$("body").click(function () {
    if (strStartsWith(FileName(), "contact")) {
        $(".box").hide()
    }
});
$(function () {
    var a = true;
    $(".topMenu").parent().on("click mouseenter", function () {
        a = false;
        $(".topMenu").show()
    });
    $(".topMenu").parent().on("mouseleave", function () {
        a = true;
        setTimeout(function () {
            if (a) {
                $(".topMenu").hide()
            }
        }, 500)
    })
});
(function (a) {
    a.fn.menumaker = function (b) {
        var d = a(this),
            c = a.extend({
                title: "Menu",
                format: "dropdown",
                sticky: false
            }, b);
        return this.each(function () {
            d.prepend('<div id="menu-button">' + c.title + "</div>");
            a(this).find("#menu-button").on("click", function () {
                a(this).toggleClass("menu-opened");
                var e = a(this).next("ul");
                if (e.hasClass("open")) {
                    e.hide().removeClass("open")
                } else {
                    e.show().addClass("open");
                    if (c.format === "dropdown") {
                        e.find("ul").show()
                    }
                }
            });
            d.find("li ul").parent().addClass("has-sub");
            multiTg = function () {
                d.find(".has-sub").prepend('<span class="submenu-button"></span>');
                d.find(".submenu-button").on("click", function () {
                    a(this).toggleClass("submenu-opened");
                    if (a(this).siblings("ul").hasClass("open")) {
                        a(this).siblings("ul").removeClass("open").hide()
                    } else {
                        a(this).siblings("ul").addClass("open").show()
                    }
                })
            };
            if (c.format === "multitoggle") {
                multiTg()
            } else {
                d.addClass("dropdown")
            }
            if (c.sticky === true) {
                d.css("position", "fixed")
            }
            resizeFix = function () {
                if (a(window).width() > 768) {
                    d.find("ul").show()
                }
                if (a(window).width() <= 768) {
                    d.find("ul").hide().removeClass("open")
                }
            };
            resizeFix();
            return a(window).on("resize", resizeFix)
        })
    }
})(jQuery);
(function (a) {
    a(document).ready(function () {
        a(document).ready(function () {
            function g(f) {
                return f.replace(/\w\S*/g, function (i) {
                    return i.charAt(0).toUpperCase() + i.substr(1).toLowerCase()
                })
            }
            a("#cssmenu").menumaker({
                title: "Menu",
                format: "multitoggle"
            });
            a("#cssmenu").prepend("<div id='menu-line'></div>");
            var k = false,
                d, b = 0,
                e = a("#cssmenu #menu-line"),
                l, c, j;
            a("#cssmenu > ul > li").each(function () {
                if (a(this).hasClass("active")) {
                    d = a(this);
                    k = true
                }
            });
            if (k === false) {
                d = a("#cssmenu > ul > li").first()
            }
            j = l = d.width();
            c = b = d.position().left;
            e.css("width", l);
            e.css("left", b);
            a("#cssmenu > ul > li").hover(function () {
                d = a(this);
                l = d.width();
                b = d.position().left;
                e.css("width", l);
                e.css("left", b)
            }, function () {
                e.css("left", c);
                e.css("width", j)
            });
            var h = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
            a("#cssmenu").add(a(this).find("a")).find("[href='/" + h + "']").parents("#cssmenu > ul > li").addClass("active")
        })
    })
})(jQuery);
(function (b) {
    function c(d) {
        return (d || "").toLowerCase()
    }
    var a = "2.1.6";
    b.fn.cycle = function (d) {
        var e;
        if (this.length === 0 && !b.isReady) {
            e = {
                s: this.selector,
                c: this.context
            };
            b.fn.cycle.log("requeuing slideshow (dom not ready)");
            b(function () {
                b(e.s, e.c).cycle(d)
            });
            return this
        }
        return this.each(function () {
            var l, j, k, n;
            var h = b(this);
            var g = b.fn.cycle.log;
            if (h.data("cycle.opts")) {
                return
            }
            if (h.data("cycle-log") === false || d && d.log === false || j && j.log === false) {
                g = b.noop
            }
            g("--c2 init--");
            l = h.data();
            for (var m in l) {
                if (l.hasOwnProperty(m) && /^cycle[A-Z]+/.test(m)) {
                    n = l[m];
                    k = m.match(/^cycle(.*)/)[1].replace(/^[A-Z]/, c);
                    g(k + ":", n, "(" + typeof n + ")");
                    l[k] = n
                }
            }
            j = b.extend({}, b.fn.cycle.defaults, l, d || {});
            j.timeoutId = 0;
            j.paused = j.paused || false;
            j.container = h;
            j._maxZ = j.maxZ;
            j.API = b.extend({
                _container: h
            }, b.fn.cycle.API);
            j.API.log = g;
            j.API.trigger = function (i, f) {
                j.container.trigger(i, f);
                return j.API
            };
            h.data("cycle.opts", j);
            h.data("cycle.API", j.API);
            j.API.trigger("cycle-bootstrap", [j, j.API]);
            j.API.addInitialSlides();
            j.API.preInitSlideshow();
            if (j.slides.length) {
                j.API.initSlideshow()
            }
        })
    };
    b.fn.cycle.API = {
        opts: function () {
            return this._container.data("cycle.opts")
        },
        addInitialSlides: function () {
            var d = this.opts();
            var e = d.slides;
            d.slideCount = 0;
            d.slides = b();
            e = e.jquery ? e : d.container.find(e);
            if (d.random) {
                e.sort(function () {
                    return Math.random() - 0.5
                })
            }
            d.API.add(e)
        },
        preInitSlideshow: function () {
            var d = this.opts();
            d.API.trigger("cycle-pre-initialize", [d]);
            var e = b.fn.cycle.transitions[d.fx];
            if (e && b.isFunction(e.preInit)) {
                e.preInit(d)
            }
            d._preInitialized = true
        },
        postInitSlideshow: function () {
            var d = this.opts();
            d.API.trigger("cycle-post-initialize", [d]);
            var e = b.fn.cycle.transitions[d.fx];
            if (e && b.isFunction(e.postInit)) {
                e.postInit(d)
            }
        },
        initSlideshow: function () {
            var d = this.opts();
            var f = d.container;
            var e;
            d.API.calcFirstSlide();
            if (d.container.css("position") == "static") {
                d.container.css("position", "relative")
            }
            b(d.slides[d.currSlide]).css({
                opacity: 1,
                display: "block",
                visibility: "visible"
            });
            d.API.stackSlides(d.slides[d.currSlide], d.slides[d.nextSlide], !d.reverse);
            if (d.pauseOnHover) {
                if (d.pauseOnHover !== true) {
                    f = b(d.pauseOnHover)
                }
                f.hover(function () {
                    d.API.pause(true)
                }, function () {
                    d.API.resume(true)
                })
            }
            if (d.timeout) {
                e = d.API.getSlideOpts(d.currSlide);
                d.API.queueTransition(e, e.timeout + d.delay)
            }
            d._initialized = true;
            d.API.updateView(true);
            d.API.trigger("cycle-initialized", [d]);
            d.API.postInitSlideshow()
        },
        pause: function (e) {
            var g = this.opts(),
                f = g.API.getSlideOpts(),
                d = g.hoverPaused || g.paused;
            if (e) {
                g.hoverPaused = true
            } else {
                g.paused = true
            }
            if (!d) {
                g.container.addClass("cycle-paused");
                g.API.trigger("cycle-paused", [g]).log("cycle-paused");
                if (f.timeout) {
                    clearTimeout(g.timeoutId);
                    g.timeoutId = 0;
                    g._remainingTimeout -= b.now() - g._lastQueue;
                    if (g._remainingTimeout < 0 || isNaN(g._remainingTimeout)) {
                        g._remainingTimeout = undefined
                    }
                }
            }
        },
        resume: function (g) {
            var d = this.opts(),
                h = !d.hoverPaused && !d.paused,
                f;
            if (g) {
                d.hoverPaused = false
            } else {
                d.paused = false
            }
            if (!h) {
                d.container.removeClass("cycle-paused");
                if (d.slides.filter(":animated").length === 0) {
                    d.API.queueTransition(d.API.getSlideOpts(), d._remainingTimeout)
                }
                d.API.trigger("cycle-resumed", [d, d._remainingTimeout]).log("cycle-resumed")
            }
        },
        add: function (e, j) {
            var g = this.opts();
            var d = g.slideCount;
            var f = false;
            var h;
            if (b.type(e) == "string") {
                e = b.trim(e)
            }
            b(e).each(function (l) {
                var k;
                var m = b(this);
                if (j) {
                    g.container.prepend(m)
                } else {
                    g.container.append(m)
                }
                g.slideCount++;
                k = g.API.buildSlideOpts(m);
                if (j) {
                    g.slides = b(m).add(g.slides)
                } else {
                    g.slides = g.slides.add(m)
                }
                g.API.initSlide(k, m, --g._maxZ);
                m.data("cycle.opts", k);
                g.API.trigger("cycle-slide-added", [g, k, m])
            });
            g.API.updateView(true);
            f = g._preInitialized && d < 2 && g.slideCount >= 1;
            if (f) {
                if (!g._initialized) {
                    g.API.initSlideshow()
                } else {
                    if (g.timeout) {
                        h = g.slides.length;
                        g.nextSlide = g.reverse ? h - 1 : 1;
                        if (!g.timeoutId) {
                            g.API.queueTransition(g)
                        }
                    }
                }
            }
        },
        calcFirstSlide: function () {
            var f = this.opts();
            var d;
            d = parseInt(f.startingSlide || 0, 10);
            if (d >= f.slides.length || d < 0) {
                d = 0
            }
            f.currSlide = d;
            if (f.reverse) {
                f.nextSlide = d - 1;
                if (f.nextSlide < 0) {
                    f.nextSlide = f.slides.length - 1
                }
            } else {
                f.nextSlide = d + 1;
                if (f.nextSlide == f.slides.length) {
                    f.nextSlide = 0
                }
            }
        },
        calcNextSlide: function () {
            var f = this.opts();
            var d;
            if (f.reverse) {
                d = f.nextSlide - 1 < 0;
                f.nextSlide = d ? f.slideCount - 1 : f.nextSlide - 1;
                f.currSlide = d ? 0 : f.nextSlide + 1
            } else {
                d = f.nextSlide + 1 == f.slides.length;
                f.nextSlide = d ? 0 : f.nextSlide + 1;
                f.currSlide = d ? f.slides.length - 1 : f.nextSlide - 1
            }
        },
        calcTx: function (e, g) {
            var f = e;
            var d;
            if (f._tempFx) {
                d = b.fn.cycle.transitions[f._tempFx]
            } else {
                if (g && f.manualFx) {
                    d = b.fn.cycle.transitions[f.manualFx]
                }
            }
            if (!d) {
                d = b.fn.cycle.transitions[f.fx]
            }
            f._tempFx = null;
            this.opts()._tempFx = null;
            if (!d) {
                d = b.fn.cycle.transitions.fade;
                f.API.log('Transition "' + f.fx + '" not found.  Using fade.')
            }
            return d
        },
        prepareTx: function (k, g) {
            var m = this.opts();
            var j, f, h, l, d;
            if (m.slideCount < 2) {
                m.timeoutId = 0;
                return
            }
            if (k && (!m.busy || m.manualTrump)) {
                m.API.stopTransition();
                m.busy = false;
                clearTimeout(m.timeoutId);
                m.timeoutId = 0
            }
            if (m.busy) {
                return
            }
            if (m.timeoutId === 0 && !k) {
                return
            }
            f = m.slides[m.currSlide];
            h = m.slides[m.nextSlide];
            l = m.API.getSlideOpts(m.nextSlide);
            d = m.API.calcTx(l, k);
            m._tx = d;
            if (k && l.manualSpeed !== undefined) {
                l.speed = l.manualSpeed
            }
            if (m.nextSlide != m.currSlide && (k || !m.paused && !m.hoverPaused && m.timeout)) {
                m.API.trigger("cycle-before", [l, f, h, g]);
                if (d.before) {
                    d.before(l, f, h, g)
                }
                j = function () {
                    m.busy = false;
                    if (!m.container.data("cycle.opts")) {
                        return
                    }
                    if (d.after) {
                        d.after(l, f, h, g)
                    }
                    m.API.trigger("cycle-after", [l, f, h, g]);
                    m.API.queueTransition(l);
                    m.API.updateView(true)
                };
                m.busy = true;
                if (d.transition) {
                    d.transition(l, f, h, g, j)
                } else {
                    m.API.doTransition(l, f, h, g, j)
                }
                m.API.calcNextSlide();
                m.API.updateView()
            } else {
                m.API.queueTransition(l)
            }
        },
        doTransition: function (m, g, d, h, p) {
            var e = m;
            var l = b(g),
                k = b(d);
            var j = function () {
                k.animate(e.animIn || {
                    opacity: 1
                }, e.speed, e.easeIn || e.easing, p)
            };
            k.css(e.cssBefore || {});
            l.animate(e.animOut || {}, e.speed, e.easeOut || e.easing, function () {
                l.css(e.cssAfter || {});
                if (!e.sync) {
                    j()
                }
            });
            if (e.sync) {
                j()
            }
        },
        queueTransition: function (e, g) {
            var f = this.opts();
            var d = g !== undefined ? g : e.timeout;
            if (f.nextSlide === 0 && --f.loop === 0) {
                f.API.log("terminating; loop=0");
                f.timeout = 0;
                if (d) {
                    setTimeout(function () {
                        f.API.trigger("cycle-finished", [f])
                    }, d)
                } else {
                    f.API.trigger("cycle-finished", [f])
                }
                f.nextSlide = f.currSlide;
                return
            }
            if (f.continueAuto !== undefined) {
                if (f.continueAuto === false || b.isFunction(f.continueAuto) && f.continueAuto() === false) {
                    f.API.log("terminating automatic transitions");
                    f.timeout = 0;
                    if (f.timeoutId) {
                        clearTimeout(f.timeoutId)
                    }
                    return
                }
            }
            if (d) {
                f._lastQueue = b.now();
                if (g === undefined) {
                    f._remainingTimeout = e.timeout
                }
                if (!f.paused && !f.hoverPaused) {
                    f.timeoutId = setTimeout(function () {
                        f.API.prepareTx(false, !f.reverse)
                    }, d)
                }
            }
        },
        stopTransition: function () {
            var d = this.opts();
            if (d.slides.filter(":animated").length) {
                d.slides.stop(false, true);
                d.API.trigger("cycle-transition-stopped", [d])
            }
            if (d._tx && d._tx.stopTransition) {
                d._tx.stopTransition(d)
            }
        },
        advanceSlide: function (f) {
            var d = this.opts();
            clearTimeout(d.timeoutId);
            d.timeoutId = 0;
            d.nextSlide = d.currSlide + f;
            if (d.nextSlide < 0) {
                d.nextSlide = d.slides.length - 1
            } else {
                if (d.nextSlide >= d.slides.length) {
                    d.nextSlide = 0
                }
            }
            d.API.prepareTx(true, f >= 0);
            return false
        },
        buildSlideOpts: function (g) {
            var j = this.opts();
            var f, h;
            var k = g.data() || {};
            for (var e in k) {
                if (k.hasOwnProperty(e) && /^cycle[A-Z]+/.test(e)) {
                    f = k[e];
                    h = e.match(/^cycle(.*)/)[1].replace(/^[A-Z]/, c);
                    j.API.log("[" + (j.slideCount - 1) + "]", h + ":", f, "(" + typeof f + ")");
                    k[h] = f
                }
            }
            k = b.extend({}, b.fn.cycle.defaults, j, k);
            k.slideNum = j.slideCount;
            try {
                delete k.API;
                delete k.slideCount;
                delete k.currSlide;
                delete k.nextSlide;
                delete k.slides
            } catch (d) { }
            return k
        },
        getSlideOpts: function (e) {
            var g = this.opts();
            if (e === undefined) {
                e = g.currSlide
            }
            var f = g.slides[e];
            var d = b(f).data("cycle.opts");
            return b.extend({}, g, d)
        },
        initSlide: function (e, g, f) {
            var d = this.opts();
            g.css(e.slideCss || {});
            if (f > 0) {
                g.css("zIndex", f)
            }
            if (isNaN(e.speed)) {
                e.speed = b.fx.speeds[e.speed] || b.fx.speeds._default
            }
            if (!e.sync) {
                e.speed = e.speed / 2
            }
            g.addClass(d.slideClass)
        },
        updateView: function (j, f, k) {
            var h = this.opts();
            if (!h._initialized) {
                return
            }
            var d = h.API.getSlideOpts();
            var g = h.slides[h.currSlide];
            if (!j && f !== true) {
                h.API.trigger("cycle-update-view-before", [h, d, g]);
                if (h.updateView < 0) {
                    return
                }
            }
            if (h.slideActiveClass) {
                h.slides.removeClass(h.slideActiveClass).eq(h.currSlide).addClass(h.slideActiveClass)
            }
            if (j && h.hideNonActive) {
                h.slides.filter(":not(." + h.slideActiveClass + ")").css("visibility", "hidden")
            }
            if (h.updateView === 0) {
                setTimeout(function () {
                    h.API.trigger("cycle-update-view", [h, d, g, j])
                }, d.speed / (h.sync ? 2 : 1))
            }
            if (h.updateView !== 0) {
                h.API.trigger("cycle-update-view", [h, d, g, j])
            }
            if (j) {
                h.API.trigger("cycle-update-view-after", [h, d, g])
            }
        },
        getComponent: function (d) {
            var f = this.opts();
            var e = f[d];
            if (typeof e === "string") {
                return /^\s*[\>|\+|~]/.test(e) ? f.container.find(e) : b(e)
            }
            if (e.jquery) {
                return e
            }
            return b(e)
        },
        stackSlides: function (f, k, h) {
            var e = this.opts();
            if (!f) {
                f = e.slides[e.currSlide];
                k = e.slides[e.nextSlide];
                h = !e.reverse
            }
            b(f).css("zIndex", e.maxZ);
            var g;
            var j = e.maxZ - 2;
            var d = e.slideCount;
            if (h) {
                for (g = e.currSlide + 1; g < d; g++) {
                    b(e.slides[g]).css("zIndex", j--)
                }
                for (g = 0; g < e.currSlide; g++) {
                    b(e.slides[g]).css("zIndex", j--)
                }
            } else {
                for (g = e.currSlide - 1; g >= 0; g--) {
                    b(e.slides[g]).css("zIndex", j--)
                }
                for (g = d - 1; g > e.currSlide; g--) {
                    b(e.slides[g]).css("zIndex", j--)
                }
            }
            b(k).css("zIndex", e.maxZ - 1)
        },
        getSlideIndex: function (d) {
            return this.opts().slides.index(d)
        }
    };
    b.fn.cycle.log = function () {
        if (window.console && console.log) {
            console.log("[cycle2] " + Array.prototype.join.call(arguments, " "))
        }
    };
    b.fn.cycle.version = function () {
        return "Cycle2: " + a
    };
    b.fn.cycle.transitions = {
        custom: {},
        none: {
            before: function (g, d, h, f) {
                g.API.stackSlides(h, d, f);
                g.cssBefore = {
                    opacity: 1,
                    visibility: "visible",
                    display: "block"
                }
            }
        },
        fade: {
            before: function (e, h, g, d) {
                var f = e.API.getSlideOpts(e.nextSlide).slideCss || {};
                e.API.stackSlides(h, g, d);
                e.cssBefore = b.extend(f, {
                    opacity: 0,
                    visibility: "visible",
                    display: "block"
                });
                e.animIn = {
                    opacity: 1
                };
                e.animOut = {
                    opacity: 0
                }
            }
        },
        fadeout: {
            before: function (e, h, g, d) {
                var f = e.API.getSlideOpts(e.nextSlide).slideCss || {};
                e.API.stackSlides(h, g, d);
                e.cssBefore = b.extend(f, {
                    opacity: 1,
                    visibility: "visible",
                    display: "block"
                });
                e.animOut = {
                    opacity: 0
                }
            }
        },
        scrollHorz: {
            before: function (h, f, j, g) {
                h.API.stackSlides(f, j, g);
                var d = h.container.css("overflow", "hidden").width();
                h.cssBefore = {
                    left: g ? d : -d,
                    top: 0,
                    opacity: 1,
                    visibility: "visible",
                    display: "block"
                };
                h.cssAfter = {
                    zIndex: h._maxZ - 2,
                    left: 0
                };
                h.animIn = {
                    left: 0
                };
                h.animOut = {
                    left: g ? -d : d
                }
            }
        }
    };
    b.fn.cycle.defaults = {
        allowWrap: true,
        autoSelector: ".cycle-slideshow[data-cycle-auto-init!=false]",
        delay: 0,
        easing: null,
        fx: "fade",
        hideNonActive: true,
        loop: 0,
        manualFx: undefined,
        manualSpeed: undefined,
        manualTrump: true,
        maxZ: 100,
        pauseOnHover: false,
        reverse: false,
        slideActiveClass: "cycle-slide-active",
        slideClass: "cycle-slide",
        slideCss: {
            position: "absolute",
            top: 0,
            left: 0
        },
        slides: "> img",
        speed: 500,
        startingSlide: 0,
        sync: true,
        timeout: 4000,
        updateView: 0
    };
    b(document).ready(function () {
        b(b.fn.cycle.defaults.autoSelector).cycle()
    })
})(jQuery);
(function (d) {
    function b(h, k) {
        var g, j, l;
        var e = k.autoHeight;
        if (e == "container") {
            j = d(k.slides[k.currSlide]).outerHeight();
            k.container.height(j)
        } else {
            if (k._autoHeightRatio) {
                k.container.height(k.container.width() / k._autoHeightRatio)
            } else {
                if (e === "calc" || d.type(e) == "number" && e >= 0) {
                    if (e === "calc") {
                        l = f(h, k)
                    } else {
                        if (e >= k.slides.length) {
                            l = 0
                        } else {
                            l = e
                        }
                    }
                    if (l == k._sentinelIndex) {
                        return
                    }
                    k._sentinelIndex = l;
                    if (k._sentinel) {
                        k._sentinel.remove()
                    }
                    g = d(k.slides[l].cloneNode(true));
                    g.removeAttr("id name rel").find("[id],[name],[rel]").removeAttr("id name rel");
                    g.css({
                        position: "static",
                        visibility: "hidden",
                        display: "block"
                    }).prependTo(k.container).addClass("cycle-sentinel cycle-slide").removeClass("cycle-slide-active");
                    g.find("*").css("visibility", "hidden");
                    k._sentinel = g
                }
            }
        }
    }

    function f(g, j) {
        var h = 0,
            e = -1;
        j.slides.each(function (i) {
            var k = d(this).height();
            if (k > e) {
                e = k;
                h = i
            }
        });
        return h
    }

    function c(g, l, j, e, h) {
        var k = d(e).outerHeight();
        l.container.animate({
            height: k
        }, l.autoHeightSpeed, l.autoHeightEasing)
    }

    function a(g, e) {
        if (e._autoHeightOnResize) {
            d(window).off("resize orientationchange", e._autoHeightOnResize);
            e._autoHeightOnResize = null
        }
        e.container.off("cycle-slide-added cycle-slide-removed", b);
        e.container.off("cycle-destroyed", a);
        e.container.off("cycle-before", c);
        if (e._sentinel) {
            e._sentinel.remove();
            e._sentinel = null
        }
    }
    d.extend(d.fn.cycle.defaults, {
        autoHeight: 0,
        autoHeightSpeed: 250,
        autoHeightEasing: null
    });
    d(document).on("cycle-initialized", function (m, i) {
        function g() {
            b(m, i)
        }
        var k = i.autoHeight;
        var h = d.type(k);
        var e = null;
        var j;
        if (h !== "string" && h !== "number") {
            return
        }
        i.container.on("cycle-slide-added cycle-slide-removed", b);
        i.container.on("cycle-destroyed", a);
        if (k == "container") {
            i.container.on("cycle-before", c)
        } else {
            if (h === "string" && /\d+\:\d+/.test(k)) {
                j = k.match(/(\d+)\:(\d+)/);
                j = j[1] / j[2];
                i._autoHeightRatio = j
            }
        }
        if (h !== "number") {
            i._autoHeightOnResize = function () {
                clearTimeout(e);
                e = setTimeout(g, 50)
            };
            d(window).on("resize orientationchange", i._autoHeightOnResize)
        }
        setTimeout(g, 30)
    })
})(jQuery);
(function (a) {
    a.extend(a.fn.cycle.defaults, {
        caption: "> .cycle-caption",
        captionTemplate: "{{slideNum}} / {{slideCount}}",
        overlay: "> .cycle-overlay",
        overlayTemplate: "<div>{{title}}</div><div>{{desc}}</div>",
        captionModule: "caption"
    });
    a(document).on("cycle-update-view", function (c, f, e, b) {
        if (f.captionModule !== "caption") {
            return
        }
        var d;
        a.each(["caption", "overlay"], function () {
            var i = this;
            var g = e[i + "Template"];
            var h = f.API.getComponent(i);
            if (h.length && g) {
                h.html(f.API.tmpl(g, e, f, b));
                h.show()
            } else {
                h.hide()
            }
        })
    });
    a(document).on("cycle-destroyed", function (b, d) {
        var c;
        a.each(["caption", "overlay"], function () {
            var g = this,
                f = d[g + "Template"];
            if (d[g] && f) {
                c = d.API.getComponent("caption");
                c.empty()
            }
        })
    })
})(jQuery);
(function (b) {
    var a = b.fn.cycle;
    b.fn.cycle = function (g) {
        var e, c, d;
        var f = b.makeArray(arguments);
        if (b.type(g) == "number") {
            return this.cycle("goto", g)
        }
        if (b.type(g) == "string") {
            return this.each(function () {
                var h;
                e = g;
                d = b(this).data("cycle.opts");
                if (d === undefined) {
                    a.log('slideshow must be initialized before sending commands; "' + e + '" ignored');
                    return
                } else {
                    e = e == "goto" ? "jump" : e;
                    c = d.API[e];
                    if (b.isFunction(c)) {
                        h = b.makeArray(f);
                        h.shift();
                        return c.apply(d.API, h)
                    } else {
                        a.log("unknown command: ", e)
                    }
                }
            })
        } else {
            return a.apply(this, arguments)
        }
    };
    b.extend(b.fn.cycle, a);
    b.extend(a.API, {
        next: function () {
            var d = this.opts();
            if (d.busy && !d.manualTrump) {
                return
            }
            var c = d.reverse ? -1 : 1;
            if (d.allowWrap === false && d.currSlide + c >= d.slideCount) {
                return
            }
            d.API.advanceSlide(c);
            d.API.trigger("cycle-next", [d]).log("cycle-next")
        },
        prev: function () {
            var d = this.opts();
            if (d.busy && !d.manualTrump) {
                return
            }
            var c = d.reverse ? 1 : -1;
            if (d.allowWrap === false && d.currSlide + c < 0) {
                return
            }
            d.API.advanceSlide(c);
            d.API.trigger("cycle-prev", [d]).log("cycle-prev")
        },
        destroy: function () {
            this.stop();
            var c = this.opts();
            var d = b.isFunction(b._data) ? b._data : b.noop;
            clearTimeout(c.timeoutId);
            c.timeoutId = 0;
            c.API.stop();
            c.API.trigger("cycle-destroyed", [c]).log("cycle-destroyed");
            c.container.removeData();
            d(c.container[0], "parsedAttrs", false);
            if (!c.retainStylesOnDestroy) {
                c.container.removeAttr("style");
                c.slides.removeAttr("style");
                c.slides.removeClass(c.slideActiveClass)
            }
            c.slides.each(function () {
                var e = b(this);
                e.removeData();
                e.removeClass(c.slideClass);
                d(this, "parsedAttrs", false)
            })
        },
        jump: function (g, d) {
            var h;
            var f = this.opts();
            if (f.busy && !f.manualTrump) {
                return
            }
            var c = parseInt(g, 10);
            if (isNaN(c) || c < 0 || c >= f.slides.length) {
                f.API.log("goto: invalid slide index: " + c);
                return
            }
            if (c == f.currSlide) {
                f.API.log("goto: skipping, already on slide", c);
                return
            }
            f.nextSlide = c;
            clearTimeout(f.timeoutId);
            f.timeoutId = 0;
            f.API.log("goto: ", c, " (zero-index)");
            h = f.currSlide < f.nextSlide;
            f._tempFx = d;
            f.API.prepareTx(true, h)
        },
        stop: function () {
            var c = this.opts();
            var d = c.container;
            clearTimeout(c.timeoutId);
            c.timeoutId = 0;
            c.API.stopTransition();
            if (c.pauseOnHover) {
                if (c.pauseOnHover !== true) {
                    d = b(c.pauseOnHover)
                }
                d.off("mouseenter mouseleave")
            }
            c.API.trigger("cycle-stopped", [c]).log("cycle-stopped")
        },
        reinit: function () {
            var c = this.opts();
            c.API.destroy();
            c.container.cycle()
        },
        remove: function (e) {
            var j = this.opts();
            var g, d, f = [],
                h = 1;
            for (var c = 0; c < j.slides.length; c++) {
                g = j.slides[c];
                if (c == e) {
                    d = g
                } else {
                    f.push(g);
                    b(g).data("cycle.opts").slideNum = h;
                    h++
                }
            }
            if (d) {
                j.slides = b(f);
                j.slideCount--;
                b(d).remove();
                if (e == j.currSlide) {
                    j.API.advanceSlide(1)
                } else {
                    if (e < j.currSlide) {
                        j.currSlide--
                    } else {
                        j.currSlide++
                    }
                }
                j.API.trigger("cycle-slide-removed", [j, e, d]).log("cycle-slide-removed");
                j.API.updateView()
            }
        }
    });
    b(document).on("click.cycle", "[data-cycle-cmd]", function (d) {
        d.preventDefault();
        var f = b(this);
        var e = f.data("cycle-cmd");
        var c = f.data("cycle-context") || ".cycle-slideshow";
        b(c).cycle(e, f.data("cycle-arg"))
    })
})(jQuery);
(function (b) {
    function a(c, e) {
        var d;
        if (c._hashFence) {
            c._hashFence = false;
            return
        }
        d = window.location.hash.substring(1);
        c.slides.each(function (f) {
            if (b(this).data("cycle-hash") == d) {
                if (e === true) {
                    c.startingSlide = f
                } else {
                    var g = c.currSlide < f;
                    c.nextSlide = f;
                    c.API.prepareTx(true, g)
                }
                return false
            }
        })
    }
    b(document).on("cycle-pre-initialize", function (d, c) {
        a(c, true);
        c._onHashChange = function () {
            a(c, false)
        };
        b(window).on("hashchange", c._onHashChange)
    });
    b(document).on("cycle-update-view", function (d, c, f) {
        if (f.hash && "#" + f.hash != window.location.hash) {
            c._hashFence = true;
            window.location.hash = f.hash
        }
    });
    b(document).on("cycle-destroyed", function (c, d) {
        if (d._onHashChange) {
            b(window).off("hashchange", d._onHashChange)
        }
    })
})(jQuery);
(function (a) {
    a.extend(a.fn.cycle.defaults, {
        loader: false
    });
    a(document).on("cycle-bootstrap", function (c, e) {
        function b(k, j) {
            function g(f) {
                var i;
                if (e.loader == "wait") {
                    l.push(f);
                    if (h === 0) {
                        l.sort(m);
                        d.apply(e.API, [l, j]);
                        e.container.removeClass("cycle-loading")
                    }
                } else {
                    i = a(e.slides[e.currSlide]);
                    d.apply(e.API, [f, j]);
                    i.show();
                    e.container.removeClass("cycle-loading")
                }
            }

            function m(i, f) {
                return i.data("index") - f.data("index")
            }
            var l = [];
            if (a.type(k) == "string") {
                k = a.trim(k)
            } else {
                if (a.type(k) === "array") {
                    for (var n = 0; n < k.length; n++) {
                        k[n] = a(k[n])[0]
                    }
                }
            }
            k = a(k);
            var h = k.length;
            if (!h) {
                return
            }
            k.css("visibility", "hidden").appendTo("body").each(function (p) {
                function s() {
                    if (--r === 0) {
                        --h;
                        g(q)
                    }
                }
                var r = 0;
                var q = a(this);
                var i = q.is("img") ? q : q.find("img");
                q.data("index", p);
                i = i.filter(":not(.cycle-loader-ignore)").filter(':not([src=""])');
                if (!i.length) {
                    --h;
                    l.push(q);
                    return
                }
                r = i.length;
                i.each(function () {
                    if (this.complete) {
                        s()
                    } else {
                        a(this).load(function () {
                            s()
                        }).on("error", function () {
                            if (--r === 0) {
                                e.API.log("slide skipped; img not loaded:", this.src);
                                if (--h === 0 && e.loader == "wait") {
                                    d.apply(e.API, [l, j])
                                }
                            }
                        })
                    }
                })
            });
            if (h) {
                e.container.addClass("cycle-loading")
            }
        }
        var d;
        if (!e.loader) {
            return
        }
        d = e.API.add;
        e.API.add = b
    })
})(jQuery);
(function (b) {
    function a(e, h, g) {
        var d;
        var f = e.API.getComponent("pager");
        f.each(function () {
            var i = b(this);
            if (h.pagerTemplate) {
                var j = e.API.tmpl(h.pagerTemplate, h, e, g[0]);
                d = b(j).appendTo(i)
            } else {
                d = i.children().eq(e.slideCount - 1)
            }
            d.on(e.pagerEvent, function (k) {
                if (!e.pagerEventBubble) {
                    k.preventDefault()
                }
                e.API.page(i, k.currentTarget)
            })
        })
    }

    function c(j, f) {
        var k = this.opts();
        if (k.busy && !k.manualTrump) {
            return
        }
        var h = j.children().index(f);
        var d = h;
        var g = k.currSlide < d;
        if (k.currSlide == d) {
            return
        }
        k.nextSlide = d;
        k._tempFx = k.pagerFx;
        k.API.prepareTx(true, g);
        k.API.trigger("cycle-pager-activated", [k, j, f])
    }
    b.extend(b.fn.cycle.defaults, {
        pager: "> .cycle-pager",
        pagerActiveClass: "cycle-pager-active",
        pagerEvent: "click.cycle",
        pagerEventBubble: undefined,
        pagerTemplate: "<span>&bull;</span>"
    });
    b(document).on("cycle-bootstrap", function (f, g, d) {
        d.buildPagerLink = a
    });
    b(document).on("cycle-slide-added", function (h, f, g, d) {
        if (f.pager) {
            f.API.buildPagerLink(f, g, d);
            f.API.page = c
        }
    });
    b(document).on("cycle-slide-removed", function (e, h, g, d) {
        if (h.pager) {
            var f = h.API.getComponent("pager");
            f.each(function () {
                var i = b(this);
                b(i.children()[g]).remove()
            })
        }
    });
    b(document).on("cycle-update-view", function (e, g, f) {
        var d;
        if (g.pager) {
            d = g.API.getComponent("pager");
            d.each(function () {
                b(this).children().removeClass(g.pagerActiveClass).eq(g.currSlide).addClass(g.pagerActiveClass)
            })
        }
    });
    b(document).on("cycle-destroyed", function (f, d) {
        var g = d.API.getComponent("pager");
        if (g) {
            g.children().off(d.pagerEvent);
            if (d.pagerTemplate) {
                g.empty()
            }
        }
    })
})(jQuery);
(function (a) {
    a.extend(a.fn.cycle.defaults, {
        next: "> .cycle-next",
        nextEvent: "click.cycle",
        disabledClass: "disabled",
        prev: "> .cycle-prev",
        prevEvent: "click.cycle",
        swipe: false
    });
    a(document).on("cycle-initialized", function (d, b) {
        b.API.getComponent("next").on(b.nextEvent, function (g) {
            g.preventDefault();
            b.API.next()
        });
        b.API.getComponent("prev").on(b.prevEvent, function (g) {
            g.preventDefault();
            b.API.prev()
        });
        if (b.swipe) {
            var f = b.swipeVert ? "swipeUp.cycle" : "swipeLeft.cycle swipeleft.cycle";
            var c = b.swipeVert ? "swipeDown.cycle" : "swipeRight.cycle swiperight.cycle";
            b.container.on(f, function (g) {
                b._tempFx = b.swipeFx;
                b.API.next()
            });
            b.container.on(c, function () {
                b._tempFx = b.swipeFx;
                b.API.prev()
            })
        }
    });
    a(document).on("cycle-update-view", function (g, k, d, b) {
        if (k.allowWrap) {
            return
        }
        var f = k.disabledClass;
        var l = k.API.getComponent("next");
        var c = k.API.getComponent("prev");
        var j = k._prevBoundry || 0;
        var h = k._nextBoundry !== undefined ? k._nextBoundry : k.slideCount - 1;
        if (k.currSlide == h) {
            l.addClass(f).prop("disabled", true)
        } else {
            l.removeClass(f).prop("disabled", false)
        }
        if (k.currSlide === j) {
            c.addClass(f).prop("disabled", true)
        } else {
            c.removeClass(f).prop("disabled", false)
        }
    });
    a(document).on("cycle-destroyed", function (c, b) {
        b.API.getComponent("prev").off(b.nextEvent);
        b.API.getComponent("next").off(b.prevEvent);
        b.container.off("swipeleft.cycle swiperight.cycle swipeLeft.cycle swipeRight.cycle swipeUp.cycle swipeDown.cycle")
    })
})(jQuery);
(function (a) {
    a.extend(a.fn.cycle.defaults, {
        progressive: false
    });
    a(document).on("cycle-pre-initialize", function (m, d) {
        if (!d.progressive) {
            return
        }
        var b = d.API;
        var g = b.next;
        var p = b.prev;
        var c = b.prepareTx;
        var k = a.type(d.progressive);
        var j, h;
        if (k == "array") {
            j = d.progressive
        } else {
            if (a.isFunction(d.progressive)) {
                j = d.progressive(d)
            } else {
                if (k == "string") {
                    h = a(d.progressive);
                    j = a.trim(h.html());
                    if (!j) {
                        return
                    }
                    if (/^(\[)/.test(j)) {
                        try {
                            j = a.parseJSON(j)
                        } catch (e) {
                            b.log("error parsing progressive slides", e);
                            return
                        }
                    } else {
                        j = j.split(new RegExp(h.data("cycle-split") || "\n"));
                        if (!j[j.length - 1]) {
                            j.pop()
                        }
                    }
                }
            }
        }
        if (c) {
            b.prepareTx = function (o, l) {
                var n, f;
                if (o || j.length === 0) {
                    c.apply(d.API, [o, l]);
                    return
                }
                if (l && d.currSlide == d.slideCount - 1) {
                    f = j[0];
                    j = j.slice(1);
                    d.container.one("cycle-slide-added", function (q, i) {
                        setTimeout(function () {
                            i.API.advanceSlide(1)
                        }, 50)
                    });
                    d.API.add(f)
                } else {
                    if (!l && d.currSlide === 0) {
                        n = j.length - 1;
                        f = j[n];
                        j = j.slice(0, n);
                        d.container.one("cycle-slide-added", function (q, i) {
                            setTimeout(function () {
                                i.currSlide = 1;
                                i.API.advanceSlide(-1)
                            }, 50)
                        });
                        d.API.add(f, true)
                    } else {
                        c.apply(d.API, [o, l])
                    }
                }
            }
        }
        if (g) {
            b.next = function () {
                var i = this.opts();
                if (j.length && i.currSlide == i.slideCount - 1) {
                    var f = j[0];
                    j = j.slice(1);
                    i.container.one("cycle-slide-added", function (n, l) {
                        g.apply(l.API);
                        l.container.removeClass("cycle-loading")
                    });
                    i.container.addClass("cycle-loading");
                    i.API.add(f)
                } else {
                    g.apply(i.API)
                }
            }
        }
        if (p) {
            b.prev = function () {
                var i = this.opts();
                if (j.length && i.currSlide === 0) {
                    var f = j.length - 1;
                    var l = j[f];
                    j = j.slice(0, f);
                    i.container.one("cycle-slide-added", function (o, n) {
                        n.currSlide = 1;
                        n.API.advanceSlide(-1);
                        n.container.removeClass("cycle-loading")
                    });
                    i.container.addClass("cycle-loading");
                    i.API.add(l, true)
                } else {
                    p.apply(i.API)
                }
            }
        }
    })
})(jQuery);
(function (a) {
    a.extend(a.fn.cycle.defaults, {
        tmplRegex: "{{((.)?.*?)}}"
    });
    a.extend(a.fn.cycle.API, {
        tmpl: function (c, e) {
            var d = new RegExp(e.tmplRegex || a.fn.cycle.defaults.tmplRegex, "g");
            var b = a.makeArray(arguments);
            b.shift();
            return c.replace(d, function (h, l) {
                var j, i, k, g, f = l.split(".");
                for (j = 0; j < b.length; j++) {
                    k = b[j];
                    if (!k) {
                        continue
                    }
                    if (f.length > 1) {
                        g = k;
                        for (i = 0; i < f.length; i++) {
                            k = g;
                            g = g[f[i]] || l
                        }
                    } else {
                        g = k[l]
                    }
                    if (a.isFunction(g)) {
                        return g.apply(k, b)
                    }
                    if (g !== undefined && g !== null && g != l) {
                        return g
                    }
                }
                return l
            })
        }
    })
})(jQuery);
$(function () {
    $("[data-tab]").click(function (a) {
        $(this).addClass("active").siblings("[data-tab]").removeClass("active").siblings("[data-content=" + $(this).data("tab") + "]").addClass("active").siblings("[data-content]").removeClass("active");
        a.preventDefault();
        $(".tabs>.content:not(.active)").find("input[type='text'],input[type='password'],input[type='email'], textarea").removeAttr("required");
        $(".tabs>.content.active").find("div[required], p[required]").find("input[type='text'],input[type='password'],input[type='email'], textarea").attr("required", "required")
    });

    $(window).on("hashchange", function () {
        var a = document.location.hash.substr(1);
        $('div.tabs > a[id^="' + a + '"]').click()
    });
    $(window).trigger("hashchange")
});
$(function () {
    $("input[type = 'radio']+span, input[type = 'checkbox']+span").click(function () {
        $(this).prev().click()
    })

    $("#formcontact").submit(function (a) {
        $("#formsubmit").attr("disabled", "disabled");
        $.ajax({
            type: "POST",
            url: "/contact_post",
            data: $(this).serialize(),
            success: function () {
                $("#body").prepend("<div id='successbox' class='success center-fix extremeTop transition box'><span>A message has been sent successfully</span></div>");
                $("#formcontact")[0].reset();
                $("#formsubmit").removeAttr("disabled");
                setTimeout(function () {
                    $("#successbox").hide()
                }, 2000)
            }
        });
        a.preventDefault();
    });
});
$(function () {
    $("#otherInputText").keyup(function () {
        $("#otherInput").val($("#otherInputText").val())
    })
});