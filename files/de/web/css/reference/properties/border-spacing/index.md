---
title: border-spacing
slug: Web/CSS/Reference/Properties/border-spacing
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

Die **`border-spacing`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Abstand zwischen den Rändern benachbarter Zellen in einem {{htmlelement("table")}} fest. Diese Eigenschaft gilt nur, wenn {{cssxref("border-collapse")}} auf `separate` gesetzt ist.

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

Die `border-spacing`-Eigenschaft kann mit entweder einem oder zwei Werten angegeben werden.

- Wenn **ein** `<length>`-Wert angegeben wird, definiert er sowohl den horizontalen als auch den vertikalen Abstand zwischen den Zellen.
- Wenn **zwei** `<length>`-Werte angegeben werden, definiert der erste Wert den horizontalen Abstand zwischen den Zellen (d.h. den Abstand zwischen Zellen in benachbarten _Spalten_), und der zweite Wert definiert den vertikalen Abstand zwischen den Zellen (d.h. den Abstand zwischen Zellen in benachbarten _Reihen_).

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe des Abstands als fester Wert.

## Beschreibung

Der `border-spacing`-Wert wird auch entlang der Außenkante der Tabelle verwendet, wobei der Abstand zwischen der Tabellenumrandung und den Zellen in der ersten/letzten Spalte oder Zeile die Summe des relevanten (horizontalen oder vertikalen) `border-spacing` und des relevanten (oben, rechts, unten oder links) {{cssxref("padding")}} auf der Tabelle ist.

> [!NOTE]
> Die `border-spacing`-Eigenschaft entspricht dem veralteten `cellspacing`-Attribut des `<table>` Elements, außer dass `border-spacing` einen optionalen zweiten Wert hat, der verwendet werden kann, um unterschiedliche horizontale und vertikale Abstände festzulegen.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Abstände und Auffüllen von Tabellenzellen

In diesem Beispiel wird ein Abstand von `.5em` vertikal und `1em` horizontal zwischen den Zellen einer Tabelle angewendet. Beachten Sie, wie entlang der Außenkanten der Tabelle die `padding`-Werte zu den `border-spacing`-Werten hinzugefügt werden.

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
- Die `border-spacing`-Eigenschaft verändert das Aussehen des {{htmlelement("table")}} HTML-Elements.
- [CSS Tabelle](/de/docs/Web/CSS/Guides/Table) Modul
