---
title: inset-block
slug: Web/CSS/inset-block
l10n:
  sourceCommit: 09c431e017263c263558df1821f187f76660dde9
---

{{CSSRef}}

Die **`inset-block`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die logischen Block-Anfangs- und Endversätze eines Elements, die je nach dem Schreibmodus, der Richtung und der Textausrichtung des Elements auf physische Versätze abgebildet werden. Sie entspricht den Eigenschaften {{cssxref("top")}} und {{cssxref("bottom")}}, oder {{cssxref("right")}} und {{cssxref("left")}} je nach den für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} definierten Werten.

Diese {{Glossary("inset_properties", "inset Eigenschaft")}} hat keine Wirkung auf nicht positionierte Elemente.

{{EmbedInteractiveExample("pages/css/inset-block.html")}}

## Bestandeigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("inset-block-end")}}
- {{cssxref("inset-block-start")}}

## Syntax

```css
/* <length> values */
inset-block: 3px 10px;
inset-block: 2.4em 3em;
inset-block: 10px; /* value applied to start and end */
inset-block: auto anchor(start);
inset-block: calc(anchor(--myAnchor 50%) + 10px) auto;

/* <percentage>s of the width or height of the containing block */
inset-block: 10% 5%;

/* Keyword value */
inset-block: auto;

/* Global values */
inset-block: inherit;
inset-block: initial;
inset-block: revert;
inset-block: revert-layer;
inset-block: unset;
```

### Werte

Die `inset-block` Eigenschaft nimmt dieselben Werte wie die {{cssxref("left")}} Eigenschaft an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Block-Anfangs- und Endversätze einstellen

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
  position: relative;
  inset-block: 20px 50px;
  background-color: #c8c800;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_block_start_and_end_offsets", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die abgebildeten physischen Eigenschaften: {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, und {{cssxref("left")}}
- Die abgebildete physische Kurzform: {{cssxref("inset")}}
- Die abgebildete Inline-Kurzform: {{cssxref("inset-inline")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
