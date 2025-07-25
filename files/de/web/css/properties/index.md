---
title: CSS-Eigenschaften
slug: Web/CSS/Properties
l10n:
  sourceCommit: 5878ceaae26e3873d5122fa3c294896fe8092be6
---

Eine [CSS](/de/docs/Web/CSS) **_Eigenschaft_** ist ein Parameter, der in einer [CSS-Deklaration](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declarations) verwendet wird und Ihnen erlaubt, bestimmte Aspekte der ausgewählten Elemente zu gestalten. Zum Beispiel wird die {{CSSxRef("opacity")}}-Eigenschaft verwendet, um die Transparenz eines ausgewählten Elements festzulegen, wodurch Sie steuern können, ob Inhalt hinter diesem Element sichtbar ist:

```css
/* Set 0.8 opacity on <img> elements */
img {
  opacity: 0.8;
}
```

Jede Eigenschaft hat einen Namen (z.B. `opacity`), einen Wert (z.B. `0.8`) und ein definiertes Verhalten auf die Darstellung des Dokuments. CSS definiert auch Kurzeigenschaften, sodass Sie mehrere verwandte Eigenschaften in einer einzigen Deklaration angeben können. Zum Beispiel ist die {{CSSxRef("margin")}}-Eigenschaft eine Kurzform für {{CSSxRef("margin-top")}}, {{CSSxRef("margin-right")}}, {{CSSxRef("margin-bottom")}} und {{CSSxRef("margin-left")}}, die den Abstand zu allen vier Seiten eines Elements festlegt:

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

Von CSS-Spezifikationen definierte Standard-Eigenschaften umfassen die folgenden:

### Verschiedenes

- [Benutzerdefinierte Eigenschaften (`--*`): CSS-Variablen](/de/docs/Web/CSS/--*)

### A

- {{CSSxRef("accent-color")}}
- {{CSSxRef("align-content")}}
- {{CSSxRef("align-items")}}
- {{CSSxRef("align-self")}}
- {{CSSxRef("alignment-baseline")}}
- {{CSSxRef("all")}} (Kurzeigenschaft)
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
- {{CSSxRef("animation-range")}} (Kurzeigenschaft)
- {{CSSxRef("animation-timeline")}}
- {{CSSxRef("animation-timing-function")}}
- {{CSSxRef("animation")}} (Kurzeigenschaft)
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
- {{CSSxRef("background")}} (Kurzeigenschaft)
- {{CSSxRef("block-size")}}

### Border-\*

- {{CSSxRef("border-block-color")}}
- {{CSSxRef("border-block-end-color")}}
- {{CSSxRef("border-block-end-style")}}
- {{CSSxRef("border-block-end-width")}}
- {{CSSxRef("border-block-end")}} (Kurzeigenschaft)
- {{CSSxRef("border-block-start-color")}}
- {{CSSxRef("border-block-start-style")}}
- {{CSSxRef("border-block-start-width")}}
- {{CSSxRef("border-block-start")}} (Kurzeigenschaft)
- {{CSSxRef("border-block-style")}}
- {{CSSxRef("border-block-width")}}
- {{CSSxRef("border-block")}} (Kurzeigenschaft)
- {{CSSxRef("border-bottom-color")}}
- {{CSSxRef("border-bottom-left-radius")}}
- {{CSSxRef("border-bottom-right-radius")}}
- {{CSSxRef("border-bottom-style")}}
- {{CSSxRef("border-bottom-width")}}
- {{CSSxRef("border-bottom")}} (Kurzeigenschaft)
- {{CSSxRef("border-collapse")}}
- {{CSSxRef("border-color")}} (Kurzeigenschaft)
- {{CSSxRef("border-end-end-radius")}}
- {{CSSxRef("border-end-start-radius")}}
- {{CSSxRef("border-image-outset")}}
- {{CSSxRef("border-image-repeat")}}
- {{CSSxRef("border-image-slice")}}
- {{CSSxRef("border-image-source")}}
- {{CSSxRef("border-image-width")}}
- {{CSSxRef("border-image")}} (Kurzeigenschaft)
- {{CSSxRef("border-inline-color")}}
- {{CSSxRef("border-inline-end-color")}}
- {{CSSxRef("border-inline-end-style")}}
- {{CSSxRef("border-inline-end-width")}}
- {{CSSxRef("border-inline-end")}} (Kurzeigenschaft)
- {{CSSxRef("border-inline-start-color")}}
- {{CSSxRef("border-inline-start-style")}}
- {{CSSxRef("border-inline-start-width")}}
- {{CSSxRef("border-inline-start")}} (Kurzeigenschaft)
- {{CSSxRef("border-inline-style")}}
- {{CSSxRef("border-inline-width")}}
- {{CSSxRef("border-inline")}} (Kurzeigenschaft)
- {{CSSxRef("border-left-color")}}
- {{CSSxRef("border-left-style")}}
- {{CSSxRef("border-left-width")}}
- {{CSSxRef("border-left")}} (Kurzeigenschaft)
- {{CSSxRef("border-radius")}} (Kurzeigenschaft)
- {{CSSxRef("border-right-color")}}
- {{CSSxRef("border-right-style")}}
- {{CSSxRef("border-right-width")}}
- {{CSSxRef("border-right")}} (Kurzeigenschaft)
- {{CSSxRef("border-spacing")}}
- {{CSSxRef("border-start-end-radius")}}
- {{CSSxRef("border-start-start-radius")}}
- {{CSSxRef("border-style")}} (Kurzeigenschaft)
- {{CSSxRef("border-top-color")}}
- {{CSSxRef("border-top-left-radius")}}
- {{CSSxRef("border-top-right-radius")}}
- {{CSSxRef("border-top-style")}}
- {{CSSxRef("border-top-width")}}
- {{CSSxRef("border-top")}} (Kurzeigenschaft)
- {{CSSxRef("border-width")}} (Kurzeigenschaft)
- {{CSSxRef("border")}} (Kurzeigenschaft)

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
- {{CSSxRef("column-rule")}} (Kurzeigenschaft)
- {{CSSxRef("column-span")}}
- {{CSSxRef("column-width")}}
- {{CSSxRef("columns")}} (Kurzeigenschaft)
- {{CSSxRef("contain-intrinsic-block-size")}}
- {{CSSxRef("contain-intrinsic-height")}}
- {{CSSxRef("contain-intrinsic-inline-size")}}
- {{CSSxRef("contain-intrinsic-size")}} (Kurzeigenschaft)
- {{CSSxRef("contain-intrinsic-width")}}
- {{CSSxRef("contain")}}
- {{CSSxRef("container-name")}}
- {{CSSxRef("container-type")}}
- {{CSSxRef("container")}} (Kurzeigenschaft)
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
- {{CSSxRef("flex-flow")}} (Kurzeigenschaft)
- {{CSSxRef("flex-grow")}}
- {{CSSxRef("flex-shrink")}}
- {{CSSxRef("flex-wrap")}}
- {{CSSxRef("flex")}} (Kurzeigenschaft)
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
- {{CSSxRef("font-synthesis")}} (Kurzeigenschaft)
- {{CSSxRef("font-variant-alternates")}}
- {{CSSxRef("font-variant-caps")}}
- {{CSSxRef("font-variant-east-asian")}}
- {{CSSxRef("font-variant-emoji")}}
- {{CSSxRef("font-variant-ligatures")}}
- {{CSSxRef("font-variant-numeric")}}
- {{CSSxRef("font-variant-position")}}
- {{CSSxRef("font-variant")}} (Kurzeigenschaft)
- {{CSSxRef("font-variation-settings")}}
- {{CSSxRef("font-weight")}}
- {{CSSxRef("font")}} (Kurzeigenschaft)
- {{CSSxRef("forced-color-adjust")}}

### G - I

- {{CSSxRef("gap")}} (Kurzeigenschaft)
- {{CSSxRef("grid-area")}} (Kurzeigenschaft)
- {{CSSxRef("grid-auto-columns")}}
- {{CSSxRef("grid-auto-flow")}}
- {{CSSxRef("grid-auto-rows")}}
- {{CSSxRef("grid-column-end")}}
- {{CSSxRef("grid-column-start")}}
- {{CSSxRef("grid-column")}} (Kurzeigenschaft)
- {{CSSxRef("grid-row-end")}}
- {{CSSxRef("grid-row-start")}}
- {{CSSxRef("grid-row")}} (Kurzeigenschaft)
- {{CSSxRef("grid-template-areas")}}
- {{CSSxRef("grid-template-columns")}}
- {{CSSxRef("grid-template-rows")}}
- {{CSSxRef("grid-template")}} (Kurzeigenschaft)
- {{CSSxRef("grid")}} (Kurzeigenschaft)
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
- {{CSSxRef("inset-block")}} (Kurzeigenschaft)
- {{CSSxRef("inset-block")}} (Kurzeigenschaft)
- {{CSSxRef("inset-inline-end")}}
- {{CSSxRef("inset-inline-start")}}
- {{CSSxRef("inset-inline")}} (Kurzeigenschaft)
- {{CSSxRef("inset-inline")}} (Kurzeigenschaft)
- {{CSSxRef("inset")}} (Kurzeigenschaft)
- {{CSSxRef("inset")}} (Kurzeigenschaft)
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
- {{CSSxRef("list-style")}} (Kurzeigenschaft)
- {{CSSxRef("list-style")}} (Kurzeigenschaft)
- {{CSSxRef("margin-block-end")}}
- {{CSSxRef("margin-block-start")}}
- {{CSSxRef("margin-block")}} (Kurzeigenschaft)
- {{CSSxRef("margin-bottom")}}
- {{CSSxRef("margin-inline-end")}}
- {{CSSxRef("margin-inline-start")}}
- {{CSSxRef("margin-inline")}} (Kurzeigenschaft)
- {{CSSxRef("margin-left")}}
- {{CSSxRef("margin-right")}}
- {{CSSxRef("margin-top")}}
- {{CSSxRef("margin-trim")}}
- {{CSSxRef("margin")}} (Kurzeigenschaft)
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
- {{CSSxRef("mask-border")}} (Kurzeigenschaft)
- {{CSSxRef("mask-clip")}}
- {{CSSxRef("mask-composite")}}
- {{CSSxRef("mask-image")}}
- {{CSSxRef("mask-mode")}}
- {{CSSxRef("mask-origin")}}
- {{CSSxRef("mask-position")}}
- {{CSSxRef("mask-repeat")}}
- {{CSSxRef("mask-size")}}
- {{CSSxRef("mask-type")}}
- {{CSSxRef("mask")}} (Kurzeigenschaft)
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
- {{CSSxRef("offset")}} (Kurzeigenschaft)
- {{CSSxRef("opacity")}}
- {{CSSxRef("order")}}
- {{CSSxRef("orphans")}}
- {{CSSxRef("outline-color")}}
- {{CSSxRef("outline-offset")}}
- {{CSSxRef("outline-style")}}
- {{CSSxRef("outline-width")}}
- {{CSSxRef("outline")}} (Kurzeigenschaft)
- {{CSSxRef("overflow-anchor")}}
- {{CSSxRef("overflow-block")}}
- {{CSSxRef("overflow-clip-margin")}}
- {{CSSxRef("overflow-inline")}}
- {{CSSxRef("overflow-wrap")}}
- {{CSSxRef("overflow-x")}}
- {{CSSxRef("overflow-y")}}
- {{CSSxRef("overflow")}} (Kurzeigenschaft)
- {{CSSxRef("overlay")}}
- {{CSSxRef("overscroll-behavior-block")}}
- {{CSSxRef("overscroll-behavior-inline")}}
- {{CSSxRef("overscroll-behavior-x")}}
- {{CSSxRef("overscroll-behavior-y")}}
- {{CSSxRef("overscroll-behavior")}} (Kurzeigenschaft)
- {{CSSxRef("padding-block-end")}}
- {{CSSxRef("padding-block-start")}}
- {{CSSxRef("padding-block")}} (Kurzeigenschaft)
- {{CSSxRef("padding-bottom")}}
- {{CSSxRef("padding-inline-end")}}
- {{CSSxRef("padding-inline-start")}}
- {{CSSxRef("padding-inline")}} (Kurzeigenschaft)
- {{CSSxRef("padding-left")}}
- {{CSSxRef("padding-right")}}
- {{CSSxRef("padding-top")}}
- {{CSSxRef("padding")}} (Kurzeigenschaft)
- {{CSSxRef("page-break-after")}}
- {{CSSxRef("page-break-before")}}
- {{CSSxRef("page-break-inside")}}
- {{CSSxRef("page")}}
- {{CSSxRef("paint-order")}}
- {{CSSxRef("perspective-origin")}}
- {{CSSxRef("perspective")}}
- {{CSSxRef("place-content")}} (Kurzeigenschaft)
- {{CSSxRef("place-items")}} (Kurzeigenschaft)
- {{CSSxRef("place-self")}} (Kurzeigenschaft)
- {{CSSxRef("pointer-events")}}
- {{CSSxRef("position-anchor")}}
- {{CSSxRef("position-area")}}
- {{CSSxRef("position-try-fallbacks")}}
- {{CSSxRef("position-try-order")}}
- {{CSSxRef("position-try")}} (Kurzeigenschaft)
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
- {{CSSxRef("scroll-margin-block")}} (Kurzeigenschaft)
- {{CSSxRef("scroll-margin-bottom")}}
- {{CSSxRef("scroll-margin-inline-end")}}
- {{CSSxRef("scroll-margin-inline-start")}}
- {{CSSxRef("scroll-margin-inline")}} (Kurzeigenschaft)
- {{CSSxRef("scroll-margin-left")}}
- {{CSSxRef("scroll-margin-right")}}
- {{CSSxRef("scroll-margin-top")}}
- {{CSSxRef("scroll-margin")}} (Kurzeigenschaft)
- {{CSSxRef("scroll-marker-group")}}
- {{CSSxRef("scroll-padding-block-end")}}
- {{CSSxRef("scroll-padding-block-start")}}
- {{CSSxRef("scroll-padding-block")}} (Kurzeigenschaft)
- {{CSSxRef("scroll-padding-bottom")}}
- {{CSSxRef("scroll-padding-inline-end")}}
- {{CSSxRef("scroll-padding-inline-start")}}
- {{CSSxRef("scroll-padding-inline")}} (Kurzeigenschaft)
- {{CSSxRef("scroll-padding-left")}}
- {{CSSxRef("scroll-padding-right")}}
- {{CSSxRef("scroll-padding-top")}}
- {{CSSxRef("scroll-padding")}} (Kurzeigenschaft)
- {{CSSxRef("scroll-snap-align")}}
- {{CSSxRef("scroll-snap-stop")}}
- {{CSSxRef("scroll-snap-type")}}
- {{CSSxRef("scroll-timeline-axis")}}
- {{CSSxRef("scroll-timeline-name")}}
- {{CSSxRef("scroll-timeline")}} (Kurzeigenschaft)
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
- {{CSSxRef("text-box")}} (Kurzeigenschaft)
- {{CSSxRef("text-combine-upright")}}
- {{CSSxRef("text-decoration-color")}}
- {{CSSxRef("text-decoration-line")}}
- {{CSSxRef("text-decoration-skip-ink")}}
- {{CSSxRef("text-decoration-skip")}}
- {{CSSxRef("text-decoration-style")}}
- {{CSSxRef("text-decoration-thickness")}}
- {{CSSxRef("text-decoration")}} (Kurzeigenschaft)
- {{CSSxRef("text-emphasis-color")}}
- {{CSSxRef("text-emphasis-position")}}
- {{CSSxRef("text-emphasis-style")}}
- {{CSSxRef("text-emphasis")}} (Kurzeigenschaft)
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
- {{CSSxRef("text-wrap")}} (Kurzeigenschaft)
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
- {{CSSxRef("transition")}} (Kurzeigenschaft)
- {{CSSxRef("translate")}}
- {{CSSxRef("unicode-bidi")}}
- {{CSSxRef("user-modify")}}
- {{CSSxRef("user-select")}}
- {{CSSxRef("vector-effect")}}
- {{CSSxRef("vertical-align")}}
- {{CSSxRef("view-timeline-axis")}}
- {{CSSxRef("view-timeline-inset")}}
- {{CSSxRef("view-timeline-name")}}
- {{CSSxRef("view-timeline")}} (Kurzeigenschaft)
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

### Nicht standardisierte Eigenschaften

Nicht standardisierte oder mit Anbieterpräfix versehene Eigenschaften umfassen die folgenden:

#### `-moz-` Präfix

- {{CSSxRef("-moz-float-edge")}}
- {{CSSxRef("-moz-force-broken-image-icon")}}
- {{CSSxRef("-moz-orient")}}
- {{CSSxRef("-moz-user-focus")}}
- {{CSSxRef("-moz-user-input")}}

#### `-webkit-` Präfix

- {{CSSxRef("-webkit-box-reflect")}}
- {{CSSxRef("-webkit-border-before")}} (Kurzeigenschaft)
- {{CSSxRef("-webkit-mask-box-image")}} (Kurzeigenschaft)
- {{CSSxRef("-webkit-mask-composite")}}
- {{CSSxRef("-webkit-mask-position-x")}}
- {{CSSxRef("-webkit-mask-position-y")}}
- {{CSSxRef("-webkit-mask-repeat-x")}}
- {{CSSxRef("-webkit-mask-repeat-y")}}
- {{CSSxRef("-webkit-tap-highlight-color")}}
- {{CSSxRef("-webkit-text-fill-color")}}
- {{CSSxRef("-webkit-text-security")}}
- {{CSSxRef("-webkit-text-stroke")}} (Kurzeigenschaft)
- {{CSSxRef("-webkit-text-stroke-color")}}
- {{CSSxRef("-webkit-text-stroke-width")}}
- {{CSSxRef("-webkit-touch-callout")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
- [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements)
- [Firefox (-moz-) anbieterpräfixierte CSS-Erweiterungen](/de/docs/Web/CSS/Mozilla_Extensions)
- [WebKit (-webkit-) anbieterpräfixierte CSS-Erweiterungen](/de/docs/Web/CSS/WebKit_Extensions)
- {{Glossary("Vendor_prefix", "Anbieterpräfix")}}
