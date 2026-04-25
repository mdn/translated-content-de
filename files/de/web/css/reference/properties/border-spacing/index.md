---
title: "`border-spacing` CSS property"
short-title: border-spacing
slug: Web/CSS/Reference/Properties/border-spacing
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`border-spacing`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt den Abstand zwischen den Rändern benachbarter Zellen in einem {{htmlelement("table")}} fest. Diese Eigenschaft gilt nur, wenn {{cssxref("border-collapse")}} auf `separate` gesetzt ist.

{{InteractiveExample("CSS Demo: border-spacing")}}

```css interactive-example-choice
border-spacing: 0;
```

```css interactive-example-choice
border-spacing: 5px;
```

```css interactive-example-choice
border-spacing: 5px 1rem;
```

```html interactive-example
<section class="default-example" id="default-example">
  <table class="transition-all" id="example-element">
    <tbody>
      <tr>
        <td>Cell 1.1</td>
        <td>Cell 1.2</td>
      </tr>
      <tr>
        <td>Cell 2.1</td>
        <td>Cell 2.2</td>
      </tr>
      <tr>
        <td>Cell 3.1</td>
        <td>Cell 3.2</td>
      </tr>
    </tbody>
  </table>
</section>
```

```css interactive-example
table {
  width: 15rem;
  table-layout: fixed;
}

td {
  border: 5px solid;
  border-color: crimson dodgerblue;
  padding: 0.75rem;
}
```

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

Die `border-spacing`-Eigenschaft kann entweder mit einem oder zwei Werten angegeben werden.

- Wenn **ein** `<length>`-Wert angegeben wird, definiert er sowohl den horizontalen als auch den vertikalen Abstand zwischen den Zellen.
- Wenn **zwei** `<length>`-Werte angegeben werden, definiert der erste Wert den horizontalen Abstand zwischen den Zellen (d.h. den Raum zwischen den Zellen in benachbarten _Spalten_), und der zweite Wert definiert den vertikalen Abstand zwischen den Zellen (d.h. den Raum zwischen den Zellen in benachbarten _Zeilen_).

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe des Abstands als fester Wert.

## Beschreibung

Der `border-spacing`-Wert wird auch an der Außenseite der Tabelle verwendet, wobei der Abstand zwischen dem Rand der Tabelle und den Zellen in der ersten/letzten Spalte oder Zeile die Summe des entsprechenden (horizontalen oder vertikalen) `border-spacing` und des entsprechenden (oberen, rechten, unteren oder linken) {{cssxref("padding")}} der Tabelle ist.

> [!NOTE]
> Die `border-spacing`-Eigenschaft entspricht dem veralteten `cellspacing`-Attribut des `<table>`-Elements, mit dem Unterschied, dass `border-spacing` einen optionalen zweiten Wert hat, der zum Festlegen unterschiedlicher horizontaler und vertikaler Abstände verwendet werden kann.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Abstand und Auffüllung von Tabellenzellen

Dieses Beispiel wendet einen vertikalen Abstand von `.5em` und einen horizontalen Abstand von `1em` zwischen den Zellen einer Tabelle an. Beachten Sie, wie an den Außenkanten die `padding`-Werte der Tabelle zu ihren `border-spacing`-Werten hinzugefügt werden.

#### HTML

```html
<table>
  <tbody>
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
  </tbody>
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
- Die `border-spacing`-Eigenschaft verändert das Erscheinungsbild des {{htmlelement("table")}} HTML-Elements.
- [CSS-Tabellenmodul](/de/docs/Web/CSS/Guides/Table)
