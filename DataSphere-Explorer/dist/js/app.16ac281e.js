(function (e) {
  function t(t) {
    for (
      var n, r, o = t[0], c = t[1], l = t[2], u = 0, M = [];
      u < o.length;
      u++
    )
      (r = o[u]),
        Object.prototype.hasOwnProperty.call(a, r) && a[r] && M.push(a[r][0]),
        (a[r] = 0);
    for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
    d && d(t);
    while (M.length) M.shift()();
    return s.push.apply(s, l || []), i();
  }
  function i() {
    for (var e, t = 0; t < s.length; t++) {
      for (var i = s[t], n = !0, r = 1; r < i.length; r++) {
        var c = i[r];
        0 !== a[c] && (n = !1);
      }
      n && (s.splice(t--, 1), (e = o((o.s = i[0]))));
    }
    return e;
  }
  var n = {},
    a = { app: 0 },
    s = [];
  function r(e) {
    return (
      o.p +
      "js/" +
      ({}[e] || e) +
      "." +
      { "chunk-2d22998c": "fc808a1d" }[e] +
      ".js"
    );
  }
  function o(t) {
    if (n[t]) return n[t].exports;
    var i = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(i.exports, i, i.exports, o), (i.l = !0), i.exports;
  }
  (o.e = function (e) {
    var t = [],
      i = a[e];
    if (0 !== i)
      if (i) t.push(i[2]);
      else {
        var n = new Promise(function (t, n) {
          i = a[e] = [t, n];
        });
        t.push((i[2] = n));
        var s,
          c = document.createElement("script");
        (c.charset = "utf-8"),
          (c.timeout = 120),
          o.nc && c.setAttribute("nonce", o.nc),
          (c.src = r(e));
        var l = new Error();
        s = function (t) {
          (c.onerror = c.onload = null), clearTimeout(u);
          var i = a[e];
          if (0 !== i) {
            if (i) {
              var n = t && ("load" === t.type ? "missing" : t.type),
                s = t && t.target && t.target.src;
              (l.message =
                "Loading chunk " + e + " failed.\n(" + n + ": " + s + ")"),
                (l.name = "ChunkLoadError"),
                (l.type = n),
                (l.request = s),
                i[1](l);
            }
            a[e] = void 0;
          }
        };
        var u = setTimeout(function () {
          s({ type: "timeout", target: c });
        }, 12e4);
        (c.onerror = c.onload = s), document.head.appendChild(c);
      }
    return Promise.all(t);
  }),
    (o.m = e),
    (o.c = n),
    (o.d = function (e, t, i) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
    }),
    (o.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.t = function (e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (
        (o.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          o.d(
            i,
            n,
            function (t) {
              return e[t];
            }.bind(null, n)
          );
      return i;
    }),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return o.d(t, "a", t), t;
    }),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = ""),
    (o.oe = function (e) {
      throw (console.error(e), e);
    });
  var c = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    l = c.push.bind(c);
  (c.push = t), (c = c.slice());
  for (var u = 0; u < c.length; u++) t(c[u]);
  var d = l;
  s.push([0, "chunk-vendors"]), i();
})({
  0: function (e, t, i) {
    e.exports = i("56d7");
  },
  "017d": function (e, t, i) {},
  "034f": function (e, t, i) {
    "use strict";
    i("85ec");
  },
  "03c4": function (e, t, i) {},
  "03d9": function (e, t, i) {
    "use strict";
    i("df25");
  },
  "0582": function (e, t, i) {
    "use strict";
    i("7a18");
  },
  "0bf4": function (e, t) {
    e.exports =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMSAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjQ5OTggMTYuNjY2N0M2LjgyNDg0IDE2LjY2NjcgMy44MzMxNyAxMy42NzUgMy44MzMxNyAxMEMzLjgzMzE3IDYuMzI1MDIgNi44MjQ4NCAzLjMzMzM1IDEwLjQ5OTggMy4zMzMzNUMxNC4xNzQ4IDMuMzMzMzUgMTcuMTY2NSA2LjMyNTAyIDE3LjE2NjUgMTBDMTcuMTY2NSAxMy42NzUgMTQuMTc0OCAxNi42NjY3IDEwLjQ5OTggMTYuNjY2N1pNMTAuNDk5OCAxLjY2NjY5QzkuNDA1NDkgMS42NjY2OSA4LjMyMTg2IDEuODgyMjQgNy4zMTA4MSAyLjMwMTAyQzYuMjk5NzYgMi43MTk4MSA1LjM4MTEgMy4zMzM2NCA0LjYwNzI4IDQuMTA3NDZDMy4wNDQ0OCA1LjY3MDI3IDIuMTY2NSA3Ljc4OTg4IDIuMTY2NSAxMEMyLjE2NjUgMTIuMjEwMiAzLjA0NDQ4IDE0LjMyOTggNC42MDcyOCAxNS44OTI2QzUuMzgxMSAxNi42NjY0IDYuMjk5NzYgMTcuMjgwMiA3LjMxMDgxIDE3LjY5OUM4LjMyMTg2IDE4LjExNzggOS40MDU0OSAxOC4zMzM0IDEwLjQ5OTggMTguMzMzNEMxMi43MSAxOC4zMzM0IDE0LjgyOTYgMTcuNDU1NCAxNi4zOTI0IDE1Ljg5MjZDMTcuOTU1MiAxNC4zMjk4IDE4LjgzMzIgMTIuMjEwMiAxOC44MzMyIDEwQzE4LjgzMzIgOC45MDU2NyAxOC42MTc2IDcuODIyMDQgMTguMTk4OCA2LjgxMDk5QzE3Ljc4IDUuNzk5OTUgMTcuMTY2MiA0Ljg4MTI5IDE2LjM5MjQgNC4xMDc0NkMxNS42MTg2IDMuMzMzNjQgMTQuNjk5OSAyLjcxOTgxIDEzLjY4ODkgMi4zMDEwMkMxMi42Nzc4IDEuODgyMjQgMTEuNTk0MiAxLjY2NjY5IDEwLjQ5OTggMS42NjY2OVoiIGZpbGw9IiMwMENDOTYiLz4KPHJlY3QgeD0iNi4wOTcxNyIgeT0iMTAuMjc3MSIgd2lkdGg9IjEuNjciIGhlaWdodD0iNC4zNDUiIHRyYW5zZm9ybT0icm90YXRlKC00NSA2LjA5NzE3IDEwLjI3NzEpIiBmaWxsPSIjMDBDQzk2Ii8+CjxyZWN0IHg9IjEzLjc1MiIgeT0iNi45NzU4OSIgd2lkdGg9IjEuNjciIGhlaWdodD0iNy43NDM1OSIgdHJhbnNmb3JtPSJyb3RhdGUoNDUgMTMuNzUyIDYuOTc1ODkpIiBmaWxsPSIjMDBDQzk2Ii8+Cjwvc3ZnPgo=";
  },
  "0c8d": function (e, t, i) {},
  "0ca3": function (e, t) {
    e.exports =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSI5IiB2aWV3Qm94PSIwIDAgNCA5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNCAwLjk4MDU2VjQuNUw0LjAwMDA0IDcuNzE0MjhMNCA5TDEuMTA2OTRlLTA3IDQuNUw0IDBWMC45ODA1NloiIGZpbGw9IiM1MDY3ODQiLz4KPC9zdmc+Cg==";
  },
  "0cce": function (e, t, i) {},
  "0f34": function (e, t, i) {
    "use strict";
    i("1ec9");
  },
  1: function (e, t) {},
  1002: function (e, t, i) {},
  1345: function (e, t, i) {
    "use strict";
    i("ec62");
  },
  1505: function (e, t) {
    e.exports =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI2LjgzMTEgMzQuNjU1NEMyNS40Njc1IDMzLjgxNzggMjQuMTc3IDMyLjg2NTUgMjIuOTczNSAzMS44MDg2VjE0LjM2MTZIMzAuNTcyOFYzNi43NTNDMjkuMzE0NiAzNi4wOTgyIDI4LjA2NzMgMzUuMzk5IDI2LjgzMTEgMzQuNjU1NFpNNDEuNDY2OSAyNS44NDg2SDMzLjg2NzVWMzguMTUxNEMzNi4zNDc3IDM5LjMwNTUgMzguODg0IDQwLjMzMzQgNDEuNDY2OSA0MS4yMzEzVjI1Ljg0ODZaTTIyLjk3MzUgMzUuMzA0NkwyMi40NzY4IDM0LjkwNTFDMjEuNzE1MiAzNC4yNzI1IDIxLjAwMzMgMzMuNjIzMiAyMC4zMjQ1IDMyLjk3MzlMMi4yOTQ3IDMwLjg3NjNMNS42MDU5NiAzNy4zMDI0TDI4Ljc4NDggMzkuMjAwMkMyNi43NTExIDM4LjA1MzcgMjQuODA4MiAzNi43NTEzIDIyLjk3MzUgMzUuMzA0NlpNNDEuMDY5NSA0NC42NDQxQzM4LjQ4MjkgNDMuNzk0NiAzNS45NDU4IDQyLjc5OTcgMzMuNDcwMiA0MS42NjQxTDMyLjU0MyA0MS4xOThMMTcuMjYxNiA0MC4xODI1TDE5Ljg0NDQgNDUuNTkzTDQ2LjUgNDYuMjA5QzQ0LjY3ODggNDUuNzc2MSA0Mi44NDExIDQ1LjI0MzQgNDEuMDY5NSA0NC42NDQxWk05LjM0NzY4IDE0LjM2MTZDMTIuMjY0OSAxOS40OTA1IDE1LjczNSAyNC4yODA3IDE5LjY5NTQgMjguNjQ1NVYxMS4yNjUxTDIuOTkwMDcgMi45OTExNUwxLjUgMjIuMzg1OUwxOC43MDIgMzEuMjU5MkMxNC4xOTE5IDI2LjUyODMgMTAuOTcwMyAyMC43MDg3IDkuMzQ3NjggMTQuMzYxNloiIGZpbGw9IiMxMTlERkYiLz4KPC9zdmc+Cg==";
  },
  1678: function (e, t) {
    e.exports =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzQiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA3NCA5NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQyIDRMMjguODg1NyAwQzcuNDM3MjkgMTYuNDUxMiAxLjg0MzE4ZS0wNSA2MS43OTYxIDAgOTZINzRDNzEuNzQxNiA2Mi4xMDg1IDU3LjUgMjQgNDIgNFoiIGZpbGw9IiNDOEQ0RTMiLz4KPG1hc2sgaWQ9Im1hc2swIiBtYXNrLXR5cGU9ImFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIwIiB5PSIwIiB3aWR0aD0iNzQiIGhlaWdodD0iOTYiPgo8cGF0aCBkPSJNNDIgNEwyOC44ODU3IDBDNy40MzcyOSAxNi40NTEyIDEuODQzMThlLTA1IDYxLjc5NjEgMCA5Nkg3NEM3MS43NDE2IDYyLjEwODUgNTcuNSAyNCA0MiA0WiIgZmlsbD0iI0M4RDRFMyIvPgo8L21hc2s+CjxnIG1hc2s9InVybCgjbWFzazApIj4KPHBhdGggZD0iTTMyLjAwMDEgNjAuNUMzOC41MDAxIDczIDYzLjUwMDEgNzYuNDk5OSA3My40OTk5IDczQzczLjQ5OTkgNzMgNzUuNzk5MiA2MC43OTk0IDc1LjUgNjAuNTAwMkM2OS43MzM5IDU0LjczMzggNDMuMDAwMyA1Ny45OTk4IDMyLjAwMDEgNjAuNVoiIGZpbGw9IiNBMkIxQzYiLz4KPC9nPgo8L3N2Zz4K";
  },
  "16a3": function (e, t, i) {
    "use strict";
    i("3b6a");
  },
  "19bd": function (e, t, i) {
    "use strict";
    i("1d64");
  },
  "19be": function (e, t, i) {},
  "1d64": function (e, t, i) {},
  "1ec9": function (e, t, i) {},
  "231b": function (e, t, i) {},
  2335: function (e, t) {
    e.exports =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA2IiBoZWlnaHQ9IjU2IiB2aWV3Qm94PSIwIDAgMTA2IDU2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTA0LjI1MiAxLjQwODU1QzEwMC4yNjIgLTIuMDQ5NCA5My43NzczIDEuNDA4NTQgOTEuMjgzMiA1Ljg1NDI2TDEwMC4yNjIgMTQuMzkzOUMxMDQuNzUxIDEwLjc5NDEgMTA4LjI0MyA0Ljg2NjQ2IDEwNC4yNTIgMS40MDg1NVoiIGZpbGw9IiNGM0M2QkYiLz4KPHBhdGggZD0iTTkxLjAxMjMgNC4zNzIwN0M3Mi40NTY4IDI1LjE3MDQgMzAuNDI3OSAyMi45MjYzIDE5Ljk1MjcgNC4zNzIwN0wwIDQ0LjY2MTVDMzguNDA5IDY5Ljg1NDcgODYuNzk0NCA1MC4wOTU0IDEwMi4yNTggMTQuNTI4Nkw5MS4wMTIzIDQuMzcyMDdaIiBmaWxsPSIjQzhENEUzIi8+Cjwvc3ZnPgo=";
  },
  "28b7": function (e, t, i) {
    "use strict";
    t["a"] = {
      send: function (e, t, i) {
        var n = new CustomEvent("sqliteviz-app-event", {
          detail: { name: e, value: t, labels: i || {} },
        });
        window.dispatchEvent(n);
      },
    };
  },
  "28f9": function (e, t, i) {
    "use strict";
    i("b288");
  },
  "2de1": function (e, t, i) {},
  3011: function (e, t, i) {
    "use strict";
    i("4079");
  },
  3357: function (e, t, i) {
    "use strict";
    i("deb6");
  },
  "33da": function (e, t, i) {},
  "345a": function (e, t, i) {},
  3742: function (e, t, i) {
    "use strict";
    i("381e");
  },
  "381e": function (e, t, i) {},
  "3a01": function (e, t, i) {},
  "3a016": function (e, t) {
    e.exports =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUwIiBoZWlnaHQ9IjE3NSIgdmlld0JveD0iMCAwIDQ1MCAxNzUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxtYXNrIGlkPSJtYXNrMCIgbWFzay10eXBlPSJhbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjQ1MCIgaGVpZ2h0PSIxNzUiPgo8cmVjdCB3aWR0aD0iNDUwIiBoZWlnaHQ9IjE3NSIgZmlsbD0iI0M0QzRDNCIvPgo8L21hc2s+CjxnIG1hc2s9InVybCgjbWFzazApIj4KPHBhdGggZD0iTTEyOC4yMDcgMS45OTI3MkM3MC4xOTcyIC05Ljg0ODk3IDE4Ljc0NSAzMC44ODk1IDQuMzE5ODUgOTIuNjY3OEMtMTAuMTA1NCAxNTQuNDQ2IDE0LjMzMzcgMTg2LjMzMiAzNy4zMjE4IDIyNi4xODlDNzIuMzc4NCAyODYuOTcxIDE4MS41NTEgMzQxLjIzNyAyNjUuMDgzIDMzNy43ODlDMzM3LjUxNyAzMzQuOCAzODkuMDI4IDMxNi41MTQgNDI1LjkzNiAyNDguMTExQzQ4OS4zNzggMTMwLjUzMiA0MTcuNDQ0IDUzLjkwNjUgMzI1LjUyNyA2OC4yNTUxQzIxNC41NzEgODUuNTc2IDIxMy42MjkgMTkuNDMwMiAxMjguMjA3IDEuOTkyNzJaIiBmaWxsPSIjREZFOEYzIi8+CjxwYXRoIGQ9Ik0xNTYuMjg0IDE2OS40MjZDMTU4LjE1OCAxNjcuNTUzIDE2MC42OTkgMTY2LjUgMTYzLjM0OSAxNjYuNUgzMzEuOTExQzMzNC41NjEgMTY2LjUgMzM3LjEwMiAxNjcuNTUzIDMzOC45NzYgMTY5LjQyNkwzNDYuMDQxIDE3Ni40OTFIMTQ5LjIyTDE1Ni4yODQgMTY5LjQyNloiIGZpbGw9IiNDOEQ0RTMiLz4KPHBhdGggZD0iTTE3NC4wOTkgMTcwLjI1OEMxNzQuMjgzIDE3MC4wOSAxNzQuNTI0IDE2OS45OTcgMTc0Ljc3MyAxNjkuOTk3SDMxOC40OUMzMTguNzM5IDE2OS45OTcgMzE4Ljk4IDE3MC4wOSAzMTkuMTY0IDE3MC4yNThWMTcwLjI1OEMzMTkuODM3IDE3MC44NzQgMzE5LjQwMiAxNzEuOTk1IDMxOC40OSAxNzEuOTk1SDE3NC43NzNDMTczLjg2MSAxNzEuOTk1IDE3My40MjYgMTcwLjg3NCAxNzQuMDk5IDE3MC4yNThWMTcwLjI1OFoiIGZpbGw9IiM1MDY3ODQiLz4KPHBhdGggZD0iTTk0LjIyNyA4Ny44ODFDOTQuMzk2MiA4MC4xOTg4IDkyLjUwNDggNjUuMDYwOCA4My41ODU3IDY1Ljk2NjRDODMuNTg1NyA2NS45NjY0IDcwLjU3NzYgNzYuMDg3NyA3NS42MzkxIDgzLjYxODhDODAuNzAwNSA5MS4xNDk4IDkzLjQ2NzcgOTQuNTA4MyA5NC4yMjcgODcuODgxWiIgZmlsbD0iI0YzQzZCRiIvPgo8cGF0aCBkPSJNODkuMjc1IDkxLjMxMDVMODggOThDODUuNTAyMyA5OS40OTg2IDc2LjU1MzEgOTkuMDE5NiA3NC41IDk1Qzc0LjUgOTUgNzYuODI5OCA4OS45MTM1IDc3Ljg0NDYgODQuOTIyNkw4OS4yNzUgOTEuMzEwNVoiIGZpbGw9IiNGM0M2QkYiLz4KPHBhdGggZD0iTTkyLjI3MTkgNjcuMTE2MUM5Mi4yNzE5IDcyLjc2ODkgODQuMjI0MiA2OC44ODcyIDgyLjM0MjMgNzIuOTEyNkM4MC40NjA1IDc2LjkzNzkgNzcuMzk1MiA4Ni45MjA4IDc3LjM5NTIgODYuOTIwOEM3Mi42MzIzIDg0Ljc0MTQgNjYuNzI3MyA2OS4zMyA3My4yOTM2IDY1LjEwMzRDNzkuMzUwNiA2MS4yMDQ3IDkyLjI3MTkgNjMuMDEwMiA5Mi4yNzE5IDY3LjExNjFaIiBmaWxsPSIjNTA2Nzg0Ii8+CjxwYXRoIGQ9Ik03OS43NjU0IDgzLjk2MjhDNzUuMTUyMiA4MC43MjY5IDc2LjM3MSA3NS4xMzQzIDc5Ljc1NjIgNzYuOTUzNEM4NS4xOTk0IDc5Ljg3ODUgODEuMjkzNCA4Mi45ODA4IDc5Ljc2NTQgODMuOTYyOFoiIGZpbGw9IiNGM0M2QkYiLz4KPC9nPgo8L3N2Zz4K";
  },
  "3b6a": function (e, t, i) {},
  "3bb9": function (e, t, i) {
    "use strict";
    i("9f6c");
  },
  "3c43": function (e, t, i) {},
  "3d10": function (e, t) {
    e.exports =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSIxNyIgaGVpZ2h0PSIxNyIgcng9IjIuNSIgZmlsbD0iI0RGRThGMyIgc3Ryb2tlPSIjQzhENEUzIi8+CjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2QpIj4KPHBhdGggZD0iTTE1Ljc1IDUuMjVMNi43NSAxNC4yNUwyLjYyNSAxMC4xMjVMMy42ODI1IDkuMDY3NUw2Ljc1IDEyLjEyNzVMMTQuNjkyNSA0LjE5MjVMMTUuNzUgNS4yNVoiIGZpbGw9IiNBMkIxQzYiLz4KPC9nPgo8ZGVmcz4KPGZpbHRlciBpZD0iZmlsdGVyMF9kIiB4PSIwLjYyNSIgeT0iMy4xOTI1IiB3aWR0aD0iMTcuMTI1IiBoZWlnaHQ9IjE0LjA1NzUiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiLz4KPGZlT2Zmc2V0IGR5PSIxIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMC4xNjQ3MDYgMCAwIDAgMCAwLjI0NzA1OSAwIDAgMCAwIDAuMzcyNTQ5IDAgMCAwIDAuMiAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93IiByZXN1bHQ9InNoYXBlIi8+CjwvZmlsdGVyPgo8L2RlZnM+Cjwvc3ZnPgo=";
  },
  "3f7a": function (e, t, i) {},
  4079: function (e, t, i) {},
  4378: function (e, t, i) {
    "use strict";
    i("70d6");
  },
  "494a": function (e, t, i) {},
  "4a8d": function (e, t, i) {},
  "4e61": function (e, t, i) {
    "use strict";
    i("60b8");
  },
  5207: function (e, t, i) {
    "use strict";
    i("665c");
  },
  "523c": function (e, t, i) {
    "use strict";
    i("3f7a");
  },
  "547f": function (e, t, i) {},
  "56d7": function (e, t, i) {
    "use strict";
    i.r(t);
    i("e260"),
      i("e6cf"),
      i("cca6"),
      i("a79d"),
      i("caad"),
      i("d3b7"),
      i("3ca3"),
      i("ddb0");
    var n = i("2b0e"),
      a = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i("div", { attrs: { id: "app" } }, [i("router-view")], 1);
      },
      s = [],
      r = (i("034f"), i("2877")),
      o = {},
      c = Object(r["a"])(o, a, s, !1, null, null, null),
      l = c.exports,
      u = i("c7eb"),
      d = i("1da1"),
      M = (i("b0c0"), i("8c4f")),
      p = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "div",
          [
            i("splitpanes", {
              staticClass: "schema-tabs-splitter",
              attrs: {
                before: { size: e.schemaWidth, max: 30 },
                after: { size: 100 - e.schemaWidth, max: 100 },
                default: { before: 20, after: 80 },
              },
              scopedSlots: e._u([
                {
                  key: "left-pane",
                  fn: function () {
                    return [i("schema")];
                  },
                  proxy: !0,
                },
                {
                  key: "right-pane",
                  fn: function () {
                    return [i("tabs")];
                  },
                  proxy: !0,
                },
              ]),
            }),
          ],
          1
        );
      },
      g = [],
      h =
        (i("a15b"),
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            {
              ref: "container",
              class: [
                "splitpanes",
                "splitpanes-" + (e.horizontal ? "horizontal" : "vertical"),
                { "splitpanes-dragging": e.dragging },
              ],
            },
            [
              n("div", {
                ref: "movableSplitter",
                staticClass: "movable-splitter",
                style: e.movableSplitterStyle,
              }),
              n(
                "div",
                {
                  ref: "left",
                  staticClass: "splitpanes-pane",
                  style: e.styles.before,
                  attrs: { size: e.paneBefore.size, "max-size": "30" },
                },
                [e._t("left-pane")],
                2
              ),
              n(
                "div",
                {
                  staticClass: "splitpanes-splitter",
                  on: { mousedown: e.bindEvents, touchstart: e.bindEvents },
                },
                [
                  n(
                    "div",
                    {
                      class: [
                        "toggle-btns",
                        {
                          both:
                            100 === e.after.max &&
                            100 === e.before.max &&
                            e.paneAfter.size > 0 &&
                            e.paneBefore.size > 0,
                        },
                      ],
                    },
                    [
                      100 === e.after.max && e.paneAfter.size > 0
                        ? n(
                            "div",
                            {
                              staticClass: "toggle-btn",
                              on: {
                                click: function (t) {
                                  return e.togglePane(e.paneBefore);
                                },
                              },
                            },
                            [
                              n("img", {
                                staticClass: "direction-icon",
                                style: e.directionBeforeIconStyle,
                                attrs: { src: i("0ca3") },
                              }),
                            ]
                          )
                        : e._e(),
                      100 === e.before.max && e.paneBefore.size > 0
                        ? n(
                            "div",
                            {
                              staticClass: "toggle-btn",
                              on: {
                                click: function (t) {
                                  return e.togglePane(e.paneAfter);
                                },
                              },
                            },
                            [
                              n("img", {
                                staticClass: "direction-icon",
                                style: e.directionAfterIconStyle,
                                attrs: { src: i("0ca3") },
                              }),
                            ]
                          )
                        : e._e(),
                    ]
                  ),
                ]
              ),
              n(
                "div",
                {
                  ref: "right",
                  staticClass: "splitpanes-pane",
                  style: e.styles.after,
                },
                [e._t("right-pane")],
                2
              ),
            ]
          );
        }),
      m = [],
      I = i("5530"),
      N = i("ade3"),
      f = {
        getCurrentMouseDrag: function (e, t) {
          var i = t.getBoundingClientRect(),
            n = "ontouchstart" in window && e.touches ? e.touches[0] : e,
            a = n.clientX,
            s = n.clientY;
          return { x: a - i.left, y: s - i.top };
        },
        getCurrentDragPercentage: function (e, t, i) {
          var n = this.getCurrentMouseDrag(e, t);
          n = n[i ? "y" : "x"];
          var a = t[i ? "clientHeight" : "clientWidth"];
          return (100 * n) / a;
        },
        calculateOffset: function (e, t) {
          var i = t.container,
            n = t.isHorisontal,
            a = t.paneBeforeMax,
            s = t.paneAfterMax,
            r = this.getCurrentDragPercentage(e, i, n),
            o = a < 100 && r >= a,
            c = s < 100 && r <= 100 - s;
          return o || c
            ? o
              ? a
              : Math.max(100 - s, 0)
            : Math.min(Math.max(r, 0), a);
        },
      },
      v = {
        name: "Splitpanes",
        props: {
          horizontal: { type: Boolean, default: !1 },
          before: { type: Object },
          after: { type: Object },
          default: {
            type: Object,
            default: function () {
              return { before: 50, after: 50 };
            },
          },
        },
        data: function () {
          return {
            container: null,
            paneBefore: this.before,
            paneAfter: this.after,
            beforeMinimising:
              this.after.size && this.before.size
                ? { before: this.before.size, after: this.after.size }
                : this.default,
            dragging: !1,
            movableSplitter: { top: 0, left: 0, visibility: "hidden" },
          };
        },
        computed: {
          styles: function () {
            return {
              before: Object(N["a"])(
                {},
                this.horizontal ? "height" : "width",
                "".concat(this.paneBefore.size, "%")
              ),
              after: Object(N["a"])(
                {},
                this.horizontal ? "height" : "width",
                "".concat(this.paneAfter.size, "%")
              ),
            };
          },
          movableSplitterStyle: function () {
            var e = Object(I["a"])({}, this.movableSplitter);
            return (e.top += "%"), (e.left += "%"), e;
          },
          directionBeforeIconStyle: function () {
            var e = 0 !== this.paneBefore.size,
              t = "translate(-50%, -50%) ",
              i = "";
            return (
              (i = this.horizontal
                ? e
                  ? "rotate(90deg)"
                  : "rotate(-90deg)"
                : e
                ? "rotate(0deg)"
                : "rotate(180deg)"),
              { transform: t + i }
            );
          },
          directionAfterIconStyle: function () {
            var e = 0 !== this.paneAfter.size,
              t = "translate(-50%, -50%)",
              i = "";
            return (
              (i = this.horizontal
                ? e
                  ? "rotate(-90deg)"
                  : "rotate(90deg)"
                : e
                ? "rotate(180deg)"
                : "rotate(0deg)"),
              { transform: t + i }
            );
          },
        },
        methods: {
          bindEvents: function () {
            document.addEventListener("mousemove", this.onMouseMove, {
              passive: !1,
            }),
              document.addEventListener("mouseup", this.onMouseUp),
              "ontouchstart" in window &&
                (document.addEventListener("touchmove", this.onMouseMove, {
                  passive: !1,
                }),
                document.addEventListener("touchend", this.onMouseUp));
          },
          unbindEvents: function () {
            document.removeEventListener("mousemove", this.onMouseMove, {
              passive: !1,
            }),
              document.removeEventListener("mouseup", this.onMouseUp),
              "ontouchstart" in window &&
                (document.removeEventListener("touchmove", this.onMouseMove, {
                  passive: !1,
                }),
                document.removeEventListener("touchend", this.onMouseUp));
          },
          onMouseMove: function (e) {
            e.preventDefault(),
              (this.dragging = !0),
              (this.movableSplitter.visibility = "visible"),
              this.moveSplitter(e);
          },
          onMouseUp: function () {
            if (this.dragging) {
              var e = this.horizontal
                ? this.movableSplitter.top
                : this.movableSplitter.left;
              (this.paneBefore.size = e),
                (this.paneAfter.size = 100 - e),
                (this.movableSplitter = {
                  top: 0,
                  left: 0,
                  visibility: "hidden",
                }),
                (this.dragging = !1);
            }
            this.unbindEvents();
          },
          moveSplitter: function (e) {
            var t = {
                container: this.container,
                paneBeforeMax: this.paneBefore.max,
                paneAfterMax: this.paneAfter.max,
                isHorisontal: this.horizontal,
              },
              i = f.calculateOffset(e, t),
              n = this.horizontal ? "top" : "left";
            this.movableSplitter[n] = i;
          },
          togglePane: function (e) {
            if (e.size > 0) {
              (this.beforeMinimising.before = this.paneBefore.size),
                (this.beforeMinimising.after = this.paneAfter.size),
                (e.size = 0);
              var t = e === this.paneBefore ? this.paneAfter : this.paneBefore;
              t.size = 100 - e.size;
            } else
              (this.paneBefore.size = this.beforeMinimising.before),
                (this.paneAfter.size = this.beforeMinimising.after);
          },
        },
        mounted: function () {
          this.container = this.$refs.container;
        },
      },
      j = v,
      D = (i("a1f0"), Object(r["a"])(j, h, m, !1, null, null, null)),
      b = D.exports,
      y = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "div",
          { attrs: { id: "schema-container" } },
          [
            i(
              "div",
              { attrs: { id: "schema-filter" } },
              [
                i("text-field", {
                  attrs: { placeholder: "Search table", width: "100%" },
                  model: {
                    value: e.filter,
                    callback: function (t) {
                      e.filter = t;
                    },
                    expression: "filter",
                  },
                }),
              ],
              1
            ),
            i(
              "div",
              { attrs: { id: "db" } },
              [
                i(
                  "div",
                  {
                    staticClass: "db-name",
                    on: {
                      click: function (t) {
                        e.schemaVisible = !e.schemaVisible;
                      },
                    },
                  },
                  [
                    i("tree-chevron", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: e.schema.length > 0,
                          expression: "schema.length > 0",
                        },
                      ],
                      attrs: { expanded: e.schemaVisible },
                    }),
                    e._v(" " + e._s(e.dbName) + " "),
                  ],
                  1
                ),
                i("db-uploader", { attrs: { id: "db-edit", type: "small" } }),
                i("export-icon", {
                  attrs: { tooltip: "Export database" },
                  on: { click: e.exportToFile },
                }),
                i("add-table-icon", { on: { click: e.addCsv } }),
              ],
              1
            ),
            i(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: e.schemaVisible,
                    expression: "schemaVisible",
                  },
                ],
                staticClass: "schema",
              },
              e._l(e.schema, function (e) {
                return i("table-description", {
                  key: e.name,
                  attrs: { name: e.name, columns: e.columns },
                });
              }),
              1
            ),
            i("csv-import", {
              ref: "addCsv",
              attrs: {
                file: e.file,
                db: e.$store.state.db,
                "dialog-name": "addCsv",
              },
            }),
          ],
          1
        );
      },
      C = [],
      w =
        (i("4de4"),
        i("ac1f"),
        i("00b4"),
        i("5319"),
        i("2b3d"),
        i("9861"),
        i("d9e2"),
        {
          isDatabase: function (e) {
            var t = ["application/vnd.sqlite3", "application/x-sqlite3"];
            return e.type
              ? t.includes(e.type)
              : /\.(db|sqlite(3)?)+$/.test(e.name);
          },
          getFileName: function (e) {
            return e.name.replace(/\.[^.]+$/, "");
          },
          downloadFromUrl: function (e, t) {
            var i = document.createElement("a");
            (i.href = e), (i.download = t), i.click(), URL.revokeObjectURL(e);
          },
          exportToFile: function (e, t) {
            var i = arguments,
              n = this;
            return Object(d["a"])(
              Object(u["a"])().mark(function a() {
                var s, r, o;
                return Object(u["a"])().wrap(function (a) {
                  while (1)
                    switch ((a.prev = a.next)) {
                      case 0:
                        (s =
                          i.length > 2 && void 0 !== i[2]
                            ? i[2]
                            : "octet/stream"),
                          (r = new Blob([e], { type: s })),
                          (o = URL.createObjectURL(r)),
                          n.downloadFromUrl(o, t);
                      case 4:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )();
          },
          getFileFromUser: function (e) {
            return new Promise(function (t) {
              var i = document.createElement("input");
              (i.type = "file"),
                (i.accept = e),
                i.addEventListener("change", function () {
                  var e = i.files[0];
                  t(e);
                }),
                i.click();
            });
          },
          importFile: function () {
            var e = new FileReader();
            return this.getFileFromUser(".json").then(function (t) {
              return new Promise(function (i, n) {
                (e.onload = function (e) {
                  i(e.target.result);
                }),
                  e.readAsText(t);
              });
            });
          },
          readFile: function (e) {
            return fetch(e);
          },
          readAsArrayBuffer: function (e) {
            var t = new FileReader();
            return new Promise(function (i, n) {
              (t.onerror = function () {
                t.abort(), n(new Error("Problem parsing input file."));
              }),
                (t.onload = function () {
                  i(t.result);
                }),
                t.readAsArrayBuffer(e);
            });
          },
        }),
      z = i("28b7"),
      T = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i("div", [
          i(
            "div",
            {
              staticClass: "table-name",
              on: {
                click: function (t) {
                  e.colVisible = !e.colVisible;
                },
              },
            },
            [
              i("tree-chevron", { attrs: { expanded: e.colVisible } }),
              e._v(" " + e._s(e.name) + " "),
            ],
            1
          ),
          i(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: e.colVisible,
                  expression: "colVisible",
                },
              ],
              staticClass: "columns",
            },
            e._l(e.columns, function (t, n) {
              return i("div", { key: n, staticClass: "column" }, [
                e._v(" " + e._s(t.name) + " "),
                i("span", { staticClass: "column-type" }, [e._v(e._s(t.type))]),
              ]);
            }),
            0
          ),
        ]);
      },
      O = [],
      x = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "svg",
          {
            staticClass: "chevron-icon",
            style: { transform: e.expanded ? "rotate(90deg)" : "rotate(0)" },
            attrs: {
              width: "9",
              height: "9",
              viewBox: "0 0 8 12",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
          },
          [
            i("path", {
              attrs: {
                d: "M0.721924 9.93097L4.85292 5.79997L0.721924 1.66897L1.99992 0.399973L7.39992\n    5.79997L1.99992 11.2L0.721924 9.93097Z",
                fill: e.expanded ? "#506784" : "rgba(80, 103, 132, 0.5)",
              },
            }),
          ]
        );
      },
      L = [],
      A = {
        name: "treeChevron",
        props: { expanded: { type: Boolean, required: !0 } },
      },
      k = A,
      S = (i("5e1a"), Object(r["a"])(k, x, L, !1, null, "5879c436", null)),
      E = S.exports,
      Q = {
        name: "TableDescription",
        components: { TreeChevron: E },
        props: ["name", "columns"],
        data: function () {
          return { colVisible: !1 };
        },
      },
      U = Q,
      Y = (i("dfd4"), Object(r["a"])(U, T, O, !1, null, "060be7fb", null)),
      _ = Y.exports,
      Z = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i("div", [
          e.label
            ? i(
                "div",
                {
                  class: [
                    "text-field-label",
                    { error: e.errorMsg },
                    { disabled: e.disabled },
                  ],
                },
                [
                  e._v(" " + e._s(e.label) + " "),
                  e.hint
                    ? i("hint-icon", {
                        staticClass: "hint",
                        attrs: {
                          hint: e.hint,
                          "max-width": e.maxHintWidth || "149px",
                        },
                      })
                    : e._e(),
                ],
                1
              )
            : e._e(),
          i("input", {
            class: { error: e.errorMsg },
            style: { width: e.width },
            attrs: {
              type: "text",
              placeholder: e.placeholder,
              disabled: e.disabled,
            },
            domProps: { value: e.value },
            on: {
              input: function (t) {
                return e.$emit("input", t.target.value);
              },
            },
          }),
          i(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: e.errorMsg,
                  expression: "errorMsg",
                },
              ],
              staticClass: "text-field-error",
            },
            [e._v(e._s(e.errorMsg))]
          ),
        ]);
      },
      V = [],
      q = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i("div", [
          i(
            "svg",
            {
              staticClass: "hint-icon",
              attrs: {
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none",
              },
              on: {
                click: function (t) {
                  return t.stopPropagation(), e.onClick.apply(null, arguments);
                },
                mouseenter: e.showTooltip,
                mouseleave: e.hideTooltip,
              },
            },
            [
              i("path", {
                attrs: {
                  d: "M8.75 14.1666H10.4167V12.5H8.75V14.1666ZM9.58333 16.25C5.90833 16.25 2.91667 13.2583\n      2.91667 9.58333C2.91667 5.90833 5.90833 2.91667 9.58333 2.91667C13.2583 2.91667 16.25\n      5.90833 16.25 9.58333C16.25 13.2583 13.2583 16.25 9.58333 16.25ZM9.58333 1.25C8.48898\n      1.25 7.40535 1.46555 6.3943 1.88434C5.38326 2.30313 4.4646 2.91696 3.69078\n      3.69078C2.12797 5.25358 1.25 7.3732 1.25 9.58333C1.25 11.7935 2.12797 13.9131 3.69078\n      15.4759C4.4646 16.2497 5.38326 16.8635 6.3943 17.2823C7.40535 17.7011 8.48898 17.9167\n      9.58333 17.9167C11.7935 17.9167 13.9131 17.0387 15.4759 15.4759C17.0387 13.9131 17.9167\n      11.7935 17.9167 9.58333C17.9167 8.48898 17.7011 7.40535 17.2823 6.3943C16.8635 5.38326\n      16.2497 4.4646 15.4759 3.69078C14.7021 2.91696 13.7834 2.30313 12.7724 1.88434C11.7613\n      1.46555 10.6777 1.25 9.58333 1.25Z",
                  fill: "#A2B1C6",
                },
              }),
              i("path", {
                attrs: {
                  d: "M9.91601 4.51787C8.98167 4.42606 8.05144 4.69097 7.36309 5.24472C6.68735 5.78828\n      6.2998 6.56661 6.2998 7.38012H7.92488C7.92488 6.97463 8.11059 6.60187 8.44779\n      6.33061C8.79784 6.049 9.25647 5.92005 9.73896 5.96755C10.4832 6.04076 11.0828 6.57277\n      11.1647 7.23265C11.2306 7.764 10.9661 8.28194 10.4744 8.58426C9.38676 9.25303 8.73742\n      10.343 8.73742 11.5H10.3625C10.3625 10.8243 10.7477 10.184 11.3929 9.78733C12.3808\n      9.17985 12.9122 8.13913 12.7798 7.07124C12.6144 5.73863 11.41 4.66476 9.91601 4.51787Z",
                  fill: "#A2B1C6",
                },
              }),
            ]
          ),
          i(
            "span",
            {
              ref: "tooltip",
              staticClass: "icon-tooltip",
              style: Object.assign({}, e.tooltipStyle, {
                maxWidth: e.maxWidth,
              }),
            },
            [e._v(" " + e._s(e.hint) + " ")]
          ),
        ]);
      },
      P = [],
      H =
        (i("1276"),
        {
          data: function () {
            return { tooltipStyle: { visibility: "hidden" } };
          },
          computed: {
            tooltipElement: function () {
              return this.$refs.tooltip;
            },
          },
          methods: {
            showTooltip: function (e, t) {
              var i = t ? t.split("-") : ["top", "right"],
                n = 12;
              "top" === i[0]
                ? (this.tooltipStyle.top = e.clientY - n + "px")
                : (this.tooltipStyle.top = e.clientY + n + "px"),
                "right" === i[1]
                  ? (this.tooltipStyle.left = e.clientX + n + "px")
                  : (this.tooltipStyle.left =
                      e.clientX - n - this.tooltipElement.offsetWidth + "px"),
                (this.tooltipStyle.visibility = "visible");
            },
            hideTooltip: function () {
              this.tooltipStyle.visibility = "hidden";
            },
          },
        }),
      B = {
        name: "HintIcon",
        props: ["hint", "maxWidth"],
        mixins: [H],
        methods: {
          onClick: function () {
            this.hideTooltip(), this.$emit("click");
          },
        },
      },
      $ = B,
      G = (i("9ceb"), Object(r["a"])($, q, P, !1, null, "7209667d", null)),
      R = G.exports,
      W = {
        name: "textField",
        props: [
          "placeholder",
          "label",
          "errorMsg",
          "value",
          "width",
          "hint",
          "maxHintWidth",
          "disabled",
        ],
        components: { HintIcon: R },
      },
      F = W,
      J = (i("daef"), Object(r["a"])(F, Z, V, !1, null, "59fd41a8", null)),
      X = J.exports,
      K = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { staticClass: "db-uploader-container", style: { width: e.width } },
          [
            "small" === e.type
              ? n("change-db-icon", { on: { click: e.browse } })
              : e._e(),
            "illustrated" === e.type
              ? n("div", { staticClass: "drop-area-container" }, [
                  n(
                    "div",
                    {
                      staticClass: "drop-area",
                      on: {
                        dragover: function (t) {
                          t.preventDefault(), (e.state = "dragover");
                        },
                        dragleave: function (t) {
                          t.preventDefault(), (e.state = "");
                        },
                        drop: function (t) {
                          return (
                            t.preventDefault(), e.drop.apply(null, arguments)
                          );
                        },
                        click: e.browse,
                      },
                    },
                    [
                      n("div", { staticClass: "text" }, [
                        e._v(
                          " Drop the database or CSV file here or click to choose a file from your computer. "
                        ),
                      ]),
                    ]
                  ),
                ])
              : e._e(),
            "illustrated" === e.type
              ? n("div", { attrs: { id: "img-container" } }, [
                  n("img", {
                    attrs: { id: "drop-file-top-img", src: i("3a016") },
                  }),
                  n("img", {
                    class: { swing: "dragover" === e.state },
                    attrs: { id: "left-arm-img", src: i("9bf4") },
                  }),
                  n("img", {
                    ref: "fileImg",
                    class: {
                      swing: "dragover" === e.state,
                      fly: "dropping" === e.state,
                      hidden: "dropped" === e.state,
                    },
                    attrs: { id: "file-img", src: i("87d4") },
                  }),
                  n("img", {
                    attrs: { id: "drop-file-bottom-img", src: i("6a0b") },
                  }),
                  n("img", { attrs: { id: "body-img", src: i("1678") } }),
                  n("img", {
                    class: { swing: "dragover" === e.state },
                    attrs: { id: "right-arm-img", src: i("2335") },
                  }),
                ])
              : e._e(),
            n("div", { staticClass: "error", attrs: { id: "error" } }),
            n("csv-import", {
              ref: "addCsv",
              attrs: {
                file: e.file,
                db: e.newDb,
                "dialog-name": "importFromCsv",
              },
              on: { cancel: e.cancelCsvImport, finish: e.finish },
            }),
          ],
          1
        );
      },
      ee = [],
      te =
        (i("2ca0"),
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("div", [
            i(
              "svg",
              {
                staticClass: "db-edit-icon",
                attrs: {
                  width: "18",
                  height: "18",
                  viewBox: "0 0 18 18",
                  fill: "none",
                },
                on: {
                  click: function (t) {
                    return (
                      t.stopPropagation(), e.onClick.apply(null, arguments)
                    );
                  },
                  mouseenter: e.showTooltip,
                  mouseleave: e.hideTooltip,
                },
              },
              [
                i("path", {
                  attrs: {
                    d: "M3 10.5V12.75C3 14.25 5.2875 15.54 8.25 15.75V13.5825L8.3475 13.5C5.34 13.32 3 12.045 3\n      10.5ZM9 9.75C5.685 9.75 3 8.4075 3 6.75V9C3 10.6575 5.685 12 9 12C9.2925 12 9.5775 12\n      9.87 12L12.75 9.09C11.55 9.54 10.2825 9.75 9 9.75ZM9 2.25C5.685 2.25 3 3.5925 3 5.25C3\n      6.9075 5.685 8.25 9 8.25C12.315 8.25 15 6.9075 15 5.25C15 3.5925 12.315 2.25 9 2.25ZM15.75\n      8.3475C15.6375 8.3475 15.5325 8.3925 15.4575 8.475L14.7075 9.225L16.245 10.725L16.995\n      9.975C17.1525 9.825 17.16 9.57 16.995 9.3975L16.065 8.475C15.99 8.3925 15.885 8.3475 15.78\n      8.3475H15.75ZM14.28 9.66L9.75 14.205V15.75H11.295L15.84 11.1975L14.28 9.66Z",
                    fill: "#A2B1C6",
                  },
                }),
              ]
            ),
            i(
              "span",
              {
                ref: "tooltip",
                staticClass: "icon-tooltip",
                style: e.tooltipStyle,
              },
              [e._v(" Load another database or CSV ")]
            ),
          ]);
        }),
      ie = [],
      ne = {
        name: "changeDbIcon",
        mixins: [H],
        methods: {
          onClick: function () {
            this.hideTooltip(), this.$emit("click");
          },
        },
      },
      ae = ne,
      se = (i("03d9"), Object(r["a"])(ae, te, ie, !1, null, "c1beafb4", null)),
      re = se.exports,
      oe = i("d4ec"),
      ce = i("bee2");
    function le() {
      return new Worker(i.p + "js/_worker.11dcf394.worker.js");
    }
    var ue = i("ebb0"),
      de = i.n(ue);
    function Me() {
      var e = new le();
      return new he(e);
    }
    var pe = { getNewDatabase: Me },
      ge = 0,
      he = (function () {
        function e(t) {
          var i = this;
          Object(oe["a"])(this, e),
            (this.dbName = null),
            (this.schema = null),
            (this.worker = t),
            (this.pw = new de.a(t)),
            (this.importProgresses = {}),
            t.addEventListener("message", function (e) {
              var t = e.data.progress;
              if (void 0 !== t) {
                var n = e.data.id;
                i.importProgresses[n].dispatchEvent(
                  new CustomEvent("progress", { detail: t })
                );
              }
            });
        }
        return (
          Object(ce["a"])(e, [
            {
              key: "shutDown",
              value: function () {
                this.worker.terminate();
              },
            },
            {
              key: "createProgressCounter",
              value: function (e) {
                var t = ge++;
                return (
                  (this.importProgresses[t] = new EventTarget()),
                  this.importProgresses[t].addEventListener(
                    "progress",
                    function (t) {
                      e(t.detail);
                    }
                  ),
                  t
                );
              },
            },
            {
              key: "deleteProgressCounter",
              value: function (e) {
                delete this.importProgresses[e];
              },
            },
            {
              key: "addTableFromCsv",
              value: (function () {
                var e = Object(d["a"])(
                  Object(u["a"])().mark(function e(t, i, n) {
                    var a;
                    return Object(u["a"])().wrap(
                      function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.pw.postMessage({
                                  action: "import",
                                  data: i,
                                  progressCounterId: n,
                                  tabName: t,
                                })
                              );
                            case 2:
                              if (((a = e.sent), !a.error)) {
                                e.next = 5;
                                break;
                              }
                              throw new Error(a.error);
                            case 5:
                              (this.dbName = this.dbName || "database"),
                                this.refreshSchema();
                            case 7:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                function t(t, i, n) {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
            },
            {
              key: "loadDb",
              value: (function () {
                var e = Object(d["a"])(
                  Object(u["a"])().mark(function e(t) {
                    var i, n;
                    return Object(u["a"])().wrap(
                      function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!t) {
                                e.next = 6;
                                break;
                              }
                              return (e.next = 3), w.readAsArrayBuffer(t);
                            case 3:
                              (e.t0 = e.sent), (e.next = 7);
                              break;
                            case 6:
                              e.t0 = null;
                            case 7:
                              return (
                                (i = e.t0),
                                (e.next = 10),
                                this.pw.postMessage({
                                  action: "open",
                                  buffer: i,
                                })
                              );
                            case 10:
                              if (((n = e.sent), !n.error)) {
                                e.next = 13;
                                break;
                              }
                              throw new Error(n.error);
                            case 13:
                              return (
                                (this.dbName = t
                                  ? w.getFileName(t)
                                  : "database"),
                                (e.next = 16),
                                this.refreshSchema()
                              );
                            case 16:
                              z["a"].send("database.import", t ? t.size : 0, {
                                from: t ? "sqlite" : "none",
                                new_db: !0,
                              });
                            case 17:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                function t(t) {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
            },
            {
              key: "refreshSchema",
              value: (function () {
                var e = Object(d["a"])(
                  Object(u["a"])().mark(function e() {
                    var t, i;
                    return Object(u["a"])().wrap(
                      function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t =
                                  "\n    WITH columns as (\n      SELECT\n        a.tbl_name,\n        json_group_array(\n          json_object('name', b.name,'type', IIF(b.type = '', 'N/A', b.type))\n        ) as column_json\n      FROM sqlite_master a, pragma_table_info(a.name) b\n      WHERE a.type in ('table','view') AND a.name NOT LIKE 'sqlite_%' group by tbl_name\n    )\n    SELECT json_group_array(json_object('name',tbl_name, 'columns', json(column_json))) objects\n    FROM columns;\n    "),
                                (e.next = 3),
                                this.execute(t)
                              );
                            case 3:
                              (i = e.sent),
                                (this.schema = JSON.parse(i.values.objects[0]));
                            case 5:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                function t() {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
            },
            {
              key: "execute",
              value: (function () {
                var e = Object(d["a"])(
                  Object(u["a"])().mark(function e(t) {
                    var i;
                    return Object(u["a"])().wrap(
                      function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.pw.postMessage({ action: "reopen" })
                              );
                            case 2:
                              return (
                                (e.next = 4),
                                this.pw.postMessage({ action: "exec", sql: t })
                              );
                            case 4:
                              if (((i = e.sent), !i.error)) {
                                e.next = 7;
                                break;
                              }
                              throw new Error(i.error);
                            case 7:
                              return e.abrupt("return", i[i.length - 1]);
                            case 8:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                function t(t) {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
            },
            {
              key: "export",
              value: (function () {
                var e = Object(d["a"])(
                  Object(u["a"])().mark(function e(t) {
                    var i;
                    return Object(u["a"])().wrap(
                      function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.pw.postMessage({ action: "export" })
                              );
                            case 2:
                              if (((i = e.sent), !i.error)) {
                                e.next = 5;
                                break;
                              }
                              throw new Error(i.error);
                            case 5:
                              w.exportToFile(i, t),
                                z["a"].send("database.export", i.byteLength, {
                                  to: "sqlite",
                                });
                            case 7:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                function t(t) {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
            },
            {
              key: "validateTableName",
              value: (function () {
                var e = Object(d["a"])(
                  Object(u["a"])().mark(function e(t) {
                    return Object(u["a"])().wrap(
                      function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!t.startsWith("sqlite_")) {
                                e.next = 2;
                                break;
                              }
                              throw new Error(
                                "Table name can't start with sqlite_"
                              );
                            case 2:
                              if (!/[^\w]/.test(t)) {
                                e.next = 4;
                                break;
                              }
                              throw new Error(
                                "Table name can contain only letters, digits and underscores"
                              );
                            case 4:
                              if (!/^(\d)/.test(t)) {
                                e.next = 6;
                                break;
                              }
                              throw new Error(
                                "Table name can't start with a digit"
                              );
                            case 6:
                              return (
                                (e.next = 8),
                                this.execute(
                                  'BEGIN; CREATE TABLE "'.concat(
                                    t,
                                    '"(id); ROLLBACK;'
                                  )
                                )
                              );
                            case 8:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                function t(t) {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
            },
            {
              key: "sanitizeTableName",
              value: function (e) {
                return e
                  .replace(/[^\w]/g, "_")
                  .replace(/^(\d)/, "_$1")
                  .replace(/_{2,}/g, "_");
              },
            },
          ]),
          e
        );
      })(),
      me = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "modal",
          {
            attrs: {
              name: e.dialogName,
              classes: "dialog",
              height: "auto",
              width: "80%",
              scrollable: "",
              clickToClose: !1,
            },
          },
          [
            i(
              "div",
              { staticClass: "dialog-header" },
              [
                e._v(" CSV import "),
                i("close-icon", {
                  attrs: { disabled: e.disableDialog },
                  on: { click: e.cancelCsvImport },
                }),
              ],
              1
            ),
            i(
              "div",
              { staticClass: "dialog-body" },
              [
                i("text-field", {
                  attrs: {
                    label: "Table name",
                    width: "484px",
                    disabled: e.disableDialog,
                    "error-msg": e.tableNameError,
                    id: "csv-table-name",
                  },
                  model: {
                    value: e.tableName,
                    callback: function (t) {
                      e.tableName = t;
                    },
                    expression: "tableName",
                  },
                }),
                i(
                  "div",
                  { staticClass: "chars" },
                  [
                    i("delimiter-selector", {
                      staticClass: "char-input",
                      attrs: { width: "210px", disabled: e.disableDialog },
                      on: { input: e.previewCsv },
                      model: {
                        value: e.delimiter,
                        callback: function (t) {
                          e.delimiter = t;
                        },
                        expression: "delimiter",
                      },
                    }),
                    i("text-field", {
                      staticClass: "char-input",
                      attrs: {
                        label: "Quote char",
                        hint: "The character used to quote fields.",
                        width: "93px",
                        disabled: e.disableDialog,
                        id: "quote-char",
                      },
                      model: {
                        value: e.quoteChar,
                        callback: function (t) {
                          e.quoteChar = t;
                        },
                        expression: "quoteChar",
                      },
                    }),
                    i("text-field", {
                      staticClass: "char-input",
                      attrs: {
                        label: "Escape char",
                        hint: '\n          The character used to escape the quote character within a field\n          (e.g. "column with ""quotes"" in text").\n        ',
                        "max-hint-width": "242px",
                        width: "93px",
                        disabled: e.disableDialog,
                        id: "escape-char",
                      },
                      model: {
                        value: e.escapeChar,
                        callback: function (t) {
                          e.escapeChar = t;
                        },
                        expression: "escapeChar",
                      },
                    }),
                  ],
                  1
                ),
                i("check-box", {
                  attrs: {
                    init: !0,
                    label: "Use first row as column headers",
                    disabled: e.disableDialog,
                  },
                  on: {
                    click: function (t) {
                      e.header = t;
                    },
                  },
                }),
                e.previewData &&
                (e.previewData.rowCount > 0 ||
                  Object.keys(e.previewData).length > 0)
                  ? i("sql-table", {
                      staticClass: "preview-table",
                      attrs: { "data-set": e.previewData, preview: !0 },
                    })
                  : i("div", { staticClass: "no-data" }, [e._v("No data")]),
                i("logs", {
                  staticClass: "import-csv-errors",
                  attrs: { messages: e.importCsvMessages },
                }),
              ],
              1
            ),
            i("div", { staticClass: "dialog-buttons-container" }, [
              i(
                "button",
                {
                  staticClass: "secondary",
                  attrs: { disabled: e.disableDialog, id: "csv-cancel" },
                  on: { click: e.cancelCsvImport },
                },
                [e._v(" Cancel ")]
              ),
              i(
                "button",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !e.importCsvCompleted,
                      expression: "!importCsvCompleted",
                    },
                  ],
                  staticClass: "primary",
                  attrs: { disabled: e.disableDialog, id: "csv-import" },
                  on: {
                    click: function (t) {
                      return e.loadFromCsv(e.file);
                    },
                  },
                },
                [e._v(" Import ")]
              ),
              i(
                "button",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: e.importCsvCompleted,
                      expression: "importCsvCompleted",
                    },
                  ],
                  staticClass: "primary",
                  attrs: { disabled: e.disableDialog, id: "csv-finish" },
                  on: { click: e.finish },
                },
                [e._v(" Finish ")]
              ),
            ]),
          ]
        );
      },
      Ie = [],
      Ne = (i("99af"), i("159b"), i("498a"), i("d81d"), i("369b")),
      fe = i.n(Ne),
      ve = {
        MissingQuotes:
          "Edit your CSV so that the field has a closing quote char.",
        TooFewFields: "Add fields or try another delimiter.",
        TooManyFields: "Edit your CSV or try another delimiter.",
      },
      je = {
        getResult: function (e) {
          var t = { columns: [] },
            i = {};
          if (e.meta.fields)
            e.meta.fields.forEach(function (n) {
              var a = n.trim();
              t.columns.push(a),
                (i[a] = e.data.map(function (e) {
                  var t = e[n];
                  return t instanceof Date && (t = t.toISOString()), t;
                }));
            });
          else
            for (
              var n = function (n) {
                  var a = "col".concat(n + 1);
                  t.columns.push(a),
                    (i[a] = e.data.map(function (e) {
                      var t = e[n];
                      return t instanceof Date && (t = t.toISOString()), t;
                    }));
                },
                a = 0;
              a <= e.data[0].length - 1;
              a++
            )
              n(a);
          return (t.values = i), t;
        },
        prepareForExport: function (e) {
          for (
            var t = e.columns,
              i = e.values[t[0]].length,
              n = { fields: t, data: [] },
              a = function (i) {
                n.data.push(
                  t.map(function (t) {
                    return e.values[t][i];
                  })
                );
              },
              s = 0;
            s < i;
            s++
          )
            a(s);
          return n;
        },
        parse: function (e) {
          var t = this,
            i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          return new Promise(function (n, a) {
            var s = {
              delimiter: "",
              newline: "",
              quoteChar: '"',
              escapeChar: '"',
              header: !1,
              transformHeader: void 0,
              dynamicTyping: !0,
              preview: 0,
              encoding: "UTF-8",
              worker: !0,
              comments: !1,
              step: void 0,
              complete: function (e) {
                var i;
                try {
                  (i = {
                    data: t.getResult(e),
                    delimiter: e.meta.delimiter,
                    hasErrors: !1,
                    rowCount: e.data.length,
                  }),
                    (i.messages = e.errors.map(function (e) {
                      return (
                        (e.type =
                          "UndetectableDelimiter" === e.code
                            ? "info"
                            : "error"),
                        "error" === e.type && (i.hasErrors = !0),
                        (e.hint = ve[e.code]),
                        e
                      );
                    }));
                } catch (s) {
                  a(s);
                }
                n(i);
              },
              error: function (e) {
                a(e);
              },
              download: !1,
              downloadRequestHeaders: void 0,
              downloadRequestBody: void 0,
              skipEmptyLines: "greedy",
              chunk: void 0,
              chunkSize: void 0,
              fastMode: void 0,
              beforeFirstChunk: void 0,
              withCredentials: void 0,
              transform: void 0,
              delimitersToGuess: [
                ",",
                "\t",
                "|",
                ";",
                fe.a.RECORD_SEP,
                fe.a.UNIT_SEP,
              ],
            };
            fe.a.parse(e, Object(I["a"])(Object(I["a"])({}, s), i));
          });
        },
        serialize: function (e) {
          return fe.a.unparse(this.prepareForExport(e), { delimiter: "\t" });
        },
      },
      De = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "svg",
          {
            class: ["icon", { disabled: e.disabled }],
            attrs: {
              width: e.size,
              height: e.size,
              viewBox: "0 0 14 14",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            on: {
              click: function (t) {
                return t.stopPropagation(), e.$emit("click");
              },
            },
          },
          [
            i("path", {
              attrs: {
                d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14\n    12.59L8.41 7L14 1.41Z",
                fill: "#A2B1C6",
              },
            }),
          ]
        );
      },
      be = [],
      ye =
        (i("a9e3"),
        {
          name: "CloseIcon",
          props: {
            size: { type: Number, required: !1, default: 14 },
            disabled: { type: Boolean, required: !1, default: !1 },
          },
        }),
      Ce = ye,
      we = (i("8368"), Object(r["a"])(Ce, De, be, !1, null, "ec8935c0", null)),
      ze = we.exports,
      Te = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i("div", { class: { disabled: e.disabled } }, [
          i("div", { staticClass: "text-field-label" }, [e._v("Delimiter")]),
          i(
            "div",
            {
              staticClass: "delimiter-selector-container",
              style: { width: e.width },
              on: { click: e.onContainerClick },
            },
            [
              i("div", { staticClass: "value" }, [
                i("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: e.inputValue,
                      expression: "inputValue",
                    },
                  ],
                  ref: "delimiterInput",
                  class: { filled: e.filled },
                  attrs: { type: "text", maxlength: "1", disabled: e.disabled },
                  domProps: { value: e.inputValue },
                  on: {
                    click: function (e) {
                      e.stopPropagation();
                    },
                    input: function (t) {
                      t.target.composing || (e.inputValue = t.target.value);
                    },
                  },
                }),
                i("div", { staticClass: "name" }, [
                  e._v(e._s(e.getSymbolName(e.value))),
                ]),
              ]),
              i(
                "div",
                {
                  staticClass: "controls",
                  on: {
                    click: function (e) {
                      e.stopPropagation();
                    },
                  },
                },
                [
                  i("clear-icon", {
                    attrs: { disabled: e.disabled },
                    nativeOn: {
                      click: function (t) {
                        return e.clear.apply(null, arguments);
                      },
                    },
                  }),
                  i("drop-down-chevron", {
                    attrs: { disabled: e.disabled },
                    nativeOn: {
                      click: function (t) {
                        !e.disabled && (e.showOptions = !e.showOptions);
                      },
                    },
                  }),
                ],
                1
              ),
            ]
          ),
          i(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: e.showOptions,
                  expression: "showOptions",
                },
              ],
              staticClass: "options",
              style: { width: e.width },
            },
            e._l(e.options, function (t, n) {
              return i(
                "div",
                {
                  key: n,
                  staticClass: "option",
                  on: {
                    click: function (i) {
                      return e.chooseOption(t);
                    },
                  },
                },
                [
                  i("pre", [e._v(e._s(t))]),
                  i("div", [e._v(e._s(e.getSymbolName(t)))]),
                ]
              );
            }),
            0
          ),
        ]);
      },
      Oe = [],
      xe =
        (i("25f0"),
        {
          0: { name: "null character" },
          1: { name: "start of header" },
          2: { name: "start of text" },
          3: { name: "end of text" },
          4: { name: "end of transmission" },
          5: { name: "enquiry" },
          6: { name: "acknowledge" },
          7: { name: "bell (ring)" },
          8: { name: "backspace" },
          9: { name: "horizontal tab" },
          10: { name: "line feed" },
          11: { name: "vertical tab" },
          12: { name: "form feed" },
          13: { name: "carriage return" },
          14: { name: "shift out" },
          15: { name: "shift in" },
          16: { name: "data link escape" },
          17: { name: "device control 1" },
          18: { name: "device control 2" },
          19: { name: "device control 3" },
          20: { name: "device control 4" },
          21: { name: "negative acknowledge" },
          22: { name: "synchronize" },
          23: { name: "end transmission block" },
          24: { name: "cancel" },
          25: { name: "end of medium" },
          26: { name: "substitute" },
          27: { name: "escape" },
          28: { name: "file separator" },
          29: { name: "group separator" },
          30: { name: "record separator" },
          31: { name: "unit separator" },
          32: { name: "space" },
          33: { name: "exclamation mark" },
          34: { name: "quotation mark" },
          35: { name: "number sign" },
          36: { name: "dollar sign" },
          37: { name: "percent sign" },
          38: { name: "ampersand" },
          39: { name: "apostrophe" },
          40: { name: "left parenthesis" },
          41: { name: "right parenthesis" },
          42: { name: "asterisk" },
          43: { name: "plus sign" },
          44: { name: "comma" },
          45: { name: "hyphen" },
          46: { name: "period" },
          47: { name: "slash" },
          48: { name: "digit 0" },
          49: { name: "digit 1" },
          50: { name: "digit 2" },
          51: { name: "digit 3" },
          52: { name: "digit 4" },
          53: { name: "digit 5" },
          54: { name: "digit 6" },
          55: { name: "digit 7" },
          56: { name: "digit 8" },
          57: { name: "digit 9" },
          58: { name: "colon" },
          59: { name: "semicolon" },
          60: { name: "less-than" },
          61: { name: "equals-to" },
          62: { name: "greater-than" },
          63: { name: "question mark" },
          64: { name: "at sign" },
          65: { name: "uppercase A" },
          66: { name: "uppercase B" },
          67: { name: "uppercase C" },
          68: { name: "uppercase D" },
          69: { name: "uppercase E" },
          70: { name: "uppercase F" },
          71: { name: "uppercase G" },
          72: { name: "uppercase H" },
          73: { name: "uppercase I" },
          74: { name: "uppercase J" },
          75: { name: "uppercase K" },
          76: { name: "uppercase L" },
          77: { name: "uppercase M" },
          78: { name: "uppercase N" },
          79: { name: "uppercase O" },
          80: { name: "uppercase P" },
          81: { name: "uppercase Q" },
          82: { name: "uppercase R" },
          83: { name: "uppercase S" },
          84: { name: "uppercase T" },
          85: { name: "uppercase U" },
          86: { name: "uppercase V" },
          87: { name: "uppercase W" },
          88: { name: "uppercase X" },
          89: { name: "uppercase Y" },
          90: { name: "uppercase Z" },
          91: { name: "left square bracket" },
          92: { name: "backslash" },
          93: { name: "right square bracket" },
          94: { name: "caret" },
          95: { name: "underscore" },
          96: { name: "grave accent" },
          97: { name: "lowercase a" },
          98: { name: "lowercase b" },
          99: { name: "lowercase c" },
          100: { name: "lowercase d" },
          101: { name: "lowercase e" },
          102: { name: "lowercase f" },
          103: { name: "lowercase g" },
          104: { name: "lowercase h" },
          105: { name: "lowercase i" },
          106: { name: "lowercase j" },
          107: { name: "lowercase k" },
          108: { name: "lowercase l" },
          109: { name: "lowercase m" },
          110: { name: "lowercase n" },
          111: { name: "lowercase o" },
          112: { name: "lowercase p" },
          113: { name: "lowercase q" },
          114: { name: "lowercase r" },
          115: { name: "lowercase s" },
          116: { name: "lowercase t" },
          117: { name: "lowercase u" },
          118: { name: "lowercase v" },
          119: { name: "lowercase w" },
          120: { name: "lowercase x" },
          121: { name: "lowercase y" },
          122: { name: "lowercase z" },
          123: { name: "left curly brace" },
          124: { name: "vertical bar" },
          125: { name: "right curly brace" },
          126: { name: "tilde" },
          127: { name: "delete (rubout)" },
        }),
      Le = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "svg",
          {
            class: ["chevron-icon", { disabled: e.disabled }],
            attrs: {
              width: "20",
              height: "20",
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
          },
          [
            i("path", {
              attrs: {
                d: "M6.175 7.15002L10 10.975L13.825 7.15002L15 8.33336L10 13.3334L5 8.33336L6.175 7.15002Z",
                fill: "#C8D4E3",
              },
            }),
          ]
        );
      },
      Ae = [],
      ke = { name: "DropDownChevron", props: ["disabled"] },
      Se = ke,
      Ee = (i("3742"), Object(r["a"])(Se, Le, Ae, !1, null, "07476bf6", null)),
      Qe = Ee.exports,
      Ue = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "svg",
          {
            class: ["clear-icon", { disabled: e.disabled }],
            attrs: {
              width: "20",
              height: "20",
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
          },
          [
            i("path", {
              attrs: {
                d: "M14.3481 14.849C13.8791 15.318 13.1191 15.318 12.6511 14.849L10.0001 11.819L7.34907\n      14.848C6.88007 15.317 6.12007 15.317 5.65207 14.848C5.18307 14.379 5.18307 13.619\n      5.65207 13.151L8.41007 10.001L5.65107 6.84898C5.18207 6.37998 5.18207 5.62098 5.65107\n      5.15198C6.12007 4.68298 6.87907 4.68298 7.34807 5.15198L10.0001 8.18298L12.6511\n      5.15198C13.1201 4.68298 13.8791 4.68298 14.3481 5.15198C14.8171 5.62098 14.8171 6.38098\n      14.3481 6.84898L11.5901 10.001L14.3481 13.151C14.8171 13.62 14.8171 14.38 14.3481\n      14.849V14.849Z",
                fill: "#C8D4E3",
              },
            }),
          ]
        );
      },
      Ye = [],
      _e = { name: "ClearIcon", props: ["disabled"] },
      Ze = _e,
      Ve = (i("523c"), Object(r["a"])(Ze, Ue, Ye, !1, null, "208c41ca", null)),
      qe = Ve.exports,
      Pe = {
        name: "DelimiterSelector",
        props: ["value", "width", "disabled"],
        components: { DropDownChevron: Qe, ClearIcon: qe },
        data: function () {
          return {
            showOptions: !1,
            options: [",", "\t", " ", "|", ";", "", ""],
            filled: !1,
            inputValue: "",
          };
        },
        watch: {
          inputValue: function () {
            this.inputValue
              ? ((this.filled = !0),
                this.inputValue !== this.value &&
                  this.$emit("input", this.inputValue))
              : (this.filled = !1);
          },
        },
        created: function () {
          this.inputValue = this.value;
        },
        methods: {
          getSymbolName: function (e) {
            return e ? xe[e.charCodeAt(0).toString()].name : "";
          },
          chooseOption: function (e) {
            (this.inputValue = e), (this.showOptions = !1);
          },
          onContainerClick: function (e) {
            this.$refs.delimiterInput.focus();
          },
          clear: function () {
            this.disabled ||
              ((this.inputValue = ""), this.$refs.delimiterInput.focus());
          },
        },
      },
      He = Pe,
      Be = (i("28f9"), Object(r["a"])(He, Te, Oe, !1, null, "44b0b048", null)),
      $e = Be.exports,
      Ge = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          {
            class: [
              "checkbox-container",
              { checked: e.checked },
              { disabled: e.disabled },
            ],
            on: {
              click: function (t) {
                return t.stopPropagation(), e.onClick.apply(null, arguments);
              },
            },
          },
          [
            n("div", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !e.checked,
                  expression: "!checked",
                },
              ],
              staticClass: "unchecked",
            }),
            n("img", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: e.checked && !e.disabled,
                  expression: "checked && !disabled",
                },
              ],
              attrs: { src: "light" === e.theme ? i("69e6") : i("93dd") },
            }),
            n("img", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: e.checked && e.disabled,
                  expression: "checked && disabled",
                },
              ],
              attrs: { src: i("3d10") },
            }),
            e.label
              ? n("span", { staticClass: "label" }, [e._v(e._s(e.label))])
              : e._e(),
          ]
        );
      },
      Re = [],
      We = {
        name: "CheckBox",
        props: {
          theme: {
            type: String,
            required: !1,
            default: "accent",
            validator: function (e) {
              return ["accent", "light"].includes(e);
            },
          },
          init: { type: Boolean, required: !1, default: !1 },
          label: { type: String, required: !1, default: "" },
          disabled: { type: Boolean, required: !1, default: !1 },
        },
        data: function () {
          return { checked: this.init };
        },
        methods: {
          onClick: function () {
            this.disabled ||
              ((this.checked = !this.checked),
              this.$emit("click", this.checked));
          },
        },
      },
      Fe = We,
      Je = (i("a96d"), Object(r["a"])(Fe, Ge, Re, !1, null, "0dd86013", null)),
      Xe = Je.exports,
      Ke = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i("div", [
          i("div", { staticClass: "rounded-bg" }, [
            i(
              "div",
              { ref: "header-container", staticClass: "header-container" },
              [
                i(
                  "div",
                  e._l(e.header, function (t, n) {
                    return i(
                      "div",
                      {
                        key: n,
                        staticClass: "fixed-header",
                        style: { width: t.width + "px" },
                      },
                      [e._v(" " + e._s(t.name) + " ")]
                    );
                  }),
                  0
                ),
              ]
            ),
            i(
              "div",
              {
                ref: "table-container",
                staticClass: "table-container",
                on: { scroll: e.onScrollTable },
              },
              [
                i("table", { ref: "table", staticClass: "sqliteviz-table" }, [
                  i("thead", [
                    i(
                      "tr",
                      e._l(e.columns, function (t, n) {
                        return i("th", { key: n, ref: "th", refInFor: !0 }, [
                          i(
                            "div",
                            { staticClass: "cell-data", style: e.cellStyle },
                            [e._v(e._s(t))]
                          ),
                        ]);
                      }),
                      0
                    ),
                  ]),
                  i(
                    "tbody",
                    e._l(e.currentPageData.count, function (t) {
                      return i(
                        "tr",
                        { key: t },
                        e._l(e.columns, function (n, a) {
                          return i("td", { key: a }, [
                            i(
                              "div",
                              { staticClass: "cell-data", style: e.cellStyle },
                              [
                                e._v(
                                  " " +
                                    e._s(
                                      e.dataSet.values[n][
                                        t - 1 + e.currentPageData.start
                                      ]
                                    ) +
                                    " "
                                ),
                              ]
                            ),
                          ]);
                        }),
                        0
                      );
                    }),
                    0
                  ),
                ]),
              ]
            ),
          ]),
          i(
            "div",
            { staticClass: "table-footer" },
            [
              i("div", { staticClass: "table-footer-count" }, [
                e._v(
                  " " +
                    e._s(e.rowCount) +
                    " " +
                    e._s(1 === e.rowCount ? "row" : "rows") +
                    " retrieved "
                ),
                e.preview ? i("span", [e._v("for preview")]) : e._e(),
                e.time ? i("span", [e._v("in " + e._s(e.time))]) : e._e(),
              ]),
              i("pager", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: e.pageCount > 1,
                    expression: "pageCount > 1",
                  },
                ],
                attrs: { "page-count": e.pageCount },
                model: {
                  value: e.currentPage,
                  callback: function (t) {
                    e.currentPage = t;
                  },
                  expression: "currentPage",
                },
              }),
            ],
            1
          ),
        ]);
      },
      et = [],
      tt = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i("paginate", {
          attrs: {
            "page-count": e.pageCount,
            "page-range": 5,
            "margin-pages": 1,
            "prev-text": e.chevron,
            "next-text": e.chevron,
            "no-li-surround": !0,
            "container-class": "paginator-continer",
            "page-link-class": "paginator-page-link",
            "active-class": "paginator-active-page",
            "break-view-link-class": "paginator-break",
            "next-link-class": "paginator-next",
            "prev-link-class": "paginator-prev",
            "disabled-class": "paginator-disabled",
          },
          model: {
            value: e.page,
            callback: function (t) {
              e.page = t;
            },
            expression: "page",
          },
        });
      },
      it = [],
      nt = i("8832"),
      at = i.n(nt),
      st = {
        name: "Pager",
        components: { Paginate: at.a },
        props: ["pageCount", "value"],
        data: function () {
          return {
            page: this.value,
            chevron:
              '\n        <svg width="9" height="9" viewBox="0 0 8 12" fill="none">\n        <path\n          d="M0.721924 9.93097L4.85292 5.79997L0.721924 1.66897L1.99992 0.399973L7.39992\n            5.79997L1.99992 11.2L0.721924 9.93097Z" fill="#506784"\n        />\n        </svg>\n      ',
          };
        },
        watch: {
          page: function () {
            this.$emit("input", this.page);
          },
          value: function () {
            this.page = this.value;
          },
        },
      },
      rt = st,
      ot = (i("4378"), Object(r["a"])(rt, tt, it, !1, null, "36acc975", null)),
      ct = ot.exports,
      lt = {
        name: "SqlTable",
        components: { Pager: ct },
        props: {
          dataSet: Object,
          time: String,
          pageSize: { type: Number, default: 20 },
          preview: Boolean,
        },
        data: function () {
          return {
            header: null,
            tableWidth: null,
            currentPage: 1,
            resizeObserver: null,
          };
        },
        computed: {
          columns: function () {
            return this.dataSet.columns;
          },
          rowCount: function () {
            return this.dataSet.values[this.columns[0]].length;
          },
          cellStyle: function () {
            var e = this.tableWidth / this.columns.length;
            return { maxWidth: "".concat(Math.max(e, 100), "px") };
          },
          pageCount: function () {
            return Math.ceil(this.rowCount / this.pageSize);
          },
          currentPageData: function () {
            var e = (this.currentPage - 1) * this.pageSize,
              t = e + this.pageSize;
            return (
              t > this.rowCount - 1 && (t = this.rowCount - 1),
              { start: e, end: t, count: t - e + 1 }
            );
          },
        },
        methods: {
          calculateHeadersWidth: function () {
            var e = this;
            (this.tableWidth = this.$refs["table-container"].offsetWidth),
              this.$nextTick(function () {
                e.header = e.$refs.th.map(function (e) {
                  return {
                    name: e.innerText,
                    width: e.getBoundingClientRect().width,
                  };
                });
              });
          },
          onScrollTable: function () {
            this.$refs["header-container"].scrollLeft =
              this.$refs["table-container"].scrollLeft;
          },
        },
        mounted: function () {
          (this.resizeObserver = new ResizeObserver(
            this.calculateHeadersWidth
          )),
            this.resizeObserver.observe(this.$refs.table),
            this.calculateHeadersWidth();
        },
        beforeDestroy: function () {
          this.resizeObserver.unobserve(this.$refs.table);
        },
        watch: {
          currentPageData: "calculateHeadersWidth",
          dataSet: function () {
            this.currentPage = 1;
          },
        },
      },
      ut = lt,
      dt = Object(r["a"])(ut, Ke, et, !1, null, "79f99032", null),
      Mt = dt.exports,
      pt = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { ref: "logsContainer", staticClass: "logs-container" },
          e._l(e.messages, function (t, a) {
            return n(
              "div",
              { key: a, staticClass: "msg" },
              [
                "error" === t.type
                  ? n("img", { attrs: { src: i("7314") } })
                  : e._e(),
                "info" === t.type
                  ? n("img", { attrs: { src: i("db39"), width: "20px" } })
                  : e._e(),
                "success" === t.type
                  ? n("img", { attrs: { src: i("0bf4") } })
                  : e._e(),
                "loading" === t.type
                  ? n("loading-indicator", { attrs: { progress: t.progress } })
                  : e._e(),
                n("span", { staticClass: "msg-text" }, [
                  e._v(e._s(e.serializeMessage(t))),
                ]),
              ],
              1
            );
          }),
          0
        );
      },
      gt = [],
      ht = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "svg",
          {
            class: e.animationClass,
            attrs: {
              height: e.size,
              width: e.size,
              viewBox: "0 0 " + e.size + " " + e.size,
            },
          },
          [
            i("circle", {
              staticClass: "loader-svg bg",
              style: { strokeWidth: e.strokeWidth },
              attrs: { cx: e.size / 2, cy: e.size / 2, r: e.radius },
            }),
            i("circle", {
              staticClass: "loader-svg front",
              style: {
                strokeDasharray: e.circleProgress,
                strokeDashoffset: e.offset,
                strokeWidth: e.strokeWidth,
              },
              attrs: { cx: e.size / 2, cy: e.size / 2, r: e.radius },
            }),
          ]
        );
      },
      mt = [],
      It = {
        name: "LoadingIndicator",
        props: {
          progress: { type: Number, required: !1 },
          size: { type: Number, required: !1, default: 20 },
        },
        computed: {
          circleProgress: function () {
            var e = 3.14 * this.radius * 2,
              t = this.progress ? (e * this.progress) / 100 : (1 * e) / 3,
              i = e - t;
            return "".concat(t, "px, ").concat(i, "px");
          },
          animationClass: function () {
            return void 0 === this.progress ? "loading" : "progress";
          },
          radius: function () {
            return this.size / 2 - this.strokeWidth;
          },
          offset: function () {
            return (3.14 * this.radius) / 2;
          },
          strokeWidth: function () {
            return this.size / 10;
          },
        },
      },
      Nt = It,
      ft = (i("d9ad"), Object(r["a"])(Nt, ht, mt, !1, null, "62096452", null)),
      vt = ft.exports,
      jt = {
        name: "logs",
        props: ["messages"],
        components: { LoadingIndicator: vt },
        watch: { "messages.length": "scrollToBottom" },
        mounted: function () {
          this.scrollToBottom();
        },
        methods: {
          scrollToBottom: function () {
            var e = this;
            return Object(d["a"])(
              Object(u["a"])().mark(function t() {
                var i;
                return Object(u["a"])().wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (((i = e.$refs.logsContainer), !i)) {
                          t.next = 5;
                          break;
                        }
                        return (t.next = 4), e.$nextTick();
                      case 4:
                        i.scrollTop = i.scrollHeight;
                      case 5:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          serializeMessage: function (e) {
            var t = "";
            return (
              null !== e.row &&
                void 0 !== e.row &&
                ("error" === e.type
                  ? (t += "Error in row ".concat(e.row, ". "))
                  : (t += "Information about row ".concat(e.row, ". "))),
              (t += e.message),
              /(\.|!|\?)$/.test(t) || (t += "."),
              e.hint && (t += " ".concat(e.hint)),
              t
            );
          },
        },
      },
      Dt = jt,
      bt = (i("0582"), Object(r["a"])(Dt, pt, gt, !1, null, "1c9f27dc", null)),
      yt = bt.exports,
      Ct =
        (i("b680"),
        {
          getPeriod: function (e, t) {
            var i = t.getTime() - e.getTime(),
              n = i / 1e3;
            return n.toFixed(3) + "s";
          },
          debounce: function (e, t) {
            var i;
            return function () {
              var n = arguments,
                a = this;
              clearTimeout(i),
                (i = setTimeout(function () {
                  return e.apply(a, n);
                }, t));
            };
          },
          sleep: function (e) {
            return new Promise(function (t) {
              setTimeout(function () {
                t();
              }, e);
            });
          },
        }),
      wt = {
        name: "CsvImport",
        components: {
          CloseIcon: ze,
          TextField: X,
          DelimiterSelector: $e,
          CheckBox: Xe,
          SqlTable: Mt,
          Logs: yt,
        },
        props: ["file", "db", "dialogName"],
        data: function () {
          return {
            disableDialog: !1,
            tableName: "",
            delimiter: "",
            quoteChar: '"',
            escapeChar: '"',
            header: !0,
            importCsvCompleted: !1,
            importCsvMessages: [],
            previewData: null,
            addedTable: null,
            tableNameError: "",
          };
        },
        watch: {
          quoteChar: function () {
            this.previewCsv();
          },
          escapeChar: function () {
            this.previewCsv();
          },
          header: function () {
            this.previewCsv();
          },
          tableName: Ct.debounce(function () {
            var e = this;
            (this.tableNameError = ""),
              this.tableName &&
                this.db.validateTableName(this.tableName).catch(function (t) {
                  e.tableNameError = t.message + ". Try another table name.";
                });
          }, 400),
        },
        methods: {
          cancelCsvImport: function () {
            this.disableDialog ||
              (this.addedTable &&
                (this.db.execute('DROP TABLE "'.concat(this.addedTable, '"')),
                this.db.refreshSchema()),
              this.$modal.hide(this.dialogName),
              this.$emit("cancel"));
          },
          reset: function () {
            (this.header = !0),
              (this.quoteChar = '"'),
              (this.escapeChar = '"'),
              (this.delimiter = ""),
              (this.tableName = ""),
              (this.disableDialog = !1),
              (this.importCsvCompleted = !1),
              (this.importCsvMessages = []),
              (this.previewData = null),
              (this.addedTable = null),
              (this.tableNameError = "");
          },
          open: function () {
            (this.tableName = this.db.sanitizeTableName(
              w.getFileName(this.file)
            )),
              this.$modal.show(this.dialogName);
          },
          previewCsv: function () {
            var e = this;
            return Object(d["a"])(
              Object(u["a"])().mark(function t() {
                var i, n, a, s;
                return Object(u["a"])().wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (e.importCsvCompleted = !1),
                            (i = {
                              preview: 3,
                              quoteChar: e.quoteChar || '"',
                              escapeChar: e.escapeChar,
                              header: e.header,
                              delimiter: e.delimiter,
                            }),
                            (t.prev = 2),
                            (n = new Date()),
                            (t.next = 6),
                            je.parse(e.file, i)
                          );
                        case 6:
                          (a = t.sent),
                            (s = new Date()),
                            (e.previewData = a.data),
                            (e.delimiter = a.delimiter),
                            (e.importCsvMessages = a.messages || []),
                            a.hasErrors ||
                              e.importCsvMessages.push({
                                message:
                                  "Preview parsing is completed in ".concat(
                                    Ct.getPeriod(n, s),
                                    "."
                                  ),
                                type: "success",
                              }),
                            (t.next = 17);
                          break;
                        case 14:
                          (t.prev = 14),
                            (t.t0 = t["catch"](2)),
                            (e.importCsvMessages = [
                              { message: t.t0, type: "error" },
                            ]);
                        case 17:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[2, 14]]
                );
              })
            )();
          },
          loadFromCsv: function (e) {
            var t = this;
            return Object(d["a"])(
              Object(u["a"])().mark(function e() {
                var i, n, a, s, r, o, c, l, d, M, p, g;
                return Object(u["a"])().wrap(
                  function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (t.tableName) {
                            e.next = 3;
                            break;
                          }
                          return (
                            (t.tableNameError = "Table name can't be empty"),
                            e.abrupt("return")
                          );
                        case 3:
                          return (
                            (t.disableDialog = !0),
                            (i = {
                              quoteChar: t.quoteChar || '"',
                              escapeChar: t.escapeChar,
                              header: t.header,
                              delimiter: t.delimiter,
                            }),
                            (n = { message: "Parsing CSV...", type: "info" }),
                            t.importCsvMessages.push(n),
                            (a = setTimeout(function () {
                              n.type = "loading";
                            }, 1e3)),
                            (s = {
                              message:
                                "Importing CSV into a SQLite database...",
                              type: "info",
                            }),
                            (r = null),
                            (o = function (e) {
                              t.$set(s, "progress", e);
                            }),
                            (c = t.db.createProgressCounter(o)),
                            (e.prev = 12),
                            (l = new Date()),
                            (e.next = 16),
                            je.parse(t.file, i)
                          );
                        case 16:
                          if (((d = e.sent), (M = new Date()), d.hasErrors)) {
                            e.next = 38;
                            break;
                          }
                          return (
                            (p = d.rowCount),
                            (g = Ct.getPeriod(l, M)),
                            (n.type = "success"),
                            d.messages.length > 0
                              ? ((t.importCsvMessages =
                                  t.importCsvMessages.concat(d.messages)),
                                (n.message = ""
                                  .concat(p, " rows are parsed in ")
                                  .concat(g, ".")))
                              : (n.message = ""
                                  .concat(
                                    p,
                                    " rows are parsed successfully in "
                                  )
                                  .concat(g, ".")),
                            clearTimeout(a),
                            t.importCsvMessages.push(s),
                            (r = setTimeout(function () {
                              s.type = "loading";
                            }, 1e3)),
                            (l = new Date()),
                            (e.next = 29),
                            t.db.addTableFromCsv(t.tableName, d.data, c)
                          );
                        case 29:
                          (M = new Date()),
                            (t.addedTable = t.tableName),
                            (g = Ct.getPeriod(l, M)),
                            (s.message =
                              "Importing CSV into a SQLite database is completed in ".concat(
                                g,
                                "."
                              )),
                            (s.type = "success"),
                            clearTimeout(r),
                            (t.importCsvCompleted = !0),
                            (e.next = 41);
                          break;
                        case 38:
                          (n.message = "Parsing ended with errors."),
                            (n.type = "info"),
                            (t.importCsvMessages = t.importCsvMessages.concat(
                              d.messages
                            ));
                        case 41:
                          e.next = 48;
                          break;
                        case 43:
                          (e.prev = 43),
                            (e.t0 = e["catch"](12)),
                            "loading" === n.type && (n.type = "info"),
                            "loading" === s.type && (s.type = "info"),
                            t.importCsvMessages.push({
                              message: e.t0,
                              type: "error",
                            });
                        case 48:
                          clearTimeout(a),
                            clearTimeout(r),
                            t.db.deleteProgressCounter(c),
                            (t.disableDialog = !1);
                        case 52:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[12, 43]]
                );
              })
            )();
          },
          finish: function () {
            var e = this;
            return Object(d["a"])(
              Object(u["a"])().mark(function t() {
                var i, n;
                return Object(u["a"])().wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          e.$modal.hide(e.dialogName),
                          (i = [
                            "/*",
                            " * Your CSV file has been imported into ".concat(
                              e.addedTable,
                              " table."
                            ),
                            " * You can run this SQL query to make all CSV records available for charting.",
                            " */",
                            'SELECT * FROM "'.concat(e.addedTable, '"'),
                          ].join("\n")),
                          (t.next = 4),
                          e.$store.dispatch("addTab", { query: i })
                        );
                      case 4:
                        (n = t.sent),
                          e.$store.commit("setCurrentTabId", n),
                          (e.importCsvCompleted = !1),
                          e.$emit("finish"),
                          z["a"].send("inquiry.create", null, { auto: !0 });
                      case 9:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
        },
      },
      zt = wt,
      Tt = (i("6842"), Object(r["a"])(zt, me, Ie, !1, null, "316ff87f", null)),
      Ot = Tt.exports,
      xt = {
        name: "DbUploader",
        props: {
          type: {
            type: String,
            required: !1,
            default: "small",
            validator: function (e) {
              return ["illustrated", "small"].includes(e);
            },
          },
          width: { type: String, required: !1, default: "unset" },
        },
        components: { ChangeDbIcon: re, CsvImport: Ot },
        data: function () {
          return {
            state: "",
            animationPromise: Promise.resolve(),
            file: null,
            newDb: null,
          };
        },
        mounted: function () {
          var e = this;
          "illustrated" === this.type &&
            (this.animationPromise = new Promise(function (t) {
              e.$refs.fileImg.addEventListener("animationend", function (i) {
                i.animationName.startsWith("fly") &&
                  ((e.state = "dropped"), t());
              });
            }));
        },
        methods: {
          cancelCsvImport: function () {
            this.newDb && (this.newDb.shutDown(), (this.newDb = null));
          },
          finish: function () {
            var e = this;
            return Object(d["a"])(
              Object(u["a"])().mark(function t() {
                return Object(u["a"])().wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        e.$store.commit("setDb", e.newDb),
                          "/workspace" !== e.$route.path &&
                            e.$router.push("/workspace");
                      case 2:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          loadDb: function (e) {
            return Promise.all([
              this.newDb.loadDb(e),
              this.animationPromise,
            ]).then(this.finish);
          },
          checkFile: function (e) {
            var t = this;
            return Object(d["a"])(
              Object(u["a"])().mark(function i() {
                var n;
                return Object(u["a"])().wrap(function (i) {
                  while (1)
                    switch ((i.prev = i.next)) {
                      case 0:
                        if (
                          ((t.state = "dropping"),
                          (t.newDb = pe.getNewDatabase()),
                          !w.isDatabase(e))
                        ) {
                          i.next = 6;
                          break;
                        }
                        t.loadDb(e), (i.next = 13);
                        break;
                      case 6:
                        return (
                          z["a"].send("database.import", e.size, {
                            from: "csv",
                            new_db: !0,
                          }),
                          (t.file = e),
                          (i.next = 10),
                          t.$nextTick()
                        );
                      case 10:
                        return (
                          (n = t.$refs.addCsv),
                          n.reset(),
                          i.abrupt(
                            "return",
                            Promise.all([
                              n.previewCsv(),
                              t.animationPromise,
                            ]).then(n.open)
                          )
                        );
                      case 13:
                      case "end":
                        return i.stop();
                    }
                }, i);
              })
            )();
          },
          browse: function () {
            w.getFileFromUser(".db,.sqlite,.sqlite3,.csv").then(this.checkFile);
          },
          drop: function (e) {
            this.checkFile(e.dataTransfer.files[0]);
          },
        },
      },
      Lt = xt,
      At = (i("dd60"), Object(r["a"])(Lt, K, ee, !1, null, "8f626c6c", null)),
      kt = At.exports,
      St = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i("span", [
          i(
            "svg",
            {
              staticClass: "icon",
              attrs: {
                width: "18",
                height: "18",
                viewBox: "0 0 18 18",
                fill: "none",
              },
              on: {
                click: function (t) {
                  return t.stopPropagation(), e.onClick.apply(null, arguments);
                },
                mouseenter: function (t) {
                  return e.showTooltip(t, e.tooltipPosition);
                },
                mouseleave: e.hideTooltip,
              },
            },
            [
              i("path", {
                attrs: {
                  d: "M10.5 1.5H4.5C3.675 1.5 3 2.175 3 3V15C3 15.825 3.675 16.5 4.5 16.5H13.5C14.325 16.5\n      15 15.825 15 15V6L10.5 1.5ZM13.5 15H4.5V3H9.75V6.75H13.5V15ZM12 8.25V13.575L10.425\n      12L8.325 14.1L6.225 12L8.325 9.9L6.675 8.25H12Z",
                  fill: "#A2B1C6",
                },
              }),
            ]
          ),
          i(
            "span",
            {
              ref: "tooltip",
              staticClass: "icon-tooltip",
              style: e.tooltipStyle,
            },
            [e._v(" " + e._s(e.tooltip) + " ")]
          ),
        ]);
      },
      Et = [],
      Qt = {
        name: "ExportIcon",
        mixins: [H],
        props: ["tooltip", "tooltipPosition"],
        methods: {
          onClick: function () {
            this.hideTooltip(), this.$emit("click");
          },
        },
      },
      Ut = Qt,
      Yt = (i("d353"), Object(r["a"])(Ut, St, Et, !1, null, "ca7c0840", null)),
      _t = Yt.exports,
      Zt = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i("span", [
          i(
            "svg",
            {
              staticClass: "icon",
              attrs: {
                width: "18",
                height: "18",
                viewBox: "0 0 18 18",
                fill: "none",
              },
              on: {
                click: function (t) {
                  return t.stopPropagation(), e.onClick.apply(null, arguments);
                },
                mouseenter: e.showTooltip,
                mouseleave: e.hideTooltip,
              },
            },
            [
              i("g", { attrs: { "clip-path": "url(#clip0)" } }, [
                i("path", {
                  attrs: {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M13.6573 1.5H2.59985C1.77485 1.5 1.09985 2.175 1.09985 3V13.6649C1.09985 14.4899\n          1.77485 15.1649 2.59985\n          15.1649H9.84V13.6649H8.87866V9.08244H13.6573V9.83777H15.1573V3C15.1573\n          2.17 14.4873 1.5 13.6573 1.5ZM13.6573\n          7.58244V3H8.87866V7.58244H13.6573ZM7.37866 3H2.59985V7.58244H7.37866V3ZM2.59985\n          9.08244V13.6649H7.37866V9.08244H2.59985ZM13.1702\n          10.8434H15.6702V13.1717H18.0001V15.6717H15.6702V18H13.1702V15.6717H10.8401V13.1717H13.1702V10.8434Z",
                    fill: "#A2B1C6",
                  },
                }),
              ]),
              i("defs", [
                i("clipPath", { attrs: { id: "clip0" } }, [
                  i("rect", {
                    attrs: { width: "18", height: "18", fill: "white" },
                  }),
                ]),
              ]),
            ]
          ),
          i(
            "span",
            {
              ref: "tooltip",
              staticClass: "icon-tooltip",
              style: e.tooltipStyle,
            },
            [e._v(" Add new table from CSV ")]
          ),
        ]);
      },
      Vt = [],
      qt = {
        name: "AddTableIcon",
        mixins: [H],
        props: ["tooltip"],
        methods: {
          onClick: function () {
            this.hideTooltip(), this.$emit("click");
          },
        },
      },
      Pt = qt,
      Ht = (i("1345"), Object(r["a"])(Pt, Zt, Vt, !1, null, "0ba70d33", null)),
      Bt = Ht.exports,
      $t = {
        name: "Schema",
        components: {
          TableDescription: _,
          TextField: X,
          TreeChevron: E,
          DbUploader: kt,
          ExportIcon: _t,
          AddTableIcon: Bt,
          CsvImport: Ot,
        },
        data: function () {
          return { schemaVisible: !0, filter: null, file: null };
        },
        computed: {
          schema: function () {
            var e = this;
            return this.$store.state.db.schema
              ? this.filter
                ? this.$store.state.db.schema.filter(function (t) {
                    return (
                      -1 !==
                      t.name.toUpperCase().indexOf(e.filter.toUpperCase())
                    );
                  })
                : this.$store.state.db.schema
              : [];
          },
          dbName: function () {
            return this.$store.state.db.dbName;
          },
        },
        methods: {
          exportToFile: function () {
            this.$store.state.db.export("".concat(this.dbName, ".sqlite"));
          },
          addCsv: function () {
            var e = this;
            return Object(d["a"])(
              Object(u["a"])().mark(function t() {
                var i;
                return Object(u["a"])().wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), w.getFileFromUser(".csv");
                      case 2:
                        return (e.file = t.sent), (t.next = 5), e.$nextTick();
                      case 5:
                        return (
                          (i = e.$refs.addCsv),
                          i.reset(),
                          (t.next = 9),
                          i.previewCsv()
                        );
                      case 9:
                        i.open(),
                          z["a"].send("database.import", e.file.size, {
                            from: "csv",
                            new_db: !1,
                          });
                      case 11:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
        },
      },
      Gt = $t,
      Rt = (i("6e96"), Object(r["a"])(Gt, y, C, !1, null, "5b38d056", null)),
      Wt = Rt.exports,
      Ft = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "div",
          { attrs: { id: "tabs" } },
          [
            e.tabs.length > 0
              ? i(
                  "div",
                  { attrs: { id: "tabs-header" } },
                  e._l(e.tabs, function (t, n) {
                    return i(
                      "div",
                      {
                        key: n,
                        class: [
                          { "tab-selected": t.id === e.selectedTabId },
                          "tab",
                        ],
                        on: {
                          click: function (i) {
                            return e.selectTab(t.id);
                          },
                        },
                      },
                      [
                        i("div", { staticClass: "tab-name" }, [
                          i(
                            "span",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: !t.isSaved,
                                  expression: "!tab.isSaved",
                                },
                              ],
                              staticClass: "star",
                            },
                            [e._v("*")]
                          ),
                          t.name
                            ? i("span", [e._v(e._s(t.name))])
                            : i("span", { staticClass: "tab-untitled" }, [
                                e._v(e._s(t.tempName)),
                              ]),
                        ]),
                        i(
                          "div",
                          [
                            i("close-icon", {
                              staticClass: "close-icon",
                              attrs: { size: 10 },
                              on: {
                                click: function (i) {
                                  return e.beforeCloseTab(t);
                                },
                              },
                            }),
                          ],
                          1
                        ),
                      ]
                    );
                  }),
                  0
                )
              : e._e(),
            e._l(e.tabs, function (e) {
              return i("tab", { key: e.id, attrs: { tab: e } });
            }),
            i(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: 0 === e.tabs.length,
                    expression: "tabs.length === 0",
                  },
                ],
                attrs: { id: "start-guide" },
              },
              [
                i(
                  "span",
                  {
                    staticClass: "link",
                    on: {
                      click: function (t) {
                        return e.$root.$emit("createNewInquiry");
                      },
                    },
                  },
                  [e._v("Create")]
                ),
                e._v(" new inquiry from scratch or open one from "),
                i(
                  "router-link",
                  { staticClass: "link", attrs: { to: "/inquiries" } },
                  [e._v("Inquiries")]
                ),
              ],
              1
            ),
            i(
              "modal",
              {
                attrs: {
                  name: "close-warn",
                  classes: "dialog",
                  height: "auto",
                },
              },
              [
                i(
                  "div",
                  { staticClass: "dialog-header" },
                  [
                    e._v(
                      " Close tab " +
                        e._s(
                          null !== e.closingTab
                            ? e.closingTab.name ||
                                "[" + e.closingTab.tempName + "]"
                            : ""
                        ) +
                        " "
                    ),
                    i("close-icon", {
                      on: {
                        click: function (t) {
                          return e.$modal.hide("close-warn");
                        },
                      },
                    }),
                  ],
                  1
                ),
                i("div", { staticClass: "dialog-body" }, [
                  e._v(
                    " You have unsaved changes. Save changes in " +
                      e._s(
                        null !== e.closingTab
                          ? e.closingTab.name ||
                              "[" + e.closingTab.tempName + "]"
                          : ""
                      ) +
                      " before closing? "
                  ),
                ]),
                i("div", { staticClass: "dialog-buttons-container" }, [
                  i(
                    "button",
                    {
                      staticClass: "secondary",
                      on: {
                        click: function (t) {
                          return e.closeTab(e.closingTab);
                        },
                      },
                    },
                    [e._v(" Close without saving ")]
                  ),
                  i(
                    "button",
                    {
                      staticClass: "secondary",
                      on: {
                        click: function (t) {
                          return e.$modal.hide("close-warn");
                        },
                      },
                    },
                    [e._v("Cancel")]
                  ),
                  i(
                    "button",
                    {
                      staticClass: "primary",
                      on: {
                        click: function (t) {
                          return e.saveAndClose(e.closingTab);
                        },
                      },
                    },
                    [e._v("Save and close")]
                  ),
                ]),
              ]
            ),
          ],
          2
        );
      },
      Jt = [],
      Xt = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: e.isActive,
                expression: "isActive",
              },
            ],
            staticClass: "tab-content-container",
          },
          [
            i("splitpanes", {
              staticClass: "query-results-splitter",
              attrs: {
                horizontal: "",
                before: { size: e.topPaneSize, max: 100 },
                after: { size: 100 - e.topPaneSize, max: 100 },
                default: { before: 50, after: 50 },
              },
              scopedSlots: e._u([
                {
                  key: "left-pane",
                  fn: function () {
                    return [
                      i("div", {
                        staticClass: "above",
                        attrs: { id: "above-" + e.tab.id },
                      }),
                    ];
                  },
                  proxy: !0,
                },
                {
                  key: "right-pane",
                  fn: function () {
                    return [
                      i("div", {
                        ref: "bottomPane",
                        staticClass: "bottomPane",
                        attrs: { id: "bottom-" + e.tab.id },
                      }),
                    ];
                  },
                  proxy: !0,
                },
              ]),
            }),
            i("div", {
              staticClass: "hidden-part",
              attrs: { id: "hidden-" + e.tab.id },
            }),
            i(
              "teleport",
              { attrs: { to: "#" + e.tab.layout.sqlEditor + "-" + e.tab.id } },
              [
                i("sql-editor", {
                  ref: "sqlEditor",
                  attrs: { "is-getting-results": e.tab.isGettingResults },
                  on: {
                    switchTo: function (t) {
                      return e.onSwitchView("sqlEditor", t);
                    },
                    run: function (t) {
                      return e.tab.execute();
                    },
                  },
                  model: {
                    value: e.tab.query,
                    callback: function (t) {
                      e.$set(e.tab, "query", t);
                    },
                    expression: "tab.query",
                  },
                }),
              ],
              1
            ),
            i(
              "teleport",
              { attrs: { to: "#" + e.tab.layout.table + "-" + e.tab.id } },
              [
                i("run-result", {
                  attrs: {
                    result: e.tab.result,
                    "is-getting-results": e.tab.isGettingResults,
                    error: e.tab.error,
                    time: e.tab.time,
                  },
                  on: {
                    switchTo: function (t) {
                      return e.onSwitchView("table", t);
                    },
                  },
                }),
              ],
              1
            ),
            i(
              "teleport",
              { attrs: { to: "#" + e.tab.layout.dataView + "-" + e.tab.id } },
              [
                i("data-view", {
                  ref: "dataView",
                  attrs: {
                    "data-source":
                      (e.tab.result && e.tab.result.values) || null,
                    "init-options": e.tab.viewOptions,
                    "init-mode": e.tab.viewType,
                  },
                  on: {
                    switchTo: function (t) {
                      return e.onSwitchView("dataView", t);
                    },
                    update: e.onDataViewUpdate,
                  },
                }),
              ],
              1
            ),
          ],
          1
        );
      },
      Kt = [],
      ei = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "div",
          { staticClass: "sql-editor-panel" },
          [
            i(
              "div",
              { staticClass: "codemirror-container" },
              [
                i("codemirror", {
                  ref: "cm",
                  attrs: { options: e.cmOptions },
                  on: { changes: e.onChange },
                  model: {
                    value: e.query,
                    callback: function (t) {
                      e.query = t;
                    },
                    expression: "query",
                  },
                }),
              ],
              1
            ),
            i(
              "side-tool-bar",
              {
                attrs: { panel: "sqlEditor" },
                on: {
                  switchTo: function (t) {
                    return e.$emit("switchTo", t);
                  },
                },
              },
              [
                i(
                  "icon-button",
                  {
                    attrs: {
                      disabled: e.runDisabled,
                      loading: e.isGettingResults,
                      tooltip: "Run SQL query",
                      "tooltip-position": "top-left",
                    },
                    on: {
                      click: function (t) {
                        return e.$emit("run");
                      },
                    },
                  },
                  [i("run-icon", { attrs: { disabled: e.runDisabled } })],
                  1
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      ti = [],
      ii = (i("fb6a"), i("56b3")),
      ni = i.n(ii),
      ai = (i("9b74"), i("991c"), i("2f62")),
      si = {
        tabs: [],
        currentTab: null,
        currentTabId: null,
        untitledLastIndex: 0,
        predefinedInquiries: [],
        loadingPredefinedInquiries: !1,
        predefinedInquiriesLoaded: !1,
        db: null,
      },
      ri =
        (i("7db0"),
        i("a434"),
        {
          setDb: function (e, t) {
            e.db && e.db.shutDown(), (e.db = t);
          },
          updateTab: function (e, t) {
            var i = t.tab,
              n = t.newValues,
              a = n.name,
              s = n.id,
              r = n.query,
              o = n.viewType,
              c = n.viewOptions,
              l = n.isSaved,
              u = i.id;
            s && e.currentTabId === u && (e.currentTabId = s),
              s && (i.id = s),
              a && (i.name = a),
              r && (i.query = r),
              o && (i.viewType = o),
              c && (i.viewOptions = c),
              void 0 !== l && (i.isSaved = l),
              l && delete i.isPredefined;
          },
          deleteTab: function (e, t) {
            var i = e.tabs.indexOf(t);
            t.id === e.currentTabId &&
              (i < e.tabs.length - 1
                ? (e.currentTabId = e.tabs[i + 1].id)
                : i > 0
                ? (e.currentTabId = e.tabs[i - 1].id)
                : ((e.currentTabId = null), (e.untitledLastIndex = 0)),
              (e.currentTab = e.currentTabId
                ? e.tabs.find(function (t) {
                    return t.id === e.currentTabId;
                  })
                : null)),
              e.tabs.splice(i, 1);
          },
          setCurrentTabId: function (e, t) {
            try {
              (e.currentTabId = t),
                (e.currentTab = e.tabs.find(function (e) {
                  return e.id === t;
                }));
            } catch (i) {
              console.error("Can't open a tab id:" + t);
            }
          },
          updatePredefinedInquiries: function (e, t) {
            e.predefinedInquiries = Array.isArray(t) ? t : [t];
          },
          setLoadingPredefinedInquiries: function (e, t) {
            e.loadingPredefinedInquiries = t;
          },
          setPredefinedInquiriesLoaded: function (e, t) {
            e.predefinedInquiriesLoaded = t;
          },
        }),
      oi = (i("e9c4"), i("e1bd")),
      ci = (function () {
        function e(t) {
          var i =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          Object(oe["a"])(this, e),
            (this.id = i.id || Object(oi["a"])()),
            (this.name = i.id ? i.name : null),
            (this.tempName =
              i.name ||
              (t.untitledLastIndex
                ? "Untitled ".concat(t.untitledLastIndex)
                : "Untitled")),
            (this.query = i.query),
            (this.viewOptions = i.viewOptions || void 0),
            (this.isPredefined = i.isPredefined),
            (this.viewType = i.viewType || "chart"),
            (this.result = null),
            (this.isGettingResults = !1),
            (this.error = null),
            (this.time = 0),
            (this.layout = i.layout || {
              sqlEditor: "above",
              table: "bottom",
              dataView: "hidden",
            }),
            (this.maximize = i.maximize),
            (this.isSaved = !!i.id),
            (this.state = t);
        }
        return (
          Object(ce["a"])(e, [
            {
              key: "execute",
              value: (function () {
                var e = Object(d["a"])(
                  Object(u["a"])().mark(function e() {
                    var t, i;
                    return Object(u["a"])().wrap(
                      function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (this.isGettingResults = !0),
                                (this.result = null),
                                (this.error = null),
                                (t = this.state.db),
                                (e.prev = 4),
                                (i = new Date()),
                                (e.next = 8),
                                t.execute(this.query + ";")
                              );
                            case 8:
                              (this.result = e.sent),
                                (this.time = Ct.getPeriod(i, new Date())),
                                this.result &&
                                  this.result.values &&
                                  z["a"].send(
                                    "resultset.create",
                                    this.result.values[this.result.columns[0]]
                                      .length
                                  ),
                                z["a"].send(
                                  "query.run",
                                  parseFloat(this.time),
                                  { status: "success" }
                                ),
                                (e.next = 18);
                              break;
                            case 14:
                              (e.prev = 14),
                                (e.t0 = e["catch"](4)),
                                (this.error = { type: "error", message: e.t0 }),
                                z["a"].send("query.run", 0, {
                                  status: "error",
                                });
                            case 18:
                              t.refreshSchema(), (this.isGettingResults = !1);
                            case 20:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[4, 14]]
                    );
                  })
                );
                function t() {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
            },
          ]),
          e
        );
      })(),
      li = {
        addTab: function (e) {
          var t = arguments;
          return Object(d["a"])(
            Object(u["a"])().mark(function i() {
              var n, a, s;
              return Object(u["a"])().wrap(function (i) {
                while (1)
                  switch ((i.prev = i.next)) {
                    case 0:
                      if (
                        ((n = e.state),
                        (a = t.length > 1 && void 0 !== t[1] ? t[1] : {}),
                        n.tabs.some(function (e) {
                          return e.id === a.id;
                        }))
                      ) {
                        i.next = 7;
                        break;
                      }
                      return (
                        (s = new ci(n, JSON.parse(JSON.stringify(a)))),
                        n.tabs.push(s),
                        s.name || (n.untitledLastIndex += 1),
                        i.abrupt("return", s.id)
                      );
                    case 7:
                      return i.abrupt("return", a.id);
                    case 8:
                    case "end":
                      return i.stop();
                  }
              }, i);
            })
          )();
        },
      };
    n["default"].use(ai["a"]);
    var ui = new ai["a"].Store({ state: si, mutations: ri, actions: li });
    function di(e) {
      return "string" === typeof e ? e : e.text;
    }
    function Mi(e, t) {
      var i = ni.a.hint.sql(e, t),
        n = e.getRange(i.from, i.to).toUpperCase();
      return (
        1 === i.list.length &&
          di(i.list[0]).toUpperCase() === n &&
          (i.list = []),
        i
      );
    }
    var pi = {
      get tables() {
        var e = {};
        return (
          ui.state.db.schema &&
            ui.state.db.schema.forEach(function (t) {
              e[t.name] = t.columns.map(function (e) {
                return e.name;
              });
            }),
          e
        );
      },
      get defaultTable() {
        var e = ui.state.db.schema;
        return e && 1 === e.length ? e[0].name : null;
      },
      completeSingle: !1,
      completeOnSingleClick: !0,
      alignWithWord: !1,
    };
    function gi(e) {
      ni.a.showHint(e, Mi, pi);
    }
    function hi(e) {
      var t = e.getTokenAt(e.getCursor()),
        i = t.string.slice(-1),
        n = t.type;
      "string" !== n && i && " " !== i && ";" !== i && ni.a.showHint(e, Mi, pi);
    }
    var mi = i("8f94"),
      Ii =
        (i("a7be"),
        i("ffda"),
        i("d5db"),
        i("f6b6"),
        i("f4ba"),
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            "div",
            { staticClass: "side-tool-bar" },
            [
              i(
                "icon-button",
                {
                  attrs: {
                    active: "sqlEditor" === e.panel,
                    tooltip: "Switch panel to SQL editor",
                    "tooltip-position": "top-left",
                  },
                  nativeOn: {
                    click: function (t) {
                      return e.$emit("switchTo", "sqlEditor");
                    },
                  },
                },
                [i("sql-editor-icon")],
                1
              ),
              i(
                "icon-button",
                {
                  attrs: {
                    active: "table" === e.panel,
                    tooltip: "Switch panel to result set",
                    "tooltip-position": "top-left",
                  },
                  nativeOn: {
                    click: function (t) {
                      return e.$emit("switchTo", "table");
                    },
                  },
                },
                [i("table-icon")],
                1
              ),
              i(
                "icon-button",
                {
                  attrs: {
                    active: "dataView" === e.panel,
                    tooltip: "Switch panel to data view",
                    "tooltip-position": "top-left",
                  },
                  nativeOn: {
                    click: function (t) {
                      return e.$emit("switchTo", "dataView");
                    },
                  },
                },
                [i("data-view-icon")],
                1
              ),
              e.$slots.default
                ? i("div", { staticClass: "side-tool-bar-divider" })
                : e._e(),
              e._t("default"),
            ],
            2
          );
        }),
      Ni = [],
      fi = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "div",
          {
            class: ["icon-btn", { active: e.active }, { disabled: e.disabled }],
            on: {
              click: e.onClick,
              mouseenter: function (t) {
                return e.showTooltip(t, e.tooltipPosition);
              },
              mouseleave: e.hideTooltip,
            },
          },
          [
            i("div", { staticClass: "icon" }, [e._t("default")], 2),
            i(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: e.loading,
                    expression: "loading",
                  },
                ],
                staticClass: "icon-in-progress",
              },
              [i("loading-indicator")],
              1
            ),
            e.tooltip
              ? i(
                  "span",
                  {
                    ref: "tooltip",
                    staticClass: "icon-tooltip",
                    style: e.tooltipStyle,
                  },
                  [e._v(" " + e._s(e.tooltip) + " ")]
                )
              : e._e(),
          ]
        );
      },
      vi = [],
      ji = {
        name: "SideBarButton",
        props: ["active", "disabled", "tooltip", "tooltipPosition", "loading"],
        components: { LoadingIndicator: vt },
        mixins: [H],
        methods: {
          onClick: function () {
            this.hideTooltip(), this.$emit("click");
          },
        },
      },
      Di = ji,
      bi = (i("dd9c"), Object(r["a"])(Di, fi, vi, !1, null, "0c2b486e", null)),
      yi = bi.exports,
      Ci = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "svg",
          {
            attrs: {
              width: "18",
              height: "18",
              viewBox: "0 0 18 18",
              fill: "none",
            },
          },
          [
            i("path", {
              attrs: {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M14.5 2.16512L3.5 2.16999C2.675 2.16999 2 2.84499 2 3.66999V14.3349C2 15.1599 2.675\n      15.8349 3.5 15.8349L14.5 15.83C15.3327 15.83 16 15.1551 16 14.33V3.66512C16 2.83511 15.33\n      2.16512 14.5 2.16512ZM14.5014 3.66512L3.49878 3.66999V14.33L14.5014 14.3251V3.66512Z",
                fill: "#A2B1C6",
              },
            }),
            i("path", {
              attrs: {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M6.27319 14.7069L6.27319 3.32135L7.77319 3.32135L7.77319 14.7069L6.27319 14.7069Z",
                fill: "#A2B1C6",
              },
            }),
            i("path", {
              attrs: {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M10.2639 14.6932L10.2639 3.30772L11.7639 3.30772L11.7639 14.6932L10.2639 14.6932Z",
                fill: "#A2B1C6",
              },
            }),
            i("path", {
              attrs: {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M15.5108 7.48325H2.4895V5.98325H15.5108V7.48325Z",
                fill: "#A2B1C6",
              },
            }),
            i("path", {
              attrs: {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M15.5108 11.6056H2.4895V10.1056H15.5108V11.6056Z",
                fill: "#A2B1C6",
              },
            }),
          ]
        );
      },
      wi = [],
      zi = { name: "TableIcon" },
      Ti = zi,
      Oi = Object(r["a"])(Ti, Ci, wi, !1, null, null, null),
      xi = Oi.exports,
      Li = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "svg",
          {
            attrs: {
              width: "18",
              height: "19",
              viewBox: "0 0 18 19",
              fill: "none",
            },
          },
          [
            i("g", { attrs: { "clip-path": "url(#clip0)" } }, [
              i("path", {
                attrs: {
                  d: "M4.5 1.51343H10.5L15 6.01343V8.45284H13.5V6.76343H9.75V3.01343H4.5V8.45284H3V3.01343C3\n        2.18843 3.675 1.51343 4.5 1.51343Z",
                  fill: "#A2B1C6",
                },
              }),
              i("path", {
                attrs: {
                  d: "M4.28369 14.8127C4.28369 14.5872 4.20312 14.4114 4.04199 14.2854C3.88379 14.1594\n        3.604 14.0291 3.20264 13.8943C2.80127 13.7595 2.47314 13.6292 2.21826 13.5032C1.38916\n        13.0959 0.974609 12.5364 0.974609 11.8245C0.974609 11.47 1.07715 11.158 1.28223\n        10.8884C1.49023 10.616 1.7832 10.405 2.16113 10.2556C2.53906 10.1033 2.96387 10.0271\n        3.43555 10.0271C3.89551 10.0271 4.30713 10.1091 4.67041 10.2732C5.03662 10.4373 5.3208\n        10.6716 5.52295 10.9763C5.7251 11.2781 5.82617 11.6238 5.82617 12.0134H4.28809C4.28809\n        11.7527 4.20752 11.5505 4.04639 11.407C3.88818 11.2634 3.67285 11.1917 3.40039\n        11.1917C3.125 11.1917 2.90674 11.2532 2.74561 11.3762C2.5874 11.4963 2.5083\n        11.6501 2.5083 11.8376C2.5083 12.0017 2.59619 12.1511 2.77197 12.2859C2.94775 12.4177\n        3.25684 12.5554 3.69922 12.699C4.1416 12.8396 4.50488 12.9919 4.78906 13.156C5.48047\n        13.5544 5.82617 14.1038 5.82617 14.804C5.82617 15.3635 5.61523 15.803 5.19336\n        16.1223C4.77148 16.4417 4.19287 16.6013 3.45752 16.6013C2.93896 16.6013 2.46875 16.509\n        2.04688 16.3245C1.62793 16.137 1.31152 15.8821 1.09766 15.5598C0.886719 15.2346\n        0.78125 14.8611 0.78125 14.4392H2.32812C2.32812 14.782 2.41602 15.0354 2.5918\n        15.1995C2.77051 15.3606 3.05908 15.4412 3.45752 15.4412C3.7124 15.4412 3.91309\n        15.387 4.05957 15.2786C4.20898 15.1672 4.28369 15.012 4.28369 14.8127ZM12.0444\n        13.446C12.0444 14.0378 11.9463 14.5549 11.75 14.9973C11.5537 15.4368 11.2827 15.7898\n        10.937 16.0564L11.9697 16.8738L11.0161 17.6824L9.64062 16.575C9.51172 16.5925 9.38281\n        16.6013 9.25391 16.6013C8.70898 16.6013 8.22559 16.4753 7.80371 16.2234C7.38184 15.9714\n        7.05225 15.6111 6.81494 15.1423C6.58057 14.6736 6.45898 14.1345 6.4502\n        13.5251V13.1868C6.4502 12.5569 6.56445 12.0032 6.79297 11.5256C7.02441 11.0481 7.35254\n        10.679 7.77734 10.4182C8.20508 10.1575 8.69434 10.0271 9.24512 10.0271C9.78711 10.0271\n        10.2705 10.156 10.6953 10.4138C11.1201 10.6716 11.4497 11.0393 11.6841 11.5168C11.9214\n        11.9915 12.0415 12.5364 12.0444 13.1516V13.446ZM10.4756 13.178C10.4756 12.5422 10.3687\n        12.0603 10.1548 11.7322C9.94385 11.4011 9.64062 11.2356 9.24512 11.2356C8.83789 11.2356\n        8.53174 11.3982 8.32666 11.7234C8.12158 12.0486 8.01758 12.5247 8.01465\n        13.1516V13.446C8.01465 14.0759 8.11865 14.5593 8.32666 14.8962C8.53467 15.2302 8.84375\n        15.3972 9.25391 15.3972C9.64648 15.3972 9.94678 15.2317 10.1548 14.9006C10.3657\n        14.5696 10.4727 14.0935 10.4756 13.4724V13.178ZM14.3735\n        15.3269H17.0586V16.5134H12.8311V10.115H14.3735V15.3269Z",
                  fill: "#A2B1C6",
                },
              }),
            ]),
            i("defs", [
              i("clipPath", { attrs: { id: "clip0" } }, [
                i("rect", {
                  attrs: {
                    width: "18",
                    height: "18",
                    fill: "white",
                    transform: "translate(0 0.0134277)",
                  },
                }),
              ]),
            ]),
          ]
        );
      },
      Ai = [],
      ki = { name: "SqlEditorIcon" },
      Si = ki,
      Ei = Object(r["a"])(Si, Li, Ai, !1, null, null, null),
      Qi = Ei.exports,
      Ui = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "svg",
          {
            attrs: {
              width: "18",
              height: "18",
              viewBox: "0 0 18 18",
              fill: "none",
            },
          },
          [
            i("path", {
              attrs: {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M13.5552 6.91522C13.7584 6.91357 13.9535 6.99442 14.096 7.13926L17.2582 10.3541C17.5486\n        10.6494 17.5447 11.1242 17.2494 11.4147C16.9541 11.7051 16.4793 11.7012 16.1888\n        11.4059L13.57 8.74357L9.29577 13.2318C9.01977 13.5216 8.56484 13.5436 8.2621\n        13.2819L5.35435 10.7677L2.03285 13.7321C1.72382 14.0079 1.24971 13.981 0.973901\n        13.6719C0.69809 13.3629 0.725022 12.8888 1.03406 12.613L4.8471 9.20986C5.12827 8.95892\n        5.55198 8.95559 5.83705 9.20208L8.70249 11.6797L13.0182 7.14796C13.1583 7.00084 13.3521\n        6.91686 13.5552 6.91522Z",
                fill: "#A2B1C6",
              },
            }),
            i("circle", {
              attrs: {
                cx: "5.50049",
                cy: "6.00339",
                r: "1.5",
                fill: "#A2B1C6",
              },
            }),
            i("path", {
              attrs: {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M16.036 1.21788L1.96546 1.213C1.14046 1.213 0.465462 1.888 0.465462 2.713L0.464111\n        15.2821C0.464111 16.1071 1.13911 16.7821 1.96411 16.7821L16.0347 16.787C16.8674 16.787\n        17.5347 16.1121 17.5347 15.287L17.536 2.71788C17.536 1.88787 16.866 1.21788 16.036\n        1.21788ZM16.0374 2.71788L1.96424 2.713L1.96289 15.2773L16.036 15.2821L16.0374 2.71788Z",
                fill: "#A2B1C6",
              },
            }),
          ]
        );
      },
      Yi = [],
      _i = { name: "DataViewIcon" },
      Zi = _i,
      Vi = Object(r["a"])(Zi, Ui, Yi, !1, null, null, null),
      qi = Vi.exports,
      Pi = {
        name: "SideToolBar",
        props: ["panel"],
        components: {
          IconButton: yi,
          SqlEditorIcon: Qi,
          DataViewIcon: qi,
          TableIcon: xi,
        },
      },
      Hi = Pi,
      Bi = (i("f4e5"), Object(r["a"])(Hi, Ii, Ni, !1, null, "3b6366bb", null)),
      $i = Bi.exports,
      Gi = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "svg",
          {
            attrs: {
              width: "12",
              height: "13",
              viewBox: "0 0 12 13",
              fill: "none",
            },
          },
          [
            i("path", {
              attrs: {
                d: "M11.1624 6.94358L0.770043 12.9436L0.770043 0.943573L11.1624 6.94358Z",
                fill: "#A2B1C6",
              },
            }),
          ]
        );
      },
      Ri = [],
      Wi = { name: "RunIcon" },
      Fi = Wi,
      Ji = Object(r["a"])(Fi, Gi, Ri, !1, null, null, null),
      Xi = Ji.exports,
      Ki = {
        name: "SqlEditor",
        props: ["value", "isGettingResults"],
        components: {
          codemirror: mi["codemirror"],
          SideToolBar: $i,
          IconButton: yi,
          RunIcon: Xi,
        },
        data: function () {
          return {
            query: this.value,
            cmOptions: {
              tabSize: 4,
              mode: "text/x-mysql",
              theme: "neo",
              lineNumbers: !0,
              line: !0,
              autoRefresh: !0,
              extraKeys: { "Ctrl-Space": gi },
            },
          };
        },
        computed: {
          runDisabled: function () {
            return (
              !this.$store.state.db || !this.query || this.isGettingResults
            );
          },
        },
        watch: {
          query: function () {
            this.$emit("input", this.query);
          },
        },
        methods: {
          onChange: Ct.debounce(hi, 400),
          focus: function () {
            this.$refs.cm.codemirror.focus();
          },
        },
      },
      en = Ki,
      tn = (i("16a3"), Object(r["a"])(en, ei, ti, !1, null, "c84dd870", null)),
      nn = tn.exports,
      an = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "div",
          { staticClass: "data-view-panel" },
          [
            i(
              "div",
              { staticClass: "data-view-panel-content" },
              [
                i(e.mode, {
                  ref: "viewComponent",
                  tag: "component",
                  attrs: {
                    "init-options":
                      e.mode === e.initMode ? e.initOptions : void 0,
                    "data-sources": e.dataSource,
                    "import-to-png-enabled": e.importToPngEnabled,
                    "import-to-svg-enabled": e.importToSvgEnabled,
                  },
                  on: {
                    "update:importToPngEnabled": function (t) {
                      e.importToPngEnabled = t;
                    },
                    "update:import-to-png-enabled": function (t) {
                      e.importToPngEnabled = t;
                    },
                    "update:importToSvgEnabled": function (t) {
                      e.importToSvgEnabled = t;
                    },
                    "update:import-to-svg-enabled": function (t) {
                      e.importToSvgEnabled = t;
                    },
                    loadingImageCompleted: function (t) {
                      e.loadingImage = !1;
                    },
                    update: function (t) {
                      return e.$emit("update");
                    },
                  },
                }),
              ],
              1
            ),
            i(
              "side-tool-bar",
              {
                attrs: { panel: "dataView" },
                on: {
                  switchTo: function (t) {
                    return e.$emit("switchTo", t);
                  },
                },
              },
              [
                i(
                  "icon-button",
                  {
                    attrs: {
                      active: "chart" === e.mode,
                      tooltip: "Switch to chart",
                      "tooltip-position": "top-left",
                    },
                    on: {
                      click: function (t) {
                        e.mode = "chart";
                      },
                    },
                  },
                  [i("chart-icon")],
                  1
                ),
                i(
                  "icon-button",
                  {
                    attrs: {
                      active: "pivot" === e.mode,
                      tooltip: "Switch to pivot",
                      "tooltip-position": "top-left",
                    },
                    on: {
                      click: function (t) {
                        e.mode = "pivot";
                      },
                    },
                  },
                  [i("pivot-icon")],
                  1
                ),
                i("div", { staticClass: "side-tool-bar-divider" }),
                i(
                  "icon-button",
                  {
                    attrs: {
                      disabled: !e.importToPngEnabled || e.loadingImage,
                      loading: e.loadingImage,
                      tooltip: "Save as PNG image",
                      "tooltip-position": "top-left",
                    },
                    on: { click: e.saveAsPng },
                  },
                  [i("png-icon")],
                  1
                ),
                i(
                  "icon-button",
                  {
                    attrs: {
                      disabled: !e.importToSvgEnabled,
                      tooltip: "Save as SVG",
                      "tooltip-position": "top-left",
                    },
                    on: { click: e.saveAsSvg },
                  },
                  [i("export-to-svg-icon")],
                  1
                ),
                i(
                  "icon-button",
                  {
                    attrs: {
                      tooltip: "Save as HTML",
                      "tooltip-position": "top-left",
                    },
                    on: { click: e.saveAsHtml },
                  },
                  [i("HtmlIcon")],
                  1
                ),
                i(
                  "icon-button",
                  {
                    attrs: {
                      loading: e.copyingImage,
                      tooltip: "Copy visualisation to clipboard",
                      "tooltip-position": "top-left",
                    },
                    on: { click: e.prepareCopy },
                  },
                  [i("clipboard-icon")],
                  1
                ),
              ],
              1
            ),
            i("loading-dialog", {
              attrs: {
                loadingMsg: "Rendering the visualisation...",
                successMsg: "Image is ready",
                actionBtnName: "Copy",
                name: "prepareCopy",
                title: "Copy to clipboard",
                loading: e.preparingCopy,
              },
              on: { action: e.copyToClipboard, cancel: e.cancelCopy },
            }),
          ],
          1
        );
      },
      sn = [],
      rn = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: e.visible,
                expression: "visible",
              },
            ],
            ref: "chartContainer",
            staticClass: "chart-container",
          },
          [
            i(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !e.dataSources && e.visible,
                    expression: "!dataSources && visible",
                  },
                ],
                staticClass: "warning chart-warning",
              },
              [
                e._v(
                  " There is no data to build a chart. Run your SQL query and make sure the result is not empty. "
                ),
              ]
            ),
            i("PlotlyEditor", {
              ref: "plotlyEditor",
              staticClass: "chart",
              style: { height: e.dataSources ? "100%" : "calc(100% - 40px)" },
              attrs: {
                data: e.state.data,
                layout: e.state.layout,
                frames: e.state.frames,
                config: {
                  editable: !0,
                  displaylogo: !1,
                  modeBarButtonsToRemove: ["toImage"],
                },
                dataSources: e.dataSources,
                dataSourceOptions: e.dataSourceOptions,
                plotly: e.plotly,
                useResizeHandler: !0,
                debug: !0,
                advancedTraceTypeSelector: !0,
              },
              on: { onUpdate: e.update, onRender: e.onRender },
            }),
          ],
          1
        );
      },
      on = [],
      cn = i("030a"),
      ln = i.n(cn),
      un = (i("0848"), i("b1c6")),
      dn = i.n(un),
      Mn = (i("b64b"), i("662f")),
      pn = i.n(Mn);
    function gn(e) {
      return e
        ? Object.keys(e).map(function (e) {
            return { value: e, label: e };
          })
        : [];
    }
    function hn(e, t) {
      var i = JSON.parse(JSON.stringify(e)),
        n = {};
      for (var a in t) n[a] = [];
      return pn()(i.data, n), i;
    }
    function mn(e, t) {
      return In.apply(this, arguments);
    }
    function In() {
      return (
        (In = Object(d["a"])(
          Object(u["a"])().mark(function e(t, i) {
            var n;
            return Object(u["a"])().wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = t.querySelector(".js-plotly-plot")),
                      (e.next = 3),
                      ln.a.toImage(n, { format: i, width: null, height: null })
                    );
                  case 3:
                    return e.abrupt("return", e.sent);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        In.apply(this, arguments)
      );
    }
    function Nn(e) {
      var t = e.querySelector(".js-plotly-plot");
      return { data: t.data, layout: t.layout };
    }
    function fn(e) {
      var t = Object(oi["a"])();
      return '\n      <script src="https://cdn.plot.ly/plotly-latest.js" charset="UTF-8"></script>\n      <div id="'
        .concat(
          t,
          '"></div>\n      <script>\n        const el = document.getElementById("'
        )
        .concat(
          t,
          '")\n        \n        let timeout\n        function debounceResize() {\n          clearTimeout(timeout)\n          timeout = setTimeout(() => {\n            var r = el.getBoundingClientRect()\n            Plotly.relayout(el, {width: r.width, height: r.height})\n          }, 200)\n        }\n        \n        const resizeObserver = new ResizeObserver(debounceResize)\n        resizeObserver.observe(el)\n      \n        Plotly.newPlot(el, '
        )
        .concat(JSON.stringify(e.data), ", ")
        .concat(JSON.stringify(e.layout), ")\n      </script>\n  ");
    }
    var vn = {
        getOptionsFromDataSources: gn,
        getOptionsForSave: hn,
        getImageDataUrl: mn,
        getHtml: fn,
        getChartData: Nn,
      },
      jn = {
        name: "Chart",
        props: [
          "dataSources",
          "initOptions",
          "importToPngEnabled",
          "importToSvgEnabled",
          "forPivot",
        ],
        components: { PlotlyEditor: dn.a },
        data: function () {
          return {
            plotly: ln.a,
            state: this.initOptions || { data: [], layout: {}, frames: [] },
            visible: !0,
            resizeObserver: null,
          };
        },
        computed: {
          dataSourceOptions: function () {
            return vn.getOptionsFromDataSources(this.dataSources);
          },
        },
        created: function () {
          var e = this;
          ln.a.setPlotConfig({ notifyOnLogging: 1 }),
            this.$watch(
              function () {
                return (
                  e.state &&
                  e.state.data &&
                  e.state.data
                    .map(function (e) {
                      return ""
                        .concat(e.type)
                        .concat(e.mode ? "-" + e.mode : "");
                    })
                    .join(",")
                );
              },
              function (t) {
                z["a"].send("viz_plotly.render", null, {
                  type: t,
                  pivot: !!e.forPivot,
                });
              },
              { deep: !0 }
            );
        },
        mounted: function () {
          (this.resizeObserver = new ResizeObserver(this.handleResize)),
            this.resizeObserver.observe(this.$refs.chartContainer);
        },
        beforeDestroy: function () {
          this.resizeObserver.unobserve(this.$refs.chartContainer);
        },
        watch: {
          dataSources: function () {
            this.dataSources && pn()(this.state.data, this.dataSources);
          },
        },
        methods: {
          handleResize: function () {
            var e = this;
            (this.visible = !1),
              this.$nextTick(function () {
                e.visible = !0;
              });
          },
          onRender: function (e, t, i) {},
          update: function (e, t, i) {
            (this.state = { data: e, layout: t, frames: i }),
              this.$emit("update");
          },
          getOptionsForSave: function () {
            return vn.getOptionsForSave(this.state, this.dataSources);
          },
          saveAsPng: function () {
            var e = this;
            return Object(d["a"])(
              Object(u["a"])().mark(function t() {
                var i;
                return Object(u["a"])().wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), e.prepareCopy();
                      case 2:
                        (i = t.sent),
                          e.$emit("loadingImageCompleted"),
                          w.downloadFromUrl(i, "chart");
                      case 5:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          saveAsSvg: function () {
            var e = this;
            return Object(d["a"])(
              Object(u["a"])().mark(function t() {
                var i;
                return Object(u["a"])().wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), e.prepareCopy("svg");
                      case 2:
                        (i = t.sent), w.downloadFromUrl(i, "chart");
                      case 4:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          saveAsHtml: function () {
            w.exportToFile(vn.getHtml(this.state), "chart.html", "text/html");
          },
          prepareCopy: function () {
            var e = arguments,
              t = this;
            return Object(d["a"])(
              Object(u["a"])().mark(function i() {
                var n;
                return Object(u["a"])().wrap(function (i) {
                  while (1)
                    switch ((i.prev = i.next)) {
                      case 0:
                        return (
                          (n = e.length > 0 && void 0 !== e[0] ? e[0] : "png"),
                          (i.next = 3),
                          vn.getImageDataUrl(t.$refs.plotlyEditor.$el, n)
                        );
                      case 3:
                        return i.abrupt("return", i.sent);
                      case 4:
                      case "end":
                        return i.stop();
                    }
                }, i);
              })
            )();
          },
        },
      },
      Dn = jn,
      bn = (i("91d3"), Object(r["a"])(Dn, rn, on, !1, null, "fa8fd904", null)),
      yn = bn.exports,
      Cn = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "div",
          { staticClass: "pivot-container" },
          [
            i(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !e.dataSources,
                    expression: "!dataSources",
                  },
                ],
                staticClass: "warning pivot-warning",
              },
              [
                e._v(
                  " There is no data to build a pivot. Run your SQL query and make sure the result is not empty. "
                ),
              ]
            ),
            i("pivot-ui", {
              attrs: { "key-names": e.columns },
              on: {
                update: function (t) {
                  return e.$emit("update");
                },
                loadingCustomChartImageCompleted: function (t) {
                  return e.$emit("loadingImageCompleted");
                },
              },
              model: {
                value: e.pivotOptions,
                callback: function (t) {
                  e.pivotOptions = t;
                },
                expression: "pivotOptions",
              },
            }),
            i("div", { ref: "pivotOutput", staticClass: "pivot-output" }),
          ],
          1
        );
      },
      wn = [],
      zn = i("1157"),
      Tn = i.n(zn),
      On =
        (i("9751"),
        i("ccb1"),
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("div", { staticClass: "pivot-ui" }, [
            i("div", { class: { collapsed: e.collapsed } }, [
              i(
                "div",
                { staticClass: "row" },
                [
                  i("label", [e._v("Columns")]),
                  i(
                    "multiselect",
                    {
                      staticClass: "sqliteviz-select cols",
                      attrs: {
                        options: e.colsToSelect,
                        disabled: 0 === e.colsToSelect.length,
                        multiple: !0,
                        hideSelected: !0,
                        "close-on-select": !0,
                        "show-labels": !1,
                        max: e.colsToSelect.length,
                        "open-direction": "bottom",
                        placeholder: "",
                      },
                      model: {
                        value: e.cols,
                        callback: function (t) {
                          e.cols = t;
                        },
                        expression: "cols",
                      },
                    },
                    [
                      i("template", { slot: "maxElements" }, [
                        i("span", { staticClass: "no-results" }, [
                          e._v("No Results"),
                        ]),
                      ]),
                      i("template", { slot: "placeholder" }, [
                        e._v("Choose columns"),
                      ]),
                      i("template", { slot: "noResult" }, [
                        i("span", { staticClass: "no-results" }, [
                          e._v("No Results"),
                        ]),
                      ]),
                    ],
                    2
                  ),
                  i("pivot-sort-btn", {
                    staticClass: "sort-btn",
                    attrs: { direction: "col" },
                    model: {
                      value: e.colOrder,
                      callback: function (t) {
                        e.colOrder = t;
                      },
                      expression: "colOrder",
                    },
                  }),
                ],
                1
              ),
              i(
                "div",
                { staticClass: "row" },
                [
                  i("label", [e._v("Rows")]),
                  i(
                    "multiselect",
                    {
                      staticClass: "sqliteviz-select rows",
                      attrs: {
                        options: e.rowsToSelect,
                        disabled: 0 === e.rowsToSelect.length,
                        multiple: !0,
                        hideSelected: !0,
                        "close-on-select": !0,
                        "show-labels": !1,
                        max: e.rowsToSelect.length,
                        "option-height": 29,
                        "open-direction": "bottom",
                        placeholder: "",
                      },
                      model: {
                        value: e.rows,
                        callback: function (t) {
                          e.rows = t;
                        },
                        expression: "rows",
                      },
                    },
                    [
                      i("template", { slot: "maxElements" }, [
                        i("span", { staticClass: "no-results" }, [
                          e._v("No Results"),
                        ]),
                      ]),
                      i("template", { slot: "placeholder" }, [
                        e._v("Choose rows"),
                      ]),
                      i("template", { slot: "noResult" }, [
                        i("span", { staticClass: "no-results" }, [
                          e._v("No Results"),
                        ]),
                      ]),
                    ],
                    2
                  ),
                  i("pivot-sort-btn", {
                    staticClass: "sort-btn",
                    attrs: { direction: "row" },
                    model: {
                      value: e.rowOrder,
                      callback: function (t) {
                        e.rowOrder = t;
                      },
                      expression: "rowOrder",
                    },
                  }),
                ],
                1
              ),
              i(
                "div",
                { staticClass: "row aggregator" },
                [
                  i("label", [e._v("Aggregator")]),
                  i(
                    "multiselect",
                    {
                      staticClass: "sqliteviz-select short aggregator",
                      attrs: {
                        options: e.aggregators,
                        label: "name",
                        "track-by": "name",
                        "close-on-select": !0,
                        "show-labels": !1,
                        hideSelected: !0,
                        "option-height": 29,
                        "open-direction": "bottom",
                        placeholder: "Choose a function",
                      },
                      model: {
                        value: e.aggregator,
                        callback: function (t) {
                          e.aggregator = t;
                        },
                        expression: "aggregator",
                      },
                    },
                    [
                      i("template", { slot: "noResult" }, [
                        i("span", { staticClass: "no-results" }, [
                          e._v("No Results"),
                        ]),
                      ]),
                    ],
                    2
                  ),
                  i("multiselect", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: e.valCount > 0,
                        expression: "valCount > 0",
                      },
                    ],
                    staticClass: "sqliteviz-select aggr-arg",
                    attrs: {
                      options: e.keyNames,
                      disabled: 0 === e.keyNames.length,
                      "close-on-select": !0,
                      "show-labels": !1,
                      hideSelected: !0,
                      "option-height": 29,
                      "open-direction": "bottom",
                      placeholder: "Choose an argument",
                    },
                    model: {
                      value: e.val1,
                      callback: function (t) {
                        e.val1 = t;
                      },
                      expression: "val1",
                    },
                  }),
                  i("multiselect", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: e.valCount > 1,
                        expression: "valCount > 1",
                      },
                    ],
                    staticClass: "sqliteviz-select aggr-arg",
                    attrs: {
                      options: e.keyNames,
                      disabled: 0 === e.keyNames.length,
                      "close-on-select": !0,
                      "show-labels": !1,
                      hideSelected: !0,
                      "option-height": 29,
                      "open-direction": "bottom",
                      placeholder: "Choose a second argument",
                    },
                    model: {
                      value: e.val2,
                      callback: function (t) {
                        e.val2 = t;
                      },
                      expression: "val2",
                    },
                  }),
                ],
                1
              ),
              i(
                "div",
                { staticClass: "row" },
                [
                  i("label", [e._v("View")]),
                  i(
                    "multiselect",
                    {
                      staticClass: "sqliteviz-select short renderer",
                      attrs: {
                        options: e.renderers,
                        label: "name",
                        "track-by": "name",
                        "close-on-select": !0,
                        "allow-empty": !1,
                        "show-labels": !1,
                        hideSelected: !0,
                        "option-height": 29,
                        "open-direction": "bottom",
                        placeholder: "Choose a view",
                      },
                      model: {
                        value: e.renderer,
                        callback: function (t) {
                          e.renderer = t;
                        },
                        expression: "renderer",
                      },
                    },
                    [
                      i("template", { slot: "noResult" }, [
                        i("span", { staticClass: "no-results" }, [
                          e._v("No Results"),
                        ]),
                      ]),
                    ],
                    2
                  ),
                ],
                1
              ),
            ]),
            i(
              "span",
              {
                staticClass: "switcher",
                on: {
                  click: function (t) {
                    e.collapsed = !e.collapsed;
                  },
                },
              },
              [
                e._v(
                  " " +
                    e._s(
                      e.collapsed
                        ? "Show pivot settings"
                        : "Hide pivot settings"
                    ) +
                    " "
                ),
              ]
            ),
          ]);
        }),
      xn = [],
      Ln = (i("2532"), i("8e5f")),
      An = i.n(Ln),
      kn = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "div",
          {
            class: ["pivot-sort-btn", e.direction],
            on: { click: e.changeSorting },
          },
          [
            e._v(" " + e._s(e.value.includes("key") ? "key" : "value") + " "),
            i("sort-icon", {
              staticClass: "sort-icon",
              attrs: {
                horizontal: "col" === e.direction,
                asc: e.value.includes("a_to_z"),
              },
            }),
          ],
          1
        );
      },
      Sn = [],
      En = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "svg",
          {
            class: ["sort-icon", { horizontal: e.horizontal }, { asc: e.asc }],
            attrs: {
              width: "6",
              height: "12",
              viewBox: "0 0 6 12",
              fill: "none",
            },
          },
          [
            i("path", {
              attrs: {
                d: "M2.99932 -3.63032e-05C2.75092 -3.63032e-05 2.54932 0.201563 2.54932 0.449964L2.54932\n      11.55C2.54932 11.7984 2.75092 12 2.99932 12C3.24772 12 3.44932 11.7984 3.44932\n      11.55L3.44932 0.449964C3.44932 0.201563 3.24772 -3.63032e-05 2.99932 -3.63032e-05Z",
                fill: "#506784",
              },
            }),
            i("path", {
              attrs: {
                d: "M2.99915 1.80492e-05C2.8839 1.80492e-05 2.76865 0.0438534 2.68109 0.132073L0.581055\n      2.232C0.405273 2.40789 0.405273 2.69287 0.581055 2.86865C0.756946 3.04443 1.04193 3.04443\n      1.21771 2.86865L2.99969 1.08667L4.78168 2.86865C4.95746 3.04443 5.24255 3.04443 5.41833\n      2.86865C5.59412 2.69287 5.59412 2.40789 5.41833 2.232L3.3183 0.132073C3.22953 0.0438534\n      3.11428 1.80492e-05 2.99915 1.80492e-05V1.80492e-05Z",
                fill: "#506784",
              },
            }),
          ]
        );
      },
      Qn = [],
      Un = {
        name: "SortIcon",
        props: {
          horizontal: { type: Boolean, required: !1, default: !1 },
          asc: { type: Boolean, required: !1, default: !0 },
        },
      },
      Yn = Un,
      _n = (i("a6ab"), Object(r["a"])(Yn, En, Qn, !1, null, "80fbe500", null)),
      Zn = _n.exports,
      Vn = {
        name: "PivotSortBtn",
        props: ["direction", "value"],
        components: { SortIcon: Zn },
        methods: {
          changeSorting: function () {
            "key_a_to_z" === this.value
              ? this.$emit("input", "value_a_to_z")
              : "value_a_to_z" === this.value
              ? this.$emit("input", "value_z_to_a")
              : this.$emit("input", "key_a_to_z");
          },
        },
      },
      qn = Vn,
      Pn = (i("0f34"), Object(r["a"])(qn, kn, Sn, !1, null, "e3801f08", null)),
      Hn = Pn.exports,
      Bn = (i("8e51"), i("3c3e"), i("c0e9")),
      $n = i.n(Bn),
      Gn = [
        "Count",
        "Count as Fraction of Total",
        "Count as Fraction of Rows",
        "Count as Fraction of Columns",
      ],
      Rn = ["Sum over Sum", "80% Upper Bound", "80% Lower Bound"];
    function Wn(e) {
      var t = e.getRowKeys(),
        i = e.getColKeys(),
        n = {
          "Column keys": i.map(function (e) {
            return e.join("-");
          }),
          "Row keys": t.map(function (e) {
            return e.join("-");
          }),
        },
        a = {},
        s = {},
        r = e.rowAttrs.join("-"),
        o = e.colAttrs.join("-");
      return (
        i.forEach(function (i) {
          var n = o + ":" + i.join("-");
          (s[n] = []),
            t.forEach(function (t) {
              var o = e.getAggregator(t, i).value();
              s[n].push(o);
              var c = r + ":" + t.join("-");
              a[c] || (a[c] = []), a[c].push(o);
            });
        }),
        Object.assign(n, s, a)
      );
    }
    function Fn(e, t) {
      return (
        (t.customChartComponent.dataSources = Wn(e)),
        (t.customChartComponent.forPivot = !0),
        t.customChartComponent.$mount(),
        Tn()(t.customChartComponent.$el)
      );
    }
    Tn.a.extend(
      Tn.a.pivotUtilities.renderers,
      Tn.a.pivotUtilities.export_renderers,
      Tn.a.pivotUtilities.plotly_renderers,
      { "Custom chart": Fn }
    );
    var Jn = Object.keys(Tn.a.pivotUtilities.renderers).map(function (e) {
        return { name: e, fun: Tn.a.pivotUtilities.renderers[e] };
      }),
      Xn = Object.keys(Tn.a.pivotUtilities.aggregators).map(function (e) {
        return { name: e, fun: Tn.a.pivotUtilities.aggregators[e] };
      });
    function Kn(e) {
      return ea.apply(this, arguments);
    }
    function ea() {
      return (
        (ea = Object(d["a"])(
          Object(u["a"])().mark(function e(t) {
            var i;
            return Object(u["a"])().wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (i = t.querySelector(".pvtTable")),
                      (e.next = 3),
                      $n()(i, { logging: !1 })
                    );
                  case 3:
                    return e.abrupt("return", e.sent);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        ea.apply(this, arguments)
      );
    }
    function ta(e) {
      return "\n      <style>\n        table.pvtTable {\n          font-family: Arial, sans-serif;\n          font-size: 12px;\n          text-align: left;\n          border-collapse: collapse;\n          min-width: 100%;\n        }\n        table.pvtTable .pvtColLabel {\n          text-align: center;\n        }\n        table.pvtTable .pvtTotalLabel {\n          text-align: right;\n        }\n        table.pvtTable tbody tr td {\n          color: #506784;\n          border: 1px solid #DFE8F3;\n          text-align: right;\n        }\n        table.pvtTable thead tr th,\n        table.pvtTable tbody tr th {\n          background-color: #506784;\n          color: #fff;\n          border: 1px solid #DFE8F3;\n        }\n      </style>\n      ".concat(
        e.outerHTML,
        "\n  "
      );
    }
    var ia = { getPivotCanvas: Kn, getPivotHtml: ta },
      na = n["default"].extend(yn),
      aa = {
        name: "pivotUi",
        props: ["keyNames", "value"],
        components: { Multiselect: An.a, PivotSortBtn: Hn },
        data: function () {
          var e = (this.value && this.value.aggregatorName) || "Count",
            t = (this.value && this.value.rendererName) || "Table";
          return {
            collapsed: !1,
            renderer: { name: t, fun: Tn.a.pivotUtilities.renderers[t] },
            aggregator: { name: e, fun: Tn.a.pivotUtilities.aggregators[e] },
            rows: (this.value && this.value.rows) || [],
            cols: (this.value && this.value.cols) || [],
            val1: (this.value && this.value.vals && this.value.vals[0]) || "",
            val2: (this.value && this.value.vals && this.value.vals[1]) || "",
            colOrder: (this.value && this.value.colOrder) || "key_a_to_z",
            rowOrder: (this.value && this.value.rowOrder) || "key_a_to_z",
            customChartComponent:
              (this.value &&
                this.value.rendererOptions &&
                this.value.rendererOptions.customChartComponent) ||
              new na(),
          };
        },
        computed: {
          valCount: function () {
            return Gn.includes(this.aggregator.name)
              ? 0
              : Rn.includes(this.aggregator.name)
              ? 2
              : 1;
          },
          renderers: function () {
            return Jn;
          },
          aggregators: function () {
            return Xn;
          },
          rowsToSelect: function () {
            var e = this;
            return this.keyNames.filter(function (t) {
              return !e.cols.includes(t);
            });
          },
          colsToSelect: function () {
            var e = this;
            return this.keyNames.filter(function (t) {
              return !e.rows.includes(t);
            });
          },
        },
        watch: {
          renderer: function () {
            this.returnValue();
          },
          aggregator: function () {
            this.returnValue();
          },
          rows: function () {
            this.returnValue();
          },
          cols: function () {
            this.returnValue();
          },
          val1: function () {
            this.returnValue();
          },
          val2: function () {
            this.returnValue();
          },
          colOrder: function () {
            this.returnValue();
          },
          rowOrder: function () {
            this.returnValue();
          },
        },
        created: function () {
          var e = this;
          this.customChartComponent.$on("update", function () {
            e.$emit("update");
          }),
            this.customChartComponent.$on(
              "loadingImageCompleted",
              function (t) {
                e.$emit("loadingCustomChartImageCompleted");
              }
            );
        },
        methods: {
          returnValue: function () {
            for (var e = [], t = 1; t <= this.valCount; t++)
              e.push(this["val".concat(t)]);
            this.$emit("update"),
              this.$emit("input", {
                rows: this.rows,
                cols: this.cols,
                colOrder: this.colOrder,
                rowOrder: this.rowOrder,
                aggregator: this.aggregator.fun(e),
                aggregatorName: this.aggregator.name,
                renderer: this.renderer.fun,
                rendererName: this.renderer.name,
                rendererOptions:
                  "Custom chart" !== this.renderer.name
                    ? void 0
                    : { customChartComponent: this.customChartComponent },
                vals: e,
              });
          },
        },
      },
      sa = aa,
      ra = (i("5207"), Object(r["a"])(sa, On, xn, !1, null, "5ff01b28", null)),
      oa = ra.exports,
      ca = n["default"].extend(yn),
      la = {
        name: "pivot",
        props: [
          "dataSources",
          "initOptions",
          "importToPngEnabled",
          "importToSvgEnabled",
        ],
        components: { PivotUi: oa },
        data: function () {
          return {
            resizeObserver: null,
            pivotOptions: this.initOptions
              ? {
                  rows: this.initOptions.rows,
                  cols: this.initOptions.cols,
                  colOrder: this.initOptions.colOrder,
                  rowOrder: this.initOptions.rowOrder,
                  aggregatorName: this.initOptions.aggregatorName,
                  aggregator: Tn.a.pivotUtilities.aggregators[
                    this.initOptions.aggregatorName
                  ](this.initOptions.vals),
                  vals: this.initOptions.vals,
                  rendererName: this.initOptions.rendererName,
                  renderer:
                    Tn.a.pivotUtilities.renderers[
                      this.initOptions.rendererName
                    ],
                  rendererOptions: this.initOptions.rendererOptions
                    ? {
                        customChartComponent: new ca({
                          propsData: {
                            initOptions:
                              this.initOptions.rendererOptions
                                .customChartOptions,
                          },
                        }),
                      }
                    : void 0,
                }
              : {
                  rows: [],
                  cols: [],
                  colOrder: "key_a_to_z",
                  rowOrder: "key_a_to_z",
                  aggregatorName: "Count",
                  aggregator: Tn.a.pivotUtilities.aggregators.Count(),
                  vals: [],
                  rendererName: "Table",
                  renderer: Tn.a.pivotUtilities.renderers.Table,
                  rendererOptions: void 0,
                },
          };
        },
        computed: {
          columns: function () {
            return Object.keys(this.dataSources || {});
          },
          viewStandartChart: function () {
            return (
              this.pivotOptions.rendererName in
              Tn.a.pivotUtilities.plotly_renderers
            );
          },
          viewCustomChart: function () {
            return "Custom chart" === this.pivotOptions.rendererName;
          },
        },
        watch: {
          dataSources: function () {
            this.show();
          },
          "pivotOptions.rendererName": {
            immediate: !0,
            handler: function () {
              this.$emit(
                "update:importToPngEnabled",
                "TSV Export" !== this.pivotOptions.rendererName
              ),
                this.$emit(
                  "update:importToSvgEnabled",
                  this.viewStandartChart || this.viewCustomChart
                ),
                z["a"].send("viz_pivot.render", null, {
                  type: this.pivotOptions.rendererName,
                });
            },
          },
          pivotOptions: function () {
            this.show();
          },
        },
        mounted: function () {
          this.show(),
            (this.resizeObserver = new ResizeObserver(this.handleResize)),
            this.resizeObserver.observe(this.$refs.pivotOutput);
        },
        beforeDestroy: function () {
          this.resizeObserver.unobserve(this.$refs.pivotOutput);
        },
        methods: {
          handleResize: function () {
            this.viewStandartChart && window.dispatchEvent(new Event("resize"));
          },
          show: function () {
            var e = Object(I["a"])({}, this.pivotOptions);
            this.viewStandartChart &&
              (e.rendererOptions = {
                plotly: { autosize: !0, width: null, height: null },
                plotlyConfig: {
                  displaylogo: !1,
                  responsive: !0,
                  modeBarButtonsToRemove: ["toImage"],
                },
              }),
              Tn()(this.$refs.pivotOutput).pivot(
                function (e) {
                  for (
                    var t = this,
                      i = this.dataSources
                        ? this.dataSources[this.columns[0]].length
                        : 0,
                      n = function (i) {
                        var n = {};
                        t.columns.forEach(function (e) {
                          n[e] = t.dataSources[e][i - 1];
                        }),
                          e(n);
                      },
                      a = 1;
                    a <= i;
                    a++
                  )
                    n(a);
                }.bind(this),
                e
              ),
              this.viewStandartChart &&
                window.dispatchEvent(new Event("resize"));
          },
          getOptionsForSave: function () {
            var e = Object(I["a"])({}, this.pivotOptions);
            if (e.rendererOptions) {
              var t = this.pivotOptions.rendererOptions.customChartComponent;
              e.rendererOptions = { customChartOptions: t.getOptionsForSave() };
            }
            return e;
          },
          saveAsPng: function () {
            var e = this;
            return Object(d["a"])(
              Object(u["a"])().mark(function t() {
                var i;
                return Object(u["a"])().wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (!e.viewCustomChart) {
                          t.next = 4;
                          break;
                        }
                        e.pivotOptions.rendererOptions.customChartComponent.saveAsPng(),
                          (t.next = 16);
                        break;
                      case 4:
                        if (!e.viewStandartChart) {
                          t.next = 10;
                          break;
                        }
                        return (
                          (t.next = 7),
                          vn.getImageDataUrl(e.$refs.pivotOutput, "png")
                        );
                      case 7:
                        (t.t0 = t.sent), (t.next = 13);
                        break;
                      case 10:
                        return (
                          (t.next = 12), ia.getPivotCanvas(e.$refs.pivotOutput)
                        );
                      case 12:
                        t.t0 = t.sent.toDataURL("image/png");
                      case 13:
                        (i = t.t0),
                          e.$emit("loadingImageCompleted"),
                          w.downloadFromUrl(i, "pivot");
                      case 16:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          prepareCopy: function () {
            var e = this;
            return Object(d["a"])(
              Object(u["a"])().mark(function t() {
                return Object(u["a"])().wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (!e.viewCustomChart) {
                          t.next = 4;
                          break;
                        }
                        return (
                          (t.next = 3),
                          e.pivotOptions.rendererOptions.customChartComponent.prepareCopy()
                        );
                      case 3:
                        return t.abrupt("return", t.sent);
                      case 4:
                        if (!e.viewStandartChart) {
                          t.next = 8;
                          break;
                        }
                        return (
                          (t.next = 7),
                          vn.getImageDataUrl(e.$refs.pivotOutput, "png")
                        );
                      case 7:
                        return t.abrupt("return", t.sent);
                      case 8:
                        return (
                          (t.next = 10), ia.getPivotCanvas(e.$refs.pivotOutput)
                        );
                      case 10:
                        return t.abrupt("return", t.sent);
                      case 11:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          saveAsSvg: function () {
            var e = this;
            return Object(d["a"])(
              Object(u["a"])().mark(function t() {
                var i;
                return Object(u["a"])().wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (!e.viewCustomChart) {
                          t.next = 4;
                          break;
                        }
                        e.pivotOptions.rendererOptions.customChartComponent.saveAsSvg(),
                          (t.next = 9);
                        break;
                      case 4:
                        if (!e.viewStandartChart) {
                          t.next = 9;
                          break;
                        }
                        return (
                          (t.next = 7),
                          vn.getImageDataUrl(e.$refs.pivotOutput, "svg")
                        );
                      case 7:
                        (i = t.sent), w.downloadFromUrl(i, "pivot");
                      case 9:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          saveAsHtml: function () {
            if (this.viewCustomChart)
              this.pivotOptions.rendererOptions.customChartComponent.saveAsHtml();
            else if (this.viewStandartChart) {
              var e = vn.getChartData(this.$refs.pivotOutput);
              w.exportToFile(vn.getHtml(e), "chart.html", "text/html");
            } else
              w.exportToFile(
                ia.getPivotHtml(this.$refs.pivotOutput),
                "pivot.html",
                "text/html"
              );
          },
        },
      },
      ua = la,
      da = (i("3bb9"), Object(r["a"])(ua, Cn, wn, !1, null, "620cc712", null)),
      Ma = da.exports,
      pa = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "svg",
          {
            attrs: {
              width: "18",
              height: "18",
              viewBox: "0 0 18 18",
              fill: "none",
            },
          },
          [
            i("path", {
              attrs: {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M8.41943 16V10H10.4194V16H8.41943Z",
                fill: "#A2B1C6",
              },
            }),
            i("path", {
              attrs: {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M2.41943 16L2.41943 10H4.41943V16H2.41943Z",
                fill: "#A2B1C6",
              },
            }),
            i("path", {
              attrs: {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M11.4194 16V7H13.4194V16H11.4194Z",
                fill: "#A2B1C6",
              },
            }),
            i("path", {
              attrs: {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M14.4194 16V8H16.4194V16H14.4194Z",
                fill: "#A2B1C6",
              },
            }),
            i("path", {
              attrs: {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M7.41943 12V16H5.41943V12H7.41943Z",
                fill: "#A2B1C6",
              },
            }),
            i("path", {
              attrs: {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M12.4332 1.80676L16.6265 6.00001L15.9194 6.70712L12.4055 3.19326L5.93169 9.1691L1.71436\n      5.55424L2.36515 4.79499L5.90707 7.83092L12.4332 1.80676Z",
                fill: "#A2B1C6",
              },
            }),
          ]
        );
      },
      ga = [],
      ha = { name: "ChartIcon" },
      ma = ha,
      Ia = Object(r["a"])(ma, pa, ga, !1, null, null, null),
      Na = Ia.exports,
      fa = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "svg",
          {
            attrs: {
              width: "18",
              height: "18",
              viewBox: "0 0 18 18",
              fill: "none",
            },
          },
          [
            i("path", {
              attrs: {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M15.7661 5.13901L18.3407 9.43008H16.5161V12.8467C16.5161 13.7957 16.2783 14.6451 15.6714\n    15.2521C15.0645 15.859 14.215 16.0967 13.2661 16.0967H9.84942V17.9214L5.55835\n    15.3467L9.84942 12.7721V14.5967H13.2661C13.9838 14.5967 14.3844 14.4178 14.6108\n    14.1914C14.8372 13.965 15.0161 13.5645 15.0161 12.8467V9.43008H13.1914L15.7661 5.13901Z",
                fill: "#A2B1C6",
              },
            }),
            i("path", {
              attrs: { d: "M6.41943 0H18.4194V4H6.41943V0Z", fill: "#A2B1C6" },
            }),
            i("path", {
              attrs: {
                d: "M0.419434 6H4.41943V18H0.419434V6Z",
                fill: "#A2B1C6",
              },
            }),
            i("path", {
              attrs: {
                d: "M0.419434 0H4.41943V4H0.419434V0Z",
                fill: "#A2B1C6",
              },
            }),
          ]
        );
      },
      va = [],
      ja = { name: "PivotIcon" },
      Da = ja,
      ba = Object(r["a"])(Da, fa, va, !1, null, null, null),
      ya = ba.exports,
      Ca = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "svg",
          {
            attrs: {
              width: "19",
              height: "18",
              viewBox: "0 0 19 18",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
          },
          [
            i("path", {
              attrs: {
                d: "M5.1626 10.0745L7.56641 10.8831V12.2322L3.68164 10.6501V9.4812L7.56641\n      7.89917V9.2439L5.1626 10.0745ZM8.99023 13.3H7.93994L10.124 6.35229H11.1787L8.99023\n      13.3ZM14.1099 10.0613L11.7192 9.24829V7.90356L15.582 9.4856V10.6545L11.7192\n      12.2366V10.8918L14.1099 10.0613Z",
                fill: "#A2B1C6",
              },
            }),
            i("path", {
              attrs: {
                d: "M2.17041 0.0637207H16.2185V1.56372H2.17041V9.30354H0.67041V1.56372C0.67041 0.73872\n    1.34541 0.0637207 2.17041 0.0637207Z",
                fill: "#A2B1C6",
              },
            }),
            i("path", {
              attrs: {
                d: "M17.1704 0.0637207H15.3052V1.56372H17.1704V9.84163H18.6704V1.56372C18.6704 0.73872\n    17.9954 0.0637207 17.1704 0.0637207Z",
                fill: "#A2B1C6",
              },
            }),
            i("path", {
              attrs: {
                d: "M2.17041 17.1098H15.8754V15.6098H2.17041V8.78486H0.67041V15.6098C0.67041 16.4348\n    1.34541 17.1098 2.17041 17.1098Z",
                fill: "#A2B1C6",
              },
            }),
            i("path", {
              attrs: {
                d: "M17.1704 17.1098H15.3052V15.6098H17.1704V8.55939H18.6704V15.6098C18.6704 16.4348\n    17.9954 17.1098 17.1704 17.1098Z",
                fill: "#A2B1C6",
              },
            }),
            i("path", {
              attrs: {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M18.1197 4.13787H1.76172V3.03787H18.1197V4.13787Z",
                fill: "#A2B1C6",
              },
            }),
          ]
        );
      },
      wa = [],
      za = { name: "HtmlIcon" },
      Ta = za,
      Oa = Object(r["a"])(Ta, Ca, wa, !1, null, null, null),
      xa = Oa.exports,
      La = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "svg",
          {
            attrs: {
              width: "19",
              height: "18",
              viewBox: "0 0 19 18",
              fill: "none",
            },
          },
          [
            i("path", {
              attrs: {
                d: "M4.28369 13.9966C4.28369 13.7711 4.20312 13.5953 4.04199 13.4693C3.88379 13.3433 3.604\n      13.213 3.20264 13.0782C2.80127 12.9434 2.47314 12.813 2.21826 12.6871C1.38916 12.2798\n      0.974609 11.7203 0.974609 11.0084C0.974609 10.6539 1.07715 10.3419 1.28223\n      10.0723C1.49023 9.79987 1.7832 9.58893 2.16113 9.43951C2.53906 9.28717 2.96387 9.211\n      3.43555 9.211C3.89551 9.211 4.30713 9.29303 4.67041 9.45709C5.03662 9.62115 5.3208\n      9.85553 5.52295 10.1602C5.7251 10.462 5.82617 10.8077 5.82617 11.1973H4.28809C4.28809\n      10.9366 4.20752 10.7344 4.04639 10.5909C3.88818 10.4473 3.67285 10.3755 3.40039\n      10.3755C3.125 10.3755 2.90674 10.4371 2.74561 10.5601C2.5874 10.6802 2.5083 10.834\n      2.5083 11.0215C2.5083 11.1856 2.59619 11.335 2.77197 11.4698C2.94775 11.6016 3.25684\n      11.7393 3.69922 11.8829C4.1416 12.0235 4.50488 12.1758 4.78906 12.3399C5.48047 12.7383\n      5.82617 13.2877 5.82617 13.9879C5.82617 14.5474 5.61523 14.9869 5.19336 15.3062C4.77148\n      15.6255 4.19287 15.7852 3.45752 15.7852C2.93896 15.7852 2.46875 15.6929 2.04688\n      15.5084C1.62793 15.3209 1.31152 15.066 1.09766 14.7437C0.886719 14.4185 0.78125 14.045\n      0.78125 13.6231H2.32812C2.32812 13.9659 2.41602 14.2193 2.5918 14.3834C2.77051 14.5445\n      3.05908 14.6251 3.45752 14.6251C3.7124 14.6251 3.91309 14.5709 4.05957 14.4625C4.20898\n      14.3511 4.28369 14.1959 4.28369 13.9966ZM9.1001 13.9571L10.3745 9.29889H12.0972L9.94385\n      15.6973H8.25635L6.12061 9.29889H7.83008L9.1001 13.9571ZM17.7441 14.9063C17.5068 15.17\n      17.1597 15.3824 16.7026 15.5435C16.2456 15.7047 15.7446 15.7852 15.1997 15.7852C14.3618\n      15.7852 13.6924 15.5289 13.1914 15.0162C12.6904 14.5035 12.4224 13.7901 12.3872\n      12.876L12.3828 12.3223C12.3828 11.6924 12.4941 11.1431 12.7168 10.6744C12.9395 10.2027\n      13.2573 9.84088 13.6704 9.58893C14.0864 9.33405 14.5669 9.2066 15.1118 9.2066C15.9087\n      9.2066 16.5269 9.38971 16.9663 9.75592C17.4087 10.1192 17.6665 10.6627 17.7397\n      11.3863H16.2544C16.2017 11.0289 16.0874 10.774 15.9116 10.6216C15.7358 10.4693 15.4868\n      10.3931 15.1646 10.3931C14.7778 10.3931 14.479 10.5572 14.2681 10.8853C14.0571 11.2134\n      13.9502 11.6822 13.9473 12.2916V12.6783C13.9473 13.317 14.0557 13.7974 14.2725\n      14.1197C14.4922 14.439 14.8364 14.5987 15.3052 14.5987C15.7065 14.5987 16.0054 14.5093\n      16.2017 14.3306V13.3375H15.1294V12.2784H17.7441V14.9063Z",
                fill: "#A2B1C6",
              },
            }),
            i("path", {
              attrs: {
                d: "M2.86768 0.991333H4.73292V2.49133H2.86768V7.93074H1.36768V2.49133C1.36768 1.66633\n      2.04268 0.991333 2.86768 0.991333Z",
                fill: "#A2B1C6",
              },
            }),
            i("path", {
              attrs: {
                d: "M15.7512 0.991333H13.886V2.49133H15.7512V7.93074H17.2512V2.49133C17.2512 1.66633 16.5762\n      0.991333 15.7512 0.991333Z",
                fill: "#A2B1C6",
              },
            }),
            i("path", {
              attrs: {
                d: "M9.36466 -1.76931e-05L13.0541 3.83972L10.8272 3.79527L10.7679 6.76452L7.79865\n      6.70526L7.85791 3.736L5.52492 3.68944L9.36466 -1.76931e-05Z",
                fill: "#A2B1C6",
              },
            }),
          ]
        );
      },
      Aa = [],
      ka = { name: "ExportToSvgIcon" },
      Sa = ka,
      Ea = Object(r["a"])(Sa, La, Aa, !1, null, null, null),
      Qa = Ea.exports,
      Ua = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "svg",
          {
            attrs: {
              width: "18",
              height: "18",
              viewBox: "0 0 18 18",
              fill: "none",
            },
          },
          [
            i("path", {
              attrs: {
                d: "M9 5.51953C6.57686 5.51953 4.60547 7.49092 4.60547 9.91406C4.60547 12.3372 6.57686\n      14.3086 9 14.3086C11.4231 14.3086 13.3945 12.3372 13.3945 9.91406C13.3945 7.49092 11.4231\n      5.51953 9 5.51953ZM9 12.9023C7.35226 12.9023 6.01172 11.5618 6.01172 9.91406C6.01172\n      8.26632 7.35226 6.92578 9 6.92578C10.6477 6.92578 11.9883 8.26632 11.9883\n      9.91406C11.9883 11.5618 10.6477 12.9023 9 12.9023Z",
                fill: "#A2B1C6",
              },
            }),
            i("path", {
              attrs: {
                d: "M15.8906 3.41016H13.304C13.2221 3.41016 13.1483 3.36547 13.1104 3.29319L12.3948\n      1.78945C12.3928 1.78534 12.3908 1.78126 12.3887 1.77718C12.1117 1.22312 11.5548 0.878906\n      10.9353 0.878906H7.11478C6.49529 0.878906 5.93835 1.22312 5.66135 1.77722C5.65928 1.7813\n      5.65731 1.78538 5.65534 1.78949L4.9397 3.2933C4.90173 3.36547 4.82797 3.41016 4.74609\n      3.41016H2.10938C0.946266 3.41016 0 4.35642 0 5.51953V15.0117C0 16.1748 0.946266 17.1211\n      2.10938 17.1211H15.8906C17.0537 17.1211 18 16.1748 18 15.0117V5.51953C18 4.35642 17.0537\n      3.41016 15.8906 3.41016ZM16.5938 15.0117C16.5938 15.3994 16.2783 15.7148 15.8906\n      15.7148H2.10938C1.72167 15.7148 1.40625 15.3994 1.40625 15.0117V5.51953C1.40625 5.13183\n      1.72167 4.81641 2.10938 4.81641H4.74609C5.36555 4.81641 5.92249 4.47223 6.19952\n      3.91816C6.2016 3.91409 6.20357 3.90997 6.20557 3.90586L6.92121 2.40205C6.95914 2.32984\n      7.0329 2.28516 7.11478 2.28516H10.9353C11.0172 2.28516 11.091 2.32984 11.1289\n      2.40202L11.8445 3.90582C11.8465 3.90994 11.8485 3.91405 11.8506 3.91813C12.1276 4.47219\n      12.6846 4.81637 13.304 4.81637H15.8906C16.2783 4.81637 16.5938 5.13179 16.5938\n      5.5195V15.0117Z",
                fill: "#A2B1C6",
              },
            }),
            i("path", {
              attrs: {
                d: "M15.1875 6.22266H13.7812V7.62891H15.1875V6.22266Z",
                fill: "#A2B1C6",
              },
            }),
          ]
        );
      },
      Ya = [],
      _a = { name: "PngIcon" },
      Za = _a,
      Va = Object(r["a"])(Za, Ua, Ya, !1, null, null, null),
      qa = Va.exports,
      Pa = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "svg",
          {
            attrs: {
              width: "18",
              height: "18",
              viewBox: "0 0 18 18",
              fill: "none",
            },
          },
          [
            i("path", {
              attrs: {
                d: "M14.1917 1.3851H12.4806V0.703125C12.4806 0.314758 12.1658 0 11.7775 0H6.246C5.85764 0\n    5.54288 0.314758 5.54288 0.703125V1.3851H3.83203C2.86276 1.3851 2.07422 2.17365 2.07422\n    3.14291V16.2422C2.07422 17.2115 2.86276 18 3.83203 18H14.1917C15.161 18 15.9495 17.2115\n    15.9495 16.2422V3.14291C15.9495 2.17365 15.1609 1.3851 14.1917 1.3851V1.3851ZM11.0744\n    1.40625V2.77034H6.94899C6.94899 2.30301 6.94899 1.91698 6.94899 1.40625H11.0744ZM14.5433\n    16.2422C14.5433 16.4361 14.3855 16.5938 14.1917 16.5938H3.83203C3.63812 16.5938 3.48047\n    16.4361 3.48047 16.2422V3.14291C3.48047 2.94914 3.63812 2.79135 3.83203\n    2.79135H5.54274V3.47346C5.54274 3.86183 5.85764 4.17659 6.24586 4.17659H11.7775C12.1657\n    4.17659 12.4806 3.86183 12.4806 3.47346V2.79135H14.1917C14.3855 2.79135 14.5433 2.94914\n    14.5433 3.14291V16.2422ZM12.2745 8.20967C12.5491 8.48433 12.5491 8.92955 12.2745\n    9.20407L8.5795 12.899C8.30498 13.1737 7.85976 13.1737 7.5851 12.899L5.74887\n    11.0628C5.47435 10.7883 5.47435 10.3431 5.74887 10.0684C6.02353 9.7939 6.46861 9.7939\n    6.74327 10.0684L8.08237 11.4075L11.2801 8.20981C11.5547 7.93515 11.9998 7.93515 12.2745\n    8.20967V8.20967Z",
                fill: "#A2B1C6",
              },
            }),
          ]
        );
      },
      Ha = [],
      Ba = { name: "ClipboardIcon" },
      $a = Ba,
      Ga = Object(r["a"])($a, Pa, Ha, !1, null, null, null),
      Ra = Ga.exports,
      Wa = i("fc26"),
      Fa = i.n(Wa),
      Ja = i("9377"),
      Xa = i.n(Ja),
      Ka = {
        copyCsv: function (e) {
          return Object(d["a"])(
            Object(u["a"])().mark(function t() {
              return Object(u["a"])().wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), navigator.clipboard.writeText(e);
                    case 2:
                      Fa.a.notifier(
                        "CSV copied to clipboard successfully",
                        "long"
                      );
                    case 3:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )();
        },
        copyImage: function (e) {
          var t = this;
          return Object(d["a"])(
            Object(u["a"])().mark(function i() {
              return Object(u["a"])().wrap(function (i) {
                while (1)
                  switch ((i.prev = i.next)) {
                    case 0:
                      if (!(e instanceof HTMLCanvasElement)) {
                        i.next = 4;
                        break;
                      }
                      return i.abrupt("return", t._copyCanvas(e));
                    case 4:
                      return i.abrupt("return", t._copyFromDataUrl(e));
                    case 5:
                    case "end":
                      return i.stop();
                  }
              }, i);
            })
          )();
        },
        _copyBlob: function (e) {
          return Object(d["a"])(
            Object(u["a"])().mark(function t() {
              return Object(u["a"])().wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        navigator.clipboard.write([
                          new ClipboardItem(Object(N["a"])({}, e.type, e)),
                        ])
                      );
                    case 2:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )();
        },
        _copyFromDataUrl: function (e) {
          var t = this;
          return Object(d["a"])(
            Object(u["a"])().mark(function i() {
              var n;
              return Object(u["a"])().wrap(function (i) {
                while (1)
                  switch ((i.prev = i.next)) {
                    case 0:
                      return (n = Xa()(e)), (i.next = 3), t._copyBlob(n);
                    case 3:
                      Fa.a.notifier(
                        "Image copied to clipboard successfully",
                        "long"
                      );
                    case 4:
                    case "end":
                      return i.stop();
                  }
              }, i);
            })
          )();
        },
        _copyCanvas: function (e) {
          var t = this;
          return Object(d["a"])(
            Object(u["a"])().mark(function i() {
              return Object(u["a"])().wrap(function (i) {
                while (1)
                  switch ((i.prev = i.next)) {
                    case 0:
                      e.toBlob(
                        (function () {
                          var e = Object(d["a"])(
                            Object(u["a"])().mark(function e(i) {
                              return Object(u["a"])().wrap(function (e) {
                                while (1)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (e.next = 2), t._copyBlob(i);
                                    case 2:
                                      Fa.a.notifier(
                                        "Image copied to clipboard successfully",
                                        "long"
                                      );
                                    case 3:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                        "image/png",
                        1
                      );
                    case 1:
                    case "end":
                      return i.stop();
                  }
              }, i);
            })
          )();
        },
      },
      es = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "modal",
          {
            attrs: {
              name: e.name,
              classes: "dialog",
              height: "auto",
              clickToClose: !1,
            },
          },
          [
            n(
              "div",
              { staticClass: "dialog-header" },
              [
                e._v(" " + e._s(e.title) + " "),
                n("close-icon", {
                  attrs: { disabled: e.loading },
                  on: {
                    click: function (t) {
                      return e.$emit("cancel");
                    },
                  },
                }),
              ],
              1
            ),
            n("div", { staticClass: "dialog-body" }, [
              e.loading
                ? n(
                    "div",
                    { staticClass: "loading-dialog-body" },
                    [
                      n("loading-indicator", {
                        staticClass: "state-icon",
                        attrs: { size: 30 },
                      }),
                      e._v(" " + e._s(e.loadingMsg) + " "),
                    ],
                    1
                  )
                : n("div", { staticClass: "loading-dialog-body" }, [
                    n("img", {
                      staticClass: "success-icon state-icon",
                      attrs: { src: i("0bf4") },
                    }),
                    e._v(" " + e._s(e.successMsg) + " "),
                  ]),
            ]),
            n("div", { staticClass: "dialog-buttons-container" }, [
              n(
                "button",
                {
                  staticClass: "secondary",
                  attrs: { disabled: e.loading },
                  on: {
                    click: function (t) {
                      return e.$emit("cancel");
                    },
                  },
                },
                [e._v(" Cancel ")]
              ),
              n(
                "button",
                {
                  staticClass: "primary",
                  attrs: { disabled: e.loading },
                  on: {
                    click: function (t) {
                      return e.$emit("action");
                    },
                  },
                },
                [e._v(" " + e._s(e.actionBtnName) + " ")]
              ),
            ]),
          ]
        );
      },
      ts = [],
      is = {
        name: "loadingDialog",
        props: {
          loadingMsg: String,
          successMsg: String,
          actionBtnName: String,
          name: String,
          title: String,
          loading: Boolean,
        },
        watch: {
          loading: function () {
            this.loading && this.$modal.show(this.name);
          },
        },
        components: { LoadingIndicator: vt, CloseIcon: ze },
        methods: {
          cancel: function () {
            this.$emit("cancel");
          },
        },
      },
      ns = is,
      as = (i("19bd"), Object(r["a"])(ns, es, ts, !1, null, "48ab6576", null)),
      ss = as.exports,
      rs = {
        name: "DataView",
        props: ["dataSource", "initOptions", "initMode"],
        components: {
          Chart: yn,
          Pivot: Ma,
          SideToolBar: $i,
          IconButton: yi,
          ChartIcon: Na,
          PivotIcon: ya,
          ExportToSvgIcon: Qa,
          PngIcon: qa,
          HtmlIcon: xa,
          ClipboardIcon: Ra,
          loadingDialog: ss,
        },
        data: function () {
          return {
            mode: this.initMode || "chart",
            importToPngEnabled: !0,
            importToSvgEnabled: !0,
            loadingImage: !1,
            copyingImage: !1,
            preparingCopy: !1,
            dataToCopy: null,
          };
        },
        computed: {
          plotlyInPivot: function () {
            return (
              "pivot" === this.mode && this.$refs.viewComponent.viewCustomChart
            );
          },
        },
        watch: {
          mode: function () {
            this.$emit("update"), (this.importToPngEnabled = !0);
          },
        },
        methods: {
          saveAsPng: function () {
            var e = this;
            return Object(d["a"])(
              Object(u["a"])().mark(function t() {
                return Object(u["a"])().wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (e.loadingImage = !0), (t.next = 3), Ct.sleep(0);
                      case 3:
                        e.$refs.viewComponent.saveAsPng(),
                          e.exportSignal("png");
                      case 5:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          getOptionsForSave: function () {
            return this.$refs.viewComponent.getOptionsForSave();
          },
          prepareCopy: function () {
            var e = this;
            return Object(d["a"])(
              Object(u["a"])().mark(function t() {
                var i, n;
                return Object(u["a"])().wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (!("ClipboardItem" in window)) {
                          t.next = 13;
                          break;
                        }
                        return (
                          (e.preparingCopy = !0),
                          e.$modal.show("prepareCopy"),
                          (i = performance.now()),
                          (t.next = 6),
                          Ct.sleep(0)
                        );
                      case 6:
                        return (
                          (t.next = 8), e.$refs.viewComponent.prepareCopy()
                        );
                      case 8:
                        (e.dataToCopy = t.sent),
                          (n = performance.now()),
                          n - i < 950
                            ? (e.$modal.hide("prepareCopy"),
                              e.copyToClipboard())
                            : (e.preparingCopy = !1),
                          (t.next = 14);
                        break;
                      case 13:
                        alert(
                          "Your browser doesn't support copying images into the clipboard. If you use Firefox you can enable it by setting dom.events.asyncClipboard.clipboardItem to true."
                        );
                      case 14:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          copyToClipboard: function () {
            var e = this;
            return Object(d["a"])(
              Object(u["a"])().mark(function t() {
                return Object(u["a"])().wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        Ka.copyImage(e.dataToCopy),
                          e.$modal.hide("prepareCopy"),
                          e.exportSignal("clipboard");
                      case 3:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          cancelCopy: function () {
            (this.dataToCopy = null), this.$modal.hide("prepareCopy");
          },
          saveAsSvg: function () {
            this.$refs.viewComponent.saveAsSvg(), this.exportSignal("svg");
          },
          saveAsHtml: function () {
            this.$refs.viewComponent.saveAsHtml(), this.exportSignal("html");
          },
          exportSignal: function (e) {
            var t = { type: e };
            ("chart" === this.mode || this.plotlyInPivot) &&
              (t.pivot = this.plotlyInPivot),
              z["a"].send(
                "chart" === this.mode || this.plotlyInPivot
                  ? "viz_plotly.export"
                  : "viz_pivot.export",
                null,
                t
              );
          },
        },
      },
      os = rs,
      cs = (i("4e61"), Object(r["a"])(os, an, sn, !1, null, "aa8fbd5e", null)),
      ls = cs.exports,
      us = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "div",
          { ref: "runResultPanel", staticClass: "run-result-panel" },
          [
            i(
              "div",
              { staticClass: "run-result-panel-content" },
              [
                i(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value:
                          null === e.result && !e.isGettingResults && !e.error,
                        expression:
                          "result === null && !isGettingResults && !error",
                      },
                    ],
                    staticClass: "table-preview result-before",
                  },
                  [e._v(" Run your query and get results here ")]
                ),
                e.isGettingResults
                  ? i(
                      "div",
                      { staticClass: "table-preview result-in-progress" },
                      [
                        i("loading-indicator", { attrs: { size: 30 } }),
                        e._v(" Fetching results... "),
                      ],
                      1
                    )
                  : e._e(),
                i(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value:
                          void 0 === e.result &&
                          !e.isGettingResults &&
                          !e.error,
                        expression:
                          "result === undefined && !isGettingResults && !error",
                      },
                    ],
                    staticClass: "table-preview result-empty",
                  },
                  [e._v(" No rows retrieved according to your query ")]
                ),
                e.error
                  ? i("logs", { attrs: { messages: [e.error] } })
                  : e._e(),
                e.result
                  ? i("sql-table", {
                      staticClass: "straight",
                      attrs: {
                        "data-set": e.result,
                        time: e.time,
                        pageSize: e.pageSize,
                      },
                    })
                  : e._e(),
              ],
              1
            ),
            i(
              "side-tool-bar",
              {
                attrs: { panel: "table" },
                on: {
                  switchTo: function (t) {
                    return e.$emit("switchTo", t);
                  },
                },
              },
              [
                i(
                  "icon-button",
                  {
                    attrs: {
                      disabled: !e.result,
                      tooltip: "Export result set to CSV file",
                      "tooltip-position": "top-left",
                    },
                    on: { click: e.exportToCsv },
                  },
                  [i("export-to-csv-icon")],
                  1
                ),
                i(
                  "icon-button",
                  {
                    attrs: {
                      disabled: !e.result,
                      tooltip: "Copy result set to clipboard",
                      "tooltip-position": "top-left",
                    },
                    on: { click: e.prepareCopy },
                  },
                  [i("clipboard-icon")],
                  1
                ),
              ],
              1
            ),
            i("loading-dialog", {
              attrs: {
                loadingMsg: "Building CSV...",
                successMsg: "CSV is ready",
                actionBtnName: "Copy",
                name: "prepareCSVCopy",
                title: "Copy to clipboard",
                loading: e.preparingCopy,
              },
              on: { action: e.copyToClipboard, cancel: e.cancelCopy },
            }),
          ],
          1
        );
      },
      ds = [],
      Ms = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "svg",
          {
            attrs: {
              width: "19",
              height: "18",
              viewBox: "0 0 19 18",
              fill: "none",
            },
          },
          [
            i("path", {
              attrs: {
                d: "M6.07959 13.5756C6.05908 14.0209 5.93896 14.415 5.71924 14.7578C5.49951 15.0976 5.19043\n      15.3613 4.79199 15.5488C4.39648 15.7363 3.94385 15.83 3.43408 15.83C2.59326 15.83\n      1.93115 15.5561 1.44775 15.0082C0.964355 14.4604 0.722656 13.687 0.722656\n      12.6879V12.3715C0.722656 11.7446 0.831055 11.1967 1.04785 10.728C1.26758 10.2563 1.58252\n      9.89301 1.99268 9.63812C2.40283 9.38031 2.87744 9.2514 3.4165 9.2514C4.19287 9.2514\n      4.81689 9.45648 5.28857 9.86664C5.76025 10.2739 6.02832 10.8364 6.09277\n      11.5541H4.55469C4.54297 11.1645 4.44482 10.8847 4.26025 10.7148C4.07568 10.5449 3.79443\n      10.4599 3.4165 10.4599C3.03271 10.4599 2.75146 10.6035 2.57275 10.8906C2.39404 11.1777\n      2.30029 11.6362 2.2915 12.2661V12.7187C2.2915 13.4013 2.37646 13.8891 2.54639\n      14.1821C2.71924 14.475 3.01514 14.6215 3.43408 14.6215C3.78857 14.6215 4.05957 14.538\n      4.24707 14.371C4.43457 14.204 4.53418 13.9389 4.5459 13.5756H6.07959ZM10.1094\n      14.0414C10.1094 13.8159 10.0288 13.6401 9.86768 13.5141C9.70947 13.3881 9.42969 13.2578\n      9.02832 13.123C8.62695 12.9882 8.29883 12.8578 8.04395 12.7319C7.21484 12.3246 6.80029\n      11.7651 6.80029 11.0532C6.80029 10.6987 6.90283 10.3867 7.10791 10.1171C7.31592 9.84467\n      7.60889 9.63373 7.98682 9.48431C8.36475 9.33197 8.78955 9.2558 9.26123 9.2558C9.72119\n      9.2558 10.1328 9.33783 10.4961 9.50189C10.8623 9.66595 11.1465 9.90033 11.3486\n      10.205C11.5508 10.5068 11.6519 10.8525 11.6519 11.2421H10.1138C10.1138 10.9814 10.0332\n      10.7792 9.87207 10.6357C9.71387 10.4921 9.49854 10.4203 9.22607 10.4203C8.95068 10.4203\n      8.73242 10.4819 8.57129 10.6049C8.41309 10.725 8.33398 10.8788 8.33398 11.0663C8.33398\n      11.2304 8.42188 11.3798 8.59766 11.5146C8.77344 11.6464 9.08252 11.7841 9.5249\n      11.9277C9.96729 12.0683 10.3306 12.2206 10.6147 12.3847C11.3062 12.7831 11.6519 13.3325\n      11.6519 14.0327C11.6519 14.5922 11.4409 15.0317 11.019 15.351C10.5972 15.6703 10.0186\n      15.83 9.2832 15.83C8.76465 15.83 8.29443 15.7377 7.87256 15.5532C7.45361 15.3657 7.13721\n      15.1108 6.92334 14.7885C6.7124 14.4633 6.60693 14.0898 6.60693 13.6679H8.15381C8.15381\n      14.0107 8.2417 14.2641 8.41748 14.4282C8.59619 14.5893 8.88477 14.6699 9.2832\n      14.6699C9.53809 14.6699 9.73877 14.6157 9.88525 14.5073C10.0347 14.3959 10.1094 14.2407\n      10.1094 14.0414ZM14.9258 14.0019L16.2002 9.34369H17.9229L15.7695 15.7421H14.082L11.9463\n      9.34369H13.6558L14.9258 14.0019Z",
                fill: "#A2B1C6",
              },
            }),
            i("path", {
              attrs: {
                d: "M3.03345 0.991333H4.89869V2.49133H3.03345V7.93074H1.53345V2.49133C1.53345 1.66633\n      2.20845 0.991333 3.03345 0.991333Z",
                fill: "#A2B1C6",
              },
            }),
            i("path", {
              attrs: {
                d: "M15.917 0.991333H14.0517V2.49133H15.917V7.93074H17.417V2.49133C17.417 1.66633 16.742\n    0.991333 15.917 0.991333Z",
                fill: "#A2B1C6",
              },
            }),
            i("path", {
              attrs: {
                d: "M9.53043 1.28245e-05L13.2199 3.83975L10.9929 3.7953L10.9337 6.76455L7.96442\n    6.70529L8.02368 3.73603L5.6907 3.68947L9.53043 1.28245e-05Z",
                fill: "#A2B1C6",
              },
            }),
          ]
        );
      },
      ps = [],
      gs = { name: "ExportToCsvIcon" },
      hs = gs,
      ms = Object(r["a"])(hs, Ms, ps, !1, null, null, null),
      Is = ms.exports,
      Ns = {
        name: "RunResult",
        props: ["result", "isGettingResults", "error", "time"],
        data: function () {
          return {
            resizeObserver: null,
            pageSize: 20,
            preparingCopy: !1,
            dataToCopy: null,
          };
        },
        components: {
          SqlTable: Mt,
          LoadingIndicator: vt,
          Logs: yt,
          SideToolBar: $i,
          ExportToCsvIcon: Is,
          IconButton: yi,
          ClipboardIcon: Ra,
          loadingDialog: ss,
        },
        mounted: function () {
          (this.resizeObserver = new ResizeObserver(this.handleResize)),
            this.resizeObserver.observe(this.$refs.runResultPanel),
            this.calculatePageSize();
        },
        beforeDestroy: function () {
          this.resizeObserver.unobserve(this.$refs.runResultPanel);
        },
        methods: {
          handleResize: function () {
            this.calculatePageSize();
          },
          calculatePageSize: function () {
            var e = this.$refs.runResultPanel,
              t = e.offsetHeight - 27 - 5 - 35;
            this.pageSize = Math.max(Math.floor(t / 35), 20);
          },
          exportToCsv: function () {
            this.result &&
              this.result.values &&
              z["a"].send(
                "resultset.export",
                this.result.values[this.result.columns[0]].length,
                { to: "csv" }
              ),
              w.exportToFile(
                je.serialize(this.result),
                "result_set.csv",
                "text/csv"
              );
          },
          prepareCopy: function () {
            var e = this;
            return Object(d["a"])(
              Object(u["a"])().mark(function t() {
                var i, n;
                return Object(u["a"])().wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          (e.result &&
                            e.result.values &&
                            z["a"].send(
                              "resultset.export",
                              e.result.values[e.result.columns[0]].length,
                              { to: "clipboard" }
                            ),
                          !("ClipboardItem" in window))
                        ) {
                          t.next = 12;
                          break;
                        }
                        return (
                          (e.preparingCopy = !0),
                          e.$modal.show("prepareCSVCopy"),
                          (i = performance.now()),
                          (t.next = 7),
                          Ct.sleep(0)
                        );
                      case 7:
                        (e.dataToCopy = je.serialize(e.result)),
                          (n = performance.now()),
                          n - i < 950
                            ? (e.$modal.hide("prepareCSVCopy"),
                              e.copyToClipboard())
                            : (e.preparingCopy = !1),
                          (t.next = 13);
                        break;
                      case 12:
                        alert(
                          "Your browser doesn't support copying into the clipboard. If you use Firefox you can enable it by setting dom.events.asyncClipboard.clipboardItem to true."
                        );
                      case 13:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          copyToClipboard: function () {
            Ka.copyCsv(this.dataToCopy), this.$modal.hide("prepareCSVCopy");
          },
          cancelCopy: function () {
            (this.dataToCopy = null), this.$modal.hide("prepareCSVCopy");
          },
        },
      },
      fs = Ns,
      vs = (i("3357"), Object(r["a"])(fs, us, ds, !1, null, "549166f6", null)),
      js = vs.exports,
      Ds = i("b0cc"),
      bs = {
        name: "Tab",
        props: { tab: Object },
        components: {
          SqlEditor: nn,
          DataView: ls,
          RunResult: js,
          Splitpanes: b,
          Teleport: Ds["a"],
        },
        data: function () {
          return {
            topPaneSize: this.tab.maximize
              ? "above" === this.tab.layout[this.tab.maximize]
                ? 100
                : 0
              : 50,
          };
        },
        computed: {
          isActive: function () {
            return this.tab.id === this.$store.state.currentTabId;
          },
        },
        watch: {
          isActive: {
            immediate: !0,
            handler: function () {
              var e = this;
              return Object(d["a"])(
                Object(u["a"])().mark(function t() {
                  return Object(u["a"])().wrap(function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (!e.isActive) {
                            t.next = 4;
                            break;
                          }
                          return (t.next = 3), e.$nextTick();
                        case 3:
                          e.$refs.sqlEditor.focus();
                        case 4:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )();
            },
          },
          "tab.query": function () {
            this.$store.commit("updateTab", {
              tab: this.tab,
              newValues: { isSaved: !1 },
            });
          },
        },
        mounted: function () {
          this.tab.dataView = this.$refs.dataView;
        },
        methods: {
          onSwitchView: function (e, t) {
            var i = this.tab.layout[e];
            (this.tab.layout[e] = this.tab.layout[t]),
              (this.tab.layout[t] = i),
              z["a"].send("inquiry.panel", null, { panel: t });
          },
          onDataViewUpdate: function () {
            this.$store.commit("updateTab", {
              tab: this.tab,
              newValues: { isSaved: !1 },
            });
          },
        },
      },
      ys = bs,
      Cs = (i("5d93"), Object(r["a"])(ys, Xt, Kt, !1, null, "7b82b2c2", null)),
      ws = Cs.exports,
      zs = {
        components: { Tab: ws, CloseIcon: ze },
        data: function () {
          return { closingTab: null };
        },
        computed: {
          tabs: function () {
            return this.$store.state.tabs;
          },
          selectedTabId: function () {
            return this.$store.state.currentTabId;
          },
        },
        created: function () {
          window.addEventListener("beforeunload", this.leavingSqliteviz);
        },
        methods: {
          leavingSqliteviz: function (e) {
            this.tabs.some(function (e) {
              return !e.isSaved;
            }) && (e.preventDefault(), (e.returnValue = ""));
          },
          selectTab: function (e) {
            this.$store.commit("setCurrentTabId", e);
          },
          beforeCloseTab: function (e) {
            (this.closingTab = e),
              e.isSaved ? this.closeTab(e) : this.$modal.show("close-warn");
          },
          closeTab: function (e) {
            this.$modal.hide("close-warn"), this.$store.commit("deleteTab", e);
          },
          saveAndClose: function (e) {
            var t = this;
            this.$root.$on("inquirySaved", function () {
              t.closeTab(e), t.$root.$off("inquirySaved");
            }),
              this.selectTab(e.id),
              this.$modal.hide("close-warn"),
              this.$nextTick(function () {
                t.$root.$emit("saveInquiry");
              });
          },
        },
      },
      Ts = zs,
      Os = (i("64b6"), Object(r["a"])(Ts, Ft, Jt, !1, null, null, null)),
      xs = Os.exports,
      Ls = {
        name: "Workspace",
        components: { Schema: Wt, Splitpanes: b, Tabs: xs },
        data: function () {
          return {
            schemaWidth: "1" === this.$route.query.hide_schema ? 0 : 20,
          };
        },
        beforeCreate: function () {
          var e = this;
          return Object(d["a"])(
            Object(u["a"])().mark(function t() {
              var i, n, a;
              return Object(u["a"])().wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((i = e.$store.state.db.schema),
                        (i && 0 !== i.length) ||
                          0 !== e.$store.state.tabs.length)
                      ) {
                        t.next = 8;
                        break;
                      }
                      return (
                        (n = [
                          "/*",
                          " * Your database is empty. In order to start building charts",
                          " * you should create a table and insert data into it.",
                          " */",
                          "CREATE TABLE house",
                          "(",
                          "  name TEXT,",
                          "  points INTEGER",
                          ");",
                          "INSERT INTO house VALUES",
                          "('Gryffindor', 100),",
                          "('Hufflepuff', 90),",
                          "('Ravenclaw', 95),",
                          "('Slytherin', 80);",
                        ].join("\n")),
                        (t.next = 5),
                        e.$store.dispatch("addTab", { query: n })
                      );
                    case 5:
                      (a = t.sent),
                        e.$store.commit("setCurrentTabId", a),
                        z["a"].send("inquiry.create", null, { auto: !0 });
                    case 8:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )();
        },
      },
      As = Ls,
      ks = (i("3011"), Object(r["a"])(As, p, g, !1, null, "74ea7f61", null)),
      Ss = ks.exports,
      Es = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { attrs: { id: "my-inquiries-container" } },
          [
            0 === e.allInquiries.length
              ? n("div", { attrs: { id: "start-guide" } }, [
                  e._v(" You don't have saved inquiries so far. "),
                  n(
                    "span",
                    {
                      staticClass: "link",
                      on: {
                        click: function (t) {
                          return e.$root.$emit("createNewInquiry");
                        },
                      },
                    },
                    [e._v("Create")]
                  ),
                  e._v(" the one from scratch or "),
                  n(
                    "span",
                    { staticClass: "link", on: { click: e.importInquiries } },
                    [e._v("import")]
                  ),
                  e._v(" from a file. "),
                ])
              : e._e(),
            e.$store.state.loadingPredefinedInquiries
              ? n(
                  "div",
                  { attrs: { id: "loading-predefined-status" } },
                  [
                    n("loading-indicator"),
                    e._v(" Loading predefined inquiries... "),
                  ],
                  1
                )
              : e._e(),
            n(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: e.allInquiries.length > 0,
                    expression: "allInquiries.length > 0",
                  },
                ],
                ref: "my-inquiries-content",
                attrs: { id: "my-inquiries-content" },
              },
              [
                n("div", { attrs: { id: "my-inquiries-toolbar" } }, [
                  n("div", { attrs: { id: "toolbar-buttons" } }, [
                    n(
                      "button",
                      {
                        staticClass: "toolbar",
                        attrs: { id: "toolbar-btns-import" },
                        on: { click: e.importInquiries },
                      },
                      [e._v(" Import ")]
                    ),
                    n(
                      "button",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: e.selectedInquiriesCount > 0,
                            expression: "selectedInquiriesCount > 0",
                          },
                        ],
                        staticClass: "toolbar",
                        attrs: { id: "toolbar-btns-export" },
                        on: {
                          click: function (t) {
                            return e.exportSelectedInquiries();
                          },
                        },
                      },
                      [e._v(" Export ")]
                    ),
                    n(
                      "button",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: e.selectedNotPredefinedCount > 0,
                            expression: "selectedNotPredefinedCount > 0",
                          },
                        ],
                        staticClass: "toolbar",
                        attrs: { id: "toolbar-btns-delete" },
                        on: {
                          click: function (t) {
                            return e.showDeleteDialog(e.selectedInquiriesIds);
                          },
                        },
                      },
                      [e._v(" Delete ")]
                    ),
                  ]),
                  n(
                    "div",
                    { attrs: { id: "toolbar-search" } },
                    [
                      n("text-field", {
                        attrs: {
                          placeholder: "Search inquiry by name",
                          width: "300px",
                        },
                        model: {
                          value: e.filter,
                          callback: function (t) {
                            e.filter = t;
                          },
                          expression: "filter",
                        },
                      }),
                    ],
                    1
                  ),
                ]),
                n(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: 0 === e.showedInquiries.length,
                        expression: "showedInquiries.length === 0",
                      },
                    ],
                    attrs: { id: "inquiries-not-found" },
                  },
                  [e._v(" No inquiries found ")]
                ),
                n(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: e.showedInquiries.length > 0,
                        expression: "showedInquiries.length > 0",
                      },
                    ],
                    staticClass: "rounded-bg",
                  },
                  [
                    n("div", { staticClass: "header-container" }, [
                      n("div", [
                        n(
                          "div",
                          { ref: "name-th", staticClass: "fixed-header" },
                          [
                            n("check-box", {
                              ref: "mainCheckBox",
                              attrs: { theme: "light" },
                              on: { click: e.toggleSelectAll },
                            }),
                            n("div", { staticClass: "name-th" }, [
                              e._v("Name"),
                            ]),
                          ],
                          1
                        ),
                        n("div", { staticClass: "fixed-header" }, [
                          e._v(" Created at "),
                        ]),
                      ]),
                    ]),
                    n(
                      "div",
                      {
                        staticClass: "table-container",
                        style: { "max-height": e.maxTableHeight + "px" },
                      },
                      [
                        n(
                          "table",
                          { ref: "table", staticClass: "sqliteviz-table" },
                          [
                            n(
                              "tbody",
                              e._l(e.showedInquiries, function (t, i) {
                                return n(
                                  "tr",
                                  {
                                    key: t.id,
                                    on: {
                                      click: function (t) {
                                        return e.openInquiry(i);
                                      },
                                    },
                                  },
                                  [
                                    n("td", { ref: "name-td", refInFor: !0 }, [
                                      n(
                                        "div",
                                        { staticClass: "cell-data" },
                                        [
                                          n("check-box", {
                                            ref: "rowCheckBox",
                                            refInFor: !0,
                                            attrs: {
                                              init:
                                                e.selectAll ||
                                                e.selectedInquiriesIds.has(
                                                  t.id
                                                ),
                                            },
                                            on: {
                                              click: function (i) {
                                                return e.toggleRow(i, t.id);
                                              },
                                            },
                                          }),
                                          n("div", { staticClass: "name" }, [
                                            e._v(e._s(t.name)),
                                          ]),
                                          t.isPredefined
                                            ? n(
                                                "div",
                                                {
                                                  staticClass: "badge",
                                                  on: {
                                                    mouseenter: e.showTooltip,
                                                    mouseleave: e.hideTooltip,
                                                  },
                                                },
                                                [
                                                  e._v(" Predefined "),
                                                  n(
                                                    "span",
                                                    {
                                                      ref: "tooltip",
                                                      refInFor: !0,
                                                      staticClass:
                                                        "icon-tooltip",
                                                      style: e.tooltipStyle,
                                                    },
                                                    [
                                                      e._v(
                                                        " Predefined inquiries come from the server. These inquiries can’t be deleted or renamed. "
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              )
                                            : e._e(),
                                        ],
                                        1
                                      ),
                                    ]),
                                    n("td", [
                                      n(
                                        "div",
                                        { staticClass: "second-column" },
                                        [
                                          n(
                                            "div",
                                            { staticClass: "date-container" },
                                            [
                                              e._v(
                                                e._s(e._f("date")(t.createdAt))
                                              ),
                                            ]
                                          ),
                                          n(
                                            "div",
                                            { staticClass: "icons-container" },
                                            [
                                              t.isPredefined
                                                ? e._e()
                                                : n("rename-icon", {
                                                    on: {
                                                      click: function (i) {
                                                        return e.showRenameDialog(
                                                          t.id
                                                        );
                                                      },
                                                    },
                                                  }),
                                              n("copy-icon", {
                                                on: {
                                                  click: function (t) {
                                                    return e.duplicateInquiry(
                                                      i
                                                    );
                                                  },
                                                },
                                              }),
                                              n("export-icon", {
                                                attrs: {
                                                  tooltip:
                                                    "Export inquiry to file",
                                                  "tooltip-position":
                                                    "top-left",
                                                },
                                                on: {
                                                  click: function (i) {
                                                    return e.exportToFile(
                                                      [t],
                                                      t.name + ".json"
                                                    );
                                                  },
                                                },
                                              }),
                                              t.isPredefined
                                                ? e._e()
                                                : n("delete-icon", {
                                                    on: {
                                                      click: function (i) {
                                                        e.showDeleteDialog(
                                                          new Set().add(t.id)
                                                        );
                                                      },
                                                    },
                                                  }),
                                            ],
                                            1
                                          ),
                                        ]
                                      ),
                                    ]),
                                  ]
                                );
                              }),
                              0
                            ),
                          ]
                        ),
                      ]
                    ),
                  ]
                ),
              ]
            ),
            n(
              "modal",
              { attrs: { name: "rename", classes: "dialog", height: "auto" } },
              [
                n(
                  "div",
                  { staticClass: "dialog-header" },
                  [
                    e._v(" Rename inquiry "),
                    n("close-icon", {
                      on: {
                        click: function (t) {
                          return e.$modal.hide("rename");
                        },
                      },
                    }),
                  ],
                  1
                ),
                n(
                  "div",
                  { staticClass: "dialog-body" },
                  [
                    n("text-field", {
                      attrs: {
                        label: "New inquiry name",
                        "error-msg": e.errorMsg,
                        width: "100%",
                      },
                      model: {
                        value: e.newName,
                        callback: function (t) {
                          e.newName = t;
                        },
                        expression: "newName",
                      },
                    }),
                  ],
                  1
                ),
                n("div", { staticClass: "dialog-buttons-container" }, [
                  n(
                    "button",
                    {
                      staticClass: "secondary",
                      on: {
                        click: function (t) {
                          return e.$modal.hide("rename");
                        },
                      },
                    },
                    [e._v("Cancel")]
                  ),
                  n(
                    "button",
                    { staticClass: "primary", on: { click: e.renameInquiry } },
                    [e._v("Rename")]
                  ),
                ]),
              ]
            ),
            n(
              "modal",
              { attrs: { name: "delete", classes: "dialog", height: "auto" } },
              [
                n(
                  "div",
                  { staticClass: "dialog-header" },
                  [
                    e._v(
                      " Delete " +
                        e._s(e.deleteGroup ? "inquiries" : "inquiry") +
                        " "
                    ),
                    n("close-icon", {
                      on: {
                        click: function (t) {
                          return e.$modal.hide("delete");
                        },
                      },
                    }),
                  ],
                  1
                ),
                n("div", { staticClass: "dialog-body" }, [
                  e._v(" " + e._s(e.deleteDialogMsg) + " "),
                  n(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            e.selectedInquiriesCount >
                            e.selectedNotPredefinedCount,
                          expression:
                            "selectedInquiriesCount > selectedNotPredefinedCount",
                        },
                      ],
                      attrs: { id: "note" },
                    },
                    [
                      n("img", { attrs: { src: i("db39") } }),
                      e._v(
                        " Note: Predefined inquiries you've selected won't be deleted "
                      ),
                    ]
                  ),
                ]),
                n("div", { staticClass: "dialog-buttons-container" }, [
                  n(
                    "button",
                    {
                      staticClass: "secondary",
                      on: {
                        click: function (t) {
                          return e.$modal.hide("delete");
                        },
                      },
                    },
                    [e._v("Cancel")]
                  ),
                  n(
                    "button",
                    { staticClass: "primary", on: { click: e.deleteInquiry } },
                    [e._v("Delete")]
                  ),
                ]),
              ]
            ),
          ],
          1
        );
      },
      Qs = [],
      Us = i("2909"),
      Ys =
        (i("6062"),
        i("c740"),
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("span", [
            i(
              "svg",
              {
                staticClass: "icon",
                attrs: {
                  width: "18",
                  height: "18",
                  viewBox: "0 0 18 18",
                  fill: "none",
                },
                on: {
                  click: function (t) {
                    return (
                      t.stopPropagation(), e.onClick.apply(null, arguments)
                    );
                  },
                  mouseenter: e.showTooltip,
                  mouseleave: e.hideTooltip,
                },
              },
              [
                i("path", {
                  attrs: {
                    d: "M10.545 6.75L11.25 7.455L4.44 14.25H3.75V13.56L10.545 6.75ZM13.245 2.25C13.0575 2.25\n      12.8625 2.325 12.72 2.4675L11.3475 3.84L14.16 6.6525L15.5325 5.28C15.825 4.9875 15.825\n      4.5 15.5325 4.2225L13.7775 2.4675C13.6275 2.3175 13.44 2.25 13.245 2.25ZM10.545\n      4.6425L2.25 12.9375V15.75H5.0625L13.3575 7.455L10.545 4.6425Z",
                    fill: "#A2B1C6",
                  },
                }),
              ]
            ),
            i(
              "span",
              {
                ref: "tooltip",
                staticClass: "icon-tooltip",
                style: e.tooltipStyle,
              },
              [e._v(" Rename inquiry ")]
            ),
          ]);
        }),
      _s = [],
      Zs = {
        name: "RenameIcon",
        mixins: [H],
        methods: {
          onClick: function () {
            this.hideTooltip(), this.$emit("click");
          },
        },
      },
      Vs = Zs,
      qs = (i("56ed"), Object(r["a"])(Vs, Ys, _s, !1, null, "3add66aa", null)),
      Ps = qs.exports,
      Hs = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i("span", [
          i(
            "svg",
            {
              staticClass: "icon",
              attrs: {
                width: "18",
                height: "18",
                viewBox: "0 0 18 18",
                fill: "none",
              },
              on: {
                click: function (t) {
                  return t.stopPropagation(), e.onClick.apply(null, arguments);
                },
                mouseenter: e.showTooltip,
                mouseleave: e.hideTooltip,
              },
            },
            [
              i("path", {
                attrs: {
                  d: "M14.25 15.75H6V5.25H14.25V15.75ZM14.25 3.75H6C5.60218 3.75 5.22064 3.90804 4.93934\n      4.18934C4.65804 4.47064 4.5 4.85218 4.5 5.25V15.75C4.5 16.1478 4.65804 16.5294 4.93934\n      16.8107C5.22064 17.092 5.60218 17.25 6 17.25H14.25C14.6478 17.25 15.0294 17.092 15.3107\n      16.8107C15.592 16.5294 15.75 16.1478 15.75 15.75V5.25C15.75 4.85218 15.592 4.47064\n      15.3107 4.18934C15.0294 3.90804 14.6478 3.75 14.25 3.75ZM12 0.75H3C2.60218 0.75 2.22064\n      0.908035 1.93934 1.18934C1.65804 1.47064 1.5 1.85218 1.5 2.25V12.75H3V2.25H12V0.75Z",
                  fill: "#A2B1C6",
                },
              }),
            ]
          ),
          i(
            "span",
            {
              ref: "tooltip",
              staticClass: "icon-tooltip",
              style: e.tooltipStyle,
            },
            [e._v(" Duplicate inquiry ")]
          ),
        ]);
      },
      Bs = [],
      $s = {
        name: "CopyIcon",
        mixins: [H],
        methods: {
          onClick: function () {
            this.hideTooltip(), this.$emit("click");
          },
        },
      },
      Gs = $s,
      Rs = (i("a9b1"), Object(r["a"])(Gs, Hs, Bs, !1, null, "b9c23446", null)),
      Ws = Rs.exports,
      Fs = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i("span", [
          i(
            "svg",
            {
              staticClass: "icon",
              attrs: {
                width: "18",
                height: "18",
                viewBox: "0 0 18 18",
                fill: "none",
              },
              on: {
                click: function (t) {
                  return t.stopPropagation(), e.onClick.apply(null, arguments);
                },
                mouseenter: function (t) {
                  return e.showTooltip(t, "top-left");
                },
                mouseleave: e.hideTooltip,
              },
            },
            [
              i("path", {
                attrs: {
                  d: "M6.75 2.25V3H3V4.5H3.75V14.25C3.75 14.6478 3.90804 15.0294 4.18934 15.3107C4.47064\n      15.592 4.85218 15.75 5.25 15.75H12.75C13.1478 15.75 13.5294 15.592 13.8107\n      15.3107C14.092 15.0294 14.25 14.6478 14.25 14.25V4.5H15V3H11.25V2.25H6.75ZM5.25\n      4.5H12.75V14.25H5.25V4.5ZM6.75 6V12.75H8.25V6H6.75ZM9.75 6V12.75H11.25V6H9.75Z",
                  fill: "#A2B1C6",
                },
              }),
            ]
          ),
          i(
            "span",
            {
              ref: "tooltip",
              staticClass: "icon-tooltip",
              style: e.tooltipStyle,
            },
            [e._v(" Delete inquiry ")]
          ),
        ]);
      },
      Js = [],
      Xs = {
        name: "DeleteIcon",
        mixins: [H],
        methods: {
          onClick: function () {
            this.hideTooltip(), this.$emit("click");
          },
        },
      },
      Ks = Xs,
      er = (i("70b3"), Object(r["a"])(Ks, Fs, Js, !1, null, "7580ebaf", null)),
      tr = er.exports,
      ir = {
        _migrate: function (e, t) {
          if (1 === e)
            return (
              t.forEach(function (e) {
                (e.viewType = "chart"),
                  (e.viewOptions = e.chart),
                  delete e.chart;
              }),
              t
            );
        },
      },
      nr = ir._migrate,
      ar = {
        version: 2,
        getStoredInquiries: function () {
          var e = JSON.parse(localStorage.getItem("myInquiries"));
          if (!e) {
            var t = localStorage.getItem("myQueries");
            return t
              ? ((e = nr(1, JSON.parse(t))), this.updateStorage(e), e)
              : [];
          }
          return (e && e.inquiries) || [];
        },
        duplicateInquiry: function (e) {
          var t = JSON.parse(JSON.stringify(e));
          return (
            (t.name = t.name + " Copy"),
            (t.id = Object(oi["a"])()),
            (t.createdAt = new Date()),
            delete t.isPredefined,
            t
          );
        },
        isTabNeedName: function (e) {
          return e.isPredefined || !e.name;
        },
        save: function (e, t) {
          var i = {
              id: e.isPredefined ? Object(oi["a"])() : e.id,
              query: e.query,
              viewType: e.dataView.mode,
              viewOptions: e.dataView.getOptionsForSave(),
              name: t || e.name,
            },
            n = this.getStoredInquiries();
          if (t) i.createdAt = new Date();
          else {
            var a = n.findIndex(function (t) {
              return t.id === e.id;
            });
            i.createdAt = n[a].createdAt;
          }
          return t ? n.push(i) : (n[a] = i), this.updateStorage(n), i;
        },
        updateStorage: function (e) {
          localStorage.setItem(
            "myInquiries",
            JSON.stringify({ version: this.version, inquiries: e })
          );
        },
        serialiseInquiries: function (e) {
          var t = JSON.parse(JSON.stringify(e));
          return (
            t.forEach(function (e) {
              return delete e.isPredefined;
            }),
            JSON.stringify({ version: this.version, inquiries: t }, null, 4)
          );
        },
        deserialiseInquiries: function (e) {
          var t = this,
            i = JSON.parse(e),
            n = [];
          return (
            i.version
              ? (n = i.inquiries || [])
              : ((n = Array.isArray(i) ? i : [i]), (n = nr(1, n))),
            n.forEach(function (e) {
              var i = t.getStoredInquiries().map(function (e) {
                return e.id;
              });
              i.includes(e.id) && (e.id = Object(oi["a"])());
            }),
            n
          );
        },
        importInquiries: function () {
          var e = this;
          return w.importFile().then(function (t) {
            var i = e.deserialiseInquiries(t);
            return z["a"].send("inquiry.import", i.length), i;
          });
        },
        export: function (e, t) {
          var i = this.serialiseInquiries(e);
          w.exportToFile(i, t), z["a"].send("inquiry.export", e.length);
        },
        readPredefinedInquiries: function () {
          return Object(d["a"])(
            Object(u["a"])().mark(function e() {
              var t, i;
              return Object(u["a"])().wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), w.readFile("./inquiries.json");
                    case 2:
                      return (t = e.sent), (e.next = 5), t.json();
                    case 5:
                      if (((i = e.sent), i.version)) {
                        e.next = 10;
                        break;
                      }
                      return e.abrupt("return", i.length > 0 ? nr(1, i) : []);
                    case 10:
                      return e.abrupt("return", i.inquiries);
                    case 11:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )();
        },
      },
      sr = {
        name: "Inquiries",
        components: {
          RenameIcon: Ps,
          CopyIcon: Ws,
          ExportIcon: _t,
          DeleteIcon: tr,
          CloseIcon: ze,
          TextField: X,
          CheckBox: Xe,
          LoadingIndicator: vt,
        },
        mixins: [H],
        data: function () {
          return {
            inquiries: [],
            filter: null,
            newName: null,
            processedInquiryId: null,
            errorMsg: null,
            selectedInquiriesIds: new Set(),
            selectedInquiriesCount: 0,
            selectedNotPredefinedCount: 0,
            selectAll: !1,
            deleteGroup: !1,
            resizeObserver: null,
            maxTableHeight: 0,
          };
        },
        computed: {
          predefinedInquiries: function () {
            return this.$store.state.predefinedInquiries.map(function (e) {
              return (e.isPredefined = !0), e;
            });
          },
          predefinedInquiriesIds: function () {
            return new Set(
              this.predefinedInquiries.map(function (e) {
                return e.id;
              })
            );
          },
          showedInquiries: function () {
            var e = this,
              t = this.allInquiries;
            return (
              this.filter &&
                (t = t.filter(function (t) {
                  return (
                    t.name.toUpperCase().indexOf(e.filter.toUpperCase()) >= 0
                  );
                })),
              t
            );
          },
          allInquiries: function () {
            return this.predefinedInquiries.concat(this.inquiries);
          },
          processedInquiryIndex: function () {
            var e = this;
            return this.inquiries.findIndex(function (t) {
              return t.id === e.processedInquiryId;
            });
          },
          deleteDialogMsg: function () {
            if (
              !this.deleteGroup &&
              (null === this.processedInquiryIndex ||
                this.processedInquiryIndex < 0 ||
                this.processedInquiryIndex > this.inquiries.length)
            )
              return "";
            var e = this.deleteGroup
              ? ""
                  .concat(this.selectedNotPredefinedCount, " ")
                  .concat(
                    this.selectedNotPredefinedCount > 1
                      ? "inquiries"
                      : "inquiry"
                  )
              : '"'.concat(
                  this.inquiries[this.processedInquiryIndex].name,
                  '"'
                );
            return "Are you sure you want to delete ".concat(e, "?");
          },
        },
        watch: {
          showedInquiries: function () {
            var e = this;
            (this.selectedInquiriesIds = new Set(
              this.showedInquiries
                .filter(function (t) {
                  return e.selectedInquiriesIds.has(t.id);
                })
                .map(function (e) {
                  return e.id;
                })
            )),
              (this.selectedInquiriesCount = this.selectedInquiriesIds.size),
              (this.selectedNotPredefinedCount = Object(Us["a"])(
                this.selectedInquiriesIds
              ).filter(function (t) {
                return !e.predefinedInquiriesIds.has(t);
              }).length),
              this.selectedInquiriesIds.size < this.showedInquiries.length &&
                ((this.$refs.mainCheckBox.checked = !1), (this.selectAll = !1));
          },
        },
        created: function () {
          var e = this;
          return Object(d["a"])(
            Object(u["a"])().mark(function t() {
              var i, n, a;
              return Object(u["a"])().wrap(
                function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          ((e.inquiries = ar.getStoredInquiries()),
                          (i = e.$store.state.loadingPredefinedInquiries),
                          (n = e.$store.state.predefinedInquiriesLoaded),
                          n || i)
                        ) {
                          t.next = 17;
                          break;
                        }
                        return (
                          (t.prev = 4),
                          e.$store.commit("setLoadingPredefinedInquiries", !0),
                          (t.next = 8),
                          ar.readPredefinedInquiries()
                        );
                      case 8:
                        (a = t.sent),
                          e.$store.commit("updatePredefinedInquiries", a),
                          e.$store.commit("setPredefinedInquiriesLoaded", !0),
                          (t.next = 16);
                        break;
                      case 13:
                        (t.prev = 13),
                          (t.t0 = t["catch"](4)),
                          console.error(t.t0);
                      case 16:
                        e.$store.commit("setLoadingPredefinedInquiries", !1);
                      case 17:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[4, 13]]
              );
            })
          )();
        },
        mounted: function () {
          (this.resizeObserver = new ResizeObserver(this.calcMaxTableHeight)),
            this.resizeObserver.observe(this.$refs["my-inquiries-content"]),
            (this.tableResizeObserver = new ResizeObserver(this.calcNameWidth)),
            this.tableResizeObserver.observe(this.$refs.table),
            this.calcNameWidth(),
            this.calcMaxTableHeight();
        },
        beforeDestroy: function () {
          this.resizeObserver.unobserve(this.$refs["my-inquiries-content"]),
            this.tableResizeObserver.unobserve(this.$refs.table);
        },
        filters: {
          date: function (e) {
            if (!e) return "";
            var t = { year: "numeric", month: "long", day: "numeric" },
              i = { hour12: !1, hour: "2-digit", minute: "2-digit" };
            return (
              new Date(e).toLocaleDateString("en-GB", t) +
              " " +
              new Date(e).toLocaleTimeString("en-GB", i)
            );
          },
        },
        methods: {
          calcNameWidth: function () {
            var e =
              this.$refs["name-td"] && this.$refs["name-td"][0]
                ? this.$refs["name-td"][0].getBoundingClientRect().width
                : 0;
            this.$refs["name-th"].style = "width: ".concat(e, "px");
          },
          calcMaxTableHeight: function () {
            var e = this.$refs["my-inquiries-content"].offsetHeight - 200;
            this.maxTableHeight = e - (e % 40) + 1;
          },
          openInquiry: function (e) {
            var t = this,
              i = this.showedInquiries[e];
            this.$store.dispatch("addTab", i).then(function (e) {
              t.$store.commit("setCurrentTabId", e),
                t.$router.push("/workspace");
            });
          },
          showRenameDialog: function (e) {
            (this.errorMsg = null),
              (this.processedInquiryId = e),
              (this.newName = this.inquiries[this.processedInquiryIndex].name),
              this.$modal.show("rename");
          },
          renameInquiry: function () {
            if (this.newName) {
              var e = this.inquiries[this.processedInquiryIndex];
              (e.name = this.newName),
                this.$set(this.inquiries, this.processedInquiryIndex, e),
                ar.updateStorage(this.inquiries);
              var t = this.$store.state.tabs.find(function (t) {
                return t.id === e.id;
              });
              t &&
                this.$store.commit("updateTab", {
                  tab: t,
                  newValues: { name: this.newName },
                }),
                this.$modal.hide("rename");
            } else this.errorMsg = "Inquiry name can't be empty";
          },
          duplicateInquiry: function (e) {
            var t = ar.duplicateInquiry(this.showedInquiries[e]);
            this.inquiries.push(t), ar.updateStorage(this.inquiries);
          },
          showDeleteDialog: function (e) {
            (this.deleteGroup = e.size > 1),
              this.deleteGroup ||
                (this.processedInquiryId = e.values().next().value),
              this.$modal.show("delete");
          },
          deleteInquiry: function () {
            var e = this;
            if ((this.$modal.hide("delete"), this.deleteGroup)) {
              this.inquiries = this.inquiries.filter(function (t) {
                return !e.selectedInquiriesIds.has(t.id);
              });
              var t = this.$store.state.tabs,
                i = t.length - 1;
              while (i > -1)
                this.selectedInquiriesIds.has(t[i].id) &&
                  this.$store.commit("deleteTab", t[i]),
                  i--;
              this.selectedInquiriesIds.clear();
            } else {
              this.inquiries.splice(this.processedInquiryIndex, 1);
              var n = this.$store.state.tabs.find(function (t) {
                return t.id === e.processedInquiryId;
              });
              n && this.$store.commit("deleteTab", n),
                this.selectedInquiriesIds.has(this.processedInquiryId) &&
                  this.selectedInquiriesIds.delete(this.processedInquiryId);
            }
            (this.selectedInquiriesCount = this.selectedInquiriesIds.size),
              ar.updateStorage(this.inquiries);
          },
          exportToFile: function (e, t) {
            ar.export(e, t);
          },
          exportSelectedInquiries: function () {
            var e = this,
              t = this.allInquiries.filter(function (t) {
                return e.selectedInquiriesIds.has(t.id);
              });
            this.exportToFile(t, "My sqliteviz inquiries.json");
          },
          importInquiries: function () {
            var e = this;
            ar.importInquiries().then(function (t) {
              (e.inquiries = e.inquiries.concat(t)),
                ar.updateStorage(e.inquiries);
            });
          },
          toggleSelectAll: function (e) {
            var t = this;
            (this.selectAll = e),
              this.$refs.rowCheckBox.forEach(function (t) {
                t.checked = e;
              }),
              (this.selectedInquiriesIds = e
                ? new Set(
                    this.showedInquiries.map(function (e) {
                      return e.id;
                    })
                  )
                : new Set()),
              (this.selectedInquiriesCount = this.selectedInquiriesIds.size),
              (this.selectedNotPredefinedCount = e
                ? Object(Us["a"])(this.selectedInquiriesIds).filter(function (
                    e
                  ) {
                    return !t.predefinedInquiriesIds.has(e);
                  }).length
                : 0);
          },
          toggleRow: function (e, t) {
            var i = this.predefinedInquiriesIds.has(t);
            e
              ? (this.selectedInquiriesIds.add(t),
                i || (this.selectedNotPredefinedCount += 1))
              : (this.selectedInquiriesIds.size ===
                  this.showedInquiries.length &&
                  ((this.$refs.mainCheckBox.checked = !1),
                  (this.selectAll = !1)),
                this.selectedInquiriesIds.delete(t),
                i || (this.selectedNotPredefinedCount -= 1)),
              (this.selectedInquiriesCount = this.selectedInquiriesIds.size);
          },
        },
      },
      rr = sr,
      or = (i("5c0f"), Object(r["a"])(rr, Es, Qs, !1, null, "0e0b18b7", null)),
      cr = or.exports,
      lr = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "div",
          { attrs: { id: "dbloader-container" } },
          [
            i("db-uploader", { attrs: { type: "illustrated" } }),
            i("div", { attrs: { id: "note" } }, [
              e._v(
                " DecisionHub is fully client-side. Your database never leaves your computer. "
              ),
            ]),
            i(
              "button",
              {
                staticClass: "secondary",
                attrs: { id: "skip" },
                on: {
                  click: function (t) {
                    return e.$router.push("/workspace");
                  },
                },
              },
              [e._v(" Create empty database ")]
            ),
          ],
          1
        );
      },
      ur = [],
      dr = { name: "Welcome", components: { DbUploader: kt } },
      Mr = dr,
      pr = (i("f2b5"), Object(r["a"])(Mr, lr, ur, !1, null, "0da5ae79", null)),
      gr = pr.exports,
      hr = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "div",
          [
            i("main-menu"),
            i(
              "keep-alive",
              { attrs: { include: "Workspace" } },
              [i("router-view", { attrs: { id: "main-view" } })],
              1
            ),
          ],
          1
        );
      },
      mr = [],
      Ir = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "nav",
          [
            n(
              "div",
              { attrs: { id: "nav-links" } },
              [
                n("a", { attrs: { href: "" } }, [
                  n("img", { attrs: { src: i("1505") } }),
                ]),
                n("router-link", { attrs: { to: "/workspace" } }, [
                  e._v("Workspace"),
                ]),
                n("router-link", { attrs: { to: "/inquiries" } }, [
                  e._v("Inquiries"),
                ]),
                n(
                  "a",
                  {
                    attrs: {
                      href: "",
                      target: "_blank",
                    },
                  },
                  [e._v("Help")]
                ),
              ],
              1
            ),
            n(
              "div",
              { attrs: { id: "nav-buttons" } },
              [
                n(
                  "button",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value:
                          e.currentInquiry && "/workspace" === e.$route.path,
                        expression:
                          "currentInquiry && $route.path === '/workspace'",
                      },
                    ],
                    staticClass: "primary",
                    attrs: { id: "save-btn", disabled: e.isSaved },
                    on: { click: e.checkInquiryBeforeSave },
                  },
                  [e._v(" Save ")]
                ),
                n(
                  "button",
                  {
                    staticClass: "primary",
                    attrs: { id: "create-btn" },
                    on: { click: e.createNewInquiry },
                  },
                  [e._v(" Create ")]
                ),
                n("app-diagnostic-info"),
              ],
              1
            ),
            n(
              "modal",
              { attrs: { name: "save", classes: "dialog", height: "auto" } },
              [
                n(
                  "div",
                  { staticClass: "dialog-header" },
                  [
                    e._v(" Save inquiry "),
                    n("close-icon", { on: { click: e.cancelSave } }),
                  ],
                  1
                ),
                n(
                  "div",
                  { staticClass: "dialog-body" },
                  [
                    n(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: e.isPredefined,
                            expression: "isPredefined",
                          },
                        ],
                        attrs: { id: "save-note" },
                      },
                      [
                        n("img", { attrs: { src: i("db39") } }),
                        e._v(
                          " Note: Predefined inquiries can't be edited. That's why your modifications will be saved as a new inquiry. Enter the name for it. "
                        ),
                      ]
                    ),
                    n("text-field", {
                      attrs: {
                        label: "Inquiry name",
                        "error-msg": e.errorMsg,
                        width: "100%",
                      },
                      model: {
                        value: e.name,
                        callback: function (t) {
                          e.name = t;
                        },
                        expression: "name",
                      },
                    }),
                  ],
                  1
                ),
                n("div", { staticClass: "dialog-buttons-container" }, [
                  n(
                    "button",
                    { staticClass: "secondary", on: { click: e.cancelSave } },
                    [e._v("Cancel")]
                  ),
                  n(
                    "button",
                    { staticClass: "primary", on: { click: e.saveInquiry } },
                    [e._v("Save")]
                  ),
                ]),
              ]
            ),
          ],
          1
        );
      },
      Nr = [],
      fr = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { attrs: { id: "app-info-container" } },
          [
            n("img", {
              attrs: { id: "app-info-icon", src: i("db39") },
              on: {
                click: function (t) {
                  return e.$modal.show("app-info");
                },
              },
            }),
            n(
              "modal",
              {
                attrs: {
                  name: "app-info",
                  classes: "dialog",
                  height: "auto",
                  width: "400px",
                },
              },
              [
                n(
                  "div",
                  { staticClass: "dialog-header" },
                  [
                    e._v(" App info "),
                    n("close-icon", {
                      on: {
                        click: function (t) {
                          return e.$modal.hide("app-info");
                        },
                      },
                    }),
                  ],
                  1
                ),
                n(
                  "div",
                  { staticClass: "dialog-body" },
                  e._l(e.info, function (t, i) {
                    return n("div", { key: i, staticClass: "info-item" }, [
                      e._v(" " + e._s(t.name) + " "),
                      n("div", { staticClass: "divider" }),
                      n(
                        "div",
                        { staticClass: "options" },
                        e._l(t.info, function (t, i) {
                          return n("div", { key: i }, [
                            e._v(" " + e._s(t) + " "),
                          ]);
                        }),
                        0
                      ),
                    ]);
                  }),
                  0
                ),
              ]
            ),
          ],
          1
        );
      },
      vr = [],
      jr = {
        name: "AppDiagnosticInfo",
        components: { CloseIcon: ze },
        data: function () {
          return {
            info: [{ name: "sqliteviz version", info: [i("9224").version] }],
          };
        },
        created: function () {
          var e = this;
          return Object(d["a"])(
            Object(u["a"])().mark(function t() {
              var i, n;
              return Object(u["a"])().wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (i = e.$store.state),
                        (t.next = 3),
                        i.db.execute("select sqlite_version()")
                      );
                    case 3:
                      return (
                        (n = t.sent.values),
                        e.info.push({
                          name: "SQLite version",
                          info: n["sqlite_version()"],
                        }),
                        (t.next = 7),
                        i.db.execute("PRAGMA compile_options")
                      );
                    case 7:
                      (n = t.sent.values),
                        e.info.push({
                          name: "SQLite compile options",
                          info: n.compile_options,
                        });
                    case 9:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )();
        },
      },
      Dr = jr,
      br = (i("5e40"), Object(r["a"])(Dr, fr, vr, !1, null, "1f065ff6", null)),
      yr = br.exports,
      Cr = {
        name: "MainMenu",
        components: { TextField: X, CloseIcon: ze, AppDiagnosticInfo: yr },
        data: function () {
          return { name: "", errorMsg: null };
        },
        computed: {
          currentInquiry: function () {
            return this.$store.state.currentTab;
          },
          isSaved: function () {
            return this.currentInquiry && this.currentInquiry.isSaved;
          },
          isPredefined: function () {
            return this.currentInquiry && this.currentInquiry.isPredefined;
          },
          runDisabled: function () {
            return (
              this.currentInquiry &&
              (!this.$store.state.db || !this.currentInquiry.query)
            );
          },
        },
        created: function () {
          this.$root.$on("createNewInquiry", this.createNewInquiry),
            this.$root.$on("saveInquiry", this.checkInquiryBeforeSave),
            document.addEventListener("keydown", this._keyListener);
        },
        beforeDestroy: function () {
          document.removeEventListener("keydown", this._keyListener);
        },
        methods: {
          createNewInquiry: function () {
            var e = this;
            this.$store.dispatch("addTab").then(function (t) {
              e.$store.commit("setCurrentTabId", t),
                "/workspace" !== e.$route.path && e.$router.push("/workspace");
            }),
              z["a"].send("inquiry.create", null, { auto: !1 });
          },
          cancelSave: function () {
            this.$modal.hide("save"), this.$root.$off("inquirySaved");
          },
          checkInquiryBeforeSave: function () {
            (this.errorMsg = null),
              (this.name = ""),
              ar.isTabNeedName(this.currentInquiry)
                ? this.$modal.show("save")
                : this.saveInquiry();
          },
          saveInquiry: function () {
            var e = this,
              t = ar.isTabNeedName(this.currentInquiry);
            if (!t || this.name) {
              var i = this.currentInquiry.result,
                n = this.currentInquiry.view,
                a = ar.save(this.currentInquiry, this.name);
              this.$store.commit("updateTab", {
                tab: this.currentInquiry,
                newValues: {
                  name: a.name,
                  id: a.id,
                  query: a.query,
                  viewType: a.viewType,
                  viewOptions: a.viewOptions,
                  isSaved: !0,
                },
              }),
                this.$nextTick(function () {
                  (e.currentInquiry.result = i), (e.currentInquiry.view = n);
                }),
                this.$modal.hide("save"),
                this.$root.$emit("inquirySaved"),
                z["a"].send("inquiry.save");
            } else this.errorMsg = "Inquiry name can't be empty";
          },
          _keyListener: function (e) {
            if ("/workspace" === this.$route.path) {
              if (
                ("r" === e.key || "Enter" === e.key) &&
                (e.ctrlKey || e.metaKey)
              )
                return (
                  e.preventDefault(),
                  void (this.runDisabled || this.currentInquiry.execute())
                );
              if ("s" === e.key && (e.ctrlKey || e.metaKey))
                return (
                  e.preventDefault(),
                  void (this.isSaved || this.checkInquiryBeforeSave())
                );
            }
            "b" === e.key &&
              (e.ctrlKey || e.metaKey) &&
              (e.preventDefault(), this.createNewInquiry());
          },
        },
      },
      wr = Cr,
      zr = (i("8e37"), Object(r["a"])(wr, Ir, Nr, !1, null, "7599f804", null)),
      Tr = zr.exports,
      Or = (i("e506"), { name: "Main", components: { MainMenu: Tr } }),
      xr = Or,
      Lr = (i("d2db"), Object(r["a"])(xr, hr, mr, !1, null, "25aa04f9", null)),
      Ar = Lr.exports,
      kr = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "div",
          [
            i("logs", { attrs: { id: "logs", messages: e.messages } }),
            e.hasErrors
              ? i(
                  "button",
                  {
                    staticClass: "secondary",
                    attrs: { id: "open-workspace-btn" },
                    on: {
                      click: function (t) {
                        return e.$router.push("/workspace?hide_schema=1");
                      },
                    },
                  },
                  [e._v(" Open workspace ")]
                )
              : e._e(),
          ],
          1
        );
      },
      Sr = [],
      Er = i("b85c"),
      Qr = {
        name: "LoadView",
        components: { Logs: yt },
        data: function () {
          return { newDb: null, messages: [], dataMsg: {}, inquiryMsg: {} };
        },
        computed: {
          hasErrors: function () {
            return (
              "error" === this.dataMsg.type || "error" === this.inquiryMsg.type
            );
          },
        },
        created: function () {
          var e = this;
          return Object(d["a"])(
            Object(u["a"])().mark(function t() {
              var i, n, a, s, r, o, c;
              return Object(u["a"])().wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (i = e.$route.query),
                        (n = i.data_url),
                        (a = i.data_format),
                        (s = i.inquiry_url),
                        (r = i.inquiry_id),
                        (o = i.maximize),
                        z["a"].send("share.load", null, {
                          has_data_url: !!n,
                          data_format: a,
                          has_inquiry_url: !!s,
                          inquiry_id_count: (r || []).length,
                          maximize: o,
                        }),
                        (t.next = 4),
                        e.loadData(n, a)
                      );
                    case 4:
                      return (t.next = 6), e.loadInquiries(s, r);
                    case 6:
                      if (((c = t.sent), !(c && c.length > 0))) {
                        t.next = 10;
                        break;
                      }
                      return (t.next = 10), e.openInquiries(c, o);
                    case 10:
                      e.hasErrors || e.$router.push("/workspace?hide_schema=1");
                    case 11:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )();
        },
        methods: {
          loadData: function (e, t) {
            var i = this;
            return Object(d["a"])(
              Object(u["a"])().mark(function n() {
                var a;
                return Object(u["a"])().wrap(function (n) {
                  while (1)
                    switch ((n.prev = n.next)) {
                      case 0:
                        if (((i.newDb = pe.getNewDatabase()), !e)) {
                          n.next = 15;
                          break;
                        }
                        if (
                          ((i.dataMsg = {
                            message: "Preparing data...",
                            type: "info",
                          }),
                          i.messages.push(i.dataMsg),
                          (a = setTimeout(function () {
                            "info" === i.dataMsg.type &&
                              (i.dataMsg.type = "loading");
                          }, 1e3)),
                          "sqlite" !== t)
                        ) {
                          n.next = 10;
                          break;
                        }
                        return (n.next = 8), i.getSqliteDb(e);
                      case 8:
                        n.next = 12;
                        break;
                      case 10:
                        (i.dataMsg.message = "Unknown data format"),
                          (i.dataMsg.type = "error");
                      case 12:
                        clearTimeout(a), (n.next = 17);
                        break;
                      case 15:
                        return (n.next = 17), i.newDb.loadDb();
                      case 17:
                        i.$store.commit("setDb", i.newDb);
                      case 18:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            )();
          },
          getSqliteDb: function (e) {
            var t = this;
            return Object(d["a"])(
              Object(u["a"])().mark(function i() {
                var n, a, s;
                return Object(u["a"])().wrap(
                  function (i) {
                    while (1)
                      switch ((i.prev = i.next)) {
                        case 0:
                          return (
                            (i.prev = 0),
                            (n = new URL(e).pathname.split("/").pop()),
                            (i.next = 4),
                            w.readFile(e)
                          );
                        case 4:
                          if (((a = i.sent), a.ok)) {
                            i.next = 7;
                            break;
                          }
                          throw new Error("Fetching DB failed");
                        case 7:
                          return (i.next = 9), a.blob();
                        case 9:
                          return (
                            (s = i.sent),
                            (s.name = n),
                            (i.next = 13),
                            t.newDb.loadDb(s)
                          );
                        case 13:
                          (t.dataMsg.message = "Data is ready"),
                            (t.dataMsg.type = "success"),
                            (i.next = 22);
                          break;
                        case 17:
                          (i.prev = 17),
                            (i.t0 = i["catch"](0)),
                            console.error(i.t0),
                            (t.dataMsg.message = i.t0),
                            (t.dataMsg.type = "error");
                        case 22:
                        case "end":
                          return i.stop();
                      }
                  },
                  i,
                  null,
                  [[0, 17]]
                );
              })
            )();
          },
          loadInquiries: function (e) {
            var t = arguments,
              i = this;
            return Object(d["a"])(
              Object(u["a"])().mark(function n() {
                var a, s, r, o;
                return Object(u["a"])().wrap(
                  function (n) {
                    while (1)
                      switch ((n.prev = n.next)) {
                        case 0:
                          if (
                            ((a = t.length > 1 && void 0 !== t[1] ? t[1] : []),
                            e)
                          ) {
                            n.next = 3;
                            break;
                          }
                          return n.abrupt("return", []);
                        case 3:
                          return (
                            (s = setTimeout(function () {
                              "info" === i.inquiryMsg.type &&
                                (i.inquiryMsg.type = "loading");
                            }, 1e3)),
                            (n.prev = 4),
                            (i.inquiryMsg = {
                              message: "Preparing inquiries...",
                              type: "info",
                            }),
                            i.messages.push(i.inquiryMsg),
                            (n.next = 9),
                            w.readFile(e)
                          );
                        case 9:
                          return (r = n.sent), (n.next = 12), r.json();
                        case 12:
                          return (
                            (o = n.sent),
                            (i.inquiryMsg.message = "Inquiries are ready"),
                            (i.inquiryMsg.type = "success"),
                            n.abrupt(
                              "return",
                              a.length > 0
                                ? o.inquiries.filter(function (e) {
                                    return a.includes(e.id);
                                  })
                                : o.inquiries
                            )
                          );
                        case 18:
                          (n.prev = 18),
                            (n.t0 = n["catch"](4)),
                            console.error(n.t0),
                            (i.inquiryMsg.message = n.t0),
                            (i.inquiryMsg.type = "error");
                        case 23:
                          clearTimeout(s);
                        case 24:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[4, 18]]
                );
              })
            )();
          },
          openInquiries: function (e, t) {
            var i = this;
            return Object(d["a"])(
              Object(u["a"])().mark(function n() {
                var a, s, r, o, c, l;
                return Object(u["a"])().wrap(
                  function (n) {
                    while (1)
                      switch ((n.prev = n.next)) {
                        case 0:
                          (a = null),
                            (s = t ? i.getLayout(t) : void 0),
                            (r = Object(Er["a"])(e)),
                            (n.prev = 3),
                            r.s();
                        case 5:
                          if ((o = r.n()).done) {
                            n.next = 13;
                            break;
                          }
                          return (
                            (c = o.value),
                            (n.next = 9),
                            i.$store.dispatch(
                              "addTab",
                              Object(I["a"])(
                                Object(I["a"])({}, c),
                                {},
                                { id: void 0, layout: s, maximize: t }
                              )
                            )
                          );
                        case 9:
                          (l = n.sent),
                            a ||
                              ((a = l), i.$store.commit("setCurrentTabId", a));
                        case 11:
                          n.next = 5;
                          break;
                        case 13:
                          n.next = 18;
                          break;
                        case 15:
                          (n.prev = 15), (n.t0 = n["catch"](3)), r.e(n.t0);
                        case 18:
                          return (n.prev = 18), r.f(), n.finish(18);
                        case 21:
                          i.$store.state.currentTab.execute();
                        case 22:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[3, 15, 18, 21]]
                );
              })
            )();
          },
          getLayout: function (e) {
            return "dataView" === e
              ? { sqlEditor: "hidden", table: "above", dataView: "bottom" }
              : { sqlEditor: "above", table: "bottom", dataView: "hidden" };
          },
        },
      },
      Ur = Qr,
      Yr = (i("822f"), Object(r["a"])(Ur, kr, Sr, !1, null, "b7b152ca", null)),
      _r = Yr.exports;
    n["default"].use(M["a"]);
    var Zr = [
        { path: "/", name: "Welcome", component: gr },
        {
          path: "/",
          name: "Main",
          component: Ar,
          children: [
            { path: "/workspace", name: "Workspace", component: Ss },
            { path: "/inquiries", name: "Inquiries", component: cr },
          ],
        },
        { path: "/load", name: "Load", component: _r },
      ],
      Vr = new M["a"]({ routes: Zr });
    Vr.beforeEach(
      (function () {
        var e = Object(d["a"])(
          Object(u["a"])().mark(function e(t, i, n) {
            var a;
            return Object(u["a"])().wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (ui.state.db || "Load" === t.name) {
                      e.next = 5;
                      break;
                    }
                    return (a = pe.getNewDatabase()), (e.next = 4), a.loadDb();
                  case 4:
                    ui.commit("setDb", a);
                  case 5:
                    n();
                  case 6:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t, i, n) {
          return e.apply(this, arguments);
        };
      })()
    );
    var qr = Vr,
      Pr = i("b8ae"),
      Hr = i("1881"),
      Br = i.n(Hr);
    i("017d"),
      i("33da"),
      i("6d26"),
      i("bebf"),
      i("7432"),
      i("4a8d"),
      i("e607"),
      i("feae");
    ["localhost", "127.0.0.1"].includes(location.hostname) ||
      i.e("chunk-2d22998c").then(i.bind(null, "ddb8")),
      n["default"].use(Pr["VuePlugin"]),
      n["default"].use(Br.a),
      (n["default"].config.productionTip = !1),
      new n["default"]({
        router: qr,
        store: ui,
        render: function (e) {
          return e(l);
        },
      }).$mount("#app");
  },
  "56ed": function (e, t, i) {
    "use strict";
    i("fc31");
  },
  "5c0f": function (e, t, i) {
    "use strict";
    i("494a");
  },
  "5ca7": function (e, t, i) {},
  "5d93": function (e, t, i) {
    "use strict";
    i("0c8d");
  },
  "5e1a": function (e, t, i) {
    "use strict";
    i("03c4");
  },
  "5e40": function (e, t, i) {
    "use strict";
    i("19be");
  },
  "60b8": function (e, t, i) {},
  "64b6": function (e, t, i) {
    "use strict";
    i("231b");
  },
  "665c": function (e, t, i) {},
  6842: function (e, t, i) {
    "use strict";
    i("ca59");
  },
  "69e6": function (e, t) {
    e.exports =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSIxNyIgaGVpZ2h0PSIxNyIgcng9IjIuNSIgZmlsbD0iI0YzRjZGQSIgc3Ryb2tlPSIjQzhENEUzIi8+CjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2QpIj4KPHBhdGggZD0iTTE1Ljc1IDUuMjQ5ODhMNi43NSAxNC4yNDk5TDIuNjI1IDEwLjEyNDlMMy42ODI1IDkuMDY3MzhMNi43NSAxMi4xMjc0TDE0LjY5MjUgNC4xOTIzOEwxNS43NSA1LjI0OTg4WiIgZmlsbD0iIzExOURGRiIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2QiIHg9IjAuNjI1IiB5PSIzLjE5MjM4IiB3aWR0aD0iMTcuMTI1IiBoZWlnaHQ9IjE0LjA1NzUiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiLz4KPGZlT2Zmc2V0IGR5PSIxIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMC4xNjQ3MDYgMCAwIDAgMCAwLjI0NzA1OSAwIDAgMCAwIDAuMzcyNTQ5IDAgMCAwIDAuNDUgMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvdyIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvdyIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8L3N2Zz4K";
  },
  "6a0b": function (e, t) {
    e.exports =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUwIiBoZWlnaHQ9IjE2NyIgdmlld0JveD0iMCAwIDQ1MCAxNjciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxtYXNrIGlkPSJtYXNrMCIgbWFzay10eXBlPSJhbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjQ1MCIgaGVpZ2h0PSIxNjciPgo8cmVjdCB3aWR0aD0iNDUwIiBoZWlnaHQ9IjE2NyIgZmlsbD0iI0M0QzRDNCIvPgo8L21hc2s+CjxnIG1hc2s9InVybCgjbWFzazApIj4KPHBhdGggZD0iTTEyOC4yMDcgLTE2OS4wMDdDNzAuMTk3MiAtMTgwLjg0OSAxOC43NDUgLTE0MC4xMSA0LjMxOTg1IC03OC4zMzIyQy0xMC4xMDU0IC0xNi41NTM5IDE0LjMzMzcgMTUuMzMxOCAzNy4zMjE4IDU1LjE4OTFDNzIuMzc4NCAxMTUuOTcxIDE4MS41NTEgMTcwLjIzNyAyNjUuMDgzIDE2Ni43ODlDMzM3LjUxNyAxNjMuOCAzODkuMDI4IDE0NS41MTQgNDI1LjkzNiA3Ny4xMTA3QzQ4OS4zNzggLTQwLjQ2NzkgNDE3LjQ0NCAtMTE3LjA5MyAzMjUuNTI3IC0xMDIuNzQ1QzIxNC41NzEgLTg1LjQyNCAyMTMuNjI5IC0xNTEuNTcgMTI4LjIwNyAtMTY5LjAwN1oiIGZpbGw9IiNERkU4RjMiLz4KPHBhdGggZD0iTTE0Ny4yMjIgOS40ODcxNkMxNDcuMjIyIDYuNzI4MjQgMTQ5LjQ1OCA0LjQ5MTcgMTUyLjIxNyA0LjQ5MTdIMzQzLjA0NEMzNDUuODAyIDQuNDkxNyAzNDguMDM5IDYuNzI4MjQgMzQ4LjAzOSA5LjQ4NzE1VjEyMi4zODRDMzQ4LjAzOSAxMjUuMTQzIDM0NS44MDIgMTI3LjM4IDM0My4wNDQgMTI3LjM4SDE1Mi4yMTdDMTQ5LjQ1OCAxMjcuMzggMTQ3LjIyMiAxMjUuMTQzIDE0Ny4yMjIgMTIyLjM4NFY5LjQ4NzE2WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTE1Ni4yODQgLTEuNTczNzNDMTU4LjE1OCAtMy40NDczOSAxNjAuNjk5IC00LjUgMTYzLjM0OSAtNC41SDMzMS45MTFDMzM0LjU2MSAtNC41IDMzNy4xMDIgLTMuNDQ3MzkgMzM4Ljk3NiAtMS41NzM3M0wzNDYuMDQxIDUuNDkwOTFIMTQ5LjIyTDE1Ni4yODQgLTEuNTczNzNaIiBmaWxsPSIjQzhENEUzIi8+CjxwYXRoIGQ9Ik0xNDcuMjIyIDkuNDg3MTVDMTQ3LjIyMiA2LjcyODI0IDE0OS40NTggNC40OTE3IDE1Mi4yMTcgNC40OTE3SDM0My4wNDRDMzQ1LjgwMiA0LjQ5MTcgMzQ4LjAzOSA2LjcyODI0IDM0OC4wMzkgOS40ODcxNVYyNy40NzA4SDE0Ny4yMjJWOS40ODcxNVoiIGZpbGw9IiNBMkIxQzYiLz4KPHBhdGggZD0iTTI1NC45MzkgNjcuOTU3MUMyNTQuMjUgNjcuNTMzNSAyNTMuNTk3IDY3LjA1MTkgMjUyLjk4OCA2Ni41MTc0VjU3LjY5MzVIMjU2LjgzMlY2OS4wMThDMjU2LjE5NSA2OC42ODY5IDI1NS41NjQgNjguMzMzMiAyNTQuOTM5IDY3Ljk1NzFaTTI2Mi4zNDEgNjMuNTAzMUgyNTguNDk4VjY5LjcyNTNDMjU5Ljc1MiA3MC4zMDkgMjYxLjAzNSA3MC44Mjg4IDI2Mi4zNDEgNzEuMjgyOVY2My41MDMxWk0yNTIuOTg4IDY4LjI4NTVMMjUyLjczNyA2OC4wODM0QzI1Mi4zNTIgNjcuNzYzNSAyNTEuOTkyIDY3LjQzNTEgMjUxLjY0OCA2Ny4xMDY4TDI0Mi41MyA2Ni4wNDU5TDI0NC4yMDUgNjkuMjk1OUwyNTUuOTI3IDcwLjI1NTdDMjU0Ljg5OSA2OS42NzU4IDI1My45MTYgNjkuMDE3MiAyNTIuOTg4IDY4LjI4NTVWNjguMjg1NVpNMjYyLjE0IDczLjAwOUMyNjAuODMyIDcyLjU3OTMgMjU5LjU0OSA3Mi4wNzYyIDI1OC4yOTcgNzEuNTAxOEwyNTcuODI4IDcxLjI2NjFMMjUwLjA5OSA3MC43NTI1TDI1MS40MDYgNzMuNDg4OUwyNjQuODg3IDczLjgwMDRDMjYzLjk2NiA3My41ODE1IDI2My4wMzYgNzMuMzEyMSAyNjIuMTQgNzMuMDA5Wk0yNDYuMDk3IDU3LjY5MzVDMjQ3LjU3MiA2MC4yODc1IDI0OS4zMjcgNjIuNzEwMSAyNTEuMzMgNjQuOTE3NlY1Ni4xMjc1TDI0Mi44ODIgNTEuOTQyOUwyNDIuMTI4IDYxLjc1MThMMjUwLjgyOCA2Ni4yMzk1QzI0OC41NDcgNjMuODQ2OSAyNDYuOTE4IDYwLjkwMzYgMjQ2LjA5NyA1Ny42OTM1VjU3LjY5MzVaIiBmaWxsPSIjMTE5REZGIi8+CjxwYXRoIGQ9Ik0yMTAuNzM4IDg0LjI4NThDMjExLjc5NSA4NC44NzYzIDIxMi44NTggODUuMTcxNSAyMTMuOTI2IDg1LjE3MTVDMjE0LjgxNSA4NS4xNzE1IDIxNS4zMzYgODQuODU1NyAyMTUuNDkgODQuMjI0MkMyMTUuNTQxIDg0LjAwODUgMjE1LjU2NyA4My43NDY3IDIxNS41NjcgODMuNDM4NkMyMTUuNTY3IDgzLjEyNTQgMjE1LjUzMSA4Mi44ODQgMjE1LjQ1OSA4Mi43MTQ2QzIxNS4zODcgODIuNTQgMjE1LjI2NiA4Mi40MTE3IDIxNS4wOTcgODIuMzI5NUMyMTQuOTI3IDgyLjI0MjIgMjE0LjcwMiA4Mi4xNzggMjE0LjQxOSA4Mi4xMzdDMjE0LjE0MiA4Mi4wOTU5IDIxMy43ODggODIuMDM5NCAyMTMuMzU2IDgxLjk2NzVDMjEyLjkyNSA4MS44OTA1IDIxMi41MyA4MS44MDU4IDIxMi4xNyA4MS43MTM0QzIxMS44MTEgODEuNjIwOSAyMTEuNTA1IDgxLjQ4NzQgMjExLjI1NCA4MS4zMTI5QzIxMC43MiA4MC45MzggMjEwLjQ2MyA4MC4zMDY1IDIxMC40ODMgNzkuNDE4MlY3OS4yMjU2QzIxMC40ODMgNzguMjkxMiAyMTAuNzkyIDc3LjYyNjIgMjExLjQwOCA3Ny4yMzA5QzIxMi4wMDMgNzYuODQwNiAyMTIuOTg3IDc2LjcwNzEgMjE0LjM1OCA3Ni44MzA0QzIxNS4yOTIgNzYuOTE3NiAyMTYuMDM3IDc3LjA3OTQgMjE2LjU5MSA3Ny4zMTU2TDIxNi4yMjkgNzguNDc4NkMyMTUuNjEzIDc4LjIxNjcgMjE0Ljg3NCA3OC4wMjY3IDIxNC4wMTEgNzcuOTA4NkMyMTMuNzQ0IDc3Ljg3MjcgMjEzLjQ5MiA3Ny44NTQ3IDIxMy4yNTYgNzcuODU0N0MyMTMuMDI1IDc3Ljg1NDcgMjEyLjgxNSA3Ny44NzI3IDIxMi42MjUgNzcuOTA4NkMyMTIuNDM1IDc3Ljk0NDYgMjEyLjI3NSA3OC4wMTEzIDIxMi4xNDcgNzguMTA4OUMyMTEuOTAxIDc4LjMwOTEgMjExLjc3MiA3OC42ODE0IDIxMS43NjIgNzkuMjI1NkMyMTEuNzQ3IDc5Ljg2NzUgMjExLjkyNiA4MC4yNzU3IDIxMi4zMDEgODAuNDUwM0MyMTIuNjYxIDgwLjYxOTcgMjEzLjA4NyA4MC43Mzc4IDIxMy41OCA4MC44MDQ1QzIxNC4wNzMgODAuODY2MiAyMTQuNDc2IDgwLjkyMjYgMjE0Ljc4OSA4MC45NzRDMjE1LjEwMiA4MS4wMjAyIDIxNS4zODcgODEuMDg0NCAyMTUuNjQ0IDgxLjE2NjVDMjE1LjkgODEuMjQ4NyAyMTYuMTIxIDgxLjM3OTYgMjE2LjMwNiA4MS41NTkzQzIxNi42OTEgODEuOTIzOSAyMTYuODc5IDgyLjU1OCAyMTYuODY4IDgzLjQ2MTdDMjE2Ljg0MyA4NS4wMzggMjE2LjE4NSA4NS45MzY2IDIxNC44OTcgODYuMTU3NEMyMTQuNTA2IDg2LjIyNDEgMjE0LjExNiA4Ni4yNTc1IDIxMy43MjYgODYuMjU3NUMyMTMuMzM2IDg2LjI1NzUgMjEyLjk3NiA4Ni4yMzE4IDIxMi42NDggODYuMTgwNUMyMTIuMzI0IDg2LjEzNDMgMjEyLjAxNCA4Ni4wNjc1IDIxMS43MTYgODUuOTgwMkMyMTEuMTUxIDg1LjgyMSAyMTAuNjQgODUuNjEwNSAyMTAuMTgzIDg1LjM0ODdMMjEwLjczOCA4NC4yODU4WiIgZmlsbD0iIzJBM0Y1RiIvPgo8cGF0aCBkPSJNMjI1Ljc3OSA4NS4yMjU0QzIyNC43OTkgODUuOTEzNSAyMjMuNzYyIDg2LjI1NzUgMjIyLjY2OCA4Ni4yNTc1QzIyMS4zODkgODYuMjU3NSAyMjAuNTM3IDg1LjgwMzEgMjIwLjExMSA4NC44OTQyQzIxOS44NjQgODQuMzgwOCAyMTkuNzIxIDgzLjczMTMgMjE5LjY4IDgyLjk0NTdDMjE5LjY2NCA4Mi41ODYyIDIxOS42NTYgODIuMTkwOSAyMTkuNjU2IDgxLjc1OTZDMjE5LjY1NiA4MS4zMjMxIDIxOS42NTkgODAuODg0MSAyMTkuNjY0IDgwLjQ0MjVDMjE5LjY3NCA4MC4wMDEgMjE5LjcwOCA3OS41OTI4IDIxOS43NjQgNzkuMjE3OUMyMTkuODIxIDc4Ljg0MzEgMjE5LjkwOCA3OC41MDY4IDIyMC4wMjYgNzguMjA5QzIyMC4xNDkgNzcuOTA2MSAyMjAuMzI0IDc3LjY0OTMgMjIwLjU1IDc3LjQzODhDMjIxLjAxNyA3Ny4wMDI0IDIyMS43MzYgNzYuNzg0MSAyMjIuNzA2IDc2Ljc4NDFDMjIzLjY4MiA3Ni43ODQxIDIyNC43MTkgNzcuMDQ2IDIyNS44MTggNzcuNTY5N0wyMjUuOTQxIDc2LjkzODJIMjI3LjA1TDIyNy4wNTggODkuNjA3OEgyMjUuNzc5Vjg1LjIyNTRaTTIyNS43NzkgNzguNjMyNkMyMjQuODU1IDc4LjE3MDUgMjIzLjk2MiA3Ny45Mzk0IDIyMy4wOTkgNzcuOTM5NEMyMjIuNDczIDc3LjkzOTQgMjIyLjA1OSA3Ny45OTA4IDIyMS44NTkgNzguMDkzNUMyMjEuNjU5IDc4LjE5NjIgMjIxLjUwNSA3OC4zMjk3IDIyMS4zOTcgNzguNDk0QzIyMS4yOTQgNzguNjU4MyAyMjEuMjEgNzguODg0MiAyMjEuMTQzIDc5LjE3MTdDMjIxLjAyNSA3OS43MTA5IDIyMC45NjYgODAuNTk5MiAyMjAuOTY2IDgxLjgzNjZWODIuMDA2QzIyMC45NjYgODMuMTQ1OSAyMjEuMTA3IDgzLjk0NDMgMjIxLjM4OSA4NC40MDEzQzIyMS42NzIgODQuODY4NiAyMjIuMTg4IDg1LjEwMjIgMjIyLjkzNyA4NS4xMDIySDIyMy4wNTNDMjIzLjc2MiA4NS4xMDIyIDIyNC40ODYgODQuOTA3MSAyMjUuMjI1IDg0LjUxNjlDMjI1LjQzNSA4NC40MDkgMjI1LjYyIDg0LjI5ODYgMjI1Ljc3OSA4NC4xODU3Vjc4LjYzMjZaIiBmaWxsPSIjMkEzRjVGIi8+CjxwYXRoIGQ9Ik0yMzAuNzAxIDczLjAxMDJMMjMxLjk3MiA3Mi45MDI0Vjg2LjEwMzRIMjMwLjcxNkwyMzAuNzAxIDczLjAxMDJaIiBmaWxsPSIjMkEzRjVGIi8+CjxwYXRoIGQ9Ik0yMzYuNjA4IDc0Ljc0MzFDMjM2LjI2NCA3NC43NDMxIDIzNi4wNDQgNzQuNjk0NCAyMzUuOTQ2IDc0LjU5NjhDMjM1Ljc5MiA3NC40Mzc2IDIzNS43MTUgNzQuMjE5NCAyMzUuNzE1IDczLjk0MjFDMjM1LjcxNSA3My42NTk3IDIzNS43MyA3My40NTk1IDIzNS43NjEgNzMuMzQxNEMyMzUuNzk3IDczLjIxODIgMjM1Ljg0OCA3My4xMjMyIDIzNS45MTUgNzMuMDU2NEMyMzYuMDM4IDcyLjkzMzIgMjM2LjIyNiA3Mi44NzE2IDIzNi40NzcgNzIuODcxNkMyMzYuNzM0IDcyLjg3MTYgMjM2LjkxNiA3Mi44ODQ0IDIzNy4wMjQgNzIuOTEwMUMyMzcuMTM3IDcyLjkzNTggMjM3LjIzIDcyLjk4NDUgMjM3LjMwMSA3My4wNTY0QzIzNy40MjUgNzMuMTc5NyAyMzcuNDg2IDczLjM4MjUgMjM3LjQ4NiA3My42NjQ5QzIzNy40ODYgNzMuOTQyMSAyMzcuNDcxIDc0LjE0MjQgMjM3LjQ0IDc0LjI2NTZDMjM3LjQxNCA3NC4zODM3IDIzNy4zNjggNzQuNDc4NyAyMzcuMzAxIDc0LjU1MDZDMjM3LjE3MyA3NC42NzkgMjM2Ljk0MiA3NC43NDMxIDIzNi42MDggNzQuNzQzMVpNMjM1Ljk4NCA3Ni45MzgySDIzNy4yNDhWODYuMTAzNEgyMzZMMjM1Ljk4NCA3Ni45MzgyWiIgZmlsbD0iIzJBM0Y1RiIvPgo8cGF0aCBkPSJNMjQ1LjQ3MyA4NS42NjQ0QzI0NC42MzYgODYuMDU5OCAyNDMuODY0IDg2LjI1NzUgMjQzLjE1NSA4Ni4yNTc1QzI0MS44NzEgODYuMjU3NSAyNDEuMTQyIDg1LjcwODEgMjQwLjk2OCA4NC42MDkzQzI0MC45MjcgODQuMzQ3NCAyNDAuOTA2IDgzLjk2NzUgMjQwLjkwNiA4My40Njk0Vjc4LjAwODdIMjM5Ljc5N1Y3Ny4wNjE0TDI0MC45MDYgNzYuOTM4MkwyNDEuMTA2IDc0Ljg0MzNIMjQyLjE3N1Y3Ni45MzgySDI0NC44NDlWNzguMDA4N0gyNDIuMTc3VjgzLjQ0NjNDMjQyLjE3NyA4NC4wNzc4IDI0Mi4yMjMgODQuNDgwOSAyNDIuMzE1IDg0LjY1NTVDMjQyLjQ4NSA4NC45NzM4IDI0Mi44MjQgODUuMTMzIDI0My4zMzIgODUuMTMzQzI0My44NCA4NS4xMzMgMjQ0LjQwOCA4NC45NzY0IDI0NS4wMzQgODQuNjYzMkwyNDUuNDczIDg1LjY2NDRaIiBmaWxsPSIjMkEzRjVGIi8+CjxwYXRoIGQ9Ik0yNTQuNzE1IDg1LjYxODJDMjUzLjY1MyA4Ni4wNDQ0IDI1Mi40NzkgODYuMjU3NSAyNTEuMTk2IDg2LjI1NzVDMjUwLjQ1MSA4Ni4yNTc1IDI0OS44MiA4Ni4xODA1IDI0OS4zMDEgODYuMDI2NEMyNDguNDc0IDg1Ljc5MDIgMjQ3LjkyNSA4NS4zMDI0IDI0Ny42NTMgODQuNTYzMUMyNDcuNDAxIDgzLjg2OTkgMjQ3LjI3NSA4Mi44NDMgMjQ3LjI3NSA4MS40ODIzVjgxLjA4OTVDMjQ3LjI3NSA3OS40NjE4IDI0Ny42MTQgNzguMzE5NCAyNDguMjkyIDc3LjY2MjJDMjQ4LjkwMyA3Ny4wNzY4IDI0OS45MjIgNzYuNzg0MSAyNTEuMzUgNzYuNzg0MUMyNTIuNzQxIDc2Ljc4NDEgMjUzLjY5MSA3Ny4xMjgyIDI1NC4xOTkgNzcuODE2MkMyNTQuNDQ2IDc4LjE0OTkgMjU0LjYwOCA3OC41NTU2IDI1NC42ODUgNzkuMDMzMUMyNTQuNzY3IDc5LjUwNTUgMjU0LjgwOCA3OS45NTczIDI1NC44MDggODAuMzg4NkMyNTQuODA4IDgxLjA2MTMgMjU0Ljc5MyA4MS41ODI0IDI1NC43NjIgODEuOTUyMUMyNTQuMDM4IDgxLjk4MjkgMjUzLjM4OCA4MS45OTgzIDI1Mi44MTMgODEuOTk4M0MyNTIuODEzIDgxLjk5ODMgMjUyLjQgODEuOTk4MyAyNTEuNTczIDgxLjk5ODNDMjUwLjI3OSA4MS45OTgzIDI0OS4yODMgODEuOTQxOSAyNDguNTg1IDgxLjgyODlDMjQ4LjU4NSA4My4wMDk4IDI0OC43MzQgODMuODM0IDI0OS4wMzEgODQuMzAxMkMyNDkuMzk2IDg0Ljg3MTEgMjUwLjEyMyA4NS4xNTYxIDI1MS4yMTEgODUuMTU2MUMyNTIuMyA4NS4xNTYxIDI1My4zNDIgODQuOTQzIDI1NC4zMzggODQuNTE2OUwyNTQuNzE1IDg1LjYxODJaTTI1My41MDYgODAuOTI3OFY4MC4xODg0QzI1My41MDYgNzkuMzgyMyAyNTMuMzUgNzguODA3MiAyNTMuMDM2IDc4LjQ2MzJDMjUyLjY4NyA3OC4wNzgxIDI1Mi4wODQgNzcuODg1NSAyNTEuMjI3IDc3Ljg4NTVDMjUwLjIgNzcuODg1NSAyNDkuNDk5IDc4LjEwODkgMjQ5LjEyNCA3OC41NTU2QzI0OC43NjQgNzguOTgxOCAyNDguNTg1IDc5Ljc3MjUgMjQ4LjU4NSA4MC45Mjc4SDI1My41MDZaIiBmaWxsPSIjMkEzRjVGIi8+CjxwYXRoIGQ9Ik0yNTYuOTU3IDc2LjkzODJIMjU4LjMzNUwyNjAuNzM4IDg0LjQxNjdMMjYwLjk2OSA4NS4xNzkyTDI2MS4xODUgODQuNDE2N0wyNjMuNDggNzYuOTM4MkgyNjQuODc0TDI2MS43NzggODYuMTAzNEgyNjAuMDk5TDI1Ni45NTcgNzYuOTM4MloiIGZpbGw9IiMyQTNGNUYiLz4KPHBhdGggZD0iTTI2OC4xNTUgNzQuNzQzMUMyNjcuODExIDc0Ljc0MzEgMjY3LjU5IDc0LjY5NDQgMjY3LjQ5MyA3NC41OTY4QzI2Ny4zMzkgNzQuNDM3NiAyNjcuMjYyIDc0LjIxOTQgMjY3LjI2MiA3My45NDIxQzI2Ny4yNjIgNzMuNjU5NyAyNjcuMjc3IDczLjQ1OTUgMjY3LjMwOCA3My4zNDE0QzI2Ny4zNDQgNzMuMjE4MiAyNjcuMzk1IDczLjEyMzIgMjY3LjQ2MiA3My4wNTY0QzI2Ny41ODUgNzIuOTMzMiAyNjcuNzczIDcyLjg3MTYgMjY4LjAyNCA3Mi44NzE2QzI2OC4yODEgNzIuODcxNiAyNjguNDYzIDcyLjg4NDQgMjY4LjU3MSA3Mi45MTAxQzI2OC42ODQgNzIuOTM1OCAyNjguNzc3IDcyLjk4NDUgMjY4Ljg0OCA3My4wNTY0QzI2OC45NzIgNzMuMTc5NyAyNjkuMDMzIDczLjM4MjUgMjY5LjAzMyA3My42NjQ5QzI2OS4wMzMgNzMuOTQyMSAyNjkuMDE4IDc0LjE0MjQgMjY4Ljk4NyA3NC4yNjU2QzI2OC45NjEgNzQuMzgzNyAyNjguOTE1IDc0LjQ3ODcgMjY4Ljg0OCA3NC41NTA2QzI2OC43MiA3NC42NzkgMjY4LjQ4OSA3NC43NDMxIDI2OC4xNTUgNzQuNzQzMVpNMjY3LjUzMSA3Ni45MzgySDI2OC43OTVWODYuMTAzNEgyNjcuNTQ3TDI2Ny41MzEgNzYuOTM4MloiIGZpbGw9IiMyQTNGNUYiLz4KPHBhdGggZD0iTTI3MS42MDYgODUuMjMzMUwyNzYuMjk2IDc4LjAwMUgyNzEuNTA2Vjc2LjkzODJIMjc3Ljg1MlY3Ny44MDg1TDI3My4xNzcgODUuMDMyOUgyNzguMDQ1Vjg2LjEwMzRIMjcxLjYwNlY4NS4yMzMxWiIgZmlsbD0iIzJBM0Y1RiIvPgo8cGF0aCBkPSJNMjA0LjE3IDE2LjQ4MUMyMDQuMTcgMTQuMjczOSAyMDUuOTU5IDEyLjQ4NDYgMjA4LjE2NiAxMi40ODQ2SDMzNi4wNUMzMzguMjU3IDEyLjQ4NDYgMzQwLjA0NiAxNC4yNzM5IDM0MC4wNDYgMTYuNDgxVjE2LjQ4MUMzNDAuMDQ2IDE4LjY4ODEgMzM4LjI1NyAyMC40NzczIDMzNi4wNSAyMC40NzczSDIwOC4xNjZDMjA1Ljk1OSAyMC40NzczIDIwNC4xNyAxOC42ODgxIDIwNC4xNyAxNi40ODFWMTYuNDgxWiIgZmlsbD0iI0YzRjZGQSIvPgo8cGF0aCBkPSJNMTY1LjIwNSAxNi40ODA4QzE2NS4yMDUgMTkuMjM5NyAxNjIuOTY5IDIxLjQ3NjMgMTYwLjIxIDIxLjQ3NjNDMTU3LjQ1MSAyMS40NzYzIDE1NS4yMTQgMTkuMjM5NyAxNTUuMjE0IDE2LjQ4MDhDMTU1LjIxNCAxMy43MjE5IDE1Ny40NTEgMTEuNDg1NCAxNjAuMjEgMTEuNDg1NEMxNjIuOTY5IDExLjQ4NTQgMTY1LjIwNSAxMy43MjE5IDE2NS4yMDUgMTYuNDgwOFoiIGZpbGw9IiNDOEQ0RTMiLz4KPHBhdGggZD0iTTE4MS4xOTEgMTYuNDgwOEMxODEuMTkxIDE5LjIzOTcgMTc4Ljk1NCAyMS40NzYzIDE3Ni4xOTUgMjEuNDc2M0MxNzMuNDM2IDIxLjQ3NjMgMTcxLjIgMTkuMjM5NyAxNzEuMiAxNi40ODA4QzE3MS4yIDEzLjcyMTkgMTczLjQzNiAxMS40ODU0IDE3Ni4xOTUgMTEuNDg1NEMxNzguOTU0IDExLjQ4NTQgMTgxLjE5MSAxMy43MjE5IDE4MS4xOTEgMTYuNDgwOFoiIGZpbGw9IiNDOEQ0RTMiLz4KPHBhdGggZD0iTTE5Ny4xNzYgMTYuNDgwOEMxOTcuMTc2IDE5LjIzOTcgMTk0Ljk0IDIxLjQ3NjMgMTkyLjE4MSAyMS40NzYzQzE4OS40MjIgMjEuNDc2MyAxODcuMTg2IDE5LjIzOTcgMTg3LjE4NiAxNi40ODA4QzE4Ny4xODYgMTMuNzIxOSAxODkuNDIyIDExLjQ4NTQgMTkyLjE4MSAxMS40ODU0QzE5NC45NCAxMS40ODU0IDE5Ny4xNzYgMTMuNzIxOSAxOTcuMTc2IDE2LjQ4MDhaIiBmaWxsPSIjQzhENEUzIi8+CjxwYXRoIGQ9Ik0xNzQuMDk5IC0wLjc0MTUzNUMxNzQuMjgzIC0wLjkwOTg0MyAxNzQuNTI0IC0xLjAwMzE3IDE3NC43NzMgLTEuMDAzMTdIMzE4LjQ5QzMxOC43MzkgLTEuMDAzMTcgMzE4Ljk4IC0wLjkwOTg0MyAzMTkuMTY0IC0wLjc0MTUzM1YtMC43NDE1MzNDMzE5LjgzNyAtMC4xMjYzMTYgMzE5LjQwMiAwLjk5NTAwOCAzMTguNDkgMC45OTUwMDhIMTc0Ljc3M0MxNzMuODYxIDAuOTk1MDA4IDE3My40MjYgLTAuMTI2MzE5IDE3NC4wOTkgLTAuNzQxNTM1Vi0wLjc0MTUzNVoiIGZpbGw9IiM1MDY3ODQiLz4KPHBhdGggZD0iTTM0Ljg3NSAxMTkuNzM1TDQyLjU0NjUgMTI2LjEzNkwzMC4zODU1IDE0MC43MTJMMjIuNzE0IDEzNC4zMTFMMzQuODc1IDExOS43MzVaIiBmaWxsPSIjRjNDNkJGIi8+CjxwYXRoIGQ9Ik0yNy4wOTcyIDEyOS4yNTdMMzQuNzY4NyAxMzUuNjU3QzM0Ljc2ODcgMTM1LjY1NyAzOC44MDggMTQxLjExMiAzOS4zMDM0IDE0Ni41OTdDMzkuNDk0MSAxNDguNzA4IDM3LjA2MzMgMTQ5LjI4MiAzNy4wNjMzIDE0OS4yODJMMjEuMzM2NyAxMzYuMTYxTDI3LjA5NzIgMTI5LjI1N1oiIGZpbGw9IiM1MDY3ODQiLz4KPHBhdGggZD0iTTUyLjg5MjEgMzIuODE0NUw5Mi4yNzE4IDY0LjI4NThDMTA0Ljg3NCA5Ni4yOTIzIDM4LjMyMDkgMTMzLjcyMyAzOC4zMjA5IDEzMy43MjNMMjcuODU1NiAxMjYuMDU4QzI3Ljg1NTYgMTI2LjA1OCAzOS42ODg4IDEwOC41MjYgNTAuODA5NSA4MS43Njk5QzU2LjgzMDEgNjcuMjg0MyA1NC41NzMxIDQ4LjE0ODggNTIuODkyMSAzMi44MTQ1WiIgZmlsbD0iIzBENzZCRiIvPgo8cGF0aCBkPSJNMTAzLjI2MiAxMzAuNzI2SDExMy4yNTNWMTQ5LjcwOEgxMDMuMjYyVjEzMC43MjZaIiBmaWxsPSIjRjNDNkJGIi8+CjxwYXRoIGQ9Ik01NC4zMDY3IDQyLjMwNTlDNTAuODEwMSAzNS44MTE4IDQ4LjgxMTcgMzEuMzE1OSA0OS43NzM5IDE3LjgyODFIMTE1LjAxMUMxMjEuMjQ2IDI4LjMxODYgMTI1LjI0MiA1NC4yOTQ5IDEyNS4yNDIgNzUuNzc1NEMxMjUuMjQyIDk3LjI1NTkgMTIyLjI0NSAxMTYuMjM5IDExNS4wMTEgMTQxLjIxNkgxMDAuNzY0QzEwMC43NjQgMTQxLjIxNiA5NC43NzAxIDEwMS4yNTIgOTIuMjcyMyA4Mi43NjlDOTAuOTY3OSA3My4xMTYgNTcuMDE5NyA0Ny4zNDQ1IDU0LjMwNjcgNDIuMzA1OVoiIGZpbGw9IiMxMTlERkYiLz4KPHBhdGggZD0iTTEwMy4yNjIgMTQ0LjQyNkgxMTMuMjUzQzExMy4yNTMgMTQ0LjQyNiAxMTkuODQ5IDE0Ni4wMjcgMTIzLjc0NCAxNDkuOTIxQzEyNS4yNDIgMTUxLjQyIDEyMy43NDQgMTUzLjQxOCAxMjMuNzQ0IDE1My40MThIMTAzLjI2MlYxNDQuNDI2WiIgZmlsbD0iIzUwNjc4NCIvPgo8L2c+Cjwvc3ZnPgo=";
  },
  "6d26": function (e, t, i) {},
  "6e96": function (e, t, i) {
    "use strict";
    i("1002");
  },
  "70b3": function (e, t, i) {
    "use strict";
    i("b252");
  },
  "70d6": function (e, t, i) {},
  7314: function (e, t) {
    e.exports =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuOTk5ODQgMTYuNjY2N0M2LjMyNDg0IDE2LjY2NjcgMy4zMzMxNyAxMy42NzUgMy4zMzMxNyAxMEMzLjMzMzE3IDYuMzI1MDIgNi4zMjQ4NCAzLjMzMzM1IDkuOTk5ODQgMy4zMzMzNUMxMy42NzQ4IDMuMzMzMzUgMTYuNjY2NSA2LjMyNTAyIDE2LjY2NjUgMTBDMTYuNjY2NSAxMy42NzUgMTMuNjc0OCAxNi42NjY3IDkuOTk5ODQgMTYuNjY2N1pNOS45OTk4NCAxLjY2NjY5QzguOTA1NDkgMS42NjY2OSA3LjgyMTg2IDEuODgyMjQgNi44MTA4MSAyLjMwMTAyQzUuNzk5NzYgMi43MTk4MSA0Ljg4MTEgMy4zMzM2NCA0LjEwNzI4IDQuMTA3NDZDMi41NDQ0OCA1LjY3MDI3IDEuNjY2NSA3Ljc4OTg4IDEuNjY2NSAxMEMxLjY2NjUgMTIuMjEwMiAyLjU0NDQ4IDE0LjMyOTggNC4xMDcyOCAxNS44OTI2QzQuODgxMSAxNi42NjY0IDUuNzk5NzYgMTcuMjgwMiA2LjgxMDgxIDE3LjY5OUM3LjgyMTg2IDE4LjExNzggOC45MDU0OSAxOC4zMzM0IDkuOTk5ODQgMTguMzMzNEMxMi4yMSAxOC4zMzM0IDE0LjMyOTYgMTcuNDU1NCAxNS44OTI0IDE1Ljg5MjZDMTcuNDU1MiAxNC4zMjk4IDE4LjMzMzIgMTIuMjEwMiAxOC4zMzMyIDEwQzE4LjMzMzIgOC45MDU2NyAxOC4xMTc2IDcuODIyMDQgMTcuNjk4OCA2LjgxMDk5QzE3LjI4IDUuNzk5OTUgMTYuNjY2MiA0Ljg4MTI5IDE1Ljg5MjQgNC4xMDc0NkMxNS4xMTg2IDMuMzMzNjQgMTQuMTk5OSAyLjcxOTgxIDEzLjE4ODkgMi4zMDEwMkMxMi4xNzc4IDEuODgyMjQgMTEuMDk0MiAxLjY2NjY5IDkuOTk5ODQgMS42NjY2OVoiIGZpbGw9IiNFRjU1M0IiLz4KPHJlY3QgeD0iNi4zNjc2OCIgeT0iNy41NDg1NSIgd2lkdGg9IjEuNjciIGhlaWdodD0iOC42MDM2MyIgdHJhbnNmb3JtPSJyb3RhdGUoLTQ1IDYuMzY3NjggNy41NDg1NSkiIGZpbGw9IiNFRjU1M0IiLz4KPHJlY3QgeD0iMTIuNDUxNyIgeT0iNi4zNjc3MSIgd2lkdGg9IjEuNjciIGhlaWdodD0iOC42MDM2MyIgdHJhbnNmb3JtPSJyb3RhdGUoNDUgMTIuNDUxNyA2LjM2NzcxKSIgZmlsbD0iI0VGNTUzQiIvPgo8L3N2Zz4K";
  },
  7432: function (e, t, i) {},
  7682: function (e, t, i) {},
  7974: function (e, t, i) {},
  "7a18": function (e, t, i) {},
  "822f": function (e, t, i) {
    "use strict";
    i("f8ae");
  },
  8368: function (e, t, i) {
    "use strict";
    i("ae4c");
  },
  8517: function (e, t, i) {},
  "85ec": function (e, t, i) {},
  "87d4": function (e, t, i) {
    e.exports = i.p + "img/file.f5540c43.png";
  },
  "8d7b": function (e, t, i) {},
  "8e37": function (e, t, i) {
    "use strict";
    i("cdc6");
  },
  9080: function (e, t, i) {},
  "91d3": function (e, t, i) {
    "use strict";
    i("2de1");
  },
  9224: function (e) {
    e.exports = JSON.parse(
      '{"name":"sqliteviz","version":"0.23.2","license":"Apache-2.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","test":"vue-cli-service karma","lint":"vue-cli-service lint"},"dependencies":{"codemirror":"^5.57.0","core-js":"^3.6.5","dataurl-to-blob":"^0.0.1","html2canvas":"^1.1.4","jquery":"^3.6.0","nanoid":"^3.1.12","papaparse":"^5.4.1","pivottable":"^2.23.0","plotly.js":"^1.58.4","promise-worker":"^2.0.1","react":"^16.13.1","react-chart-editor":"^0.45.0","react-dom":"^16.13.1","sql.js":"file:./lib/sql-js","vue":"^2.6.11","vue-codemirror":"^4.0.6","vue-js-modal":"^2.0.0-rc.6","vue-multiselect":"^2.1.6","vue-router":"^3.2.0","vue2-teleport":"^1.0.1","vuejs-paginate":"^2.1.0","vuera":"^0.2.7","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.4.0","@vue/cli-plugin-eslint":"^4.4.0","@vue/cli-plugin-router":"^4.4.0","@vue/cli-plugin-vuex":"^4.4.0","@vue/cli-service":"^4.4.0","@vue/eslint-config-standard":"^5.1.2","@vue/test-utils":"^1.1.2","babel-eslint":"^10.1.0","chai":"^4.1.2","chai-as-promised":"^7.1.1","cross-env":"^7.0.3","eslint":"^6.7.2","eslint-plugin-import":"^2.20.2","eslint-plugin-node":"^11.1.0","eslint-plugin-promise":"^4.2.1","eslint-plugin-standard":"^4.0.0","eslint-plugin-vue":"^6.2.2","flush-promises":"^1.0.2","karma":"^3.1.4","karma-firefox-launcher":"^2.1.0","karma-webpack":"^4.0.2","vue-cli-plugin-ui-karma":"^0.2.5","vue-template-compiler":"^2.6.11","workbox-webpack-plugin":"^6.1.5","worker-loader":"^3.0.8"}}'
    );
  },
  "93dd": function (e, t) {
    e.exports =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSIxNyIgaGVpZ2h0PSIxNyIgcng9IjIuNSIgZmlsbD0iIzExOURGRiIgc3Ryb2tlPSIjMEQ3NkJGIi8+CjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2QpIj4KPHBhdGggZD0iTTE1Ljc1IDUuMjVMNi43NSAxNC4yNUwyLjYyNSAxMC4xMjVMMy42ODI1IDkuMDY3NUw2Ljc1IDEyLjEyNzVMMTQuNjkyNSA0LjE5MjVMMTUuNzUgNS4yNVoiIGZpbGw9IndoaXRlIi8+CjwvZz4KPGRlZnM+CjxmaWx0ZXIgaWQ9ImZpbHRlcjBfZCIgeD0iMC42MjUiIHk9IjMuMTkyNSIgd2lkdGg9IjE3LjEyNSIgaGVpZ2h0PSIxNC4wNTc1IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIi8+CjxmZU9mZnNldCBkeT0iMSIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxIi8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAuMTY0NzA2IDAgMCAwIDAgMC4yNDcwNTkgMCAwIDAgMCAwLjM3MjU0OSAwIDAgMCAwLjcgMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvdyIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvdyIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8L3N2Zz4K";
  },
  "9bf4": function (e, t) {
    e.exports =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTE0IiBoZWlnaHQ9IjkwIiB2aWV3Qm94PSIwIDAgMTE0IDkwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNOTYuMzgyOCAxLjkzODk1QzkxLjQyNDQgMC4wOTI4MTQgODYuNjAyMiA1LjYyNTA1IDg1Ljg1OCAxMC42ODE2TDk3LjI4NTEgMTUuNTQ5QzEwMC4xOTQgMTAuNTg1NiAxMDEuMzQxIDMuNzg1MDggOTYuMzgyOCAxLjkzODk1WiIgZmlsbD0iI0YzQzZCRiIvPgo8cGF0aCBkPSJNODQuOTc3NSA5LjEyNDEzQzc1LjA2NTMgMzUuMjAzNSAzMC43MTc5IDQ2LjczNTkgMjEuNDEwNiAzNy43MjY1TDE0LjUzNTkgNzkuNDg1N0M2Ny43NjA3IDg2LjQ5MTIgOTEuOTI2NCA1NS40MTExIDk5LjA5NzMgMTQuNzEzOEw4NC45Nzc1IDkuMTI0MTNaIiBmaWxsPSIjQTJCMUM2Ii8+Cjwvc3ZnPgo=";
  },
  "9ceb": function (e, t, i) {
    "use strict";
    i("b325");
  },
  "9f6c": function (e, t, i) {},
  a1f0: function (e, t, i) {
    "use strict";
    i("5ca7");
  },
  a303: function (e, t, i) {},
  a6ab: function (e, t, i) {
    "use strict";
    i("3c43");
  },
  a96d: function (e, t, i) {
    "use strict";
    i("3a01");
  },
  a9b1: function (e, t, i) {
    "use strict";
    i("8d7b");
  },
  ae4c: function (e, t, i) {},
  b252: function (e, t, i) {},
  b288: function (e, t, i) {},
  b325: function (e, t, i) {},
  b51c: function (e, t, i) {},
  bebf: function (e, t, i) {},
  ca59: function (e, t, i) {},
  cdc6: function (e, t, i) {},
  d2db: function (e, t, i) {
    "use strict";
    i("9080");
  },
  d353: function (e, t, i) {
    "use strict";
    i("8517");
  },
  d9ad: function (e, t, i) {
    "use strict";
    i("a303");
  },
  daef: function (e, t, i) {
    "use strict";
    i("547f");
  },
  db39: function (e, t) {
    e.exports =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExIDlIMTNWN0gxMVY5Wk0xMiAyMEM3LjU5IDIwIDQgMTYuNDEgNCAxMkM0IDcuNTkgNy41OSA0IDEyIDRDMTYuNDEgNCAyMCA3LjU5IDIwIDEyQzIwIDE2LjQxIDE2LjQxIDIwIDEyIDIwWk0xMiAyQzEwLjY4NjggMiA5LjM4NjQyIDIuMjU4NjYgOC4xNzMxNyAyLjc2MTJDNi45NTk5MSAzLjI2Mzc1IDUuODU3NTIgNC4wMDAzNSA0LjkyODkzIDQuOTI4OTNDMy4wNTM1NyA2LjgwNDMgMiA5LjM0Nzg0IDIgMTJDMiAxNC42NTIyIDMuMDUzNTcgMTcuMTk1NyA0LjkyODkzIDE5LjA3MTFDNS44NTc1MiAxOS45OTk3IDYuOTU5OTEgMjAuNzM2MiA4LjE3MzE3IDIxLjIzODhDOS4zODY0MiAyMS43NDEzIDEwLjY4NjggMjIgMTIgMjJDMTQuNjUyMiAyMiAxNy4xOTU3IDIwLjk0NjQgMTkuMDcxMSAxOS4wNzExQzIwLjk0NjQgMTcuMTk1NyAyMiAxNC42NTIyIDIyIDEyQzIyIDEwLjY4NjggMjEuNzQxMyA5LjM4NjQyIDIxLjIzODggOC4xNzMxN0MyMC43MzYyIDYuOTU5OTEgMTkuOTk5NyA1Ljg1NzUyIDE5LjA3MTEgNC45Mjg5M0MxOC4xNDI1IDQuMDAwMzUgMTcuMDQwMSAzLjI2Mzc1IDE1LjgyNjggMi43NjEyQzE0LjYxMzYgMi4yNTg2NiAxMy4zMTMyIDIgMTIgMlYyWk0xMSAxN0gxM1YxMUgxMVYxN1oiIGZpbGw9IiNBMkIxQzYiLz4KPC9zdmc+Cg==";
  },
  dd60: function (e, t, i) {
    "use strict";
    i("7682");
  },
  dd9c: function (e, t, i) {
    "use strict";
    i("345a");
  },
  deb6: function (e, t, i) {},
  df25: function (e, t, i) {},
  dfd4: function (e, t, i) {
    "use strict";
    i("7974");
  },
  e506: function (e, t, i) {},
  ec62: function (e, t, i) {},
  f2b5: function (e, t, i) {
    "use strict";
    i("0cce");
  },
  f4e5: function (e, t, i) {
    "use strict";
    i("b51c");
  },
  f8ae: function (e, t, i) {},
  fc31: function (e, t, i) {},
  feae: function (e, t, i) {},
});
//# sourceMappingURL=app.16ac281e.js.map
