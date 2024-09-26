---
title: border-block-end-width
slug: Web/CSS/border-block-end-width
l10n:
  sourceCommit: 2adfb8760ac42c80966080e2e84211b14e43b589
---

{{CSSRef}}

Die **`border-block-end-width`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Breite des logischen Block-End-Randes eines Elements, die je nach Schreibmodus, Richtung und Textorientierung des Elements auf eine physische Randbreite abgebildet wird. Sie entspricht der {{cssxref("border-top-width")}}, {{cssxref("border-right-width")}}, {{cssxref("border-bottom-width")}} oder {{cssxref("border-left-width")}} Eigenschaft, je nach den definierten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}}.

{{EmbedInteractiveExample("pages/css/border-block-end-width.html")}}

## Syntax

```css
/* <'border-width'> Werte */
border-block-end-width: 5px;
border-block-end-width: thick;

/* Globale Werte */
border-block-end-width: inherit;
border-block-end-width: initial;
border-block-end-width: revert;
border-block-end-width: revert-layer;
border-block-end-width: unset;
```

Verwandte Eigenschaften sind {{cssxref("border-block-start-width")}}, {{cssxref("border-inline-start-width")}} und {{cssxref("border-inline-end-width")}}, die die anderen Randbreiten des Elements definieren.

### Werte

- `<'border-width'>`
  - : Die Breite des Randes. Siehe {{ cssxref("border-width") }}.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Randbreite mit vertikalem Text

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
  border: 1px solid blue;
  border-block-end-width: 5px;
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
- Diese Eigenschaft wird einer der physischen Rand-Eigenschaften zugeordnet: {{cssxref("border-top-width")}}, {{cssxref("border-right-width")}}, {{cssxref("border-bottom-width")}}, und {{cssxref("border-left-width")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}