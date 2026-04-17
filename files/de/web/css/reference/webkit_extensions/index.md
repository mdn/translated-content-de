---
title: WebKit (-webkit-) vendor-spezifische CSS-Erweiterungen
slug: Web/CSS/Reference/Webkit_extensions
l10n:
  sourceCommit: 0d155984425e8964c889efb63ec39593e11bbc14
---

Ein {{Glossary("vendor_prefix", "Vendor-Prefix")}} wird verwendet, um anzugeben, dass ein Feature spezifisch für einen bestimmten Browser ist. Benutzeragenten, die auf WebKit oder Blink basieren (wie Safari und Chrome), unterstützen mehrere Erweiterungen für [CSS](/de/docs/Web/CSS), die mit `-webkit-` vorangestellt sind.

## -webkit-Properties ohne standardisierte Entsprechungen

> [!NOTE]
> Diese Eigenschaften funktionieren in Browsern, die auf WebKit oder Blink basieren, außer dort, wo Hinweise auf den Support etwas anderes angeben.
> Sie sollten vermeiden, diese auf Produktionswebsites zu verwenden.

### A-C

- `-webkit-app-region` {{deprecated_inline}}: Nicht mehr in Safari unterstützt.
- `-webkit-border-horizontal-spacing`
- `-webkit-border-vertical-spacing`
- {{CSSxRef("-webkit-box-reflect")}}: Aus Kompatibilitätsgründen von jedem Browser mit `-webkit-` unterstützt.
- `-webkit-column-axis`: Nicht in Chrome unterstützt.
- `-webkit-column-progression`: Nicht in Chrome unterstützt.
- `-webkit-cursor-visibility`: Nicht in Chrome unterstützt.

### D-L

- `-webkit-font-smoothing`: Siehe {{CSSxRef("font-smooth")}}.
- `-webkit-hyphenate-limit-after`: Nicht in Chrome unterstützt.
- `-webkit-hyphenate-limit-before`: Nicht in Chrome unterstützt.
- `-webkit-hyphenate-limit-lines`: Nicht in Chrome unterstützt.
- `-webkit-line-align`: Nicht in Chrome unterstützt.
- `-webkit-line-box-contain`: Nicht in Chrome unterstützt.
- `-webkit-line-grid`: Nicht in Chrome unterstützt.
- `-webkit-line-snap`: Nicht in Chrome unterstützt.
- `-webkit-locale`
- `-webkit-logical-height`
- `-webkit-logical-width`

### M

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
- `-webkit-mask-source-type`: Nicht in Chrome unterstützt.
- `-webkit-max-logical-height`
- `-webkit-max-logical-width`
- `-webkit-min-logical-height`
- `-webkit-min-logical-width`

### N-Z

- `-webkit-nbsp-mode`: Nicht in Chrome unterstützt.
- `-webkit-perspective-origin-x`
- `-webkit-perspective-origin-y`
- `-webkit-rtl-ordering`
- {{CSSxRef("-webkit-tap-highlight-color")}}: Nur in Safari auf iOS unterstützt.
- `-webkit-text-decoration-skip`: Nicht in Chrome unterstützt.
- `-webkit-text-decorations-in-effect`
- {{CSSxRef("-webkit-text-fill-color")}}
- {{CSSxRef("-webkit-text-security")}}
- {{CSSxRef("-webkit-text-stroke")}}
- {{CSSxRef("-webkit-text-stroke-color")}}
- {{CSSxRef("-webkit-text-stroke-width")}}
- `-webkit-text-zoom`: Nicht in Chrome unterstützt.
- {{CSSxRef("-webkit-touch-callout")}} {{deprecated_inline}}: Nur in Safari auf iOS unterstützt.
- `-webkit-transform-origin-x`
- `-webkit-transform-origin-y`
- `-webkit-transform-origin-z`
- `-webkit-user-drag`
- `-webkit-user-modify`

## -webkit-Properties mit standardisierten Entsprechungen

Mehrere `-webkit-`-präfixierte Eigenschaften haben standardisierte Entsprechungen.
Auch wenn der Name und die Syntax unterschiedlich sein können, sollten sie nicht mehr verwendet werden.
Für jede der unten stehenden Eigenschaften verwenden Sie die standardisierten Entsprechungen.

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
- `-webkit-box-align`: Verwenden Sie [CSS flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) mit {{CSSxRef("align-items")}}.
- `-webkit-box-direction`: Verwenden Sie [CSS flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) mit {{CSSxRef("flex-direction")}}.
- {{CSSxRef("box-flex-group", "-webkit-box-flex-group")}}: Verwenden Sie [CSS flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) mit {{CSSxRef("flex-basis")}}, {{CSSxRef("flex-grow")}}, und {{CSSxRef("flex-shrink")}}.
- `-webkit-box-flex`: Verwenden Sie [CSS flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) mit {{CSSxRef("flex-grow")}}.
- `-webkit-box-lines`: Verwenden Sie [CSS flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) mit {{CSSxRef("flex-flow")}}.
- `-webkit-box-ordinal-group`: Verwenden Sie [CSS flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) mit {{CSSxRef("order")}}.
- `-webkit-box-orient`: Verwenden Sie [CSS flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) mit {{CSSxRef("flex-direction")}}.
- `-webkit-box-pack`: Verwenden Sie [CSS flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) mit {{CSSxRef("justify-content")}}.
- {{CSSxRef("-webkit-box-reflect")}}: Verwenden Sie die CSS {{cssxref("element()")}} Funktion.

### C-I

- `-webkit-column-break-after`: Verwenden Sie [CSS Multi-Column Layout](/de/docs/Web/CSS/Guides/Multicol_layout) mit {{CSSxRef("break-after")}}.
- `-webkit-column-break-before`: Verwenden Sie [CSS Multi-Column Layout](/de/docs/Web/CSS/Guides/Multicol_layout) mit {{CSSxRef("break-before")}}.
- `-webkit-column-break-inside`: Verwenden Sie [CSS Multi-Column Layout](/de/docs/Web/CSS/Guides/Multicol_layout) mit {{CSSxRef("break-inside")}}.
- `-webkit-font-feature-settings`: Verwenden Sie {{CSSxRef("font-feature-settings")}} (die präfixierte Version wird nicht in Safari unterstützt).
- `-webkit-hyphenate-character`: Verwenden Sie {{CSSxRef("hyphenate-character")}}.
- `-webkit-initial-letter`: Verwenden Sie {{CSSxRef("initial-letter")}}.

### J-Z

- `-webkit-line-clamp`: Verwenden Sie {{CSSxRef("line-clamp")}}.
- `-webkit-margin-after`: Verwenden Sie {{CSSxRef("margin-block-end")}}.
- `-webkit-margin-before`: Verwenden Sie {{CSSxRef("margin-block-start")}}.
- `-webkit-margin-end`: Verwenden Sie {{CSSxRef("margin-inline-end")}}.
- `-webkit-margin-start`: Verwenden Sie {{CSSxRef("margin-inline-start")}}.
- `-webkit-padding-after`: Verwenden Sie {{CSSxRef("padding-block-end")}}.
- `-webkit-padding-before`: Verwenden Sie {{CSSxRef("padding-block-start")}}.
- `-webkit-padding-end`: Verwenden Sie {{CSSxRef("padding-inline-end")}}.
- `-webkit-padding-start`: Verwenden Sie {{CSSxRef("padding-inline-start")}}.

## -webkit-präfixierte Eigenschaftswerte

- `-webkit-fill-available`
  - : Wird mit Größeneigenschaften wie {{CSSxRef("width")}} und {{CSSxRef("height")}} verwendet, um Elemente den verfügbaren Raum innerhalb ihres übergeordneten Containers vollständig einnehmen zu lassen. Der `stretch`-Wert bietet einen standardisierten Ersatz, aber `-webkit-fill-available` wird von Browsern aus Gründen der Rückwärtskompatibilität als Alias unterstützt.

## Pseudoklassen

> [!NOTE]
> Wenn es eine ungültige Pseudoklasse innerhalb einer Kette oder Gruppe von Selektoren gibt, ist die gesamte Selektorenliste ungültig.

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

Aus Gründen der Webkompatibilität behandeln Blink-, WebKit- und Gecko-Browser alle Pseudoelemente, die mit `::-webkit-` beginnen, als gültig. Wenn es ein ungültiges Pseudoelement oder eine ungültige Pseudoklasse innerhalb einer Kette oder Gruppe von Selektoren gibt, ist die gesamte Selektorenliste ungültig. Wenn ein Pseudoelement (aber nicht Pseudoklasse) ein `-webkit-` Präfix hat, gehen Blink-, WebKit- und Gecko-Browser davon aus, dass es gültig ist, wodurch die Selektorenliste nicht ungültig wird.

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

## Medienmerkmale

- {{CSSxRef("@media/-webkit-animation")}} {{deprecated_inline}}
- {{CSSxRef("@media/-webkit-device-pixel-ratio")}}: Wird plattformübergreifend unterstützt
- {{CSSxRef("@media/-webkit-transform-2d")}} {{deprecated_inline}}
- {{CSSxRef("@media/-webkit-transform-3d")}}: Wird plattformübergreifend unterstützt
- {{CSSxRef("@media/-webkit-transition")}} {{deprecated_inline}}

## Siehe auch

- [Mozilla (-moz-) vendor-spezifische CSS-Erweiterungen](/de/docs/Web/CSS/Reference/Mozilla_extensions)
- {{Glossary("Vendor_Prefix", "Vendor-Prefix")}} Glossareintrag
