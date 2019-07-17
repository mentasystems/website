include karax / prelude, jsutils

proc createDom(): VNode =
  result = buildHtml(tdiv):
    tdiv(class="container"):
        img(class="logo", src="logo.png")
        tdiv(class="text"):
            text "En construcción"
    footer():
        a(class="mail", href="mailto:info@mentasystems.com"):
            text "info@mentasystems.com"
        span(class="copyright"):
            text "©2019 Menta Systems"


document.title = "Menta Systems"
setRenderer createDom
addStylesheet("style.css")
addFavicon("favicon.png")