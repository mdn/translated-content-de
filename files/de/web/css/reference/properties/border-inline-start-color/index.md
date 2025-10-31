---
title: border-inline-start-color
slug: Web/CSS/Reference/Properties/border-inline-start-color
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`border-inline-start-color`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Farbe des logischen Inline-Start-Rands eines Elements, das je nach Schreibmodus, Richtung und Textausrichtung des Elements einer physikalischen Randfarbe zugeordnet wird. Es entspricht je nach den definierten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} der Eigenschaft {{cssxref("border-top-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}} oder {{cssxref("border-left-color")}}.

{{InteractiveExample("CSS Demo: border-inline-start-color")}}

```css interactive-example-choice
border-inline-start-color: red;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-inline-start-color: #32a1ce;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-inline-start-color: rgb(170 50 220 / 0.6);
writing-mode: horizontal-tb;
direction: rtl;
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
  background-color: #eeeeee;
  color: black;
  border: 0.75em solid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: bidi-override;
}
```

## Syntax

```css
border-inline-start-color: red;
border-inline-start-color: #ee4141;

/* Global values */
border-inline-start-color: inherit;
border-inline-start-color: initial;
border-inline-start-color: revert;
border-inline-start-color: revert-layer;
border-inline-start-color: unset;
```

Verwandte Eigenschaften sind {{cssxref("border-block-start-color")}}, {{cssxref("border-block-end-color")}} und {{cssxref("border-inline-end-color")}}, welche die anderen Randfarben des Elements definieren.

### Werte

- {{CSSXref("&lt;color&gt;")}}
  - : Die Farbe des Rands.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### HTML

```html
<div>
  <p class="exampleText">Example text</p>
</div>
```

### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-lr;
  border: 10px solid blue;
  border-inline-start-color: red;
}
```

{{EmbedLiveSample("Examples", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logical Properties and Values](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Diese Eigenschaft wird einer der physischen Grenzeigenschaften zugeordnet: {{cssxref("border-top-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}} und {{cssxref("border-left-color")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
