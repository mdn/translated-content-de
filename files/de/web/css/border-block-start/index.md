---
title: border-block-start
slug: Web/CSS/border-block-start
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

Die **`border-block-start`** [CSS](/de/docs/Web/CSS) Eigenschaft ist eine [Schreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) zum Festlegen der individuellen logischen Block-Start-Rand-Eigenschaftswerte an einer Stelle im Stylesheet.

{{EmbedInteractiveExample("pages/css/border-block-start.html")}}

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

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

`border-block-start` kann verwendet werden, um die Werte für eine oder mehrere der Eigenschaften {{cssxref("border-block-start-width")}}, {{cssxref("border-block-start-style")}} und {{cssxref("border-block-start-color")}} festzulegen. Der physische Rand, auf den es abbildet, hängt vom Schreibmodus, der Richtung und der Textorientierung des Elements ab. Es entspricht der Eigenschaft {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}} oder {{cssxref("border-left")}}, abhängig von den definierten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}}.

Verwandte Eigenschaften sind {{cssxref("border-block-end")}}, {{cssxref("border-inline-start")}} und {{cssxref("border-inline-end")}}, die die anderen Randbereiche des Elements definieren.

### Werte

Das `border-block-start` wird mit einem oder mehreren der folgenden Werte in beliebiger Reihenfolge angegeben:

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

### Rahmen mit vertikalem Text

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

- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Diese Eigenschaft wird einer der physischen Rand-Eigenschaften zugeordnet: {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}} oder {{cssxref("border-left")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
