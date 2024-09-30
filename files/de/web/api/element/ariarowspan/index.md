---
title: "Element: ariaRowSpan-Eigenschaft"
short-title: ariaRowSpan
slug: Web/API/Element/ariaRowSpan
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("DOM")}}

Die **`ariaRowSpan`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces spiegelt den Wert des [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan)-Attributs wider, welches die Anzahl der von einer Zelle oder Gitterzelle in einer Tabelle, einem Raster oder einem Baumgitter überspannten Zeilen definiert.

## Wert

Ein String, der eine ganze Zahl enthält.

## Beispiele

In diesem Beispiel wird das `aria-rowspan`-Attribut des Elements mit der ID `spanning-heading` auf "3" gesetzt. Mithilfe von `ariaRowSpan` aktualisieren wir den Wert auf "2".

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

- [ARIA: Tabellenrolle](/de/docs/Web/Accessibility/ARIA/Roles/table_role)
