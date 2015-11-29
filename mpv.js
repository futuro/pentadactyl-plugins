hints.addMode('m', "Play the selected url with mpv", function(elem) {
    if (elem.form)
        var { url, postData, elements } = DOM(elem).formData;
    else
        var url = elem.getAttribute("href");

    if (!url || /^javascript:/.test(url))
        return;

    url = services.io.newURI(url, null, util.newURI(elem.ownerDocument.URL)).spec;

    let escape = util.bound.shellEscape;
    dactyl.execute("silent ! mpv --force-window ".concat(escape(url)), null, true);
});

hints.addMode('M', "Play the selected url with mpv and no video", function(elem) {
    if (elem.form){
        var { url, postData, elements } = DOM(elem).formData;
    }else{
        var url = elem.getAttribute("href");
    }

    if (!url || /^javascript:/.test(url)) { return; }

    url = services.io.newURI(url, null, util.newURI(elem.ownerDocument.URL)).spec;

    let escape = util.bound.shellEscape;
    dactyl.execute("silent ! mpv -vo null ".concat(escape(url)), null, true);
});

hints.addMode('n', "Play the selected imgur 'gifv'  with mpv", function(elem) {
    if (elem.form)
        var { url, postData, elements } = DOM(elem).formData;
    else
        var url = elem.getAttribute("href");

    if (!url || /^javascript:/.test(url))
        return;

    url = services.io.newURI(url, null, util.newURI(elem.ownerDocument.URL)).spec;
    url.replace(/.gifv/, '.mp4');

    let escape = util.bound.shellEscape;
    dactyl.execute("silent ! mpv ".concat(escape(url)), null, true);
});

/* vim:se sts=4 sw=4 et: */
