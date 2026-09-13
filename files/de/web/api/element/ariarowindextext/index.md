---
title: Element.ariaRowIndexText
slug: Web/API/Element/ariaRowIndexText
l10n:
  sourceCommit: 868de6e278b0e5c635cea5ee4bb06d35fbc3e11b
---

{{APIRef("DOM")}}

Die Eigenschaft **`ariaRowIndexText`** der Schnittstelle [`Element`](/de/docs/Web/API/Element) spiegelt den Wert des Attributs [`aria-rowindextext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindextext) wider, das eine menschenlesbare Textalternative für aria-rowindex definiert.

## Wert

Ein String.

## Beispiele

In diesem Beispiel wird das Attribut `aria-rowindextext` des Elements mit der ID `role-heading` auf „Heading row“ gesetzt. Mit `ariaRowIndexText` aktualisieren wir den Wert auf „Updated heading row“.

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
        aria-rowindextext="Heading row">
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
console.log(el.ariaRowIndexText); // "Heading row"
el.ariaRowIndexText = "Updated heading row";
console.log(el.ariaRowIndexText); // "Updated heading row"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: table role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
