---
title: min-inline-size
slug: Web/CSS/min-inline-size
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die CSS-Eigenschaft **`min-inline-size`** definiert die horizontale oder vertikale Mindestgröße eines Blockelements, abhängig von seinem Schreibmodus. Sie entspricht entweder der {{cssxref("min-width")}}-Eigenschaft oder der {{cssxref("min-height")}}-Eigenschaft, abhängig vom Wert des {{cssxref("writing-mode")}}.

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
  color: #ffffff;
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

Wenn der Schreibmodus vertikal ausgerichtet ist, bezieht sich der Wert von `min-inline-size` auf die Mindesthöhe des Elements; andernfalls auf die Mindestbreite des Elements. Eine verwandte Eigenschaft ist {{cssxref("min-block-size")}}, die die andere Dimension des Elements bestimmt.

### Werte

Die Eigenschaft `min-inline-size` nimmt die gleichen Werte wie die Eigenschaften {{cssxref("min-width")}} und {{cssxref("min-height")}} an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Mindestgröße für vertikalen Text festlegen

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

- Die zugeordneten physikalischen Eigenschaften: {{cssxref("min-width")}} und {{cssxref("min-height")}}
- {{cssxref("writing-mode")}}
