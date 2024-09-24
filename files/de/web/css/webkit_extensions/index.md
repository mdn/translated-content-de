---
title: "-webkit-präfixierte CSS-Erweiterungen"
slug: Web/CSS/WebKit_Extensions
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{CSSRef}}

Benutzeragenten, die auf WebKit oder Blink basieren, wie Safari und Chrome, unterstützen mehrere spezielle Erweiterungen für [CSS](/de/docs/Web/CSS). Diese Erweiterungen sind mit `-webkit-` vorangestellt.

## -webkit-präfixierte Eigenschaften ohne standardisierte Entsprechungen

> [!NOTE]
> Vermeiden Sie die Verwendung auf Websites. Diese Eigenschaften funktionieren nur in WebKit- oder Blink-basierten Browsern, es sei denn, es ist anders angegeben.

### A-C

- {{CSSxRef("-webkit-app-region")}}
- {{CSSxRef("-webkit-border-horizontal-spacing")}}
- {{CSSxRef("-webkit-border-vertical-spacing")}}
- {{CSSxRef("-webkit-box-reflect")}} (unterstützt mit `-webkit-` durch jeden Browser, aus Kompatibilitätsgründen)
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
- {{CSSxRef("-webkit-mask-position-x")}} (unterstützt mit `-webkit-` durch jeden Browser, aus Kompatibilitätsgründen)
- {{CSSxRef("-webkit-mask-position-y")}} (unterstützt mit `-webkit-` durch jeden Browser, aus Kompatibilitätsgründen)
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

## -webkit-präfixierte Eigenschaften mit standardisierten Entsprechungen

Einige alte `-webkit-` präfixierte Eigenschaften haben standardisierte Entsprechungen. Auch wenn Name und Syntax unterschiedlich sein können, sollten sie nicht mehr verwendet werden.

Verwenden Sie für jede von ihnen die angegebene standardisierte Entsprechung.

### A-B

- `-webkit-border-after`
  - : Verwenden Sie stattdessen die standardisierte {{CSSxRef("border-block-end")}} Eigenschaft.
- `-webkit-border-after-color`
  - : Verwenden Sie stattdessen die standardisierte {{CSSxRef("border-block-end-color")}} Eigenschaft.
- `-webkit-border-after-style`
  - : Verwenden Sie stattdessen die standardisierte {{CSSxRef("border-block-end-style")}} Eigenschaft.
- `-webkit-border-after-width`
  - : Verwenden Sie stattdessen die standardisierte {{CSSxRef("border-block-end-width")}} Eigenschaft.
- `-webkit-border-before`
  - : Verwenden Sie stattdessen die standardisierte {{CSSxRef("border-block-start")}} Eigenschaft.
- `-webkit-border-before-color`
  - : Verwenden Sie stattdessen die standardisierte {{CSSxRef("border-block-start-color")}} Eigenschaft.
- `-webkit-border-before-style`
  - : Verwenden Sie stattdessen die standardisierte {{CSSxRef("border-block-start-style")}} Eigenschaft.
- `-webkit-border-before-width`
  - : Verwenden Sie stattdessen die standardisierte {{CSSxRef("border-block-start-width")}} Eigenschaft.
- `-webkit-border-end`
  - : Verwenden Sie stattdessen die standardisierte {{CSSxRef("border-inline-end")}} Eigenschaft.
- `-webkit-border-end-color`
  - : Verwenden Sie stattdessen die standardisierte {{CSSxRef("border-inline-end-color")}} Eigenschaft.
- `-webkit-border-end-style`
  - : Verwenden Sie stattdessen die standardisierte {{CSSxRef("border-inline-end-style")}} Eigenschaft.
- `-webkit-border-end-width`
  - : Verwenden Sie stattdessen die standardisierte {{CSSxRef("border-inline-end-width")}} Eigenschaft.
- `-webkit-border-start`
  - : Verwenden Sie stattdessen die standardisierte {{CSSxRef("border-inline-start")}} Eigenschaft.
- `-webkit-border-start-color`
  - : Verwenden Sie stattdessen die standardisierte {{CSSxRef("border-inline-start-color")}} Eigenschaft.
- `-webkit-border-start-style`
  - : Verwenden Sie stattdessen die standardisierte {{CSSxRef("border-inline-start-style")}} Eigenschaft.
- `-webkit-border-start-width`
  - : Verwenden Sie stattdessen die standardisierte {{CSSxRef("border-inline-start-width")}} Eigenschaft.
- `-webkit-box-align`
  - : Verwenden Sie das [CSS-Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) mit der standardisierten {{CSSxRef("align-items")}} Eigenschaft stattdessen.
- `-webkit-box-direction`
  - : Verwenden Sie das [CSS-Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) mit der standardisierten {{CSSxRef("flex-direction")}} Eigenschaft stattdessen.
- {{CSSxRef("box-flex-group", "-webkit-box-flex-group")}}
  - : Verwenden Sie das [CSS-Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) mit den standardisierten Eigenschaften {{cssxref("flex-basis")}}, {{cssxref("flex-grow")}}, und {{cssxref("flex-shrink")}} statt.
- `-webkit-box-flex`
  - : Verwenden Sie das [CSS-Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) mit der standardisierten {{CSSxRef("flex-grow")}} Eigenschaft stattdessen.
- `-webkit-box-lines`
  - : Verwenden Sie das [CSS-Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) mit der standardisierten {{CSSxRef("flex-flow")}} Eigenschaft stattdessen.
- `-webkit-box-ordinal-group`
  - : Verwenden Sie das [CSS-Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) mit der standardisierten {{CSSxRef("order")}} Eigenschaft stattdessen.
- `-webkit-box-orient`
  - : Verwenden Sie das [CSS-Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) mit der standardisierten {{CSSxRef("flex-direction")}} Eigenschaft statt.
- `-webkit-box-pack`
  - : Verwenden Sie das [CSS-Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) mit der standardisierten {{CSSxRef("justify-content")}} Eigenschaft stattdessen.

### C-I

- `-webkit-column-break-after`
  - : Verwenden Sie das [CSS-Mehrspaltenlayout](/de/docs/Web/CSS/CSS_multicol_layout) mit der standardisierten {{cssxref("break-after")}} Eigenschaft stattdessen.
- `-webkit-column-break-before`
  - : Verwenden Sie das [CSS-Mehrspaltenlayout](/de/docs/Web/CSS/CSS_multicol_layout) mit der standardisierten {{cssxref("break-before")}} Eigenschaft stattdessen.
- `-webkit-column-break-inside`
  - : Verwenden Sie das [CSS-Mehrspaltenlayout](/de/docs/Web/CSS/CSS_multicol_layout) mit der standardisierten {{cssxref("break-inside")}} Eigenschaft stattdessen.
- `-webkit-font-feature-settings`
  - : Verwenden Sie stattdessen die [`font-feature-settings`](/de/docs/Web/CSS/font-feature-settings) Eigenschaft.
- `-webkit-hyphenate-character`
  - : Verwenden Sie stattdessen die standardisierte {{cssxref("hyphenate-character")}} Eigenschaft.
- `-webkit-initial-letter`
  - : Verwenden Sie stattdessen die standardisierte {{cssxref("initial-letter")}} Eigenschaft.

### J-Z

- `-webkit-margin-end`
  - : Verwenden Sie stattdessen die standardisierte {{CSSxRef("margin-block-end")}} Eigenschaft.
- `-webkit-margin-start`
  - : Verwenden Sie stattdessen die standardisierte {{CSSxRef("margin-block-start")}} Eigenschaft.
- `-webkit-padding-after`
  - : Verwenden Sie stattdessen die standardisierte {{CSSxRef("padding-block-end")}} Eigenschaft.
- `-webkit-padding-before`
  - : Verwenden Sie stattdessen die standardisierte {{CSSxRef("padding-block-start")}} Eigenschaft.
- `-webkit-padding-end`
  - : Verwenden Sie stattdessen die standardisierte {{CSSxRef("padding-inline-end")}} Eigenschaft.
- `-webkit-padding-start`
  - : Verwenden Sie stattdessen die standardisierte {{CSSxRef("padding-inline-start")}} Eigenschaft.

## Pseudoklassen

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

\* Jetzt standardisiert.

> [!NOTE]
> Wenn innerhalb einer Kette oder Gruppe von Selektoren eine ungültige Pseudoklasse vorhanden ist, ist die gesamte Selektorliste ungültig.

## Pseudoelemente

Aus Gründen der Webkompatibilität behandeln Blink-, WebKit- und Gecko-Browser alle Pseudoelemente, die mit `::-webkit-` beginnen, als gültig.

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

\* Jetzt standardisiert.

> [!NOTE]
> Generell gilt: Wenn innerhalb einer Kette oder Gruppe von Selektoren ein ungültiges Pseudoelement oder eine ungültige Pseudoklasse vorhanden ist, ist die gesamte Selektorliste ungültig. Wenn ein Pseudoelement (aber nicht eine Pseudoklasse) ein -webkit- Präfix hat, gehen ab Firefox 63 Blink-, WebKit- und Gecko-Browser davon aus, dass es gültig ist, und die Selektorliste wird nicht ungültig.

## Medienmerkmale

- {{CSSxRef("@media/-webkit-animation", "-webkit-animation")}}
- {{CSSxRef("@media/-webkit-device-pixel-ratio", "-webkit-device-pixel-ratio")}}
- {{CSSxRef("@media/-webkit-transform-2d", "-webkit-transform-2d")}}
- {{CSSxRef("@media/-webkit-transform-3d", "-webkit-transform-3d")}}
- {{CSSxRef("@media/-webkit-transition", "-webkit-transition")}}

## Siehe auch

- [Vendorspezifisches Präfix](/de/docs/Glossary/Vendor_Prefix) Glossareintrag
- [Mozilla vendor-präfixierte CSS-Erweiterungen](/de/docs/Web/CSS/Mozilla_Extensions)
- [Styling von Formularelementen auf dem WebKit Trac](https://trac.webkit.org/wiki/Styling%20Form%20Controls)
