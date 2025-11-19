---
title: border-block-width
slug: Web/CSS/Reference/Properties/border-block-width
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

Die **`border-block-width`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Breite der logischen Blockränder eines Elements, die je nach Schreibmodus, Richtung und Textorientierung des Elements einer physischen Rahmenbreite entspricht. Sie entspricht der {{cssxref("border-top-width")}} und {{cssxref("border-bottom-width")}}, oder {{cssxref("border-left-width")}}, und {{cssxref("border-right-width")}} Eigenschaft, je nach den festgelegten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}}.

Die Rahmenbreite in der anderen Dimension kann mit {{cssxref("border-inline-width")}} festgelegt werden, was {{cssxref("border-inline-start-width")}} und {{cssxref("border-inline-end-width")}} setzt.

{{InteractiveExample("CSS Demo: border-block-width")}}

```css interactive-example-choice
border-block-width: thick;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-width: thick;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-block-width: 4px;
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
  background-color: palegreen;
  color: black;
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
border-block-width: 5px;
border-block-width: thick;

/* Global values */
border-block-width: inherit;
border-block-width: initial;
border-block-width: revert;
border-block-width: revert-layer;
border-block-width: unset;
```

### Werte

- `<'border-width'>`
  - : Die Breite des Rahmens. Siehe {{ cssxref("border-width") }}.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Rahmenbreite mit vertikalem Text

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
  border-block-width: 5px;
}
```

#### Ergebnisse

{{EmbedLiveSample("Border_width_with_vertical_text", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values)
- Diese Eigenschaft entspricht einer der physischen Rahmen-Eigenschaften: {{cssxref("border-top-width")}}, {{cssxref("border-right-width")}}, {{cssxref("border-bottom-width")}}, und {{cssxref("border-left-width")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
