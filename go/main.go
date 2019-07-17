package main

import (
	"github.com/gopherjs/vecty"
	"github.com/gopherjs/vecty/elem"
	"github.com/gopherjs/vecty/prop"
)

func main() {
	vecty.SetTitle("Menta Systems")
	vecty.AddStylesheet("style.css")
	vecty.RenderBody(&PageView{})
}

// PageView is our main page component.
type PageView struct {
	vecty.Core
}

// Render implements the vecty.Component interface.
func (p *PageView) Render() vecty.ComponentOrHTML {
	return elem.Body(
		elem.Div(
			vecty.Markup(
				vecty.Class("container"),
			),
			elem.Image(
				vecty.Markup(
					vecty.Class("logo"),
					prop.Src("logo.png"),
				),
			),
			elem.Div(
				vecty.Markup(
					vecty.Class("text"),
				),
				vecty.Text(
					"En construcción",
				),
			),
		),
		elem.Footer(
			elem.Anchor(
				vecty.Markup(
					prop.Href("mailto:info@mentasystems.com"),
					vecty.Class("mail"),
				),
				vecty.Text(
					"info@mentasystems.com",
				),
			),
			elem.Span(
				vecty.Markup(
					vecty.Class("copyright"),
				),
				vecty.Text(
					"©2019 Menta Systems",
				),
			),
		),
	)
}
