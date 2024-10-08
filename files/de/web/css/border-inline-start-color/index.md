---
title: border-inline-start-color
slug: Web/CSS/border-inline-start-color
l10n:
  sourceCommit: 2adfb8760ac42c80966080e2e84211b14e43b589
---

{{CSSRef}}

Die CSS-Eigenschaft **`border-inline-start-color`** definiert die Farbe des logischen Anfangsrandes einer Zeile eines Elements, die je nach Schreibmodus, Leserichtung und Textausrichtung des Elements einer physischen Randfarbe zugeordnet wird. Sie entspricht der Eigenschaft {{cssxref("border-top-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}} oder {{cssxref("border-left-color")}}, abhängig von den Werten, die für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} festgelegt sind.

{{EmbedInteractiveExample("pages/css/border-inline-start-color.html")}}

## Syntax

```css
border-inline-start-color: red;
border-inline-start-color: #ee4141;

/* Global values */
border-inline-start-color: inherit;
border-inline-start-color: initial;
border-inline-start-color: revert;
border-inline-start-color: revert-layer;
border-inline-start-color: unset;
```

Verwandte Eigenschaften sind {{cssxref("border-block-start-color")}}, {{cssxref("border-block-end-color")}} und {{cssxref("border-inline-end-color")}}, die die anderen Randfarben des Elements definieren.

### Werte

- {{CSSXref("&lt;color&gt;")}}
  - : Die Farbe des Randes.

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
  writing-mode: vertical-lr;
  border: 10px solid blue;
  border-inline-start-color: red;
}
```

{{EmbedLiveSample("Examples", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Diese Eigenschaft wird einer der physischen Randeigenschaften zugeordnet: {{cssxref("border-top-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}} und {{cssxref("border-left-color")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
