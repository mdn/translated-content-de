---
title: "`margin-inline-start` CSS property"
short-title: margin-inline-start
slug: Web/CSS/Reference/Properties/margin-inline-start
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`margin-inline-start`**-Eigenschaft [CSS](/de/docs/Web/CSS) definiert den logischen Anfangsrand eines Elements in der Inline-Richtung. Dieser wird je nach Schreibmodus, Richtung und Textorientierung des Elements in einen physischen Rand umgerechnet. Sie entspricht der Eigenschaft {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}} oder {{cssxref("margin-left")}}, abhängig von den definierten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}}, und {{cssxref("text-orientation")}}.

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
margin-inline-start: calc(anchor-size(--my-anchor width, 30px) / 4);

/* Keyword values */
margin-inline-start: auto;

/* Global values */
margin-inline-start: inherit;
margin-inline-start: initial;
margin-inline-start: revert;
margin-inline-start: revert-layer;
margin-inline-start: unset;
```

Sie bezieht sich auf {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, und {{cssxref("margin-inline-end")}}, die die anderen Ränder des Elements definieren.

### Werte

Die Eigenschaft `margin-inline-start` nimmt die gleichen Werte an wie die Eigenschaft {{cssxref("margin-top")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Setzen des Anfangsrandes in der Inline-Richtung

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

- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values)
- {{cssxref("margin-inline-end")}}
- Die abgebildeten physischen Eigenschaften: {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, und {{cssxref("margin-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
