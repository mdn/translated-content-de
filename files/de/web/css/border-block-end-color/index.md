---
title: border-block-end-color
slug: Web/CSS/border-block-end-color
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

{{CSSRef}}

Die **`border-block-end-color`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Farbe des logischen Block-Ende-Randes eines Elements, die je nach Schreibweise, Richtung und Textausrichtung des Elements einer physikalischen Randfarbe zugeordnet wird. Sie entspricht der {{cssxref("border-top-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}}, oder {{cssxref("border-left-color")}} Eigenschaft, abhängig von den für {{cssxref("writing-mode")}}, {{cssxref("direction")}}, und {{cssxref("text-orientation")}} definierten Werten.

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
  background-color: #eee;
  color: #000;
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

- [CSS Logical Properties and Values](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Diese Eigenschaft wird einer der physischen Randeigenschaften zugeordnet: {{cssxref("border-top-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}}, oder {{cssxref("border-left-color")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
