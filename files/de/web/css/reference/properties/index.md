---
title: CSS-Eigenschaften
short-title: Properties
slug: Web/CSS/Reference/Properties
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Eine [CSS](/de/docs/Web/CSS) **_Eigenschaft_** ist ein Parameter, der in einer [CSS-Deklaration](/de/docs/Web/CSS/Guides/Syntax/Introduction#css_declarations) verwendet wird und es Ihnen ermöglicht, bestimmte Aspekte ausgewählter Elemente zu gestalten.
Zum Beispiel wird die {{CSSxRef("opacity")}}-Eigenschaft verwendet, um die Deckkraft eines ausgewählten Elements festzulegen, sodass Sie steuern können, ob der Inhalt hinter diesem Element sichtbar ist:

```css
/* Set 0.8 opacity on <img> elements */
img {
  opacity: 0.8;
}
```

Jede Eigenschaft hat einen Namen (z.B. `opacity`), einen Wert (z.B. `0.8`) und ein definiertes Verhalten für die Darstellung des Dokuments.
CSS definiert auch Kurzform-Eigenschaften, sodass Sie mehrere verwandte Eigenschaften in einer einzigen Deklaration angeben können.
Zum Beispiel ist die {{CSSxRef("margin")}}-Eigenschaft eine Kurzform für {{CSSxRef("margin-top")}}, {{CSSxRef("margin-right")}}, {{CSSxRef("margin-bottom")}} und {{CSSxRef("margin-left")}}, die den Rand aller vier Seiten eines Elements festlegt:

```css
/* Give <img> elements 1rem of margin */
img {
  margin: 1rem;
}
```

## Syntax

```css
selector {
  property: value;
}
```

## Alphabetisches Verzeichnis der Eigenschaften

Standard-Eigenschaften, die in CSS-Spezifikationen definiert sind, umfassen Folgendes:

### Sonstiges

- [Benutzerdefinierte Eigenschaften (`--*`): CSS-Variablen](/de/docs/Web/CSS/Reference/Properties/--*)

### A

- {{CSSxRef("accent-color")}}
- {{CSSxRef("align-content")}}
- {{CSSxRef("align-items")}}
- {{CSSxRef("align-self")}}
- {{CSSxRef("alignment-baseline")}}
- {{CSSxRef("all")}} (Kurzform)
- {{CSSxRef("anchor-name")}}
- {{CSSxRef("animation-composition")}}
- {{CSSxRef("animation-delay")}}
- {{CSSxRef("animation-direction")}}
- {{CSSxRef("animation-duration")}}
- {{CSSxRef("animation-fill-mode")}}
- {{CSSxRef("animation-iteration-count")}}
- {{CSSxRef("animation-name")}}
- {{CSSxRef("animation-play-state")}}
- {{CSSxRef("animation-range-end")}}
- {{CSSxRef("animation-range-start")}}
- {{CSSxRef("animation-range")}} (Kurzform)
- {{CSSxRef("animation-timeline")}}
- {{CSSxRef("animation-timing-function")}}
- {{CSSxRef("animation")}} (Kurzform)
- {{CSSxRef("appearance")}}
- {{CSSxRef("aspect-ratio")}}

### B

- {{CSSxRef("backdrop-filter")}}
- {{CSSxRef("backface-visibility")}}
- {{CSSxRef("background-attachment")}}
- {{CSSxRef("background-blend-mode")}}
- {{CSSxRef("background-clip")}}
- {{CSSxRef("background-color")}}
- {{CSSxRef("background-image")}}
- {{CSSxRef("background-origin")}}
- {{CSSxRef("background-position-x")}}
- {{CSSxRef("background-position-y")}}
- {{CSSxRef("background-position")}}
- {{CSSxRef("background-repeat")}}
- {{CSSxRef("background-size")}}
- {{CSSxRef("background")}} (Kurzform)
- {{CSSxRef("block-size")}}

### Border-\*

- {{CSSxRef("border-block-color")}}
- {{CSSxRef("border-block-end-color")}}
- {{CSSxRef("border-block-end-style")}}
- {{CSSxRef("border-block-end-width")}}
- {{CSSxRef("border-block-end")}} (Kurzform)
- {{CSSxRef("border-block-start-color")}}
- {{CSSxRef("border-block-start-style")}}
- {{CSSxRef("border-block-start-width")}}
- {{CSSxRef("border-block-start")}} (Kurzform)
- {{CSSxRef("border-block-style")}}
- {{CSSxRef("border-block-width")}}
- {{CSSxRef("border-block")}} (Kurzform)
- {{CSSxRef("border-bottom-color")}}
- {{CSSxRef("border-bottom-left-radius")}}
- {{CSSxRef("border-bottom-right-radius")}}
- {{CSSxRef("border-bottom-style")}}
- {{CSSxRef("border-bottom-width")}}
- {{CSSxRef("border-bottom")}} (Kurzform)
- {{CSSxRef("border-collapse")}}
- {{CSSxRef("border-color")}} (Kurzform)
- {{CSSxRef("border-end-end-radius")}}
- {{CSSxRef("border-end-start-radius")}}
- {{CSSxRef("border-image-outset")}}
- {{CSSxRef("border-image-repeat")}}
- {{CSSxRef("border-image-slice")}}
- {{CSSxRef("border-image-source")}}
- {{CSSxRef("border-image-width")}}
- {{CSSxRef("border-image")}} (Kurzform)
- {{CSSxRef("border-inline-color")}}
- {{CSSxRef("border-inline-end-color")}}
- {{CSSxRef("border-inline-end-style")}}
- {{CSSxRef("border-inline-end-width")}}
- {{CSSxRef("border-inline-end")}} (Kurzform)
- {{CSSxRef("border-inline-start-color")}}
- {{CSSxRef("border-inline-start-style")}}
- {{CSSxRef("border-inline-start-width")}}
- {{CSSxRef("border-inline-start")}} (Kurzform)
- {{CSSxRef("border-inline-style")}}
- {{CSSxRef("border-inline-width")}}
- {{CSSxRef("border-inline")}} (Kurzform)
- {{CSSxRef("border-left-color")}}
- {{CSSxRef("border-left-style")}}
- {{CSSxRef("border-left-width")}}
- {{CSSxRef("border-left")}} (Kurzform)
- {{CSSxRef("border-radius")}} (Kurzform)
- {{CSSxRef("border-right-color")}}
- {{CSSxRef("border-right-style")}}
- {{CSSxRef("border-right-width")}}
- {{CSSxRef("border-right")}} (Kurzform)
- {{CSSxRef("border-spacing")}}
- {{CSSxRef("border-start-end-radius")}}
- {{CSSxRef("border-start-start-radius")}}
- {{CSSxRef("border-style")}} (Kurzform)
- {{CSSxRef("border-top-color")}}
- {{CSSxRef("border-top-left-radius")}}
- {{CSSxRef("border-top-right-radius")}}
- {{CSSxRef("border-top-style")}}
- {{CSSxRef("border-top-width")}}
- {{CSSxRef("border-top")}} (Kurzform)
- {{CSSxRef("border-width")}} (Kurzform)
- {{CSSxRef("border")}} (Kurzform)

### B - C

- {{CSSxRef("bottom")}}
- {{CSSxRef("box-align")}}
- {{CSSxRef("box-decoration-break")}}
- {{CSSxRef("box-direction")}}
- {{CSSxRef("box-flex-group")}}
- {{CSSxRef("box-flex")}}
- {{CSSxRef("box-lines")}}
- {{CSSxRef("box-ordinal-group")}}
- {{CSSxRef("box-orient")}}
- {{CSSxRef("box-pack")}}
- {{CSSxRef("box-shadow")}}
- {{CSSxRef("box-sizing")}}
- {{CSSxRef("break-after")}}
- {{CSSxRef("break-before")}}
- {{CSSxRef("break-inside")}}
- {{CSSxRef("caption-side")}}
- {{CSSxRef("caret-color")}}
- {{CSSxRef("clear")}}
- {{CSSxRef("clip-path")}}
- {{CSSxRef("clip-rule")}}
- {{CSSxRef("clip")}}
- {{CSSxRef("color-interpolation-filters")}}
- {{CSSxRef("color-interpolation")}}
- {{CSSxRef("color-scheme")}}
- {{CSSxRef("color")}}
- {{CSSxRef("column-count")}}
- {{CSSxRef("column-fill")}}
- {{CSSxRef("column-gap")}}
- {{CSSxRef("column-rule-color")}}
- {{CSSxRef("column-rule-style")}}
- {{CSSxRef("column-rule-width")}}
- {{CSSxRef("column-rule")}} (Kurzform)
- {{CSSxRef("column-span")}}
- {{CSSxRef("column-width")}}
- {{CSSxRef("columns")}} (Kurzform)
- {{CSSxRef("contain-intrinsic-block-size")}}
- {{CSSxRef("contain-intrinsic-height")}}
- {{CSSxRef("contain-intrinsic-inline-size")}}
- {{CSSxRef("contain-intrinsic-size")}} (Kurzform)
- {{CSSxRef("contain-intrinsic-width")}}
- {{CSSxRef("contain")}}
- {{CSSxRef("container-name")}}
- {{CSSxRef("container-type")}}
- {{CSSxRef("container")}} (Kurzform)
- {{CSSxRef("content-visibility")}}
- {{CSSxRef("content")}}
- {{CSSxRef("counter-increment")}}
- {{CSSxRef("counter-reset")}}
- {{CSSxRef("counter-set")}}
- {{CSSxRef("cursor")}}
- {{CSSxRef("cx")}}
- {{CSSxRef("cy")}}

### D - F

- {{CSSxRef("d")}}
- {{CSSxRef("direction")}}
- {{CSSxRef("display")}}
- {{CSSxRef("dominant-baseline")}}
- {{CSSxRef("empty-cells")}}
- {{CSSxRef("field-sizing")}}
- {{CSSxRef("fill-opacity")}}
- {{CSSxRef("fill-rule")}}
- {{CSSxRef("fill")}}
- {{CSSxRef("filter")}}
- {{CSSxRef("flex-basis")}}
- {{CSSxRef("flex-direction")}}
- {{CSSxRef("flex-flow")}} (Kurzform)
- {{CSSxRef("flex-grow")}}
- {{CSSxRef("flex-shrink")}}
- {{CSSxRef("flex-wrap")}}
- {{CSSxRef("flex")}} (Kurzform)
- {{CSSxRef("float")}}
- {{CSSxRef("flood-color")}}
- {{CSSxRef("flood-opacity")}}
- {{CSSxRef("font-family")}}
- {{CSSxRef("font-feature-settings")}}
- {{CSSxRef("font-kerning")}}
- {{CSSxRef("font-language-override")}}
- {{CSSxRef("font-optical-sizing")}}
- {{CSSxRef("font-palette")}}
- {{CSSxRef("font-size-adjust")}}
- {{CSSxRef("font-size")}}
- {{CSSxRef("font-smooth")}}
- {{CSSxRef("font-stretch")}}
- {{CSSxRef("font-style")}}
- {{CSSxRef("font-synthesis-position")}}
- {{CSSxRef("font-synthesis-small-caps")}}
- {{CSSxRef("font-synthesis-style")}}
- {{CSSxRef("font-synthesis-weight")}}
- {{CSSxRef("font-synthesis")}} (Kurzform)
- {{CSSxRef("font-variant-alternates")}}
- {{CSSxRef("font-variant-caps")}}
- {{CSSxRef("font-variant-east-asian")}}
- {{CSSxRef("font-variant-emoji")}}
- {{CSSxRef("font-variant-ligatures")}}
- {{CSSxRef("font-variant-numeric")}}
- {{CSSxRef("font-variant-position")}}
- {{CSSxRef("font-variant")}} (Kurzform)
- {{CSSxRef("font-variation-settings")}}
- {{CSSxRef("font-weight")}}
- {{CSSxRef("font")}} (Kurzform)
- {{CSSxRef("forced-color-adjust")}}

### G - I

- {{CSSxRef("gap")}} (Kurzform)
- {{CSSxRef("grid-area")}} (Kurzform)
- {{CSSxRef("grid-auto-columns")}}
- {{CSSxRef("grid-auto-flow")}}
- {{CSSxRef("grid-auto-rows")}}
- {{CSSxRef("grid-column-end")}}
- {{CSSxRef("grid-column-start")}}
- {{CSSxRef("grid-column")}} (Kurzform)
- {{CSSxRef("grid-row-end")}}
- {{CSSxRef("grid-row-start")}}
- {{CSSxRef("grid-row")}} (Kurzform)
- {{CSSxRef("grid-template-areas")}}
- {{CSSxRef("grid-template-columns")}}
- {{CSSxRef("grid-template-rows")}}
- {{CSSxRef("grid-template")}} (Kurzform)
- {{CSSxRef("grid")}} (Kurzform)
- {{CSSxRef("hanging-punctuation")}}
- {{CSSxRef("height")}}
- {{CSSxRef("hyphenate-character")}}
- {{CSSxRef("hyphenate-limit-chars")}}
- {{CSSxRef("hyphens")}}
- {{CSSxRef("image-orientation")}}
- {{CSSxRef("image-rendering")}}
- {{CSSxRef("image-resolution")}}
- {{CSSxRef("initial-letter")}}
- {{CSSxRef("inline-size")}}
- {{CSSxRef("inset-block-end")}}
- {{CSSxRef("inset-block-start")}}
- {{CSSxRef("inset-block")}} (Kurzform)
- {{CSSxRef("inset-block")}} (Kurzform)
- {{CSSxRef("inset-inline-end")}}
- {{CSSxRef("inset-inline-start")}}
- {{CSSxRef("inset-inline")}} (Kurzform)
- {{CSSxRef("inset-inline")}} (Kurzform)
- {{CSSxRef("inset")}} (Kurzform)
- {{CSSxRef("inset")}} (Kurzform)
- {{CSSxRef("interpolate-size")}}
- {{CSSxRef("isolation")}}

### J - M

- {{CSSxRef("justify-content")}}
- {{CSSxRef("justify-items")}}
- {{CSSxRef("justify-self")}}
- {{CSSxRef("left")}}
- {{CSSxRef("letter-spacing")}}
- {{CSSxRef("lighting-color")}}
- {{CSSxRef("line-break")}}
- {{CSSxRef("line-clamp")}}
- {{CSSxRef("line-height-step")}}
- {{CSSxRef("line-height")}}
- {{CSSxRef("list-style-image")}}
- {{CSSxRef("list-style-position")}}
- {{CSSxRef("list-style-type")}}
- {{CSSxRef("list-style")}} (Kurzform)
- {{CSSxRef("list-style")}} (Kurzform)
- {{CSSxRef("margin-block-end")}}
- {{CSSxRef("margin-block-start")}}
- {{CSSxRef("margin-block")}} (Kurzform)
- {{CSSxRef("margin-bottom")}}
- {{CSSxRef("margin-inline-end")}}
- {{CSSxRef("margin-inline-start")}}
- {{CSSxRef("margin-inline")}} (Kurzform)
- {{CSSxRef("margin-left")}}
- {{CSSxRef("margin-right")}}
- {{CSSxRef("margin-top")}}
- {{CSSxRef("margin-trim")}}
- {{CSSxRef("margin")}} (Kurzform)
- {{CSSxRef("marker-end")}}
- {{CSSxRef("marker-mid")}}
- {{CSSxRef("marker-start")}}
- {{CSSxRef("marker")}}
- {{CSSxRef("mask-border-mode")}}
- {{CSSxRef("mask-border-outset")}}
- {{CSSxRef("mask-border-repeat")}}
- {{CSSxRef("mask-border-slice")}}
- {{CSSxRef("mask-border-source")}}
- {{CSSxRef("mask-border-width")}}
- {{CSSxRef("mask-border")}} (Kurzform)
- {{CSSxRef("mask-clip")}}
- {{CSSxRef("mask-composite")}}
- {{CSSxRef("mask-image")}}
- {{CSSxRef("mask-mode")}}
- {{CSSxRef("mask-origin")}}
- {{CSSxRef("mask-position")}}
- {{CSSxRef("mask-repeat")}}
- {{CSSxRef("mask-size")}}
- {{CSSxRef("mask-type")}}
- {{CSSxRef("mask")}} (Kurzform)
- {{CSSxRef("math-depth")}}
- {{CSSxRef("math-shift")}}
- {{CSSxRef("math-style")}}
- {{CSSxRef("max-block-size")}}
- {{CSSxRef("max-height")}}
- {{CSSxRef("max-inline-size")}}
- {{CSSxRef("max-width")}}
- {{CSSxRef("min-block-size")}}
- {{CSSxRef("min-height")}}
- {{CSSxRef("min-inline-size")}}
- {{CSSxRef("min-width")}}
- {{CSSxRef("mix-blend-mode")}}

### O - P

- {{CSSxRef("object-fit")}}
- {{CSSxRef("object-position")}}
- {{CSSxRef("offset-anchor")}}
- {{CSSxRef("offset-distance")}}
- {{CSSxRef("offset-path")}}
- {{CSSxRef("offset-position")}}
- {{CSSxRef("offset-rotate")}}
- {{CSSxRef("offset")}} (Kurzform)
- {{CSSxRef("opacity")}}
- {{CSSxRef("order")}}
- {{CSSxRef("orphans")}}
- {{CSSxRef("outline-color")}}
- {{CSSxRef("outline-offset")}}
- {{CSSxRef("outline-style")}}
- {{CSSxRef("outline-width")}}
- {{CSSxRef("outline")}} (Kurzform)
- {{CSSxRef("overflow-anchor")}}
- {{CSSxRef("overflow-block")}}
- {{CSSxRef("overflow-clip-margin")}}
- {{CSSxRef("overflow-inline")}}
- {{CSSxRef("overflow-wrap")}}
- {{CSSxRef("overflow-x")}}
- {{CSSxRef("overflow-y")}}
- {{CSSxRef("overflow")}} (Kurzform)
- {{CSSxRef("overlay")}}
- {{CSSxRef("overscroll-behavior-block")}}
- {{CSSxRef("overscroll-behavior-inline")}}
- {{CSSxRef("overscroll-behavior-x")}}
- {{CSSxRef("overscroll-behavior-y")}}
- {{CSSxRef("overscroll-behavior")}} (Kurzform)
- {{CSSxRef("padding-block-end")}}
- {{CSSxRef("padding-block-start")}}
- {{CSSxRef("padding-block")}} (Kurzform)
- {{CSSxRef("padding-bottom")}}
- {{CSSxRef("padding-inline-end")}}
- {{CSSxRef("padding-inline-start")}}
- {{CSSxRef("padding-inline")}} (Kurzform)
- {{CSSxRef("padding-left")}}
- {{CSSxRef("padding-right")}}
- {{CSSxRef("padding-top")}}
- {{CSSxRef("padding")}} (Kurzform)
- {{CSSxRef("page-break-after")}}
- {{CSSxRef("page-break-before")}}
- {{CSSxRef("page-break-inside")}}
- {{CSSxRef("page")}}
- {{CSSxRef("paint-order")}}
- {{CSSxRef("perspective-origin")}}
- {{CSSxRef("perspective")}}
- {{CSSxRef("place-content")}} (Kurzform)
- {{CSSxRef("place-items")}} (Kurzform)
- {{CSSxRef("place-self")}} (Kurzform)
- {{CSSxRef("pointer-events")}}
- {{CSSxRef("position-anchor")}}
- {{CSSxRef("position-area")}}
- {{CSSxRef("position-try-fallbacks")}}
- {{CSSxRef("position-try-order")}}
- {{CSSxRef("position-try")}} (Kurzform)
- {{CSSxRef("position-visibility")}}
- {{CSSxRef("position")}}
- {{CSSxRef("print-color-adjust")}}

### Q - S

- {{CSSxRef("quotes")}}
- {{CSSxRef("r")}}
- {{CSSxRef("reading-flow")}}
- {{CSSxRef("reading-order")}}
- {{CSSxRef("resize")}}
- {{CSSxRef("right")}}
- {{CSSxRef("rotate")}}
- {{CSSxRef("row-gap")}}
- {{CSSxRef("ruby-align")}}
- {{CSSxRef("ruby-position")}}
- {{CSSxRef("rx")}}
- {{CSSxRef("ry")}}
- {{CSSxRef("scale")}}
- {{CSSxRef("scroll-behavior")}}
- {{CSSxRef("scroll-margin-block-end")}}
- {{CSSxRef("scroll-margin-block-start")}}
- {{CSSxRef("scroll-margin-block")}} (Kurzform)
- {{CSSxRef("scroll-margin-bottom")}}
- {{CSSxRef("scroll-margin-inline-end")}}
- {{CSSxRef("scroll-margin-inline-start")}}
- {{CSSxRef("scroll-margin-inline")}} (Kurzform)
- {{CSSxRef("scroll-margin-left")}}
- {{CSSxRef("scroll-margin-right")}}
- {{CSSxRef("scroll-margin-top")}}
- {{CSSxRef("scroll-margin")}} (Kurzform)
- {{CSSxRef("scroll-marker-group")}}
- {{CSSxRef("scroll-padding-block-end")}}
- {{CSSxRef("scroll-padding-block-start")}}
- {{CSSxRef("scroll-padding-block")}} (Kurzform)
- {{CSSxRef("scroll-padding-bottom")}}
- {{CSSxRef("scroll-padding-inline-end")}}
- {{CSSxRef("scroll-padding-inline-start")}}
- {{CSSxRef("scroll-padding-inline")}} (Kurzform)
- {{CSSxRef("scroll-padding-left")}}
- {{CSSxRef("scroll-padding-right")}}
- {{CSSxRef("scroll-padding-top")}}
- {{CSSxRef("scroll-padding")}} (Kurzform)
- {{CSSxRef("scroll-snap-align")}}
- {{CSSxRef("scroll-snap-stop")}}
- {{CSSxRef("scroll-snap-type")}}
- {{CSSxRef("scroll-timeline-axis")}}
- {{CSSxRef("scroll-timeline-name")}}
- {{CSSxRef("scroll-timeline")}} (Kurzform)
- {{CSSxRef("scrollbar-color")}}
- {{CSSxRef("scrollbar-gutter")}}
- {{CSSxRef("scrollbar-width")}}
- {{CSSxRef("shape-image-threshold")}}
- {{CSSxRef("shape-margin")}}
- {{CSSxRef("shape-outside")}}
- {{CSSxRef("shape-rendering")}}
- {{CSSxRef("speak-as")}}
- {{CSSxRef("stop-color")}}
- {{CSSxRef("stop-opacity")}}
- {{CSSxRef("stroke-dasharray")}}
- {{CSSxRef("stroke-dashoffset")}}
- {{CSSxRef("stroke-linecap")}}
- {{CSSxRef("stroke-linejoin")}}
- {{CSSxRef("stroke-miterlimit")}}
- {{CSSxRef("stroke-opacity")}}
- {{CSSxRef("stroke-width")}}
- {{CSSxRef("stroke")}}

### T - Z

- {{CSSxRef("tab-size")}}
- {{CSSxRef("table-layout")}}
- {{CSSxRef("text-align-last")}}
- {{CSSxRef("text-align")}}
- {{CSSxRef("text-anchor")}}
- {{CSSxRef("text-box-edge")}}
- {{CSSxRef("text-box-trim")}}
- {{CSSxRef("text-box")}} (Kurzform)
- {{CSSxRef("text-combine-upright")}}
- {{CSSxRef("text-decoration-color")}}
- {{CSSxRef("text-decoration-line")}}
- {{CSSxRef("text-decoration-skip-ink")}}
- {{CSSxRef("text-decoration-skip")}}
- {{CSSxRef("text-decoration-style")}}
- {{CSSxRef("text-decoration-thickness")}}
- {{CSSxRef("text-decoration")}} (Kurzform)
- {{CSSxRef("text-emphasis-color")}}
- {{CSSxRef("text-emphasis-position")}}
- {{CSSxRef("text-emphasis-style")}}
- {{CSSxRef("text-emphasis")}} (Kurzform)
- {{CSSxRef("text-indent")}}
- {{CSSxRef("text-justify")}}
- {{CSSxRef("text-orientation")}}
- {{CSSxRef("text-overflow")}}
- {{CSSxRef("text-rendering")}}
- {{CSSxRef("text-shadow")}}
- {{CSSxRef("text-size-adjust")}}
- {{CSSxRef("text-spacing-trim")}}
- {{CSSxRef("text-transform")}}
- {{CSSxRef("text-underline-offset")}}
- {{CSSxRef("text-underline-position")}}
- {{CSSxRef("text-wrap-mode")}}
- {{CSSxRef("text-wrap-style")}}
- {{CSSxRef("text-wrap")}} (Kurzform)
- {{CSSxRef("timeline-scope")}}
- {{CSSxRef("top")}}
- {{CSSxRef("touch-action")}}
- {{CSSxRef("transform-box")}}
- {{CSSxRef("transform-origin")}}
- {{CSSxRef("transform-style")}}
- {{CSSxRef("transform")}}
- {{CSSxRef("transition-behavior")}}
- {{CSSxRef("transition-delay")}}
- {{CSSxRef("transition-duration")}}
- {{CSSxRef("transition-property")}}
- {{CSSxRef("transition-timing-function")}}
- {{CSSxRef("transition")}} (Kurzform)
- {{CSSxRef("translate")}}
- {{CSSxRef("unicode-bidi")}}
- {{CSSxRef("user-modify")}}
- {{CSSxRef("user-select")}}
- {{CSSxRef("vector-effect")}}
- {{CSSxRef("vertical-align")}}
- {{CSSxRef("view-timeline-axis")}}
- {{CSSxRef("view-timeline-inset")}}
- {{CSSxRef("view-timeline-name")}}
- {{CSSxRef("view-timeline")}} (Kurzform)
- {{CSSxRef("view-transition-class")}}
- {{CSSxRef("view-transition-name")}}
- {{CSSxRef("visibility")}}
- {{CSSxRef("white-space-collapse")}}
- {{CSSxRef("white-space")}}
- {{CSSxRef("widows")}}
- {{CSSxRef("width")}}
- {{CSSxRef("will-change")}}
- {{CSSxRef("word-break")}}
- {{CSSxRef("word-spacing")}}
- {{CSSxRef("writing-mode")}}
- {{CSSxRef("x")}}
- {{CSSxRef("y")}}
- {{CSSxRef("z-index")}}
- {{CSSxRef("zoom")}}

### Nicht-standardisierte Eigenschaften

Nicht-standardisierte oder herstellerspezifische Eigenschaften umfassen Folgendes:

#### `-moz-` Präfix

- {{CSSxRef("-moz-float-edge")}}
- {{CSSxRef("-moz-force-broken-image-icon")}}
- {{CSSxRef("-moz-orient")}}
- {{CSSxRef("-moz-user-focus")}}
- {{CSSxRef("-moz-user-input")}}

#### `-webkit-` Präfix

- {{CSSxRef("-webkit-box-reflect")}}
- {{CSSxRef("-webkit-border-before")}} (Kurzform)
- {{CSSxRef("-webkit-mask-box-image")}} (Kurzform)
- {{CSSxRef("-webkit-mask-composite")}}
- {{CSSxRef("-webkit-mask-position-x")}}
- {{CSSxRef("-webkit-mask-position-y")}}
- {{CSSxRef("-webkit-mask-repeat-x")}}
- {{CSSxRef("-webkit-mask-repeat-y")}}
- {{CSSxRef("-webkit-tap-highlight-color")}}
- {{CSSxRef("-webkit-text-fill-color")}}
- {{CSSxRef("-webkit-text-security")}}
- {{CSSxRef("-webkit-text-stroke")}} (Kurzform)
- {{CSSxRef("-webkit-text-stroke-color")}}
- {{CSSxRef("-webkit-text-stroke-width")}}
- {{CSSxRef("-webkit-touch-callout")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax/Introduction)
- [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements)
- [Firefox (-moz-) herstellerspezifische CSS-Erweiterungen](/de/docs/Web/CSS/Reference/Mozilla_extensions)
- [WebKit (-webkit-) herstellerspezifische CSS-Erweiterungen](/de/docs/Web/CSS/Reference/Webkit_extensions)
- {{Glossary("Vendor_prefix", "Herstellerpräfix")}}
