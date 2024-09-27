---
title: border-inline-end
slug: Web/CSS/border-inline-end
l10n:
  sourceCommit: 2adfb8760ac42c80966080e2e84211b14e43b589
---

{{CSSRef}}

Die **`border-inline-end`**-Eigenschaft von [CSS](/de/docs/Web/CSS) ist eine [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) zum Setzen der einzelnen logischen `inline-end`-Rand-Eigenschaftswerte an einer Stelle im Stylesheet.

{{EmbedInteractiveExample("pages/css/border-inline-end.html")}}

## Zugehörige Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`border-inline-end-color`](/de/docs/Web/CSS/border-inline-end-color)
- [`border-inline-end-style`](/de/docs/Web/CSS/border-inline-end-style)
- [`border-inline-end-width`](/de/docs/Web/CSS/border-inline-end-width)

## Syntax

```css
border-inline-end: 1px;
border-inline-end: 2px dashed;
border-inline-end: medium dashed blue;

/* Global values */
border-inline-end: inherit;
border-inline-end: initial;
border-inline-end: revert;
border-inline-end: revert-layer;
border-inline-end: unset;
```

Der physische Rahmen, dem `border-inline-end` zugeordnet wird, hängt vom Schreibmodus, der Richtung und der Textausrichtung des Elements ab. Er entspricht der Eigenschaft {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}} oder {{cssxref("border-left")}}, abhängig von den definierten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}}.

Verwandte Eigenschaften sind {{cssxref("border-block-start")}}, {{cssxref("border-block-end")}} und {{cssxref("border-inline-start")}}, die die anderen Ränder des Elements definieren.

### Werte

Die `border-inline-end`-Eigenschaft wird mit einem oder mehreren der folgenden Werte in beliebiger Reihenfolge festgelegt:

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
  border-inline-end: 5px dashed blue;
}
```

{{EmbedLiveSample("Examples", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Diese Eigenschaft wird einer der physischen Rahmen-Eigenschaften zugeordnet: {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, oder {{cssxref("border-left")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
