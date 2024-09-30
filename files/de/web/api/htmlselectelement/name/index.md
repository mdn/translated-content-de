---
title: "HTMLSelectElement: name-Eigenschaft"
short-title: name
slug: Web/API/HTMLSelectElement/name
l10n:
  sourceCommit: d064784c78ec30c87ec3c3d9681b147999fd782f
---

{{ApiRef("HTML DOM")}}

Die **`name`**-Eigenschaft der [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)-Schnittstelle gibt den Namen des {{HTMLElement("select")}}-Elements an. Es spiegelt das [`name`](/de/docs/Web/HTML/Element/select#name)-Attribut des Elements wider.

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
