---
title: "Element: ariaRowIndex-Eigenschaft"
short-title: ariaRowIndex
slug: Web/API/Element/ariaRowIndex
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("DOM")}}

Die **`ariaRowIndex`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces spiegelt den Wert des [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex)-Attributs wider, das den Zeilenindex oder die Position eines Elements in Bezug auf die Gesamtanzahl der Zeilen innerhalb einer Tabelle, eines Gitters oder eines Baumgitters definiert.

## Wert

Ein String, der eine ganze Zahl enthält.

## Beispiele

In diesem Beispiel wird das `aria-rowindex`-Attribut des Elements mit der ID `role-heading` auf "1" gesetzt. Mithilfe von `ariaRowIndex` aktualisieren wir den Wert auf "2".

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
        aria-rowindex="1">
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
console.log(el.ariaRowIndex); // 1
el.ariaRowIndex = "2";
console.log(el.ariaRowIndex); // 2
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: table role](/de/docs/Web/Accessibility/ARIA/Roles/table_role)
