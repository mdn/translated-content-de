---
title: border-block-end
slug: Web/CSS/Reference/Properties/border-block-end
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`border-block-end`** [CSS](/de/docs/Web/CSS) Eigenschaft ist eine [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) zum Festlegen der einzelnen logischen Block-End-Rand-Eigenschaftswerte an einer einzigen Stelle im Stylesheet.

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

## Bestandeigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

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

`border-block-end` kann verwendet werden, um die Werte für eine oder mehrere der Eigenschaften {{cssxref("border-block-end-width")}}, {{cssxref("border-block-end-style")}} und {{cssxref("border-block-end-color")}} festzulegen. Der physische Rand, auf den er abgebildet wird, hängt vom Schreibmodus, der Richtung und der Textausrichtung des Elements ab. Er entspricht der {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}} oder {{cssxref("border-left")}} Eigenschaft, abhängig von den definierten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}}.

Verwandte Eigenschaften sind {{cssxref("border-block-start")}}, {{cssxref("border-inline-start")}} und {{cssxref("border-inline-end")}}, die die anderen Ränder des Elements definieren.

### Werte

`border-block-end` wird mit einem oder mehreren der folgenden Werte festgelegt, in beliebiger Reihenfolge:

- `<'border-width'>`
  - : Die Breite des Rands. Siehe {{cssxref("border-width")}}.
- `<'border-style'>`
  - : Der Stil der Randlinie. Siehe {{cssxref("border-style")}}.
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
- Diese Eigenschaft wird auf eine der physischen Randeigenschaften abgebildet: {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, oder {{cssxref("border-left")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
