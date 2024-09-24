---
title: margin-inline-end
slug: Web/CSS/margin-inline-end
l10n:
  sourceCommit: 5e7d1f9ae2cce0cb3f7693dfb8dc6e8d375b2231
---

{{CSSRef}}

Die **`margin-inline-end`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert den logischen Inline-Endrand eines Elements, der je nach Schreibrichtung, Richtung und Textausrichtung des Elements einer physischen Begrenzung zugeordnet wird. Mit anderen Worten, sie entspricht der {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}} oder {{cssxref("margin-left")}} Eigenschaft, abhängig von den für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} definierten Werten.

{{EmbedInteractiveExample("pages/css/margin-inline-end.html")}}

## Syntax

```css
/* <length> Werte */
margin-inline-end: 10px; /* Eine absolute Länge */
margin-inline-end: 1em; /* Relativ zur Textgröße */
margin-inline-end: 5%; /* Relativ zur Breite des nächstgelegenen Blockcontainers */

/* Schlüsselwortwerte */
margin-inline-end: auto;

/* Globale Werte */
margin-inline-end: inherit;
margin-inline-end: initial;
margin-inline-end: revert;
margin-inline-end: revert-layer;
margin-inline-end: unset;
```

Es bezieht sich auf {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, und {{cssxref("margin-inline-start")}}, die die anderen Ränder des Elements definieren.

### Werte

Die `margin-inline-end` Eigenschaft nimmt die gleichen Werte wie die {{cssxref("margin-left")}} Eigenschaft an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegung des Inline-Endrands

#### HTML

```html
<div>
  <p class="exampleText">Beispieltext</p>
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

- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- {{cssxref("margin-inline-start")}}
- Die zugeordneten physischen Eigenschaften: {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, und {{cssxref("margin-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
