---
title: border-collapse
slug: Web/CSS/border-collapse
l10n:
  sourceCommit: b319e190a9f9df504e84f8b49d06008f6d60b396
---

{{CSSRef}}

Die **`border-collapse`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob Zellen innerhalb eines {{htmlElement("table")}} gemeinsame oder separate Ränder haben.

{{EmbedInteractiveExample("pages/css/border-collapse.html")}}

Wenn Zellen zusammengeklappt sind, verhält sich der {{cssxref("border-style")}} Wert `inset` wie `ridge` und `outset` wie `groove`.

Sind Zellen getrennt, wird der Abstand zwischen den Zellen durch die Eigenschaft {{cssxref("border-spacing")}} definiert.

## Syntax

```css
/* Schlüsselwortwerte */
border-collapse: collapse;
border-collapse: separate;

/* Globale Werte */
border-collapse: inherit;
border-collapse: initial;
border-collapse: revert;
border-collapse: revert-layer;
border-collapse: unset;
```

Die Eigenschaft `border-collapse` wird als einzelnes Schlüsselwort angegeben, das aus der unten aufgeführten Liste ausgewählt werden kann.

### Werte

- `collapse`
  - : Benachbarte Zellen haben gemeinsame Ränder (das Darstellungsmodell mit zusammengeklappten Rändern).
- `separate`
  - : Benachbarte Zellen haben unterschiedliche Ränder (das Darstellungsmodell mit getrennten Rändern).

## Formale Definition

{{CSSInfo}}

## Formale Syntax

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
      <td class="wk">Webkit</td>
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
      <td class="wk">Webkit</td>
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
- Die `border-collapse` Eigenschaft verändert das Erscheinungsbild des {{htmlelement("table")}} HTML-Elements.
- [CSS-Tabelle](/de/docs/Web/CSS/CSS_table) Modul
