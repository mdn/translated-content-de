---
title: "HTMLSelectElement: name-Eigenschaft"
short-title: name
slug: Web/API/HTMLSelectElement/name
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ApiRef("HTML DOM")}}

Die **`name`**-Eigenschaft des [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)-Interfaces gibt den Namen des {{HTMLElement("select")}}-Elements an. Sie spiegelt das [`name`](/de/docs/Web/HTML/Reference/Elements/select#name)-Attribut des Elements wider.

## Wert

Ein String, der den Namen des Elements darstellt.

## Beispiel

```js
const selectElement = document.querySelector("#planets");
console.log(`Element's name: ${selectElement.name}`);
selectElement.name = "galaxies"; // sets or updates the element's name
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLSelectElement.value`](/de/docs/Web/API/HTMLSelectElement/value)
- [`HTMLSelectElement.selectedIndex`](/de/docs/Web/API/HTMLSelectElement/selectedIndex)
- [`HTMLSelectElement.options`](/de/docs/Web/API/HTMLSelectElement/options)
