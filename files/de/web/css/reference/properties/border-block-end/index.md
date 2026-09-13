---
title: "`border-block-end` CSS-Eigenschaft"
short-title: border-block-end
slug: Web/CSS/Reference/Properties/border-block-end
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
---

Die **`border-block-end`** [CSS](/de/docs/Web/CSS) [Shorthand](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties)-Eigenschaft legt die individuellen logischen Endblockrand-Eigenschaftswerte an einer Stelle im Stylesheet fest.

{{InteractiveExample("CSS Demo: border-block-end")}}

```css interactive-example-choice
border-block-end: solid;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-end: dashed red;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-block-end: 1rem solid;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-end: thick double #32a1ce;
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
  color: darkmagenta;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: bidi-override;
}
```

## Bestandteileigenschaften

Diese Eigenschaft ist eine Abkürzung für die folgenden CSS-Eigenschaften:

- {{cssxref("border-block-end-color")}}
- {{cssxref("border-block-end-style")}}
- {{cssxref("border-block-end-width")}}

## Syntax

```css
border-block-end: 1px;
border-block-end: 2px dotted;
border-block-end: medium dashed blue;

/* Global values */
border-block-end: inherit;
border-block-end: initial;
border-block-end: revert;
border-block-end: revert-layer;
border-block-end: unset;
```

`border-block-end` kann verwendet werden, um die Werte für eine oder mehrere der Eigenschaften {{cssxref("border-block-end-width")}}, {{cssxref("border-block-end-style")}} und {{cssxref("border-block-end-color")}} festzulegen. Der physische Rand, auf den sie abzielt, hängt vom Schreibmodus, der Richtung und der Textausrichtung des Elements ab. Sie entspricht je nach den definierten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} entweder der Eigenschaft {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}} oder {{cssxref("border-left")}}.

Zugehörige Eigenschaften sind {{cssxref("border-block-start")}}, {{cssxref("border-inline-start")}} und {{cssxref("border-inline-end")}}, die die anderen Ränder des Elements definieren.

### Werte

`border-block-end` wird mit einem oder mehreren der folgenden Werte in beliebiger Reihenfolge angegeben:

- {{cssxref("&lt;line-width&gt;")}}
  - : Die Breite des Rands. Siehe {{cssxref("border-width")}}.
- {{cssxref("&lt;line-style&gt;")}}
  - : Der Linienstil des Rands. Siehe {{cssxref("border-style")}}.
- {{CSSXref("&lt;color&gt;")}}
  - : Die Farbe des Rands.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Rand mit vertikalem Text

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
  border-block-end: 5px dashed blue;
}
```

#### Ergebnisse

{{EmbedLiveSample("Border_with_vertical_text", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values)
- Diese Eigenschaft wird auf eine der physischen Rand-Eigenschaften abgebildet: {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}} oder {{cssxref("border-left")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
