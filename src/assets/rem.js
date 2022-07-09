/*
name：移动端适配
*/

(function(win) {
    var docEl = win.document.documentElement;
    var metaEl = win.document.querySelector("meta[name='viewport']")
    metaEl.setAttribute("content", "initial-scale=.5, maximum-scale=.5, minimum-scale=.5, user-scalable=no viewport-fit=cover")

    function refreshRem() {
        var _width = docEl.getBoundingClientRect().width
        if (_width > 640) {
            _width = 640
        }
        var rem = _width / 640 * 100
        docEl.style.fontSize = rem + "px"
    }
    refreshRem()
    var _t
    win.addEventListener('resize', function() {
        this.clearInterval(_t)
        _t = setTimeout(refreshRem(), 300)
    })
})(window)