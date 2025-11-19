---
title: border-inline-color
slug: Web/CSS/Reference/Properties/border-inline-color
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

Die **`border-inline-color`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Farbe der logischen Inline-Ränder eines Elements. Diese wird abhängig vom Schreibmodus, der Leserichtung und der Textausrichtung des Elements einer physikalischen Rahmenfarbe zugeordnet. Sie entspricht der {{cssxref("border-top-color")}} und {{cssxref("border-bottom-color")}}, oder der {{cssxref("border-right-color")}} und {{cssxref("border-left-color")}} Eigenschaft, abhängig von den definierten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}}.

Die Rahmenfarbe in der anderen Dimension kann mit {{cssxref("border-block-color")}} festgelegt werden, die {{cssxref("border-block-start-color")}} und {{cssxref("border-block-end-color")}} setzt.

{{InteractiveExample("CSS Demo: border-inline-color")}}

```css interactive-example-choice
border-inline-color: red;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-inline-color: #32a1ce;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-inline-color: rgb(170 50 220 / 0.6);
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
border-inline-color: yellow;
border-inline-color: #f5f6f7;

/* Global values */
border-inline-color: inherit;
border-inline-color: initial;
border-inline-color: revert;
border-inline-color: revert-layer;
border-inline-color: unset;
```

### Werte

- {{CSSXref("&lt;color&gt;")}}
  - : Die Farbe des Rahmens.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Rahmenfarbe mit vertikalem Text

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
  border: 10px solid blue;
  border-inline-color: red;
}
```

#### Ergebnisse

{{EmbedLiveSample("Border_color_with_vertical_text", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values)
- Diese Eigenschaft wird den physikalischen Rahmen-Eigenschaften zugeordnet: {{cssxref("border-top-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}}, oder {{cssxref("border-left-color")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
