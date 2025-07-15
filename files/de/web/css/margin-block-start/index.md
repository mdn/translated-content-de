---
title: margin-block-start
slug: Web/CSS/margin-block-start
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`margin-block-start`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert den logischen Blockanfang-Abstand eines Elements, der zu einem physischen Abstand umgewandelt wird, abhängig vom Schreibmodus des Elements, seiner Richtung und Textausrichtung.

{{InteractiveExample("CSS Demo: margin-block-start")}}

```css interactive-example-choice
margin-block-start: 20px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
margin-block-start: 20px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
margin-block-start: 20%;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
margin-block-start: auto;
writing-mode: vertical-lr;
```

```html interactive-example
<section id="default-example">
  <div id="container">
    <div class="row">One</div>
    <div class="row transition-all" id="example-element">Two</div>
    <div class="row">Three</div>
  </div>
</section>
```

```css interactive-example
#container {
  width: 300px;
  height: 200px;
  display: flex;
  align-content: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}

.row {
  height: 33.33%;
  display: inline-block;
  border: solid #ce7777 10px;
  background-color: #2b3a55;
  color: #ffffff;
  flex-shrink: 0;
}

#example-element {
  border: solid 10px #ffbf00;
  background-color: #2b3a55;
}
```

## Syntax

```css
/* <length> values */
margin-block-start: 10px; /* An absolute length */
margin-block-start: 1em; /* relative to the text size */
margin-block-start: 5%; /* relative to the nearest block container's width */
margin-block-start: anchor-size(width);
margin-block-start: calc(anchor-size(--myAnchor block, 20px) / 3);

/* Keyword values */
margin-block-start: auto;

/* Global values */
margin-block-start: inherit;
margin-block-start: initial;
margin-block-start: revert;
margin-block-start: revert-layer;
margin-block-start: unset;
```

Sie entspricht der {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, oder {{cssxref("margin-left")}} Eigenschaft, abhängig von den für {{cssxref("writing-mode")}}, {{cssxref("direction")}}, und {{cssxref("text-orientation")}} definierten Werten.

Sie steht im Zusammenhang mit {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}}, und {{cssxref("margin-inline-end")}}, die die anderen Abstände des Elements definieren.

### Werte

Die `margin-block-start` Eigenschaft nimmt die gleichen Werte an wie die {{cssxref("margin-left")}} Eigenschaft.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Blockanfang-Abstand festlegen

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
  margin-block-start: 20px;
  background-color: #c8c800;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_block_start_margin", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logical Properties and Values](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Die zugeordneten physischen Eigenschaften: {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, und {{cssxref("margin-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
