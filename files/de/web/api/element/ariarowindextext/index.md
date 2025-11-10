---
title: Element.ariaRowIndexText
slug: Web/API/Element/ariaRowIndexText
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

Die **`ariaRowIndexText`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces spiegelt den Wert des [`aria-rowindextext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindextext)-Attributes wider, welches eine für Menschen lesbare Textalternative zu aria-rowindex definiert.

## Wert

Ein String.

## Beispiele

In diesem Beispiel wird das `aria-rowindextext`-Attribut auf dem Element mit der ID `role-heading` auf "Heading row" gesetzt. Mit `ariaRowIndexText` aktualisieren wir den Wert zu "Updated heading row".

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
