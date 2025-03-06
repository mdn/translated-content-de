---
title: "Element: ariaRowSpan-Eigenschaft"
short-title: ariaRowSpan
slug: Web/API/Element/ariaRowSpan
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

Die **`ariaRowSpan`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces spiegelt den Wert des [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan)-Attributs wider. Dieses Attribut definiert die Anzahl der Zeilen, die von einer Zelle oder Gitterzelle innerhalb einer Tabelle, eines Gitters oder Baumgitters überspannt werden.

## Wert

Ein String, der eine Ganzzahl enthält.

## Beispiele

In diesem Beispiel wird das `aria-rowspan`-Attribut des Elements mit der ID `spanning-heading` auf "3" gesetzt. Mit `ariaRowSpan` aktualisieren wir den Wert auf "2".

```html
<table>
  <tr>
    <th id="spanning-heading" rowspan="3" aria-rowspan="3">Spanning heading</th>
    <th>Heading</th>
  </tr>
  <tr>
    <td>One</td>
  </tr>
  <tr>
    <td>Two</td>
  </tr>
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

- [ARIA: Tabelle Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
