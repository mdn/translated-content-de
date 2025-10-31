---
title: inset-inline-end
slug: Web/CSS/Reference/Properties/inset-inline-end
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`inset-inline-end`**-Eigenschaft [CSS](/de/docs/Web/CSS) definiert den logischen Inline-End-Offset eines Elements, der je nach Schreibmodus, Richtung und Textausrichtung des Elements einem physischen Offset zugeordnet wird. Sie entspricht der {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} oder {{cssxref("left")}} Eigenschaft, je nach den Werten, die für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} definiert sind.

Diese {{Glossary("inset_properties", "Einpassungseigenschaft")}} hat keine Auswirkungen auf nicht positionierte Elemente.

{{InteractiveExample("CSS Demo: inset-inline-end")}}

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
    <div id="abspos">
      I am absolutely positioned with inset-inline-end: 50px
    </div>
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
  inset-inline-end: 50px;
  inline-size: 140px;
  min-block-size: 80px;
}
```

## Syntax

```css
/* <length> values */
inset-inline-end: 3px;
inset-inline-end: 2.4em;
inset-inline-end: calc(anchor(self-start) + 5px);
inset-inline-end: anchor-size(height);

/* <percentage>s of the width or height of the containing block */
inset-inline-end: 10%;

/* Keyword value */
inset-inline-end: auto;

/* Global values */
inset-inline-end: inherit;
inset-inline-end: initial;
inset-inline-end: revert;
inset-inline-end: revert-layer;
inset-inline-end: unset;
```

Die Kurzform für {{cssxref("inset-inline-start")}} und `inset-inline-end` ist {{cssxref("inset-inline")}}.

### Werte

Die Eigenschaft `inset-inline-end` nimmt die gleichen Werte wie die {{cssxref("left")}} Eigenschaft an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Setzen des Inline-End-Offsets

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
  inset-inline-end: 20px;
  background-color: #c8c800;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_inline_end_offset", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Eigenschaften, die andere Einpassungen definieren: {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}} und {{cssxref("inset-inline-start")}}
- Die zugeordneten physischen Eigenschaften: {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} und {{cssxref("left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
