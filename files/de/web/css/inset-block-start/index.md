---
title: inset-block-start
slug: Web/CSS/inset-block-start
l10n:
  sourceCommit: 09c431e017263c263558df1821f187f76660dde9
---

{{CSSRef}}

Die **`inset-block-start`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert den logischen Blockstartversatz eines Elements, der in Abhängigkeit vom Schreibmodus, der Richtung und der Textorientierung des Elements auf einen physischen Innenabstand abgebildet wird. Er entspricht der {{cssxref("top")}}-, {{cssxref("right")}}-, {{cssxref("bottom")}}- oder {{cssxref("left")}}-Eigenschaft in Abhängigkeit von den definierten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}}.

Diese {{Glossary("inset_properties", "Einfüge-Eigenschaft")}} hat keine Wirkung auf nicht positionierte Elemente.

{{EmbedInteractiveExample("pages/css/inset-block-start.html")}}

## Syntax

```css
/* <length> values */
inset-block-start: 3px;
inset-block-start: 2.4em;
inset-block-start: anchor(end);
inset-block-start: calc(anchor(--myAnchor 50%) + 5px);

/* <percentage>s of the width or height of the containing block */
inset-block-start: 10%;

/* Keyword value */
inset-block-start: auto;

/* Global values */
inset-block-start: inherit;
inset-block-start: initial;
inset-block-start: revert;
inset-block-start: revert-layer;
inset-block-start: unset;
```

### Werte

Die `inset-block-start`-Eigenschaft nimmt die gleichen Werte an wie die {{cssxref("left")}}-Eigenschaft.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Blockstartversatz festlegen

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
  inset-block-start: 20px;
  background-color: #c8c800;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_block_start_offset", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Eigenschaften, die andere Ränder definieren: {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}} und {{cssxref("inset-inline-end")}}
- Die zugeordneten physischen Eigenschaften: {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} und {{cssxref("left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
