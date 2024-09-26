---
title: "Element: ariaSort-Eigenschaft"
short-title: ariaSort
slug: Web/API/Element/ariaSort
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("DOM")}}

Die **`ariaSort`**-Eigenschaft des {{domxref("Element")}}-Interfaces spiegelt den Wert des [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-sort)-Attributs wider, welches angibt, ob Elemente in einer Tabelle oder einem Raster in aufsteigender oder absteigender Reihenfolge sortiert sind.

## Wert

Ein String mit einem der folgenden Werte:

- `"ascending"`
  - : Die Elemente sind in aufsteigender Reihenfolge nach dieser Spalte sortiert.
- `"descending"`
  - : Die Elemente sind in absteigender Reihenfolge nach dieser Spalte sortiert.
- `"none"`
  - : Es ist keine definierte Sortierung auf die Spalte angewendet.
- `"other"`
  - : Ein anderes Sortierverfahren als aufsteigend oder absteigend wurde angewendet.

## Beispiele

In diesem Beispiel ist das `aria-sort`-Attribut des Elements mit der ID `role-heading` auf "none" gesetzt. Mit `ariaSort` aktualisieren wir den Wert auf "ascending".

```html
<table
  id="semantic-table"
  role="table"
  aria-label="Semantic Elements"
  aria-describedby="semantic_elements_table_desc"
  aria-rowcount="100">
  <caption id="semantic_elements_table_desc">
    Semantic Elements to use instead of ARIA's roles
  </caption>
  <thead role="rowgroup">
    <tr role="row">
      <th
        role="columnheader"
        id="role-heading"
        aria-sort="none"
        aria-rowindex="1"
        aria-colindex="1">
        ARIA Role
      </th>
      <th
        role="columnheader"
        id="element-heading"
        aria-sort="none"
        aria-rowindex="1">
        Semantic Element
      </th>
    </tr>
  </thead>
  <tbody role="rowgroup">
    <tr role="row">
      <td role="cell" aria-rowindex="11">header</td>
      <td role="cell" aria-rowindex="11">h1</td>
    </tr>
    <tr role="row">
      <td role="cell" aria-rowindex="16">header</td>
      <td role="cell" aria-rowindex="16">h6</td>
    </tr>
    <tr role="row">
      <td role="cell" aria-rowindex="18">rowgroup</td>
      <td role="cell" aria-rowindex="18">thead</td>
    </tr>
    <tr role="row">
      <td role="cell" aria-rowindex="24">term</td>
      <td role="cell" aria-rowindex="24">dt</td>
    </tr>
  </tbody>
</table>
```

```js
let el = document.getElementById("role-heading");
console.log(el.ariaSort); // none
el.ariaSort = "ascending";
console.log(el.ariaSort); // ascending
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: Tischrolle](/de/docs/Web/Accessibility/ARIA/Roles/table_role)