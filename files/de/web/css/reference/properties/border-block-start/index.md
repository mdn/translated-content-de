---
title: "`border-block-start` CSS-Eigenschaft"
short-title: border-block-start
slug: Web/CSS/Reference/Properties/border-block-start
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`border-block-start`** [CSS](/de/docs/Web/CSS) Eigenschaft ist eine [Shorthand-Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties), die es ermöglicht, die einzelnen logischen `block-start` Randwerte an einer einzigen Stelle im Stylesheet festzulegen.

{{InteractiveExample("CSS Demo: border-block-start")}}

```css interactive-example-choice
border-block-start: solid;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-start: dashed red;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-block-start: 1rem solid;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-start: thick double #32a1ce;
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

Diese Eigenschaft ist eine Shorthand für die folgenden CSS-Eigenschaften:

- {{cssxref("border-block-start-color")}}
- {{cssxref("border-block-start-style")}}
- {{cssxref("border-block-start-width")}}

## Syntax

```css
border-block-start: 1px;
border-block-start: 2px dotted;
border-block-start: medium dashed blue;

/* Global values */
border-block-start: inherit;
border-block-start: initial;
border-block-start: revert;
border-block-start: revert-layer;
border-block-start: unset;
```

`border-block-start` kann verwendet werden, um die Werte für eines oder mehrere der folgenden festzulegen: {{cssxref("border-block-start-width")}}, {{cssxref("border-block-start-style")}} und {{cssxref("border-block-start-color")}}. Der physische Rand, dem es zugeordnet wird, hängt vom Schreibmodus, der Richtung und der Textausrichtung des Elements ab. Es entspricht der {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}} oder {{cssxref("border-left")}} Eigenschaft, abhängig von den für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} definierten Werten.

Verwandte Eigenschaften sind {{cssxref("border-block-end")}}, {{cssxref("border-inline-start")}} und {{cssxref("border-inline-end")}}, die die anderen Ränder des Elements definieren.

### Werte

Das `border-block-start` wird mit einem oder mehreren der folgenden Werte, in beliebiger Reihenfolge, angegeben:

- `<'border-width'>`
  - : Die Breite des Randes. Siehe {{cssxref("border-width")}}.
- `<'border-style'>`
  - : Der Linienstil des Randes. Siehe {{cssxref("border-style")}}.
- {{CSSXref("&lt;color&gt;")}}
  - : Die Farbe des Randes.

## Offizielle Definition

{{CSSInfo}}

## Offizielle Syntax

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
  border-block-start: 5px dashed blue;
}
```

{{EmbedLiveSample("Border_with_vertical_text", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values)
- Diese Eigenschaft wird einer der physischen Randeigenschaften zugeordnet: {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, oder {{cssxref("border-left")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
