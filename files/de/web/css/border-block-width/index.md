---
title: border-block-width
slug: Web/CSS/border-block-width
l10n:
  sourceCommit: 2adfb8760ac42c80966080e2e84211b14e43b589
---

{{CSSRef}}

Die **`border-block-width`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Breite der logischen Blockrahmen eines Elements, die sich je nach Schreibrichtung, Richtung und Textorientierung des Elements in eine physische Rahmenbreite umwandelt. Sie entspricht der Eigenschaft {{cssxref("border-top-width")}} und {{cssxref("border-bottom-width")}}, oder {{cssxref("border-left-width")}} und {{cssxref("border-right-width")}}, abhängig von den definierten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}}.

{{EmbedInteractiveExample("pages/css/border-block-width.html")}}

Die Rahmenbreite in der anderen Dimension kann mit {{cssxref("border-inline-width")}} festgelegt werden, die {{cssxref("border-inline-start-width")}} und {{cssxref("border-inline-end-width")}} setzt.

## Syntax

```css
/* <'border-width'> Werte */
border-block-width: 5px;
border-block-width: thick;

/* Globale Werte */
border-block-width: inherit;
border-block-width: initial;
border-block-width: revert;
border-block-width: revert-layer;
border-block-width: unset;
```

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
  border-block-width: 5px;
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
- Diese Eigenschaft entspricht einer der physischen Rahmen-Eigenschaften: {{cssxref("border-top-width")}}, {{cssxref("border-right-width")}}, {{cssxref("border-bottom-width")}} und {{cssxref("border-left-width")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
