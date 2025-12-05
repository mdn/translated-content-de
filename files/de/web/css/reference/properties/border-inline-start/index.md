---
title: border-inline-start
slug: Web/CSS/Reference/Properties/border-inline-start
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`border-inline-start`** [CSS](/de/docs/Web/CSS) Eigenschaft ist eine [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) zum Festlegen der individuellen logischen `inline-start`-Randeigenschaften an einer Stelle im Stylesheet.

{{InteractiveExample("CSS Demo: border-inline-start")}}

```css interactive-example-choice
border-inline-start: solid;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-inline-start: dashed red;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-inline-start: 1rem solid;
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
  color: darkmagenta;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: bidi-override;
}
```

## Zugehörige Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("border-inline-start-color")}}
- {{cssxref("border-inline-start-style")}}
- {{cssxref("border-inline-start-width")}}

## Syntax

```css
border-inline-start: 1px;
border-inline-start: 2px dotted;
border-inline-start: medium dashed green;

/* Global values */
border-inline-start: inherit;
border-inline-start: initial;
border-inline-start: revert;
border-inline-start: revert-layer;
border-inline-start: unset;
```

Der physische Rand, auf den `border-inline-start` abgebildet wird, hängt von der Schreibrichtung, der Richtung und der Textausrichtung des Elements ab. Er entspricht der {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, oder {{cssxref("border-left")}} Eigenschaft, abhängig von den definierten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}}, und {{cssxref("text-orientation")}}.

Verwandte Eigenschaften sind {{cssxref("border-block-start")}}, {{cssxref("border-block-end")}}, und {{cssxref("border-inline-end")}}, die die anderen Ränder des Elements definieren.

### Werte

Der `border-inline-start` wird mit einem oder mehreren der folgenden Werte in beliebiger Reihenfolge angegeben:

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

### HTML

```html
<div>
  <p class="exampleText">Example text</p>
</div>
```

### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-rl;
  border-inline-start: 5px dashed blue;
}
```

{{EmbedLiveSample("Examples", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values)
- Diese Eigenschaft wird auf eine der physischen Randeigenschaften abgebildet: {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, oder {{cssxref("border-left")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
