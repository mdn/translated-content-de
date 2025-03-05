---
title: margin-block
slug: Web/CSS/margin-block
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

Die **`margin-block`** [CSS](/de/docs/Web/CSS) [Kurzform-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) definiert die logischen Blockanfangs- und Blockend-Ränder eines Elements, die je nach Schreibmodus, Richtung und Textausrichtung des Elements auf physische Ränder abgebildet werden.

{{EmbedInteractiveExample("pages/css/margin-block.html")}}

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("margin-block-start")}}
- {{cssxref("margin-block-end")}}

## Syntax

```css
/* <length> values */
margin-block: 10px 20px; /* An absolute length */
margin-block: 1em 2em; /* relative to the text size */
margin-block: 5% 2%; /* relative to the nearest block container's width */
margin-block: 10px; /* sets both start and end values */
margin-block: anchor-size(inline);
margin-block: calc(anchor-size(width) / 4) 1em;

/* Keyword values */
margin-block: auto;

/* Global values */
margin-block: inherit;
margin-block: initial;
margin-block: revert;
margin-block: revert-layer;
margin-block: unset;
```

Diese Eigenschaft entspricht den {{CSSxRef("margin-top")}} und {{CSSxRef("margin-bottom")}}, oder den {{CSSxRef("margin-right")}} und {{CSSxRef("margin-left")}} Eigenschaften, abhängig von den für {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, und {{CSSxRef("text-orientation")}} definierten Werten.

Die `margin-block` Eigenschaft kann mit einem oder zwei Werten angegeben werden.

- Wenn **ein** Wert angegeben wird, gilt derselbe Rand für **sowohl Anfang als auch Ende**.
- Wenn **zwei** Werte angegeben werden, gilt der erste Rand für den **Anfang**, der zweite für das **Ende**.

### Werte

Die `margin-block` Eigenschaft nimmt dieselben Werte wie die {{CSSxRef("margin", "", "#values")}} Eigenschaft.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegung der Blockanfangs- und Blockend-Ränder

#### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: auto;
  border: 1px solid green;
}

p {
  margin: 0;
  margin-block: 20px 40px;
  background-color: tan;
}

.verticalExample {
  writing-mode: vertical-rl;
}
```

#### HTML

```html
<div>
  <p>Example text</p>
</div>
<div class="verticalExample">
  <p>Example text</p>
</div>
```

#### Ergebnis

{{EmbedLiveSample("Setting_block_start_and_end_margins", 140, 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logical Properties and Values](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Die abgebildeten physischen Eigenschaften: {{CSSxRef("margin-top")}}, {{CSSxRef("margin-right")}}, {{CSSxRef("margin-bottom")}}, und {{CSSxRef("margin-left")}}
- {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
