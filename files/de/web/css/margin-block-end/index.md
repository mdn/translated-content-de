---
title: margin-block-end
slug: Web/CSS/margin-block-end
l10n:
  sourceCommit: 5e7d1f9ae2cce0cb3f7693dfb8dc6e8d375b2231
---

{{CSSRef}}

Die **`margin-block-end`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert den logischen Blockendrand eines Elements, der abhängig vom Schreibmodus, der Richtung und der Textausrichtung des Elements auf einen physischen Rand abgebildet wird.

{{EmbedInteractiveExample("pages/css/margin-block-end.html")}}

## Syntax

```css
/* <length> values */
margin-block-end: 10px; /* An absolute length */
margin-block-end: 1em; /* relative to the text size */
margin-block-end: 5%; /* relative to the nearest block container's width */

/* Keyword values */
margin-block-end: auto;

/* Global values */
margin-block-end: inherit;
margin-block-end: initial;
margin-block-end: revert;
margin-block-end: revert-layer;
margin-block-end: unset;
```

Sie entspricht der Eigenschaft {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, oder {{cssxref("margin-left")}} abhängig von den definierten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}}, und {{cssxref("text-orientation")}}.

Sie steht in Beziehung zu {{cssxref("margin-block-start")}}, {{cssxref("margin-inline-start")}}, und {{cssxref("margin-inline-end")}}, die die anderen Ränder des Elements definieren.

### Werte

Die Eigenschaft `margin-block-end` nimmt die gleichen Werte wie die {{cssxref("margin-left")}} Eigenschaft an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegung des Blockendrandes

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
  writing-mode: vertical-rl;
  margin-block-end: 20px;
  background-color: #c8c800;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_block_end_margin", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logical Properties and Values](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Die abgebildeten physischen Eigenschaften: {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, und {{cssxref("margin-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
