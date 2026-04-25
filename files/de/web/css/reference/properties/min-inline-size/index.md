---
title: "`min-inline-size` CSS property"
short-title: min-inline-size
slug: Web/CSS/Reference/Properties/min-inline-size
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`min-inline-size`**-Eigenschaft von [CSS](/de/docs/Web/CSS) definiert die horizontale oder vertikale Mindestgröße eines Blockelements, abhängig von dessen Schreibrichtung. Sie entspricht entweder der {{cssxref("min-width")}}- oder der {{cssxref("min-height")}}-Eigenschaft, abhängig vom Wert von {{cssxref("writing-mode")}}.

{{InteractiveExample("CSS Demo: min-inline-size")}}

```css interactive-example-choice
min-inline-size: 200px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
min-inline-size: 200px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
min-inline-size: 20px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
min-inline-size: 75%;
writing-mode: vertical-lr;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">Change min-inline-size</div>
</section>
```

```css interactive-example
#example-element {
  display: flex;
  flex-direction: column;
  background-color: #5b6dcd;
  height: 80%;
  justify-content: center;
  color: white;
}
```

## Syntax

```css
/* <length> values */
min-inline-size: 100px;
min-inline-size: 5em;
min-inline-size: anchor-size(width);

/* <percentage> values */
min-inline-size: 10%;

/* Keyword values */
min-inline-size: max-content;
min-inline-size: min-content;
min-inline-size: fit-content;
min-inline-size: fit-content(20em);

/* Global values */
min-inline-size: inherit;
min-inline-size: initial;
min-inline-size: revert;
min-inline-size: revert-layer;
min-inline-size: unset;
```

Wenn der Schreibmodus vertikal orientiert ist, bezieht sich der Wert von `min-inline-size` auf die minimale Höhe des Elements; andernfalls bezieht er sich auf die minimale Breite des Elements. Eine verwandte Eigenschaft ist {{cssxref("min-block-size")}}, die die andere Dimension des Elements definiert.

### Werte

Die `min-inline-size`-Eigenschaft nimmt die gleichen Werte an wie die Eigenschaften {{cssxref("min-width")}} und {{cssxref("min-height")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellung der minimalen Inline-Größe für vertikalen Text

#### HTML

```html
<p class="exampleText">Example text</p>
```

#### CSS

```css
.exampleText {
  writing-mode: vertical-rl;
  background-color: yellow;
  block-size: 5%;
  min-inline-size: 200px;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_minimum_inline_size_for_vertical_text")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die zugehörigen physischen Eigenschaften: {{cssxref("min-width")}} und {{cssxref("min-height")}}
- {{cssxref("writing-mode")}}
