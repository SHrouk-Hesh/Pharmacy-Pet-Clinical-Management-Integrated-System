

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
});
$(function () {
    $("#form").submit(function (a) {
        alert("");
        $("#formsubmit").attr("disabled", "disabled");
        $.ajax({
            type: "POST",
            url: "/contact_post",
            data: $(this).serialize(),
            success: function () {
                $("#body").prepend("<div id='successbox' class='success center-fix extremeTop transition box'><span>A message has been sent successfully</span></div>");
                $("#form")[0].reset();
                $("#formsubmit").removeAttr("disabled");
                setTimeout(function () {
                    $("#successbox").hide()
                }, 2000)
            }
        });
        a.preventDefault()
    })
});
$(function () {
    $("#otherInputText").keyup(function () {
        $("#otherInput").val($("#otherInputText").val())
    })
});

//function FileName() { return window.location.href.substr(window.location.href.lastIndexOf("/") + 1) } function strStartsWith(e, t) { return e.indexOf(t) === 0 } (function (e, t) { function n() { var e = v.elements; return "string" == typeof e ? e.split(" ") : e } function r(e) { var t = p[e[c]]; t || (t = {}, h++, e[c] = h, p[h] = t); return t } function i(e, n, i) { n || (n = t); if (d) return n.createElement(e); i || (i = r(n)); n = i.cache[e] ? i.cache[e].cloneNode() : f.test(e) ? (i.cache[e] = i.createElem(e)).cloneNode() : i.createElem(e); return n.canHaveChildren && !a.test(e) ? i.frag.appendChild(n) : n } function s(e, t) { if (!t.cache) t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag(); e.createElement = function (n) { return !v.shivMethods ? t.createElem(n) : i(n, e, t) }; e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + n().join().replace(/[\w\-]+/g, function (e) { t.createElem(e); t.frag.createElement(e); return 'c("' + e + '")' }) + ");return n}")(v, t.frag) } function o(e) { e || (e = t); var n = r(e); if (v.shivCSS && !l && !n.hasCSS) { var i, o = e; i = o.createElement("p"); o = o.getElementsByTagName("head")[0] || o.documentElement; i.innerHTML = "x<style>article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}</style>"; i = o.insertBefore(i.lastChild, o.firstChild); n.hasCSS = !!i } d || s(e, n); return e } var u = e.html5 || {}, a = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, l, c = "_html5shiv", h = 0, p = {}, d; (function () { try { var e = t.createElement("a"); e.innerHTML = "<xyz></xyz>"; l = "hidden" in e; var n; if (!(n = 1 == e.childNodes.length)) { t.createElement("a"); var r = t.createDocumentFragment(); n = "undefined" == typeof r.cloneNode || "undefined" == typeof r.createDocumentFragment || "undefined" == typeof r.createElement } d = n } catch (i) { d = l = !0 } })(); var v = { elements: u.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video", version: "3.7.0", shivCSS: !1 !== u.shivCSS, supportsUnknownElements: d, shivMethods: !1 !== u.shivMethods, type: "default", shivDocument: o, createElement: i, createDocumentFragment: function (e, i) { e || (e = t); if (d) return e.createDocumentFragment(); for (var i = i || r(e), s = i.frag.cloneNode(), o = 0, u = n(), a = u.length; o < a; o++) s.createElement(u[o]); return s } }; e.html5 = v; o(t) })(this, document); $("body").click(function () { if (strStartsWith(FileName(), "contact")) { $(".box").hide() } }); $(function () { var e = true; $(".topMenu").parent().on("click mouseenter", function () { e = false; $(".topMenu").show() }); $(".topMenu").parent().on("mouseleave", function () { e = true; setTimeout(function () { if (e) $(".topMenu").hide() }, 500) }) }); (function (e) { e.fn.menumaker = function (t) { var n = e(this), r = e.extend({ title: "Menu", format: "dropdown", sticky: false }, t); return this.each(function () { n.prepend('<div id="menu-button">' + r.title + "</div>"); e(this).find("#menu-button").on("click", function () { e(this).toggleClass("menu-opened"); var t = e(this).next("ul"); if (t.hasClass("open")) { t.hide().removeClass("open") } else { t.show().addClass("open"); if (r.format === "dropdown") { t.find("ul").show() } } }); n.find("li ul").parent().addClass("has-sub"); multiTg = function () { n.find(".has-sub").prepend('<span class="submenu-button"></span>'); n.find(".submenu-button").on("click", function () { e(this).toggleClass("submenu-opened"); if (e(this).siblings("ul").hasClass("open")) { e(this).siblings("ul").removeClass("open").hide() } else { e(this).siblings("ul").addClass("open").show() } }) }; if (r.format === "multitoggle") multiTg(); else n.addClass("dropdown"); if (r.sticky === true) n.css("position", "fixed"); resizeFix = function () { if (e(window).width() > 768) { n.find("ul").show() } if (e(window).width() <= 768) { n.find("ul").hide().removeClass("open") } }; resizeFix(); return e(window).on("resize", resizeFix) }) } })(jQuery); (function (e) { e(document).ready(function () { e(document).ready(function () { function f(e) { return e.replace(/\w\S*/g, function (e) { return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase() }) } e("#cssmenu").menumaker({ title: "Menu", format: "multitoggle" }); e("#cssmenu").prepend("<div id='menu-line'></div>"); var t = false, n, r = 0, i = e("#cssmenu #menu-line"), s, o, u; e("#cssmenu > ul > li").each(function () { if (e(this).hasClass("active")) { n = e(this); t = true } }); if (t === false) { n = e("#cssmenu > ul > li").first() } u = s = n.width(); o = r = n.position().left; i.css("width", s); i.css("left", r); e("#cssmenu > ul > li").hover(function () { n = e(this); s = n.width(); r = n.position().left; i.css("width", s); i.css("left", r) }, function () { i.css("left", o); i.css("width", u) }); var a = window.location.href.substr(window.location.href.lastIndexOf("/") + 1); e("#cssmenu").add(e(this).find("a")).find("[href='/" + a + "']").parents("#cssmenu > ul > li").addClass("active"); }) }) })(jQuery); (function (e) { "use strict"; function n(e) { return (e || "").toLowerCase() } var t = "2.1.6"; e.fn.cycle = function (t) { var r; if (this.length === 0 && !e.isReady) { r = { s: this.selector, c: this.context }; e.fn.cycle.log("requeuing slideshow (dom not ready)"); e(function () { e(r.s, r.c).cycle(t) }); return this } return this.each(function () { var r, i, s, o; var u = e(this); var a = e.fn.cycle.log; if (u.data("cycle.opts")) return; if (u.data("cycle-log") === false || t && t.log === false || i && i.log === false) { a = e.noop } a("--c2 init--"); r = u.data(); for (var f in r) { if (r.hasOwnProperty(f) && /^cycle[A-Z]+/.test(f)) { o = r[f]; s = f.match(/^cycle(.*)/)[1].replace(/^[A-Z]/, n); a(s + ":", o, "(" + typeof o + ")"); r[s] = o } } i = e.extend({}, e.fn.cycle.defaults, r, t || {}); i.timeoutId = 0; i.paused = i.paused || false; i.container = u; i._maxZ = i.maxZ; i.API = e.extend({ _container: u }, e.fn.cycle.API); i.API.log = a; i.API.trigger = function (e, t) { i.container.trigger(e, t); return i.API }; u.data("cycle.opts", i); u.data("cycle.API", i.API); i.API.trigger("cycle-bootstrap", [i, i.API]); i.API.addInitialSlides(); i.API.preInitSlideshow(); if (i.slides.length) i.API.initSlideshow() }) }; e.fn.cycle.API = { opts: function () { return this._container.data("cycle.opts") }, addInitialSlides: function () { var t = this.opts(); var n = t.slides; t.slideCount = 0; t.slides = e(); n = n.jquery ? n : t.container.find(n); if (t.random) { n.sort(function () { return Math.random() - .5 }) } t.API.add(n) }, preInitSlideshow: function () { var t = this.opts(); t.API.trigger("cycle-pre-initialize", [t]); var n = e.fn.cycle.transitions[t.fx]; if (n && e.isFunction(n.preInit)) n.preInit(t); t._preInitialized = true }, postInitSlideshow: function () { var t = this.opts(); t.API.trigger("cycle-post-initialize", [t]); var n = e.fn.cycle.transitions[t.fx]; if (n && e.isFunction(n.postInit)) n.postInit(t) }, initSlideshow: function () { var t = this.opts(); var n = t.container; var r; t.API.calcFirstSlide(); if (t.container.css("position") == "static") t.container.css("position", "relative"); e(t.slides[t.currSlide]).css({ opacity: 1, display: "block", visibility: "visible" }); t.API.stackSlides(t.slides[t.currSlide], t.slides[t.nextSlide], !t.reverse); if (t.pauseOnHover) { if (t.pauseOnHover !== true) n = e(t.pauseOnHover); n.hover(function () { t.API.pause(true) }, function () { t.API.resume(true) }) } if (t.timeout) { r = t.API.getSlideOpts(t.currSlide); t.API.queueTransition(r, r.timeout + t.delay) } t._initialized = true; t.API.updateView(true); t.API.trigger("cycle-initialized", [t]); t.API.postInitSlideshow() }, pause: function (t) { var n = this.opts(), r = n.API.getSlideOpts(), i = n.hoverPaused || n.paused; if (t) n.hoverPaused = true; else n.paused = true; if (!i) { n.container.addClass("cycle-paused"); n.API.trigger("cycle-paused", [n]).log("cycle-paused"); if (r.timeout) { clearTimeout(n.timeoutId); n.timeoutId = 0; n._remainingTimeout -= e.now() - n._lastQueue; if (n._remainingTimeout < 0 || isNaN(n._remainingTimeout)) n._remainingTimeout = undefined } } }, resume: function (e) { var t = this.opts(), n = !t.hoverPaused && !t.paused, r; if (e) t.hoverPaused = false; else t.paused = false; if (!n) { t.container.removeClass("cycle-paused"); if (t.slides.filter(":animated").length === 0) t.API.queueTransition(t.API.getSlideOpts(), t._remainingTimeout); t.API.trigger("cycle-resumed", [t, t._remainingTimeout]).log("cycle-resumed") } }, add: function (t, n) { var r = this.opts(); var i = r.slideCount; var s = false; var o; if (e.type(t) == "string") t = e.trim(t); e(t).each(function (t) { var i; var s = e(this); if (n) r.container.prepend(s); else r.container.append(s); r.slideCount++; i = r.API.buildSlideOpts(s); if (n) r.slides = e(s).add(r.slides); else r.slides = r.slides.add(s); r.API.initSlide(i, s, --r._maxZ); s.data("cycle.opts", i); r.API.trigger("cycle-slide-added", [r, i, s]) }); r.API.updateView(true); s = r._preInitialized && i < 2 && r.slideCount >= 1; if (s) { if (!r._initialized) r.API.initSlideshow(); else if (r.timeout) { o = r.slides.length; r.nextSlide = r.reverse ? o - 1 : 1; if (!r.timeoutId) { r.API.queueTransition(r) } } } }, calcFirstSlide: function () { var e = this.opts(); var t; t = parseInt(e.startingSlide || 0, 10); if (t >= e.slides.length || t < 0) t = 0; e.currSlide = t; if (e.reverse) { e.nextSlide = t - 1; if (e.nextSlide < 0) e.nextSlide = e.slides.length - 1 } else { e.nextSlide = t + 1; if (e.nextSlide == e.slides.length) e.nextSlide = 0 } }, calcNextSlide: function () { var e = this.opts(); var t; if (e.reverse) { t = e.nextSlide - 1 < 0; e.nextSlide = t ? e.slideCount - 1 : e.nextSlide - 1; e.currSlide = t ? 0 : e.nextSlide + 1 } else { t = e.nextSlide + 1 == e.slides.length; e.nextSlide = t ? 0 : e.nextSlide + 1; e.currSlide = t ? e.slides.length - 1 : e.nextSlide - 1 } }, calcTx: function (t, n) { var r = t; var i; if (r._tempFx) i = e.fn.cycle.transitions[r._tempFx]; else if (n && r.manualFx) i = e.fn.cycle.transitions[r.manualFx]; if (!i) i = e.fn.cycle.transitions[r.fx]; r._tempFx = null; this.opts()._tempFx = null; if (!i) { i = e.fn.cycle.transitions.fade; r.API.log('Transition "' + r.fx + '" not found.  Using fade.') } return i }, prepareTx: function (e, t) { var n = this.opts(); var r, i, s, o, u; if (n.slideCount < 2) { n.timeoutId = 0; return } if (e && (!n.busy || n.manualTrump)) { n.API.stopTransition(); n.busy = false; clearTimeout(n.timeoutId); n.timeoutId = 0 } if (n.busy) return; if (n.timeoutId === 0 && !e) return; i = n.slides[n.currSlide]; s = n.slides[n.nextSlide]; o = n.API.getSlideOpts(n.nextSlide); u = n.API.calcTx(o, e); n._tx = u; if (e && o.manualSpeed !== undefined) o.speed = o.manualSpeed; if (n.nextSlide != n.currSlide && (e || !n.paused && !n.hoverPaused && n.timeout)) { n.API.trigger("cycle-before", [o, i, s, t]); if (u.before) u.before(o, i, s, t); r = function () { n.busy = false; if (!n.container.data("cycle.opts")) return; if (u.after) u.after(o, i, s, t); n.API.trigger("cycle-after", [o, i, s, t]); n.API.queueTransition(o); n.API.updateView(true) }; n.busy = true; if (u.transition) u.transition(o, i, s, t, r); else n.API.doTransition(o, i, s, t, r); n.API.calcNextSlide(); n.API.updateView() } else { n.API.queueTransition(o) } }, doTransition: function (t, n, r, i, s) { var o = t; var u = e(n), a = e(r); var f = function () { a.animate(o.animIn || { opacity: 1 }, o.speed, o.easeIn || o.easing, s) }; a.css(o.cssBefore || {}); u.animate(o.animOut || {}, o.speed, o.easeOut || o.easing, function () { u.css(o.cssAfter || {}); if (!o.sync) { f() } }); if (o.sync) { f() } }, queueTransition: function (t, n) { var r = this.opts(); var i = n !== undefined ? n : t.timeout; if (r.nextSlide === 0 && --r.loop === 0) { r.API.log("terminating; loop=0"); r.timeout = 0; if (i) { setTimeout(function () { r.API.trigger("cycle-finished", [r]) }, i) } else { r.API.trigger("cycle-finished", [r]) } r.nextSlide = r.currSlide; return } if (r.continueAuto !== undefined) { if (r.continueAuto === false || e.isFunction(r.continueAuto) && r.continueAuto() === false) { r.API.log("terminating automatic transitions"); r.timeout = 0; if (r.timeoutId) clearTimeout(r.timeoutId); return } } if (i) { r._lastQueue = e.now(); if (n === undefined) r._remainingTimeout = t.timeout; if (!r.paused && !r.hoverPaused) { r.timeoutId = setTimeout(function () { r.API.prepareTx(false, !r.reverse) }, i) } } }, stopTransition: function () { var e = this.opts(); if (e.slides.filter(":animated").length) { e.slides.stop(false, true); e.API.trigger("cycle-transition-stopped", [e]) } if (e._tx && e._tx.stopTransition) e._tx.stopTransition(e) }, advanceSlide: function (e) { var t = this.opts(); clearTimeout(t.timeoutId); t.timeoutId = 0; t.nextSlide = t.currSlide + e; if (t.nextSlide < 0) t.nextSlide = t.slides.length - 1; else if (t.nextSlide >= t.slides.length) t.nextSlide = 0; t.API.prepareTx(true, e >= 0); return false }, buildSlideOpts: function (t) { var r = this.opts(); var i, s; var o = t.data() || {}; for (var u in o) { if (o.hasOwnProperty(u) && /^cycle[A-Z]+/.test(u)) { i = o[u]; s = u.match(/^cycle(.*)/)[1].replace(/^[A-Z]/, n); r.API.log("[" + (r.slideCount - 1) + "]", s + ":", i, "(" + typeof i + ")"); o[s] = i } } o = e.extend({}, e.fn.cycle.defaults, r, o); o.slideNum = r.slideCount; try { delete o.API; delete o.slideCount; delete o.currSlide; delete o.nextSlide; delete o.slides } catch (a) { } return o }, getSlideOpts: function (t) { var n = this.opts(); if (t === undefined) t = n.currSlide; var r = n.slides[t]; var i = e(r).data("cycle.opts"); return e.extend({}, n, i) }, initSlide: function (t, n, r) { var i = this.opts(); n.css(t.slideCss || {}); if (r > 0) n.css("zIndex", r); if (isNaN(t.speed)) t.speed = e.fx.speeds[t.speed] || e.fx.speeds._default; if (!t.sync) t.speed = t.speed / 2; n.addClass(i.slideClass) }, updateView: function (e, t, n) { var r = this.opts(); if (!r._initialized) return; var i = r.API.getSlideOpts(); var s = r.slides[r.currSlide]; if (!e && t !== true) { r.API.trigger("cycle-update-view-before", [r, i, s]); if (r.updateView < 0) return } if (r.slideActiveClass) { r.slides.removeClass(r.slideActiveClass).eq(r.currSlide).addClass(r.slideActiveClass) } if (e && r.hideNonActive) r.slides.filter(":not(." + r.slideActiveClass + ")").css("visibility", "hidden"); if (r.updateView === 0) { setTimeout(function () { r.API.trigger("cycle-update-view", [r, i, s, e]) }, i.speed / (r.sync ? 2 : 1)) } if (r.updateView !== 0) r.API.trigger("cycle-update-view", [r, i, s, e]); if (e) r.API.trigger("cycle-update-view-after", [r, i, s]) }, getComponent: function (t) { var n = this.opts(); var r = n[t]; if (typeof r === "string") { return /^\s*[\>|\+|~]/.test(r) ? n.container.find(r) : e(r) } if (r.jquery) return r; return e(r) }, stackSlides: function (t, n, r) { var i = this.opts(); if (!t) { t = i.slides[i.currSlide]; n = i.slides[i.nextSlide]; r = !i.reverse } e(t).css("zIndex", i.maxZ); var s; var o = i.maxZ - 2; var u = i.slideCount; if (r) { for (s = i.currSlide + 1; s < u; s++) e(i.slides[s]).css("zIndex", o--); for (s = 0; s < i.currSlide; s++) e(i.slides[s]).css("zIndex", o--) } else { for (s = i.currSlide - 1; s >= 0; s--) e(i.slides[s]).css("zIndex", o--); for (s = u - 1; s > i.currSlide; s--) e(i.slides[s]).css("zIndex", o--) } e(n).css("zIndex", i.maxZ - 1) }, getSlideIndex: function (e) { return this.opts().slides.index(e) } }; e.fn.cycle.log = function () { if (window.console && console.log) console.log("[cycle2] " + Array.prototype.join.call(arguments, " ")) }; e.fn.cycle.version = function () { return "Cycle2: " + t }; e.fn.cycle.transitions = { custom: {}, none: { before: function (e, t, n, r) { e.API.stackSlides(n, t, r); e.cssBefore = { opacity: 1, visibility: "visible", display: "block" } } }, fade: { before: function (t, n, r, i) { var s = t.API.getSlideOpts(t.nextSlide).slideCss || {}; t.API.stackSlides(n, r, i); t.cssBefore = e.extend(s, { opacity: 0, visibility: "visible", display: "block" }); t.animIn = { opacity: 1 }; t.animOut = { opacity: 0 } } }, fadeout: { before: function (t, n, r, i) { var s = t.API.getSlideOpts(t.nextSlide).slideCss || {}; t.API.stackSlides(n, r, i); t.cssBefore = e.extend(s, { opacity: 1, visibility: "visible", display: "block" }); t.animOut = { opacity: 0 } } }, scrollHorz: { before: function (e, t, n, r) { e.API.stackSlides(t, n, r); var i = e.container.css("overflow", "hidden").width(); e.cssBefore = { left: r ? i : -i, top: 0, opacity: 1, visibility: "visible", display: "block" }; e.cssAfter = { zIndex: e._maxZ - 2, left: 0 }; e.animIn = { left: 0 }; e.animOut = { left: r ? -i : i } } } }; e.fn.cycle.defaults = { allowWrap: true, autoSelector: ".cycle-slideshow[data-cycle-auto-init!=false]", delay: 0, easing: null, fx: "fade", hideNonActive: true, loop: 0, manualFx: undefined, manualSpeed: undefined, manualTrump: true, maxZ: 100, pauseOnHover: false, reverse: false, slideActiveClass: "cycle-slide-active", slideClass: "cycle-slide", slideCss: { position: "absolute", top: 0, left: 0 }, slides: "> img", speed: 500, startingSlide: 0, sync: true, timeout: 4e3, updateView: 0 }; e(document).ready(function () { e(e.fn.cycle.defaults.autoSelector).cycle() }) })(jQuery); (function (e) { "use strict"; function t(t, r) { var i, s, o; var u = r.autoHeight; if (u == "container") { s = e(r.slides[r.currSlide]).outerHeight(); r.container.height(s) } else if (r._autoHeightRatio) { r.container.height(r.container.width() / r._autoHeightRatio) } else if (u === "calc" || e.type(u) == "number" && u >= 0) { if (u === "calc") o = n(t, r); else if (u >= r.slides.length) o = 0; else o = u; if (o == r._sentinelIndex) return; r._sentinelIndex = o; if (r._sentinel) r._sentinel.remove(); i = e(r.slides[o].cloneNode(true)); i.removeAttr("id name rel").find("[id],[name],[rel]").removeAttr("id name rel"); i.css({ position: "static", visibility: "hidden", display: "block" }).prependTo(r.container).addClass("cycle-sentinel cycle-slide").removeClass("cycle-slide-active"); i.find("*").css("visibility", "hidden"); r._sentinel = i } } function n(t, n) { var r = 0, i = -1; n.slides.each(function (t) { var n = e(this).height(); if (n > i) { i = n; r = t } }); return r } function r(t, n, r, i, s) { var o = e(i).outerHeight(); n.container.animate({ height: o }, n.autoHeightSpeed, n.autoHeightEasing) } function i(n, s) { if (s._autoHeightOnResize) { e(window).off("resize orientationchange", s._autoHeightOnResize); s._autoHeightOnResize = null } s.container.off("cycle-slide-added cycle-slide-removed", t); s.container.off("cycle-destroyed", i); s.container.off("cycle-before", r); if (s._sentinel) { s._sentinel.remove(); s._sentinel = null } } e.extend(e.fn.cycle.defaults, { autoHeight: 0, autoHeightSpeed: 250, autoHeightEasing: null }); e(document).on("cycle-initialized", function (n, s) { function l() { t(n, s) } var o = s.autoHeight; var u = e.type(o); var a = null; var f; if (u !== "string" && u !== "number") return; s.container.on("cycle-slide-added cycle-slide-removed", t); s.container.on("cycle-destroyed", i); if (o == "container") { s.container.on("cycle-before", r) } else if (u === "string" && /\d+\:\d+/.test(o)) { f = o.match(/(\d+)\:(\d+)/); f = f[1] / f[2]; s._autoHeightRatio = f } if (u !== "number") { s._autoHeightOnResize = function () { clearTimeout(a); a = setTimeout(l, 50) }; e(window).on("resize orientationchange", s._autoHeightOnResize) } setTimeout(l, 30) }) })(jQuery); (function (e) { "use strict"; e.extend(e.fn.cycle.defaults, { caption: "> .cycle-caption", captionTemplate: "{{slideNum}} / {{slideCount}}", overlay: "> .cycle-overlay", overlayTemplate: "<div>{{title}}</div><div>{{desc}}</div>", captionModule: "caption" }); e(document).on("cycle-update-view", function (t, n, r, i) { if (n.captionModule !== "caption") return; var s; e.each(["caption", "overlay"], function () { var e = this; var t = r[e + "Template"]; var s = n.API.getComponent(e); if (s.length && t) { s.html(n.API.tmpl(t, r, n, i)); s.show() } else { s.hide() } }) }); e(document).on("cycle-destroyed", function (t, n) { var r; e.each(["caption", "overlay"], function () { var e = this, t = n[e + "Template"]; if (n[e] && t) { r = n.API.getComponent("caption"); r.empty() } }) }) })(jQuery); (function (e) { "use strict"; var t = e.fn.cycle; e.fn.cycle = function (n) { var r, i, s; var o = e.makeArray(arguments); if (e.type(n) == "number") { return this.cycle("goto", n) } if (e.type(n) == "string") { return this.each(function () { var u; r = n; s = e(this).data("cycle.opts"); if (s === undefined) { t.log('slideshow must be initialized before sending commands; "' + r + '" ignored'); return } else { r = r == "goto" ? "jump" : r; i = s.API[r]; if (e.isFunction(i)) { u = e.makeArray(o); u.shift(); return i.apply(s.API, u) } else { t.log("unknown command: ", r) } } }) } else { return t.apply(this, arguments) } }; e.extend(e.fn.cycle, t); e.extend(t.API, { next: function () { var e = this.opts(); if (e.busy && !e.manualTrump) return; var t = e.reverse ? -1 : 1; if (e.allowWrap === false && e.currSlide + t >= e.slideCount) return; e.API.advanceSlide(t); e.API.trigger("cycle-next", [e]).log("cycle-next") }, prev: function () { var e = this.opts(); if (e.busy && !e.manualTrump) return; var t = e.reverse ? 1 : -1; if (e.allowWrap === false && e.currSlide + t < 0) return; e.API.advanceSlide(t); e.API.trigger("cycle-prev", [e]).log("cycle-prev") }, destroy: function () { this.stop(); var t = this.opts(); var n = e.isFunction(e._data) ? e._data : e.noop; clearTimeout(t.timeoutId); t.timeoutId = 0; t.API.stop(); t.API.trigger("cycle-destroyed", [t]).log("cycle-destroyed"); t.container.removeData(); n(t.container[0], "parsedAttrs", false); if (!t.retainStylesOnDestroy) { t.container.removeAttr("style"); t.slides.removeAttr("style"); t.slides.removeClass(t.slideActiveClass) } t.slides.each(function () { var r = e(this); r.removeData(); r.removeClass(t.slideClass); n(this, "parsedAttrs", false) }) }, jump: function (e, t) { var n; var r = this.opts(); if (r.busy && !r.manualTrump) return; var i = parseInt(e, 10); if (isNaN(i) || i < 0 || i >= r.slides.length) { r.API.log("goto: invalid slide index: " + i); return } if (i == r.currSlide) { r.API.log("goto: skipping, already on slide", i); return } r.nextSlide = i; clearTimeout(r.timeoutId); r.timeoutId = 0; r.API.log("goto: ", i, " (zero-index)"); n = r.currSlide < r.nextSlide; r._tempFx = t; r.API.prepareTx(true, n) }, stop: function () { var t = this.opts(); var n = t.container; clearTimeout(t.timeoutId); t.timeoutId = 0; t.API.stopTransition(); if (t.pauseOnHover) { if (t.pauseOnHover !== true) n = e(t.pauseOnHover); n.off("mouseenter mouseleave") } t.API.trigger("cycle-stopped", [t]).log("cycle-stopped") }, reinit: function () { var e = this.opts(); e.API.destroy(); e.container.cycle() }, remove: function (t) { var n = this.opts(); var r, i, s = [], o = 1; for (var u = 0; u < n.slides.length; u++) { r = n.slides[u]; if (u == t) { i = r } else { s.push(r); e(r).data("cycle.opts").slideNum = o; o++ } } if (i) { n.slides = e(s); n.slideCount--; e(i).remove(); if (t == n.currSlide) n.API.advanceSlide(1); else if (t < n.currSlide) n.currSlide--; else n.currSlide++; n.API.trigger("cycle-slide-removed", [n, t, i]).log("cycle-slide-removed"); n.API.updateView() } } }); e(document).on("click.cycle", "[data-cycle-cmd]", function (t) { t.preventDefault(); var n = e(this); var r = n.data("cycle-cmd"); var i = n.data("cycle-context") || ".cycle-slideshow"; e(i).cycle(r, n.data("cycle-arg")) }) })(jQuery); (function (e) { "use strict"; function t(t, n) { var r; if (t._hashFence) { t._hashFence = false; return } r = window.location.hash.substring(1); t.slides.each(function (i) { if (e(this).data("cycle-hash") == r) { if (n === true) { t.startingSlide = i } else { var s = t.currSlide < i; t.nextSlide = i; t.API.prepareTx(true, s) } return false } }) } e(document).on("cycle-pre-initialize", function (n, r) { t(r, true); r._onHashChange = function () { t(r, false) }; e(window).on("hashchange", r._onHashChange) }); e(document).on("cycle-update-view", function (e, t, n) { if (n.hash && "#" + n.hash != window.location.hash) { t._hashFence = true; window.location.hash = n.hash } }); e(document).on("cycle-destroyed", function (t, n) { if (n._onHashChange) { e(window).off("hashchange", n._onHashChange) } }) })(jQuery); (function (e) { "use strict"; e.extend(e.fn.cycle.defaults, { loader: false }); e(document).on("cycle-bootstrap", function (t, n) { function i(t, i) { function a(t) { var o; if (n.loader == "wait") { s.push(t); if (u === 0) { s.sort(f); r.apply(n.API, [s, i]); n.container.removeClass("cycle-loading") } } else { o = e(n.slides[n.currSlide]); r.apply(n.API, [t, i]); o.show(); n.container.removeClass("cycle-loading") } } function f(e, t) { return e.data("index") - t.data("index") } var s = []; if (e.type(t) == "string") t = e.trim(t); else if (e.type(t) === "array") { for (var o = 0; o < t.length; o++) t[o] = e(t[o])[0] } t = e(t); var u = t.length; if (!u) return; t.css("visibility", "hidden").appendTo("body").each(function (t) { function c() { if (--o === 0) { --u; a(f) } } var o = 0; var f = e(this); var l = f.is("img") ? f : f.find("img"); f.data("index", t); l = l.filter(":not(.cycle-loader-ignore)").filter(':not([src=""])'); if (!l.length) { --u; s.push(f); return } o = l.length; l.each(function () { if (this.complete) { c() } else { e(this).load(function () { c() }).on("error", function () { if (--o === 0) { n.API.log("slide skipped; img not loaded:", this.src); if (--u === 0 && n.loader == "wait") { r.apply(n.API, [s, i]) } } }) } }) }); if (u) n.container.addClass("cycle-loading") } var r; if (!n.loader) return; r = n.API.add; n.API.add = i }) })(jQuery); (function (e) { "use strict"; function t(t, n, r) { var i; var s = t.API.getComponent("pager"); s.each(function () { var s = e(this); if (n.pagerTemplate) { var o = t.API.tmpl(n.pagerTemplate, n, t, r[0]); i = e(o).appendTo(s) } else { i = s.children().eq(t.slideCount - 1) } i.on(t.pagerEvent, function (e) { if (!t.pagerEventBubble) e.preventDefault(); t.API.page(s, e.currentTarget) }) }) } function n(e, t) { var n = this.opts(); if (n.busy && !n.manualTrump) return; var r = e.children().index(t); var i = r; var s = n.currSlide < i; if (n.currSlide == i) { return } n.nextSlide = i; n._tempFx = n.pagerFx; n.API.prepareTx(true, s); n.API.trigger("cycle-pager-activated", [n, e, t]) } e.extend(e.fn.cycle.defaults, { pager: "> .cycle-pager", pagerActiveClass: "cycle-pager-active", pagerEvent: "click.cycle", pagerEventBubble: undefined, pagerTemplate: "<span>&bull;</span>" }); e(document).on("cycle-bootstrap", function (e, n, r) { r.buildPagerLink = t }); e(document).on("cycle-slide-added", function (e, t, r, i) { if (t.pager) { t.API.buildPagerLink(t, r, i); t.API.page = n } }); e(document).on("cycle-slide-removed", function (t, n, r, i) { if (n.pager) { var s = n.API.getComponent("pager"); s.each(function () { var t = e(this); e(t.children()[r]).remove() }) } }); e(document).on("cycle-update-view", function (t, n, r) { var i; if (n.pager) { i = n.API.getComponent("pager"); i.each(function () { e(this).children().removeClass(n.pagerActiveClass).eq(n.currSlide).addClass(n.pagerActiveClass) }) } }); e(document).on("cycle-destroyed", function (e, t) { var n = t.API.getComponent("pager"); if (n) { n.children().off(t.pagerEvent); if (t.pagerTemplate) n.empty() } }) })(jQuery); (function (e) { "use strict"; e.extend(e.fn.cycle.defaults, { next: "> .cycle-next", nextEvent: "click.cycle", disabledClass: "disabled", prev: "> .cycle-prev", prevEvent: "click.cycle", swipe: false }); e(document).on("cycle-initialized", function (e, t) { t.API.getComponent("next").on(t.nextEvent, function (e) { e.preventDefault(); t.API.next() }); t.API.getComponent("prev").on(t.prevEvent, function (e) { e.preventDefault(); t.API.prev() }); if (t.swipe) { var n = t.swipeVert ? "swipeUp.cycle" : "swipeLeft.cycle swipeleft.cycle"; var r = t.swipeVert ? "swipeDown.cycle" : "swipeRight.cycle swiperight.cycle"; t.container.on(n, function (e) { t._tempFx = t.swipeFx; t.API.next() }); t.container.on(r, function () { t._tempFx = t.swipeFx; t.API.prev() }) } }); e(document).on("cycle-update-view", function (e, t, n, r) { if (t.allowWrap) return; var i = t.disabledClass; var s = t.API.getComponent("next"); var o = t.API.getComponent("prev"); var u = t._prevBoundry || 0; var a = t._nextBoundry !== undefined ? t._nextBoundry : t.slideCount - 1; if (t.currSlide == a) s.addClass(i).prop("disabled", true); else s.removeClass(i).prop("disabled", false); if (t.currSlide === u) o.addClass(i).prop("disabled", true); else o.removeClass(i).prop("disabled", false) }); e(document).on("cycle-destroyed", function (e, t) { t.API.getComponent("prev").off(t.nextEvent); t.API.getComponent("next").off(t.prevEvent); t.container.off("swipeleft.cycle swiperight.cycle swipeLeft.cycle swipeRight.cycle swipeUp.cycle swipeDown.cycle") }) })(jQuery); (function (e) { "use strict"; e.extend(e.fn.cycle.defaults, { progressive: false }); e(document).on("cycle-pre-initialize", function (t, n) { if (!n.progressive) return; var r = n.API; var i = r.next; var s = r.prev; var o = r.prepareTx; var u = e.type(n.progressive); var a, f; if (u == "array") { a = n.progressive } else if (e.isFunction(n.progressive)) { a = n.progressive(n) } else if (u == "string") { f = e(n.progressive); a = e.trim(f.html()); if (!a) return; if (/^(\[)/.test(a)) { try { a = e.parseJSON(a) } catch (l) { r.log("error parsing progressive slides", l); return } } else { a = a.split(new RegExp(f.data("cycle-split") || "\n")); if (!a[a.length - 1]) a.pop() } } if (o) { r.prepareTx = function (e, t) { var r, i; if (e || a.length === 0) { o.apply(n.API, [e, t]); return } if (t && n.currSlide == n.slideCount - 1) { i = a[0]; a = a.slice(1); n.container.one("cycle-slide-added", function (e, t) { setTimeout(function () { t.API.advanceSlide(1) }, 50) }); n.API.add(i) } else if (!t && n.currSlide === 0) { r = a.length - 1; i = a[r]; a = a.slice(0, r); n.container.one("cycle-slide-added", function (e, t) { setTimeout(function () { t.currSlide = 1; t.API.advanceSlide(-1) }, 50) }); n.API.add(i, true) } else { o.apply(n.API, [e, t]) } } } if (i) { r.next = function () { var e = this.opts(); if (a.length && e.currSlide == e.slideCount - 1) { var t = a[0]; a = a.slice(1); e.container.one("cycle-slide-added", function (e, t) { i.apply(t.API); t.container.removeClass("cycle-loading") }); e.container.addClass("cycle-loading"); e.API.add(t) } else { i.apply(e.API) } } } if (s) { r.prev = function () { var e = this.opts(); if (a.length && e.currSlide === 0) { var t = a.length - 1; var n = a[t]; a = a.slice(0, t); e.container.one("cycle-slide-added", function (e, t) { t.currSlide = 1; t.API.advanceSlide(-1); t.container.removeClass("cycle-loading") }); e.container.addClass("cycle-loading"); e.API.add(n, true) } else { s.apply(e.API) } } } }) })(jQuery); (function (e) { "use strict"; e.extend(e.fn.cycle.defaults, { tmplRegex: "{{((.)?.*?)}}" }); e.extend(e.fn.cycle.API, { tmpl: function (t, n) { var r = new RegExp(n.tmplRegex || e.fn.cycle.defaults.tmplRegex, "g"); var i = e.makeArray(arguments); i.shift(); return t.replace(r, function (t, n) { var r, s, o, u, a = n.split("."); for (r = 0; r < i.length; r++) { o = i[r]; if (!o) continue; if (a.length > 1) { u = o; for (s = 0; s < a.length; s++) { o = u; u = u[a[s]] || n } } else { u = o[n] } if (e.isFunction(u)) return u.apply(o, i); if (u !== undefined && u !== null && u != n) return u } return n }) } }) })(jQuery); $(function () { $("[data-tab]").click(function (e) { $(this).addClass("active").siblings("[data-tab]").removeClass("active").siblings("[data-content=" + $(this).data("tab") + "]").addClass("active").siblings("[data-content]").removeClass("active"); e.preventDefault(); $(".tabs>.content:not(.active)").find("input[type='text'],input[type='password'],input[type='email'], textarea").removeAttr("required"); $(".tabs>.content.active").find("div[required], p[required]").find("input[type='text'],input[type='password'],input[type='email'], textarea").attr("required", "required") }); $(window).on("hashchange", function () { var e = document.location.hash.substr(1); $('div.tabs > a[id^="' + e + '"]').click() }); $(window).trigger("hashchange") }); $(function () { $("input[type = 'radio']+span, input[type = 'checkbox']+span").click(function () { $(this).prev().click() }) }); $(function () { $("#form").submit(function (e) { $("#formsubmit").attr("disabled", "disabled"); $.ajax({ type: "POST", url: "/contact_post", data: $(this).serialize(), success: function () { $("#body").prepend("<div id='successbox' class='success center-fix extremeTop transition box'><span>A message has been sent successfully</span></div>"); $("#form")[0].reset(); $("#formsubmit").removeAttr("disabled"); setTimeout(function () { $("#successbox").hide(); }, 2000) } }); e.preventDefault() }) })
//$(function () {
//    $("#otherInputText").keyup(function () {
//        $("#otherInput").val($("#otherInputText").val());
//    })
//});
