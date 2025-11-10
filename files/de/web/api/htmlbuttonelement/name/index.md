---
title: "HTMLButtonElement: name-Eigenschaft"
short-title: name
slug: Web/API/HTMLButtonElement/name
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ApiRef("HTML DOM")}}

Die **`name`**-Eigenschaft der [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Schnittstelle gibt den Namen des {{HTMLElement("button")}}-Elements oder den leeren String an, wenn das Element keinen Namen hat. Sie spiegelt das [`name`](/de/docs/Web/HTML/Reference/Elements/button#name)-Attribut des Elements wider.

## Wert

Ein String, der den Namen des Elements darstellt.

## Beispiel

```js
const buttonElement = document.querySelector("#myButton");
console.log(`Element's name: ${buttonElement.name}`);
buttonElement.name = "newName";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLButtonElement.value`](/de/docs/Web/API/HTMLButtonElement/value)
- [`HTMLButtonElement.type`](/de/docs/Web/API/HTMLButtonElement/type)
