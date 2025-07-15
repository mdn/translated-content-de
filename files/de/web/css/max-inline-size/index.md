---
title: max-inline-size
slug: Web/CSS/max-inline-size
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`max-inline-size`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die horizontale oder vertikale maximale Größe eines Blockelements, abhängig von dessen Schreibmodus. Sie entspricht entweder der Eigenschaft {{cssxref("max-width")}} oder der Eigenschaft {{cssxref("max-height")}}, abhängig vom Wert des {{cssxref("writing-mode")}}.

Ist der Schreibmodus vertikal ausgerichtet, bezieht sich der Wert von `max-inline-size` auf die maximale Höhe des Elements; andernfalls bezieht er sich auf die maximale Breite des Elements. Eine verwandte Eigenschaft ist {{cssxref("max-block-size")}}, die die andere Dimension des Elements definiert.

{{InteractiveExample("CSS Demo: max-inline-size")}}

```css interactive-example-choice
max-inline-size: 150px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
max-inline-size: 150px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
max-inline-size: 20px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
max-inline-size: 75%;
writing-mode: vertical-lr;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box where you can change the max-inline-size.
  </div>
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
max-inline-size: 300px;
max-inline-size: 25em;
max-inline-size: anchor-size(width);
max-inline-size: anchor-size(--myAnchor self-block, 200px);

/* <percentage> values */
max-inline-size: 75%;

/* Keyword values */
max-inline-size: none;
max-inline-size: max-content;
max-inline-size: min-content;
max-inline-size: fit-content;
max-inline-size: fit-content(20em);

/* Global values */
max-inline-size: inherit;
max-inline-size: initial;
max-inline-size: revert;
max-inline-size: revert-layer;
max-inline-size: unset;
```

### Werte

Die Eigenschaft `max-inline-size` nimmt die gleichen Werte an wie die Eigenschaften {{cssxref("max-width")}} und {{cssxref("max-height")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen der maximalen Inline-Größe in Pixeln

#### HTML

```html
<p class="exampleText">Example text</p>
```

#### CSS

```css
.exampleText {
  writing-mode: vertical-rl;
  background-color: yellow;
  block-size: 100%;
  max-inline-size: 200px;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_maximum_inline_size_in_pixels")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die gemappten physischen Eigenschaften: {{cssxref("max-width")}} und {{cssxref("max-height")}}
- {{cssxref("writing-mode")}}
