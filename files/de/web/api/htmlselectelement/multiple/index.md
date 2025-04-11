---
title: "HTMLSelectElement: multiple-Eigenschaft"
short-title: multiple
slug: Web/API/HTMLSelectElement/multiple
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`multiple`**-Eigenschaft des [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)-Interfaces gibt an, dass der Benutzer mehr als eine Option aus der Liste der Optionen auswählen darf. Sie spiegelt das Attribut [`multiple`](/de/docs/Web/HTML/Reference/Elements/select#multiple) des {{htmlelement("select")}}-Elements wider.

## Wert

Ein Boolean.

## Beispiele

```js
const selectElement = document.getElementById("comment");
console.log(selectElement.multiple);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("select")}}
- [`HTMLSelectElement.selectedOptions`](/de/docs/Web/API/HTMLSelectElement/selectedOptions)
- [`HTMLSelectElement.length`](/de/docs/Web/API/HTMLSelectElement/length)
- [`HTMLSelectElement.selectedIndex`](/de/docs/Web/API/HTMLSelectElement/selectedIndex)
