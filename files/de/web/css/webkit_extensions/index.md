---
title: "-webkit-präfixierte CSS-Erweiterungen"
slug: Web/CSS/WebKit_Extensions
l10n:
  sourceCommit: 39520e7628ec24665da17b39162ab5d08ef0e1ea
---

{{CSSRef}}

Benutzeragenten, die auf WebKit oder Blink basieren, wie Safari und Chrome, unterstützen mehrere spezielle Erweiterungen für [CSS](/de/docs/Web/CSS). Diese Erweiterungen sind mit `-webkit-` präfixiert.

## -webkit-präfixierte Eigenschaften ohne standardmäßige Äquivalente

> [!NOTE]
> Verwenden Sie diese nicht auf Websites. Diese Eigenschaften funktionieren nur in WebKit- oder Blink-basierten Browsern, außer wo angegeben.

### A-C

- {{CSSxRef("-webkit-app-region")}}
- {{CSSxRef("-webkit-border-horizontal-spacing")}}
- {{CSSxRef("-webkit-border-vertical-spacing")}}
- {{CSSxRef("-webkit-box-reflect")}} (wird aus Kompatibilitätsgründen von jedem Browser mit `-webkit-` unterstützt)
- {{CSSxRef("-webkit-column-axis")}}
- {{CSSxRef("-webkit-column-progression")}}
- {{CSSxRef("-webkit-cursor-visibility")}}

### D-I

- {{CSSxRef("font-smooth", "-webkit-font-smoothing")}}
- {{CSSxRef("-webkit-hyphenate-limit-after")}}
- {{CSSxRef("-webkit-hyphenate-limit-before")}}
- {{CSSxRef("-webkit-hyphenate-limit-lines")}}

### L

- {{CSSxRef("-webkit-line-align")}}
- {{CSSxRef("-webkit-line-box-contain")}}
- {{CSSxRef("-webkit-line-clamp")}}
- {{CSSxRef("-webkit-line-grid")}}
- {{CSSxRef("-webkit-line-snap")}}
- {{CSSxRef("-webkit-locale")}}
- {{CSSxRef("-webkit-logical-height")}}
- {{CSSxRef("-webkit-logical-width")}}

### M

- {{CSSxRef("-webkit-margin-after")}}
- {{CSSxRef("-webkit-margin-before")}}
- {{CSSxRef("-webkit-mask-box-image-outset")}}
- {{CSSxRef("-webkit-mask-box-image-repeat")}}
- {{CSSxRef("-webkit-mask-box-image-slice")}}
- {{CSSxRef("-webkit-mask-box-image-source")}}
- {{CSSxRef("-webkit-mask-box-image-width")}}
- {{CSSxRef("-webkit-mask-box-image")}}
- {{cssxref("-webkit-mask-composite")}}
- {{CSSxRef("-webkit-mask-position-x")}} (wird aus Kompatibilitätsgründen von jedem Browser mit `-webkit-` unterstützt)
- {{CSSxRef("-webkit-mask-position-y")}} (wird aus Kompatibilitätsgründen von jedem Browser mit `-webkit-` unterstützt)
- {{CSSxRef("-webkit-mask-repeat-x")}} (auch ohne Präfix unterstützt)
- {{CSSxRef("-webkit-mask-repeat-y")}} (auch ohne Präfix unterstützt)
- {{CSSxRef("-webkit-mask-source-type")}}
- {{CSSxRef("-webkit-max-logical-height")}}
- {{CSSxRef("-webkit-max-logical-width")}}
- {{CSSxRef("-webkit-min-logical-height")}}
- {{CSSxRef("-webkit-min-logical-width")}}

### N-R

- {{CSSxRef("-webkit-nbsp-mode")}}
- {{CSSxRef("-webkit-perspective-origin-x")}}
- {{CSSxRef("-webkit-perspective-origin-y")}}
- {{CSSxRef("-webkit-rtl-ordering")}}

### T

- {{CSSxRef("-webkit-tap-highlight-color")}}
- {{CSSxRef("-webkit-text-decoration-skip")}}
- {{CSSxRef("-webkit-text-decorations-in-effect")}}
- {{CSSxRef("-webkit-text-fill-color")}}
- {{CSSxRef("-webkit-text-security")}}
- {{CSSxRef("-webkit-text-stroke-color")}}
- {{CSSxRef("-webkit-text-stroke-width")}}
- {{CSSxRef("-webkit-text-stroke")}}
- {{CSSxRef("-webkit-text-zoom")}}
- {{cssxref("-webkit-touch-callout")}}
- {{CSSxRef("-webkit-transform-origin-x")}}
- {{CSSxRef("-webkit-transform-origin-y")}}
- {{CSSxRef("-webkit-transform-origin-z")}}

### U-Z

- {{CSSxRef("-webkit-user-drag")}}
- {{CSSxRef("-webkit-user-modify")}}

## -webkit-präfixierte Eigenschaften mit standardmäßigen Äquivalenten

Mehrere alte `-webkit-`-präfixierte Eigenschaften haben standardmäßige Äquivalente. Auch wenn der Name und die Syntax unterschiedlich sein können, sollten diese überhaupt nicht mehr verwendet werden.

Für jede davon verwenden Sie bitte das angegebene standardmäßige Äquivalent.

### A-B

- `-webkit-border-after`
  - : Verwenden Sie stattdessen die standardmäßige Eigenschaft {{CSSxRef("border-block-end")}}.
- `-webkit-border-after-color`
  - : Verwenden Sie stattdessen die standardmäßige Eigenschaft {{CSSxRef("border-block-end-color")}}.
- `-webkit-border-after-style`
  - : Verwenden Sie stattdessen die standardmäßige Eigenschaft {{CSSxRef("border-block-end-style")}}.
- `-webkit-border-after-width`
  - : Verwenden Sie stattdessen die standardmäßige Eigenschaft {{CSSxRef("border-block-end-width")}}.
- `-webkit-border-before`
  - : Verwenden Sie stattdessen die standardmäßige Eigenschaft {{CSSxRef("border-block-start")}}.
- `-webkit-border-before-color`
  - : Verwenden Sie stattdessen die standardmäßige Eigenschaft {{CSSxRef("border-block-start-color")}}.
- `-webkit-border-before-style`
  - : Verwenden Sie stattdessen die standardmäßige Eigenschaft {{CSSxRef("border-block-start-style")}}.
- `-webkit-border-before-width`
  - : Verwenden Sie stattdessen die standardmäßige Eigenschaft {{CSSxRef("border-block-start-width")}}.
- `-webkit-border-end`
  - : Verwenden Sie stattdessen die standardmäßige Eigenschaft {{CSSxRef("border-inline-end")}}.
- `-webkit-border-end-color`
  - : Verwenden Sie stattdessen die standardmäßige Eigenschaft {{CSSxRef("border-inline-end-color")}}.
- `-webkit-border-end-style`
  - : Verwenden Sie stattdessen die standardmäßige Eigenschaft {{CSSxRef("border-inline-end-style")}}.
- `-webkit-border-end-width`
  - : Verwenden Sie stattdessen die standardmäßige Eigenschaft {{CSSxRef("border-inline-end-width")}}.
- `-webkit-border-start`
  - : Verwenden Sie stattdessen die standardmäßige Eigenschaft {{CSSxRef("border-inline-start")}}.
- `-webkit-border-start-color`
  - : Verwenden Sie stattdessen die standardmäßige Eigenschaft {{CSSxRef("border-inline-start-color")}}.
- `-webkit-border-start-style`
  - : Verwenden Sie stattdessen die standardmäßige Eigenschaft {{CSSxRef("border-inline-start-style")}}.
- `-webkit-border-start-width`
  - : Verwenden Sie stattdessen die standardmäßige Eigenschaft {{CSSxRef("border-inline-start-width")}}.
- `-webkit-box-align`
  - : Verwenden Sie das [CSS Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) mit der standardmäßigen Eigenschaft {{CSSxRef("align-items")}}.
- `-webkit-box-direction`
  - : Verwenden Sie das [CSS Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) mit der standardmäßigen Eigenschaft {{CSSxRef("flex-direction")}}.
- {{CSSxRef("box-flex-group", "-webkit-box-flex-group")}}
  - : Verwenden Sie das [CSS Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) mit den standardmäßigen Eigenschaften {{cssxref("flex-basis")}}, {{cssxref("flex-grow")}} und {{cssxref("flex-shrink")}}.
- `-webkit-box-flex`
  - : Verwenden Sie das [CSS Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) mit der standardmäßigen Eigenschaft {{CSSxRef("flex-grow")}}.
- `-webkit-box-lines`
  - : Verwenden Sie das [CSS Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) mit der standardmäßigen Eigenschaft {{CSSxRef("flex-flow")}}.
- `-webkit-box-ordinal-group`
  - : Verwenden Sie das [CSS Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) mit der standardmäßigen Eigenschaft {{CSSxRef("order")}}.
- `-webkit-box-orient`
  - : Verwenden Sie das [CSS Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) mit der standardmäßigen Eigenschaft {{CSSxRef("flex-direction")}}.
- `-webkit-box-pack`
  - : Verwenden Sie das [CSS Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) mit der standardmäßigen Eigenschaft {{CSSxRef("justify-content")}}.

### C-I

- `-webkit-column-break-after`
  - : Verwenden Sie das [CSS Multispalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout) mit der standardmäßigen Eigenschaft {{cssxref("break-after")}}.
- `-webkit-column-break-before`
  - : Verwenden Sie das [CSS Multispalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout) mit der standardmäßigen Eigenschaft {{cssxref("break-before")}}.
- `-webkit-column-break-inside`
  - : Verwenden Sie das [CSS Multispalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout) mit der standardmäßigen Eigenschaft {{cssxref("break-inside")}}.
- `-webkit-font-feature-settings`
  - : Verwenden Sie stattdessen die [`font-feature-settings`](/de/docs/Web/CSS/font-feature-settings)-Eigenschaft.
- `-webkit-hyphenate-character`
  - : Verwenden Sie stattdessen die standardmäßige Eigenschaft {{cssxref("hyphenate-character")}}.
- `-webkit-initial-letter`
  - : Verwenden Sie stattdessen die standardmäßige Eigenschaft {{cssxref("initial-letter")}}.

### J-Z

- `-webkit-margin-end`
  - : Verwenden Sie stattdessen die standardmäßige Eigenschaft {{CSSxRef("margin-block-end")}}.
- `-webkit-margin-start`
  - : Verwenden Sie stattdessen die standardmäßige Eigenschaft {{CSSxRef("margin-block-start")}}.
- `-webkit-padding-after`
  - : Verwenden Sie stattdessen die standardmäßige Eigenschaft {{CSSxRef("padding-block-end")}}.
- `-webkit-padding-before`
  - : Verwenden Sie stattdessen die standardmäßige Eigenschaft {{CSSxRef("padding-block-start")}}.
- `-webkit-padding-end`
  - : Verwenden Sie stattdessen die standardmäßige Eigenschaft {{CSSxRef("padding-inline-end")}}.
- `-webkit-padding-start`
  - : Verwenden Sie stattdessen die standardmäßige Eigenschaft {{CSSxRef("padding-inline-start")}}.

## -webkit-präfixierte Eigenschaftswerte

- `-webkit-fill-available`
  - : Wird mit Eigenschaften zur Größenbestimmung wie {{CSSxRef("width")}} und {{CSSxRef("height")}} verwendet, um Elementen zu erlauben, den gesamten verfügbaren Platz innerhalb ihres übergeordneten Containers einzunehmen. Der Flexbox `stretch`-Wert (siehe z.B. {{CSSxRef("align-items")}} und {{CSSxRef("justify-items")}}) bietet einen standardmäßigen Ersatz.

## Pseudo-Klassen

- {{CSSxRef(":animating-full-screen-transition", ":-webkit-animating-full-screen-transition")}}
- {{CSSxRef(":is", ":-webkit-any()")}}
- {{CSSxRef(":any-link", ":-webkit-any-link")}}\*
- {{CSSxRef(":autofill",":-webkit-autofill")}}
- {{CSSxRef(":autofill-strong-password",":-webkit-autofill-strong-password")}}
- {{CSSxRef(":drag",":-webkit-drag")}}
- {{CSSxRef(":full-page-media",":-webkit-full-page-media")}}
- {{CSSxRef(":full-screen", ":-webkit-full-screen")}}\*
- {{CSSxRef(":full-screen-ancestor",":-webkit-full-screen-ancestor")}}
- {{CSSxRef(":full-screen-document",":-webkit-full-screen-document")}}
- {{CSSxRef(":full-screen-controls-hidden",":-webkit-full-screen-controls-hidden")}}

\* Jetzt standardmäßig.

> [!NOTE]
> Wenn eine ungültige Pseudo-Klasse innerhalb einer Kette oder Gruppe von Selektoren vorhanden ist, ist die gesamte Selektorliste ungültig.

## Pseudo-Elemente

Aus Gründen der Web-Kompatibilität behandeln Blink-, WebKit- und Gecko-Browser alle Pseudo-Elemente, die mit `::-webkit-` beginnen, als gültig.

- {{CSSxRef("::file-selector-button","::-webkit-file-upload-button")}}\*
- {{CSSxRef("::-webkit-inner-spin-button", "::-webkit-inner-spin-button")}}
- {{CSSxRef("::placeholder", "::-webkit-input-placeholder")}}
- {{CSSxRef("::-webkit-meter-bar", "::-webkit-meter-bar")}}
- {{CSSxRef("::-webkit-meter-even-less-good-value", "::-webkit-meter-even-less-good-value")}}
- {{CSSxRef("::-webkit-meter-inner-element", "::-webkit-meter-inner-element")}}
- {{CSSxRef("::-webkit-meter-optimum-value", "::-webkit-meter-optimum-value")}}
- {{CSSxRef("::-webkit-meter-suboptimum-value", "::-webkit-meter-suboptimum-value")}}
- {{CSSxRef("::-webkit-progress-bar", "::-webkit-progress-bar")}}
- {{CSSxRef("::-webkit-progress-inner-element", "::-webkit-progress-inner-element")}}
- {{CSSxRef("::-webkit-progress-value", "::-webkit-progress-value")}}
- {{CSSxRef("::-webkit-search-cancel-button", "::-webkit-search-cancel-button")}}
- {{CSSxRef("::-webkit-search-results-button", "::-webkit-search-results-button")}}
- {{CSSxRef("::-webkit-slider-runnable-track", "::-webkit-slider-runnable-track")}}
- {{CSSxRef("::-webkit-slider-thumb", "::-webkit-slider-thumb")}}

\* Jetzt standardmäßig.

> [!NOTE]
> Allgemein gilt, wenn ein ungültiges Pseudo-Element oder eine ungültige Pseudo-Klasse innerhalb einer Kette oder Gruppe von Selektoren vorhanden ist, ist die gesamte Selektorliste ungültig. Wenn ein Pseudo-Element (aber nicht eine Pseudo-Klasse) ein -webkit- Präfix hat, betrachten die Blink-, WebKit- und Gecko-Browser ab Firefox 63 es als gültig, wodurch die Selektorliste nicht ungültig wird.

## Media-Features

- {{CSSxRef("@media/-webkit-animation", "-webkit-animation")}}
- {{CSSxRef("@media/-webkit-device-pixel-ratio", "-webkit-device-pixel-ratio")}}
- {{CSSxRef("@media/-webkit-transform-2d", "-webkit-transform-2d")}}
- {{CSSxRef("@media/-webkit-transform-3d", "-webkit-transform-3d")}}
- {{CSSxRef("@media/-webkit-transition", "-webkit-transition")}}

## Siehe auch

- Eintrag im Glossar zu {{Glossary("Vendor_Prefix", "Vendor Prefix")}}
- [Mozilla vendor-präfixierte CSS-Erweiterungen](/de/docs/Web/CSS/Mozilla_Extensions)
- [Styling Form Controls auf dem WebKit Trac](https://trac.webkit.org/wiki/Styling%20Form%20Controls)
