---
title: margin-block-start
slug: Web/CSS/Reference/Properties/margin-block-start
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`margin-block-start`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert den logischen Blockanfangsrand eines Elements, der je nach Schreibmodus, Richtung und Textausrichtung des Elements auf einen physischen Rand abgebildet wird.

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
  color: white;
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
margin-block-start: calc(anchor-size(--my-anchor block, 20px) / 3);

/* Keyword values */
margin-block-start: auto;

/* Global values */
margin-block-start: inherit;
margin-block-start: initial;
margin-block-start: revert;
margin-block-start: revert-layer;
margin-block-start: unset;
```

Sie entspricht der Eigenschaft {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}} oder {{cssxref("margin-left")}} je nach den für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} definierten Werten.

Sie steht in Beziehung zu {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}} und {{cssxref("margin-inline-end")}}, welche die anderen Ränder des Elements definieren.

### Werte

Die Eigenschaft `margin-block-start` nimmt dieselben Werte wie die Eigenschaft {{cssxref("margin-left")}} an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen des Blockanfangsrands

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

- [CSS Logical Properties and Values](/de/docs/Web/CSS/Guides/Logical_properties_and_values)
- Die zugeordneten physischen Eigenschaften: {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}} und {{cssxref("margin-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
