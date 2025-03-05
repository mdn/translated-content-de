---
title: border-inline-end
slug: Web/CSS/border-inline-end
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

Die CSS-Eigenschaft **`border-inline-end`** ist eine [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) zum Festlegen der einzelnen logischen `inline-end`-Rand-Eigenschaftswerte an einer einzigen Stelle im Stylesheet.

{{EmbedInteractiveExample("pages/css/border-inline-end.html")}}

## Bestandteile der Eigenschaft

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`border-inline-end-color`](/de/docs/Web/CSS/border-inline-end-color)
- [`border-inline-end-style`](/de/docs/Web/CSS/border-inline-end-style)
- [`border-inline-end-width`](/de/docs/Web/CSS/border-inline-end-width)

## Syntax

```css
border-inline-end: 1px;
border-inline-end: 2px dashed;
border-inline-end: medium dashed blue;

/* Global values */
border-inline-end: inherit;
border-inline-end: initial;
border-inline-end: revert;
border-inline-end: revert-layer;
border-inline-end: unset;
```

Der physische Rand, auf den `border-inline-end` verweist, hängt vom Schreibmodus, der Richtung und der Textausrichtung des Elements ab. Es entspricht der Eigenschaft {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}} oder {{cssxref("border-left")}} abhängig von den definierten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}}.

Verwandte Eigenschaften sind {{cssxref("border-block-start")}}, {{cssxref("border-block-end")}} und {{cssxref("border-inline-start")}}, die die anderen Ränder des Elements definieren.

### Werte

`border-inline-end` wird mit einem oder mehreren der folgenden Werte in beliebiger Reihenfolge angegeben:

- `<'border-width'>`
  - : Die Breite des Rands. Siehe {{cssxref("border-width")}}.
- `<'border-style'>`
  - : Der Linienstil des Rands. Siehe {{cssxref("border-style")}}.
- {{CSSXref("&lt;color&gt;")}}
  - : Die Farbe des Rands.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### HTML

```html
<div>
  <p class="exampleText">Example text</p>
</div>
```

### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-rl;
  border-inline-end: 5px dashed blue;
}
```

{{EmbedLiveSample("Examples", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Diese Eigenschaft wird auf eine der physischen Rand-Eigenschaften abgebildet: {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, oder {{cssxref("border-left")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
