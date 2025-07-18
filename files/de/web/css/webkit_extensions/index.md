---
title: WebKit (-webkit-) anbieterpräfixierte CSS-Erweiterungen
slug: Web/CSS/WebKit_Extensions
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Ein {{Glossary("vendor_prefix", "Anbieterpräfix")}} wird verwendet, um anzuzeigen, dass ein Merkmal spezifisch für einen bestimmten Browser ist.
Benutzeragenten, die auf WebKit oder Blink basieren (wie Safari und Chrome), unterstützen mehrere Erweiterungen zu [CSS](/de/docs/Web/CSS), die mit `-webkit-` vorangestellt sind.

## -webkit-präfixierte Eigenschaften ohne standardisierte Äquivalente

> [!NOTE]
> Diese Eigenschaften funktionieren in Browsern auf WebKit- oder Blink-Basis, außer dort, wo Unterstützungsnoten etwas anderes angeben.
> Sie sollten sie auf Produktionswebsites vermeiden.

### A-C

- `-webkit-app-region` {{deprecated_inline}}: Wird in Safari nicht mehr unterstützt.
- `-webkit-border-horizontal-spacing`
- `-webkit-border-vertical-spacing`
- {{CSSxRef("-webkit-box-reflect")}}: Aus Kompatibilitätsgründen von jedem Browser mit `-webkit-` unterstützt.
- `-webkit-column-axis`: Wird in Chrome nicht unterstützt.
- `-webkit-column-progression`: Wird in Chrome nicht unterstützt.
- `-webkit-cursor-visibility`: Wird in Chrome nicht unterstützt.

### D-L

- `-webkit-font-smoothing`: Siehe {{CSSxRef("font-smooth")}}.
- `-webkit-hyphenate-limit-after`: Wird in Chrome nicht unterstützt.
- `-webkit-hyphenate-limit-before`: Wird in Chrome nicht unterstützt.
- `-webkit-hyphenate-limit-lines`: Wird in Chrome nicht unterstützt.
- `-webkit-line-align`: Wird in Chrome nicht unterstützt.
- `-webkit-line-box-contain`: Wird in Chrome nicht unterstützt.
- `-webkit-line-grid`: Wird in Chrome nicht unterstützt.
- `-webkit-line-snap`: Wird in Chrome nicht unterstützt.
- `-webkit-locale`
- `-webkit-logical-height`
- `-webkit-logical-width`

### M

- `-webkit-margin-after`
- `-webkit-margin-before`
- {{CSSxRef("-webkit-mask-box-image")}}: Siehe {{cssxref("mask-border")}} und {{cssxref("border-image")}}.
- {{CSSxRef("-webkit-mask-box-image", "-webkit-mask-box-image-outset")}}: Siehe {{cssxref("mask-border")}} und {{cssxref("border-image")}}.
- {{CSSxRef("-webkit-mask-box-image", "-webkit-mask-box-image-repeat")}}: Siehe {{cssxref("mask-border")}} und {{cssxref("border-image")}}.
- {{CSSxRef("-webkit-mask-box-image", "-webkit-mask-box-image-slice")}}: Siehe {{cssxref("mask-border")}} und {{cssxref("border-image")}}.
- {{CSSxRef("-webkit-mask-box-image", "-webkit-mask-box-image-source")}}: Siehe {{cssxref("mask-border")}} und {{cssxref("border-image")}}.
- {{CSSxRef("-webkit-mask-box-image", "-webkit-mask-box-image-width")}}: Siehe {{cssxref("mask-border")}} und {{cssxref("border-image")}}.
- {{CSSxRef("-webkit-mask-composite")}}: Siehe {{cssxref("mask-border")}} und {{cssxref("border-image")}}.
- {{CSSxRef("-webkit-mask-position-x")}}: Aus Kompatibilitätsgründen von jedem Browser mit `-webkit-` unterstützt.
- {{CSSxRef("-webkit-mask-position-y")}}: Aus Kompatibilitätsgründen von jedem Browser mit `-webkit-` unterstützt.
- {{CSSxRef("-webkit-mask-repeat-x")}} {{deprecated_inline}}: Nicht mehr unterstützt; siehe {{CSSxRef("mask-repeat")}}.
- {{CSSxRef("-webkit-mask-repeat-y")}} {{deprecated_inline}}: Nicht mehr unterstützt; siehe {{CSSxRef("mask-repeat")}}.
- `-webkit-mask-source-type`: Wird in Chrome nicht unterstützt.
- `-webkit-max-logical-height`
- `-webkit-max-logical-width`
- `-webkit-min-logical-height`
- `-webkit-min-logical-width`

### N-Z

- `-webkit-nbsp-mode`: Wird in Chrome nicht unterstützt.
- `-webkit-perspective-origin-x`
- `-webkit-perspective-origin-y`
- `-webkit-rtl-ordering`
- {{CSSxRef("-webkit-tap-highlight-color")}}: Nur in Safari auf iOS unterstützt.
- `-webkit-text-decoration-skip`: Wird in Chrome nicht unterstützt.
- `-webkit-text-decorations-in-effect`
- {{CSSxRef("-webkit-text-fill-color")}}
- {{CSSxRef("-webkit-text-security")}}
- {{CSSxRef("-webkit-text-stroke")}}
- {{CSSxRef("-webkit-text-stroke-color")}}
- {{CSSxRef("-webkit-text-stroke-width")}}
- `-webkit-text-zoom`: Wird in Chrome nicht unterstützt.
- {{CSSxRef("-webkit-touch-callout")}} {{deprecated_inline}}: Nur in Safari auf iOS unterstützt.
- `-webkit-transform-origin-x`
- `-webkit-transform-origin-y`
- `-webkit-transform-origin-z`
- `-webkit-user-drag`
- `-webkit-user-modify`

## -webkit-präfixierte Eigenschaften mit standardisierten Äquivalenten

Mehrere `-webkit-` präfixierte Eigenschaften haben standardisierte Äquivalente.
Auch wenn der Name und die Syntax unterschiedlich sein können, sollten sie nicht mehr verwendet werden.
Für jede der folgenden Eigenschaften verwenden Sie die standardisierten Äquivalente.

### A-B

- `-webkit-border-after`: Verwenden Sie {{CSSxRef("border-block-end")}}.
- `-webkit-border-after-color`: Verwenden Sie {{CSSxRef("border-block-end-color")}}.
- `-webkit-border-after-style`: Verwenden Sie {{CSSxRef("border-block-end-style")}}.
- `-webkit-border-after-width`: Verwenden Sie {{CSSxRef("border-block-end-width")}}.
- {{CSSxRef("-webkit-border-before")}}: Verwenden Sie {{CSSxRef("border-block-start")}}.
- `-webkit-border-before-color`: Verwenden Sie {{CSSxRef("border-block-start-color")}}.
- `-webkit-border-before-style`: Verwenden Sie {{CSSxRef("border-block-start-style")}}.
- `-webkit-border-before-width`: Verwenden Sie {{CSSxRef("border-block-start-width")}}.
- `-webkit-border-end`: Verwenden Sie {{CSSxRef("border-inline-end")}}.
- `-webkit-border-end-color`: Verwenden Sie {{CSSxRef("border-inline-end-color")}}.
- `-webkit-border-end-style`: Verwenden Sie {{CSSxRef("border-inline-end-style")}}.
- `-webkit-border-end-width`: Verwenden Sie {{CSSxRef("border-inline-end-width")}}.
- `-webkit-border-start`: Verwenden Sie {{CSSxRef("border-inline-start")}}.
- `-webkit-border-start-color`: Verwenden Sie {{CSSxRef("border-inline-start-color")}}
- `-webkit-border-start-style`: Verwenden Sie {{CSSxRef("border-inline-start-style")}}.
- `-webkit-border-start-width`: Verwenden Sie {{CSSxRef("border-inline-start-width")}}.
- `-webkit-box-align`: Verwenden Sie [CSS Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) mit {{CSSxRef("align-items")}}.
- `-webkit-box-direction`: Verwenden Sie [CSS Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) mit {{CSSxRef("flex-direction")}}.
- {{CSSxRef("box-flex-group", "-webkit-box-flex-group")}}: Verwenden Sie [CSS Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) mit {{CSSxRef("flex-basis")}}, {{CSSxRef("flex-grow")}} und {{CSSxRef("flex-shrink")}}.
- `-webkit-box-flex`: Verwenden Sie [CSS Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) mit {{CSSxRef("flex-grow")}}.
- `-webkit-box-lines`: Verwenden Sie [CSS Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) mit {{CSSxRef("flex-flow")}}.
- `-webkit-box-ordinal-group`: Verwenden Sie [CSS Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) mit {{CSSxRef("order")}}.
- `-webkit-box-orient`: Verwenden Sie [CSS Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) mit {{CSSxRef("flex-direction")}}.
- `-webkit-box-pack`: Verwenden Sie [CSS Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) mit {{CSSxRef("justify-content")}}.
- {{CSSxRef("-webkit-box-reflect")}}: Verwenden Sie die CSS {{CSSxRef("element", "element()")}} Funktion.

### C-I

- `-webkit-column-break-after`: Verwenden Sie [CSS Mehrspaltenlayout](/de/docs/Web/CSS/CSS_multicol_layout) mit {{CSSxRef("break-after")}}.
- `-webkit-column-break-before`: Verwenden Sie [CSS Mehrspaltenlayout](/de/docs/Web/CSS/CSS_multicol_layout) mit {{CSSxRef("break-before")}}.
- `-webkit-column-break-inside`: Verwenden Sie [CSS Mehrspaltenlayout](/de/docs/Web/CSS/CSS_multicol_layout) mit {{CSSxRef("break-inside")}}.
- `-webkit-font-feature-settings`: Verwenden Sie {{CSSxRef("font-feature-settings")}} (die präfixierte Version wird in Safari nicht unterstützt).
- `-webkit-hyphenate-character`: Verwenden Sie {{CSSxRef("hyphenate-character")}}.
- `-webkit-initial-letter`: Verwenden Sie {{CSSxRef("initial-letter")}}.

### J-Z

- `-webkit-line-clamp`: Verwenden Sie {{CSSxRef("line-clamp")}}.
- `-webkit-margin-end`: Verwenden Sie {{CSSxRef("margin-block-end")}}.
- `-webkit-margin-start`: Verwenden Sie {{CSSxRef("margin-block-start")}}.
- `-webkit-padding-after`: Verwenden Sie {{CSSxRef("padding-block-end")}}.
- `-webkit-padding-before`: Verwenden Sie {{CSSxRef("padding-block-start")}}.
- `-webkit-padding-end`: Verwenden Sie {{CSSxRef("padding-inline-end")}}.
- `-webkit-padding-start`: Verwenden Sie {{CSSxRef("padding-inline-start")}}.

## Pseudoklassen

> [!NOTE]
> Wenn es eine ungültige Pseudoklasse innerhalb einer Kette oder Gruppe von Selektoren gibt, ist die gesamte Selektorliste ungültig.

- `:-webkit-any()`: Verwenden Sie {{CSSxRef(":is")}}
- `:-webkit-any-link`: Verwenden Sie {{CSSxRef(":any-link")}}
- `:-webkit-autofill`: Verwenden Sie {{CSSxRef(":autofill")}}
- `:-webkit-autofill-strong-password`: Verwenden Sie {{CSSxRef(":autofill")}}
- `:-webkit-drag`
- `:-webkit-full-page-media`: Verwenden Sie {{CSSxRef(":fullscreen")}}
- `:-webkit-full-screen`: Verwenden Sie {{CSSxRef(":fullscreen")}}
- `:-webkit-full-screen-ancestor`: Verwenden Sie {{CSSxRef(":fullscreen")}}
- `:-webkit-full-screen-document`: Verwenden Sie {{CSSxRef(":fullscreen")}}
- `:-webkit-full-screen-controls-hidden`: Verwenden Sie {{CSSxRef(":fullscreen")}}

## Pseudoelemente

Aus Gründen der Webkompatibilität behandeln Blink-, WebKit- und Gecko-Browser alle Pseudoelemente, die mit `::-webkit-` beginnen, als gültig.
Wenn es ein ungültiges Pseudoelement oder eine ungültige Pseudoklasse innerhalb einer Kette oder Gruppe von Selektoren gibt, ist die gesamte Selektorliste ungültig.
Wenn ein Pseudoelement (aber nicht Pseudoklasse) ein `-webkit-` Präfix hat, nehmen Blink-, WebKit- und Gecko-Browser an, dass es gültig ist, wodurch die Selektorliste nicht ungültig wird.

- `::-webkit-file-upload-button`: Verwenden Sie {{CSSxRef("::file-selector-button")}}
- {{CSSxRef("::-webkit-inner-spin-button")}}
- `::-webkit-input-placeholder`: Verwenden Sie {{CSSxRef("::placeholder")}}
- {{CSSxRef("::-webkit-meter-bar")}} {{deprecated_inline}}
- {{CSSxRef("::-webkit-meter-even-less-good-value")}}
- {{CSSxRef("::-webkit-meter-inner-element")}}
- {{CSSxRef("::-webkit-meter-optimum-value")}}
- {{CSSxRef("::-webkit-meter-suboptimum-value")}}
- {{CSSxRef("::-webkit-progress-bar")}}
- {{CSSxRef("::-webkit-progress-inner-element")}}
- {{CSSxRef("::-webkit-progress-value")}}
- {{CSSxRef("::-webkit-search-cancel-button")}}
- {{CSSxRef("::-webkit-search-results-button")}}
- {{CSSxRef("::-webkit-slider-runnable-track")}}
- {{CSSxRef("::-webkit-slider-thumb")}}

## Medien-Eigenschaften

- {{CSSxRef("@media/-webkit-animation")}} {{deprecated_inline}}
- {{CSSxRef("@media/-webkit-device-pixel-ratio")}}: Browserübergreifend unterstützt
- {{CSSxRef("@media/-webkit-transform-2d")}} {{deprecated_inline}}
- {{CSSxRef("@media/-webkit-transform-3d")}}: Browserübergreifend unterstützt
- {{CSSxRef("@media/-webkit-transition")}} {{deprecated_inline}}

## Siehe auch

- [Mozilla (-moz-) anbieterpräfixierte CSS-Erweiterungen](/de/docs/Web/CSS/Mozilla_Extensions)
- {{Glossary("Vendor_Prefix", "Eintrag zum Anbieterpräfix im Glossar")}}
- [Styling von Formularelementen auf dem WebKit Trac](https://trac.webkit.org/wiki/Styling%20Form%20Controls)
