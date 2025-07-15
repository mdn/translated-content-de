---
title: border-block-start
slug: Web/CSS/border-block-start
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`border-block-start`**-Eigenschaft von [CSS](/de/docs/Web/CSS) ist eine [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties), um die individuellen logischen Anfangswerte der Blockrand-Eigenschaften an einer einzigen Stelle im Stylesheet festzulegen.

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
  background-color: #eee;
  color: #8b008b;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: bidi-override;
}
```

## Speichernde Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`border-block-start-color`](/de/docs/Web/CSS/border-block-start-color)
- [`border-block-start-style`](/de/docs/Web/CSS/border-block-start-style)
- [`border-block-start-width`](/de/docs/Web/CSS/border-block-start-width)

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

`border-block-start` kann verwendet werden, um die Werte für eine oder mehrere der folgenden Eigenschaften festzulegen: {{cssxref("border-block-start-width")}}, {{cssxref("border-block-start-style")}} und {{cssxref("border-block-start-color")}}. Der physische Rand, auf den es abbildet, hängt vom Schreibrichtungsmodus, der Ausrichtung und der Textorientierung des Elements ab. Es entspricht der jeweiligen {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, oder {{cssxref("border-left")}} Eigenschaft je nach den festgelegten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}}.

Verwandte Eigenschaften sind {{cssxref("border-block-end")}}, {{cssxref("border-inline-start")}}, und {{cssxref("border-inline-end")}}, die die anderen Ränder des Elements definieren.

### Werte

Der `border-block-start` wird mit einem oder mehreren der folgenden Werte spezifiziert, in beliebiger Reihenfolge:

- `<'border-width'>`
  - : Die Breite des Randes. Siehe {{cssxref("border-width")}}.
- `<'border-style'>`
  - : Der Stil der Randlinie. Siehe {{cssxref("border-style")}}.
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

- [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Diese Eigenschaft wird einer der physischen Rand-Eigenschaften zugeordnet: {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, oder {{cssxref("border-left")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
