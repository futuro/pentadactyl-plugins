hints.addMode('l', "Play the selected url with vlc", function(elem) {
    if (elem.form)
        var { url, postData, elements } = DOM(elem).formData;
    else
        var url = elem.getAttribute("href");

    if (!url || /^javascript:/.test(url))
        return;

    url = services.io.newURI(url, null, util.newURI(elem.ownerDocument.URL)).spec;

    let escape = util.bound.shellEscape;
    dactyl.execute("silent ! vlc ".concat(escape(url)).concat(" vlc://quit"), null, true);
});

/* vim:se sts=4 sw=4 et: */
