---
title: border-block-end
slug: Web/CSS/border-block-end
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

Die **`border-block-end`** [CSS](/de/docs/Web/CSS) Eigenschaft ist eine [Kurzform](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) zum Setzen der individuellen Werte der logischen Block-Endrand-Eigenschaften an einer Stelle im Stylesheet.

{{EmbedInteractiveExample("pages/css/border-block-end.html")}}

## Bestandteile der Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`border-block-end-color`](/de/docs/Web/CSS/border-block-end-color)
- [`border-block-end-style`](/de/docs/Web/CSS/border-block-end-style)
- [`border-block-end-width`](/de/docs/Web/CSS/border-block-end-width)

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

`border-block-end` kann verwendet werden, um die Werte für eine oder mehrere der Eigenschaften {{cssxref("border-block-end-width")}}, {{cssxref("border-block-end-style")}} und {{cssxref("border-block-end-color")}} festzulegen. Der physische Rand, auf den es abbildet, hängt vom Schreibmodus, der Richtung und der Textorientierung des Elements ab. Es entspricht der {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}} oder {{cssxref("border-left")}} Eigenschaft, je nach den definierten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}}.

Verwandte Eigenschaften sind {{cssxref("border-block-start")}}, {{cssxref("border-inline-start")}} und {{cssxref("border-inline-end")}}, welche die anderen Ränder des Elements definieren.

### Werte

`border-block-end` wird mit einem oder mehreren der folgenden Werte, in beliebiger Reihenfolge, spezifiziert:

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

- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Diese Eigenschaft ordnet sich einer der physischen Rand-Eigenschaften zu: {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, oder {{cssxref("border-left")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
