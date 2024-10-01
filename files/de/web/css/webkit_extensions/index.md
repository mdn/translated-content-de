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
- {{CSSxRef("-webkit-box-reflect")}} (unterstützt mit `-webkit-` von jedem Browser aus Kompatibilitätsgründen)
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
- {{CSSxRef("-webkit-mask-position-x")}} (unterstützt mit `-webkit-` von jedem Browser aus Kompatibilitätsgründen)
- {{CSSxRef("-webkit-mask-position-y")}} (unterstützt mit `-webkit-` von jedem Browser aus Kompatibilitätsgründen)
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

Mehrere alte `-webkit-`-präfixierte Eigenschaften haben standardisierte Entsprechungen. Auch wenn Name und Syntax unterschiedlich sein können, sollten sie überhaupt nicht mehr verwendet werden.

Verwenden Sie für jede von ihnen die angegebene standardisierte Entsprechung.

### A-B

- `-webkit-border-after`
  - : Verwenden Sie stattdessen die Standard-Eigenschaft {{CSSxRef("border-block-end")}}.
- `-webkit-border-after-color`
  - : Verwenden Sie stattdessen die Standard-Eigenschaft {{CSSxRef("border-block-end-color")}}.
- `-webkit-border-after-style`
  - : Verwenden Sie stattdessen die Standard-Eigenschaft {{CSSxRef("border-block-end-style")}}.
- `-webkit-border-after-width`
  - : Verwenden Sie stattdessen die Standard-Eigenschaft {{CSSxRef("border-block-end-width")}}.
- `-webkit-border-before`
  - : Verwenden Sie stattdessen die Standard-Eigenschaft {{CSSxRef("border-block-start")}}.
- `-webkit-border-before-color`
  - : Verwenden Sie stattdessen die Standard-Eigenschaft {{CSSxRef("border-block-start-color")}}.
- `-webkit-border-before-style`
  - : Verwenden Sie stattdessen die Standard-Eigenschaft {{CSSxRef("border-block-start-style")}}.
- `-webkit-border-before-width`
  - : Verwenden Sie stattdessen die Standard-Eigenschaft {{CSSxRef("border-block-start-width")}}.
- `-webkit-border-end`
  - : Verwenden Sie stattdessen die Standard-Eigenschaft {{CSSxRef("border-inline-end")}}.
- `-webkit-border-end-color`
  - : Verwenden Sie stattdessen die Standard-Eigenschaft {{CSSxRef("border-inline-end-color")}}.
- `-webkit-border-end-style`
  - : Verwenden Sie stattdessen die Standard-Eigenschaft {{CSSxRef("border-inline-end-style")}}.
- `-webkit-border-end-width`
  - : Verwenden Sie stattdessen die Standard-Eigenschaft {{CSSxRef("border-inline-end-width")}}.
- `-webkit-border-start`
  - : Verwenden Sie stattdessen die Standard-Eigenschaft {{CSSxRef("border-inline-start")}}.
- `-webkit-border-start-color`
  - : Verwenden Sie stattdessen die Standard-Eigenschaft {{CSSxRef("border-inline-start-color")}}.
- `-webkit-border-start-style`
  - : Verwenden Sie stattdessen die Standard-Eigenschaft {{CSSxRef("border-inline-start-style")}}.
- `-webkit-border-start-width`
  - : Verwenden Sie stattdessen die Standard-Eigenschaft {{CSSxRef("border-inline-start-width")}}.
- `-webkit-box-align`
  - : Verwenden Sie stattdessen das [CSS flexible box layout](/de/docs/Web/CSS/CSS_flexible_box_layout) mit der Standard-Eigenschaft {{CSSxRef("align-items")}}.
- `-webkit-box-direction`
  - : Verwenden Sie stattdessen das [CSS flexible box layout](/de/docs/Web/CSS/CSS_flexible_box_layout) mit der Standard-Eigenschaft {{CSSxRef("flex-direction")}}.
- {{CSSxRef("box-flex-group", "-webkit-box-flex-group")}}
  - : Verwenden Sie stattdessen das [CSS flexible box layout](/de/docs/Web/CSS/CSS_flexible_box_layout) mit den Standard-Eigenschaften {{cssxref("flex-basis")}}, {{cssxref("flex-grow")}} und {{cssxref("flex-shrink")}}.
- `-webkit-box-flex`
  - : Verwenden Sie stattdessen das [CSS flexible box layout](/de/docs/Web/CSS/CSS_flexible_box_layout) mit der Standard-Eigenschaft {{CSSxRef("flex-grow")}}.
- `-webkit-box-lines`
  - : Verwenden Sie stattdessen das [CSS flexible box layout](/de/docs/Web/CSS/CSS_flexible_box_layout) mit der Standard-Eigenschaft {{CSSxRef("flex-flow")}}.
- `-webkit-box-ordinal-group`
  - : Verwenden Sie stattdessen das [CSS flexible box layout](/de/docs/Web/CSS/CSS_flexible_box_layout) mit der Standard-Eigenschaft {{CSSxRef("order")}}.
- `-webkit-box-orient`
  - : Verwenden Sie stattdessen das [CSS flexible box layout](/de/docs/Web/CSS/CSS_flexible_box_layout) mit der Standard-Eigenschaft {{CSSxRef("flex-direction")}}.
- `-webkit-box-pack`
  - : Verwenden Sie stattdessen das [CSS flexible box layout](/de/docs/Web/CSS/CSS_flexible_box_layout) mit der Standard-Eigenschaft {{CSSxRef("justify-content")}}.

### C-I

- `-webkit-column-break-after`
  - : Verwenden Sie stattdessen das [CSS Multicolumn Layout](/de/docs/Web/CSS/CSS_multicol_layout) mit der Standard-Eigenschaft {{cssxref("break-after")}}.
- `-webkit-column-break-before`
  - : Verwenden Sie stattdessen das [CSS Multicolumn Layout](/de/docs/Web/CSS/CSS_multicol_layout) mit der Standard-Eigenschaft {{cssxref("break-before")}}.
- `-webkit-column-break-inside`
  - : Verwenden Sie stattdessen das [CSS Multicolumn Layout](/de/docs/Web/CSS/CSS_multicol_layout) mit der Standard-Eigenschaft {{cssxref("break-inside")}}.
- `-webkit-font-feature-settings`
  - : Verwenden Sie stattdessen die Eigenschaft [`font-feature-settings`](/de/docs/Web/CSS/font-feature-settings).
- `-webkit-hyphenate-character`
  - : Verwenden Sie stattdessen die Standard-Eigenschaft {{cssxref("hyphenate-character")}}.
- `-webkit-initial-letter`
  - : Verwenden Sie stattdessen die Standard-Eigenschaft {{cssxref("initial-letter")}}.

### J-Z

- `-webkit-margin-end`
  - : Verwenden Sie stattdessen die Standard-Eigenschaft {{CSSxRef("margin-block-end")}}.
- `-webkit-margin-start`
  - : Verwenden Sie stattdessen die Standard-Eigenschaft {{CSSxRef("margin-block-start")}}.
- `-webkit-padding-after`
  - : Verwenden Sie stattdessen die Standard-Eigenschaft {{CSSxRef("padding-block-end")}}.
- `-webkit-padding-before`
  - : Verwenden Sie stattdessen die Standard-Eigenschaft {{CSSxRef("padding-block-start")}}.
- `-webkit-padding-end`
  - : Verwenden Sie stattdessen die Standard-Eigenschaft {{CSSxRef("padding-inline-end")}}.
- `-webkit-padding-start`
  - : Verwenden Sie stattdessen die Standard-Eigenschaft {{CSSxRef("padding-inline-start")}}.

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
> Wenn eine ungültige Pseudoklasse in einer Gruppe von Selektoren enthalten ist, ist die gesamte Selektorliste ungültig.

## Pseudoelemente

Aus Gründen der Web-Kompatibilität behandeln Blink-, WebKit- und Gecko-Browser alle mit `::-webkit-` beginnenden Pseudoelemente als gültig.

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
> Generell gilt: Wenn ein ungültiges Pseudoelement oder eine Pseudoklasse in einer Gruppe von Selektoren enthalten ist, ist die gesamte Selektorliste ungültig. Hat ein Pseudoelement (nicht Pseudoklasse) jedoch ein -webkit-Präfix, wird ab Firefox 63 von Blink-, WebKit- und Gecko-Browsern angenommen, dass es gültig ist, wodurch die Selektorliste nicht ungültig wird.

## Medienfunktionen

- {{CSSxRef("@media/-webkit-animation", "-webkit-animation")}}
- {{CSSxRef("@media/-webkit-device-pixel-ratio", "-webkit-device-pixel-ratio")}}
- {{CSSxRef("@media/-webkit-transform-2d", "-webkit-transform-2d")}}
- {{CSSxRef("@media/-webkit-transform-3d", "-webkit-transform-3d")}}
- {{CSSxRef("@media/-webkit-transition", "-webkit-transition")}}

## Siehe auch

- Glossareintrag {{Glossary("Vendor_Prefix", "Vendor Prefix")}}
- [Mozilla vendor-präfizierte CSS-Erweiterungen](/de/docs/Web/CSS/Mozilla_Extensions)
- [Styling von Formularelementen im WebKit Trac](https://trac.webkit.org/wiki/Styling%20Form%20Controls)
