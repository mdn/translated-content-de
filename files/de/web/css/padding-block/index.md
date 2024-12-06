---
title: padding-block
slug: Web/CSS/padding-block
l10n:
  sourceCommit: f26b3f2ab7a079151245759bc2682427dc36870c
---

{{CSSRef}}

Die **`padding-block`** [CSS](/de/docs/Web/CSS) [Kurzform-Eigenschaft](/de/docs/Web/CSS/Shorthand_properties) definiert das logische Block-Anfangs- und End-Padding eines Elements, das je nach Schriftrichtung, Richtung und Textausrichtung des Elements bestimmten physischen Padding-Eigenschaften zugeordnet wird.

{{EmbedInteractiveExample("pages/css/padding-block.html")}}

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("padding-block-start")}}
- {{cssxref("padding-block-end")}}

## Syntax

```css
/* <length> values */
padding-block: 10px 20px; /* An absolute length */
padding-block: 1em 2em; /* relative to the text size */
padding-block: 10px; /* sets both start and end values */

/* <percentage> values */
padding-block: 5% 2%; /* relative to the nearest block container's width */

/* Global values */
padding-block: inherit;
padding-block: initial;
padding-block: revert;
padding-block: revert-layer;
padding-block: unset;
```

Die `padding-block`-Eigenschaft kann mit einem oder zwei Werten angegeben werden. Wenn ein Wert gegeben ist, wird er sowohl für {{cssxref("padding-block-start")}} als auch für {{cssxref("padding-block-end")}} verwendet. Wenn zwei Werte angegeben sind, wird der erste für {{cssxref("padding-block-start")}} und der zweite für {{cssxref("padding-block-end")}} verwendet.

### Werte

Die `padding-block`-Eigenschaft nimmt die gleichen Werte an wie die {{cssxref("padding-left")}}-Eigenschaft.

## Beschreibung

Die durch `padding-block` angegebenen Padding-Werte können den {{cssxref("padding-top")}}- und {{cssxref("padding-bottom")}}-Eigenschaften oder den {{cssxref("padding-right")}}- und {{cssxref("padding-left")}}-Eigenschaften entsprechen, abhängig von den für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} definierten Werten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Block-Padding für vertikalen Text einstellen

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
  padding-block: 20px 40px;
  background-color: #c8c800;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_block_padding_for_vertical_text", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Die zugeordneten physikalischen Eigenschaften: {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}} und {{cssxref("padding-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
