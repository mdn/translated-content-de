---
title: border-inline-width
slug: Web/CSS/border-inline-width
l10n:
  sourceCommit: 2adfb8760ac42c80966080e2e84211b14e43b589
---

{{CSSRef}}

Die **`border-inline-width`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Breite der logischen Inline-Ränder eines Elements, die je nach Schreibmodus, Richtung und Textausrichtung des Elements auf eine physische Rahmenbreite abbildet. Sie entspricht der {{cssxref("border-top-width")}} und {{cssxref("border-bottom-width")}}, oder {{cssxref("border-left-width")}}, und {{cssxref("border-right-width")}} Eigenschaft, abhängig von den definierten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}}, und {{cssxref("text-orientation")}}.

{{EmbedInteractiveExample("pages/css/border-inline-width.html")}}

Die Rahmenbreite in der anderen Dimension kann mit {{cssxref("border-block-width")}} gesetzt werden, was {{cssxref("border-block-start-width")}}, und {{cssxref("border-block-end-width")}} setzt.

## Syntax

```css
/* <'border-width'> values */
border-inline-width: 5px 10px;
border-inline-width: 5px;
border-inline-width: thick;

/* Global values */
border-inline-width: inherit;
border-inline-width: initial;
border-inline-width: revert;
border-inline-width: revert-layer;
border-inline-width: unset;
```

### Werte

- `<'border-width'>`
  - : Die Breite des Rahmens. Siehe {{ cssxref("border-width") }}.

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
  border: 1px solid blue;
  border-inline-width: 5px 10px;
}
```

{{EmbedLiveSample("Examples", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Diese Eigenschaft wird einer der physischen Rahmen-Eigenschaften zugeordnet: {{cssxref("border-top-width")}}, {{cssxref("border-right-width")}}, {{cssxref("border-bottom-width")}}, und {{cssxref("border-left-width")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
