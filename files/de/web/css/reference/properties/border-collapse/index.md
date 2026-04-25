---
title: "`border-collapse` CSS property"
short-title: border-collapse
slug: Web/CSS/Reference/Properties/border-collapse
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`border-collapse`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, ob Zellen innerhalb einer {{htmlElement("table")}} gemeinsame oder getrennte Rahmen haben.

Wenn Zellen zusammengeklappt sind, verhält sich der {{cssxref("border-style")}}-Wert von `inset` wie `ridge` und `outset` wie `groove`.

Wenn Zellen getrennt sind, wird der Abstand zwischen den Zellen durch die Eigenschaft {{cssxref("border-spacing")}} definiert.

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
  border-color: crimson dodgerblue orange limegreen;
  padding: 0.75rem;
}
```

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

Die `border-collapse`-Eigenschaft wird als einzelnes Schlüsselwort angegeben, das aus der folgenden Liste ausgewählt werden kann.

### Werte

- `collapse`
  - : Benachbarte Zellen haben gemeinsame Rahmen (das Rendering-Modell für zusammengeklappte Rahmen).
- `separate`
  - : Benachbarte Zellen haben getrennte Rahmen (das Rendering-Modell für getrennte Rahmen).

## Offizielle Definition

{{CSSInfo}}

## Offizielle Syntax

{{csssyntax}}

## Beispiele

### Eine bunte Tabelle von Browser-Engines

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
- Die `border-collapse`-Eigenschaft ändert das Erscheinungsbild des {{htmlelement("table")}} HTML-Elements.
- [CSS-Tabellenmodul](/de/docs/Web/CSS/Guides/Table)
