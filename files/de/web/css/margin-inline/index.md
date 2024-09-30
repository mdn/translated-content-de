---
title: margin-inline
slug: Web/CSS/margin-inline
l10n:
  sourceCommit: 5e7d1f9ae2cce0cb3f7693dfb8dc6e8d375b2231
---

{{CSSRef}}

Die **`margin-inline`** [CSS](/de/docs/Web/CSS) [Kurzform-Eigenschaft](/de/docs/Web/CSS/Shorthand_properties) ist eine Kurzform-Eigenschaft, die sowohl den logischen Start- als auch End-Abstand eines Elements definiert. Diese werden abhängig von der Schreibrichtung, Richtung und Textausrichtung des Elements in physische Abstände umgewandelt.

{{EmbedInteractiveExample("pages/css/margin-inline.html")}}

## Bestandeigenschaften

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

/* Keyword values */
margin-inline: auto;

/* Global values */
margin-inline: inherit;
margin-inline: initial;
margin-inline: revert;
margin-inline: revert-layer;
margin-inline: unset;
```

Diese Eigenschaft entspricht den {{CSSxRef("margin-top")}} und {{CSSxRef("margin-bottom")}}, oder den {{CSSxRef("margin-right")}} und {{CSSxRef("margin-left")}} Eigenschaften, je nach den definierten Werten für {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, und {{CSSxRef("text-orientation")}}.

Die `margin-inline` Eigenschaft kann entweder mit einem oder zwei Werten angegeben werden.

- Wenn **ein** Wert angegeben wird, gilt derselbe Abstand für **sowohl Start als auch Ende**.
- Wenn **zwei** Werte angegeben werden, gilt der erste Abstand für den **Start**, der zweite für das **Ende**.

### Werte

Die `margin-inline` Eigenschaft nimmt dieselben Werte an wie die {{CSSxRef("margin", "", "#values")}} Eigenschaft.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Setzen von Abständen für inline Start und Ende

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
- Die zugeordneten physischen Eigenschaften: {{CSSxRef("margin-top")}}, {{CSSxRef("margin-right")}}, {{CSSxRef("margin-bottom")}}, und {{CSSxRef("margin-left")}}
- {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
