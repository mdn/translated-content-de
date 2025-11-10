---
title: "Element: ariaColSpan-Eigenschaft"
short-title: ariaColSpan
slug: Web/API/Element/ariaColSpan
l10n:
  sourceCommit: 0b5859108411e47d228a4bb9f30a5556ab17f63c
---

{{APIRef("DOM")}}

Die **`ariaColSpan`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle spiegelt den Wert des [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan)-Attributs wider, welches die Anzahl der Spalten definiert, die von einer Zelle oder Gridcell innerhalb einer Tabelle, eines Grids oder Treegrid überspannt werden.

## Wert

Ein String, der eine Ganzzahl enthält.

## Beispiele

In diesem Beispiel wird das `aria-colspan`-Attribut des Elements mit der ID `spanning-heading` auf "2" gesetzt. Mit `ariaColSpan` aktualisieren wir den Wert auf "3".

```html
<table>
  <thead>
    <tr>
      <th>Heading 1</th>
      <th>Heading 2</th>
      <th>Heading 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2" aria-colspan="2" id="spanning-column">Spanning</td>
      <td>One</td>
    </tr>
  </tbody>
</table>
```

```js
let el = document.getElementById("spanning-column");
console.log(el.ariaColSpan);
el.ariaColSpan = "3";
console.log(el.ariaColSpan);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: table role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
