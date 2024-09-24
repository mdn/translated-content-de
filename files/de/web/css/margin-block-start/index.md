---
title: margin-block-start
slug: Web/CSS/margin-block-start
l10n:
  sourceCommit: 5e7d1f9ae2cce0cb3f7693dfb8dc6e8d375b2231
---

{{CSSRef}}

Die **`margin-block-start`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert den logischen Blockanfang-Rand eines Elements, der je nach dem Schreibmodus, der Ausrichtung und der Textorientierung des Elements auf einen physischen Rand abgebildet wird.

{{EmbedInteractiveExample("pages/css/margin-block-start.html")}}

## Syntax

```css
/* <length> Werte */
margin-block-start: 10px; /* Eine absolute Länge */
margin-block-start: 1em; /* relativ zur Textgröße */
margin-block-start: 5%; /* relativ zur Breite des nächstgelegenen Blockcontainers */

/* Schlüsselwortwerte */
margin-block-start: auto;

/* Globale Werte */
margin-block-start: inherit;
margin-block-start: initial;
margin-block-start: revert;
margin-block-start: revert-layer;
margin-block-start: unset;
```

Es entspricht der {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}} oder {{cssxref("margin-left")}} Eigenschaft, abhängig von den Werten, die für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} definiert sind.

Es bezieht sich auf {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}} und {{cssxref("margin-inline-end")}}, die die anderen Ränder des Elements definieren.

### Werte

Die `margin-block-start` Eigenschaft nimmt die gleichen Werte wie die {{cssxref("margin-left")}} Eigenschaft.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellung des Blockanfang-Rands

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

- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Die abgebildeten physischen Eigenschaften: {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, und {{cssxref("margin-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
