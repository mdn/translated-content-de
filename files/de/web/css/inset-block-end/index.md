---
title: inset-block-end
slug: Web/CSS/inset-block-end
l10n:
  sourceCommit: da659b5d4f75b66804d97c80ec7c89b8792d7389
---

{{CSSRef}}

Die **`inset-block-end`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert den logischen Blockendversatz eines Elements, der abhängig vom Schreibmodus des Elements, der Ausrichtung und der Textorientierung auf einen physischen `inset` abbildet. Sie entspricht der {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, oder {{cssxref("left")}} Eigenschaft, abhängig von den definierten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}}, und {{cssxref("text-orientation")}}.

Diese {{Glossary("inset_properties", "inset Eigenschaft")}} hat keine Wirkung auf nicht positionierte Elemente.

{{EmbedInteractiveExample("pages/css/inset-block-end.html")}}

## Syntax

```css
/* <length> values */
inset-block-end: 3px;
inset-block-end: 2.4em;
inset-block-end: calc(anchor(start) + 20px);
inset-block-end: anchor-size(--myAnchor width, 10%);

/* <percentage>s of the width or height of the containing block */
inset-block-end: 10%;

/* Keyword value */
inset-block-end: auto;

/* Global values */
inset-block-end: inherit;
inset-block-end: initial;
inset-block-end: revert;
inset-block-end: revert-layer;
inset-block-end: unset;
```

### Werte

Die `inset-block-end` Eigenschaft nimmt die gleichen Werte wie die {{cssxref("left")}} Eigenschaft an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Blockendversatz festlegen

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
  position: relative;
  inset-block-end: 20px;
  background-color: #c8c800;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_block_end_offset", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Eigenschaften, die andere Insets definieren: {{cssxref("inset-block-start")}}, {{cssxref("inset-inline-start")}}, und {{cssxref("inset-inline-end")}}
- Die abgebildeten physischen Eigenschaften: {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, und {{cssxref("left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
