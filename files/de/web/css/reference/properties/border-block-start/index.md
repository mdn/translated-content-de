---
title: border-block-start
slug: Web/CSS/Reference/Properties/border-block-start
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`border-block-start`**-[CSS](/de/docs/Web/CSS)-Eigenschaft ist eine [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties), die es ermöglicht, die einzelnen logischen Eigenschaftswerte des Block-Start-Randes an einer einzigen Stelle im Stylesheet festzulegen.

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

## Einzeleigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

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

`border-block-start` kann verwendet werden, um die Werte für eine oder mehrere der {{cssxref("border-block-start-width")}}, {{cssxref("border-block-start-style")}} und {{cssxref("border-block-start-color")}} festzulegen. Der physische Rand, auf den er abgebildet wird, hängt vom Schreibmodus, der Richtung und der Textausrichtung des Elements ab. Er entspricht der {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}} oder {{cssxref("border-left")}}-Eigenschaft, je nach den definierten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}}.

Verwandte Eigenschaften sind {{cssxref("border-block-end")}}, {{cssxref("border-inline-start")}} und {{cssxref("border-inline-end")}}, die die anderen Ränder des Elements definieren.

### Werte

`border-block-start` wird durch einen oder mehrere der folgenden Werte angegeben, in beliebiger Reihenfolge:

- `<'border-width'>`
  - : Die Breite des Randes. Siehe {{cssxref("border-width")}}.
- `<'border-style'>`
  - : Der Linienstil des Randes. Siehe {{cssxref("border-style")}}.
- {{CSSXref("&lt;color&gt;")}}
  - : Die Farbe des Randes.

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
- Diese Eigenschaft wird auf eine der physischen Randeigenschaften abgebildet: {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, oder {{cssxref("border-left")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
