---
title: border-block
slug: Web/CSS/border-block
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

Die **`border-block`** [CSS](/de/docs/Web/CSS) Eigenschaft ist eine [Shorthand-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties), die es ermöglicht, die einzelnen logischen Blockrand-Eigenschaften an einer Stelle im Stylesheet zu definieren.

{{EmbedInteractiveExample("pages/css/border-block.html")}}

`border-block` kann verwendet werden, um die Werte für eine oder mehrere der {{cssxref("border-block-width")}}, {{cssxref("border-block-style")}}, und {{cssxref("border-block-color")}} Eigenschaften sowohl für den Anfang als auch das Ende in der Blockdimension gleichzeitig festzulegen. Die physischen Ränder, auf die es sich bezieht, hängen vom Schreibmodus des Elements, der Richtung und der Textausrichtung ab. Es entspricht den {{cssxref("border-top")}} und {{cssxref("border-bottom")}} oder {{cssxref("border-right")}}, und {{cssxref("border-left")}} Eigenschaften, je nach den festgelegten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}}, und {{cssxref("text-orientation")}}.

Die Ränder in der anderen Dimension können mit {{cssxref("border-inline")}} festgelegt werden, welches {{cssxref("border-inline-start")}}, und {{cssxref("border-inline-end")}} setzt.

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Shorthand für die folgenden CSS-Eigenschaften:

- [`border-block-color`](/de/docs/Web/CSS/border-block-color)
- [`border-block-style`](/de/docs/Web/CSS/border-block-style)
- [`border-block-width`](/de/docs/Web/CSS/border-block-width)

## Syntax

```css
border-block: 1px;
border-block: 2px dotted;
border-block: medium dashed blue;

/* Global values */
border-block: inherit;
border-block: initial;
border-block: revert;
border-block: revert-layer;
border-block: unset;
```

### Werte

`border-block` wird mit einem oder mehreren der folgenden in beliebiger Reihenfolge angegeben:

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
  border-block: 5px dashed blue;
}
```

#### Ergebnisse

{{EmbedLiveSample("Border_with_vertical_text", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logical Properties and Values](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Diese Eigenschaft weist einen der physischen Rand-Eigenschaften zu: {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, oder {{cssxref("border-left")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
