---
title: border-inline
slug: Web/CSS/border-inline
l10n:
  sourceCommit: 2adfb8760ac42c80966080e2e84211b14e43b589
---

{{CSSRef}}

Die **`border-inline`**-[CSS](/de/docs/Web/CSS) Eigenschaft ist eine [Kurzformeigenschaft](/de/docs/Web/CSS/Shorthand_properties) zum Setzen der einzelnen logischen, inline-spezifischen Rahmenwerte an einer einzigen Stelle im Stylesheet.

{{EmbedInteractiveExample("pages/css/border-inline.html")}}

Die physikalischen Rahmen, auf die `border-inline` abbildet, hängen vom Schreibmodus, der Richtung und der Textausrichtung des Elements ab. Sie entspricht den Eigenschaften {{cssxref("border-top")}} und {{cssxref("border-bottom")}} oder {{cssxref("border-right")}} und {{cssxref("border-left")}}, abhängig von den Werten, die für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} definiert sind.

Die Rahmen in der anderen Dimension können mit {{cssxref("border-block")}}, das {{cssxref("border-block-start")}} und {{cssxref("border-block-end")}} setzt, bestimmt werden.

## Bestandteile der Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`border-inline-color`](/de/docs/Web/CSS/border-inline-color)
- [`border-inline-style`](/de/docs/Web/CSS/border-inline-style)
- [`border-inline-width`](/de/docs/Web/CSS/border-inline-width)

## Syntax

```css
border-inline: 1px;
border-inline: 2px dotted;
border-inline: medium dashed blue;

/* Global values */
border-inline: inherit;
border-inline: initial;
border-inline: revert;
border-inline: revert-layer;
border-inline: unset;
```

### Werte

Das `border-inline` wird mit einem oder mehreren der folgenden Werte in beliebiger Reihenfolge angegeben:

- `<'border-width'>`
  - : Die Breite des Rahmens. Siehe {{cssxref("border-width")}}.
- `<'border-style'>`
  - : Der Linienstil des Rahmens. Siehe {{cssxref("border-style")}}.
- {{CSSXref("&lt;color&gt;")}}
  - : Die Farbe des Rahmens.

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
  border-inline: 5px dashed blue;
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
- Diese Eigenschaft wird einer der physikalischen Rahmeneigenschaften zugeordnet: {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}} oder {{cssxref("border-left")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
