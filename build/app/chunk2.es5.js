/*! Built with http://stenciljs.com */
App.loadBundle("./chunk2.js", ["exports"], function (e) { window.App.h; var t = "/", n = "./", r = new RegExp(["(\\\\.)", "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"), "g"); function i(e) { return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"); } function a(e) { return e.replace(/([=!:$/()])/g, "\\$1"); } function u(e) { return e && e.sensitive ? "" : "i"; } function l(e, o, p) { return e instanceof RegExp ? function (e, t) { if (!t)
    return e; var n = e.source.match(/\((?!\?)/g); if (n)
    for (var r = 0; r < n.length; r++)
        t.push({ name: r, prefix: null, delimiter: null, optional: !1, repeat: !1, partial: !1, pattern: null }); return e; }(e, o) : Array.isArray(e) ? function (e, t, n) { for (var r = [], i = 0; i < e.length; i++)
    r.push(l(e[i], t, n).source); return new RegExp("(?:" + r.join("|") + ")", u(n)); }(e, o, p) : function (e, l, o) { return function (e, r, a) { for (var l = (a = a || {}).strict, o = !1 !== a.end, p = i(a.delimiter || t), c = a.delimiters || n, s = [].concat(a.endsWith || []).map(i).concat("$").join("|"), f = "", h = !1, d = 0; d < e.length; d++) {
    var g = e[d];
    if ("string" == typeof g)
        f += i(g), h = d === e.length - 1 && c.indexOf(g[g.length - 1]) > -1;
    else {
        var x = i(g.prefix), v = g.repeat ? "(?:" + g.pattern + ")(?:" + x + "(?:" + g.pattern + "))*" : g.pattern;
        r && r.push(g), g.optional ? g.partial ? f += x + "(" + v + ")?" : f += "(?:" + x + "(" + v + "))?" : f += x + "(" + v + ")";
    }
} return o ? (l || (f += "(?:" + p + ")?"), f += "$" === s ? "$" : "(?=" + s + ")") : (l || (f += "(?:" + p + "(?=" + s + "))?"), h || (f += "(?=" + p + "|" + s + ")")), new RegExp("^" + f, u(a)); }(function (e, u) { for (var l, o = [], p = 0, c = 0, s = "", f = u && u.delimiter || t, h = u && u.delimiters || n, d = !1; null !== (l = r.exec(e));) {
    var g = l[0], x = l[1], v = l.index;
    if (s += e.slice(c, v), c = v + g.length, x)
        s += x[1], d = !0;
    else {
        var m = "", $ = e[c], y = l[2], w = l[3], E = l[4], A = l[5];
        if (!d && s.length) {
            var R = s.length - 1;
            h.indexOf(s[R]) > -1 && (m = s[R], s = s.slice(0, R));
        }
        s && (o.push(s), s = "", d = !1);
        var j = "" !== m && void 0 !== $ && $ !== m, O = "+" === A || "*" === A, b = "?" === A || "*" === A, k = m || f, B = w || E;
        o.push({ name: y || p++, prefix: m, delimiter: k, optional: b, repeat: O, partial: j, pattern: B ? a(B) : "[^" + i(k) + "]+?" });
    }
} return (s || c < e.length) && o.push(s + e.substr(c)), o; }(e, o), l, o); }(e, o, p); } var o = {}; var p = 0; e.matchPath = function (e, t) {
    if (t === void 0) { t = {}; }
    "string" == typeof t && (t = { path: t });
    var _a = t.path, n = _a === void 0 ? "/" : _a, _b = t.exact, r = _b === void 0 ? !1 : _b, _c = t.strict, i = _c === void 0 ? !1 : _c, _d = function (e, t) { var n = "" + t.end + t.strict, r = o[n] || (o[n] = {}), i = JSON.stringify(e); if (r[i])
        return r[i]; var a = [], u = { re: l(e, a, t), keys: a }; return p < 1e4 && (r[i] = u, p += 1), u; }(n, { end: r, strict: i }), a = _d.re, u = _d.keys, c = a.exec(e);
    if (!c)
        return null;
    var s = c[0], f = c.slice(1), h = e === s;
    return r && !h ? null : { path: n, url: "/" === n && "" === s ? "/" : s, isExact: h, params: u.reduce(function (e, t, n) { return e[t.name] = f[n], e; }, {}) };
}; });
