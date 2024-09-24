---
title: margin-inline-start
slug: Web/CSS/margin-inline-start
l10n:
  sourceCommit: 5e7d1f9ae2cce0cb3f7693dfb8dc6e8d375b2231
---

{{CSSRef}}

Die **`margin-inline-start`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert den logischen Inline-Startabstand eines Elements, welcher sich je nach Schreibrichtung des Elements, der Richtung und der Textausrichtung auf einen physischen Rand bezieht. Sie entspricht der Eigenschaft {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, oder {{cssxref("margin-left")}}, abhängig von den definierten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}}, und {{cssxref("text-orientation")}}.

{{EmbedInteractiveExample("pages/css/margin-inline-start.html")}}

## Syntax

```css
/* <length> Werte */
margin-inline-start: 10px; /* Eine absolute Länge */
margin-inline-start: 1em; /* relativ zur Textgröße */
margin-inline-start: 5%; /* relativ zur Breite des nächstgelegenen Blockcontainers */

/* Schlüsselwortwerte */
margin-inline-start: auto;

/* Globale Werte */
margin-inline-start: inherit;
margin-inline-start: initial;
margin-inline-start: revert;
margin-inline-start: revert-layer;
margin-inline-start: unset;
```

Es bezieht sich auf {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, und {{cssxref("margin-inline-end")}}, die die anderen Abstände des Elements definieren.

### Werte

Die `margin-inline-start` Eigenschaft nimmt die gleichen Werte wie die {{cssxref("margin-left")}} Eigenschaft an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen des Inline-Startabstands

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
  margin-inline-start: 20px;
  background-color: #c8c800;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_inline_start_margin", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- {{cssxref("margin-inline-end")}}
- Die zugeordneten physischen Eigenschaften: {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, und {{cssxref("margin-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
