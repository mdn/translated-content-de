---
title: border-collapse
slug: Web/CSS/border-collapse
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`border-collapse`**-[CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, ob Zellen innerhalb eines {{htmlElement("table")}} gemeinsame oder separate Rahmen haben.

{{InteractiveExample("CSS Demo: border-collapse")}}

```css interactive-example-choice
border-collapse: collapse;
```

```css interactive-example-choice
border-collapse: separate;
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
  border-color: crimson dodgerblue orange limegreen;
  padding: 0.75rem;
}
```

Wenn Zellen zusammengefasst sind, verhält sich der {{cssxref("border-style")}}-Wert von `inset` wie `ridge`, und `outset` verhält sich wie `groove`.

Wenn Zellen getrennt sind, wird der Abstand zwischen den Zellen durch die {{cssxref("border-spacing")}}-Eigenschaft definiert.

## Syntax

```css
/* Keyword values */
border-collapse: collapse;
border-collapse: separate;

/* Global values */
border-collapse: inherit;
border-collapse: initial;
border-collapse: revert;
border-collapse: revert-layer;
border-collapse: unset;
```

Die `border-collapse`-Eigenschaft wird als ein einzelnes Schlüsselwort angegeben, das aus der untenstehenden Liste gewählt werden kann.

### Werte

- `collapse`
  - : Benachbarte Zellen haben gemeinsame Rahmen (das Rendering-Modell für zusammengefasste Rahmen).
- `separate`
  - : Benachbarte Zellen haben unterschiedliche Rahmen (das Rendering-Modell für getrennte Rahmen).

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine farbenfrohe Tabelle von Browser-Engines

#### HTML

```html
<table class="separate">
  <caption>
    <code>border-collapse: separate</code>
  </caption>
  <tbody>
    <tr>
      <th>Browser</th>
      <th>Layout Engine</th>
    </tr>
    <tr>
      <td class="fx">Firefox</td>
      <td class="gk">Gecko</td>
    </tr>
    <tr>
      <td class="ed">Edge</td>
      <td class="tr">EdgeHTML</td>
    </tr>
    <tr>
      <td class="sa">Safari</td>
      <td class="wk">WebKit</td>
    </tr>
    <tr>
      <td class="ch">Chrome</td>
      <td class="bk">Blink</td>
    </tr>
    <tr>
      <td class="op">Opera</td>
      <td class="bk">Blink</td>
    </tr>
  </tbody>
</table>
<table class="collapse">
  <caption>
    <code>border-collapse: collapse</code>
  </caption>
  <tbody>
    <tr>
      <th>Browser</th>
      <th>Layout Engine</th>
    </tr>
    <tr>
      <td class="fx">Firefox</td>
      <td class="gk">Gecko</td>
    </tr>
    <tr>
      <td class="ed">Edge</td>
      <td class="tr">EdgeHTML</td>
    </tr>
    <tr>
      <td class="sa">Safari</td>
      <td class="wk">WebKit</td>
    </tr>
    <tr>
      <td class="ch">Chrome</td>
      <td class="bk">Blink</td>
    </tr>
    <tr>
      <td class="op">Opera</td>
      <td class="bk">Blink</td>
    </tr>
  </tbody>
</table>
```

#### CSS

```css
.collapse {
  border-collapse: collapse;
}

.separate {
  border-collapse: separate;
}

table {
  display: inline-table;
  margin: 1em;
  border: dashed 5px;
}

table th,
table td {
  border: solid 3px;
}

.fx {
  border-color: orange blue;
}
.gk {
  border-color: black red;
}
.ed {
  border-color: blue gold;
}
.tr {
  border-color: aqua;
}
.sa {
  border-color: silver blue;
}
.wk {
  border-color: gold blue;
}
.ch {
  border-color: red yellow green blue;
}
.bk {
  border-color: navy blue teal aqua;
}
.op {
  border-color: red;
}
```

#### Ergebnis

{{ EmbedLiveSample('A_colorful_table_of_browser_engines', 400, 300) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("border-spacing")}}, {{cssxref("border-style")}}
- Die `border-collapse`-Eigenschaft ändert das Erscheinungsbild des {{htmlelement("table")}}-HTML-Elements.
- [CSS-Tabelle](/de/docs/Web/CSS/CSS_table)-Modul
