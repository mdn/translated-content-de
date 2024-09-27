---
title: column-rule-color
slug: Web/CSS/column-rule-color
l10n:
  sourceCommit: 5f13cbe7517ce96deeb521d4c8e6923266a22913
---

{{CSSRef}}

Die **`column-rule-color`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Farbe der Linie fest, die zwischen Spalten in einem Multi-Spalten-Layout gezeichnet wird.

{{EmbedInteractiveExample("pages/css/column-rule-color.html")}}

## Syntax

```css
/* <color> values */
column-rule-color: red;
column-rule-color: rgb(192 56 78);
column-rule-color: transparent;
column-rule-color: hsl(0 100% 50% / 60%);

/* Global values */
column-rule-color: inherit;
column-rule-color: initial;
column-rule-color: revert;
column-rule-color: revert-layer;
column-rule-color: unset;
```

Die Eigenschaft `column-rule-color` wird als einzelner `<color>` Wert angegeben.

### Werte

- {{cssxref("&lt;color&gt;")}}
  - : Die Farbe der Linie, die die Spalten trennt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Setzen einer blauen Spaltenlinie

#### HTML

```html
<p>
  This is a bunch of text split into three columns. The `column-rule-color`
  property is used to change the color of the line that is drawn between
  columns. Don't you think that's wonderful?
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
- Andere farbbezogene Eigenschaften: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, und {{cssxref("caret-color")}}
