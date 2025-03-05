---
title: border-inline-start
slug: Web/CSS/border-inline-start
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

Die **`border-inline-start`** [CSS](/de/docs/Web/CSS) -Eigenschaft ist eine [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) zum Festlegen der individuellen logischen `inline-start`-Rahmeneigenschaften an einer Stelle im Stylesheet.

{{EmbedInteractiveExample("pages/css/border-inline-start.html")}}

## Bestandteile der Eigenschaft

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`border-inline-start-color`](/de/docs/Web/CSS/border-inline-start-color)
- [`border-inline-start-style`](/de/docs/Web/CSS/border-inline-start-style)
- [`border-inline-start-width`](/de/docs/Web/CSS/border-inline-start-width)

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

Der physische Rahmen, auf den sich `border-inline-start` bezieht, hängt vom Schreibmodus des Elements, der Richtung und der Textorientierung ab. Er entspricht der Eigenschaft {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}} oder {{cssxref("border-left")}}, abhängig von den definierten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}}.

Verwandte Eigenschaften sind {{cssxref("border-block-start")}}, {{cssxref("border-block-end")}} und {{cssxref("border-inline-end")}}, die die anderen Ränder des Elements definieren.

### Werte

`border-inline-start` wird mit einem oder mehreren der folgenden Werte in beliebiger Reihenfolge angegeben:

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

- [CSS Logical Properties and Values](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Diese Eigenschaft wird einer der physischen Rahmen-Eigenschaften zugeordnet: {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}} oder {{cssxref("border-left")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
