---
title: min-block-size
slug: Web/CSS/min-block-size
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`min-block-size`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt die minimale horizontale oder vertikale Größe des Blockes eines Elements fest, abhängig vom Schreibrichtung-Modus. Sie entspricht entweder der {{cssxref("min-width")}}- oder der {{cssxref("min-height")}}-Eigenschaft, abhängig vom Wert des {{cssxref("writing-mode")}}.

Wenn der Schreibrichtung-Modus vertikal ausgerichtet ist, bezieht sich der Wert von `min-block-size` auf die minimale Breite des Elements; andernfalls bezieht er sich auf die minimale Höhe des Elements. Eine verwandte Eigenschaft ist {{cssxref("min-inline-size")}}, die die andere Dimension des Elements definiert.

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

Die `min-block-size`-Eigenschaft nimmt dieselben Werte an wie die Eigenschaften {{cssxref("min-width")}} und {{cssxref("min-height")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellung der minimalen Blockgröße für vertikalen Text

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
