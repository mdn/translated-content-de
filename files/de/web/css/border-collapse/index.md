---
title: border-collapse
slug: Web/CSS/border-collapse
l10n:
  sourceCommit: b319e190a9f9df504e84f8b49d06008f6d60b396
---

{{CSSRef}}

Die **`border-collapse`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob Zellen in einer {{htmlElement("table")}} gemeinsame oder separate Rahmen haben.

{{EmbedInteractiveExample("pages/css/border-collapse.html")}}

Wenn Zellen zusammengefallen sind, verhält sich der {{cssxref("border-style")}} Wert von `inset` wie `ridge`, und `outset` verhält sich wie `groove`.

Wenn Zellen getrennt sind, wird der Abstand zwischen den Zellen durch die Eigenschaft {{cssxref("border-spacing")}} definiert.

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

Die Eigenschaft `border-collapse` wird als einzelnes Schlüsselwort angegeben, das aus der untenstehenden Liste gewählt werden kann.

### Werte

- `collapse`
  - : Benachbarte Zellen haben gemeinsame Rahmen (das zusammengefallene Rahmen-Tabellenrendering-Modell).
- `separate`
  - : Benachbarte Zellen haben unterschiedliche Rahmen (das getrennte Rahmen-Tabellenrendering-Modell).

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
- Die Eigenschaft `border-collapse` verändert das Erscheinungsbild des {{htmlelement("table")}} HTML-Elements.
- [CSS-Tabelle](/de/docs/Web/CSS/CSS_table) Modul
