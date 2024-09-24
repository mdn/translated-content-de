---
title: border-block-start-color
slug: Web/CSS/border-block-start-color
l10n:
  sourceCommit: 2adfb8760ac42c80966080e2e84211b14e43b589
---

{{CSSRef}}

Die **`border-block-start-color`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Farbe des logischen Block-Start-Randes eines Elements, welche je nach Schreibrichtung, Ausrichtung und Textorientierung des Elements einer physischen Randfarbe zugeordnet wird. Sie entspricht der {{cssxref("border-top-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}} oder {{cssxref("border-left-color")}} Eigenschaft, abhängig von den definierten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}}.

{{EmbedInteractiveExample("pages/css/border-block-start-color.html")}}

## Syntax

```css
border-block-start-color: blue;
border-block-start-color: #4c5d21;

/* Globale Werte */
border-block-start-color: inherit;
border-block-start-color: initial;
border-block-start-color: revert;
border-block-start-color: revert-layer;
border-block-start-color: unset;
```

Verwandte Eigenschaften sind {{cssxref("border-block-end-color")}}, {{cssxref("border-inline-start-color")}}, und {{cssxref("border-inline-end-color")}}, welche die anderen Randfarben des Elements definieren.

### Werte

- {{CSSXref("&lt;color&gt;")}}
  - : Die Farbe des Randes.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Randfarbe mit vertikalem Text

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
  writing-mode: vertical-lr;
  border: 10px solid blue;
  border-block-start-color: red;
}
```

#### Ergebnisse

{{EmbedLiveSample("Border_color_with_vertical_text", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Diese Eigenschaft wird einer der physischen Rand-Eigenschaften zugeordnet: {{cssxref("border-top-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}}, oder {{cssxref("border-left-color")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
