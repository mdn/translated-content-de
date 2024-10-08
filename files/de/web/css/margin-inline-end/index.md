---
title: margin-inline-end
slug: Web/CSS/margin-inline-end
l10n:
  sourceCommit: 5e7d1f9ae2cce0cb3f7693dfb8dc6e8d375b2231
---

{{CSSRef}}

Die **`margin-inline-end`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert den logischen Inline-Endrand eines Elements, der je nach Schreibmodus, Richtung und Textausrichtung des Elements auf einen physischen Rand abgebildet wird. Mit anderen Worten, sie entspricht der Eigenschaft {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}} oder {{cssxref("margin-left")}}, abhängig von den definierten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}}.

{{EmbedInteractiveExample("pages/css/margin-inline-end.html")}}

## Syntax

```css
/* <length> values */
margin-inline-end: 10px; /* An absolute length */
margin-inline-end: 1em; /* relative to the text size */
margin-inline-end: 5%; /* relative to the nearest block container's width */

/* Keyword values */
margin-inline-end: auto;

/* Global values */
margin-inline-end: inherit;
margin-inline-end: initial;
margin-inline-end: revert;
margin-inline-end: revert-layer;
margin-inline-end: unset;
```

Sie steht im Zusammenhang mit {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}} und {{cssxref("margin-inline-start")}}, die die anderen Ränder des Elements definieren.

### Werte

Die Eigenschaft `margin-inline-end` nimmt die gleichen Werte an wie die Eigenschaft {{cssxref("margin-left")}}.

## Formale Definition

{{cssinfo}}

## Formaler Syntax

{{csssyntax}}

## Beispiele

### Inline-Endrand festlegen

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
  margin-inline-end: 20px;
  background-color: #c8c800;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_inline_end_margin", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logical Properties and Values](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- {{cssxref("margin-inline-start")}}
- Die zugeordneten physischen Eigenschaften: {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, und {{cssxref("margin-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
