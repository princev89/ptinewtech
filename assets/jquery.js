/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document)
            throw new Error("jQuery requires a window with a document");
        return b(a)
    }
    : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = []
      , d = c.slice
      , e = c.concat
      , f = c.push
      , g = c.indexOf
      , h = {}
      , i = h.toString
      , j = h.hasOwnProperty
      , k = {}
      , l = "1.11.1"
      , m = function(a, b) {
        return new m.fn.init(a,b)
    }
      , n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , o = /^-ms-/
      , p = /-([\da-z])/gi
      , q = function(a, b) {
        return b.toUpperCase()
    };
    m.fn = m.prototype = {
        jquery: l,
        constructor: m,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        },
        pushStack: function(a) {
            var b = m.merge(this.constructor(), a);
            return b.prevObject = this,
            b.context = this.context,
            b
        },
        each: function(a, b) {
            return m.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(m.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length
              , c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    },
    m.extend = m.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g,
        g = arguments[h] || {},
        h++),
        "object" == typeof g || m.isFunction(g) || (g = {}),
        h === i && (g = this,
        h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e)
                    a = g[d],
                    c = e[d],
                    g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1,
                    f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {},
                    g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }
    ,
    m.extend({
        expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === m.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === m.type(a)
        }
        ,
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            return !m.isArray(a) && a - parseFloat(a) >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a)
                return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a))
                return !1;
            try {
                if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (c) {
                return !1
            }
            if (k.ownLast)
                for (b in a)
                    return j.call(a, b);
            for (b in a)
                ;
            return void 0 === b || j.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && m.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            }
            )(b)
        },
        camelCase: function(a) {
            return a.replace(o, "ms-").replace(p, q)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, c) {
            var d, e = 0, f = a.length, g = r(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)
                        if (d = b.apply(a[e], c),
                        d === !1)
                            break
                } else
                    for (e in a)
                        if (d = b.apply(a[e], c),
                        d === !1)
                            break
            } else if (g) {
                for (; f > e; e++)
                    if (d = b.call(a[e], e, a[e]),
                    d === !1)
                        break
            } else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]),
                    d === !1)
                        break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(n, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)),
            c
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (g)
                    return g.call(b, a, c);
                for (d = b.length,
                c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a)
                        return c
            }
            return -1
        },
        merge: function(a, b) {
            var c = +b.length
              , d = 0
              , e = a.length;
            while (c > d)
                a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d])
                    a[e++] = b[d++];
            return a.length = e,
            a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
                d = !b(a[f], f),
                d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, f = 0, g = a.length, h = r(a), i = [];
            if (h)
                for (; g > f; f++)
                    d = b(a[f], f, c),
                    null != d && i.push(d);
            else
                for (f in a)
                    d = b(a[f], f, c),
                    null != d && i.push(d);
            return e.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (f = a[b],
            b = a,
            a = f),
            m.isFunction(a) ? (c = d.call(arguments, 2),
            e = function() {
                return a.apply(b || this, c.concat(d.call(arguments)))
            }
            ,
            e.guid = a.guid = a.guid || m.guid++,
            e) : void 0
        },
        now: function() {
            return +new Date
        },
        support: k
    }),
    m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });
    function r(a) {
        var b = a.length
          , c = m.type(a);
        return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var s = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + -new Date, v = a.document, w = 0, x = 0, y = gb(), z = gb(), A = gb(), B = function(a, b) {
            return a === b && (l = !0),
            0
        }, C = "undefined", D = 1 << 31, E = {}.hasOwnProperty, F = [], G = F.pop, H = F.push, I = F.push, J = F.slice, K = F.indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (this[b] === a)
                    return b;
            return -1
        }
        , L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", O = N.replace("w", "w#"), P = "\\[" + M + "*(" + N + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + M + "*\\]", Q = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)", R = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$","g"), S = new RegExp("^" + M + "*," + M + "*"), T = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]","g"), V = new RegExp(Q), W = new RegExp("^" + O + "$"), X = {
            ID: new RegExp("^#(" + N + ")"),
            CLASS: new RegExp("^\\.(" + N + ")"),
            TAG: new RegExp("^(" + N.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + P),
            PSEUDO: new RegExp("^" + Q),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)","i"),
            bool: new RegExp("^(?:" + L + ")$","i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)","i")
        }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ab = /[+~]/, bb = /'|\\/g, cb = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)","ig"), db = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        };
        try {
            I.apply(F = J.call(v.childNodes), v.childNodes),
            F[v.childNodes.length].nodeType
        } catch (eb) {
            I = {
                apply: F.length ? function(a, b) {
                    H.apply(a, J.call(b))
                }
                : function(a, b) {
                    var c = a.length
                      , d = 0;
                    while (a[c++] = b[d++])
                        ;
                    a.length = c - 1
                }
            }
        }
        function fb(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b),
            b = b || n,
            d = d || [],
            !a || "string" != typeof a)
                return d;
            if (1 !== (k = b.nodeType) && 9 !== k)
                return [];
            if (p && !e) {
                if (f = _.exec(a))
                    if (j = f[1]) {
                        if (9 === k) {
                            if (h = b.getElementById(j),
                            !h || !h.parentNode)
                                return d;
                            if (h.id === j)
                                return d.push(h),
                                d
                        } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j)
                            return d.push(h),
                            d
                    } else {
                        if (f[2])
                            return I.apply(d, b.getElementsByTagName(a)),
                            d;
                        if ((j = f[3]) && c.getElementsByClassName && b.getElementsByClassName)
                            return I.apply(d, b.getElementsByClassName(j)),
                            d
                    }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u,
                    w = b,
                    x = 9 === k && a,
                    1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a),
                        (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s),
                        s = "[id='" + s + "'] ",
                        l = o.length;
                        while (l--)
                            o[l] = s + qb(o[l]);
                        w = ab.test(a) && ob(b.parentNode) || b,
                        x = o.join(",")
                    }
                    if (x)
                        try {
                            return I.apply(d, w.querySelectorAll(x)),
                            d
                        } catch (y) {} finally {
                            r || b.removeAttribute("id")
                        }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }
        function gb() {
            var a = [];
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()],
                b[c + " "] = e
            }
            return b
        }
        function hb(a) {
            return a[u] = !0,
            a
        }
        function ib(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b),
                b = null
            }
        }
        function jb(a, b) {
            var c = a.split("|")
              , e = a.length;
            while (e--)
                d.attrHandle[c[e]] = b
        }
        function kb(a, b) {
            var c = b && a
              , d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || D) - (~a.sourceIndex || D);
            if (d)
                return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b)
                        return -1;
            return a ? 1 : -1
        }
        function lb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function mb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function nb(a) {
            return hb(function(b) {
                return b = +b,
                hb(function(c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--)
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }
        function ob(a) {
            return a && typeof a.getElementsByTagName !== C && a
        }
        c = fb.support = {},
        f = fb.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }
        ,
        m = fb.setDocument = function(a) {
            var b, e = a ? a.ownerDocument || a : v, g = e.defaultView;
            return e !== n && 9 === e.nodeType && e.documentElement ? (n = e,
            o = e.documentElement,
            p = !f(e),
            g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function() {
                m()
            }, !1) : g.attachEvent && g.attachEvent("onunload", function() {
                m()
            })),
            c.attributes = ib(function(a) {
                return a.className = "i",
                !a.getAttribute("className")
            }),
            c.getElementsByTagName = ib(function(a) {
                return a.appendChild(e.createComment("")),
                !a.getElementsByTagName("*").length
            }),
            c.getElementsByClassName = $.test(e.getElementsByClassName) && ib(function(a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>",
                a.firstChild.className = "i",
                2 === a.getElementsByClassName("i").length
            }),
            c.getById = ib(function(a) {
                return o.appendChild(a).id = u,
                !e.getElementsByName || !e.getElementsByName(u).length
            }),
            c.getById ? (d.find.ID = function(a, b) {
                if (typeof b.getElementById !== C && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }
            ,
            d.filter.ID = function(a) {
                var b = a.replace(cb, db);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }
            ) : (delete d.find.ID,
            d.filter.ID = function(a) {
                var b = a.replace(cb, db);
                return function(a) {
                    var c = typeof a.getAttributeNode !== C && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }
            ),
            d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0
            }
            : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++])
                        1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }
            ,
            d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return typeof b.getElementsByClassName !== C && p ? b.getElementsByClassName(a) : void 0
            }
            ,
            r = [],
            q = [],
            (c.qsa = $.test(e.querySelectorAll)) && (ib(function(a) {
                a.innerHTML = "<select msallowclip=''><option selected=''></option></select>",
                a.querySelectorAll("[msallowclip^='']").length && q.push("[*^$]=" + M + "*(?:''|\"\")"),
                a.querySelectorAll("[selected]").length || q.push("\\[" + M + "*(?:value|" + L + ")"),
                a.querySelectorAll(":checked").length || q.push(":checked")
            }),
            ib(function(a) {
                var b = e.createElement("input");
                b.setAttribute("type", "hidden"),
                a.appendChild(b).setAttribute("name", "D"),
                a.querySelectorAll("[name=d]").length && q.push("name" + M + "*[*^$|!~]?="),
                a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"),
                a.querySelectorAll("*,:x"),
                q.push(",.*:")
            })),
            (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ib(function(a) {
                c.disconnectedMatch = s.call(a, "div"),
                s.call(a, "[s!='']:x"),
                r.push("!=", Q)
            }),
            q = q.length && new RegExp(q.join("|")),
            r = r.length && new RegExp(r.join("|")),
            b = $.test(o.compareDocumentPosition),
            t = b || $.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a
                  , d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            }
            : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a)
                            return !0;
                return !1
            }
            ,
            B = b ? function(a, b) {
                if (a === b)
                    return l = !0,
                    0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1,
                1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === v && t(v, a) ? -1 : b === e || b.ownerDocument === v && t(v, b) ? 1 : k ? K.call(k, a) - K.call(k, b) : 0 : 4 & d ? -1 : 1)
            }
            : function(a, b) {
                if (a === b)
                    return l = !0,
                    0;
                var c, d = 0, f = a.parentNode, g = b.parentNode, h = [a], i = [b];
                if (!f || !g)
                    return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : k ? K.call(k, a) - K.call(k, b) : 0;
                if (f === g)
                    return kb(a, b);
                c = a;
                while (c = c.parentNode)
                    h.unshift(c);
                c = b;
                while (c = c.parentNode)
                    i.unshift(c);
                while (h[d] === i[d])
                    d++;
                return d ? kb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }
            ,
            e) : n
        }
        ,
        fb.matches = function(a, b) {
            return fb(a, null, null, b)
        }
        ,
        fb.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a),
            b = b.replace(U, "='$1']"),
            !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b)))
                try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                        return d
                } catch (e) {}
            return fb(b, n, null, [a]).length > 0
        }
        ,
        fb.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a),
            t(a, b)
        }
        ,
        fb.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()]
              , f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }
        ,
        fb.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }
        ,
        fb.uniqueSort = function(a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates,
            k = !c.sortStable && a.slice(0),
            a.sort(B),
            l) {
                while (b = a[f++])
                    b === a[f] && (e = d.push(f));
                while (e--)
                    a.splice(d[e], 1)
            }
            return k = null,
            a
        }
        ,
        e = fb.getText = function(a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent)
                        return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)
                        c += e(a)
                } else if (3 === f || 4 === f)
                    return a.nodeValue
            } else
                while (b = a[d++])
                    c += e(b);
            return c
        }
        ,
        d = fb.selectors = {
            cacheLength: 50,
            createPseudo: hb,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(cb, db),
                    a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db),
                    "~=" === a[2] && (a[3] = " " + a[3] + " "),
                    a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(),
                    "nth" === a[1].slice(0, 3) ? (a[3] || fb.error(a[0]),
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])),
                    a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fb.error(a[0]),
                    a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b),
                    a[2] = c.slice(0, b)),
                    a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(cb, db).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    }
                    : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + M + ")" + a + "(" + M + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fb.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "",
                        "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3)
                      , g = "last" !== a.slice(-4)
                      , h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    }
                    : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)
                                            return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild],
                            g && s) {
                                k = q[u] || (q[u] = {}),
                                j = k[a] || [],
                                n = j[0] === w && j[1],
                                m = j[0] === w && j[2],
                                l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [w, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w)
                                m = j[1];
                            else
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]),
                                    l === b))
                                        break;
                            return m -= e,
                            m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fb.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b],
                    d.setFilters.hasOwnProperty(a.toLowerCase()) ? hb(function(a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--)
                            d = K.call(a, f[g]),
                            a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }
                    ) : e
                }
            },
            pseudos: {
                not: hb(function(a) {
                    var b = []
                      , c = []
                      , d = h(a.replace(R, "$1"));
                    return d[u] ? hb(function(a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--)
                            (f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a,
                        d(b, null, f, c),
                        !c.pop()
                    }
                }),
                has: hb(function(a) {
                    return function(b) {
                        return fb(a, b).length > 0
                    }
                }),
                contains: hb(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }),
                lang: hb(function(a) {
                    return W.test(a || "") || fb.error("unsupported lang: " + a),
                    a = a.replace(cb, db).toLowerCase(),
                    function(b) {
                        var c;
                        do
                            if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                return c = c.toLowerCase(),
                                c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex,
                    a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Z.test(a.nodeName)
                },
                input: function(a) {
                    return Y.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: nb(function() {
                    return [0]
                }),
                last: nb(function(a, b) {
                    return [b - 1]
                }),
                eq: nb(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: nb(function(a, b) {
                    for (var c = 0; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                odd: nb(function(a, b) {
                    for (var c = 1; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                lt: nb(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; )
                        a.push(d);
                    return a
                }),
                gt: nb(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; )
                        a.push(d);
                    return a
                })
            }
        },
        d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            d.pseudos[b] = lb(b);
        for (b in {
            submit: !0,
            reset: !0
        })
            d.pseudos[b] = mb(b);
        function pb() {}
        pb.prototype = d.filters = d.pseudos,
        d.setFilters = new pb,
        g = fb.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k)
                return b ? 0 : k.slice(0);
            h = a,
            i = [],
            j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h),
                i.push(f = [])),
                c = !1,
                (e = T.exec(h)) && (c = e.shift(),
                f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }),
                h = h.slice(c.length));
                for (g in d.filter)
                    !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(),
                    f.push({
                        value: c,
                        type: g,
                        matches: e
                    }),
                    h = h.slice(c.length));
                if (!c)
                    break
            }
            return b ? h.length : h ? fb.error(a) : z(a, i).slice(0)
        }
        ;
        function qb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)
                d += a[b].value;
            return d
        }
        function rb(a, b, c) {
            var d = b.dir
              , e = c && "parentNode" === d
              , f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e)
                        return a(b, c, f)
            }
            : function(b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g))
                            return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (i = b[u] || (b[u] = {}),
                            (h = i[d]) && h[0] === w && h[1] === f)
                                return j[2] = h[2];
                            if (i[d] = j,
                            j[2] = a(b, c, g))
                                return !0
                        }
            }
        }
        function sb(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d))
                        return !1;
                return !0
            }
            : a[0]
        }
        function tb(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++)
                fb(a, b[d], c);
            return c
        }
        function ub(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
                (f = a[h]) && (!c || c(f, d, e)) && (g.push(f),
                j && b.push(h));
            return g
        }
        function vb(a, b, c, d, e, f) {
            return d && !d[u] && (d = vb(d)),
            e && !e[u] && (e = vb(e, f)),
            hb(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || tb(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : ub(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i),
                d) {
                    j = ub(r, n),
                    d(j, [], h, i),
                    k = j.length;
                    while (k--)
                        (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [],
                            k = r.length;
                            while (k--)
                                (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)
                            (l = r[k]) && (j = e ? K.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else
                    r = ub(r === g ? r.splice(o, r.length) : r),
                    e ? e(null, g, r, i) : I.apply(g, r)
            })
        }
        function wb(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = rb(function(a) {
                return a === b
            }, h, !0), l = rb(function(a) {
                return K.call(b, a) > -1
            }, h, !0), m = [function(a, c, d) {
                return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
            }
            ]; f > i; i++)
                if (c = d.relative[a[i].type])
                    m = [rb(sb(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches),
                    c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type])
                                break;
                        return vb(i > 1 && sb(m), i > 1 && qb(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(R, "$1"), c, e > i && wb(a.slice(i, e)), f > e && wb(a = a.slice(e)), f > e && qb(a))
                    }
                    m.push(c)
                }
            return sb(m)
        }
        function xb(a, b) {
            var c = b.length > 0
              , e = a.length > 0
              , f = function(f, g, h, i, k) {
                var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null == t ? 1 : Math.random() || .1, x = u.length;
                for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                    if (e && l) {
                        m = 0;
                        while (o = a[m++])
                            if (o(l, g, h)) {
                                i.push(l);
                                break
                            }
                        k && (w = v)
                    }
                    c && ((l = !o && l) && p--,
                    f && r.push(l))
                }
                if (p += q,
                c && q !== p) {
                    m = 0;
                    while (o = b[m++])
                        o(r, s, g, h);
                    if (f) {
                        if (p > 0)
                            while (q--)
                                r[q] || s[q] || (s[q] = G.call(i));
                        s = ub(s)
                    }
                    I.apply(i, s),
                    k && !f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i)
                }
                return k && (w = v,
                j = t),
                r
            };
            return c ? hb(f) : f
        }
        return h = fb.compile = function(a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)),
                c = b.length;
                while (c--)
                    f = wb(b[c]),
                    f[u] ? d.push(f) : e.push(f);
                f = A(a, xb(e, d)),
                f.selector = a
            }
            return f
        }
        ,
        i = fb.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [],
            1 === o.length) {
                if (j = o[0] = o[0].slice(0),
                j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0],
                    !b)
                        return e;
                    n && (b = b.parentNode),
                    a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i],
                    d.relative[l = k.type])
                        break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && ob(b.parentNode) || b))) {
                        if (j.splice(i, 1),
                        a = f.length && qb(j),
                        !a)
                            return I.apply(e, f),
                            e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, ab.test(a) && ob(b.parentNode) || b),
            e
        }
        ,
        c.sortStable = u.split("").sort(B).join("") === u,
        c.detectDuplicates = !!l,
        m(),
        c.sortDetached = ib(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }),
        ib(function(a) {
            return a.innerHTML = "<a href='#'></a>",
            "#" === a.firstChild.getAttribute("href")
        }) || jb("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }),
        c.attributes && ib(function(a) {
            return a.innerHTML = "<input/>",
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
        }) || jb("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }),
        ib(function(a) {
            return null == a.getAttribute("disabled")
        }) || jb(L, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }),
        fb
    }(a);
    m.find = s,
    m.expr = s.selectors,
    m.expr[":"] = m.expr.pseudos,
    m.unique = s.uniqueSort,
    m.text = s.getText,
    m.isXMLDoc = s.isXML,
    m.contains = s.contains;
    var t = m.expr.match.needsContext
      , u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
      , v = /^.[^:#\[\.,]*$/;
    function w(a, b, c) {
        if (m.isFunction(b))
            return m.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
        if (b.nodeType)
            return m.grep(a, function(a) {
                return a === b !== c
            });
        if ("string" == typeof b) {
            if (v.test(b))
                return m.filter(b, a, c);
            b = m.filter(b, a)
        }
        return m.grep(a, function(a) {
            return m.inArray(a, b) >= 0 !== c
        })
    }
    m.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"),
        1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }
    ,
    m.fn.extend({
        find: function(a) {
            var b, c = [], d = this, e = d.length;
            if ("string" != typeof a)
                return this.pushStack(m(a).filter(function() {
                    for (b = 0; e > b; b++)
                        if (m.contains(d[b], this))
                            return !0
                }));
            for (b = 0; e > b; b++)
                m.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? m.unique(c) : c),
            c.selector = this.selector ? this.selector + " " + a : a,
            c
        },
        filter: function(a) {
            return this.pushStack(w(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(w(this, a || [], !0))
        },
        is: function(a) {
            return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length
        }
    });
    var x, y = a.document, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = m.fn.init = function(a, b) {
        var c, d;
        if (!a)
            return this;
        if ("string" == typeof a) {
            if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a),
            !c || !c[1] && b)
                return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof m ? b[0] : b,
                m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)),
                u.test(c[1]) && m.isPlainObject(b))
                    for (c in b)
                        m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            if (d = y.getElementById(c[2]),
            d && d.parentNode) {
                if (d.id !== c[2])
                    return x.find(a);
                this.length = 1,
                this[0] = d
            }
            return this.context = y,
            this.selector = a,
            this
        }
        return a.nodeType ? (this.context = this[0] = a,
        this.length = 1,
        this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector,
        this.context = a.context),
        m.makeArray(a, this))
    }
    ;
    A.prototype = m.fn,
    x = m(y);
    var B = /^(?:parents|prev(?:Until|All))/
      , C = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    m.extend({
        dir: function(a, b, c) {
            var d = []
              , e = a[b];
            while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c)))
                1 === e.nodeType && d.push(e),
                e = e[b];
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling)
                1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }),
    m.fn.extend({
        has: function(a) {
            var b, c = m(a, this), d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (m.contains(this, c[b]))
                        return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? m.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(m.unique(m.merge(this.get(), m(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    function D(a, b) {
        do
            a = a[b];
        while (a && 1 !== a.nodeType);
        return a
    }
    m.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return m.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return m.dir(a, "parentNode", c)
        },
        next: function(a) {
            return D(a, "nextSibling")
        },
        prev: function(a) {
            return D(a, "previousSibling")
        },
        nextAll: function(a) {
            return m.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return m.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return m.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return m.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return m.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return m.sibling(a.firstChild)
        },
        contents: function(a) {
            return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes)
        }
    }, function(a, b) {
        m.fn[a] = function(c, d) {
            var e = m.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c),
            d && "string" == typeof d && (e = m.filter(d, e)),
            this.length > 1 && (C[a] || (e = m.unique(e)),
            B.test(a) && (e = e.reverse())),
            this.pushStack(e)
        }
    });
    var E = /\S+/g
      , F = {};
    function G(a) {
        var b = F[a] = {};
        return m.each(a.match(E) || [], function(a, c) {
            b[c] = !0
        }),
        b
    }
    m.Callbacks = function(a) {
        a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
        var b, c, d, e, f, g, h = [], i = !a.once && [], j = function(l) {
            for (c = a.memory && l,
            d = !0,
            f = g || 0,
            g = 0,
            e = h.length,
            b = !0; h && e > f; f++)
                if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                    c = !1;
                    break
                }
            b = !1,
            h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
        }, k = {
            add: function() {
                if (h) {
                    var d = h.length;
                    !function f(b) {
                        m.each(b, function(b, c) {
                            var d = m.type(c);
                            "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
                        })
                    }(arguments),
                    b ? e = h.length : c && (g = d,
                    j(c))
                }
                return this
            },
            remove: function() {
                return h && m.each(arguments, function(a, c) {
                    var d;
                    while ((d = m.inArray(c, h, d)) > -1)
                        h.splice(d, 1),
                        b && (e >= d && e--,
                        f >= d && f--)
                }),
                this
            },
            has: function(a) {
                return a ? m.inArray(a, h) > -1 : !(!h || !h.length)
            },
            empty: function() {
                return h = [],
                e = 0,
                this
            },
            disable: function() {
                return h = i = c = void 0,
                this
            },
            disabled: function() {
                return !h
            },
            lock: function() {
                return i = void 0,
                c || k.disable(),
                this
            },
            locked: function() {
                return !i
            },
            fireWith: function(a, c) {
                return !h || d && !i || (c = c || [],
                c = [a, c.slice ? c.slice() : c],
                b ? i.push(c) : j(c)),
                this
            },
            fire: function() {
                return k.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!d
            }
        };
        return k
    }
    ,
    m.extend({
        Deferred: function(a) {
            var b = [["resolve", "done", m.Callbacks("once memory"), "resolved"], ["reject", "fail", m.Callbacks("once memory"), "rejected"], ["notify", "progress", m.Callbacks("memory")]]
              , c = "pending"
              , d = {
                state: function() {
                    return c
                },
                always: function() {
                    return e.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var a = arguments;
                    return m.Deferred(function(c) {
                        m.each(b, function(b, f) {
                            var g = m.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                            })
                        }),
                        a = null
                    }).promise()
                },
                promise: function(a) {
                    return null != a ? m.extend(a, d) : d
                }
            }
              , e = {};
            return d.pipe = d.then,
            m.each(b, function(a, f) {
                var g = f[2]
                  , h = f[3];
                d[f[1]] = g.add,
                h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock),
                e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments),
                    this
                }
                ,
                e[f[0] + "With"] = g.fireWith
            }),
            d.promise(e),
            a && a.call(e, e),
            e
        },
        when: function(a) {
            var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && m.isFunction(a.promise) ? e : 0, g = 1 === f ? a : m.Deferred(), h = function(a, b, c) {
                return function(e) {
                    b[a] = this,
                    c[a] = arguments.length > 1 ? d.call(arguments) : e,
                    c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                }
            }, i, j, k;
            if (e > 1)
                for (i = new Array(e),
                j = new Array(e),
                k = new Array(e); e > b; b++)
                    c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c),
            g.promise()
        }
    });
    var H;
    m.fn.ready = function(a) {
        return m.ready.promise().done(a),
        this
    }
    ,
    m.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? m.readyWait++ : m.ready(!0)
        },
        ready: function(a) {
            if (a === !0 ? !--m.readyWait : !m.isReady) {
                if (!y.body)
                    return setTimeout(m.ready);
                m.isReady = !0,
                a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]),
                m.fn.triggerHandler && (m(y).triggerHandler("ready"),
                m(y).off("ready")))
            }
        }
    });
    function I() {
        y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1),
        a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J),
        a.detachEvent("onload", J))
    }
    function J() {
        (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(),
        m.ready())
    }
    m.ready.promise = function(b) {
        if (!H)
            if (H = m.Deferred(),
            "complete" === y.readyState)
                setTimeout(m.ready);
            else if (y.addEventListener)
                y.addEventListener("DOMContentLoaded", J, !1),
                a.addEventListener("load", J, !1);
            else {
                y.attachEvent("onreadystatechange", J),
                a.attachEvent("onload", J);
                var c = !1;
                try {
                    c = null == a.frameElement && y.documentElement
                } catch (d) {}
                c && c.doScroll && !function e() {
                    if (!m.isReady) {
                        try {
                            c.doScroll("left")
                        } catch (a) {
                            return setTimeout(e, 50)
                        }
                        I(),
                        m.ready()
                    }
                }()
            }
        return H.promise(b)
    }
    ;
    var K = "undefined", L;
    for (L in m(k))
        break;
    k.ownLast = "0" !== L,
    k.inlineBlockNeedsLayout = !1,
    m(function() {
        var a, b, c, d;
        c = y.getElementsByTagName("body")[0],
        c && c.style && (b = y.createElement("div"),
        d = y.createElement("div"),
        d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
        c.appendChild(d).appendChild(b),
        typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
        k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth,
        a && (c.style.zoom = 1)),
        c.removeChild(d))
    }),
    function() {
        var a = y.createElement("div");
        if (null == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete a.test
            } catch (b) {
                k.deleteExpando = !1
            }
        }
        a = null
    }(),
    m.acceptData = function(a) {
        var b = m.noData[(a.nodeName + " ").toLowerCase()]
          , c = +a.nodeType || 1;
        return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
    }
    ;
    var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , N = /([A-Z])/g;
    function O(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(N, "-$1").toLowerCase();
            if (c = a.getAttribute(d),
            "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c
                } catch (e) {}
                m.data(a, b, c)
            } else
                c = void 0
        }
        return c
    }
    function P(a) {
        var b;
        for (b in a)
            if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b)
                return !1;
        return !0
    }
    function Q(a, b, d, e) {
        if (m.acceptData(a)) {
            var f, g, h = m.expando, i = a.nodeType, j = i ? m.cache : a, k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b)
                return k || (k = i ? a[h] = c.pop() || m.guid++ : h),
                j[k] || (j[k] = i ? {} : {
                    toJSON: m.noop
                }),
                ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)),
                g = j[k],
                e || (g.data || (g.data = {}),
                g = g.data),
                void 0 !== d && (g[m.camelCase(b)] = d),
                "string" == typeof b ? (f = g[b],
                null == f && (f = g[m.camelCase(b)])) : f = g,
                f
        }
    }
    function R(a, b, c) {
        if (m.acceptData(a)) {
            var d, e, f = a.nodeType, g = f ? m.cache : a, h = f ? a[m.expando] : m.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b),
                    b = b in d ? [b] : b.split(" ")),
                    e = b.length;
                    while (e--)
                        delete d[b[e]];
                    if (c ? !P(d) : !m.isEmptyObject(d))
                        return
                }
                (c || (delete g[h].data,
                P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
            }
        }
    }
    m.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando],
            !!a && !P(a)
        },
        data: function(a, b, c) {
            return Q(a, b, c)
        },
        removeData: function(a, b) {
            return R(a, b)
        },
        _data: function(a, b, c) {
            return Q(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return R(a, b, !0)
        }
    }),
    m.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = m.data(f),
                1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--)
                        g[c] && (d = g[c].name,
                        0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)),
                        O(f, d, e[d])));
                    m._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                m.data(this, a)
            }) : arguments.length > 1 ? this.each(function() {
                m.data(this, a, b)
            }) : f ? O(f, a, m.data(f, a)) : void 0
        },
        removeData: function(a) {
            return this.each(function() {
                m.removeData(this, a)
            })
        }
    }),
    m.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue",
            d = m._data(a, b),
            c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)),
            d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = m.queue(a, b)
              , d = c.length
              , e = c.shift()
              , f = m._queueHooks(a, b)
              , g = function() {
                m.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(),
            d--),
            e && ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
            !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return m._data(a, c) || m._data(a, c, {
                empty: m.Callbacks("once memory").add(function() {
                    m._removeData(a, b + "queue"),
                    m._removeData(a, c)
                })
            })
        }
    }),
    m.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a,
            a = "fx",
            c--),
            arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = m.queue(this, a, b);
                m._queueHooks(this, a),
                "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                m.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1, e = m.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [f])
            };
            "string" != typeof a && (b = a,
            a = void 0),
            a = a || "fx";
            while (g--)
                c = m._data(f[g], a + "queueHooks"),
                c && c.empty && (d++,
                c.empty.add(h));
            return h(),
            e.promise(b)
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , T = ["Top", "Right", "Bottom", "Left"]
      , U = function(a, b) {
        return a = b || a,
        "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a)
    }
      , V = m.access = function(a, b, c, d, e, f, g) {
        var h = 0
          , i = a.length
          , j = null == c;
        if ("object" === m.type(c)) {
            e = !0;
            for (h in c)
                m.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0,
        m.isFunction(d) || (g = !0),
        j && (g ? (b.call(a, d),
        b = null) : (j = b,
        b = function(a, b, c) {
            return j.call(m(a), c)
        }
        )),
        b))
            for (; i > h; h++)
                b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    }
      , W = /^(?:checkbox|radio)$/i;
    !function() {
        var a = y.createElement("input")
          , b = y.createElement("div")
          , c = y.createDocumentFragment();
        if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        k.leadingWhitespace = 3 === b.firstChild.nodeType,
        k.tbody = !b.getElementsByTagName("tbody").length,
        k.htmlSerialize = !!b.getElementsByTagName("link").length,
        k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML,
        a.type = "checkbox",
        a.checked = !0,
        c.appendChild(a),
        k.appendChecked = a.checked,
        b.innerHTML = "<textarea>x</textarea>",
        k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue,
        c.appendChild(b),
        b.innerHTML = "<input type='radio' checked='checked' name='t'/>",
        k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked,
        k.noCloneEvent = !0,
        b.attachEvent && (b.attachEvent("onclick", function() {
            k.noCloneEvent = !1
        }),
        b.cloneNode(!0).click()),
        null == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete b.test
            } catch (d) {
                k.deleteExpando = !1
            }
        }
    }(),
    function() {
        var b, c, d = y.createElement("div");
        for (b in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            c = "on" + b,
            (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"),
            k[b + "Bubbles"] = d.attributes[c].expando === !1);
        d = null
    }();
    var X = /^(?:input|select|textarea)$/i
      , Y = /^key/
      , Z = /^(?:mouse|pointer|contextmenu)|click/
      , $ = /^(?:focusinfocus|focusoutblur)$/
      , _ = /^([^.]*)(?:\.(.+)|)$/;
    function ab() {
        return !0
    }
    function bb() {
        return !1
    }
    function cb() {
        try {
            return y.activeElement
        } catch (a) {}
    }
    m.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
            if (r) {
                c.handler && (i = c,
                c = i.handler,
                e = i.selector),
                c.guid || (c.guid = m.guid++),
                (g = r.events) || (g = r.events = {}),
                (k = r.handle) || (k = r.handle = function(a) {
                    return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments)
                }
                ,
                k.elem = a),
                b = (b || "").match(E) || [""],
                h = b.length;
                while (h--)
                    f = _.exec(b[h]) || [],
                    o = q = f[1],
                    p = (f[2] || "").split(".").sort(),
                    o && (j = m.event.special[o] || {},
                    o = (e ? j.delegateType : j.bindType) || o,
                    j = m.event.special[o] || {},
                    l = m.extend({
                        type: o,
                        origType: q,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && m.expr.match.needsContext.test(e),
                        namespace: p.join(".")
                    }, i),
                    (n = g[o]) || (n = g[o] = [],
                    n.delegateCount = 0,
                    j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))),
                    j.add && (j.add.call(a, l),
                    l.handler.guid || (l.handler.guid = c.guid)),
                    e ? n.splice(n.delegateCount++, 0, l) : n.push(l),
                    m.event.global[o] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(E) || [""],
                j = b.length;
                while (j--)
                    if (h = _.exec(b[j]) || [],
                    o = q = h[1],
                    p = (h[2] || "").split(".").sort(),
                    o) {
                        l = m.event.special[o] || {},
                        o = (d ? l.delegateType : l.bindType) || o,
                        n = k[o] || [],
                        h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        i = f = n.length;
                        while (f--)
                            g = n[f],
                            !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1),
                            g.selector && n.delegateCount--,
                            l.remove && l.remove.call(a, g));
                        i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle),
                        delete k[o])
                    } else
                        for (o in k)
                            m.event.remove(a, o + b[j], c, d, !0);
                m.isEmptyObject(k) && (delete r.handle,
                m._removeData(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, l, n, o = [d || y], p = j.call(b, "type") ? b.type : b, q = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = l = d = d || y,
            3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."),
            p = q.shift(),
            q.sort()),
            g = p.indexOf(":") < 0 && "on" + p,
            b = b[m.expando] ? b : new m.Event(p,"object" == typeof b && b),
            b.isTrigger = e ? 2 : 3,
            b.namespace = q.join("."),
            b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            b.result = void 0,
            b.target || (b.target = d),
            c = null == c ? [b] : m.makeArray(c, [b]),
            k = m.event.special[p] || {},
            e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                if (!e && !k.noBubble && !m.isWindow(d)) {
                    for (i = k.delegateType || p,
                    $.test(i + p) || (h = h.parentNode); h; h = h.parentNode)
                        o.push(h),
                        l = h;
                    l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a)
                }
                n = 0;
                while ((h = o[n++]) && !b.isPropagationStopped())
                    b.type = n > 1 ? i : k.bindType || p,
                    f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"),
                    f && f.apply(h, c),
                    f = g && h[g],
                    f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c),
                    b.result === !1 && b.preventDefault());
                if (b.type = p,
                !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
                    l = d[g],
                    l && (d[g] = null),
                    m.event.triggered = p;
                    try {
                        d[p]()
                    } catch (r) {}
                    m.event.triggered = void 0,
                    l && (d[g] = l)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = m.event.fix(a);
            var b, c, e, f, g, h = [], i = d.call(arguments), j = (m._data(this, "events") || {})[a.type] || [], k = m.event.special[a.type] || {};
            if (i[0] = a,
            a.delegateTarget = this,
            !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = m.event.handlers.call(this, a, j),
                b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem,
                    g = 0;
                    while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())
                        (!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e,
                        a.data = e.data,
                        c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i),
                        void 0 !== c && (a.result = c) === !1 && (a.preventDefault(),
                        a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (e = [],
                        f = 0; h > f; f++)
                            d = b[f],
                            c = d.selector + " ",
                            void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length),
                            e[c] && e.push(d);
                        e.length && g.push({
                            elem: i,
                            handlers: e
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }),
            g
        },
        fix: function(a) {
            if (a[m.expando])
                return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}),
            d = g.props ? this.props.concat(g.props) : this.props,
            a = new m.Event(f),
            b = d.length;
            while (b--)
                c = d[b],
                a[c] = f[c];
            return a.target || (a.target = f.srcElement || y),
            3 === a.target.nodeType && (a.target = a.target.parentNode),
            a.metaKey = !!a.metaKey,
            g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode),
                a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button, g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y,
                e = d.documentElement,
                c = d.body,
                a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0),
                a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)),
                !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g),
                a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
                a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== cb() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === cb() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                    !1) : void 0
                },
                _default: function(a) {
                    return m.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = m.extend(new m.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e),
            e.isDefaultPrevented() && c.preventDefault()
        }
    },
    m.removeEvent = y.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }
    : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === K && (a[d] = null),
        a.detachEvent(d, c))
    }
    ,
    m.Event = function(a, b) {
        return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a,
        this.type = a.type,
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ab : bb) : this.type = a,
        b && m.extend(this, b),
        this.timeStamp = a && a.timeStamp || m.now(),
        void (this[m.expando] = !0)) : new m.Event(a,b)
    }
    ,
    m.Event.prototype = {
        isDefaultPrevented: bb,
        isPropagationStopped: bb,
        isImmediatePropagationStopped: bb,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = ab,
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = ab,
            a && (a.stopPropagation && a.stopPropagation(),
            a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ab,
            a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    m.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        m.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType,
                c = f.handler.apply(this, arguments),
                a.type = b),
                c
            }
        }
    }),
    k.submitBubbles || (m.event.special.submit = {
        setup: function() {
            return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target
                  , c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;
                c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function(a) {
                    a._submit_bubble = !0
                }),
                m._data(c, "submitBubbles", !0))
            })
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble,
            this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit")
        }
    }),
    k.changeBubbles || (m.event.special.change = {
        setup: function() {
            return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }),
            m.event.add(this, "click._change", function(a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1),
                m.event.simulate("change", this, a, !0)
            })),
            !1) : void m.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0)
                }),
                m._data(b, "changeBubbles", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return m.event.remove(this, "._change"),
            !X.test(this.nodeName)
        }
    }),
    k.focusinBubbles || m.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            m.event.simulate(b, a.target, m.event.fix(a), !0)
        };
        m.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this
                  , e = m._data(d, b);
                e || d.addEventListener(a, c, !0),
                m._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this
                  , e = m._data(d, b) - 1;
                e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0),
                m._removeData(d, b))
            }
        }
    }),
    m.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b,
                b = void 0);
                for (f in a)
                    this.on(f, b, c, a[f], e);
                return this
            }
            if (null == c && null == d ? (d = b,
            c = b = void 0) : null == d && ("string" == typeof b ? (d = c,
            c = void 0) : (d = c,
            c = b,
            b = void 0)),
            d === !1)
                d = bb;
            else if (!d)
                return this;
            return 1 === e && (g = d,
            d = function(a) {
                return m().off(a),
                g.apply(this, arguments)
            }
            ,
            d.guid = g.guid || (g.guid = m.guid++)),
            this.each(function() {
                m.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)
                return d = a.handleObj,
                m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler),
                this;
            if ("object" == typeof a) {
                for (e in a)
                    this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b,
            b = void 0),
            c === !1 && (c = bb),
            this.each(function() {
                m.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                m.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? m.event.trigger(a, b, c, !0) : void 0
        }
    });
    function db(a) {
        var b = eb.split("|")
          , c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length)
                c.createElement(b.pop());
        return c
    }
    var eb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , fb = / jQuery\d+="(?:null|\d+)"/g
      , gb = new RegExp("<(?:" + eb + ")[\\s/>]","i")
      , hb = /^\s+/
      , ib = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , jb = /<([\w:]+)/
      , kb = /<tbody/i
      , lb = /<|&#?\w+;/
      , mb = /<(?:script|style|link)/i
      , nb = /checked\s*(?:[^=]|=\s*.checked.)/i
      , ob = /^$|\/(?:java|ecma)script/i
      , pb = /^true\/(.*)/
      , qb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , rb = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }
      , sb = db(y)
      , tb = sb.appendChild(y.createElement("div"));
    rb.optgroup = rb.option,
    rb.tbody = rb.tfoot = rb.colgroup = rb.caption = rb.thead,
    rb.th = rb.td;
    function ub(a, b) {
        var c, d, e = 0, f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [],
            c = a.childNodes || a; null != (d = c[e]); e++)
                !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ub(d, b));
        return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f
    }
    function vb(a) {
        W.test(a.type) && (a.defaultChecked = a.checked)
    }
    function wb(a, b) {
        return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function xb(a) {
        return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type,
        a
    }
    function yb(a) {
        var b = pb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"),
        a
    }
    function zb(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++)
            m._data(c, "globalEval", !b || m._data(b[d], "globalEval"))
    }
    function Ab(a, b) {
        if (1 === b.nodeType && m.hasData(a)) {
            var c, d, e, f = m._data(a), g = m._data(b, f), h = f.events;
            if (h) {
                delete g.handle,
                g.events = {};
                for (c in h)
                    for (d = 0,
                    e = h[c].length; e > d; d++)
                        m.event.add(b, c, h[c][d])
            }
            g.data && (g.data = m.extend({}, g.data))
        }
    }
    function Bb(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(),
            !k.noCloneEvent && b[m.expando]) {
                e = m._data(b);
                for (d in e.events)
                    m.removeEvent(b, d, e.handle);
                b.removeAttribute(m.expando)
            }
            "script" === c && b.text !== a.text ? (xb(b).text = a.text,
            yb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML),
            k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked,
            b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }
    m.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
            if (k.html5Clone || m.isXMLDoc(a) || !gb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (tb.innerHTML = a.outerHTML,
            tb.removeChild(f = tb.firstChild)),
            !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a)))
                for (d = ub(f),
                h = ub(a),
                g = 0; null != (e = h[g]); ++g)
                    d[g] && Bb(e, d[g]);
            if (b)
                if (c)
                    for (h = h || ub(a),
                    d = d || ub(f),
                    g = 0; null != (e = h[g]); g++)
                        Ab(e, d[g]);
                else
                    Ab(a, f);
            return d = ub(f, "script"),
            d.length > 0 && zb(d, !i && ub(a, "script")),
            d = h = e = null,
            f
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, l, n = a.length, o = db(b), p = [], q = 0; n > q; q++)
                if (f = a[q],
                f || 0 === f)
                    if ("object" === m.type(f))
                        m.merge(p, f.nodeType ? [f] : f);
                    else if (lb.test(f)) {
                        h = h || o.appendChild(b.createElement("div")),
                        i = (jb.exec(f) || ["", ""])[1].toLowerCase(),
                        l = rb[i] || rb._default,
                        h.innerHTML = l[1] + f.replace(ib, "<$1></$2>") + l[2],
                        e = l[0];
                        while (e--)
                            h = h.lastChild;
                        if (!k.leadingWhitespace && hb.test(f) && p.push(b.createTextNode(hb.exec(f)[0])),
                        !k.tbody) {
                            f = "table" !== i || kb.test(f) ? "<table>" !== l[1] || kb.test(f) ? 0 : h : h.firstChild,
                            e = f && f.childNodes.length;
                            while (e--)
                                m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j)
                        }
                        m.merge(p, h.childNodes),
                        h.textContent = "";
                        while (h.firstChild)
                            h.removeChild(h.firstChild);
                        h = o.lastChild
                    } else
                        p.push(b.createTextNode(f));
            h && o.removeChild(h),
            k.appendChecked || m.grep(ub(p, "input"), vb),
            q = 0;
            while (f = p[q++])
                if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f),
                h = ub(o.appendChild(f), "script"),
                g && zb(h),
                c)) {
                    e = 0;
                    while (f = h[e++])
                        ob.test(f.type || "") && c.push(f)
                }
            return h = null,
            o
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++)
                if ((b || m.acceptData(d)) && (f = d[i],
                g = f && j[f])) {
                    if (g.events)
                        for (e in g.events)
                            n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f],
                    l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null,
                    c.push(f))
                }
        }
    }),
    m.fn.extend({
        text: function(a) {
            return V(this, function(a) {
                return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++)
                b || 1 !== c.nodeType || m.cleanData(ub(c)),
                c.parentNode && (b && m.contains(c.ownerDocument, c) && zb(ub(c, "script")),
                c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && m.cleanData(ub(a, !1));
                while (a.firstChild)
                    a.removeChild(a.firstChild);
                a.options && m.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a,
            b = null == b ? a : b,
            this.map(function() {
                return m.clone(this, a, b)
            })
        },
        html: function(a) {
            return V(this, function(a) {
                var b = this[0] || {}
                  , c = 0
                  , d = this.length;
                if (void 0 === a)
                    return 1 === b.nodeType ? b.innerHTML.replace(fb, "") : void 0;
                if (!("string" != typeof a || mb.test(a) || !k.htmlSerialize && gb.test(a) || !k.leadingWhitespace && hb.test(a) || rb[(jb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(ib, "<$1></$2>");
                    try {
                        for (; d > c; c++)
                            b = this[c] || {},
                            1 === b.nodeType && (m.cleanData(ub(b, !1)),
                            b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode,
                m.cleanData(ub(this)),
                a && a.replaceChild(b, this)
            }),
            a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0, l = this.length, n = this, o = l - 1, p = a[0], q = m.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && nb.test(p))
                return this.each(function(c) {
                    var d = n.eq(c);
                    q && (a[0] = p.call(this, c, d.html())),
                    d.domManip(a, b)
                });
            if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this),
            c = i.firstChild,
            1 === i.childNodes.length && (i = c),
            c)) {
                for (g = m.map(ub(i, "script"), xb),
                f = g.length; l > j; j++)
                    d = i,
                    j !== o && (d = m.clone(d, !0, !0),
                    f && m.merge(g, ub(d, "script"))),
                    b.call(this[j], d, j);
                if (f)
                    for (h = g[g.length - 1].ownerDocument,
                    m.map(g, yb),
                    j = 0; f > j; j++)
                        d = g[j],
                        ob.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qb, "")));
                i = c = null
            }
            return this
        }
    }),
    m.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        m.fn[a] = function(a) {
            for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++)
                c = d === h ? this : this.clone(!0),
                m(g[d])[b](c),
                f.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Cb, Db = {};
    function Eb(b, c) {
        var d, e = m(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");
        return e.detach(),
        f
    }
    function Fb(a) {
        var b = y
          , c = Db[a];
        return c || (c = Eb(a, b),
        "none" !== c && c || (Cb = (Cb || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),
        b = (Cb[0].contentWindow || Cb[0].contentDocument).document,
        b.edit(),
        b.close(),
        c = Eb(a, b),
        Cb.detach()),
        Db[a] = c),
        c
    }
    !function() {
        var a;
        k.shrinkWrapBlocks = function() {
            if (null != a)
                return a;
            a = !1;
            var b, c, d;
            return c = y.getElementsByTagName("body")[0],
            c && c.style ? (b = y.createElement("div"),
            d = y.createElement("div"),
            d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
            c.appendChild(d).appendChild(b),
            typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
            b.appendChild(y.createElement("div")).style.width = "5px",
            a = 3 !== b.offsetWidth),
            c.removeChild(d),
            a) : void 0
        }
    }();
    var Gb = /^margin/, Hb = new RegExp("^(" + S + ")(?!px)[a-z%]+$","i"), Ib, Jb, Kb = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ib = function(a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null)
    }
    ,
    Jb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ib(a),
        g = c ? c.getPropertyValue(b) || c[b] : void 0,
        c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)),
        Hb.test(g) && Gb.test(b) && (d = h.width,
        e = h.minWidth,
        f = h.maxWidth,
        h.minWidth = h.maxWidth = h.width = g,
        g = c.width,
        h.width = d,
        h.minWidth = e,
        h.maxWidth = f)),
        void 0 === g ? g : g + ""
    }
    ) : y.documentElement.currentStyle && (Ib = function(a) {
        return a.currentStyle
    }
    ,
    Jb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ib(a),
        g = c ? c[b] : void 0,
        null == g && h && h[b] && (g = h[b]),
        Hb.test(g) && !Kb.test(b) && (d = h.left,
        e = a.runtimeStyle,
        f = e && e.left,
        f && (e.left = a.currentStyle.left),
        h.left = "fontSize" === b ? "1em" : g,
        g = h.pixelLeft + "px",
        h.left = d,
        f && (e.left = f)),
        void 0 === g ? g : g + "" || "auto"
    }
    );
    function Lb(a, b) {
        return {
            get: function() {
                var c = a();
                if (null != c)
                    return c ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    !function() {
        var b, c, d, e, f, g, h;
        if (b = y.createElement("div"),
        b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        d = b.getElementsByTagName("a")[0],
        c = d && d.style) {
            c.cssText = "float:left;opacity:.5",
            k.opacity = "0.5" === c.opacity,
            k.cssFloat = !!c.cssFloat,
            b.style.backgroundClip = "content-box",
            b.cloneNode(!0).style.backgroundClip = "",
            k.clearCloneStyle = "content-box" === b.style.backgroundClip,
            k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing,
            m.extend(k, {
                reliableHiddenOffsets: function() {
                    return null == g && i(),
                    g
                },
                boxSizingReliable: function() {
                    return null == f && i(),
                    f
                },
                pixelPosition: function() {
                    return null == e && i(),
                    e
                },
                reliableMarginRight: function() {
                    return null == h && i(),
                    h
                }
            });
            function i() {
                var b, c, d, i;
                c = y.getElementsByTagName("body")[0],
                c && c.style && (b = y.createElement("div"),
                d = y.createElement("div"),
                d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                c.appendChild(d).appendChild(b),
                b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
                e = f = !1,
                h = !0,
                a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top,
                f = "4px" === (a.getComputedStyle(b, null) || {
                    width: "4px"
                }).width,
                i = b.appendChild(y.createElement("div")),
                i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                i.style.marginRight = i.style.width = "0",
                b.style.width = "1px",
                h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight)),
                b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                i = b.getElementsByTagName("td"),
                i[0].style.cssText = "margin:0;border:0;padding:0;display:none",
                g = 0 === i[0].offsetHeight,
                g && (i[0].style.display = "",
                i[1].style.display = "none",
                g = 0 === i[0].offsetHeight),
                c.removeChild(d))
            }
        }
    }(),
    m.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b)
            g[f] = a.style[f],
            a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)
            a.style[f] = g[f];
        return e
    }
    ;
    var Mb = /alpha\([^)]*\)/i
      , Nb = /opacity\s*=\s*([^)]*)/
      , Ob = /^(none|table(?!-c[ea]).+)/
      , Pb = new RegExp("^(" + S + ")(.*)$","i")
      , Qb = new RegExp("^([+-])=(" + S + ")","i")
      , Rb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Sb = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Tb = ["Webkit", "O", "Moz", "ms"];
    function Ub(a, b) {
        if (b in a)
            return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1)
          , d = b
          , e = Tb.length;
        while (e--)
            if (b = Tb[e] + c,
            b in a)
                return b;
        return d
    }
    function Vb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
            d = a[g],
            d.style && (f[g] = m._data(d, "olddisplay"),
            c = d.style.display,
            b ? (f[g] || "none" !== c || (d.style.display = ""),
            "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fb(d.nodeName)))) : (e = U(d),
            (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display"))));
        for (g = 0; h > g; g++)
            d = a[g],
            d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    function Wb(a, b, c) {
        var d = Pb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function Xb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
            "margin" === c && (g += m.css(a, c + T[f], !0, e)),
            d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)),
            "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e),
            "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e)));
        return g
    }
    function Yb(a, b, c) {
        var d = !0
          , e = "width" === b ? a.offsetWidth : a.offsetHeight
          , f = Ib(a)
          , g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Jb(a, b, f),
            (0 > e || null == e) && (e = a.style[b]),
            Hb.test(e))
                return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]),
            e = parseFloat(e) || 0
        }
        return e + Xb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    m.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Jb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": k.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = m.camelCase(b), i = a.style;
                if (b = m.cssProps[h] || (m.cssProps[h] = Ub(i, h)),
                g = m.cssHooks[b] || m.cssHooks[h],
                void 0 === c)
                    return g && "get"in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c,
                "string" === f && (e = Qb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)),
                f = "number"),
                null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"),
                k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"),
                !(g && "set"in g && void 0 === (c = g.set(a, c, d)))))
                    try {
                        i[b] = c
                    } catch (j) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = m.camelCase(b);
            return b = m.cssProps[h] || (m.cssProps[h] = Ub(a.style, h)),
            g = m.cssHooks[b] || m.cssHooks[h],
            g && "get"in g && (f = g.get(a, !0, c)),
            void 0 === f && (f = Jb(a, b, d)),
            "normal" === f && b in Sb && (f = Sb[b]),
            "" === c || c ? (e = parseFloat(f),
            c === !0 || m.isNumeric(e) ? e || 0 : f) : f
        }
    }),
    m.each(["height", "width"], function(a, b) {
        m.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Ob.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Rb, function() {
                    return Yb(a, b, d)
                }) : Yb(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Ib(a);
                return Wb(a, c, d ? Xb(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }),
    k.opacity || (m.cssHooks.opacity = {
        get: function(a, b) {
            return Nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style
              , d = a.currentStyle
              , e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : ""
              , f = d && d.filter || c.filter || "";
            c.zoom = 1,
            (b >= 1 || "" === b) && "" === m.trim(f.replace(Mb, "")) && c.removeAttribute && (c.removeAttribute("filter"),
            "" === b || d && !d.filter) || (c.filter = Mb.test(f) ? f.replace(Mb, e) : f + " " + e)
        }
    }),
    m.cssHooks.marginRight = Lb(k.reliableMarginRight, function(a, b) {
        return b ? m.swap(a, {
            display: "inline-block"
        }, Jb, [a, "marginRight"]) : void 0
    }),
    m.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        m.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
                    e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        },
        Gb.test(a) || (m.cssHooks[a + b].set = Wb)
    }),
    m.fn.extend({
        css: function(a, b) {
            return V(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (m.isArray(b)) {
                    for (d = Ib(a),
                    e = b.length; e > g; g++)
                        f[b[g]] = m.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? m.style(a, b, c) : m.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Vb(this, !0)
        },
        hide: function() {
            return Vb(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                U(this) ? m(this).show() : m(this).hide()
            })
        }
    });
    function Zb(a, b, c, d, e) {
        return new Zb.prototype.init(a,b,c,d,e)
    }
    m.Tween = Zb,
    Zb.prototype = {
        constructor: Zb,
        init: function(a, b, c, d, e, f) {
            this.elem = a,
            this.prop = c,
            this.easing = e || "swing",
            this.options = b,
            this.start = this.now = this.cur(),
            this.end = d,
            this.unit = f || (m.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Zb.propHooks[this.prop];
            return a && a.get ? a.get(this) : Zb.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Zb.propHooks[this.prop];
            return this.pos = b = this.options.duration ? m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a,
            this.now = (this.end - this.start) * b + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            c && c.set ? c.set(this) : Zb.propHooks._default.set(this),
            this
        }
    },
    Zb.prototype.init.prototype = Zb.prototype,
    Zb.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""),
                b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    },
    Zb.propHooks.scrollTop = Zb.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    },
    m.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    },
    m.fx = Zb.prototype.init,
    m.fx.step = {};
    var $b, _b, ac = /^(?:toggle|show|hide)$/, bc = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$","i"), cc = /queueHooks$/, dc = [ic], ec = {
        "*": [function(a, b) {
            var c = this.createTween(a, b)
              , d = c.cur()
              , e = bc.exec(b)
              , f = e && e[3] || (m.cssNumber[a] ? "" : "px")
              , g = (m.cssNumber[a] || "px" !== f && +d) && bc.exec(m.css(c.elem, a))
              , h = 1
              , i = 20;
            if (g && g[3] !== f) {
                f = f || g[3],
                e = e || [],
                g = +d || 1;
                do
                    h = h || ".5",
                    g /= h,
                    m.style(c.elem, a, g + f);
                while (h !== (h = c.cur() / d) && 1 !== h && --i)
            }
            return e && (g = c.start = +g || +d || 0,
            c.unit = f,
            c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]),
            c
        }
        ]
    };
    function fc() {
        return setTimeout(function() {
            $b = void 0
        }),
        $b = m.now()
    }
    function gc(a, b) {
        var c, d = {
            height: a
        }, e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b)
            c = T[e],
            d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a),
        d
    }
    function hc(a, b, c) {
        for (var d, e = (ec[b] || []).concat(ec["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a))
                return d
    }
    function ic(a, b, c) {
        var d, e, f, g, h, i, j, l, n = this, o = {}, p = a.style, q = a.nodeType && U(a), r = m._data(a, "fxshow");
        c.queue || (h = m._queueHooks(a, "fx"),
        null == h.unqueued && (h.unqueued = 0,
        i = h.empty.fire,
        h.empty.fire = function() {
            h.unqueued || i()
        }
        ),
        h.unqueued++,
        n.always(function() {
            n.always(function() {
                h.unqueued--,
                m.queue(a, "fx").length || h.empty.fire()
            })
        })),
        1 === a.nodeType && ("height"in b || "width"in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY],
        j = m.css(a, "display"),
        l = "none" === j ? m._data(a, "olddisplay") || Fb(a.nodeName) : j,
        "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fb(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")),
        c.overflow && (p.overflow = "hidden",
        k.shrinkWrapBlocks() || n.always(function() {
            p.overflow = c.overflow[0],
            p.overflowX = c.overflow[1],
            p.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d],
            ac.exec(e)) {
                if (delete b[d],
                f = f || "toggle" === e,
                e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d])
                        continue;
                    q = !0
                }
                o[d] = r && r[d] || m.style(a, d)
            } else
                j = void 0;
        if (m.isEmptyObject(o))
            "inline" === ("none" === j ? Fb(a.nodeName) : j) && (p.display = j);
        else {
            r ? "hidden"in r && (q = r.hidden) : r = m._data(a, "fxshow", {}),
            f && (r.hidden = !q),
            q ? m(a).show() : n.done(function() {
                m(a).hide()
            }),
            n.done(function() {
                var b;
                m._removeData(a, "fxshow");
                for (b in o)
                    m.style(a, b, o[b])
            });
            for (d in o)
                g = hc(q ? r[d] : 0, d, n),
                d in r || (r[d] = g.start,
                q && (g.end = g.start,
                g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }
    function jc(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = m.camelCase(c),
            e = b[d],
            f = a[c],
            m.isArray(f) && (e = f[1],
            f = a[c] = f[0]),
            c !== d && (a[d] = f,
            delete a[c]),
            g = m.cssHooks[d],
            g && "expand"in g) {
                f = g.expand(f),
                delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c],
                    b[c] = e)
            } else
                b[d] = e
    }
    function kc(a, b, c) {
        var d, e, f = 0, g = dc.length, h = m.Deferred().always(function() {
            delete i.elem
        }), i = function() {
            if (e)
                return !1;
            for (var b = $b || fc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
                j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]),
            1 > f && i ? c : (h.resolveWith(a, [j]),
            !1)
        }, j = h.promise({
            elem: a,
            props: m.extend({}, b),
            opts: m.extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: $b || fc(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d),
                d
            },
            stop: function(b) {
                var c = 0
                  , d = b ? j.tweens.length : 0;
                if (e)
                    return this;
                for (e = !0; d > c; c++)
                    j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]),
                this
            }
        }), k = j.props;
        for (jc(k, j.opts.specialEasing); g > f; f++)
            if (d = dc[f].call(j, a, k, j.opts))
                return d;
        return m.map(k, hc, j),
        m.isFunction(j.opts.start) && j.opts.start.call(a, j),
        m.fx.timer(m.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })),
        j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    m.Animation = m.extend(kc, {
        tweener: function(a, b) {
            m.isFunction(a) ? (b = a,
            a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++)
                c = a[d],
                ec[c] = ec[c] || [],
                ec[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? dc.unshift(a) : dc.push(a)
        }
    }),
    m.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? m.extend({}, a) : {
            complete: c || !c && b || m.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !m.isFunction(b) && b
        };
        return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default,
        (null == d.queue || d.queue === !0) && (d.queue = "fx"),
        d.old = d.complete,
        d.complete = function() {
            m.isFunction(d.old) && d.old.call(this),
            d.queue && m.dequeue(this, d.queue)
        }
        ,
        d
    }
    ,
    m.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(U).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = m.isEmptyObject(a)
              , f = m.speed(b, c, d)
              , g = function() {
                var b = kc(this, m.extend({}, a), f);
                (e || m._data(this, "finish")) && b.stop(!0)
            };
            return g.finish = g,
            e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop,
                b(c)
            };
            return "string" != typeof a && (c = b,
            b = a,
            a = void 0),
            b && a !== !1 && this.queue(a || "fx", []),
            this.each(function() {
                var b = !0
                  , e = null != a && a + "queueHooks"
                  , f = m.timers
                  , g = m._data(this);
                if (e)
                    g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g)
                        g[e] && g[e].stop && cc.test(e) && d(g[e]);
                for (e = f.length; e--; )
                    f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c),
                    b = !1,
                    f.splice(e, 1));
                (b || !c) && m.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"),
            this.each(function() {
                var b, c = m._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = m.timers, g = d ? d.length : 0;
                for (c.finish = !0,
                m.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length; b--; )
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0),
                    f.splice(b, 1));
                for (b = 0; g > b; b++)
                    d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }),
    m.each(["toggle", "show", "hide"], function(a, b) {
        var c = m.fn[b];
        m.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gc(b, !0), a, d, e)
        }
    }),
    m.each({
        slideDown: gc("show"),
        slideUp: gc("hide"),
        slideToggle: gc("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        m.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }),
    m.timers = [],
    m.fx.tick = function() {
        var a, b = m.timers, c = 0;
        for ($b = m.now(); c < b.length; c++)
            a = b[c],
            a() || b[c] !== a || b.splice(c--, 1);
        b.length || m.fx.stop(),
        $b = void 0
    }
    ,
    m.fx.timer = function(a) {
        m.timers.push(a),
        a() ? m.fx.start() : m.timers.pop()
    }
    ,
    m.fx.interval = 13,
    m.fx.start = function() {
        _b || (_b = setInterval(m.fx.tick, m.fx.interval))
    }
    ,
    m.fx.stop = function() {
        clearInterval(_b),
        _b = null
    }
    ,
    m.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    m.fn.delay = function(a, b) {
        return a = m.fx ? m.fx.speeds[a] || a : a,
        b = b || "fx",
        this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d)
            }
        })
    }
    ,
    function() {
        var a, b, c, d, e;
        b = y.createElement("div"),
        b.setAttribute("className", "t"),
        b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        d = b.getElementsByTagName("a")[0],
        c = y.createElement("select"),
        e = c.appendChild(y.createElement("option")),
        a = b.getElementsByTagName("input")[0],
        d.style.cssText = "top:1px",
        k.getSetAttribute = "t" !== b.className,
        k.style = /top/.test(d.getAttribute("style")),
        k.hrefNormalized = "/a" === d.getAttribute("href"),
        k.checkOn = !!a.value,
        k.optSelected = e.selected,
        k.enctype = !!y.createElement("form").enctype,
        c.disabled = !0,
        k.optDisabled = !e.disabled,
        a = y.createElement("input"),
        a.setAttribute("value", ""),
        k.input = "" === a.getAttribute("value"),
        a.value = "t",
        a.setAttribute("type", "radio"),
        k.radioValue = "t" === a.value
    }();
    var lc = /\r/g;
    m.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)
                    return d = m.isFunction(a),
                    this.each(function(c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a,
                        null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function(a) {
                            return null == a ? "" : a + ""
                        })),
                        b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()],
                        b && "set"in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                    });
                if (e)
                    return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()],
                    b && "get"in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value,
                    "string" == typeof c ? c.replace(lc, "") : null == c ? "" : c)
            }
        }
    }),
    m.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = m.find.attr(a, "value");
                    return null != b ? b : m.trim(m.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i],
                        !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
                            if (b = m(c).val(),
                            f)
                                return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options, f = m.makeArray(b), g = e.length;
                    while (g--)
                        if (d = e[g],
                        m.inArray(m.valHooks.option.get(d), f) >= 0)
                            try {
                                d.selected = c = !0
                            } catch (h) {
                                d.scrollHeight
                            }
                        else
                            d.selected = !1;
                    return c || (a.selectedIndex = -1),
                    e
                }
            }
        }
    }),
    m.each(["radio", "checkbox"], function() {
        m.valHooks[this] = {
            set: function(a, b) {
                return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0
            }
        },
        k.checkOn || (m.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        }
        )
    });
    var mc, nc, oc = m.expr.attrHandle, pc = /^(?:checked|selected)$/i, qc = k.getSetAttribute, rc = k.input;
    m.fn.extend({
        attr: function(a, b) {
            return V(this, m.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                m.removeAttr(this, a)
            })
        }
    }),
    m.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f)
                return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(),
                d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nc : mc)),
                void 0 === c ? d && "get"in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b),
                null == e ? void 0 : e) : null !== c ? d && "set"in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""),
                c) : void m.removeAttr(a, b))
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(E);
            if (f && 1 === a.nodeType)
                while (c = f[e++])
                    d = m.propFix[c] || c,
                    m.expr.match.bool.test(c) ? rc && qc || !pc.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""),
                    a.removeAttribute(qc ? c : d)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b),
                        c && (a.value = c),
                        b
                    }
                }
            }
        }
    }),
    nc = {
        set: function(a, b, c) {
            return b === !1 ? m.removeAttr(a, c) : rc && qc || !pc.test(c) ? a.setAttribute(!qc && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0,
            c
        }
    },
    m.each(m.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = oc[b] || m.find.attr;
        oc[b] = rc && qc || !pc.test(b) ? function(a, b, d) {
            var e, f;
            return d || (f = oc[b],
            oc[b] = e,
            e = null != c(a, b, d) ? b.toLowerCase() : null,
            oc[b] = f),
            e
        }
        : function(a, b, c) {
            return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }),
    rc && qc || (m.attrHooks.value = {
        set: function(a, b, c) {
            return m.nodeName(a, "input") ? void (a.defaultValue = b) : mc && mc.set(a, b, c)
        }
    }),
    qc || (mc = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)),
            d.value = b += "",
            "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    },
    oc.id = oc.name = oc.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }
    ,
    m.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: mc.set
    },
    m.attrHooks.contenteditable = {
        set: function(a, b, c) {
            mc.set(a, "" === b ? !1 : b, c)
        }
    },
    m.each(["width", "height"], function(a, b) {
        m.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"),
                c) : void 0
            }
        }
    })),
    k.style || (m.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var sc = /^(?:input|select|textarea|button|object)$/i
      , tc = /^(?:a|area)$/i;
    m.fn.extend({
        prop: function(a, b) {
            return V(this, m.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = m.propFix[a] || a,
            this.each(function() {
                try {
                    this[a] = void 0,
                    delete this[a]
                } catch (b) {}
            })
        }
    }),
    m.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g)
                return f = 1 !== g || !m.isXMLDoc(a),
                f && (b = m.propFix[b] || b,
                e = m.propHooks[b]),
                void 0 !== c ? e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get"in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = m.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : sc.test(a.nodeName) || tc.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    }),
    k.hrefNormalized || m.each(["href", "src"], function(a, b) {
        m.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }),
    k.optSelected || (m.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex,
            b.parentNode && b.parentNode.selectedIndex),
            null
        }
    }),
    m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        m.propFix[this.toLowerCase()] = this
    }),
    k.enctype || (m.propFix.enctype = "encoding");
    var uc = /[\t\r\n\f]/g;
    m.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = "string" == typeof a && a;
            if (m.isFunction(a))
                return this.each(function(b) {
                    m(this).addClass(a.call(this, b, this.className))
                });
            if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h],
                    d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : " ")) {
                        f = 0;
                        while (e = b[f++])
                            d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = m.trim(d),
                        c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = 0 === arguments.length || "string" == typeof a && a;
            if (m.isFunction(a))
                return this.each(function(b) {
                    m(this).removeClass(a.call(this, b, this.className))
                });
            if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h],
                    d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : "")) {
                        f = 0;
                        while (e = b[f++])
                            while (d.indexOf(" " + e + " ") >= 0)
                                d = d.replace(" " + e + " ", " ");
                        g = a ? m.trim(d) : "",
                        c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function(c) {
                m(this).toggleClass(a.call(this, c, this.className, b), b)
            }
            : function() {
                if ("string" === c) {
                    var b, d = 0, e = m(this), f = a.match(E) || [];
                    while (b = f[d++])
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else
                    (c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className),
                    this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "")
            }
            )
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(uc, " ").indexOf(b) >= 0)
                    return !0;
            return !1
        }
    }),
    m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        m.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }),
    m.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var vc = m.now()
      , wc = /\?/
      , xc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    m.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse)
            return a.JSON.parse(b + "");
        var c, d = null, e = m.trim(b + "");
        return e && !m.trim(e.replace(xc, function(a, b, e, f) {
            return c && b && (d = 0),
            0 === d ? a : (c = e || b,
            d += !f - !e,
            "")
        })) ? Function("return " + e)() : m.error("Invalid JSON: " + b)
    }
    ,
    m.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b)
            return null;
        try {
            a.DOMParser ? (d = new DOMParser,
            c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"),
            c.async = "false",
            c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b),
        c
    }
    ;
    var yc, zc, Ac = /#.*$/, Bc = /([?&])_=[^&]*/, Cc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Dc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Ec = /^(?:GET|HEAD)$/, Fc = /^\/\//, Gc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Hc = {}, Ic = {}, Jc = "*/".concat("*");
    try {
        zc = location.href
    } catch (Kc) {
        zc = y.createElement("a"),
        zc.href = "",
        zc = zc.href
    }
    yc = Gc.exec(zc.toLowerCase()) || [];
    function Lc(a) {
        return function(b, c) {
            "string" != typeof b && (c = b,
            b = "*");
            var d, e = 0, f = b.toLowerCase().match(E) || [];
            if (m.isFunction(c))
                while (d = f[e++])
                    "+" === d.charAt(0) ? (d = d.slice(1) || "*",
                    (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function Mc(a, b, c, d) {
        var e = {}
          , f = a === Ic;
        function g(h) {
            var i;
            return e[h] = !0,
            m.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j),
                g(j),
                !1)
            }),
            i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }
    function Nc(a, b) {
        var c, d, e = m.ajaxSettings.flatOptions || {};
        for (d in b)
            void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && m.extend(!0, a, c),
        a
    }
    function Oc(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0])
            i.shift(),
            void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0]in c)
            f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f),
        c[f]) : void 0
    }
    function Pc(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters)
                j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b),
            !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
            i = f,
            f = k.shift())
                if ("*" === f)
                    f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f],
                    !g)
                        for (e in j)
                            if (h = e.split(" "),
                            h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0],
                                k.unshift(h[1]));
                                break
                            }
                    if (g !== !0)
                        if (g && a["throws"])
                            b = g(b);
                        else
                            try {
                                b = g(b)
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: g ? l : "No conversion from " + i + " to " + f
                                }
                            }
                }
        return {
            state: "success",
            data: b
        }
    }
    m.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: zc,
            type: "GET",
            isLocal: Dc.test(yc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Jc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": m.parseJSON,
                "text xml": m.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Nc(Nc(a, m.ajaxSettings), b) : Nc(m.ajaxSettings, a)
        },
        ajaxPrefilter: Lc(Hc),
        ajaxTransport: Lc(Ic),
        ajax: function(a, b) {
            "object" == typeof a && (b = a,
            a = void 0),
            b = b || {};
            var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b), l = k.context || k, n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event, o = m.Deferred(), p = m.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === t) {
                        if (!j) {
                            j = {};
                            while (b = Cc.exec(f))
                                j[b[1].toLowerCase()] = b[2]
                        }
                        b = j[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },
                getAllResponseHeaders: function() {
                    return 2 === t ? f : null
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a,
                    r[a] = b),
                    this
                },
                overrideMimeType: function(a) {
                    return t || (k.mimeType = a),
                    this
                },
                statusCode: function(a) {
                    var b;
                    if (a)
                        if (2 > t)
                            for (b in a)
                                q[b] = [q[b], a[b]];
                        else
                            v.always(a[v.status]);
                    return this
                },
                abort: function(a) {
                    var b = a || u;
                    return i && i.abort(b),
                    x(0, b),
                    this
                }
            };
            if (o.promise(v).complete = p.add,
            v.success = v.done,
            v.error = v.fail,
            k.url = ((a || k.url || zc) + "").replace(Ac, "").replace(Fc, yc[1] + "//"),
            k.type = b.method || b.type || k.method || k.type,
            k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""],
            null == k.crossDomain && (c = Gc.exec(k.url.toLowerCase()),
            k.crossDomain = !(!c || c[1] === yc[1] && c[2] === yc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yc[3] || ("http:" === yc[1] ? "80" : "443")))),
            k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)),
            Mc(Hc, k, b, v),
            2 === t)
                return v;
            h = k.global,
            h && 0 === m.active++ && m.event.trigger("ajaxStart"),
            k.type = k.type.toUpperCase(),
            k.hasContent = !Ec.test(k.type),
            e = k.url,
            k.hasContent || (k.data && (e = k.url += (wc.test(e) ? "&" : "?") + k.data,
            delete k.data),
            k.cache === !1 && (k.url = Bc.test(e) ? e.replace(Bc, "$1_=" + vc++) : e + (wc.test(e) ? "&" : "?") + "_=" + vc++)),
            k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]),
            m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])),
            (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType),
            v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jc + "; q=0.01" : "") : k.accepts["*"]);
            for (d in k.headers)
                v.setRequestHeader(d, k.headers[d]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))
                return v.abort();
            u = "abort";
            for (d in {
                success: 1,
                error: 1,
                complete: 1
            })
                v[d](k[d]);
            if (i = Mc(Ic, k, b, v)) {
                v.readyState = 1,
                h && n.trigger("ajaxSend", [v, k]),
                k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1,
                    i.send(r, x)
                } catch (w) {
                    if (!(2 > t))
                        throw w;
                    x(-1, w)
                }
            } else
                x(-1, "No Transport");
            function x(a, b, c, d) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2,
                g && clearTimeout(g),
                i = void 0,
                f = d || "",
                v.readyState = a > 0 ? 4 : 0,
                j = a >= 200 && 300 > a || 304 === a,
                c && (u = Oc(k, v, c)),
                u = Pc(k, u, v, j),
                j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"),
                w && (m.lastModified[e] = w),
                w = v.getResponseHeader("etag"),
                w && (m.etag[e] = w)),
                204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state,
                r = u.data,
                s = u.error,
                j = !s)) : (s = x,
                (a || !x) && (x = "error",
                0 > a && (a = 0))),
                v.status = a,
                v.statusText = (b || x) + "",
                j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]),
                v.statusCode(q),
                q = void 0,
                h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]),
                p.fireWith(l, [v, x]),
                h && (n.trigger("ajaxComplete", [v, k]),
                --m.active || m.event.trigger("ajaxStop")))
            }
            return v
        },
        getJSON: function(a, b, c) {
            return m.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return m.get(a, void 0, b, "script")
        }
    }),
    m.each(["get", "post"], function(a, b) {
        m[b] = function(a, c, d, e) {
            return m.isFunction(c) && (e = e || d,
            d = c,
            c = void 0),
            m.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }),
    m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        m.fn[b] = function(a) {
            return this.on(b, a)
        }
    }),
    m._evalUrl = function(a) {
        return m.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    m.fn.extend({
        wrapAll: function(a) {
            if (m.isFunction(a))
                return this.each(function(b) {
                    m(this).wrapAll(a.call(this, b))
                });
            if (this[0]) {
                var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]),
                b.map(function() {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType)
                        a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return this.each(m.isFunction(a) ? function(b) {
                m(this).wrapInner(a.call(this, b))
            }
            : function() {
                var b = m(this)
                  , c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            }
            )
        },
        wrap: function(a) {
            var b = m.isFunction(a);
            return this.each(function(c) {
                m(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                m.nodeName(this, "body") || m(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    m.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"))
    }
    ,
    m.expr.filters.visible = function(a) {
        return !m.expr.filters.hidden(a)
    }
    ;
    var Qc = /%20/g
      , Rc = /\[\]$/
      , Sc = /\r?\n/g
      , Tc = /^(?:submit|button|image|reset|file)$/i
      , Uc = /^(?:input|select|textarea|keygen)/i;
    function Vc(a, b, c, d) {
        var e;
        if (m.isArray(b))
            m.each(b, function(b, e) {
                c || Rc.test(a) ? d(a, e) : Vc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            });
        else if (c || "object" !== m.type(b))
            d(a, b);
        else
            for (e in b)
                Vc(a + "[" + e + "]", b[e], c, d)
    }
    m.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = m.isFunction(b) ? b() : null == b ? "" : b,
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional),
        m.isArray(a) || a.jquery && !m.isPlainObject(a))
            m.each(a, function() {
                e(this.name, this.value)
            });
        else
            for (c in a)
                Vc(c, a[c], b, e);
        return d.join("&").replace(Qc, "+")
    }
    ,
    m.fn.extend({
        serialize: function() {
            return m.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = m.prop(this, "elements");
                return a ? m.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !m(this).is(":disabled") && Uc.test(this.nodeName) && !Tc.test(a) && (this.checked || !W.test(a))
            }).map(function(a, b) {
                var c = m(this).val();
                return null == c ? null : m.isArray(c) ? m.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Sc, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Sc, "\r\n")
                }
            }).get()
        }
    }),
    m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zc() || $c()
    }
    : Zc;
    var Wc = 0
      , Xc = {}
      , Yc = m.ajaxSettings.xhr();
    a.ActiveXObject && m(a).on("unload", function() {
        for (var a in Xc)
            Xc[a](void 0, !0)
    }),
    k.cors = !!Yc && "withCredentials"in Yc,
    Yc = k.ajax = !!Yc,
    Yc && m.ajaxTransport(function(a) {
        if (!a.crossDomain || k.cors) {
            var b;
            return {
                send: function(c, d) {
                    var e, f = a.xhr(), g = ++Wc;
                    if (f.open(a.type, a.url, a.async, a.username, a.password),
                    a.xhrFields)
                        for (e in a.xhrFields)
                            f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType),
                    a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c)
                        void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null),
                    b = function(c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState))
                            if (delete Xc[g],
                            b = void 0,
                            f.onreadystatechange = m.noop,
                            e)
                                4 !== f.readyState && f.abort();
                            else {
                                j = {},
                                h = f.status,
                                "string" == typeof f.responseText && (j.text = f.responseText);
                                try {
                                    i = f.statusText
                                } catch (k) {
                                    i = ""
                                }
                                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                            }
                        j && d(h, i, j, f.getAllResponseHeaders())
                    }
                    ,
                    a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xc[g] = b : b()
                },
                abort: function() {
                    b && b(void 0, !0)
                }
            }
        }
    });
    function Zc() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }
    function $c() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    m.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return m.globalEval(a),
                a
            }
        }
    }),
    m.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1),
        a.crossDomain && (a.type = "GET",
        a.global = !1)
    }),
    m.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = y.head || m("head")[0] || y.documentElement;
            return {
                send: function(d, e) {
                    b = y.createElement("script"),
                    b.async = !0,
                    a.scriptCharset && (b.charset = a.scriptCharset),
                    b.src = a.url,
                    b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null,
                        b.parentNode && b.parentNode.removeChild(b),
                        b = null,
                        c || e(200, "success"))
                    }
                    ,
                    c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var _c = []
      , ad = /(=)\?(?=&|$)|\?\?/;
    m.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = _c.pop() || m.expando + "_" + vc++;
            return this[a] = !0,
            a
        }
    }),
    m.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (ad.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ad.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
        h ? b[h] = b[h].replace(ad, "$1" + e) : b.jsonp !== !1 && (b.url += (wc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
        b.converters["script json"] = function() {
            return g || m.error(e + " was not called"),
            g[0]
        }
        ,
        b.dataTypes[0] = "json",
        f = a[e],
        a[e] = function() {
            g = arguments
        }
        ,
        d.always(function() {
            a[e] = f,
            b[e] && (b.jsonpCallback = c.jsonpCallback,
            _c.push(e)),
            g && m.isFunction(f) && f(g[0]),
            g = f = void 0
        }),
        "script") : void 0
    }),
    m.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a)
            return null;
        "boolean" == typeof b && (c = b,
        b = !1),
        b = b || y;
        var d = u.exec(a)
          , e = !c && [];
        return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e),
        e && e.length && m(e).remove(),
        m.merge([], d.childNodes))
    }
    ;
    var bd = m.fn.load;
    m.fn.load = function(a, b, c) {
        if ("string" != typeof a && bd)
            return bd.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = m.trim(a.slice(h, a.length)),
        a = a.slice(0, h)),
        m.isFunction(b) ? (c = b,
        b = void 0) : b && "object" == typeof b && (f = "POST"),
        g.length > 0 && m.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function(a) {
            e = arguments,
            g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, e || [a.responseText, b, a])
        }
        ),
        this
    }
    ,
    m.expr.filters.animated = function(a) {
        return m.grep(m.timers, function(b) {
            return a === b.elem
        }).length
    }
    ;
    var cd = a.document.documentElement;
    function dd(a) {
        return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    m.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = m.css(a, "position"), l = m(a), n = {};
            "static" === k && (a.style.position = "relative"),
            h = l.offset(),
            f = m.css(a, "top"),
            i = m.css(a, "left"),
            j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1,
            j ? (d = l.position(),
            g = d.top,
            e = d.left) : (g = parseFloat(f) || 0,
            e = parseFloat(i) || 0),
            m.isFunction(b) && (b = b.call(a, c, h)),
            null != b.top && (n.top = b.top - h.top + g),
            null != b.left && (n.left = b.left - h.left + e),
            "using"in b ? b.using.call(a, n) : l.css(n)
        }
    },
    m.fn.extend({
        offset: function(a) {
            if (arguments.length)
                return void 0 === a ? this : this.each(function(b) {
                    m.offset.setOffset(this, a, b)
                });
            var b, c, d = {
                top: 0,
                left: 0
            }, e = this[0], f = e && e.ownerDocument;
            if (f)
                return b = f.documentElement,
                m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()),
                c = dd(f),
                {
                    top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                    left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                }) : d
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                    top: 0,
                    left: 0
                }, d = this[0];
                return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(),
                b = this.offset(),
                m.nodeName(a[0], "html") || (c = a.offset()),
                c.top += m.css(a[0], "borderTopWidth", !0),
                c.left += m.css(a[0], "borderLeftWidth", !0)),
                {
                    top: b.top - c.top - m.css(d, "marginTop", !0),
                    left: b.left - c.left - m.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || cd;
                while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position"))
                    a = a.offsetParent;
                return a || cd
            })
        }
    }),
    m.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        m.fn[a] = function(d) {
            return V(this, function(a, d, e) {
                var f = dd(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }),
    m.each(["top", "left"], function(a, b) {
        m.cssHooks[b] = Lb(k.pixelPosition, function(a, c) {
            return c ? (c = Jb(a, b),
            Hb.test(c) ? m(a).position()[b] + "px" : c) : void 0
        })
    }),
    m.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        m.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            m.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d)
                  , g = c || (d === !0 || e === !0 ? "margin" : "border");
                return V(this, function(b, c, d) {
                    var e;
                    return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement,
                    Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }),
    m.fn.size = function() {
        return this.length
    }
    ,
    m.fn.andSelf = m.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return m
    });
    var ed = a.jQuery
      , fd = a.$;
    return m.noConflict = function(b) {
        return a.$ === m && (a.$ = fd),
        b && a.jQuery === m && (a.jQuery = ed),
        m
    }
    ,
    typeof b === K && (a.jQuery = a.$ = m),
    m
});

/* Slick Slider */
!function(i) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery)
}(function(i) {
    "use strict";
    var e = window.Slick || {};
    (e = function() {
        var e = 0;
        return function(t, o) {
            var s, n = this;
            n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: i(t),
                appendDots: i(t),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(e, t) {
                    return i('<button type="button" />').text(t + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
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
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            },
            n.initials = {
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
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            },
            i.extend(n, n.initials),
            n.activeBreakpoint = null,
            n.animType = null,
            n.animProp = null,
            n.breakpoints = [],
            n.breakpointSettings = [],
            n.cssTransitions = !1,
            n.focussed = !1,
            n.interrupted = !1,
            n.hidden = "hidden",
            n.paused = !0,
            n.positionProp = null,
            n.respondTo = null,
            n.rowCount = 1,
            n.shouldClick = !0,
            n.$slider = i(t),
            n.$slidesCache = null,
            n.transformType = null,
            n.transitionType = null,
            n.visibilityChange = "visibilitychange",
            n.windowWidth = 0,
            n.windowTimer = null,
            s = i(t).data("slick") || {},
            n.options = i.extend({}, n.defaults, o, s),
            n.currentSlide = n.options.initialSlide,
            n.originalSettings = n.options,
            void 0 !== document.mozHidden ? (n.hidden = "mozHidden",
            n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden",
            n.visibilityChange = "webkitvisibilitychange"),
            n.autoPlay = i.proxy(n.autoPlay, n),
            n.autoPlayClear = i.proxy(n.autoPlayClear, n),
            n.autoPlayIterator = i.proxy(n.autoPlayIterator, n),
            n.changeSlide = i.proxy(n.changeSlide, n),
            n.clickHandler = i.proxy(n.clickHandler, n),
            n.selectHandler = i.proxy(n.selectHandler, n),
            n.setPosition = i.proxy(n.setPosition, n),
            n.swipeHandler = i.proxy(n.swipeHandler, n),
            n.dragHandler = i.proxy(n.dragHandler, n),
            n.keyHandler = i.proxy(n.keyHandler, n),
            n.instanceUid = e++,
            n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
            n.registerBreakpoints(),
            n.init(!0)
        }
    }()).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }
    ,
    e.prototype.addSlide = e.prototype.slickAdd = function(e, t, o) {
        var s = this;
        if ("boolean" == typeof t)
            o = t,
            t = null;
        else if (t < 0 || t >= s.slideCount)
            return !1;
        s.unload(),
        "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack),
        s.$slides = s.$slideTrack.children(this.options.slide),
        s.$slideTrack.children(this.options.slide).detach(),
        s.$slideTrack.append(s.$slides),
        s.$slides.each(function(e, t) {
            i(t).attr("data-slick-index", e)
        }),
        s.$slidesCache = s.$slides,
        s.reinit()
    }
    ,
    e.prototype.animateHeight = function() {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.animate({
                height: e
            }, i.options.speed)
        }
    }
    ,
    e.prototype.animateSlide = function(e, t) {
        var o = {}
          , s = this;
        s.animateHeight(),
        !0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
        !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
            left: e
        }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
            top: e
        }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
        i({
            animStart: s.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: s.options.speed,
            easing: s.options.easing,
            step: function(i) {
                i = Math.ceil(i),
                !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)",
                s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)",
                s.$slideTrack.css(o))
            },
            complete: function() {
                t && t.call()
            }
        })) : (s.applyTransition(),
        e = Math.ceil(e),
        !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)",
        s.$slideTrack.css(o),
        t && setTimeout(function() {
            s.disableTransition(),
            t.call()
        }, s.options.speed))
    }
    ,
    e.prototype.getNavTarget = function() {
        var e = this
          , t = e.options.asNavFor;
        return t && null !== t && (t = i(t).not(e.$slider)),
        t
    }
    ,
    e.prototype.asNavFor = function(e) {
        var t = this.getNavTarget();
        null !== t && "object" == typeof t && t.each(function() {
            var t = i(this).slick("getSlick");
            t.unslicked || t.slideHandler(e, !0)
        })
    }
    ,
    e.prototype.applyTransition = function(i) {
        var e = this
          , t = {};
        !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase,
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }
    ,
    e.prototype.autoPlay = function() {
        var i = this;
        i.autoPlayClear(),
        i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
    }
    ,
    e.prototype.autoPlayClear = function() {
        var i = this;
        i.autoPlayTimer && clearInterval(i.autoPlayTimer)
    }
    ,
    e.prototype.autoPlayIterator = function() {
        var i = this
          , e = i.currentSlide + i.options.slidesToScroll;
        i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll,
        i.currentSlide - 1 == 0 && (i.direction = 1))),
        i.slideHandler(e))
    }
    ,
    e.prototype.buildArrows = function() {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"),
        e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"),
        e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows),
        e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows),
        !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }
    ,
    e.prototype.buildDots = function() {
        var e, t, o = this;
        if (!0 === o.options.dots) {
            for (o.$slider.addClass("slick-dotted"),
            t = i("<ul />").addClass(o.options.dotsClass),
            e = 0; e <= o.getDotCount(); e += 1)
                t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
            o.$dots = t.appendTo(o.options.appendDots),
            o.$dots.find("li").first().addClass("slick-active")
        }
    }
    ,
    e.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
        e.slideCount = e.$slides.length,
        e.$slides.each(function(e, t) {
            i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "")
        }),
        e.$slider.addClass("slick-slider"),
        e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(),
        e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(),
        e.$slideTrack.css("opacity", 0),
        !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1),
        i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
        !0 === e.options.draggable && e.$list.addClass("draggable")
    }
    ,
    e.prototype.buildRows = function() {
        var i, e, t, o, s, n, r, l = this;
        if (o = document.createDocumentFragment(),
        n = l.$slider.children(),
        l.options.rows > 1) {
            for (r = l.options.slidesPerRow * l.options.rows,
            s = Math.ceil(n.length / r),
            i = 0; i < s; i++) {
                var d = document.createElement("div");
                for (e = 0; e < l.options.rows; e++) {
                    var a = document.createElement("div");
                    for (t = 0; t < l.options.slidesPerRow; t++) {
                        var c = i * r + (e * l.options.slidesPerRow + t);
                        n.get(c) && a.appendChild(n.get(c))
                    }
                    d.appendChild(a)
                }
                o.appendChild(d)
            }
            l.$slider.empty().append(o),
            l.$slider.children().children().children().css({
                width: 100 / l.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }
    ,
    e.prototype.checkResponsive = function(e, t) {
        var o, s, n, r = this, l = !1, d = r.$slider.width(), a = window.innerWidth || i(window).width();
        if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)),
        r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            s = null;
            for (o in r.breakpoints)
                r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
            null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s,
            "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]),
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e)),
            l = s) : (r.activeBreakpoint = s,
            "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]),
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e)),
            l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null,
            r.options = r.originalSettings,
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e),
            l = s),
            e || !1 === l || r.$slider.trigger("breakpoint", [r, l])
        }
    }
    ,
    e.prototype.changeSlide = function(e, t) {
        var o, s, n, r = this, l = i(e.currentTarget);
        switch (l.is("a") && e.preventDefault(),
        l.is("li") || (l = l.closest("li")),
        n = r.slideCount % r.options.slidesToScroll != 0,
        o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll,
        e.data.message) {
        case "previous":
            s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o,
            r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
            break;
        case "next":
            s = 0 === o ? r.options.slidesToScroll : o,
            r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
            break;
        case "index":
            var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
            r.slideHandler(r.checkNavigable(d), !1, t),
            l.children().trigger("focus");
            break;
        default:
            return
        }
    }
    ,
    e.prototype.checkNavigable = function(i) {
        var e, t;
        if (e = this.getNavigableIndexes(),
        t = 0,
        i > e[e.length - 1])
            i = e[e.length - 1];
        else
            for (var o in e) {
                if (i < e[o]) {
                    i = t;
                    break
                }
                t = e[o]
            }
        return i
    }
    ,
    e.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)),
        !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)),
        e.$slider.off("focus.slick blur.slick"),
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
        e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
        !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
        e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
        e.$list.off("click.slick", e.clickHandler),
        i(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler),
        i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange),
        i(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
        i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault),
        i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }
    ,
    e.prototype.cleanUpSlideEvents = function() {
        var e = this;
        e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1))
    }
    ,
    e.prototype.cleanUpRows = function() {
        var i, e = this;
        e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"),
        e.$slider.empty().append(i))
    }
    ,
    e.prototype.clickHandler = function(i) {
        !1 === this.shouldClick && (i.stopImmediatePropagation(),
        i.stopPropagation(),
        i.preventDefault())
    }
    ,
    e.prototype.destroy = function(e) {
        var t = this;
        t.autoPlayClear(),
        t.touchObject = {},
        t.cleanUpEvents(),
        i(".slick-cloned", t.$slider).detach(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
        t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
        t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            i(this).attr("style", i(this).data("originalStyling"))
        }),
        t.$slideTrack.children(this.options.slide).detach(),
        t.$slideTrack.detach(),
        t.$list.detach(),
        t.$slider.append(t.$slides)),
        t.cleanUpRows(),
        t.$slider.removeClass("slick-slider"),
        t.$slider.removeClass("slick-initialized"),
        t.$slider.removeClass("slick-dotted"),
        t.unslicked = !0,
        e || t.$slider.trigger("destroy", [t])
    }
    ,
    e.prototype.disableTransition = function(i) {
        var e = this
          , t = {};
        t[e.transitionType] = "",
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }
    ,
    e.prototype.fadeSlide = function(i, e) {
        var t = this;
        !1 === t.cssTransitions ? (t.$slides.eq(i).css({
            zIndex: t.options.zIndex
        }),
        t.$slides.eq(i).animate({
            opacity: 1
        }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i),
        t.$slides.eq(i).css({
            opacity: 1,
            zIndex: t.options.zIndex
        }),
        e && setTimeout(function() {
            t.disableTransition(i),
            e.call()
        }, t.options.speed))
    }
    ,
    e.prototype.fadeSlideOut = function(i) {
        var e = this;
        !1 === e.cssTransitions ? e.$slides.eq(i).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(i),
        e.$slides.eq(i).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }
    ,
    e.prototype.filterSlides = e.prototype.slickFilter = function(i) {
        var e = this;
        null !== i && (e.$slidesCache = e.$slides,
        e.unload(),
        e.$slideTrack.children(this.options.slide).detach(),
        e.$slidesCache.filter(i).appendTo(e.$slideTrack),
        e.reinit())
    }
    ,
    e.prototype.focusHandler = function() {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(t) {
            t.stopImmediatePropagation();
            var o = i(this);
            setTimeout(function() {
                e.options.pauseOnFocus && (e.focussed = o.is(":focus"),
                e.autoPlay())
            }, 0)
        })
    }
    ,
    e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }
    ,
    e.prototype.getDotCount = function() {
        var i = this
          , e = 0
          , t = 0
          , o = 0;
        if (!0 === i.options.infinite)
            if (i.slideCount <= i.options.slidesToShow)
                ++o;
            else
                for (; e < i.slideCount; )
                    ++o,
                    e = t + i.options.slidesToScroll,
                    t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        else if (!0 === i.options.centerMode)
            o = i.slideCount;
        else if (i.options.asNavFor)
            for (; e < i.slideCount; )
                ++o,
                e = t + i.options.slidesToScroll,
                t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        else
            o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
        return o - 1
    }
    ,
    e.prototype.getLeft = function(i) {
        var e, t, o, s, n = this, r = 0;
        return n.slideOffset = 0,
        t = n.$slides.first().outerHeight(!0),
        !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1,
        s = -1,
        !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)),
        r = t * n.options.slidesToShow * s),
        n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1,
        r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1,
        r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth,
        r = (i + n.options.slidesToShow - n.slideCount) * t),
        n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0,
        r = 0),
        !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0,
        n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)),
        e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r,
        !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow),
        e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0,
        !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1),
        e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0,
        e += (n.$list.width() - o.outerWidth()) / 2)),
        e
    }
    ,
    e.prototype.getOption = e.prototype.slickGetOption = function(i) {
        return this.options[i]
    }
    ,
    e.prototype.getNavigableIndexes = function() {
        var i, e = this, t = 0, o = 0, s = [];
        for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll,
        o = -1 * e.options.slidesToScroll,
        i = 2 * e.slideCount); t < i; )
            s.push(t),
            t = o + e.options.slidesToScroll,
            o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return s
    }
    ,
    e.prototype.getSlick = function() {
        return this
    }
    ,
    e.prototype.getSlideCount = function() {
        var e, t, o = this;
        return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0,
        !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(s, n) {
            if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft)
                return e = n,
                !1
        }),
        Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
    }
    ,
    e.prototype.goTo = e.prototype.slickGoTo = function(i, e) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(i)
            }
        }, e)
    }
    ,
    e.prototype.init = function(e) {
        var t = this;
        i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"),
        t.buildRows(),
        t.buildOut(),
        t.setProps(),
        t.startLoad(),
        t.loadSlider(),
        t.initializeEvents(),
        t.updateArrows(),
        t.updateDots(),
        t.checkResponsive(!0),
        t.focusHandler()),
        e && t.$slider.trigger("init", [t]),
        !0 === t.options.accessibility && t.initADA(),
        t.options.autoplay && (t.paused = !1,
        t.autoPlay())
    }
    ,
    e.prototype.initADA = function() {
        var e = this
          , t = Math.ceil(e.slideCount / e.options.slidesToShow)
          , o = e.getNavigableIndexes().filter(function(i) {
            return i >= 0 && i < e.slideCount
        });
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }),
        null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t) {
            var s = o.indexOf(t);
            i(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + t,
                tabindex: -1
            }),
            -1 !== s && i(this).attr({
                "aria-describedby": "slick-slide-control" + e.instanceUid + s
            })
        }),
        e.$dots.attr("role", "tablist").find("li").each(function(s) {
            var n = o[s];
            i(this).attr({
                role: "presentation"
            }),
            i(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + e.instanceUid + s,
                "aria-controls": "slick-slide" + e.instanceUid + n,
                "aria-label": s + 1 + " of " + t,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(e.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++)
            e.$slides.eq(s).attr("tabindex", 0);
        e.activateADA()
    }
    ,
    e.prototype.initArrowEvents = function() {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, i.changeSlide),
        i.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, i.changeSlide),
        !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler),
        i.$nextArrow.on("keydown.slick", i.keyHandler)))
    }
    ,
    e.prototype.initDotEvents = function() {
        var e = this;
        !0 === e.options.dots && (i("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide),
        !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)),
        !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1))
    }
    ,
    e.prototype.initSlideEvents = function() {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)))
    }
    ,
    e.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler),
        e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler),
        e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler),
        e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler),
        e.$list.on("click.slick", e.clickHandler),
        i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
        !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)),
        i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)),
        i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
        i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
        i(e.setPosition)
    }
    ,
    e.prototype.initUI = function() {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(),
        i.$nextArrow.show()),
        !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show()
    }
    ,
    e.prototype.keyHandler = function(i) {
        var e = this;
        i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "next" : "previous"
            }
        }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "previous" : "next"
            }
        }))
    }
    ,
    e.prototype.lazyLoad = function() {
        function e(e) {
            i("img[data-lazy]", e).each(function() {
                var e = i(this)
                  , t = i(this).attr("data-lazy")
                  , o = i(this).attr("data-srcset")
                  , s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes")
                  , r = document.createElement("img");
                r.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, function() {
                        o && (e.attr("srcset", o),
                        s && e.attr("sizes", s)),
                        e.attr("src", t).animate({
                            opacity: 1
                        }, 200, function() {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }),
                        n.$slider.trigger("lazyLoaded", [n, e, t])
                    })
                }
                ,
                r.onerror = function() {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                    n.$slider.trigger("lazyLoadError", [n, e, t])
                }
                ,
                r.src = t
            })
        }
        var t, o, s, n = this;
        if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)),
        s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide,
        s = Math.ceil(o + n.options.slidesToShow),
        !0 === n.options.fade && (o > 0 && o--,
        s <= n.slideCount && s++)),
        t = n.$slider.find(".slick-slide").slice(o, s),
        "anticipated" === n.options.lazyLoad)
            for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++)
                r < 0 && (r = n.slideCount - 1),
                t = (t = t.add(d.eq(r))).add(d.eq(l)),
                r--,
                l++;
        e(t),
        n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
    }
    ,
    e.prototype.loadSlider = function() {
        var i = this;
        i.setPosition(),
        i.$slideTrack.css({
            opacity: 1
        }),
        i.$slider.removeClass("slick-loading"),
        i.initUI(),
        "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
    }
    ,
    e.prototype.next = e.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }
    ,
    e.prototype.orientationChange = function() {
        var i = this;
        i.checkResponsive(),
        i.setPosition()
    }
    ,
    e.prototype.pause = e.prototype.slickPause = function() {
        var i = this;
        i.autoPlayClear(),
        i.paused = !0
    }
    ,
    e.prototype.play = e.prototype.slickPlay = function() {
        var i = this;
        i.autoPlay(),
        i.options.autoplay = !0,
        i.paused = !1,
        i.focussed = !1,
        i.interrupted = !1
    }
    ,
    e.prototype.postSlide = function(e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]),
        t.animating = !1,
        t.slideCount > t.options.slidesToShow && t.setPosition(),
        t.swipeLeft = null,
        t.options.autoplay && t.autoPlay(),
        !0 === t.options.accessibility && (t.initADA(),
        t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
    }
    ,
    e.prototype.prev = e.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }
    ,
    e.prototype.preventDefault = function(i) {
        i.preventDefault()
    }
    ,
    e.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var t, o, s, n, r, l = this, d = i("img[data-lazy]", l.$slider);
        d.length ? (t = d.first(),
        o = t.attr("data-lazy"),
        s = t.attr("data-srcset"),
        n = t.attr("data-sizes") || l.$slider.attr("data-sizes"),
        (r = document.createElement("img")).onload = function() {
            s && (t.attr("srcset", s),
            n && t.attr("sizes", n)),
            t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
            !0 === l.options.adaptiveHeight && l.setPosition(),
            l.$slider.trigger("lazyLoaded", [l, t, o]),
            l.progressiveLazyLoad()
        }
        ,
        r.onerror = function() {
            e < 3 ? setTimeout(function() {
                l.progressiveLazyLoad(e + 1)
            }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
            l.$slider.trigger("lazyLoadError", [l, t, o]),
            l.progressiveLazyLoad())
        }
        ,
        r.src = o) : l.$slider.trigger("allImagesLoaded", [l])
    }
    ,
    e.prototype.refresh = function(e) {
        var t, o, s = this;
        o = s.slideCount - s.options.slidesToShow,
        !s.options.infinite && s.currentSlide > o && (s.currentSlide = o),
        s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
        t = s.currentSlide,
        s.destroy(!0),
        i.extend(s, s.initials, {
            currentSlide: t
        }),
        s.init(),
        e || s.changeSlide({
            data: {
                message: "index",
                index: t
            }
        }, !1)
    }
    ,
    e.prototype.registerBreakpoints = function() {
        var e, t, o, s = this, n = s.options.responsive || null;
        if ("array" === i.type(n) && n.length) {
            s.respondTo = s.options.respondTo || "window";
            for (e in n)
                if (o = s.breakpoints.length - 1,
                n.hasOwnProperty(e)) {
                    for (t = n[e].breakpoint; o >= 0; )
                        s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1),
                        o--;
                    s.breakpoints.push(t),
                    s.breakpointSettings[t] = n[e].settings
                }
            s.breakpoints.sort(function(i, e) {
                return s.options.mobileFirst ? i - e : e - i
            })
        }
    }
    ,
    e.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"),
        e.slideCount = e.$slides.length,
        e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
        e.setPosition(),
        e.focusHandler(),
        e.paused = !e.options.autoplay,
        e.autoPlay(),
        e.$slider.trigger("reInit", [e])
    }
    ,
    e.prototype.resize = function() {
        var e = this;
        i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay),
        e.windowDelay = window.setTimeout(function() {
            e.windowWidth = i(window).width(),
            e.checkResponsive(),
            e.unslicked || e.setPosition()
        }, 50))
    }
    ,
    e.prototype.removeSlide = e.prototype.slickRemove = function(i, e, t) {
        var o = this;
        if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i,
        o.slideCount < 1 || i < 0 || i > o.slideCount - 1)
            return !1;
        o.unload(),
        !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(),
        o.$slides = o.$slideTrack.children(this.options.slide),
        o.$slideTrack.children(this.options.slide).detach(),
        o.$slideTrack.append(o.$slides),
        o.$slidesCache = o.$slides,
        o.reinit()
    }
    ,
    e.prototype.setCSS = function(i) {
        var e, t, o = this, s = {};
        !0 === o.options.rtl && (i = -i),
        e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px",
        t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px",
        s[o.positionProp] = i,
        !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {},
        !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")",
        o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)",
        o.$slideTrack.css(s)))
    }
    ,
    e.prototype.setDimensions = function() {
        var i = this;
        !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
            padding: "0px " + i.options.centerPadding
        }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow),
        !0 === i.options.centerMode && i.$list.css({
            padding: i.options.centerPadding + " 0px"
        })),
        i.listWidth = i.$list.width(),
        i.listHeight = i.$list.height(),
        !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow),
        i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth),
        i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
        var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
        !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e)
    }
    ,
    e.prototype.setFade = function() {
        var e, t = this;
        t.$slides.each(function(o, s) {
            e = t.slideWidth * o * -1,
            !0 === t.options.rtl ? i(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            }) : i(s).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            })
        }),
        t.$slides.eq(t.currentSlide).css({
            zIndex: t.options.zIndex - 1,
            opacity: 1
        })
    }
    ,
    e.prototype.setHeight = function() {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.css("height", e)
        }
    }
    ,
    e.prototype.setOption = e.prototype.slickSetOption = function() {
        var e, t, o, s, n, r = this, l = !1;
        if ("object" === i.type(arguments[0]) ? (o = arguments[0],
        l = arguments[1],
        n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0],
        s = arguments[1],
        l = arguments[2],
        "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")),
        "single" === n)
            r.options[o] = s;
        else if ("multiple" === n)
            i.each(o, function(i, e) {
                r.options[i] = e
            });
        else if ("responsive" === n)
            for (t in s)
                if ("array" !== i.type(r.options.responsive))
                    r.options.responsive = [s[t]];
                else {
                    for (e = r.options.responsive.length - 1; e >= 0; )
                        r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1),
                        e--;
                    r.options.responsive.push(s[t])
                }
        l && (r.unload(),
        r.reinit())
    }
    ,
    e.prototype.setPosition = function() {
        var i = this;
        i.setDimensions(),
        i.setHeight(),
        !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(),
        i.$slider.trigger("setPosition", [i])
    }
    ,
    e.prototype.setProps = function() {
        var i = this
          , e = document.body.style;
        i.positionProp = !0 === i.options.vertical ? "top" : "left",
        "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"),
        void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0),
        i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex),
        void 0 !== e.OTransform && (i.animType = "OTransform",
        i.transformType = "-o-transform",
        i.transitionType = "OTransition",
        void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)),
        void 0 !== e.MozTransform && (i.animType = "MozTransform",
        i.transformType = "-moz-transform",
        i.transitionType = "MozTransition",
        void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)),
        void 0 !== e.webkitTransform && (i.animType = "webkitTransform",
        i.transformType = "-webkit-transform",
        i.transitionType = "webkitTransition",
        void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)),
        void 0 !== e.msTransform && (i.animType = "msTransform",
        i.transformType = "-ms-transform",
        i.transitionType = "msTransition",
        void 0 === e.msTransform && (i.animType = !1)),
        void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform",
        i.transformType = "transform",
        i.transitionType = "transition"),
        i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType
    }
    ,
    e.prototype.setSlideClasses = function(i) {
        var e, t, o, s, n = this;
        if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"),
        n.$slides.eq(i).addClass("slick-current"),
        !0 === n.options.centerMode) {
            var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
            e = Math.floor(n.options.slidesToShow / 2),
            !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i,
            t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")),
            0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")),
            n.$slides.eq(i).addClass("slick-center")
        } else
            i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow,
            o = !0 === n.options.infinite ? n.options.slidesToShow + i : i,
            n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
    }
    ,
    e.prototype.setupInfinite = function() {
        var e, t, o, s = this;
        if (!0 === s.options.fade && (s.options.centerMode = !1),
        !0 === s.options.infinite && !1 === s.options.fade && (t = null,
        s.slideCount > s.options.slidesToShow)) {
            for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow,
            e = s.slideCount; e > s.slideCount - o; e -= 1)
                t = e - 1,
                i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < o + s.slideCount; e += 1)
                t = e,
                i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
            s.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                i(this).attr("id", "")
            })
        }
    }
    ,
    e.prototype.interrupt = function(i) {
        var e = this;
        i || e.autoPlay(),
        e.interrupted = i
    }
    ,
    e.prototype.selectHandler = function(e) {
        var t = this
          , o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide")
          , s = parseInt(o.attr("data-slick-index"));
        s || (s = 0),
        t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s)
    }
    ,
    e.prototype.slideHandler = function(i, e, t) {
        var o, s, n, r, l, d = null, a = this;
        if (e = e || !1,
        !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i))
            if (!1 === e && a.asNavFor(i),
            o = i,
            d = a.getLeft(o),
            r = a.getLeft(a.currentSlide),
            a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft,
            !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll))
                !1 === a.options.fade && (o = a.currentSlide,
                !0 !== t ? a.animateSlide(r, function() {
                    a.postSlide(o)
                }) : a.postSlide(o));
            else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll))
                !1 === a.options.fade && (o = a.currentSlide,
                !0 !== t ? a.animateSlide(r, function() {
                    a.postSlide(o)
                }) : a.postSlide(o));
            else {
                if (a.options.autoplay && clearInterval(a.autoPlayTimer),
                s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o,
                a.animating = !0,
                a.$slider.trigger("beforeChange", [a, a.currentSlide, s]),
                n = a.currentSlide,
                a.currentSlide = s,
                a.setSlideClasses(a.currentSlide),
                a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide),
                a.updateDots(),
                a.updateArrows(),
                !0 === a.options.fade)
                    return !0 !== t ? (a.fadeSlideOut(n),
                    a.fadeSlide(s, function() {
                        a.postSlide(s)
                    })) : a.postSlide(s),
                    void a.animateHeight();
                !0 !== t ? a.animateSlide(d, function() {
                    a.postSlide(s)
                }) : a.postSlide(s)
            }
    }
    ,
    e.prototype.startLoad = function() {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(),
        i.$nextArrow.hide()),
        !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(),
        i.$slider.addClass("slick-loading")
    }
    ,
    e.prototype.swipeDirection = function() {
        var i, e, t, o, s = this;
        return i = s.touchObject.startX - s.touchObject.curX,
        e = s.touchObject.startY - s.touchObject.curY,
        t = Math.atan2(e, i),
        (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)),
        o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical"
    }
    ,
    e.prototype.swipeEnd = function(i) {
        var e, t, o = this;
        if (o.dragging = !1,
        o.swiping = !1,
        o.scrolling)
            return o.scrolling = !1,
            !1;
        if (o.interrupted = !1,
        o.shouldClick = !(o.touchObject.swipeLength > 10),
        void 0 === o.touchObject.curX)
            return !1;
        if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]),
        o.touchObject.swipeLength >= o.touchObject.minSwipe) {
            switch (t = o.swipeDirection()) {
            case "left":
            case "down":
                e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(),
                o.currentDirection = 0;
                break;
            case "right":
            case "up":
                e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(),
                o.currentDirection = 1
            }
            "vertical" != t && (o.slideHandler(e),
            o.touchObject = {},
            o.$slider.trigger("swipe", [o, t]))
        } else
            o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide),
            o.touchObject = {})
    }
    ,
    e.prototype.swipeHandler = function(i) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend"in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse")))
            switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1,
            e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold,
            !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
            i.data.action) {
            case "start":
                e.swipeStart(i);
                break;
            case "move":
                e.swipeMove(i);
                break;
            case "end":
                e.swipeEnd(i)
            }
    }
    ,
    e.prototype.swipeMove = function(i) {
        var e, t, o, s, n, r, l = this;
        return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null,
        !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide),
        l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX,
        l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY,
        l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))),
        r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))),
        !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0,
        !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r),
        t = l.swipeDirection(),
        void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0,
        i.preventDefault()),
        s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1),
        !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
        o = l.touchObject.swipeLength,
        l.touchObject.edgeHit = !1,
        !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction,
        l.touchObject.edgeHit = !0),
        !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s,
        !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s),
        !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null,
        !1) : void l.setCSS(l.swipeLeft))))
    }
    ,
    e.prototype.swipeStart = function(i) {
        var e, t = this;
        if (t.interrupted = !0,
        1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow)
            return t.touchObject = {},
            !1;
        void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]),
        t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX,
        t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY,
        t.dragging = !0
    }
    ,
    e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
        var i = this;
        null !== i.$slidesCache && (i.unload(),
        i.$slideTrack.children(this.options.slide).detach(),
        i.$slidesCache.appendTo(i.$slideTrack),
        i.reinit())
    }
    ,
    e.prototype.unload = function() {
        var e = this;
        i(".slick-cloned", e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(),
        e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(),
        e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }
    ,
    e.prototype.unslick = function(i) {
        var e = this;
        e.$slider.trigger("unslick", [e, i]),
        e.destroy()
    }
    ,
    e.prototype.updateArrows = function() {
        var i = this;
        Math.floor(i.options.slidesToShow / 2),
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }
    ,
    e.prototype.updateDots = function() {
        var i = this;
        null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(),
        i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"))
    }
    ,
    e.prototype.visibility = function() {
        var i = this;
        i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1)
    }
    ,
    i.fn.slick = function() {
        var i, t, o = this, s = arguments[0], n = Array.prototype.slice.call(arguments, 1), r = o.length;
        for (i = 0; i < r; i++)
            if ("object" == typeof s || void 0 === s ? o[i].slick = new e(o[i],s) : t = o[i].slick[s].apply(o[i].slick, n),
            void 0 !== t)
                return t;
        return o
    }
});

/* Fancy Box */
!function(t, e, n, o) {
    "use strict";
    function i(t) {
        var e = n(t.currentTarget)
          , o = t.data ? t.data.options : {}
          , i = e.attr("data-fancybox") || ""
          , a = 0
          , s = [];
        t.isDefaultPrevented() || (t.preventDefault(),
        i ? (s = o.selector ? n(o.selector) : t.data ? t.data.items : [],
        s = s.length ? s.filter('[data-fancybox="' + i + '"]') : n('[data-fancybox="' + i + '"]'),
        a = s.index(e),
        a < 0 && (a = 0)) : s = [e],
        n.fancybox.open(s, o, a))
    }
    if (n) {
        if (n.fn.fancybox)
            return void ("console"in t && console.log("fancyBox already initialized"));
        var a = {
            loop: !1,
            margin: [44, 0],
            gutter: 50,
            keyboard: !0,
            arrows: !0,
            infobar: !0,
            toolbar: !0,
            buttons: ["slideShow", "fullScreen", "thumbs", "share", "close"],
            idleTime: 3,
            smallBtn: "auto",
            protect: !1,
            modal: !1,
            image: {
                preload: "auto"
            },
            ajax: {
                settings: {
                    data: {
                        fancybox: !0
                    }
                }
            },
            iframe: {
                tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
                preload: !0,
                css: {},
                attr: {
                    scrolling: "auto"
                }
            },
            defaultType: "image",
            animationEffect: "zoom",
            animationDuration: 500,
            zoomOpacity: "auto",
            transitionEffect: "fade",
            transitionDuration: 366,
            slideClass: "",
            baseClass: "",
            baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div></div>',
            spinnerTpl: '<div class="fancybox-loading"></div>',
            errorTpl: '<div class="fancybox-error"><p>{{ERROR}}<p></div>',
            btnTpl: {
                download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}"><svg viewBox="0 0 40 40"><path d="M20,23 L20,8 L20,23 L13,16 L20,23 L27,16 L20,23 M26,28 L13,28 L27,28 L14,28" /></svg></a>',
                zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg viewBox="0 0 40 40"><path d="M 18,17 m-8,0 a 8,8 0 1,0 16,0 a 8,8 0 1,0 -16,0 M25,23 L31,29 L25,23" /></svg></button>',
                close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg viewBox="0 0 40 40"><path d="M10,10 L30,30 M30,10 L10,30" /></svg></button>',
                smallBtn: '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>',
                arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><svg viewBox="0 0 40 40"><path d="M10,20 L30,20 L10,20 L18,28 L10,20 L18,12 L10,20"></path></svg></button>',
                arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><svg viewBox="0 0 40 40"><path d="M30,20 L10,20 L30,20 L22,28 L30,20 L22,12 L30,20"></path></svg></button>'
            },
            parentEl: "body",
            autoFocus: !1,
            backFocus: !0,
            trapFocus: !0,
            fullScreen: {
                autoStart: !1
            },
            touch: {
                vertical: !0,
                momentum: !0
            },
            hash: null,
            media: {},
            slideShow: {
                autoStart: !1,
                speed: 4e3
            },
            thumbs: {
                autoStart: !1,
                hideOnClose: !0,
                parentEl: ".fancybox-container",
                axis: "y"
            },
            wheel: "auto",
            onInit: n.noop,
            beforeLoad: n.noop,
            afterLoad: n.noop,
            beforeShow: n.noop,
            afterShow: n.noop,
            beforeClose: n.noop,
            afterClose: n.noop,
            onActivate: n.noop,
            onDeactivate: n.noop,
            clickContent: function(t, e) {
                return "image" === t.type && "zoom"
            },
            clickSlide: "close",
            clickOutside: "close",
            dblclickContent: !1,
            dblclickSlide: !1,
            dblclickOutside: !1,
            mobile: {
                idleTime: !1,
                margin: 0,
                clickContent: function(t, e) {
                    return "image" === t.type && "toggleControls"
                },
                clickSlide: function(t, e) {
                    return "image" === t.type ? "toggleControls" : "close"
                },
                dblclickContent: function(t, e) {
                    return "image" === t.type && "zoom"
                },
                dblclickSlide: function(t, e) {
                    return "image" === t.type && "zoom"
                }
            },
            lang: "en",
            i18n: {
                en: {
                    CLOSE: "Close",
                    NEXT: "Next",
                    PREV: "Previous",
                    ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                    PLAY_START: "Start slideshow",
                    PLAY_STOP: "Pause slideshow",
                    FULL_SCREEN: "Full screen",
                    THUMBS: "Thumbnails",
                    DOWNLOAD: "Download",
                    SHARE: "Share",
                    ZOOM: "Zoom"
                },
                de: {
                    CLOSE: "Schliessen",
                    NEXT: "Weiter",
                    PREV: "ZurÃƒÆ’Ã‚Â¼ck",
                    ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es spÃƒÆ’Ã‚Â¤ter nochmal.",
                    PLAY_START: "Diaschau starten",
                    PLAY_STOP: "Diaschau beenden",
                    FULL_SCREEN: "Vollbild",
                    THUMBS: "Vorschaubilder",
                    DOWNLOAD: "Herunterladen",
                    SHARE: "Teilen",
                    ZOOM: "MaÃƒÆ’Ã…Â¸stab"
                }
            }
        }
          , s = n(t)
          , r = n(e)
          , c = 0
          , l = function(t) {
            return t && t.hasOwnProperty && t instanceof n
        }
          , u = function() {
            return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
                return t.setTimeout(e, 1e3 / 60)
            }
        }()
          , d = function() {
            var t, n = e.createElement("fakeelement"), i = {
                transition: "transitionend",
                OTransition: "oTransitionEnd",
                MozTransition: "transitionend",
                WebkitTransition: "webkitTransitionEnd"
            };
            for (t in i)
                if (n.style[t] !== o)
                    return i[t];
            return "transitionend"
        }()
          , f = function(t) {
            return t && t.length && t[0].offsetHeight
        }
          , p = function(t, o, i) {
            var a = this;
            a.opts = n.extend(!0, {
                index: i
            }, n.fancybox.defaults, o || {}),
            n.fancybox.isMobile && (a.opts = n.extend(!0, {}, a.opts, a.opts.mobile)),
            o && n.isArray(o.buttons) && (a.opts.buttons = o.buttons),
            a.id = a.opts.id || ++c,
            a.group = [],
            a.currIndex = parseInt(a.opts.index, 10) || 0,
            a.prevIndex = null,
            a.prevPos = null,
            a.currPos = 0,
            a.firstRun = null,
            a.createGroup(t),
            a.group.length && (a.$lastFocus = n(e.activeElement).blur(),
            a.slides = {},
            a.init())
        };
        n.extend(p.prototype, {
            init: function() {
                var i, a, s, c = this, l = c.group[c.currIndex], u = l.opts, d = n.fancybox.scrollbarWidth;
                c.scrollTop = r.scrollTop(),
                c.scrollLeft = r.scrollLeft(),
                n.fancybox.getInstance() || (n("body").addClass("fancybox-active"),
                /iPad|iPhone|iPod/.test(navigator.userAgent) && !t.MSStream ? "image" !== l.type && n("body").css("top", n("body").scrollTop() * -1).addClass("fancybox-iosfix") : !n.fancybox.isMobile && e.body.scrollHeight > t.innerHeight && (d === o && (i = n('<div style="width:50px;height:50px;overflow:scroll;" />').appendTo("body"),
                d = n.fancybox.scrollbarWidth = i[0].offsetWidth - i[0].clientWidth,
                i.remove()),
                n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar { margin-right: ' + d + "px; }</style>"),
                n("body").addClass("compensate-for-scrollbar"))),
                s = "",
                n.each(u.buttons, function(t, e) {
                    s += u.btnTpl[e] || ""
                }),
                a = n(c.translate(c, u.baseTpl.replace("{{buttons}}", s).replace("{{arrows}}", u.btnTpl.arrowLeft + u.btnTpl.arrowRight))).attr("id", "fancybox-container-" + c.id).addClass("fancybox-is-hidden").addClass(u.baseClass).data("FancyBox", c).appendTo(u.parentEl),
                c.$refs = {
                    container: a
                },
                ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function(t) {
                    c.$refs[t] = a.find(".fancybox-" + t)
                }),
                c.trigger("onInit"),
                c.activate(),
                c.jumpTo(c.currIndex)
            },
            translate: function(t, e) {
                var n = t.opts.i18n[t.opts.lang];
                return e.replace(/\{\{(\w+)\}\}/g, function(t, e) {
                    var i = n[e];
                    return i === o ? t : i
                })
            },
            createGroup: function(t) {
                var e = this
                  , i = n.makeArray(t);
                n.each(i, function(t, i) {
                    var a, s, r, c, l, u = {}, d = {};
                    n.isPlainObject(i) ? (u = i,
                    d = i.opts || i) : "object" === n.type(i) && n(i).length ? (a = n(i),
                    d = a.data(),
                    d = n.extend({}, d, d.options || {}),
                    d.$orig = a,
                    u.src = d.src || a.attr("href"),
                    u.type || u.src || (u.type = "inline",
                    u.src = i)) : u = {
                        type: "html",
                        src: i + ""
                    },
                    u.opts = n.extend(!0, {}, e.opts, d),
                    n.isArray(d.buttons) && (u.opts.buttons = d.buttons),
                    s = u.type || u.opts.type,
                    c = u.src || "",
                    !s && c && (c.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? s = "image" : c.match(/\.(pdf)((\?|#).*)?$/i) ? s = "pdf" : (r = c.match(/\.(mp4|mov|ogv)((\?|#).*)?$/i)) ? (s = "video",
                    u.opts.videoFormat || (u.opts.videoFormat = "video/" + ("ogv" === r[1] ? "ogg" : r[1]))) : "#" === c.charAt(0) && (s = "inline")),
                    s ? u.type = s : e.trigger("objectNeedsType", u),
                    u.index = e.group.length,
                    u.opts.$orig && !u.opts.$orig.length && delete u.opts.$orig,
                    !u.opts.$thumb && u.opts.$orig && (u.opts.$thumb = u.opts.$orig.find("img:first")),
                    u.opts.$thumb && !u.opts.$thumb.length && delete u.opts.$thumb,
                    "function" === n.type(u.opts.caption) && (u.opts.caption = u.opts.caption.apply(i, [e, u])),
                    "function" === n.type(e.opts.caption) && (u.opts.caption = e.opts.caption.apply(i, [e, u])),
                    u.opts.caption instanceof n || (u.opts.caption = u.opts.caption === o ? "" : u.opts.caption + ""),
                    "ajax" === s && (l = c.split(/\s+/, 2),
                    l.length > 1 && (u.src = l.shift(),
                    u.opts.filter = l.shift())),
                    "auto" == u.opts.smallBtn && (n.inArray(s, ["html", "inline", "ajax"]) > -1 ? (u.opts.toolbar = !1,
                    u.opts.smallBtn = !0) : u.opts.smallBtn = !1),
                    "pdf" === s && (u.type = "iframe",
                    u.opts.iframe.preload = !1),
                    u.opts.modal && (u.opts = n.extend(!0, u.opts, {
                        infobar: 0,
                        toolbar: 0,
                        smallBtn: 0,
                        keyboard: 0,
                        slideShow: 0,
                        fullScreen: 0,
                        thumbs: 0,
                        touch: 0,
                        clickContent: !1,
                        clickSlide: !1,
                        clickOutside: !1,
                        dblclickContent: !1,
                        dblclickSlide: !1,
                        dblclickOutside: !1
                    })),
                    e.group.push(u)
                })
            },
            addEvents: function() {
                var o = this;
                o.removeEvents(),
                o.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(t) {
                    t.stopPropagation(),
                    t.preventDefault(),
                    o.close(t)
                }).on("click.fb-prev touchend.fb-prev", "[data-fancybox-prev]", function(t) {
                    t.stopPropagation(),
                    t.preventDefault(),
                    o.previous()
                }).on("click.fb-next touchend.fb-next", "[data-fancybox-next]", function(t) {
                    t.stopPropagation(),
                    t.preventDefault(),
                    o.next()
                }).on("click.fb", "[data-fancybox-zoom]", function(t) {
                    o[o.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
                }),
                s.on("orientationchange.fb resize.fb", function(t) {
                    t && t.originalEvent && "resize" === t.originalEvent.type ? u(function() {
                        o.update()
                    }) : (o.$refs.stage.hide(),
                    setTimeout(function() {
                        o.$refs.stage.show(),
                        o.update()
                    }, 600))
                }),
                r.on("focusin.fb", function(t) {
                    var i = n.fancybox ? n.fancybox.getInstance() : null;
                    i.isClosing || !i.current || !i.current.opts.trapFocus || n(t.target).hasClass("fancybox-container") || n(t.target).is(e) || i && "fixed" !== n(t.target).css("position") && !i.$refs.container.has(t.target).length && (t.stopPropagation(),
                    i.focus(),
                    s.scrollTop(o.scrollTop).scrollLeft(o.scrollLeft))
                }),
                r.on("keydown.fb", function(t) {
                    var e = o.current
                      , i = t.keyCode || t.which;
                    if (e && e.opts.keyboard && !n(t.target).is("input") && !n(t.target).is("textarea"))
                        return 8 === i || 27 === i ? (t.preventDefault(),
                        void o.close(t)) : 37 === i || 38 === i ? (t.preventDefault(),
                        void o.previous()) : 39 === i || 40 === i ? (t.preventDefault(),
                        void o.next()) : void o.trigger("afterKeydown", t, i)
                }),
                o.group[o.currIndex].opts.idleTime && (o.idleSecondsCounter = 0,
                r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function(t) {
                    o.idleSecondsCounter = 0,
                    o.isIdle && o.showControls(),
                    o.isIdle = !1
                }),
                o.idleInterval = t.setInterval(function() {
                    o.idleSecondsCounter++,
                    o.idleSecondsCounter >= o.group[o.currIndex].opts.idleTime && !o.isDragging && (o.isIdle = !0,
                    o.idleSecondsCounter = 0,
                    o.hideControls())
                }, 1e3))
            },
            removeEvents: function() {
                var e = this;
                s.off("orientationchange.fb resize.fb"),
                r.off("focusin.fb keydown.fb .fb-idle"),
                this.$refs.container.off(".fb-close .fb-prev .fb-next"),
                e.idleInterval && (t.clearInterval(e.idleInterval),
                e.idleInterval = null)
            },
            previous: function(t) {
                return this.jumpTo(this.currPos - 1, t)
            },
            next: function(t) {
                return this.jumpTo(this.currPos + 1, t)
            },
            jumpTo: function(t, e, i) {
                var a, s, r, c, l, u, d, p = this, h = p.group.length;
                if (!(p.isDragging || p.isClosing || p.isAnimating && p.firstRun)) {
                    if (t = parseInt(t, 10),
                    s = p.current ? p.current.opts.loop : p.opts.loop,
                    !s && (t < 0 || t >= h))
                        return !1;
                    if (a = p.firstRun = null === p.firstRun,
                    !(h < 2 && !a && p.isDragging)) {
                        if (c = p.current,
                        p.prevIndex = p.currIndex,
                        p.prevPos = p.currPos,
                        r = p.createSlide(t),
                        h > 1 && ((s || r.index > 0) && p.createSlide(t - 1),
                        (s || r.index < h - 1) && p.createSlide(t + 1)),
                        p.current = r,
                        p.currIndex = r.index,
                        p.currPos = r.pos,
                        p.trigger("beforeShow", a),
                        p.updateControls(),
                        u = n.fancybox.getTranslate(r.$slide),
                        r.isMoved = (0 !== u.left || 0 !== u.top) && !r.$slide.hasClass("fancybox-animated"),
                        r.forcedDuration = o,
                        n.isNumeric(e) ? r.forcedDuration = e : e = r.opts[a ? "animationDuration" : "transitionDuration"],
                        e = parseInt(e, 10),
                        a)
                            return r.opts.animationEffect && e && p.$refs.container.css("transition-duration", e + "ms"),
                            p.$refs.container.removeClass("fancybox-is-hidden"),
                            f(p.$refs.container),
                            p.$refs.container.addClass("fancybox-is-open"),
                            r.$slide.addClass("fancybox-slide--current"),
                            p.loadSlide(r),
                            void p.preload("image");
                        n.each(p.slides, function(t, e) {
                            n.fancybox.stop(e.$slide)
                        }),
                        r.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"),
                        r.isMoved ? (l = Math.round(r.$slide.width()),
                        n.each(p.slides, function(t, o) {
                            var i = o.pos - r.pos;
                            n.fancybox.animate(o.$slide, {
                                top: 0,
                                left: i * l + i * o.opts.gutter
                            }, e, function() {
                                o.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"),
                                o.pos === p.currPos && (r.isMoved = !1,
                                p.complete())
                            })
                        })) : p.$refs.stage.children().removeAttr("style"),
                        r.isLoaded ? p.revealContent(r) : p.loadSlide(r),
                        p.preload("image"),
                        c.pos !== r.pos && (d = "fancybox-slide--" + (c.pos > r.pos ? "next" : "previous"),
                        c.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"),
                        c.isComplete = !1,
                        e && (r.isMoved || r.opts.transitionEffect) && (r.isMoved ? c.$slide.addClass(d) : (d = "fancybox-animated " + d + " fancybox-fx-" + r.opts.transitionEffect,
                        n.fancybox.animate(c.$slide, d, e, function() {
                            c.$slide.removeClass(d).removeAttr("style")
                        }))))
                    }
                }
            },
            createSlide: function(t) {
                var e, o, i = this;
                return o = t % i.group.length,
                o = o < 0 ? i.group.length + o : o,
                !i.slides[t] && i.group[o] && (e = n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage),
                i.slides[t] = n.extend(!0, {}, i.group[o], {
                    pos: t,
                    $slide: e,
                    isLoaded: !1
                }),
                i.updateSlide(i.slides[t])),
                i.slides[t]
            },
            scaleToActual: function(t, e, i) {
                var a, s, r, c, l, u = this, d = u.current, f = d.$content, p = parseInt(d.$slide.width(), 10), h = parseInt(d.$slide.height(), 10), g = d.width, b = d.height;
                "image" != d.type || d.hasError || !f || u.isAnimating || (n.fancybox.stop(f),
                u.isAnimating = !0,
                t = t === o ? .5 * p : t,
                e = e === o ? .5 * h : e,
                a = n.fancybox.getTranslate(f),
                c = g / a.width,
                l = b / a.height,
                s = .5 * p - .5 * g,
                r = .5 * h - .5 * b,
                g > p && (s = a.left * c - (t * c - t),
                s > 0 && (s = 0),
                s < p - g && (s = p - g)),
                b > h && (r = a.top * l - (e * l - e),
                r > 0 && (r = 0),
                r < h - b && (r = h - b)),
                u.updateCursor(g, b),
                n.fancybox.animate(f, {
                    top: r,
                    left: s,
                    scaleX: c,
                    scaleY: l
                }, i || 330, function() {
                    u.isAnimating = !1
                }),
                u.SlideShow && u.SlideShow.isActive && u.SlideShow.stop())
            },
            scaleToFit: function(t) {
                var e, o = this, i = o.current, a = i.$content;
                "image" != i.type || i.hasError || !a || o.isAnimating || (n.fancybox.stop(a),
                o.isAnimating = !0,
                e = o.getFitPos(i),
                o.updateCursor(e.width, e.height),
                n.fancybox.animate(a, {
                    top: e.top,
                    left: e.left,
                    scaleX: e.width / a.width(),
                    scaleY: e.height / a.height()
                }, t || 330, function() {
                    o.isAnimating = !1
                }))
            },
            getFitPos: function(t) {
                var e, o, i, a, s, r = this, c = t.$content, l = t.width, u = t.height, d = t.opts.margin;
                return !(!c || !c.length || !l && !u) && ("number" === n.type(d) && (d = [d, d]),
                2 == d.length && (d = [d[0], d[1], d[0], d[1]]),
                e = parseInt(r.$refs.stage.width(), 10) - (d[1] + d[3]),
                o = parseInt(r.$refs.stage.height(), 10) - (d[0] + d[2]),
                i = Math.min(1, e / l, o / u),
                a = Math.floor(i * l),
                s = Math.floor(i * u),
                {
                    top: Math.floor(.5 * (o - s)) + d[0],
                    left: Math.floor(.5 * (e - a)) + d[3],
                    width: a,
                    height: s
                })
            },
            update: function() {
                var t = this;
                n.each(t.slides, function(e, n) {
                    t.updateSlide(n)
                })
            },
            updateSlide: function(t, e) {
                var o = this
                  , i = t && t.$content;
                i && (t.width || t.height) && (o.isAnimating = !1,
                n.fancybox.stop(i),
                n.fancybox.setTranslate(i, o.getFitPos(t)),
                t.pos === o.currPos && o.updateCursor()),
                t.$slide.trigger("refresh"),
                o.trigger("onUpdate", t)
            },
            centerSlide: function(t, e) {
                var i, a, s = this;
                s.current && (i = Math.round(t.$slide.width()),
                a = t.pos - s.current.pos,
                n.fancybox.animate(t.$slide, {
                    top: 0,
                    left: a * i + a * t.opts.gutter,
                    opacity: 1
                }, e === o ? 0 : e, null, !1))
            },
            updateCursor: function(t, e) {
                var n, i = this, a = i.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");
                i.current && !i.isClosing && (i.isZoomable() ? (a.addClass("fancybox-is-zoomable"),
                n = t !== o && e !== o ? t < i.current.width && e < i.current.height : i.isScaledDown(),
                n ? a.addClass("fancybox-can-zoomIn") : i.current.opts.touch ? a.addClass("fancybox-can-drag") : a.addClass("fancybox-can-zoomOut")) : i.current.opts.touch && a.addClass("fancybox-can-drag"))
            },
            isZoomable: function() {
                var t, e = this, o = e.current;
                if (o && !e.isClosing)
                    return !!("image" === o.type && o.isLoaded && !o.hasError && ("zoom" === o.opts.clickContent || n.isFunction(o.opts.clickContent) && "zoom" === o.opts.clickContent(o)) && (t = e.getFitPos(o),
                    o.width > t.width || o.height > t.height))
            },
            isScaledDown: function() {
                var t = this
                  , e = t.current
                  , o = e.$content
                  , i = !1;
                return o && (i = n.fancybox.getTranslate(o),
                i = i.width < e.width || i.height < e.height),
                i
            },
            canPan: function() {
                var t = this
                  , e = t.current
                  , n = e.$content
                  , o = !1;
                return n && (o = t.getFitPos(e),
                o = Math.abs(n.width() - o.width) > 1 || Math.abs(n.height() - o.height) > 1),
                o
            },
            loadSlide: function(t) {
                var e, o, i, a = this;
                if (!t.isLoading && !t.isLoaded) {
                    switch (t.isLoading = !0,
                    a.trigger("beforeLoad", t),
                    e = t.type,
                    o = t.$slide,
                    o.off("refresh").trigger("onReset").addClass("fancybox-slide--" + (e || "unknown")).addClass(t.opts.slideClass),
                    e) {
                    case "image":
                        a.setImage(t);
                        break;
                    case "iframe":
                        a.setIframe(t);
                        break;
                    case "html":
                        a.setContent(t, t.src || t.content);
                        break;
                    case "inline":
                        n(t.src).length ? a.setContent(t, n(t.src)) : a.setError(t);
                        break;
                    case "ajax":
                        a.showLoading(t),
                        i = n.ajax(n.extend({}, t.opts.ajax.settings, {
                            url: t.src,
                            success: function(e, n) {
                                "success" === n && a.setContent(t, e)
                            },
                            error: function(e, n) {
                                e && "abort" !== n && a.setError(t)
                            }
                        })),
                        o.one("onReset", function() {
                            i.abort()
                        });
                        break;
                    case "video":
                        a.setContent(t, '<video controls><source src="' + t.src + '" type="' + t.opts.videoFormat + "\">Your browser doesn't support HTML5 video</video>");
                        break;
                    default:
                        a.setError(t)
                    }
                    return !0
                }
            },
            setImage: function(e) {
                var o, i, a, s, r = this, c = e.opts.srcset || e.opts.image.srcset;
                if (c) {
                    a = t.devicePixelRatio || 1,
                    s = t.innerWidth * a,
                    i = c.split(",").map(function(t) {
                        var e = {};
                        return t.trim().split(/\s+/).forEach(function(t, n) {
                            var o = parseInt(t.substring(0, t.length - 1), 10);
                            return 0 === n ? e.url = t : void (o && (e.value = o,
                            e.postfix = t[t.length - 1]))
                        }),
                        e
                    }),
                    i.sort(function(t, e) {
                        return t.value - e.value
                    });
                    for (var l = 0; l < i.length; l++) {
                        var u = i[l];
                        if ("w" === u.postfix && u.value >= s || "x" === u.postfix && u.value >= a) {
                            o = u;
                            break
                        }
                    }
                    !o && i.length && (o = i[i.length - 1]),
                    o && (e.src = o.url,
                    e.width && e.height && "w" == o.postfix && (e.height = e.width / e.height * o.value,
                    e.width = o.value))
                }
                e.$content = n('<div class="fancybox-image-wrap"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide),
                e.opts.preload !== !1 && e.opts.width && e.opts.height && (e.opts.thumb || e.opts.$thumb) ? (e.width = e.opts.width,
                e.height = e.opts.height,
                e.$ghost = n("<img />").one("error", function() {
                    n(this).remove(),
                    e.$ghost = null,
                    r.setBigImage(e)
                }).one("load", function() {
                    r.afterLoad(e),
                    r.setBigImage(e)
                }).addClass("fancybox-image").appendTo(e.$content).attr("src", e.opts.thumb || e.opts.$thumb.attr("src"))) : r.setBigImage(e)
            },
            setBigImage: function(t) {
                var e = this
                  , o = n("<img />");
                t.$image = o.one("error", function() {
                    e.setError(t)
                }).one("load", function() {
                    clearTimeout(t.timouts),
                    t.timouts = null,
                    e.isClosing || (t.width = t.opts.width || this.naturalWidth,
                    t.height = t.opts.height || this.naturalHeight,
                    t.opts.image.srcset && o.attr("sizes", "100vw").attr("srcset", t.opts.image.srcset),
                    e.hideLoading(t),
                    t.$ghost ? t.timouts = setTimeout(function() {
                        t.timouts = null,
                        t.$ghost.hide()
                    }, Math.min(300, Math.max(1e3, t.height / 1600))) : e.afterLoad(t))
                }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content),
                (o[0].complete || "complete" == o[0].readyState) && o[0].naturalWidth && o[0].naturalHeight ? o.trigger("load") : o[0].error ? o.trigger("error") : t.timouts = setTimeout(function() {
                    o[0].complete || t.hasError || e.showLoading(t)
                }, 100)
            },
            setIframe: function(t) {
                var e, i = this, a = t.opts.iframe, s = t.$slide;
                t.$content = n('<div class="fancybox-content' + (a.preload ? " fancybox-is-hidden" : "") + '"></div>').css(a.css).appendTo(s),
                e = n(a.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(a.attr).appendTo(t.$content),
                a.preload ? (i.showLoading(t),
                e.on("load.fb error.fb", function(e) {
                    this.isReady = 1,
                    t.$slide.trigger("refresh"),
                    i.afterLoad(t)
                }),
                s.on("refresh.fb", function() {
                    var n, i, s, r = t.$content, c = a.css.width, l = a.css.height;
                    if (1 === e[0].isReady) {
                        try {
                            i = e.contents(),
                            s = i.find("body")
                        } catch (t) {}
                        s && s.length && (c === o && (n = e[0].contentWindow.document.documentElement.scrollWidth,
                        c = Math.ceil(s.outerWidth(!0) + (r.width() - n)),
                        c += r.outerWidth() - r.innerWidth()),
                        l === o && (l = Math.ceil(s.outerHeight(!0)),
                        l += r.outerHeight() - r.innerHeight()),
                        c && r.width(c),
                        l && r.height(l)),
                        r.removeClass("fancybox-is-hidden")
                    }
                })) : this.afterLoad(t),
                e.attr("src", t.src),
                t.opts.smallBtn === !0 && t.$content.prepend(i.translate(t, t.opts.btnTpl.smallBtn)),
                s.one("onReset", function() {
                    try {
                        n(this).find("iframe").hide().attr("src", "//about:blank")
                    } catch (t) {}
                    n(this).empty(),
                    t.isLoaded = !1
                })
            },
            setContent: function(t, e) {
                var o = this;
                o.isClosing || (o.hideLoading(t),
                t.$slide.empty(),
                l(e) && e.parent().length ? (e.parent(".fancybox-slide--inline").trigger("onReset"),
                t.$placeholder = n("<div></div>").hide().insertAfter(e),
                e.css("display", "inline-block")) : t.hasError || ("string" === n.type(e) && (e = n("<div>").append(n.trim(e)).contents(),
                3 === e[0].nodeType && (e = n("<div>").html(e))),
                t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))),
                t.$slide.one("onReset", function() {
                    n(this).find("video,audio").trigger("pause"),
                    t.$placeholder && (t.$placeholder.after(e.hide()).remove(),
                    t.$placeholder = null),
                    t.$smallBtn && (t.$smallBtn.remove(),
                    t.$smallBtn = null),
                    t.hasError || (n(this).empty(),
                    t.isLoaded = !1)
                }),
                t.$content = n(e).appendTo(t.$slide),
                this.afterLoad(t))
            },
            setError: function(t) {
                t.hasError = !0,
                t.$slide.removeClass("fancybox-slide--" + t.type),
                this.setContent(t, this.translate(t, t.opts.errorTpl))
            },
            showLoading: function(t) {
                var e = this;
                t = t || e.current,
                t && !t.$spinner && (t.$spinner = n(e.opts.spinnerTpl).appendTo(t.$slide))
            },
            hideLoading: function(t) {
                var e = this;
                t = t || e.current,
                t && t.$spinner && (t.$spinner.remove(),
                delete t.$spinner)
            },
            afterLoad: function(t) {
                var e = this;
                e.isClosing || (t.isLoading = !1,
                t.isLoaded = !0,
                e.trigger("afterLoad", t),
                e.hideLoading(t),
                t.opts.smallBtn && !t.$smallBtn && (t.$smallBtn = n(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content.filter("div,form").first())),
                t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function(t) {
                    return 2 == t.button && t.preventDefault(),
                    !0
                }),
                "image" === t.type && n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),
                e.revealContent(t))
            },
            revealContent: function(t) {
                var e, i, a, s, r, c = this, l = t.$slide, u = !1;
                return e = t.opts[c.firstRun ? "animationEffect" : "transitionEffect"],
                a = t.opts[c.firstRun ? "animationDuration" : "transitionDuration"],
                a = parseInt(t.forcedDuration === o ? a : t.forcedDuration, 10),
                !t.isMoved && t.pos === c.currPos && a || (e = !1),
                "zoom" !== e || t.pos === c.currPos && a && "image" === t.type && !t.hasError && (u = c.getThumbPos(t)) || (e = "fade"),
                "zoom" === e ? (r = c.getFitPos(t),
                r.scaleX = r.width / u.width,
                r.scaleY = r.height / u.height,
                delete r.width,
                delete r.height,
                s = t.opts.zoomOpacity,
                "auto" == s && (s = Math.abs(t.width / t.height - u.width / u.height) > .1),
                s && (u.opacity = .1,
                r.opacity = 1),
                n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), u),
                f(t.$content),
                void n.fancybox.animate(t.$content, r, a, function() {
                    c.complete()
                })) : (c.updateSlide(t),
                e ? (n.fancybox.stop(l),
                i = "fancybox-animated fancybox-slide--" + (t.pos >= c.prevPos ? "next" : "previous") + " fancybox-fx-" + e,
                l.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(i),
                t.$content.removeClass("fancybox-is-hidden"),
                f(l),
                void n.fancybox.animate(l, "fancybox-slide--current", a, function(e) {
                    l.removeClass(i).removeAttr("style"),
                    t.pos === c.currPos && c.complete()
                }, !0)) : (f(l),
                t.$content.removeClass("fancybox-is-hidden"),
                void (t.pos === c.currPos && c.complete())))
            },
            getThumbPos: function(o) {
                var i, a = this, s = !1, r = function(e) {
                    for (var o, i = e[0], a = i.getBoundingClientRect(), s = []; null !== i.parentElement; )
                        "hidden" !== n(i.parentElement).css("overflow") && "auto" !== n(i.parentElement).css("overflow") || s.push(i.parentElement.getBoundingClientRect()),
                        i = i.parentElement;
                    return o = s.every(function(t) {
                        var e = Math.min(a.right, t.right) - Math.max(a.left, t.left)
                          , n = Math.min(a.bottom, t.bottom) - Math.max(a.top, t.top);
                        return e > 0 && n > 0
                    }),
                    o && a.bottom > 0 && a.right > 0 && a.left < n(t).width() && a.top < n(t).height()
                }, c = o.opts.$thumb, l = c ? c.offset() : 0;
                return l && c[0].ownerDocument === e && r(c) && (i = a.$refs.stage.offset(),
                s = {
                    top: l.top - i.top + parseFloat(c.css("border-top-width") || 0),
                    left: l.left - i.left + parseFloat(c.css("border-left-width") || 0),
                    width: c.width(),
                    height: c.height(),
                    scaleX: 1,
                    scaleY: 1
                }),
                s
            },
            complete: function() {
                var t = this
                  , o = t.current
                  , i = {};
                o.isMoved || !o.isLoaded || o.isComplete || (o.isComplete = !0,
                o.$slide.siblings().trigger("onReset"),
                t.preload("inline"),
                f(o.$slide),
                o.$slide.addClass("fancybox-slide--complete"),
                n.each(t.slides, function(e, o) {
                    o.pos >= t.currPos - 1 && o.pos <= t.currPos + 1 ? i[o.pos] = o : o && (n.fancybox.stop(o.$slide),
                    o.$slide.off().remove())
                }),
                t.slides = i,
                t.updateCursor(),
                t.trigger("afterShow"),
                o.$slide.find("video,audio").first().trigger("play"),
                (n(e.activeElement).is("[disabled]") || o.opts.autoFocus && "image" != o.type && "iframe" !== o.type) && t.focus())
            },
            preload: function(t) {
                var e = this
                  , n = e.slides[e.currPos + 1]
                  , o = e.slides[e.currPos - 1];
                n && n.type === t && e.loadSlide(n),
                o && o.type === t && e.loadSlide(o)
            },
            focus: function() {
                var t, e = this.current;
                this.isClosing || (e && e.isComplete && (t = e.$slide.find("input[autofocus]:enabled:visible:first"),
                t.length || (t = e.$slide.find("button,:input,[tabindex],a").filter(":enabled:visible:first"))),
                t = t && t.length ? t : this.$refs.container,
                t.focus())
            },
            activate: function() {
                var t = this;
                n(".fancybox-container").each(function() {
                    var e = n(this).data("FancyBox");
                    e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"),
                    e.removeEvents(),
                    e.isVisible = !1)
                }),
                t.isVisible = !0,
                (t.current || t.isIdle) && (t.update(),
                t.updateControls()),
                t.trigger("onActivate"),
                t.addEvents()
            },
            close: function(t, e) {
                var o, i, a, s, r, c, l = this, p = l.current, h = function() {
                    l.cleanUp(t)
                };
                return !l.isClosing && (l.isClosing = !0,
                l.trigger("beforeClose", t) === !1 ? (l.isClosing = !1,
                u(function() {
                    l.update()
                }),
                !1) : (l.removeEvents(),
                p.timouts && clearTimeout(p.timouts),
                a = p.$content,
                o = p.opts.animationEffect,
                i = n.isNumeric(e) ? e : o ? p.opts.animationDuration : 0,
                p.$slide.off(d).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),
                p.$slide.siblings().trigger("onReset").remove(),
                i && l.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"),
                l.hideLoading(p),
                l.hideControls(),
                l.updateCursor(),
                "zoom" !== o || t !== !0 && a && i && "image" === p.type && !p.hasError && (c = l.getThumbPos(p)) || (o = "fade"),
                "zoom" === o ? (n.fancybox.stop(a),
                r = n.fancybox.getTranslate(a),
                r.width = r.width * r.scaleX,
                r.height = r.height * r.scaleY,
                s = p.opts.zoomOpacity,
                "auto" == s && (s = Math.abs(p.width / p.height - c.width / c.height) > .1),
                s && (c.opacity = 0),
                r.scaleX = r.width / c.width,
                r.scaleY = r.height / c.height,
                r.width = c.width,
                r.height = c.height,
                n.fancybox.setTranslate(p.$content, r),
                f(p.$content),
                n.fancybox.animate(p.$content, c, i, h),
                !0) : (o && i ? t === !0 ? setTimeout(h, i) : n.fancybox.animate(p.$slide.removeClass("fancybox-slide--current"), "fancybox-animated fancybox-slide--previous fancybox-fx-" + o, i, h) : h(),
                !0)))
            },
            cleanUp: function(t) {
                var o, i, a = this, r = n("body");
                a.current.$slide.trigger("onReset"),
                a.$refs.container.empty().remove(),
                a.trigger("afterClose", t),
                a.$lastFocus && a.current.opts.backFocus && a.$lastFocus.focus(),
                a.current = null,
                o = n.fancybox.getInstance(),
                o ? o.activate() : (s.scrollTop(a.scrollTop).scrollLeft(a.scrollLeft),
                r.removeClass("fancybox-active compensate-for-scrollbar"),
                r.hasClass("fancybox-iosfix") && (i = parseInt(e.body.style.top, 10),
                r.removeClass("fancybox-iosfix").css("top", "").scrollTop(i * -1)),
                n("#fancybox-style-noscroll").remove())
            },
            trigger: function(t, e) {
                var o, i = Array.prototype.slice.call(arguments, 1), a = this, s = e && e.opts ? e : a.current;
                return s ? i.unshift(s) : s = a,
                i.unshift(a),
                n.isFunction(s.opts[t]) && (o = s.opts[t].apply(s, i)),
                o === !1 ? o : void ("afterClose" !== t && a.$refs ? a.$refs.container.trigger(t + ".fb", i) : r.trigger(t + ".fb", i))
            },
            updateControls: function(t) {
                var e = this
                  , n = e.current
                  , o = n.index
                  , i = n.opts.caption
                  , a = e.$refs.container
                  , s = e.$refs.caption;
                n.$slide.trigger("refresh"),
                e.$caption = i && i.length ? s.html(i) : null,
                e.isHiddenControls || e.isIdle || e.showControls(),
                a.find("[data-fancybox-count]").html(e.group.length),
                a.find("[data-fancybox-index]").html(o + 1),
                a.find("[data-fancybox-prev]").prop("disabled", !n.opts.loop && o <= 0),
                a.find("[data-fancybox-next]").prop("disabled", !n.opts.loop && o >= e.group.length - 1),
                "image" === n.type ? a.find("[data-fancybox-download]").attr("href", n.opts.image.src || n.src).show() : a.find("[data-fancybox-download],[data-fancybox-zoom]").hide()
            },
            hideControls: function() {
                this.isHiddenControls = !0,
                this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav")
            },
            showControls: function() {
                var t = this
                  , e = t.current ? t.current.opts : t.opts
                  , n = t.$refs.container;
                t.isHiddenControls = !1,
                t.idleSecondsCounter = 0,
                n.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && t.group.length > 1)).toggleClass("fancybox-show-nav", !!(e.arrows && t.group.length > 1)).toggleClass("fancybox-is-modal", !!e.modal),
                t.$caption ? n.addClass("fancybox-show-caption ") : n.removeClass("fancybox-show-caption")
            },
            toggleControls: function() {
                this.isHiddenControls ? this.showControls() : this.hideControls()
            }
        }),
        n.fancybox = {
            version: "3.2.10",
            defaults: a,
            getInstance: function(t) {
                var e = n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox")
                  , o = Array.prototype.slice.call(arguments, 1);
                return e instanceof p && ("string" === n.type(t) ? e[t].apply(e, o) : "function" === n.type(t) && t.apply(e, o),
                e)
            },
            open: function(t, e, n) {
                return new p(t,e,n)
            },
            close: function(t) {
                var e = this.getInstance();
                e && (e.close(),
                t === !0 && this.close())
            },
            destroy: function() {
                this.close(!0),
                r.off("click.fb-start")
            },
            isMobile: e.createTouch !== o && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            use3d: function() {
                var n = e.createElement("div");
                return t.getComputedStyle && t.getComputedStyle(n).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11)
            }(),
            getTranslate: function(t) {
                var e;
                if (!t || !t.length)
                    return !1;
                if (e = t.eq(0).css("transform"),
                e && e.indexOf("matrix") !== -1 ? (e = e.split("(")[1],
                e = e.split(")")[0],
                e = e.split(",")) : e = [],
                e.length)
                    e = e.length > 10 ? [e[13], e[12], e[0], e[5]] : [e[5], e[4], e[0], e[3]],
                    e = e.map(parseFloat);
                else {
                    e = [0, 0, 1, 1];
                    var n = /\.*translate\((.*)px,(.*)px\)/i
                      , o = n.exec(t.eq(0).attr("style"));
                    o && (e[0] = parseFloat(o[2]),
                    e[1] = parseFloat(o[1]))
                }
                return {
                    top: e[0],
                    left: e[1],
                    scaleX: e[2],
                    scaleY: e[3],
                    opacity: parseFloat(t.css("opacity")),
                    width: t.width(),
                    height: t.height()
                }
            },
            setTranslate: function(t, e) {
                var n = ""
                  , i = {};
                if (t && e)
                    return e.left === o && e.top === o || (n = (e.left === o ? t.position().left : e.left) + "px, " + (e.top === o ? t.position().top : e.top) + "px",
                    n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"),
                    e.scaleX !== o && e.scaleY !== o && (n = (n.length ? n + " " : "") + "scale(" + e.scaleX + ", " + e.scaleY + ")"),
                    n.length && (i.transform = n),
                    e.opacity !== o && (i.opacity = e.opacity),
                    e.width !== o && (i.width = e.width),
                    e.height !== o && (i.height = e.height),
                    t.css(i)
            },
            animate: function(t, e, i, a, s) {
                n.isFunction(i) && (a = i,
                i = null),
                n.isPlainObject(e) || t.removeAttr("style"),
                t.on(d, function(i) {
                    (!i || !i.originalEvent || t.is(i.originalEvent.target) && "z-index" != i.originalEvent.propertyName) && (n.fancybox.stop(t),
                    n.isPlainObject(e) ? (e.scaleX !== o && e.scaleY !== o && (t.css("transition-duration", ""),
                    e.width = Math.round(t.width() * e.scaleX),
                    e.height = Math.round(t.height() * e.scaleY),
                    e.scaleX = 1,
                    e.scaleY = 1,
                    n.fancybox.setTranslate(t, e)),
                    s === !1 && t.removeAttr("style")) : s !== !0 && t.removeClass(e),
                    n.isFunction(a) && a(i))
                }),
                n.isNumeric(i) && t.css("transition-duration", i + "ms"),
                n.isPlainObject(e) ? n.fancybox.setTranslate(t, e) : t.addClass(e),
                e.scaleX && t.hasClass("fancybox-image-wrap") && t.parent().addClass("fancybox-is-scaling"),
                t.data("timer", setTimeout(function() {
                    t.trigger("transitionend")
                }, i + 16))
            },
            stop: function(t) {
                clearTimeout(t.data("timer")),
                t.off("transitionend").css("transition-duration", ""),
                t.hasClass("fancybox-image-wrap") && t.parent().removeClass("fancybox-is-scaling")
            }
        },
        n.fn.fancybox = function(t) {
            var e;
            return t = t || {},
            e = t.selector || !1,
            e ? n("body").off("click.fb-start", e).on("click.fb-start", e, {
                options: t
            }, i) : this.off("click.fb-start").on("click.fb-start", {
                items: this,
                options: t
            }, i),
            this
        }
        ,
        r.on("click.fb-start", "[data-fancybox]", i)
    }
}(window, document, window.jQuery || jQuery),
function(t) {
    "use strict";
    var e = function(e, n, o) {
        if (e)
            return o = o || "",
            "object" === t.type(o) && (o = t.param(o, !0)),
            t.each(n, function(t, n) {
                e = e.replace("$" + t, n || "")
            }),
            o.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + o),
            e
    }
      , n = {
        youtube: {
            matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
            params: {
                autoplay: 1,
                autohide: 1,
                fs: 1,
                rel: 0,
                hd: 1,
                wmode: "transparent",
                enablejsapi: 1,
                html5: 1
            },
            paramPlace: 8,
            type: "iframe",
            url: "//www.youtube.com/embed/$4",
            thumb: "//img.youtube.com/vi/$4/hqdefault.jpg"
        },
        vimeo: {
            matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
            params: {
                autoplay: 1,
                hd: 1,
                show_title: 1,
                show_byline: 1,
                show_portrait: 0,
                fullscreen: 1,
                api: 1
            },
            paramPlace: 3,
            type: "iframe",
            url: "//player.vimeo.com/video/$2"
        },
        metacafe: {
            matcher: /metacafe.com\/watch\/(\d+)\/(.*)?/,
            type: "iframe",
            url: "//www.metacafe.com/embed/$1/?ap=1"
        },
        dailymotion: {
            matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
            params: {
                additionalInfos: 0,
                autoStart: 1
            },
            type: "iframe",
            url: "//www.dailymotion.com/embed/video/$1"
        },
        vine: {
            matcher: /vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,
            type: "iframe",
            url: "//vine.co/v/$1/embed/simple"
        },
        instagram: {
            matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
            type: "image",
            url: "//$1/p/$2/media/?size=l"
        },
        gmap_place: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
            type: "iframe",
            url: function(t) {
                return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12]) + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
            }
        },
        gmap_search: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
            type: "iframe",
            url: function(t) {
                return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
            }
        }
    };
    t(document).on("objectNeedsType.fb", function(o, i, a) {
        var s, r, c, l, u, d, f, p = a.src || "", h = !1;
        s = t.extend(!0, {}, n, a.opts.media),
        t.each(s, function(n, o) {
            if (c = p.match(o.matcher)) {
                if (h = o.type,
                d = {},
                o.paramPlace && c[o.paramPlace]) {
                    u = c[o.paramPlace],
                    "?" == u[0] && (u = u.substring(1)),
                    u = u.split("&");
                    for (var i = 0; i < u.length; ++i) {
                        var s = u[i].split("=", 2);
                        2 == s.length && (d[s[0]] = decodeURIComponent(s[1].replace(/\+/g, " ")))
                    }
                }
                return l = t.extend(!0, {}, o.params, a.opts[n], d),
                p = "function" === t.type(o.url) ? o.url.call(this, c, l, a) : e(o.url, c, l),
                r = "function" === t.type(o.thumb) ? o.thumb.call(this, c, l, a) : e(o.thumb, c),
                "vimeo" === n && (p = p.replace("&%23", "#")),
                !1
            }
        }),
        h ? (a.src = p,
        a.type = h,
        a.opts.thumb || a.opts.$thumb && a.opts.$thumb.length || (a.opts.thumb = r),
        "iframe" === h && (t.extend(!0, a.opts, {
            iframe: {
                preload: !1,
                attr: {
                    scrolling: "no"
                }
            }
        }),
        a.contentProvider = f,
        a.opts.slideClass += " fancybox-slide--" + ("gmap_place" == f || "gmap_search" == f ? "map" : "video"))) : p && (a.type = a.opts.defaultType)
    })
}(window.jQuery || jQuery),
function(t, e, n) {
    "use strict";
    var o = function() {
        return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
            return t.setTimeout(e, 1e3 / 60)
        }
    }()
      , i = function() {
        return t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function(e) {
            t.clearTimeout(e)
        }
    }()
      , a = function(e) {
        var n = [];
        e = e.originalEvent || e || t.e,
        e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];
        for (var o in e)
            e[o].pageX ? n.push({
                x: e[o].pageX,
                y: e[o].pageY
            }) : e[o].clientX && n.push({
                x: e[o].clientX,
                y: e[o].clientY
            });
        return n
    }
      , s = function(t, e, n) {
        return e && t ? "x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0
    }
      , r = function(t) {
        if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea') || n.isFunction(t.get(0).onclick) || t.data("selectable"))
            return !0;
        for (var e = 0, o = t[0].attributes, i = o.length; e < i; e++)
            if ("data-fancybox-" === o[e].nodeName.substr(0, 14))
                return !0;
        return !1
    }
      , c = function(e) {
        var n = t.getComputedStyle(e)["overflow-y"]
          , o = t.getComputedStyle(e)["overflow-x"]
          , i = ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight
          , a = ("scroll" === o || "auto" === o) && e.scrollWidth > e.clientWidth;
        return i || a
    }
      , l = function(t) {
        for (var e = !1; ; ) {
            if (e = c(t.get(0)))
                break;
            if (t = t.parent(),
            !t.length || t.hasClass("fancybox-stage") || t.is("body"))
                break
        }
        return e
    }
      , u = function(t) {
        var e = this;
        e.instance = t,
        e.$bg = t.$refs.bg,
        e.$stage = t.$refs.stage,
        e.$container = t.$refs.container,
        e.destroy(),
        e.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(e, "ontouchstart"))
    };
    u.prototype.destroy = function() {
        this.$container.off(".fb.touch")
    }
    ,
    u.prototype.ontouchstart = function(o) {
        var i = this
          , c = n(o.target)
          , u = i.instance
          , d = u.current
          , f = d.$content
          , p = "touchstart" == o.type;
        if (p && i.$container.off("mousedown.fb.touch"),
        (!o.originalEvent || 2 != o.originalEvent.button) && c.length && !r(c) && !r(c.parent()) && (c.is("img") || !(o.originalEvent.clientX > c[0].clientWidth + c.offset().left))) {
            if (!d || i.instance.isAnimating || i.instance.isClosing)
                return o.stopPropagation(),
                void o.preventDefault();
            if (i.realPoints = i.startPoints = a(o),
            i.startPoints) {
                if (o.stopPropagation(),
                i.startEvent = o,
                i.canTap = !0,
                i.$target = c,
                i.$content = f,
                i.opts = d.opts.touch,
                i.isPanning = !1,
                i.isSwiping = !1,
                i.isZooming = !1,
                i.isScrolling = !1,
                i.sliderStartPos = i.sliderLastPos || {
                    top: 0,
                    left: 0
                },
                i.contentStartPos = n.fancybox.getTranslate(i.$content),
                i.contentLastPos = null,
                i.startTime = (new Date).getTime(),
                i.distanceX = i.distanceY = i.distance = 0,
                i.canvasWidth = Math.round(d.$slide[0].clientWidth),
                i.canvasHeight = Math.round(d.$slide[0].clientHeight),
                n(e).off(".fb.touch").on(p ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(i, "ontouchend")).on(p ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(i, "ontouchmove")),
                n.fancybox.isMobile && e.addEventListener("scroll", i.onscroll, !0),
                !i.opts && !u.canPan() || !c.is(i.$stage) && !i.$stage.find(c).length)
                    return void (c.is("img") && o.preventDefault());
                n.fancybox.isMobile && (l(c) || l(c.parent())) || o.preventDefault(),
                1 === i.startPoints.length && ("image" === d.type && (i.contentStartPos.width > i.canvasWidth + 1 || i.contentStartPos.height > i.canvasHeight + 1) ? (n.fancybox.stop(i.$content),
                i.$content.css("transition-duration", ""),
                i.isPanning = !0) : i.isSwiping = !0,
                i.$container.addClass("fancybox-controls--isGrabbing")),
                2 !== i.startPoints.length || u.isAnimating || d.hasError || "image" !== d.type || !d.isLoaded && !d.$ghost || (i.canTap = !1,
                i.isSwiping = !1,
                i.isPanning = !1,
                i.isZooming = !0,
                n.fancybox.stop(i.$content),
                i.$content.css("transition-duration", ""),
                i.centerPointStartX = .5 * (i.startPoints[0].x + i.startPoints[1].x) - n(t).scrollLeft(),
                i.centerPointStartY = .5 * (i.startPoints[0].y + i.startPoints[1].y) - n(t).scrollTop(),
                i.percentageOfImageAtPinchPointX = (i.centerPointStartX - i.contentStartPos.left) / i.contentStartPos.width,
                i.percentageOfImageAtPinchPointY = (i.centerPointStartY - i.contentStartPos.top) / i.contentStartPos.height,
                i.startDistanceBetweenFingers = s(i.startPoints[0], i.startPoints[1]))
            }
        }
    }
    ,
    u.prototype.onscroll = function(t) {
        self.isScrolling = !0
    }
    ,
    u.prototype.ontouchmove = function(t) {
        var e = this
          , o = n(t.target);
        return e.isScrolling || !o.is(e.$stage) && !e.$stage.find(o).length ? void (e.canTap = !1) : (e.newPoints = a(t),
        void ((e.opts || e.instance.canPan()) && e.newPoints && e.newPoints.length && (e.isSwiping && e.isSwiping === !0 || t.preventDefault(),
        e.distanceX = s(e.newPoints[0], e.startPoints[0], "x"),
        e.distanceY = s(e.newPoints[0], e.startPoints[0], "y"),
        e.distance = s(e.newPoints[0], e.startPoints[0]),
        e.distance > 0 && (e.isSwiping ? e.onSwipe(t) : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()))))
    }
    ,
    u.prototype.onSwipe = function(e) {
        var a, s = this, r = s.isSwiping, c = s.sliderStartPos.left || 0;
        if (r !== !0)
            "x" == r && (s.distanceX > 0 && (s.instance.group.length < 2 || 0 === s.instance.current.index && !s.instance.current.opts.loop) ? c += Math.pow(s.distanceX, .8) : s.distanceX < 0 && (s.instance.group.length < 2 || s.instance.current.index === s.instance.group.length - 1 && !s.instance.current.opts.loop) ? c -= Math.pow(-s.distanceX, .8) : c += s.distanceX),
            s.sliderLastPos = {
                top: "x" == r ? 0 : s.sliderStartPos.top + s.distanceY,
                left: c
            },
            s.requestId && (i(s.requestId),
            s.requestId = null),
            s.requestId = o(function() {
                s.sliderLastPos && (n.each(s.instance.slides, function(t, e) {
                    var o = e.pos - s.instance.currPos;
                    n.fancybox.setTranslate(e.$slide, {
                        top: s.sliderLastPos.top,
                        left: s.sliderLastPos.left + o * s.canvasWidth + o * e.opts.gutter
                    })
                }),
                s.$container.addClass("fancybox-is-sliding"))
            });
        else if (Math.abs(s.distance) > 10) {
            if (s.canTap = !1,
            s.instance.group.length < 2 && s.opts.vertical ? s.isSwiping = "y" : s.instance.isDragging || s.opts.vertical === !1 || "auto" === s.opts.vertical && n(t).width() > 800 ? s.isSwiping = "x" : (a = Math.abs(180 * Math.atan2(s.distanceY, s.distanceX) / Math.PI),
            s.isSwiping = a > 45 && a < 135 ? "y" : "x"),
            s.canTap = !1,
            "y" === s.isSwiping && n.fancybox.isMobile && (l(s.$target) || l(s.$target.parent())))
                return void (s.isScrolling = !0);
            s.instance.isDragging = s.isSwiping,
            s.startPoints = s.newPoints,
            n.each(s.instance.slides, function(t, e) {
                n.fancybox.stop(e.$slide),
                e.$slide.css("transition-duration", ""),
                e.inTransition = !1,
                e.pos === s.instance.current.pos && (s.sliderStartPos.left = n.fancybox.getTranslate(e.$slide).left)
            }),
            s.instance.SlideShow && s.instance.SlideShow.isActive && s.instance.SlideShow.stop()
        }
    }
    ,
    u.prototype.onPan = function() {
        var t = this;
        return s(t.newPoints[0], t.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5) ? void (t.startPoints = t.newPoints) : (t.canTap = !1,
        t.contentLastPos = t.limitMovement(),
        t.requestId && (i(t.requestId),
        t.requestId = null),
        void (t.requestId = o(function() {
            n.fancybox.setTranslate(t.$content, t.contentLastPos)
        })))
    }
    ,
    u.prototype.limitMovement = function() {
        var t, e, n, o, i, a, s = this, r = s.canvasWidth, c = s.canvasHeight, l = s.distanceX, u = s.distanceY, d = s.contentStartPos, f = d.left, p = d.top, h = d.width, g = d.height;
        return i = h > r ? f + l : f,
        a = p + u,
        t = Math.max(0, .5 * r - .5 * h),
        e = Math.max(0, .5 * c - .5 * g),
        n = Math.min(r - h, .5 * r - .5 * h),
        o = Math.min(c - g, .5 * c - .5 * g),
        h > r && (l > 0 && i > t && (i = t - 1 + Math.pow(-t + f + l, .8) || 0),
        l < 0 && i < n && (i = n + 1 - Math.pow(n - f - l, .8) || 0)),
        g > c && (u > 0 && a > e && (a = e - 1 + Math.pow(-e + p + u, .8) || 0),
        u < 0 && a < o && (a = o + 1 - Math.pow(o - p - u, .8) || 0)),
        {
            top: a,
            left: i,
            scaleX: d.scaleX,
            scaleY: d.scaleY
        }
    }
    ,
    u.prototype.limitPosition = function(t, e, n, o) {
        var i = this
          , a = i.canvasWidth
          , s = i.canvasHeight;
        return n > a ? (t = t > 0 ? 0 : t,
        t = t < a - n ? a - n : t) : t = Math.max(0, a / 2 - n / 2),
        o > s ? (e = e > 0 ? 0 : e,
        e = e < s - o ? s - o : e) : e = Math.max(0, s / 2 - o / 2),
        {
            top: e,
            left: t
        }
    }
    ,
    u.prototype.onZoom = function() {
        var e = this
          , a = e.contentStartPos.width
          , r = e.contentStartPos.height
          , c = e.contentStartPos.left
          , l = e.contentStartPos.top
          , u = s(e.newPoints[0], e.newPoints[1])
          , d = u / e.startDistanceBetweenFingers
          , f = Math.floor(a * d)
          , p = Math.floor(r * d)
          , h = (a - f) * e.percentageOfImageAtPinchPointX
          , g = (r - p) * e.percentageOfImageAtPinchPointY
          , b = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft()
          , m = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop()
          , y = b - e.centerPointStartX
          , v = m - e.centerPointStartY
          , x = c + (h + y)
          , w = l + (g + v)
          , $ = {
            top: w,
            left: x,
            scaleX: e.contentStartPos.scaleX * d,
            scaleY: e.contentStartPos.scaleY * d
        };
        e.canTap = !1,
        e.newWidth = f,
        e.newHeight = p,
        e.contentLastPos = $,
        e.requestId && (i(e.requestId),
        e.requestId = null),
        e.requestId = o(function() {
            n.fancybox.setTranslate(e.$content, e.contentLastPos)
        })
    }
    ,
    u.prototype.ontouchend = function(t) {
        var o = this
          , s = Math.max((new Date).getTime() - o.startTime, 1)
          , r = o.isSwiping
          , c = o.isPanning
          , l = o.isZooming
          , u = o.isScrolling;
        return o.endPoints = a(t),
        o.$container.removeClass("fancybox-controls--isGrabbing"),
        n(e).off(".fb.touch"),
        e.removeEventListener("scroll", o.onscroll, !0),
        o.requestId && (i(o.requestId),
        o.requestId = null),
        o.isSwiping = !1,
        o.isPanning = !1,
        o.isZooming = !1,
        o.isScrolling = !1,
        o.instance.isDragging = !1,
        o.canTap ? o.onTap(t) : (o.speed = 366,
        o.velocityX = o.distanceX / s * .5,
        o.velocityY = o.distanceY / s * .5,
        o.speedX = Math.max(.5 * o.speed, Math.min(1.5 * o.speed, 1 / Math.abs(o.velocityX) * o.speed)),
        void (c ? o.endPanning() : l ? o.endZooming() : o.endSwiping(r, u)))
    }
    ,
    u.prototype.endSwiping = function(t, e) {
        var o = this
          , i = !1
          , a = o.instance.group.length;
        o.sliderLastPos = null,
        "y" == t && !e && Math.abs(o.distanceY) > 50 ? (n.fancybox.animate(o.instance.current.$slide, {
            top: o.sliderStartPos.top + o.distanceY + 150 * o.velocityY,
            opacity: 0
        }, 150),
        i = o.instance.close(!0, 300)) : "x" == t && o.distanceX > 50 && a > 1 ? i = o.instance.previous(o.speedX) : "x" == t && o.distanceX < -50 && a > 1 && (i = o.instance.next(o.speedX)),
        i !== !1 || "x" != t && "y" != t || (e || a < 2 ? o.instance.centerSlide(o.instance.current, 150) : o.instance.jumpTo(o.instance.current.index)),
        o.$container.removeClass("fancybox-is-sliding")
    }
    ,
    u.prototype.endPanning = function() {
        var t, e, o, i = this;
        i.contentLastPos && (i.opts.momentum === !1 ? (t = i.contentLastPos.left,
        e = i.contentLastPos.top) : (t = i.contentLastPos.left + i.velocityX * i.speed,
        e = i.contentLastPos.top + i.velocityY * i.speed),
        o = i.limitPosition(t, e, i.contentStartPos.width, i.contentStartPos.height),
        o.width = i.contentStartPos.width,
        o.height = i.contentStartPos.height,
        n.fancybox.animate(i.$content, o, 330))
    }
    ,
    u.prototype.endZooming = function() {
        var t, e, o, i, a = this, s = a.instance.current, r = a.newWidth, c = a.newHeight;
        a.contentLastPos && (t = a.contentLastPos.left,
        e = a.contentLastPos.top,
        i = {
            top: e,
            left: t,
            width: r,
            height: c,
            scaleX: 1,
            scaleY: 1
        },
        n.fancybox.setTranslate(a.$content, i),
        r < a.canvasWidth && c < a.canvasHeight ? a.instance.scaleToFit(150) : r > s.width || c > s.height ? a.instance.scaleToActual(a.centerPointStartX, a.centerPointStartY, 150) : (o = a.limitPosition(t, e, r, c),
        n.fancybox.setTranslate(a.content, n.fancybox.getTranslate(a.$content)),
        n.fancybox.animate(a.$content, o, 150)))
    }
    ,
    u.prototype.onTap = function(t) {
        var e, o = this, i = n(t.target), s = o.instance, r = s.current, c = t && a(t) || o.startPoints, l = c[0] ? c[0].x - o.$stage.offset().left : 0, u = c[0] ? c[0].y - o.$stage.offset().top : 0, d = function(e) {
            var i = r.opts[e];
            if (n.isFunction(i) && (i = i.apply(s, [r, t])),
            i)
                switch (i) {
                case "close":
                    s.close(o.startEvent);
                    break;
                case "toggleControls":
                    s.toggleControls(!0);
                    break;
                case "next":
                    s.next();
                    break;
                case "nextOrClose":
                    s.group.length > 1 ? s.next() : s.close(o.startEvent);
                    break;
                case "zoom":
                    "image" == r.type && (r.isLoaded || r.$ghost) && (s.canPan() ? s.scaleToFit() : s.isScaledDown() ? s.scaleToActual(l, u) : s.group.length < 2 && s.close(o.startEvent))
                }
        };
        if ((!t.originalEvent || 2 != t.originalEvent.button) && (i.is("img") || !(l > i[0].clientWidth + i.offset().left))) {
            if (i.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))
                e = "Outside";
            else if (i.is(".fancybox-slide"))
                e = "Slide";
            else {
                if (!s.current.$content || !s.current.$content.find(i).addBack().filter(i).length)
                    return;
                e = "Content"
            }
            if (o.tapped) {
                if (clearTimeout(o.tapped),
                o.tapped = null,
                Math.abs(l - o.tapX) > 50 || Math.abs(u - o.tapY) > 50)
                    return this;
                d("dblclick" + e)
            } else
                o.tapX = l,
                o.tapY = u,
                r.opts["dblclick" + e] && r.opts["dblclick" + e] !== r.opts["click" + e] ? o.tapped = setTimeout(function() {
                    o.tapped = null,
                    d("click" + e)
                }, 500) : d("click" + e);
            return this
        }
    }
    ,
    n(e).on("onActivate.fb", function(t, e) {
        e && !e.Guestures && (e.Guestures = new u(e))
    })
}(window, document, window.jQuery || jQuery),
function(t, e) {
    "use strict";
    e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
            slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg viewBox="0 0 40 40"><path d="M13,12 L27,20 L13,27 Z" /><path d="M15,10 v19 M23,10 v19" /></svg></button>'
        },
        slideShow: {
            autoStart: !1,
            speed: 3e3
        }
    });
    var n = function(t) {
        this.instance = t,
        this.init()
    };
    e.extend(n.prototype, {
        timer: null,
        isActive: !1,
        $button: null,
        init: function() {
            var t = this;
            t.$button = t.instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function() {
                t.toggle()
            }),
            (t.instance.group.length < 2 || !t.instance.group[t.instance.currIndex].opts.slideShow) && t.$button.hide()
        },
        set: function(t) {
            var e = this;
            e.instance && e.instance.current && (t === !0 || e.instance.current.opts.loop || e.instance.currIndex < e.instance.group.length - 1) ? e.timer = setTimeout(function() {
                e.isActive && e.instance.jumpTo((e.instance.currIndex + 1) % e.instance.group.length)
            }, e.instance.current.opts.slideShow.speed) : (e.stop(),
            e.instance.idleSecondsCounter = 0,
            e.instance.showControls())
        },
        clear: function() {
            var t = this;
            clearTimeout(t.timer),
            t.timer = null
        },
        start: function() {
            var t = this
              , e = t.instance.current;
            e && (t.isActive = !0,
            t.$button.attr("title", e.opts.i18n[e.opts.lang].PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"),
            t.set(!0))
        },
        stop: function() {
            var t = this
              , e = t.instance.current;
            t.clear(),
            t.$button.attr("title", e.opts.i18n[e.opts.lang].PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"),
            t.isActive = !1
        },
        toggle: function() {
            var t = this;
            t.isActive ? t.stop() : t.start()
        }
    }),
    e(t).on({
        "onInit.fb": function(t, e) {
            e && !e.SlideShow && (e.SlideShow = new n(e))
        },
        "beforeShow.fb": function(t, e, n, o) {
            var i = e && e.SlideShow;
            o ? i && n.opts.slideShow.autoStart && i.start() : i && i.isActive && i.clear()
        },
        "afterShow.fb": function(t, e, n) {
            var o = e && e.SlideShow;
            o && o.isActive && o.set()
        },
        "afterKeydown.fb": function(n, o, i, a, s) {
            var r = o && o.SlideShow;
            !r || !i.opts.slideShow || 80 !== s && 32 !== s || e(t.activeElement).is("button,a,input") || (a.preventDefault(),
            r.toggle())
        },
        "beforeClose.fb onDeactivate.fb": function(t, e) {
            var n = e && e.SlideShow;
            n && n.stop()
        }
    }),
    e(t).on("visibilitychange", function() {
        var n = e.fancybox.getInstance()
          , o = n && n.SlideShow;
        o && o.isActive && (t.hidden ? o.clear() : o.set())
    })
}(document, window.jQuery || jQuery),
function(t, e) {
    "use strict";
    var n = function() {
        var e, n, o, i = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], a = {};
        for (n = 0; n < i.length; n++)
            if (e = i[n],
            e && e[1]in t) {
                for (o = 0; o < e.length; o++)
                    a[i[0][o]] = e[o];
                return a
            }
        return !1
    }();
    if (!n)
        return void (e && e.fancybox && (e.fancybox.defaults.btnTpl.fullScreen = !1));
    var o = {
        request: function(e) {
            e = e || t.documentElement,
            e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)
        },
        exit: function() {
            t[n.exitFullscreen]()
        },
        toggle: function(e) {
            e = e || t.documentElement,
            this.isFullscreen() ? this.exit() : this.request(e)
        },
        isFullscreen: function() {
            return Boolean(t[n.fullscreenElement])
        },
        enabled: function() {
            return Boolean(t[n.fullscreenEnabled])
        }
    };
    e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
            fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"><svg viewBox="0 0 40 40"><path d="M9,12 h22 v16 h-22 v-16 v16 h22 v-16 Z" /></svg></button>'
        },
        fullScreen: {
            autoStart: !1
        }
    }),
    e(t).on({
        "onInit.fb": function(t, e) {
            var n;
            e && e.group[e.currIndex].opts.fullScreen ? (n = e.$refs.container,
            n.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(t) {
                t.stopPropagation(),
                t.preventDefault(),
                o.toggle(n[0])
            }),
            e.opts.fullScreen && e.opts.fullScreen.autoStart === !0 && o.request(n[0]),
            e.FullScreen = o) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()
        },
        "afterKeydown.fb": function(t, e, n, o, i) {
            e && e.FullScreen && 70 === i && (o.preventDefault(),
            e.FullScreen.toggle(e.$refs.container[0]))
        },
        "beforeClose.fb": function(t) {
            t && t.FullScreen && o.exit()
        }
    }),
    e(t).on(n.fullscreenchange, function() {
        var t = o.isFullscreen()
          , n = e.fancybox.getInstance();
        n && (n.current && "image" === n.current.type && n.isAnimating && (n.current.$content.css("transition", "none"),
        n.isAnimating = !1,
        n.update(!0, !0, 0)),
        n.trigger("onFullscreenChange", t),
        n.$refs.container.toggleClass("fancybox-is-fullscreen", t))
    })
}(document, window.jQuery || jQuery),
function(t, e) {
    "use strict";
    e.fancybox.defaults = e.extend(!0, {
        btnTpl: {
            thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg viewBox="0 0 120 120"><path d="M30,30 h14 v14 h-14 Z M50,30 h14 v14 h-14 Z M70,30 h14 v14 h-14 Z M30,50 h14 v14 h-14 Z M50,50 h14 v14 h-14 Z M70,50 h14 v14 h-14 Z M30,70 h14 v14 h-14 Z M50,70 h14 v14 h-14 Z M70,70 h14 v14 h-14 Z" /></svg></button>'
        },
        thumbs: {
            autoStart: !1,
            hideOnClose: !0,
            parentEl: ".fancybox-container",
            axis: "y"
        }
    }, e.fancybox.defaults);
    var n = function(t) {
        this.init(t)
    };
    e.extend(n.prototype, {
        $button: null,
        $grid: null,
        $list: null,
        isVisible: !1,
        isActive: !1,
        init: function(t) {
            var e = this;
            e.instance = t,
            t.Thumbs = e;
            var n = t.group[0]
              , o = t.group[1];
            e.opts = t.group[t.currIndex].opts.thumbs,
            e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]"),
            e.opts && n && o && ("image" == n.type || n.opts.thumb || n.opts.$thumb) && ("image" == o.type || o.opts.thumb || o.opts.$thumb) ? (e.$button.show().on("click", function() {
                e.toggle()
            }),
            e.isActive = !0) : e.$button.hide()
        },
        create: function() {
            var t, n, o = this, i = o.instance, a = o.opts.parentEl;
            o.$grid = e('<div class="fancybox-thumbs fancybox-thumbs-' + o.opts.axis + '"></div>').appendTo(i.$refs.container.find(a).addBack().filter(a)),
            t = "<ul>",
            e.each(i.group, function(e, o) {
                n = o.opts.thumb || (o.opts.$thumb ? o.opts.$thumb.attr("src") : null),
                n || "image" !== o.type || (n = o.src),
                n && n.length && (t += '<li data-index="' + e + '"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="' + n + '" /></li>')
            }),
            t += "</ul>",
            o.$list = e(t).appendTo(o.$grid).on("click", "li", function() {
                i.jumpTo(e(this).data("index"))
            }),
            o.$list.find("img").hide().one("load", function() {
                var t, n, o, i, a = e(this).parent().removeClass("fancybox-thumbs-loading"), s = a.outerWidth(), r = a.outerHeight();
                t = this.naturalWidth || this.width,
                n = this.naturalHeight || this.height,
                o = t / s,
                i = n / r,
                o >= 1 && i >= 1 && (o > i ? (t /= i,
                n = r) : (t = s,
                n /= o)),
                e(this).css({
                    width: Math.floor(t),
                    height: Math.floor(n),
                    "margin-top": n > r ? Math.floor(.3 * r - .3 * n) : Math.floor(.5 * r - .5 * n),
                    "margin-left": Math.floor(.5 * s - .5 * t)
                }).show()
            }).each(function() {
                this.src = e(this).data("src")
            }),
            "x" === o.opts.axis && o.$list.width(parseInt(o.$grid.css("padding-right")) + i.group.length * o.$list.children().eq(0).outerWidth(!0) + "px")
        },
        focus: function(t) {
            var e, n, o = this, i = o.$list;
            o.instance.current && (e = i.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + o.instance.current.index + '"]').addClass("fancybox-thumbs-active"),
            n = e.position(),
            "y" === o.opts.axis && (n.top < 0 || n.top > i.height() - e.outerHeight()) ? i.stop().animate({
                scrollTop: i.scrollTop() + n.top
            }, t) : "x" === o.opts.axis && (n.left < i.parent().scrollLeft() || n.left > i.parent().scrollLeft() + (i.parent().width() - e.outerWidth())) && i.parent().stop().animate({
                scrollLeft: n.left
            }, t))
        },
        update: function() {
            this.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible),
            this.isVisible ? (this.$grid || this.create(),
            this.instance.trigger("onThumbsShow"),
            this.focus(0)) : this.$grid && this.instance.trigger("onThumbsHide"),
            this.instance.update()
        },
        hide: function() {
            this.isVisible = !1,
            this.update()
        },
        show: function() {
            this.isVisible = !0,
            this.update()
        },
        toggle: function() {
            this.isVisible = !this.isVisible,
            this.update()
        }
    }),
    e(t).on({
        "onInit.fb": function(t, e) {
            var o;
            e && !e.Thumbs && (o = new n(e),
            o.isActive && o.opts.autoStart === !0 && o.show())
        },
        "beforeShow.fb": function(t, e, n, o) {
            var i = e && e.Thumbs;
            i && i.isVisible && i.focus(o ? 0 : 250)
        },
        "afterKeydown.fb": function(t, e, n, o, i) {
            var a = e && e.Thumbs;
            a && a.isActive && 71 === i && (o.preventDefault(),
            a.toggle())
        },
        "beforeClose.fb": function(t, e) {
            var n = e && e.Thumbs;
            n && n.isVisible && n.opts.hideOnClose !== !1 && n.$grid.hide()
        }
    })
}(document, window.jQuery),
function(t, e) {
    "use strict";
    function n(t) {
        var e = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;",
            "`": "&#x60;",
            "=": "&#x3D;"
        };
        return String(t).replace(/[&<>"'`=\/]/g, function(t) {
            return e[t]
        })
    }
    e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
            share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg viewBox="0 0 40 40"><path d="M6,30 C8,18 19,16 23,16 L23,16 L23,10 L33,20 L23,29 L23,24 C19,24 8,27 6,30 Z"></svg></button>'
        },
        share: {
            tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p class="fancybox-share__links"><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" /></p></div>'
        }
    }),
    e(t).on("click", "[data-fancybox-share]", function() {
        var t, o, i = e.fancybox.getInstance();
        i && (t = i.current.opts.hash === !1 ? i.current.src : window.location,
        o = i.current.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === i.current.type ? encodeURIComponent(i.current.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g, n(t)).replace(/\{\{descr\}\}/g, i.$caption ? encodeURIComponent(i.$caption.text()) : ""),
        e.fancybox.open({
            src: i.translate(i, o),
            type: "html",
            opts: {
                animationEffect: "fade",
                animationDuration: 250,
                afterLoad: function(t, e) {
                    e.$content.find(".fancybox-share__links a").click(function() {
                        return window.open(this.href, "Share", "width=550, height=450"),
                        !1
                    })
                }
            }
        }))
    })
}(document, window.jQuery || jQuery),
function(t, e, n) {
    "use strict";
    function o() {
        var t = e.location.hash.substr(1)
          , n = t.split("-")
          , o = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) ? parseInt(n.pop(-1), 10) || 1 : 1
          , i = n.join("-");
        return o < 1 && (o = 1),
        {
            hash: t,
            index: o,
            gallery: i
        }
    }
    function i(t) {
        var e;
        "" !== t.gallery && (e = n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']").eq(t.index - 1),
        e.length || (e = n("#" + n.escapeSelector(t.gallery))),
        e.length && (s = !1,
        e.trigger("click")))
    }
    function a(t) {
        var e;
        return !!t && (e = t.current ? t.current.opts : t.opts,
        e.hash || (e.$orig ? e.$orig.data("fancybox") : ""))
    }
    n.escapeSelector || (n.escapeSelector = function(t) {
        var e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g
          , n = function(t, e) {
            return e ? "\0" === t ? "ÃƒÂ¯Ã‚Â¿Ã‚Â½" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
        };
        return (t + "").replace(e, n)
    }
    );
    var s = !0
      , r = null
      , c = null;
    n(function() {
        n.fancybox.defaults.hash !== !1 && (n(t).on({
            "onInit.fb": function(t, e) {
                var n, i;
                e.group[e.currIndex].opts.hash !== !1 && (n = o(),
                i = a(e),
                i && n.gallery && i == n.gallery && (e.currIndex = n.index - 1))
            },
            "beforeShow.fb": function(n, o, i) {
                var l;
                i && i.opts.hash !== !1 && (l = a(o),
                l && "" !== l && (e.location.hash.indexOf(l) < 0 && (o.opts.origHash = e.location.hash),
                r = l + (o.group.length > 1 ? "-" + (i.index + 1) : ""),
                "replaceState"in e.history ? (c && clearTimeout(c),
                c = setTimeout(function() {
                    e.history[s ? "pushState" : "replaceState"]({}, t.title, e.location.pathname + e.location.search + "#" + r),
                    c = null,
                    s = !1
                }, 300)) : e.location.hash = r))
            },
            "beforeClose.fb": function(o, i, s) {
                var l, u;
                c && clearTimeout(c),
                s.opts.hash !== !1 && (l = a(i),
                u = i && i.opts.origHash ? i.opts.origHash : "",
                l && "" !== l && ("replaceState"in history ? e.history.replaceState({}, t.title, e.location.pathname + e.location.search + u) : (e.location.hash = u,
                n(e).scrollTop(i.scrollTop).scrollLeft(i.scrollLeft))),
                r = null)
            }
        }),
        n(e).on("hashchange.fb", function() {
            var t = o();
            n.fancybox.getInstance() ? !r || r === t.gallery + "-" + t.index || 1 === t.index && r == t.gallery || (r = null,
            n.fancybox.close()) : "" !== t.gallery && i(t)
        }),
        setTimeout(function() {
            i(o())
        }, 50))
    })
}(document, window, window.jQuery || jQuery),
function(t, e) {
    "use strict";
    var n = (new Date).getTime();
    e(t).on({
        "onInit.fb": function(t, e, o) {
            e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function(t) {
                var o = e.current
                  , i = (new Date).getTime();
                e.group.length < 1 || o.opts.wheel === !1 || "auto" === o.opts.wheel && "image" !== o.type || (t.preventDefault(),
                t.stopPropagation(),
                o.$slide.hasClass("fancybox-animated") || (t = t.originalEvent || t,
                i - n < 250 || (n = i,
                e[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())))
            })
        }
    })
}(document, window.jQuery || jQuery);

/*! WOW - v1.1.3 - 2016-05-06
* Copyright (c) 2016 Matthieu Aussaguel;*/
(function() {
    var a, b, c, d, e, f = function(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }, g = [].indexOf || function(a) {
        for (var b = 0, c = this.length; c > b; b++)
            if (b in this && this[b] === a)
                return b;
        return -1
    }
    ;
    b = function() {
        function a() {}
        return a.prototype.extend = function(a, b) {
            var c, d;
            for (c in b)
                d = b[c],
                null == a[c] && (a[c] = d);
            return a
        }
        ,
        a.prototype.isMobile = function(a) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
        }
        ,
        a.prototype.createEvent = function(a, b, c, d) {
            var e;
            return null == b && (b = !1),
            null == c && (c = !1),
            null == d && (d = null),
            null != document.createEvent ? (e = document.createEvent("CustomEvent"),
            e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(),
            e.eventType = a) : e.eventName = a,
            e
        }
        ,
        a.prototype.emitEvent = function(a, b) {
            return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0
        }
        ,
        a.prototype.addEvent = function(a, b, c) {
            return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
        }
        ,
        a.prototype.removeEvent = function(a, b, c) {
            return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
        }
        ,
        a.prototype.innerHeight = function() {
            return "innerHeight"in window ? window.innerHeight : document.documentElement.clientHeight
        }
        ,
        a
    }(),
    c = this.WeakMap || this.MozWeakMap || (c = function() {
        function a() {
            this.keys = [],
            this.values = []
        }
        return a.prototype.get = function(a) {
            var b, c, d, e, f;
            for (f = this.keys,
            b = d = 0,
            e = f.length; e > d; b = ++d)
                if (c = f[b],
                c === a)
                    return this.values[b]
        }
        ,
        a.prototype.set = function(a, b) {
            var c, d, e, f, g;
            for (g = this.keys,
            c = e = 0,
            f = g.length; f > e; c = ++e)
                if (d = g[c],
                d === a)
                    return void (this.values[c] = b);
            return this.keys.push(a),
            this.values.push(b)
        }
        ,
        a
    }()),
    a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function() {
        function a() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."),
            "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return a.notSupported = !0,
        a.prototype.observe = function() {}
        ,
        a
    }()),
    d = this.getComputedStyle || function(a, b) {
        return this.getPropertyValue = function(b) {
            var c;
            return "float" === b && (b = "styleFloat"),
            e.test(b) && b.replace(e, function(a, b) {
                return b.toUpperCase()
            }),
            (null != (c = a.currentStyle) ? c[b] : void 0) || null
        }
        ,
        this
    }
    ,
    e = /(\-([a-z]){1})/g,
    this.WOW = function() {
        function e(a) {
            null == a && (a = {}),
            this.scrollCallback = f(this.scrollCallback, this),
            this.scrollHandler = f(this.scrollHandler, this),
            this.resetAnimation = f(this.resetAnimation, this),
            this.start = f(this.start, this),
            this.scrolled = !0,
            this.config = this.util().extend(a, this.defaults),
            null != a.scrollContainer && (this.config.scrollContainer = document.querySelector(a.scrollContainer)),
            this.animationNameCache = new c,
            this.wowEvent = this.util().createEvent(this.config.boxClass)
        }
        return e.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null
        },
        e.prototype.init = function() {
            var a;
            return this.element = window.document.documentElement,
            "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start),
            this.finished = []
        }
        ,
        e.prototype.start = function() {
            var b, c, d, e;
            if (this.stopped = !1,
            this.boxes = function() {
                var a, c, d, e;
                for (d = this.element.querySelectorAll("." + this.config.boxClass),
                e = [],
                a = 0,
                c = d.length; c > a; a++)
                    b = d[a],
                    e.push(b);
                return e
            }
            .call(this),
            this.all = function() {
                var a, c, d, e;
                for (d = this.boxes,
                e = [],
                a = 0,
                c = d.length; c > a; a++)
                    b = d[a],
                    e.push(b);
                return e
            }
            .call(this),
            this.boxes.length)
                if (this.disabled())
                    this.resetStyle();
                else
                    for (e = this.boxes,
                    c = 0,
                    d = e.length; d > c; c++)
                        b = e[c],
                        this.applyStyle(b, !0);
            return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler),
            this.util().addEvent(window, "resize", this.scrollHandler),
            this.interval = setInterval(this.scrollCallback, 50)),
            this.config.live ? new a(function(a) {
                return function(b) {
                    var c, d, e, f, g;
                    for (g = [],
                    c = 0,
                    d = b.length; d > c; c++)
                        f = b[c],
                        g.push(function() {
                            var a, b, c, d;
                            for (c = f.addedNodes || [],
                            d = [],
                            a = 0,
                            b = c.length; b > a; a++)
                                e = c[a],
                                d.push(this.doSync(e));
                            return d
                        }
                        .call(a));
                    return g
                }
            }(this)).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0
        }
        ,
        e.prototype.stop = function() {
            return this.stopped = !0,
            this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler),
            this.util().removeEvent(window, "resize", this.scrollHandler),
            null != this.interval ? clearInterval(this.interval) : void 0
        }
        ,
        e.prototype.sync = function(b) {
            return a.notSupported ? this.doSync(this.element) : void 0
        }
        ,
        e.prototype.doSync = function(a) {
            var b, c, d, e, f;
            if (null == a && (a = this.element),
            1 === a.nodeType) {
                for (a = a.parentNode || a,
                e = a.querySelectorAll("." + this.config.boxClass),
                f = [],
                c = 0,
                d = e.length; d > c; c++)
                    b = e[c],
                    g.call(this.all, b) < 0 ? (this.boxes.push(b),
                    this.all.push(b),
                    this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0),
                    f.push(this.scrolled = !0)) : f.push(void 0);
                return f
            }
        }
        ,
        e.prototype.show = function(a) {
            return this.applyStyle(a),
            a.className = a.className + " " + this.config.animateClass,
            null != this.config.callback && this.config.callback(a),
            this.util().emitEvent(a, this.wowEvent),
            this.util().addEvent(a, "animationend", this.resetAnimation),
            this.util().addEvent(a, "oanimationend", this.resetAnimation),
            this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation),
            this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation),
            a
        }
        ,
        e.prototype.applyStyle = function(a, b) {
            var c, d, e;
            return d = a.getAttribute("data-wow-duration"),
            c = a.getAttribute("data-wow-delay"),
            e = a.getAttribute("data-wow-iteration"),
            this.animate(function(f) {
                return function() {
                    return f.customStyle(a, b, d, c, e)
                }
            }(this))
        }
        ,
        e.prototype.animate = function() {
            return "requestAnimationFrame"in window ? function(a) {
                return window.requestAnimationFrame(a)
            }
            : function(a) {
                return a()
            }
        }(),
        e.prototype.resetStyle = function() {
            var a, b, c, d, e;
            for (d = this.boxes,
            e = [],
            b = 0,
            c = d.length; c > b; b++)
                a = d[b],
                e.push(a.style.visibility = "visible");
            return e
        }
        ,
        e.prototype.resetAnimation = function(a) {
            var b;
            return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement,
            b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0
        }
        ,
        e.prototype.customStyle = function(a, b, c, d, e) {
            return b && this.cacheAnimationName(a),
            a.style.visibility = b ? "hidden" : "visible",
            c && this.vendorSet(a.style, {
                animationDuration: c
            }),
            d && this.vendorSet(a.style, {
                animationDelay: d
            }),
            e && this.vendorSet(a.style, {
                animationIterationCount: e
            }),
            this.vendorSet(a.style, {
                animationName: b ? "none" : this.cachedAnimationName(a)
            }),
            a
        }
        ,
        e.prototype.vendors = ["moz", "webkit"],
        e.prototype.vendorSet = function(a, b) {
            var c, d, e, f;
            d = [];
            for (c in b)
                e = b[c],
                a["" + c] = e,
                d.push(function() {
                    var b, d, g, h;
                    for (g = this.vendors,
                    h = [],
                    b = 0,
                    d = g.length; d > b; b++)
                        f = g[b],
                        h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e);
                    return h
                }
                .call(this));
            return d
        }
        ,
        e.prototype.vendorCSS = function(a, b) {
            var c, e, f, g, h, i;
            for (h = d(a),
            g = h.getPropertyCSSValue(b),
            f = this.vendors,
            c = 0,
            e = f.length; e > c; c++)
                i = f[c],
                g = g || h.getPropertyCSSValue("-" + i + "-" + b);
            return g
        }
        ,
        e.prototype.animationName = function(a) {
            var b;
            try {
                b = this.vendorCSS(a, "animation-name").cssText
            } catch (c) {
                b = d(a).getPropertyValue("animation-name")
            }
            return "none" === b ? "" : b
        }
        ,
        e.prototype.cacheAnimationName = function(a) {
            return this.animationNameCache.set(a, this.animationName(a))
        }
        ,
        e.prototype.cachedAnimationName = function(a) {
            return this.animationNameCache.get(a)
        }
        ,
        e.prototype.scrollHandler = function() {
            return this.scrolled = !0
        }
        ,
        e.prototype.scrollCallback = function() {
            var a;
            return !this.scrolled || (this.scrolled = !1,
            this.boxes = function() {
                var b, c, d, e;
                for (d = this.boxes,
                e = [],
                b = 0,
                c = d.length; c > b; b++)
                    a = d[b],
                    a && (this.isVisible(a) ? this.show(a) : e.push(a));
                return e
            }
            .call(this),
            this.boxes.length || this.config.live) ? void 0 : this.stop()
        }
        ,
        e.prototype.offsetTop = function(a) {
            for (var b; void 0 === a.offsetTop; )
                a = a.parentNode;
            for (b = a.offsetTop; a = a.offsetParent; )
                b += a.offsetTop;
            return b
        }
        ,
        e.prototype.isVisible = function(a) {
            var b, c, d, e, f;
            return c = a.getAttribute("data-wow-offset") || this.config.offset,
            f = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset,
            e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c,
            d = this.offsetTop(a),
            b = d + a.clientHeight,
            e >= d && b >= f
        }
        ,
        e.prototype.util = function() {
            return null != this._util ? this._util : this._util = new b
        }
        ,
        e.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }
        ,
        e
    }()
}
).call(this);

/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */

!function(t, e) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function(t, e) {
    "use strict";
    function i(i, s, a) {
        function u(t, e, o) {
            var n, s = "$()." + i + '("' + e + '")';
            return t.each(function(t, u) {
                var h = a.data(u, i);
                if (!h)
                    return void r(i + " not initialized. Cannot call methods, i.e. " + s);
                var d = h[e];
                if (!d || "_" == e.charAt(0))
                    return void r(s + " is not a valid method");
                var l = d.apply(h, o);
                n = void 0 === n ? l : n
            }),
            void 0 !== n ? n : t
        }
        function h(t, e) {
            t.each(function(t, o) {
                var n = a.data(o, i);
                n ? (n.option(e),
                n._init()) : (n = new s(o,e),
                a.data(o, i, n))
            })
        }
        a = a || e || t.jQuery,
        a && (s.prototype.option || (s.prototype.option = function(t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
        }
        ),
        a.fn[i] = function(t) {
            if ("string" == typeof t) {
                var e = n.call(arguments, 1);
                return u(this, t, e)
            }
            return h(this, t),
            this
        }
        ,
        o(a))
    }
    function o(t) {
        !t || t && t.bridget || (t.bridget = i)
    }
    var n = Array.prototype.slice
      , s = t.console
      , r = "undefined" == typeof s ? function() {}
    : function(t) {
        s.error(t)
    }
    ;
    return o(e || t.jQuery),
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {}
              , o = i[t] = i[t] || [];
            return o.indexOf(e) == -1 && o.push(e),
            this
        }
    }
    ,
    e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {}
              , o = i[t] = i[t] || {};
            return o[e] = !0,
            this
        }
    }
    ,
    e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var o = i.indexOf(e);
            return o != -1 && i.splice(o, 1),
            this
        }
    }
    ,
    e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            i = i.slice(0),
            e = e || [];
            for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
                var s = i[n]
                  , r = o && o[s];
                r && (this.off(t, s),
                delete o[s]),
                s.apply(this, e)
            }
            return this
        }
    }
    ,
    e.allOff = function() {
        delete this._events,
        delete this._onceEvents
    }
    ,
    t
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
    "use strict";
    function t(t) {
        var e = parseFloat(t)
          , i = t.indexOf("%") == -1 && !isNaN(e);
        return i && e
    }
    function e() {}
    function i() {
        for (var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        }, e = 0; e < h; e++) {
            var i = u[e];
            t[i] = 0
        }
        return t
    }
    function o(t) {
        var e = getComputedStyle(t);
        return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),
        e
    }
    function n() {
        if (!d) {
            d = !0;
            var e = document.createElement("div");
            e.style.width = "200px",
            e.style.padding = "1px 2px 3px 4px",
            e.style.borderStyle = "solid",
            e.style.borderWidth = "1px 2px 3px 4px",
            e.style.boxSizing = "border-box";
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var n = o(e);
            r = 200 == Math.round(t(n.width)),
            s.isBoxSizeOuter = r,
            i.removeChild(e)
        }
    }
    function s(e) {
        if (n(),
        "string" == typeof e && (e = document.querySelector(e)),
        e && "object" == typeof e && e.nodeType) {
            var s = o(e);
            if ("none" == s.display)
                return i();
            var a = {};
            a.width = e.offsetWidth,
            a.height = e.offsetHeight;
            for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; l < h; l++) {
                var f = u[l]
                  , c = s[f]
                  , m = parseFloat(c);
                a[f] = isNaN(m) ? 0 : m
            }
            var p = a.paddingLeft + a.paddingRight
              , y = a.paddingTop + a.paddingBottom
              , g = a.marginLeft + a.marginRight
              , v = a.marginTop + a.marginBottom
              , _ = a.borderLeftWidth + a.borderRightWidth
              , z = a.borderTopWidth + a.borderBottomWidth
              , I = d && r
              , x = t(s.width);
            x !== !1 && (a.width = x + (I ? 0 : p + _));
            var S = t(s.height);
            return S !== !1 && (a.height = S + (I ? 0 : y + z)),
            a.innerWidth = a.width - (p + _),
            a.innerHeight = a.height - (y + z),
            a.outerWidth = a.width + g,
            a.outerHeight = a.height + v,
            a
        }
    }
    var r, a = "undefined" == typeof console ? e : function(t) {
        console.error(t)
    }
    , u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"], h = u.length, d = !1;
    return s
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
    "use strict";
    var t = function() {
        var t = window.Element.prototype;
        if (t.matches)
            return "matches";
        if (t.matchesSelector)
            return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var o = e[i]
              , n = o + "MatchesSelector";
            if (t[n])
                return n
        }
    }();
    return function(e, i) {
        return e[t](i)
    }
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function(t, e) {
    var i = {};
    i.extend = function(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    ,
    i.modulo = function(t, e) {
        return (t % e + e) % e
    }
    ;
    var o = Array.prototype.slice;
    i.makeArray = function(t) {
        if (Array.isArray(t))
            return t;
        if (null === t || void 0 === t)
            return [];
        var e = "object" == typeof t && "number" == typeof t.length;
        return e ? o.call(t) : [t]
    }
    ,
    i.removeFrom = function(t, e) {
        var i = t.indexOf(e);
        i != -1 && t.splice(i, 1)
    }
    ,
    i.getParent = function(t, i) {
        for (; t.parentNode && t != document.body; )
            if (t = t.parentNode,
            e(t, i))
                return t
    }
    ,
    i.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }
    ,
    i.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    i.filterFindElements = function(t, o) {
        t = i.makeArray(t);
        var n = [];
        return t.forEach(function(t) {
            if (t instanceof HTMLElement) {
                if (!o)
                    return void n.push(t);
                e(t, o) && n.push(t);
                for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++)
                    n.push(i[s])
            }
        }),
        n
    }
    ,
    i.debounceMethod = function(t, e, i) {
        i = i || 100;
        var o = t.prototype[e]
          , n = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[n];
            clearTimeout(t);
            var e = arguments
              , s = this;
            this[n] = setTimeout(function() {
                o.apply(s, e),
                delete s[n]
            }, i)
        }
    }
    ,
    i.docReady = function(t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
    }
    ,
    i.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    }
    ;
    var n = t.console;
    return i.htmlInit = function(e, o) {
        i.docReady(function() {
            var s = i.toDashed(o)
              , r = "data-" + s
              , a = document.querySelectorAll("[" + r + "]")
              , u = document.querySelectorAll(".js-" + s)
              , h = i.makeArray(a).concat(i.makeArray(u))
              , d = r + "-options"
              , l = t.jQuery;
            h.forEach(function(t) {
                var i, s = t.getAttribute(r) || t.getAttribute(d);
                try {
                    i = s && JSON.parse(s)
                } catch (a) {
                    return void (n && n.error("Error parsing " + r + " on " + t.className + ": " + a))
                }
                var u = new e(t,i);
                l && l.data(t, o, u)
            })
        })
    }
    ,
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {},
    t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function(t, e) {
    "use strict";
    function i(t) {
        for (var e in t)
            return !1;
        return e = null,
        !0
    }
    function o(t, e) {
        t && (this.element = t,
        this.layout = e,
        this.position = {
            x: 0,
            y: 0
        },
        this._create())
    }
    function n(t) {
        return t.replace(/([A-Z])/g, function(t) {
            return "-" + t.toLowerCase()
        })
    }
    var s = document.documentElement.style
      , r = "string" == typeof s.transition ? "transition" : "WebkitTransition"
      , a = "string" == typeof s.transform ? "transform" : "WebkitTransform"
      , u = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend"
    }[r]
      , h = {
        transform: a,
        transition: r,
        transitionDuration: r + "Duration",
        transitionProperty: r + "Property",
        transitionDelay: r + "Delay"
    }
      , d = o.prototype = Object.create(t.prototype);
    d.constructor = o,
    d._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        },
        this.css({
            position: "absolute"
        })
    }
    ,
    d.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    d.getSize = function() {
        this.size = e(this.element)
    }
    ,
    d.css = function(t) {
        var e = this.element.style;
        for (var i in t) {
            var o = h[i] || i;
            e[o] = t[i]
        }
    }
    ,
    d.getPosition = function() {
        var t = getComputedStyle(this.element)
          , e = this.layout._getOption("originLeft")
          , i = this.layout._getOption("originTop")
          , o = t[e ? "left" : "right"]
          , n = t[i ? "top" : "bottom"]
          , s = parseFloat(o)
          , r = parseFloat(n)
          , a = this.layout.size;
        o.indexOf("%") != -1 && (s = s / 100 * a.width),
        n.indexOf("%") != -1 && (r = r / 100 * a.height),
        s = isNaN(s) ? 0 : s,
        r = isNaN(r) ? 0 : r,
        s -= e ? a.paddingLeft : a.paddingRight,
        r -= i ? a.paddingTop : a.paddingBottom,
        this.position.x = s,
        this.position.y = r
    }
    ,
    d.layoutPosition = function() {
        var t = this.layout.size
          , e = {}
          , i = this.layout._getOption("originLeft")
          , o = this.layout._getOption("originTop")
          , n = i ? "paddingLeft" : "paddingRight"
          , s = i ? "left" : "right"
          , r = i ? "right" : "left"
          , a = this.position.x + t[n];
        e[s] = this.getXValue(a),
        e[r] = "";
        var u = o ? "paddingTop" : "paddingBottom"
          , h = o ? "top" : "bottom"
          , d = o ? "bottom" : "top"
          , l = this.position.y + t[u];
        e[h] = this.getYValue(l),
        e[d] = "",
        this.css(e),
        this.emitEvent("layout", [this])
    }
    ,
    d.getXValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
    }
    ,
    d.getYValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
    }
    ,
    d._transitionTo = function(t, e) {
        this.getPosition();
        var i = this.position.x
          , o = this.position.y
          , n = t == this.position.x && e == this.position.y;
        if (this.setPosition(t, e),
        n && !this.isTransitioning)
            return void this.layoutPosition();
        var s = t - i
          , r = e - o
          , a = {};
        a.transform = this.getTranslate(s, r),
        this.transition({
            to: a,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: !0
        })
    }
    ,
    d.getTranslate = function(t, e) {
        var i = this.layout._getOption("originLeft")
          , o = this.layout._getOption("originTop");
        return t = i ? t : -t,
        e = o ? e : -e,
        "translate3d(" + t + "px, " + e + "px, 0)"
    }
    ,
    d.goTo = function(t, e) {
        this.setPosition(t, e),
        this.layoutPosition()
    }
    ,
    d.moveTo = d._transitionTo,
    d.setPosition = function(t, e) {
        this.position.x = parseFloat(t),
        this.position.y = parseFloat(e)
    }
    ,
    d._nonTransition = function(t) {
        this.css(t.to),
        t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd)
            t.onTransitionEnd[e].call(this)
    }
    ,
    d.transition = function(t) {
        if (!parseFloat(this.layout.options.transitionDuration))
            return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd)
            e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to)
            e.ingProperties[i] = !0,
            t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
            this.css(t.from);
            var o = this.element.offsetHeight;
            o = null
        }
        this.enableTransition(t.to),
        this.css(t.to),
        this.isTransitioning = !0
    }
    ;
    var l = "opacity," + n(a);
    d.enableTransition = function() {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t,
            this.css({
                transitionProperty: l,
                transitionDuration: t,
                transitionDelay: this.staggerDelay || 0
            }),
            this.element.addEventListener(u, this, !1)
        }
    }
    ,
    d.onwebkitTransitionEnd = function(t) {
        this.ontransitionend(t)
    }
    ,
    d.onotransitionend = function(t) {
        this.ontransitionend(t)
    }
    ;
    var f = {
        "-webkit-transform": "transform"
    };
    d.ontransitionend = function(t) {
        if (t.target === this.element) {
            var e = this._transn
              , o = f[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[o],
            i(e.ingProperties) && this.disableTransition(),
            o in e.clean && (this.element.style[t.propertyName] = "",
            delete e.clean[o]),
            o in e.onEnd) {
                var n = e.onEnd[o];
                n.call(this),
                delete e.onEnd[o]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }
    ,
    d.disableTransition = function() {
        this.removeTransitionStyles(),
        this.element.removeEventListener(u, this, !1),
        this.isTransitioning = !1
    }
    ,
    d._removeStyles = function(t) {
        var e = {};
        for (var i in t)
            e[i] = "";
        this.css(e)
    }
    ;
    var c = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return d.removeTransitionStyles = function() {
        this.css(c)
    }
    ,
    d.stagger = function(t) {
        t = isNaN(t) ? 0 : t,
        this.staggerDelay = t + "ms"
    }
    ,
    d.removeElem = function() {
        this.element.parentNode.removeChild(this.element),
        this.css({
            display: ""
        }),
        this.emitEvent("remove", [this])
    }
    ,
    d.remove = function() {
        return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
            this.removeElem()
        }),
        void this.hide()) : void this.removeElem()
    }
    ,
    d.reveal = function() {
        delete this.isHidden,
        this.css({
            display: ""
        });
        var t = this.layout.options
          , e = {}
          , i = this.getHideRevealTransitionEndProperty("visibleStyle");
        e[i] = this.onRevealTransitionEnd,
        this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }
    ,
    d.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }
    ,
    d.getHideRevealTransitionEndProperty = function(t) {
        var e = this.layout.options[t];
        if (e.opacity)
            return "opacity";
        for (var i in e)
            return i
    }
    ,
    d.hide = function() {
        this.isHidden = !0,
        this.css({
            display: ""
        });
        var t = this.layout.options
          , e = {}
          , i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        e[i] = this.onHideTransitionEnd,
        this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }
    ,
    d.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }),
        this.emitEvent("hide"))
    }
    ,
    d.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }
    ,
    o
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, o, n, s) {
        return e(t, i, o, n, s)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function(t, e, i, o, n) {
    "use strict";
    function s(t, e) {
        var i = o.getQueryElement(t);
        if (!i)
            return void (u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
        this.element = i,
        h && (this.$element = h(this.element)),
        this.options = o.extend({}, this.constructor.defaults),
        this.option(e);
        var n = ++l;
        this.element.outlayerGUID = n,
        f[n] = this,
        this._create();
        var s = this._getOption("initLayout");
        s && this.layout()
    }
    function r(t) {
        function e() {
            t.apply(this, arguments)
        }
        return e.prototype = Object.create(t.prototype),
        e.prototype.constructor = e,
        e
    }
    function a(t) {
        if ("number" == typeof t)
            return t;
        var e = t.match(/(^\d*\.?\d*)(\w*)/)
          , i = e && e[1]
          , o = e && e[2];
        if (!i.length)
            return 0;
        i = parseFloat(i);
        var n = m[o] || 1;
        return i * n
    }
    var u = t.console
      , h = t.jQuery
      , d = function() {}
      , l = 0
      , f = {};
    s.namespace = "outlayer",
    s.Item = n,
    s.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var c = s.prototype;
    o.extend(c, e.prototype),
    c.option = function(t) {
        o.extend(this.options, t)
    }
    ,
    c._getOption = function(t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
    }
    ,
    s.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    },
    c._create = function() {
        this.reloadItems(),
        this.stamps = [],
        this.stamp(this.options.stamp),
        o.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize()
    }
    ,
    c.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }
    ,
    c._itemize = function(t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
            var s = e[n]
              , r = new i(s,this);
            o.push(r)
        }
        return o
    }
    ,
    c._filterFindItemElements = function(t) {
        return o.filterFindElements(t, this.options.itemSelector)
    }
    ,
    c.getItemElements = function() {
        return this.items.map(function(t) {
            return t.element
        })
    }
    ,
    c.layout = function() {
        this._resetLayout(),
        this._manageStamps();
        var t = this._getOption("layoutInstant")
          , e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e),
        this._isLayoutInited = !0
    }
    ,
    c._init = c.layout,
    c._resetLayout = function() {
        this.getSize()
    }
    ,
    c.getSize = function() {
        this.size = i(this.element)
    }
    ,
    c._getMeasurement = function(t, e) {
        var o, n = this.options[t];
        n ? ("string" == typeof n ? o = this.element.querySelector(n) : n instanceof HTMLElement && (o = n),
        this[t] = o ? i(o)[e] : n) : this[t] = 0
    }
    ,
    c.layoutItems = function(t, e) {
        t = this._getItemsForLayout(t),
        this._layoutItems(t, e),
        this._postLayout()
    }
    ,
    c._getItemsForLayout = function(t) {
        return t.filter(function(t) {
            return !t.isIgnored
        })
    }
    ,
    c._layoutItems = function(t, e) {
        if (this._emitCompleteOnItems("layout", t),
        t && t.length) {
            var i = [];
            t.forEach(function(t) {
                var o = this._getItemLayoutPosition(t);
                o.item = t,
                o.isInstant = e || t.isLayoutInstant,
                i.push(o)
            }, this),
            this._processLayoutQueue(i)
        }
    }
    ,
    c._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    }
    ,
    c._processLayoutQueue = function(t) {
        this.updateStagger(),
        t.forEach(function(t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e)
        }, this)
    }
    ,
    c.updateStagger = function() {
        var t = this.options.stagger;
        return null === t || void 0 === t ? void (this.stagger = 0) : (this.stagger = a(t),
        this.stagger)
    }
    ,
    c._positionItem = function(t, e, i, o, n) {
        o ? t.goTo(e, i) : (t.stagger(n * this.stagger),
        t.moveTo(e, i))
    }
    ,
    c._postLayout = function() {
        this.resizeContainer()
    }
    ,
    c.resizeContainer = function() {
        var t = this._getOption("resizeContainer");
        if (t) {
            var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0),
            this._setContainerMeasure(e.height, !1))
        }
    }
    ,
    c._getContainerSize = d,
    c._setContainerMeasure = function(t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),
            t = Math.max(t, 0),
            this.element.style[e ? "width" : "height"] = t + "px"
        }
    }
    ,
    c._emitCompleteOnItems = function(t, e) {
        function i() {
            n.dispatchEvent(t + "Complete", null, [e])
        }
        function o() {
            r++,
            r == s && i()
        }
        var n = this
          , s = e.length;
        if (!e || !s)
            return void i();
        var r = 0;
        e.forEach(function(e) {
            e.once(t, o)
        })
    }
    ,
    c.dispatchEvent = function(t, e, i) {
        var o = e ? [e].concat(i) : i;
        if (this.emitEvent(t, o),
        h)
            if (this.$element = this.$element || h(this.element),
            e) {
                var n = h.Event(e);
                n.type = t,
                this.$element.trigger(n, i)
            } else
                this.$element.trigger(t, i)
    }
    ,
    c.ignore = function(t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }
    ,
    c.unignore = function(t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }
    ,
    c.stamp = function(t) {
        t = this._find(t),
        t && (this.stamps = this.stamps.concat(t),
        t.forEach(this.ignore, this))
    }
    ,
    c.unstamp = function(t) {
        t = this._find(t),
        t && t.forEach(function(t) {
            o.removeFrom(this.stamps, t),
            this.unignore(t)
        }, this)
    }
    ,
    c._find = function(t) {
        if (t)
            return "string" == typeof t && (t = this.element.querySelectorAll(t)),
            t = o.makeArray(t)
    }
    ,
    c._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(),
        this.stamps.forEach(this._manageStamp, this))
    }
    ,
    c._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect()
          , e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    }
    ,
    c._manageStamp = d,
    c._getElementOffset = function(t) {
        var e = t.getBoundingClientRect()
          , o = this._boundingRect
          , n = i(t)
          , s = {
            left: e.left - o.left - n.marginLeft,
            top: e.top - o.top - n.marginTop,
            right: o.right - e.right - n.marginRight,
            bottom: o.bottom - e.bottom - n.marginBottom
        };
        return s
    }
    ,
    c.handleEvent = o.handleEvent,
    c.bindResize = function() {
        t.addEventListener("resize", this),
        this.isResizeBound = !0
    }
    ,
    c.unbindResize = function() {
        t.removeEventListener("resize", this),
        this.isResizeBound = !1
    }
    ,
    c.onresize = function() {
        this.resize()
    }
    ,
    o.debounceMethod(s, "onresize", 100),
    c.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }
    ,
    c.needsResizeLayout = function() {
        var t = i(this.element)
          , e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth
    }
    ,
    c.addItems = function(t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)),
        e
    }
    ,
    c.appended = function(t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0),
        this.reveal(e))
    }
    ,
    c.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(e, !0),
            this.reveal(e),
            this.layoutItems(i)
        }
    }
    ,
    c.reveal = function(t) {
        if (this._emitCompleteOnItems("reveal", t),
        t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e),
                t.reveal()
            })
        }
    }
    ,
    c.hide = function(t) {
        if (this._emitCompleteOnItems("hide", t),
        t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e),
                t.hide()
            })
        }
    }
    ,
    c.revealItemElements = function(t) {
        var e = this.getItems(t);
        this.reveal(e)
    }
    ,
    c.hideItemElements = function(t) {
        var e = this.getItems(t);
        this.hide(e)
    }
    ,
    c.getItem = function(t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];
            if (i.element == t)
                return i
        }
    }
    ,
    c.getItems = function(t) {
        t = o.makeArray(t);
        var e = [];
        return t.forEach(function(t) {
            var i = this.getItem(t);
            i && e.push(i)
        }, this),
        e
    }
    ,
    c.remove = function(t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e),
        e && e.length && e.forEach(function(t) {
            t.remove(),
            o.removeFrom(this.items, t)
        }, this)
    }
    ,
    c.destroy = function() {
        var t = this.element.style;
        t.height = "",
        t.position = "",
        t.width = "",
        this.items.forEach(function(t) {
            t.destroy()
        }),
        this.unbindResize();
        var e = this.element.outlayerGUID;
        delete f[e],
        delete this.element.outlayerGUID,
        h && h.removeData(this.element, this.constructor.namespace)
    }
    ,
    s.data = function(t) {
        t = o.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && f[e]
    }
    ,
    s.create = function(t, e) {
        var i = r(s);
        return i.defaults = o.extend({}, s.defaults),
        o.extend(i.defaults, e),
        i.compatOptions = o.extend({}, s.compatOptions),
        i.namespace = t,
        i.data = s.data,
        i.Item = r(n),
        o.htmlInit(i, t),
        h && h.bridget && h.bridget(t, i),
        i
    }
    ;
    var m = {
        ms: 1,
        s: 1e3
    };
    return s.Item = n,
    s
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {},
    t.Isotope.Item = e(t.Outlayer))
}(window, function(t) {
    "use strict";
    function e() {
        t.Item.apply(this, arguments)
    }
    var i = e.prototype = Object.create(t.Item.prototype)
      , o = i._create;
    i._create = function() {
        this.id = this.layout.itemGUID++,
        o.call(this),
        this.sortData = {}
    }
    ,
    i.updateSortData = function() {
        if (!this.isIgnored) {
            this.sortData.id = this.id,
            this.sortData["original-order"] = this.id,
            this.sortData.random = Math.random();
            var t = this.layout.options.getSortData
              , e = this.layout._sorters;
            for (var i in t) {
                var o = e[i];
                this.sortData[i] = o(this.element, this)
            }
        }
    }
    ;
    var n = i.destroy;
    return i.destroy = function() {
        n.apply(this, arguments),
        this.css({
            display: ""
        })
    }
    ,
    e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {},
    t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function(t, e) {
    "use strict";
    function i(t) {
        this.isotope = t,
        t && (this.options = t.options[this.namespace],
        this.element = t.element,
        this.items = t.filteredItems,
        this.size = t.size)
    }
    var o = i.prototype
      , n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
    return n.forEach(function(t) {
        o[t] = function() {
            return e.prototype[t].apply(this.isotope, arguments)
        }
    }),
    o.needsVerticalResizeLayout = function() {
        var e = t(this.isotope.element)
          , i = this.isotope.size && e;
        return i && e.innerHeight != this.isotope.size.innerHeight
    }
    ,
    o._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments)
    }
    ,
    o.getColumnWidth = function() {
        this.getSegmentSize("column", "Width")
    }
    ,
    o.getRowHeight = function() {
        this.getSegmentSize("row", "Height")
    }
    ,
    o.getSegmentSize = function(t, e) {
        var i = t + e
          , o = "outer" + e;
        if (this._getMeasurement(i, o),
        !this[i]) {
            var n = this.getFirstItemSize();
            this[i] = n && n[o] || this.isotope.size["inner" + e]
        }
    }
    ,
    o.getFirstItemSize = function() {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element)
    }
    ,
    o.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments)
    }
    ,
    o.getSize = function() {
        this.isotope.getSize(),
        this.size = this.isotope.size
    }
    ,
    i.modes = {},
    i.create = function(t, e) {
        function n() {
            i.apply(this, arguments)
        }
        return n.prototype = Object.create(o),
        n.prototype.constructor = n,
        e && (n.options = e),
        n.prototype.namespace = t,
        i.modes[t] = n,
        n
    }
    ,
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function(t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var o = i.prototype;
    return o._resetLayout = function() {
        this.getSize(),
        this._getMeasurement("columnWidth", "outerWidth"),
        this._getMeasurement("gutter", "outerWidth"),
        this.measureColumns(),
        this.colYs = [];
        for (var t = 0; t < this.cols; t++)
            this.colYs.push(0);
        this.maxY = 0,
        this.horizontalColIndex = 0
    }
    ,
    o.measureColumns = function() {
        if (this.getContainerWidth(),
        !this.columnWidth) {
            var t = this.items[0]
              , i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth
        }
        var o = this.columnWidth += this.gutter
          , n = this.containerWidth + this.gutter
          , s = n / o
          , r = o - n % o
          , a = r && r < 1 ? "round" : "floor";
        s = Math[a](s),
        this.cols = Math.max(s, 1)
    }
    ,
    o.getContainerWidth = function() {
        var t = this._getOption("fitWidth")
          , i = t ? this.element.parentNode : this.element
          , o = e(i);
        this.containerWidth = o && o.innerWidth
    }
    ,
    o._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth
          , i = e && e < 1 ? "round" : "ceil"
          , o = Math[i](t.size.outerWidth / this.columnWidth);
        o = Math.min(o, this.cols);
        for (var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[n](o, t), r = {
            x: this.columnWidth * s.col,
            y: s.y
        }, a = s.y + t.size.outerHeight, u = o + s.col, h = s.col; h < u; h++)
            this.colYs[h] = a;
        return r
    }
    ,
    o._getTopColPosition = function(t) {
        var e = this._getTopColGroup(t)
          , i = Math.min.apply(Math, e);
        return {
            col: e.indexOf(i),
            y: i
        }
    }
    ,
    o._getTopColGroup = function(t) {
        if (t < 2)
            return this.colYs;
        for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++)
            e[o] = this._getColGroupY(o, t);
        return e
    }
    ,
    o._getColGroupY = function(t, e) {
        if (e < 2)
            return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i)
    }
    ,
    o._getHorizontalColPosition = function(t, e) {
        var i = this.horizontalColIndex % this.cols
          , o = t > 1 && i + t > this.cols;
        i = o ? 0 : i;
        var n = e.size.outerWidth && e.size.outerHeight;
        return this.horizontalColIndex = n ? i + t : this.horizontalColIndex,
        {
            col: i,
            y: this._getColGroupY(i, t)
        }
    }
    ,
    o._manageStamp = function(t) {
        var i = e(t)
          , o = this._getElementOffset(t)
          , n = this._getOption("originLeft")
          , s = n ? o.left : o.right
          , r = s + i.outerWidth
          , a = Math.floor(s / this.columnWidth);
        a = Math.max(0, a);
        var u = Math.floor(r / this.columnWidth);
        u -= r % this.columnWidth ? 0 : 1,
        u = Math.min(this.cols - 1, u);
        for (var h = this._getOption("originTop"), d = (h ? o.top : o.bottom) + i.outerHeight, l = a; l <= u; l++)
            this.colYs[l] = Math.max(d, this.colYs[l])
    }
    ,
    o._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()),
        t
    }
    ,
    o._getContainerFitWidth = function() {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; )
            t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }
    ,
    o.needsResizeLayout = function() {
        var t = this.containerWidth;
        return this.getContainerWidth(),
        t != this.containerWidth
    }
    ,
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function(t, e) {
    "use strict";
    var i = t.create("masonry")
      , o = i.prototype
      , n = {
        _getElementOffset: !0,
        layout: !0,
        _getMeasurement: !0
    };
    for (var s in e.prototype)
        n[s] || (o[s] = e.prototype[s]);
    var r = o.measureColumns;
    o.measureColumns = function() {
        this.items = this.isotope.filteredItems,
        r.call(this)
    }
    ;
    var a = o._getOption;
    return o._getOption = function(t) {
        return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
    }
    ,
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
    "use strict";
    var e = t.create("fitRows")
      , i = e.prototype;
    return i._resetLayout = function() {
        this.x = 0,
        this.y = 0,
        this.maxY = 0,
        this._getMeasurement("gutter", "outerWidth")
    }
    ,
    i._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter
          , i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && (this.x = 0,
        this.y = this.maxY);
        var o = {
            x: this.x,
            y: this.y
        };
        return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight),
        this.x += e,
        o
    }
    ,
    i._getContainerSize = function() {
        return {
            height: this.maxY
        }
    }
    ,
    e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
    "use strict";
    var e = t.create("vertical", {
        horizontalAlignment: 0
    })
      , i = e.prototype;
    return i._resetLayout = function() {
        this.y = 0
    }
    ,
    i._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment
          , i = this.y;
        return this.y += t.size.outerHeight,
        {
            x: e,
            y: i
        }
    }
    ,
    i._getContainerSize = function() {
        return {
            height: this.y
        }
    }
    ,
    e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function(i, o, n, s, r, a) {
        return e(t, i, o, n, s, r, a)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, function(t, e, i, o, n, s, r) {
    function a(t, e) {
        return function(i, o) {
            for (var n = 0; n < t.length; n++) {
                var s = t[n]
                  , r = i.sortData[s]
                  , a = o.sortData[s];
                if (r > a || r < a) {
                    var u = void 0 !== e[s] ? e[s] : e
                      , h = u ? 1 : -1;
                    return (r > a ? 1 : -1) * h
                }
            }
            return 0
        }
    }
    var u = t.jQuery
      , h = String.prototype.trim ? function(t) {
        return t.trim()
    }
    : function(t) {
        return t.replace(/^\s+|\s+$/g, "")
    }
      , d = e.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0
    });
    d.Item = s,
    d.LayoutMode = r;
    var l = d.prototype;
    l._create = function() {
        this.itemGUID = 0,
        this._sorters = {},
        this._getSorters(),
        e.prototype._create.call(this),
        this.modes = {},
        this.filteredItems = this.items,
        this.sortHistory = ["original-order"];
        for (var t in r.modes)
            this._initLayoutMode(t)
    }
    ,
    l.reloadItems = function() {
        this.itemGUID = 0,
        e.prototype.reloadItems.call(this)
    }
    ,
    l._itemize = function() {
        for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
            var o = t[i];
            o.id = this.itemGUID++
        }
        return this._updateItemsSortData(t),
        t
    }
    ,
    l._initLayoutMode = function(t) {
        var e = r.modes[t]
          , i = this.options[t] || {};
        this.options[t] = e.options ? n.extend(e.options, i) : i,
        this.modes[t] = new e(this)
    }
    ,
    l.layout = function() {
        return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
    }
    ,
    l._layout = function() {
        var t = this._getIsInstant();
        this._resetLayout(),
        this._manageStamps(),
        this.layoutItems(this.filteredItems, t),
        this._isLayoutInited = !0
    }
    ,
    l.arrange = function(t) {
        this.option(t),
        this._getIsInstant();
        var e = this._filter(this.items);
        this.filteredItems = e.matches,
        this._bindArrangeComplete(),
        this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e),
        this._sort(),
        this._layout()
    }
    ,
    l._init = l.arrange,
    l._hideReveal = function(t) {
        this.reveal(t.needReveal),
        this.hide(t.needHide)
    }
    ,
    l._getIsInstant = function() {
        var t = this._getOption("layoutInstant")
          , e = void 0 !== t ? t : !this._isLayoutInited;
        return this._isInstant = e,
        e
    }
    ,
    l._bindArrangeComplete = function() {
        function t() {
            e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems])
        }
        var e, i, o, n = this;
        this.once("layoutComplete", function() {
            e = !0,
            t()
        }),
        this.once("hideComplete", function() {
            i = !0,
            t()
        }),
        this.once("revealComplete", function() {
            o = !0,
            t()
        })
    }
    ,
    l._filter = function(t) {
        var e = this.options.filter;
        e = e || "*";
        for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
            var a = t[r];
            if (!a.isIgnored) {
                var u = s(a);
                u && i.push(a),
                u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a)
            }
        }
        return {
            matches: i,
            needReveal: o,
            needHide: n
        }
    }
    ,
    l._getFilterTest = function(t) {
        return u && this.options.isJQueryFiltering ? function(e) {
            return u(e.element).is(t);
        }
        : "function" == typeof t ? function(e) {
            return t(e.element)
        }
        : function(e) {
            return o(e.element, t)
        }
    }
    ,
    l.updateSortData = function(t) {
        var e;
        t ? (t = n.makeArray(t),
        e = this.getItems(t)) : e = this.items,
        this._getSorters(),
        this._updateItemsSortData(e)
    }
    ,
    l._getSorters = function() {
        var t = this.options.getSortData;
        for (var e in t) {
            var i = t[e];
            this._sorters[e] = f(i)
        }
    }
    ,
    l._updateItemsSortData = function(t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) {
            var o = t[i];
            o.updateSortData()
        }
    }
    ;
    var f = function() {
        function t(t) {
            if ("string" != typeof t)
                return t;
            var i = h(t).split(" ")
              , o = i[0]
              , n = o.match(/^\[(.+)\]$/)
              , s = n && n[1]
              , r = e(s, o)
              , a = d.sortDataParsers[i[1]];
            return t = a ? function(t) {
                return t && a(r(t))
            }
            : function(t) {
                return t && r(t)
            }
        }
        function e(t, e) {
            return t ? function(e) {
                return e.getAttribute(t)
            }
            : function(t) {
                var i = t.querySelector(e);
                return i && i.textContent
            }
        }
        return t
    }();
    d.sortDataParsers = {
        parseInt: function(t) {
            return parseInt(t, 10)
        },
        parseFloat: function(t) {
            return parseFloat(t)
        }
    },
    l._sort = function() {
        if (this.options.sortBy) {
            var t = n.makeArray(this.options.sortBy);
            this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
            var e = a(this.sortHistory, this.options.sortAscending);
            this.filteredItems.sort(e)
        }
    }
    ,
    l._getIsSameSortBy = function(t) {
        for (var e = 0; e < t.length; e++)
            if (t[e] != this.sortHistory[e])
                return !1;
        return !0
    }
    ,
    l._mode = function() {
        var t = this.options.layoutMode
          , e = this.modes[t];
        if (!e)
            throw new Error("No layout mode: " + t);
        return e.options = this.options[t],
        e
    }
    ,
    l._resetLayout = function() {
        e.prototype._resetLayout.call(this),
        this._mode()._resetLayout()
    }
    ,
    l._getItemLayoutPosition = function(t) {
        return this._mode()._getItemLayoutPosition(t)
    }
    ,
    l._manageStamp = function(t) {
        this._mode()._manageStamp(t)
    }
    ,
    l._getContainerSize = function() {
        return this._mode()._getContainerSize()
    }
    ,
    l.needsResizeLayout = function() {
        return this._mode().needsResizeLayout()
    }
    ,
    l.appended = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i = this._filterRevealAdded(e);
            this.filteredItems = this.filteredItems.concat(i)
        }
    }
    ,
    l.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            this._resetLayout(),
            this._manageStamps();
            var i = this._filterRevealAdded(e);
            this.layoutItems(this.filteredItems),
            this.filteredItems = i.concat(this.filteredItems),
            this.items = e.concat(this.items)
        }
    }
    ,
    l._filterRevealAdded = function(t) {
        var e = this._filter(t);
        return this.hide(e.needHide),
        this.reveal(e.matches),
        this.layoutItems(e.matches, !0),
        e.matches
    }
    ,
    l.insert = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i, o, n = e.length;
            for (i = 0; i < n; i++)
                o = e[i],
                this.element.appendChild(o.element);
            var s = this._filter(e).matches;
            for (i = 0; i < n; i++)
                e[i].isLayoutInstant = !0;
            for (this.arrange(),
            i = 0; i < n; i++)
                delete e[i].isLayoutInstant;
            this.reveal(s)
        }
    }
    ;
    var c = l.remove;
    return l.remove = function(t) {
        t = n.makeArray(t);
        var e = this.getItems(t);
        c.call(this, t);
        for (var i = e && e.length, o = 0; i && o < i; o++) {
            var s = e[o];
            n.removeFrom(this.filteredItems, s)
        }
    }
    ,
    l.shuffle = function() {
        for (var t = 0; t < this.items.length; t++) {
            var e = this.items[t];
            e.sortData.random = Math.random()
        }
        this.options.sortBy = "random",
        this._sort(),
        this._layout()
    }
    ,
    l._noTransition = function(t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var o = t.apply(this, e);
        return this.options.transitionDuration = i,
        o
    }
    ,
    l.getFilteredItemElements = function() {
        return this.filteredItems.map(function(t) {
            return t.element
        })
    }
    ,
    d
});
