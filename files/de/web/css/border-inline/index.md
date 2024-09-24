---
title: border-inline
slug: Web/CSS/border-inline
l10n:
  sourceCommit: 2adfb8760ac42c80966080e2e84211b14e43b589
---

{{CSSRef}}

Die **`border-inline`** [CSS](/de/docs/Web/CSS)-Eigenschaft ist eine [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties), um die individuellen logischen Inline-Randwerte an einer Stelle im Stylesheet festzulegen.

{{EmbedInteractiveExample("pages/css/border-inline.html")}}

Welche physischen Rahmen `border-inline` zugeordnet sind, hängt vom Schreibmodus, der Leserichtung und der Textausrichtung des Elements ab. Es entspricht den Eigenschaften {{cssxref("border-top")}} und {{cssxref("border-bottom")}} oder {{cssxref("border-right")}} und {{cssxref("border-left")}}, abhängig von den definierten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}}.

Die Rahmen in der anderen Dimension können mit {{cssxref("border-block")}} gesetzt werden, welches {{cssxref("border-block-start")}} und {{cssxref("border-block-end")}} festlegt.

## Komponenteneigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für folgende CSS-Eigenschaften:

- [`border-inline-color`](/de/docs/Web/CSS/border-inline-color)
- [`border-inline-style`](/de/docs/Web/CSS/border-inline-style)
- [`border-inline-width`](/de/docs/Web/CSS/border-inline-width)

## Syntax

```css
border-inline: 1px;
border-inline: 2px dotted;
border-inline: medium dashed blue;

/* Globale Werte */
border-inline: inherit;
border-inline: initial;
border-inline: revert;
border-inline: revert-layer;
border-inline: unset;
```

### Werte

Das `border-inline` wird mit einem oder mehreren der folgenden in beliebiger Reihenfolge angegeben:

- `<'border-width'>`
  - : Die Breite des Rahmens. Siehe {{cssxref("border-width")}}.
- `<'border-style'>`
  - : Der Stil der Rahmenlinie. Siehe {{cssxref("border-style")}}.
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
  <p class="exampleText">Beispieltext</p>
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
- Diese Eigenschaft wird einer der physischen Rahmen-Eigenschaften zugeordnet: {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}} oder {{cssxref("border-left")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
