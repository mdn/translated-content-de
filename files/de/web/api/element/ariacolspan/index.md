---
title: "Element: ariaColSpan-Eigenschaft"
short-title: ariaColSpan
slug: Web/API/Element/ariaColSpan
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("DOM")}}

Die **`ariaColSpan`**-Eigenschaft der {{domxref("Element")}}-Schnittstelle spiegelt den Wert des [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colspan)-Attributs wider, welches die Anzahl der Spalten definiert, die von einer Zelle oder Gitterzelle in einer Tabelle, einem Raster oder Baumraster überspannt werden.

## Wert

Ein String, der eine ganze Zahl enthält.

## Beispiele

In diesem Beispiel wird das `aria-colspan`-Attribut des Elements mit der ID `spanning-heading` auf "2" gesetzt. Mithilfe von `ariaColSpan` wird der Wert auf "3" aktualisiert.

```html
<table>
  <tr>
    <th>Heading 1</th>
    <th>Heading 2</th>
    <th>Heading 3</th>
  </tr>
  <tr>
    <td colspan="2" aria-colspan="2" id="spanning-column">Spanning</td>
    <td>One</td>
  </tr>
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

- [ARIA: table role](/de/docs/Web/Accessibility/ARIA/Roles/table_role)
