---
title: border-block-end-color
slug: Web/CSS/Reference/Properties/border-block-end-color
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`border-block-end-color`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Farbe des logischen Block-End-Randes eines Elements, die je nach Schreibmodus, Richtung und Textausrichtung des Elements einer physischen Randfarbe zugeordnet wird. Sie entspricht der {{cssxref("border-top-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}}, oder {{cssxref("border-left-color")}} Eigenschaft, je nach den definierten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}}, und {{cssxref("text-orientation")}}.

{{InteractiveExample("CSS Demo: border-block-end-color")}}

```css interactive-example-choice
border-block-end-color: red;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-end-color: #32a1ce;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-block-end-color: rgb(170 50 220 / 0.6);
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-end-color: hsl(60 90% 50% / 0.8);
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
border-block-end-color: yellow;
border-block-end-color: #f5f6f7;

/* Global values */
border-block-end-color: inherit;
border-block-end-color: initial;
border-block-end-color: revert;
border-block-end-color: revert-layer;
border-block-end-color: unset;
```

Verwandte Eigenschaften sind {{cssxref("border-block-start-color")}}, {{cssxref("border-inline-start-color")}}, und {{cssxref("border-inline-end-color")}}, die die anderen Randfarben des Elements definieren.

### Werte

- {{CSSXref("&lt;color&gt;")}}
  - : Die Farbe des Randes.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Randfarbe mit vertikalem Text

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
  border-block-end-color: red;
}
```

#### Ergebnisse

{{EmbedLiveSample("Border_color_with_vertical_text", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values)
- Diese Eigenschaft wird einer der physischen Rand-Eigenschaften zugeordnet: {{cssxref("border-top-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}}, oder {{cssxref("border-left-color")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
