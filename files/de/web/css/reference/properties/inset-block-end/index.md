---
title: "`inset-block-end` CSS property"
short-title: inset-block-end
slug: Web/CSS/Reference/Properties/inset-block-end
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`inset-block-end`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert den logischen Block-End-Versatz eines Elements, der abhängig vom Schreibrichtung, der Richtung und der Textausrichtung des Elements auf eine physische Einfügung abgebildet wird. Sie entspricht der {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} oder {{cssxref("left")}} Eigenschaft, abhängig von den für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} definierten Werten.

Diese {{Glossary("inset_properties", "Inset-Eigenschaft")}} hat keine Auswirkungen auf nicht positionierte Elemente.

{{InteractiveExample("CSS Demo: inset-block-end")}}

```css interactive-example-choice
writing-mode: horizontal-tb;
```

```css interactive-example-choice
writing-mode: vertical-rl;
```

```css interactive-example-choice
writing-mode: horizontal-tb;
direction: rtl;
```

```css interactive-example-choice
writing-mode: vertical-lr;
```

```html interactive-example
<section id="default-example">
  <div class="example-container" id="example-element">
    <div id="abspos">I am absolutely positioned with inset-block-end: 20px</div>
    <p>
      As much mud in the streets as if the waters had but newly retired from the
      face of the earth, and it would not be wonderful to meet a Megalosaurus,
      forty feet long or so, waddling like an elephantine lizard up Holborn
      Hill.
    </p>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 0.75em solid;
  padding: 0.75em;
  position: relative;
  width: 100%;
  min-height: 200px;
  unicode-bidi: bidi-override;
}

#abspos {
  background-color: yellow;
  color: black;
  border: 3px solid red;
  position: absolute;
  inset-block-end: 20px;
  inline-size: 140px;
  min-block-size: 200px;
}
```

## Syntax

```css
/* <length> values */
inset-block-end: 3px;
inset-block-end: 2.4em;
inset-block-end: calc(anchor(start) + 20px);
inset-block-end: anchor-size(--my-anchor width, 10%);

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

Die `inset-block-end`-Eigenschaft nimmt die gleichen Werte wie die {{cssxref("top")}}-Eigenschaft an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegung des Block-End-Versatzes

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

- Die Eigenschaften, die andere Einfügungen definieren: {{cssxref("inset-block-start")}}, {{cssxref("inset-inline-start")}} und {{cssxref("inset-inline-end")}}
- Die abgebildeten physischen Eigenschaften: {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} und {{cssxref("left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
