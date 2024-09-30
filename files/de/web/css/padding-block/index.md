---
title: padding-block
slug: Web/CSS/padding-block
l10n:
  sourceCommit: 6b48d9fb5065ee53207e9053f465cc0989c2619a
---

{{CSSRef}}

Die **`padding-block`** [CSS](/de/docs/Web/CSS)-[Kurzform-Eigenschaft](/de/docs/Web/CSS/Shorthand_properties) definiert den logischen Blockanfang und das Blockende der Innenabstände eines Elements, die je nach Schreibmodus, Richtung und Textausrichtung des Elements auf physische Innenabstandseigenschaften abgebildet werden.

{{EmbedInteractiveExample("pages/css/padding-block.html")}}

## Teilkomponenten der Eigenschaft

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

Die `padding-block`-Eigenschaft kann mit einem oder zwei Werten angegeben werden. Wenn ein Wert angegeben wird, wird dieser sowohl für {{cssxref("padding-block-start")}} als auch {{cssxref("padding-block-end")}} verwendet. Werden zwei Werte angegeben, wird der erste für {{cssxref("padding-block-start")}} und der zweite für {{cssxref("padding-block-end")}} verwendet.

### Werte

Die `padding-block`-Eigenschaft nimmt die gleichen Werte wie die {{cssxref("padding-left")}}-Eigenschaft an.

## Beschreibung

Diese Werte entsprechen den Eigenschaften {{cssxref("padding-top")}} und {{cssxref("padding-bottom")}} oder {{cssxref("padding-right")}} und {{cssxref("padding-left")}}, abhängig von den für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} definierten Werten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der Block-Innenabstände für vertikalen Text

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

- [CSS Logical Properties and Values](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Die zugeordneten physischen Eigenschaften: {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, und {{cssxref("padding-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
