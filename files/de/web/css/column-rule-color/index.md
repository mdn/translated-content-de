---
title: column-rule-color
slug: Web/CSS/column-rule-color
l10n:
  sourceCommit: 5f13cbe7517ce96deeb521d4c8e6923266a22913
---

{{CSSRef}}

Die **`column-rule-color`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Farbe der Linie fest, die zwischen den Spalten in einem Mehrspalten-Layout gezeichnet wird.

{{EmbedInteractiveExample("pages/css/column-rule-color.html")}}

## Syntax

```css
/* <color> Werte */
column-rule-color: red;
column-rule-color: rgb(192 56 78);
column-rule-color: transparent;
column-rule-color: hsl(0 100% 50% / 60%);

/* Globale Werte */
column-rule-color: inherit;
column-rule-color: initial;
column-rule-color: revert;
column-rule-color: revert-layer;
column-rule-color: unset;
```

Die `column-rule-color` Eigenschaft wird als einzelner `<color>` Wert angegeben.

### Werte

- {{cssxref("&lt;color&gt;")}}
  - : Die Farbe der Linie, die Spalten trennt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine blaue Spaltenlinie setzen

#### HTML

```html
<p>
  Dies ist eine Menge Text, der in drei Spalten aufgeteilt ist. Die
  `column-rule-color` Eigenschaft wird verwendet, um die Farbe der Linie
  zu ändern, die zwischen den Spalten gezeichnet wird. Finden Sie nicht
  auch, dass das wunderbar ist?
</p>
```

#### CSS

```css
p {
  column-count: 3;
  column-rule-style: solid;
  column-rule-color: blue;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_a_blue_column_rule")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Der {{cssxref("&lt;color&gt;")}} Datentyp
- Andere farbbezogene Eigenschaften: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}} und {{cssxref("caret-color")}}
