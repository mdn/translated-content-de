---
title: border-inline-color
slug: Web/CSS/border-inline-color
l10n:
  sourceCommit: 2adfb8760ac42c80966080e2e84211b14e43b589
---

{{CSSRef}}

Die **`border-inline-color`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Farbe der logischen Inline-Ränder eines Elements, die je nach Schreibrichtung, Richtung und Textausrichtung des Elements mit einer physischen Rahmenfarbe verbunden sind. Sie entspricht der Eigenschaft {{cssxref("border-top-color")}} und {{cssxref("border-bottom-color")}}, oder {{cssxref("border-right-color")}} und {{cssxref("border-left-color")}}, je nach den definierten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}}.

{{EmbedInteractiveExample("pages/css/border-inline-color.html")}}

Die Rahmenfarbe in der anderen Dimension kann mit {{cssxref("border-block-color")}} festgelegt werden, die {{cssxref("border-block-start-color")}} und {{cssxref("border-block-end-color")}} setzt.

## Syntax

```css
border-inline-color: yellow;
border-inline-color: #f5f6f7;

/* Globale Werte */
border-inline-color: inherit;
border-inline-color: initial;
border-inline-color: revert;
border-inline-color: revert-layer;
border-inline-color: unset;
```

### Werte

- {{CSSXref("&lt;color&gt;")}}
  - : Die Farbe des Rahmens.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Rahmenfarbe mit vertikalem Text

#### HTML

```html
<div>
  <p class="exampleText">Example text</p>
</div>
```

#### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-lr;
  border: 10px solid blue;
  border-inline-color: red;
}
```

#### Ergebnisse

{{EmbedLiveSample("Border_color_with_vertical_text", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logical Properties and Values](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Diese Eigenschaft wird den physischen Rahmen-Eigenschaften zugeordnet: {{cssxref("border-top-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}}, oder {{cssxref("border-left-color")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
