---
title: min-block-size
slug: Web/CSS/min-block-size
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`min-block-size`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die minimale horizontale oder vertikale Größe eines Blockelements, abhängig von dessen Schreibmodus. Sie entspricht entweder der Eigenschaft {{cssxref("min-width")}} oder {{cssxref("min-height")}}, abhängig vom Wert des {{cssxref("writing-mode")}}.

Wenn der Schreibmodus vertikal orientiert ist, bezieht sich der Wert von `min-block-size` auf die minimale Breite des Elements; andernfalls bezieht er sich auf die minimale Höhe des Elements. Eine verwandte Eigenschaft ist {{cssxref("min-inline-size")}}, die die andere Dimension des Elements definiert.

{{InteractiveExample("CSS Demo: min-block-size")}}

```css interactive-example-choice
min-block-size: 150px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
min-block-size: 150px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
min-block-size: 20px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
min-block-size: 15em;
writing-mode: vertical-lr;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box where you can change the minimum block size. <br />If there is
    more content than the minimum the box will grow in the block dimension as
    needed by the content.
  </div>
</section>
```

```css interactive-example
#example-element {
  display: flex;
  flex-direction: column;
  background-color: #5b6dcd;
  justify-content: center;
  color: #ffffff;
}
```

## Syntax

```css
/* <length> values */
min-block-size: 100px;
min-block-size: 5em;
min-block-size: anchor-size(self-inline);

/* <percentage> values */
min-block-size: 10%;

/* Keyword values */
min-block-size: max-content;
min-block-size: min-content;
min-block-size: fit-content;
min-block-size: fit-content(20em);

/* Global values */
min-block-size: inherit;
min-block-size: initial;
min-block-size: revert;
min-block-size: revert-layer;
min-block-size: unset;
```

### Werte

Die Eigenschaft `min-block-size` nimmt die gleichen Werte wie die Eigenschaften {{cssxref("min-width")}} und {{cssxref("min-height")}} an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Mindestblockgröße für vertikalen Text festlegen

#### HTML

```html
<p class="exampleText">Example text</p>
```

#### CSS

```css
.exampleText {
  writing-mode: vertical-rl;
  background-color: yellow;
  min-block-size: 200px;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_minimum_block_size_for_vertical_text")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die zugeordneten physischen Eigenschaften: {{cssxref("min-width")}} und {{cssxref("min-height")}}
- {{cssxref("writing-mode")}}
