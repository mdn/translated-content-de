---
title: border-block-start-width
slug: Web/CSS/border-block-start-width
l10n:
  sourceCommit: 2adfb8760ac42c80966080e2e84211b14e43b589
---

{{CSSRef}}

Die **`border-block-start-width`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Breite des logischen Blockstart-Rahmens eines Elements, der je nach Schreibmodus, Richtung und Textorientierung des Elements einer physikalischen Rahmenbreite zugeordnet wird. Sie entspricht der {{cssxref("border-top-width")}}, {{cssxref("border-right-width")}}, {{cssxref("border-bottom-width")}}, oder {{cssxref("border-left-width")}} Eigenschaft, je nachdem, welche Werte für {{cssxref("writing-mode")}}, {{cssxref("direction")}}, und {{cssxref("text-orientation")}} definiert sind.

{{EmbedInteractiveExample("pages/css/border-block-start-width.html")}}

## Syntax

```css
/* <'border-width'> values */
border-block-start-width: 5px;
border-block-start-width: thick;

/* Global values */
border-block-start-width: inherit;
border-block-start-width: initial;
border-block-start-width: revert;
border-block-start-width: revert-layer;
border-block-start-width: unset;
```

Verwandte Eigenschaften sind {{cssxref("border-block-end-width")}}, {{cssxref("border-inline-start-width")}}, und {{cssxref("border-inline-end-width")}}, die die anderen Rahmenbreiten des Elements definieren.

### Werte

- `<'border-width'>`
  - : Die Breite des Rahmens. Siehe {{ cssxref("border-width") }}.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Rahmenbreite mit vertikalem Text

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
  border: 1px solid blue;
  border-block-start-width: 5px;
}
```

#### Ergebnisse

{{EmbedLiveSample("Border_width_with_vertical_text", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logical Properties and Values](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Diese Eigenschaft wird einer der physikalischen Rahmen-Eigenschaften zugeordnet: {{cssxref("border-top-width")}}, {{cssxref("border-right-width")}}, {{cssxref("border-bottom-width")}}, und {{cssxref("border-left-width")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
