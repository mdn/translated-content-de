---
title: margin-block-end
slug: Web/CSS/margin-block-end
l10n:
  sourceCommit: 5e7d1f9ae2cce0cb3f7693dfb8dc6e8d375b2231
---

{{CSSRef}}

Die **`margin-block-end`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert den logischen Block-End-Abstand eines Elements, der je nach Schreibmodus, Richtung und Textausrichtung des Elements auf einen physischen Abstand abgebildet wird.

{{EmbedInteractiveExample("pages/css/margin-block-end.html")}}

## Syntax

```css
/* <length> Werte */
margin-block-end: 10px; /* Eine absolute Länge */
margin-block-end: 1em; /* relativ zur Textgröße */
margin-block-end: 5%; /* relativ zur Breite des nächsten Block-Containers */

/* Schlüsselwortwerte */
margin-block-end: auto;

/* Globale Werte */
margin-block-end: inherit;
margin-block-end: initial;
margin-block-end: revert;
margin-block-end: revert-layer;
margin-block-end: unset;
```

Es entspricht der {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, oder {{cssxref("margin-left")}} Eigenschaft, abhängig von den definierten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}}, und {{cssxref("text-orientation")}}.

Es bezieht sich auf {{cssxref("margin-block-start")}}, {{cssxref("margin-inline-start")}}, und {{cssxref("margin-inline-end")}}, welche die anderen Abstände des Elements definieren.

### Werte

Die `margin-block-end` Eigenschaft nimmt die gleichen Werte an wie die {{cssxref("margin-left")}} Eigenschaft.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellung des Block-End-Abstands

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

- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Die abgebildeten physikalischen Eigenschaften: {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, und {{cssxref("margin-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
