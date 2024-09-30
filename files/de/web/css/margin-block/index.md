---
title: margin-block
slug: Web/CSS/margin-block
l10n:
  sourceCommit: 5e7d1f9ae2cce0cb3f7693dfb8dc6e8d375b2231
---

{{CSSRef}}

Die **`margin-block`**-[CSS](/de/docs/Web/CSS) [Kurzschreibweise für Eigenschaft](/de/docs/Web/CSS/Shorthand_properties) definiert die logischen Anfangs- und Endabstände eines Elements im Block, die abhängig vom Schreibmodus, der Richtung und der Textausrichtung des Elements auf physische Abstände abgebildet werden.

{{EmbedInteractiveExample("pages/css/margin-block.html")}}

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("margin-block-start")}}
- {{cssxref("margin-block-end")}}

## Syntax

```css
/* <length> values */
margin-block: 10px 20px; /* An absolute length */
margin-block: 1em 2em; /* relative to the text size */
margin-block: 5% 2%; /* relative to the nearest block container's width */
margin-block: 10px; /* sets both start and end values */

/* Keyword values */
margin-block: auto;

/* Global values */
margin-block: inherit;
margin-block: initial;
margin-block: revert;
margin-block: revert-layer;
margin-block: unset;
```

Diese Eigenschaft entspricht den Eigenschaften {{CSSxRef("margin-top")}} und {{CSSxRef("margin-bottom")}}, oder {{CSSxRef("margin-right")}} und {{CSSxRef("margin-left")}}, abhängig von den definierten Werten für {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, und {{CSSxRef("text-orientation")}}.

Die `margin-block`-Eigenschaft kann mit einem oder zwei Werten spezifiziert werden.

- Wenn **ein** Wert angegeben ist, gilt derselbe Abstand für **sowohl Anfang als auch Ende**.
- Wenn **zwei** Werte angegeben sind, gilt der erste Abstand für den **Anfang**, der zweite für das **Ende**.

### Werte

Die `margin-block`-Eigenschaft nimmt die gleichen Werte an wie die {{CSSxRef("margin", "", "#values")}}-Eigenschaft.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Block-Anfangs- und Endabstände festlegen

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

- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Die zugeordneten physischen Eigenschaften: {{CSSxRef("margin-top")}}, {{CSSxRef("margin-right")}}, {{CSSxRef("margin-bottom")}}, und {{CSSxRef("margin-left")}}
- {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
