---
title: CSS-Eigenschaft `inset-block`
short-title: inset-block
slug: Web/CSS/Reference/Properties/inset-block
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`inset-block`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert die logischen Anfangs- und Endabstände eines Elements im Block, die je nach Schreibmodus, Richtung und Textausrichtung des Elements auf physische Abstände abgebildet werden. Sie entspricht den Eigenschaften {{cssxref("top")}} und {{cssxref("bottom")}} oder {{cssxref("right")}} und {{cssxref("left")}}, abhängig von den definierten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}}.

Diese {{Glossary("inset_properties", "Inset-Eigenschaft")}} hat keine Wirkung auf nicht positionierte Elemente.

{{InteractiveExample("CSS Demo: inset-block")}}

```css interactive-example-choice
inset-block: 10px 20px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
inset-block: 20px 40px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
inset-block: 5% 20%;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
inset-block: 1rem auto;
writing-mode: vertical-lr;
```

```html interactive-example
<section id="default-example">
  <div class="example-container">
    <div id="example-element">I am absolutely positioned.</div>
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
.example-container {
  border: 0.75em solid #ad1457;
  padding: 0.75em;
  text-align: left;
  position: relative;
  width: 100%;
  min-height: 200px;
}

#example-element {
  background-color: #07136c;
  border: 6px solid #ffa000;
  color: white;
  position: absolute;
  inset: 0;
}
```

## Zusammengesetzte Eigenschaften

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
inset-block: 10em anchor-size(--my-anchor height, 10%);

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

Die `inset-block`-Eigenschaft akzeptiert die gleichen Werte wie die Eigenschaft {{cssxref("top")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der Blockanfangs- und -endabstände

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

- Die abgebildeten physischen Eigenschaften: {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} und {{cssxref("left")}}
- Die abgebildete physische Kurzform: {{cssxref("inset")}}
- Die abgebildete Inline-Kurzform: {{cssxref("inset-inline")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
