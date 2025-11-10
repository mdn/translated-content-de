---
title: "Element: ariaRowCount-Eigenschaft"
short-title: ariaRowCount
slug: Web/API/Element/ariaRowCount
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

Die **`ariaRowCount`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle spiegelt den Wert des [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount)-Attributes wider, welches die Gesamtzahl der Zeilen in einer Tabelle, einem Raster oder einem Baumraster definiert.

## Wert

Ein String, der eine Ganzzahl enthält.

## Beispiele

In diesem Beispiel wird das `aria-rowcount`-Attribut auf dem Element mit der ID `semantic-table` auf "100" gesetzt, was die Gesamtzahl der Zeilen in der Tabelle darstellt, anstatt der aktuell sichtbaren Zeilen. Mit `ariaRowCount` aktualisieren wir den Wert auf "101".

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
      <th role="columnheader" aria-sort="none" aria-rowindex="1">ARIA Role</th>
      <th role="columnheader" aria-sort="none" aria-rowindex="1">
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
let el = document.getElementById("semantic-table");
console.log(el.ariaRowCount); // 100
el.ariaRowCount = "101";
console.log(el.ariaRowCount); // 101
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: table-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
