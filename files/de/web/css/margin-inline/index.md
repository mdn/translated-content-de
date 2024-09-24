---
title: margin-inline
slug: Web/CSS/margin-inline
l10n:
  sourceCommit: 5e7d1f9ae2cce0cb3f7693dfb8dc6e8d375b2231
---

{{CSSRef}}

Die **`margin-inline`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) ist eine Kurzschreibweise, die sowohl den logischen Start- als auch Endrand eines Elements definiert, was je nach Schreibmodus, Richtung und Textausrichtung des Elements auf physische Ränder abgebildet wird.

{{EmbedInteractiveExample("pages/css/margin-inline.html")}}

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("margin-inline-start")}}
- {{cssxref("margin-inline-end")}}

## Syntax

```css
/* <Längen> Werte */
margin-inline: 10px 20px; /* Eine absolute Länge */
margin-inline: 1em 2em; /* relativ zur Textgröße */
margin-inline: 5% 2%; /* relativ zur Breite des nächstgelegenen Blockcontainers */
margin-inline: 10px; /* setzt sowohl Start- als auch Endwerte */

/* Schlüsselwortwerte */
margin-inline: auto;

/* Globale Werte */
margin-inline: inherit;
margin-inline: initial;
margin-inline: revert;
margin-inline: revert-layer;
margin-inline: unset;
```

Diese Eigenschaft entspricht den {{CSSxRef("margin-top")}} und {{CSSxRef("margin-bottom")}}, oder den {{CSSxRef("margin-right")}} und {{CSSxRef("margin-left")}} Eigenschaften, abhängig von den definierten Werten für {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, und {{CSSxRef("text-orientation")}}.

Die Eigenschaft `margin-inline` kann mit einem oder zwei Werten angegeben werden.

- Wird **ein** Wert angegeben, gilt derselbe Rand für **sowohl Start als auch Ende**.
- Werden **zwei** Werte angegeben, gilt der erste Rand für den **Start**, der zweite für das **Ende**.

### Werte

Die `margin-inline`-Eigenschaft nimmt die gleichen Werte an wie die {{CSSxRef("margin", "", "#values")}} Eigenschaft.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen von Start- und Endrändern in der Zeile

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

- [CSS Logical Properties and Values](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Die abgebildeten physischen Eigenschaften: {{CSSxRef("margin-top")}}, {{CSSxRef("margin-right")}}, {{CSSxRef("margin-bottom")}}, und {{CSSxRef("margin-left")}}
- {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
