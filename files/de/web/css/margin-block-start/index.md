---
title: margin-block-start
slug: Web/CSS/margin-block-start
l10n:
  sourceCommit: 5e7d1f9ae2cce0cb3f7693dfb8dc6e8d375b2231
---

{{CSSRef}}

Die **`margin-block-start`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert den logischen Blockanfangsrand eines Elements, der je nach Schreibmodus, Richtung und Textausrichtung des Elements auf einen physischen Rand abgebildet wird.

{{EmbedInteractiveExample("pages/css/margin-block-start.html")}}

## Syntax

```css
/* <length> values */
margin-block-start: 10px; /* An absolute length */
margin-block-start: 1em; /* relative to the text size */
margin-block-start: 5%; /* relative to the nearest block container's width */

/* Keyword values */
margin-block-start: auto;

/* Global values */
margin-block-start: inherit;
margin-block-start: initial;
margin-block-start: revert;
margin-block-start: revert-layer;
margin-block-start: unset;
```

Sie entspricht der {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, oder {{cssxref("margin-left")}} Eigenschaft, abhängig von den für {{cssxref("writing-mode")}}, {{cssxref("direction")}}, und {{cssxref("text-orientation")}} definierten Werten.

Sie hängt mit {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}}, und {{cssxref("margin-inline-end")}} zusammen, die die anderen Ränder des Elements definieren.

### Werte

Die `margin-block-start` Eigenschaft nimmt die gleichen Werte wie die {{cssxref("margin-left")}} Eigenschaft an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Setzen des Blockanfangsrands

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
  margin-block-start: 20px;
  background-color: #c8c800;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_block_start_margin", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logical Properties and Values](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Die zugeordneten physischen Eigenschaften: {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, und {{cssxref("margin-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
