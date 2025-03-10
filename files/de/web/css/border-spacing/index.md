---
title: border-spacing
slug: Web/CSS/border-spacing
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

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

Der `border-spacing` Wert wird auch entlang des äußeren Randes der Tabelle verwendet, wobei der Abstand zwischen dem Rand der Tabelle und den Zellen in der ersten/letzten Spalte oder Zeile die Summe aus dem relevanten (horizontalen oder vertikalen) `border-spacing` und dem relevanten (oben, rechts, unten oder links) {{cssxref("padding")}} an der Tabelle ist.

> [!NOTE]
> Die `border-spacing` Eigenschaft entspricht dem veralteten `cellspacing` Attribut des `<table>` Elements, mit der Ausnahme, dass `border-spacing` einen optionalen zweiten Wert hat, der verwendet werden kann, um unterschiedliche horizontale und vertikale Abstände festzulegen.

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

- Wenn **ein** `<length>` Wert angegeben wird, definiert er sowohl die horizontalen als auch die vertikalen Abstände zwischen den Zellen.
- Wenn **zwei** `<length>` Werte angegeben werden, definiert der erste Wert den horizontalen Abstand zwischen den Zellen (d. h. den Abstand zwischen Zellen in benachbarten _Spalten_), und der zweite Wert definiert den vertikalen Abstand zwischen den Zellen (d. h. den Abstand zwischen Zellen in benachbarten _Zeilen_).

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe des Abstands als fester Wert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Abstände und Auffüllung von Tabellenzellen

Dieses Beispiel wendet einen Abstand von `.5em` vertikal und `1em` horizontal zwischen den Zellen einer Tabelle an. Beachten Sie, wie an den Außenkanten die `padding`-Werte der Tabelle zu den `border-spacing` Werten hinzugefügt werden.

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
- Die `border-spacing` Eigenschaft verändert das Erscheinungsbild des {{htmlelement("table")}} HTML Elements.
- [CSS table](/de/docs/Web/CSS/CSS_table) Modul
