---
title: margin-inline
slug: Web/CSS/margin-inline
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

Die **`margin-inline`** [CSS](/de/docs/Web/CSS) [Kurzform-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) ist eine Kurzform, die sowohl den logischen Anfangs- als auch den Endabstand eines Elements definiert. Diese Eigenschaft wird auf physische Abstände abgebildet, abhängig vom Schreibmodus, der Richtung und der Textausrichtung des Elements.

{{EmbedInteractiveExample("pages/css/margin-inline.html")}}

## Bestandteile der Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("margin-inline-start")}}
- {{cssxref("margin-inline-end")}}

## Syntax

```css
/* <length> values */
margin-inline: 10px 20px; /* An absolute length */
margin-inline: 1em 2em; /* relative to the text size */
margin-inline: 5% 2%; /* relative to the nearest block container's width */
margin-inline: 10px; /* sets both start and end values */
margin-inline: anchor-size(width);
margin-inline: calc(anchor-size(self-block) / 5) auto;

/* Keyword values */
margin-inline: auto;

/* Global values */
margin-inline: inherit;
margin-inline: initial;
margin-inline: revert;
margin-inline: revert-layer;
margin-inline: unset;
```

Diese Eigenschaft entspricht den {{CSSxRef("margin-top")}} und {{CSSxRef("margin-bottom")}}, oder den {{CSSxRef("margin-right")}} und {{CSSxRef("margin-left")}} Eigenschaften, abhängig von den definierten Werten für {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, und {{CSSxRef("text-orientation")}}.

Die `margin-inline`-Eigenschaft kann mit einem oder zwei Werten angegeben werden.

- Wenn **ein** Wert angegeben wird, gilt derselbe Abstand für **sowohl Anfang als auch Ende**.
- Wenn **zwei** Werte angegeben werden, gilt der erste Abstand für den **Anfang**, der zweite für das **Ende**.

### Werte

Die `margin-inline`-Eigenschaft nimmt dieselben Werte wie die {{CSSxRef("margin", "", "#values")}}-Eigenschaft an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen von Anfangs- und Endabständen

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
  margin-inline: 20px 40px;
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

{{EmbedLiveSample("Setting_inline_start_and_end_margins", 140, 240)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Die abgebildeten physischen Eigenschaften: {{CSSxRef("margin-top")}}, {{CSSxRef("margin-right")}}, {{CSSxRef("margin-bottom")}}, und {{CSSxRef("margin-left")}}
- {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
