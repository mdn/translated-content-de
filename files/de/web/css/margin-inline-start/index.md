---
title: margin-inline-start
slug: Web/CSS/margin-inline-start
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`margin-inline-start`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert den logischen Anfangsrand im Inline-Bereich eines Elements, der je nach Schreibweise des Elements, dessen Ausrichtung und Textorientierung zu einem physischen Rand wird. Sie entspricht der Eigenschaft {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, oder {{cssxref("margin-left")}}, abhängig von den Werten, die für {{cssxref("writing-mode")}}, {{cssxref("direction")}}, und {{cssxref("text-orientation")}} festgelegt sind.

{{InteractiveExample("CSS Demo: margin-inline-start")}}

```css interactive-example-choice
margin-inline-start: 20px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
margin-inline-start: 20px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
margin-inline-start: 20%;
writing-mode: horizontal-tb;
direction: rtl;
```

```html interactive-example
<section id="default-example">
  <div id="container">
    <div class="col">One</div>
    <div class="col transition-all" id="example-element">Two</div>
    <div class="col">Three</div>
  </div>
</section>
```

```css interactive-example
#container {
  width: 300px;
  height: 200px;
  display: flex;
  align-content: flex-start;
  justify-content: flex-start;
}

.col {
  width: 33.33%;
  border: solid #ce7777 10px;
  background-color: #2b3a55;
  color: white;
  flex-shrink: 0;
}

#example-element {
  border: solid 10px #ffbf00;
  background-color: #2b3a55;
  unicode-bidi: bidi-override;
}
```

## Syntax

```css
/* <length> values */
margin-inline-start: 10px; /* An absolute length */
margin-inline-start: 1em; /* relative to the text size */
margin-inline-start: 5%; /* relative to the nearest block container's width */
margin-inline-start: anchor-size(block);
margin-inline-start: calc(anchor-size(--myAnchor width, 30px) / 4);

/* Keyword values */
margin-inline-start: auto;

/* Global values */
margin-inline-start: inherit;
margin-inline-start: initial;
margin-inline-start: revert;
margin-inline-start: revert-layer;
margin-inline-start: unset;
```

Sie bezieht sich auf {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, und {{cssxref("margin-inline-end")}}, welche die anderen Ränder des Elements definieren.

### Werte

Die `margin-inline-start`-Eigenschaft nimmt dieselben Werte wie die Eigenschaft {{cssxref("margin-left")}} an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellung des Anfangsrands im Inline-Bereich

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
  margin-inline-start: 20px;
  background-color: #c8c800;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_inline_start_margin", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logical Properties and Values](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- {{cssxref("margin-inline-end")}}
- Die zugeordneten physischen Eigenschaften: {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, und {{cssxref("margin-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
