---
title: Firefox (-moz-) browser-spezifische CSS-Erweiterungen
slug: Web/CSS/Reference/Mozilla_extensions
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Ein {{Glossary("vendor_prefix", "browser-spezifisches Präfix")}} wird verwendet, um anzuzeigen, dass ein Feature spezifisch für einen bestimmten Browser ist. Firefox unterstützt mehrere Erweiterungen für [CSS](/de/docs/Web/CSS), die mit `-moz-` präfixiert sind.

## -moz-präfixierte Eigenschaften ohne standardisierte Entsprechungen

> [!NOTE]
> Diese Erweiterungen sind größtenteils experimentell oder veraltet, werden aber aus Gründen der Rückwärtskompatibilität beibehalten.
> Sie sollten diese nicht auf Produktionswebsites verwenden.

- {{CSSxRef("-moz-float-edge")}} {{deprecated_inline}}
- {{CSSxRef("-moz-force-broken-image-icon")}} {{deprecated_inline}}: Verwenden Sie stattdessen `alt`-Text.
- {{CSSxRef("-moz-orient")}}
- `-moz-osx-font-smoothing`: Eine ähnliche {{CSSxRef("font-smooth")}} Entsprechung existiert.
- {{CSSxRef("-moz-user-focus")}} {{deprecated_inline}}
- {{CSSxRef("-moz-user-input")}} {{deprecated_inline}}
- `-moz-user-modify`: Eine nicht präfixierte {{CSSxRef("user-modify")}} Entsprechung existiert, aber das HTML-Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) wird stattdessen empfohlen.

## -moz-präfixierte Eigenschaften mit standardisierten Entsprechungen

Die folgenden Eigenschaften wurden zuerst mit dem `-moz-` Präfix implementiert, werden nun aber in Firefox mit der Standard- (nicht präfixierten) Syntax unterstützt. Die Unterstützung für die präfixierte Version wird typischerweise irgendwann eingestellt, daher sollten Sie stattdessen die standardisierte Eigenschaft verwenden.

### A

- {{CSSxRef("animation", "-moz-animation")}} {{deprecated_inline}}: Präfixversion wird noch unterstützt.
- {{CSSxRef("animation-delay", "-moz-animation-delay")}} {{deprecated_inline}}: Präfixversion wird noch unterstützt.
- {{CSSxRef("animation-direction", "-moz-animation-direction")}} {{deprecated_inline}}: Präfixversion wird noch unterstützt.
- {{CSSxRef("animation-duration", "-moz-animation-duration")}} {{deprecated_inline}}: Präfixversion wird noch unterstützt.
- {{CSSxRef("animation-fill-mode", "-moz-animation-fill-mode")}} {{deprecated_inline}}: Präfixversion wird noch unterstützt.
- {{CSSxRef("animation-iteration-count", "-moz-animation-iteration-count")}} {{deprecated_inline}}: Präfixversion wird noch unterstützt.
- {{CSSxRef("animation-name", "-moz-animation-name")}} {{deprecated_inline}}: Präfixversion wird noch unterstützt.
- {{CSSxRef("animation-play-state", "-moz-animation-play-state")}} {{deprecated_inline}}: Präfixversion wird noch unterstützt.
- {{CSSxRef("animation-timing-function", "-moz-animation-timing-function")}} {{deprecated_inline}}: Präfixversion wird noch unterstützt.
- `-moz-appearance`: Die präfixierte Version von {{CSSxRef("appearance")}} wird noch unterstützt.

### B

- {{CSSxRef("backface-visibility", "-moz-backface-visibility")}} {{deprecated_inline}}: Präfixversion wird noch unterstützt.
- `-moz-background-clip` {{deprecated_inline}}: Nicht unterstützt; verwenden Sie {{CSSxRef("background-clip")}}.
- `-moz-background-origin` {{deprecated_inline}}: Nicht unterstützt; verwenden Sie {{CSSxRef("background-origin")}}.
- `-moz-box-align` {{deprecated_inline}}: Verwenden Sie [CSS Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) mit {{CSSxRef("align-items")}}.
- `-moz-background-inline-policy` {{deprecated_inline}}: Nicht unterstützt; verwenden Sie {{CSSxRef("box-decoration-break")}}.
- `-moz-box-direction` {{deprecated_inline}}: Verwenden Sie [CSS Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) mit {{CSSxRef("flex-direction")}}.
- `-moz-box-flex` {{deprecated_inline}}: Verwenden Sie [CSS Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) mit {{CSSxRef("flex-grow")}}.
- `-moz-box-ordinal-group` {{deprecated_inline}}: Verwenden Sie [CSS Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) mit {{CSSxRef("order")}}.
- `-moz-box-orient` {{deprecated_inline}}: Verwenden Sie [CSS Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) mit {{CSSxRef("flex-direction")}}.
- `-moz-box-pack` {{deprecated_inline}}: Verwenden Sie [CSS Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) mit {{CSSxRef("justify-content")}}.
- `-moz-background-size` {{deprecated_inline}}: Nicht unterstützt; verwenden Sie {{CSSxRef("background-size")}}.
- `-moz-border-end` {{deprecated_inline}}: Nicht unterstützt; verwenden Sie {{CSSxRef("border-inline-end")}}.
- `-moz-border-end-color` {{deprecated_inline}}: Nicht unterstützt; verwenden Sie {{CSSxRef("border-inline-end-color")}}.
- `-moz-border-end-style` {{deprecated_inline}}: Nicht unterstützt; verwenden Sie {{CSSxRef("border-inline-end-style")}}.
- `-moz-border-end-width` {{deprecated_inline}}: Nicht unterstützt; verwenden Sie {{CSSxRef("border-inline-end-width")}}.
- `-moz-border-image` {{deprecated_inline}}: Nicht unterstützt; verwenden Sie {{CSSxRef("border-inline-end-width")}}.
- `-moz-border-start` {{deprecated_inline}}: Nicht unterstützt; verwenden Sie {{CSSxRef("border-inline-start")}}.
- `-moz-border-start-color` {{deprecated_inline}}: Nicht unterstützt; verwenden Sie {{CSSxRef("border-inline-start-color")}}.
- `-moz-border-start-style` {{deprecated_inline}}: Nicht unterstützt; verwenden Sie {{CSSxRef("border-inline-start-style")}}.
- `-moz-border-start-width` {{deprecated_inline}}: Nicht unterstützt; verwenden Sie {{CSSxRef("border-inline-start-width")}}.
- {{CSSxRef("box-sizing", "-moz-box-sizing")}} {{deprecated_inline}}: Präfixversion wird noch unterstützt.

### C

- `-moz-column-count` {{deprecated_inline}}: Nicht unterstützt; verwenden Sie {{CSSxRef("column-count")}}.
- `-moz-column-fill` {{deprecated_inline}}: Nicht unterstützt; verwenden Sie {{CSSxRef("column-fill")}}.
- `-moz-column-gap` {{deprecated_inline}}: Nicht unterstützt; verwenden Sie {{CSSxRef("column-gap")}}.
- `-moz-column-width` {{deprecated_inline}}: Nicht unterstützt; verwenden Sie {{CSSxRef("column-width")}}.
- `-moz-column-rule` {{deprecated_inline}}: Nicht unterstützt; verwenden Sie {{CSSxRef("column-rule")}}.
- `-moz-column-rule-width` {{deprecated_inline}}: Nicht unterstützt; verwenden Sie {{CSSxRef("column-rule-width")}}.
- `-moz-column-rule-style` {{deprecated_inline}}: Nicht unterstützt; verwenden Sie {{CSSxRef("column-rule-style")}}.
- `-moz-column-rule-color` {{deprecated_inline}}: Nicht unterstützt; verwenden Sie {{CSSxRef("column-rule-color")}}.

### F–M

- {{CSSxRef("font-feature-settings", "-moz-font-feature-settings")}} {{deprecated_inline}}: Präfixversion wird noch unterstützt.
- {{CSSxRef("font-language-override", "-moz-font-language-override")}} {{deprecated_inline}}: Präfixversion wird noch unterstützt.
- {{CSSxRef("hyphens", "-moz-hyphens")}} {{deprecated_inline}}: Präfixversion wird noch unterstützt.
- `-moz-margin-end` {{deprecated_inline}}: Nicht unterstützt; verwenden Sie {{CSSxRef("margin-inline-end")}}.
- `-moz-margin-start` {{deprecated_inline}}: Nicht unterstützt; verwenden Sie {{CSSxRef("margin-inline-start")}}.

### O-P

- `-moz-opacity` {{deprecated_inline}}: Nicht unterstützt; verwenden Sie {{CSSxRef("opacity")}}.
- `-moz-outline` {{deprecated_inline}}: Nicht unterstützt; verwenden Sie {{CSSxRef("outline")}}.
- `-moz-outline-color` {{deprecated_inline}}: Nicht unterstützt; verwenden Sie {{CSSxRef("outline-color")}}.
- `-moz-outline-offset` {{deprecated_inline}}: Nicht unterstützt; verwenden Sie {{CSSxRef("outline-offset")}}.
- `-moz-outline-style` {{deprecated_inline}}: Nicht unterstützt; verwenden Sie {{CSSxRef("outline-style")}}.
- `-moz-outline-width` {{deprecated_inline}}: Nicht unterstützt; verwenden Sie {{CSSxRef("outline-width")}}.
- `-moz-padding-end` {{deprecated_inline}}: Nicht unterstützt; verwenden Sie {{CSSxRef("padding-inline-end")}}.
- `-moz-padding-start` {{deprecated_inline}}: Nicht unterstützt; verwenden Sie {{CSSxRef("padding-inline-start")}}.
- {{CSSxRef("perspective", "-moz-perspective")}} {{deprecated_inline}}: Präfixversion wird noch unterstützt.
- {{CSSxRef("perspective-origin", "-moz-perspective-origin")}} {{deprecated_inline}}: Präfixversion wird noch unterstützt.

### T–Z

- `-moz-tab-size`: Verwenden Sie {{CSSxRef("tab-size")}}
- `-moz-text-align-last` {{deprecated_inline}}: Nicht unterstützt; verwenden Sie {{CSSxRef("text-align-last")}}.
- `-moz-text-decoration-color` {{deprecated_inline}}: Nicht unterstützt; verwenden Sie {{CSSxRef("text-decoration-color")}}.
- `-moz-text-decoration-line` {{deprecated_inline}}: Nicht unterstützt; verwenden Sie {{CSSxRef("text-decoration-line")}}.
- `-moz-text-decoration-style` {{deprecated_inline}}: Nicht unterstützt; verwenden Sie {{CSSxRef("text-decoration-style")}}.
- `-moz-text-size-adjust`: Siehe {{CSSxRef("text-size-adjust")}} {{Experimental_Inline}}.
- {{CSSxRef("transform", "-moz-transform")}} {{deprecated_inline}}: Präfixversion wird noch unterstützt.
- {{CSSxRef("transform-origin", "-moz-transform-origin")}} {{deprecated_inline}}: Präfixversion wird noch unterstützt.
- {{CSSxRef("transform-style", "-moz-transform-style")}} {{deprecated_inline}}: Präfixversion wird noch unterstützt.
- `-moz-transition` {{deprecated_inline}}: Nicht unterstützt; verwenden Sie {{CSSxRef("transition")}}.
- `-moz-transition-delay` {{deprecated_inline}}: Nicht unterstützt; verwenden Sie {{CSSxRef("transition-delay")}}.
- `-moz-transition-duration` {{deprecated_inline}}: Nicht unterstützt; verwenden Sie {{CSSxRef("transition-duration")}}.
- `-moz-transition-property` {{deprecated_inline}}: Nicht unterstützt; verwenden Sie {{CSSxRef("transition-property")}}.
- `-moz-transition-timing-function` {{deprecated_inline}}: Nicht unterstützt; verwenden Sie {{CSSxRef("transition-timing-function")}}.
- `-moz-user-select`: Verwenden Sie {{CSSxRef("user-select")}}.

## -moz-präfixierte Eigenschaftswerte

### Globale Werte

- `-moz-initial`: Siehe {{CSSxRef("initial")}}.

### background-image

**Eigenschaft:** {{CSSxRef("background-image")}}

- `-moz-linear-gradient` {{deprecated_inline}}: Verwenden Sie {{CSSxRef("gradient/linear-gradient")}}.
- `-moz-radial-gradient` {{deprecated_inline}}: Verwenden Sie {{CSSxRef("gradient/radial-gradient")}}.
- `-moz-element` {{deprecated_inline}}: Verwenden Sie {{CSSxRef("element")}}.
- {{CSSxRef("-moz-image-rect")}} {{deprecated_inline}}

### order-style und outline-style

**Eigenschaften:** {{CSSxRef("border-style")}} und {{CSSxRef("outline-style")}}.

- `-moz-bg-inset` {{deprecated_inline}}
- `-moz-bg-outset` {{deprecated_inline}}
- `-moz-bg-solid` {{deprecated_inline}}

### &lt;color&gt; Schlüsselwörter

**Typ:** {{CSSxRef("&lt;color&gt;")}}

- `-moz-activehyperlinktext`
- `-moz-hyperlinktext`
- `-moz-visitedhyperlinktext`
- `-moz-buttonhoverface`
- `-moz-buttonhovertext`
- `-moz-default-background-color`
- `-moz-default-color`
- `-moz-cellhighlight`
- `-moz-cellhighlighttext`
- `-moz-field`
- `-moz-fieldtext`
- `-moz-dialog`
- `-moz-dialogtext`
- `-moz-menuhover`
- `-moz-menuhovertext`

### empty-cells

**Eigenschaft:** {{CSSxRef("empty-cells")}}

- `-moz-show-background` (Standardwert im Quirks-Modus)

### font-family

**Eigenschaft:** {{CSSxRef("font-family")}}

- `-moz-fixed`

### image-rendering

**Eigenschaft:** {{CSSxRef("image-rendering")}}

- `-moz-crisp-edges` {{deprecated_inline}}: Verwenden Sie [`crisp-edges`](/de/docs/Web/CSS/Reference/Properties/image-rendering#crisp-edges).

### &lt;length&gt;

**Typ:** {{CSSxRef("&lt;length&gt;")}}

- `-moz-calc`{{deprecated_inline}}: Verwenden Sie {{CSSxRef("calc")}}.

### list-style-type

**Eigenschaft:** {{CSSxRef("list-style-type")}}

Mehrere präfixierte Werte für `list-style-type` werden jetzt als Standardwerte ohne ein `-moz-` Präfix unterstützt, außer für die nachfolgend aufgeführten. Siehe [Browser-Kompatibilität](/de/docs/Web/CSS/Reference/Properties/list-style-type#browser_compatibility) für Details.

- `-moz-ethiopic-halehame`
- `-moz-ethiopic-halehame-am`
- `-moz-ethiopic-halehame-ti-er`
- `-moz-ethiopic-halehame-ti-et`
- `-moz-hangul`
- `-moz-hangul-consonant`
- `-moz-urdu`

### text-align

**Eigenschaft:** {{CSSxRef("text-align")}}

- `-moz-center` {{deprecated_inline}}: Verwenden Sie {{CSSxRef("text-align", "text-align: center")}}.
- `-moz-left` {{deprecated_inline}}: Verwenden Sie {{CSSxRef("text-align", "text-align: left")}}.
- `-moz-right` {{deprecated_inline}}: Verwenden Sie {{CSSxRef("text-align", "text-align: right")}}.

### width, min-width, und max-width

**Eigenschaften:** {{CSSxRef("width")}}, {{CSSxRef("min-width")}}, und {{CSSxRef("max-width")}}

- `-moz-min-content`: Siehe {{CSSxRef("min-content")}}.
- `-moz-fit-content`: Siehe {{CSSxRef("fit-content")}}.
- `-moz-max-content`: Siehe {{CSSxRef("max-content")}}.
- `-moz-available`: Siehe [`stretch`](/de/docs/Web/CSS/Reference/Properties/width#stretch).

## Pseudo-Klassen

- `:-moz-any` {{deprecated_inline}}: Verwenden Sie {{CSSxRef(":is")}}.
- `:-moz-any-link` {{deprecated_inline}}: Verwenden Sie {{CSSxRef(":any-link")}}.
- {{CSSxRef(":-moz-broken")}} {{deprecated_inline}}
- {{CSSxRef(":-moz-drag-over")}}
- {{CSSxRef(":-moz-first-node")}}
- `:-moz-full-screen` {{deprecated_inline}}: Nicht unterstützt; verwenden Sie {{CSSxRef(":fullscreen")}}.
- `:-moz-full-screen-ancestor` {{deprecated_inline}}: Nicht unterstützt; verwenden Sie {{CSSxRef(":fullscreen")}}.
- {{CSSxRef(":-moz-handler-blocked")}}
- {{CSSxRef(":-moz-handler-crashed")}}
- {{CSSxRef(":-moz-handler-disabled")}}
- {{CSSxRef(":-moz-last-node")}}
- {{CSSxRef(":-moz-loading")}}
- {{CSSxRef(":-moz-locale-dir_ltr", ":-moz-locale-dir(ltr)")}}
- {{CSSxRef(":-moz-locale-dir_rtl", ":-moz-locale-dir(rtl)")}}
- `:-moz-native-anonymous`
- `:-moz-placeholder` {{deprecated_inline}}: Verwenden Sie {{CSSxRef(":placeholder-shown")}}.
- {{CSSxRef(":-moz-only-whitespace")}}
- `:-moz-read-only` {{deprecated_inline}}: Verwenden Sie {{CSSxRef(":read-only")}}.
- `:-moz-read-write` {{deprecated_inline}}: Verwenden Sie {{CSSxRef(":read-write")}}.
- {{CSSxRef(":-moz-submit-invalid")}}: Siehe {{CSSxRef(":invalid")}}.
- {{CSSxRef(":-moz-suppressed")}}
- `:-moz-ui-invalid` {{deprecated_inline}}: Verwenden Sie {{CSSxRef(":user-invalid")}}.
- `:-moz-ui-valid` {{deprecated_inline}}: Verwenden Sie {{CSSxRef(":user-valid")}}.
- {{CSSxRef(":-moz-user-disabled")}}
- {{CSSxRef(":-moz-window-inactive")}}

## Pseudo-Elemente

- `::-moz-canvas`
- `::-moz-cell-content`
- {{CSSxRef("::-moz-color-swatch")}}
- {{CSSxRef("::-moz-focus-inner")}}
- `::-moz-focus-outer`
- `::-moz-inline-table`
- {{CSSxRef("::-moz-list-bullet")}}
- {{CSSxRef("::-moz-list-number")}}
- {{CSSxRef("::-moz-meter-bar")}}
- `::-moz-pagebreak`
- `::-moz-pagecontent`
- `::-moz-placeholder` {{deprecated_inline}}: Verwenden Sie {{CSSxRef("::placeholder")}}.
- {{CSSxRef("::-moz-progress-bar")}}
- {{CSSxRef("::-moz-range-progress")}}
- {{CSSxRef("::-moz-range-thumb")}}
- {{CSSxRef("::-moz-range-track")}}
- `::-moz-scrolled-canvas`
- `::-moz-scrolled-content`
- `::-moz-selection` {{deprecated_inline}}: Verwenden Sie {{CSSxRef("::selection")}}.
- `::-moz-svg-foreign-content`
- `::-moz-table`
- `::-moz-table-cell`
- `::-moz-table-column`
- `::-moz-table-column-group`
- `::-moz-table-outer`
- `::-moz-table-row`
- `::-moz-table-row-group`
- `::-moz-viewport`
- `::-moz-viewport-scroll`

## At-Regeln

- {{CSSxRef("@document", "@-moz-document")}}

## Medien-Features

- {{CSSxRef("@media/-moz-device-pixel-ratio", "-moz-device-pixel-ratio")}} {{deprecated_inline}}
- `-moz-platform`
- `-moz-windows-glass`

## Sonstiges

- `-moz-alt-content`: Siehe [Firefox-Bug 11011](https://bugzil.la/11011)

## Siehe auch

- [WebKit (-webkit-) browser-spezifische CSS-Erweiterungen](/de/docs/Web/CSS/Reference/Webkit_extensions)
- Eintrag im {{Glossary("Vendor_Prefix", "Glossar für browser-spezifische Präfixe")}}
