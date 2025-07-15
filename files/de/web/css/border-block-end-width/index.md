---
title: border-block-end-width
slug: Web/CSS/border-block-end-width
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`border-block-end-width`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Breite des logischen Block-End-Randes eines Elements, die je nach Schreibrichtung, Richtung und Textausrichtung des Elements auf eine physische Randbreite abgebildet wird. Sie entspricht der Eigenschaft {{cssxref("border-top-width")}}, {{cssxref("border-right-width")}}, {{cssxref("border-bottom-width")}} oder {{cssxref("border-left-width")}} abhängig von den Werten, die für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} definiert sind.

{{InteractiveExample("CSS Demo: border-block-end-width")}}

```css interactive-example-choice
border-block-end-width: thick;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-end-width: thick;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-block-end-width: 4px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-end-width: 4px;
writing-mode: vertical-lr;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with a border around it.
  </div>
</section>
```

```css interactive-example
#example-element {
  background-color: palegreen;
  color: #000;
  border: 0 solid crimson;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: bidi-override;
}
```

## Syntax

```css
/* <'border-width'> values */
border-block-end-width: 5px;
border-block-end-width: thick;

/* Global values */
border-block-end-width: inherit;
border-block-end-width: initial;
border-block-end-width: revert;
border-block-end-width: revert-layer;
border-block-end-width: unset;
```

Verwandte Eigenschaften sind {{cssxref("border-block-start-width")}}, {{cssxref("border-inline-start-width")}} und {{cssxref("border-inline-end-width")}}, die die anderen Randbreiten des Elements definieren.

### Werte

- `<'border-width'>`
  - : Die Breite des Randes. Siehe {{ cssxref("border-width") }}.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Randbreite mit vertikalem Text

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
  border: 1px solid blue;
  border-block-end-width: 5px;
}
```

#### Ergebnisse

{{EmbedLiveSample("Border_width_with_vertical_text", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Diese Eigenschaft wird auf eine der physischen Randeigenschaften abgebildet: {{cssxref("border-top-width")}}, {{cssxref("border-right-width")}}, {{cssxref("border-bottom-width")}} und {{cssxref("border-left-width")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
