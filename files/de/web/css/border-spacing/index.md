---
title: border-spacing
slug: Web/CSS/border-spacing
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`border-spacing`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Abstand zwischen den Rändern benachbarter Zellen in einem {{htmlelement("table")}} fest. Diese Eigenschaft wird nur angewendet, wenn {{cssxref("border-collapse")}} auf `separate` gesetzt ist.

{{EmbedInteractiveExample("pages/css/border-spacing.html")}}

Der `border-spacing` Wert wird auch entlang des äußeren Randes der Tabelle verwendet, wobei der Abstand zwischen dem Rand der Tabelle und den Zellen in der ersten/letzten Spalte oder Zeile die Summe des entsprechenden (horizontalen oder vertikalen) `border-spacing` und des entsprechenden (oben, rechts, unten oder links) {{cssxref("padding")}} der Tabelle ist.

> [!NOTE]
> Die `border-spacing` Eigenschaft entspricht dem veralteten `cellspacing` Attribut des `<table>` Elements, außer dass `border-spacing` einen optionalen zweiten Wert hat, der verwendet werden kann, um unterschiedliche horizontale und vertikale Abstände festzulegen.

## Syntax

```css
/* <length> */
border-spacing: 2px;

/* horizontal <length> | vertical <length> */
border-spacing: 1cm 2em;

/* Global values */
border-spacing: inherit;
border-spacing: initial;
border-spacing: revert;
border-spacing: revert-layer;
border-spacing: unset;
```

Die `border-spacing` Eigenschaft kann entweder mit einem oder zwei Werten angegeben werden.

- Wenn **ein** `<length>` Wert angegeben wird, definiert er sowohl den horizontalen als auch den vertikalen Abstand zwischen den Zellen.
- Wenn **zwei** `<length>` Werte angegeben werden, definiert der erste Wert den horizontalen Abstand zwischen den Zellen (d.h., den Abstand zwischen Zellen in benachbarten _Spalten_), und der zweite Wert definiert den vertikalen Abstand zwischen den Zellen (d.h., den Abstand zwischen Zellen in benachbarten _Reihen_).

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe des Abstands als fester Wert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Abstand und Polsterung von Tabellenzellen

Dieses Beispiel wendet einen vertikalen Abstand von `.5em` und einen horizontalen Abstand von `1em` zwischen den Zellen einer Tabelle an. Beachten Sie, wie entlang der Außenkanten der Tabelle die `padding` Werte zu ihren `border-spacing` Werten addiert werden.

#### HTML

```html
<table>
  <tr>
    <td>1</td>
    <td>2</td>
    <td>3</td>
  </tr>
  <tr>
    <td>4</td>
    <td>5</td>
    <td>6</td>
  </tr>
  <tr>
    <td>7</td>
    <td>8</td>
    <td>9</td>
  </tr>
</table>
```

#### CSS

```css
table {
  border-spacing: 1em 0.5em;
  padding: 0 2em 1em 0;
  border: 1px solid orange;
}

td {
  width: 1.5em;
  height: 1.5em;
  background: #d2d2d2;
  text-align: center;
  vertical-align: middle;
}
```

#### Ergebnis

{{ EmbedLiveSample('Spacing_and_padding_table_cells', 400, 200) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("border-collapse")}}, {{cssxref("border-style")}}
- Die `border-spacing` Eigenschaft verändert das Erscheinungsbild des {{htmlelement("table")}} HTML-Elements.
- [CSS table](/de/docs/Web/CSS/CSS_table) Modul
