---
title: "Element: ariaRowSpan-Eigenschaft"
short-title: ariaRowSpan
slug: Web/API/Element/ariaRowSpan
l10n:
  sourceCommit: 0b5859108411e47d228a4bb9f30a5556ab17f63c
---

{{APIRef("DOM")}}

Die **`ariaRowSpan`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle spiegelt den Wert des [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan)-Attributs wider, welches die Anzahl der von einer Zelle oder Gitterzelle innerhalb einer Tabelle, eines Gitters oder Baumgitters überspannten Zeilen definiert.

## Wert

Ein String, der eine ganze Zahl enthält.

## Beispiele

In diesem Beispiel wird das `aria-rowspan`-Attribut des Elements mit der ID `spanning-heading` auf "3" gesetzt. Mit `ariaRowSpan` aktualisieren wir den Wert auf "2".

```html
<table>
  <thead>
    <tr>
      <th id="spanning-heading" rowspan="3" aria-rowspan="3">
        Spanning heading
      </th>
      <th>Heading</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>One</td>
    </tr>
    <tr>
      <td>Two</td>
    </tr>
  </tbody>
</table>
```

```js
let el = document.getElementById("spanning-heading");
console.log(el.ariaRowSpan);
el.ariaRowSpan = "2";
console.log(el.ariaRowSpan);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: table role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
