---
title: border-inline
slug: Web/CSS/border-inline
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

Die **`border-inline`** [CSS](/de/docs/Web/CSS)-Eigenschaft ist eine [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) zum Festlegen der einzelnen logischen Inline-Ränder in einem einzigen Schritt im Style Sheet.

{{EmbedInteractiveExample("pages/css/border-inline.html")}}

Die physischen Ränder, auf die `border-inline` verweist, hängen vom Schreibmodus, der Ausrichtung und der Textorientierung des Elements ab. Sie entspricht je nach den definierten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}}, und {{cssxref("text-orientation")}} den Eigenschaften {{cssxref("border-top")}} und {{cssxref("border-bottom")}} oder {{cssxref("border-right")}} und {{cssxref("border-left")}}.

Die Ränder in der anderen Dimension können mit {{cssxref("border-block")}} gesetzt werden, was {{cssxref("border-block-start")}} und {{cssxref("border-block-end")}} festlegt.

## Bestandeigenschaften

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

Die `border-inline` wird mit einem oder mehreren der folgenden Werte in beliebiger Reihenfolge angegeben:

- `<'border-width'>`
  - : Die Breite des Rands. Siehe {{cssxref("border-width")}}.
- `<'border-style'>`
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

- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Diese Eigenschaft verweist auf eine der physischen Rand-Eigenschaften: {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, oder {{cssxref("border-left")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
