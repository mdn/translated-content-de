---
title: "`margin-block-end` CSS property"
short-title: margin-block-end
slug: Web/CSS/Reference/Properties/margin-block-end
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`margin-block-end`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert den logischen Blockendrand eines Elements, der je nach Schreibweise, Richtung und Textausrichtung des Elements einer physischen Randseite zugeordnet wird.

{{InteractiveExample("CSS Demo: margin-block-end")}}

```css interactive-example-choice
margin-block-end: 20px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
margin-block-end: 20px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
margin-block-end: 20%;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
margin-block-end: auto;
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
margin-block-end: 10px; /* An absolute length */
margin-block-end: 1em; /* relative to the text size */
margin-block-end: 5%; /* relative to the nearest block container's width */
margin-block-end: anchor-size(inline);
margin-block-end: calc(anchor-size(--my-anchor block, 20px) / 4);

/* Keyword values */
margin-block-end: auto;

/* Global values */
margin-block-end: inherit;
margin-block-end: initial;
margin-block-end: revert;
margin-block-end: revert-layer;
margin-block-end: unset;
```

Sie entspricht der {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, oder {{cssxref("margin-left")}} Eigenschaft, abhängig von den definierten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}}, und {{cssxref("text-orientation")}}.

Sie steht im Zusammenhang mit {{cssxref("margin-block-start")}}, {{cssxref("margin-inline-start")}}, und {{cssxref("margin-inline-end")}}, die die anderen Ränder des Elements definieren.

### Werte

Die `margin-block-end`-Eigenschaft nimmt die gleichen Werte an wie die {{cssxref("margin-top")}}-Eigenschaft.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Blockendrand festlegen

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
  margin-block-end: 20px;
  background-color: #c8c800;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_block_end_margin", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS logisch Eigenschafen und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values)
- Die abgebildeten physischen Eigenschaften: {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, und {{cssxref("margin-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
