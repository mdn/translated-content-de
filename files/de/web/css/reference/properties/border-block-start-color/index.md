---
title: border-block-start-color
slug: Web/CSS/Reference/Properties/border-block-start-color
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`border-block-start-color`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Farbe des logischen `block-start`-Randes eines Elements. Diese wird je nach Schreibmodus, Richtung und Textorientierung des Elements in eine physische Randfarbe umgesetzt. Sie entspricht der Eigenschaft {{cssxref("border-top-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}} oder {{cssxref("border-left-color")}}, abhängig von den für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} definierten Werten.

{{InteractiveExample("CSS Demo: border-block-start-color")}}

```css interactive-example-choice
border-block-start-color: red;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-start-color: #32a1ce;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-block-start-color: rgb(170 50 220 / 0.6);
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-start-color: hsl(60 90% 50% / 0.8);
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
border-block-start-color: blue;
border-block-start-color: #4c5d21;

/* Global values */
border-block-start-color: inherit;
border-block-start-color: initial;
border-block-start-color: revert;
border-block-start-color: revert-layer;
border-block-start-color: unset;
```

Verwandte Eigenschaften sind {{cssxref("border-block-end-color")}}, {{cssxref("border-inline-start-color")}} und {{cssxref("border-inline-end-color")}}, die die anderen Randfarben des Elements definieren.

### Werte

- {{CSSXref("&lt;color&gt;")}}
  - : Die Farbe des Randes.

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
  border-block-start-color: red;
}
```

#### Ergebnisse

{{EmbedLiveSample("Border_color_with_vertical_text", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values)
- Diese Eigenschaft wird auf eine der physischen Randeigenschaften abgebildet: {{cssxref("border-top-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}} oder {{cssxref("border-left-color")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
