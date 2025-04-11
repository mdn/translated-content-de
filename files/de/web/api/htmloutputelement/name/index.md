---
title: "HTMLOutputElement: name-Eigenschaft"
short-title: name
slug: Web/API/HTMLOutputElement/name
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ApiRef("HTML DOM")}}

Die **`name`**-Eigenschaft der [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement)-Schnittstelle gibt den Namen des {{HTMLElement("output")}}-Elements an. Sie spiegelt das [`name`](/de/docs/Web/HTML/Reference/Elements/output#name)-Attribut des Elements wider.

## Wert

Ein String, der den Namen des Elements repräsentiert.

## Beispiel

```js
const outputElement = document.querySelector("#log");
console.log(`Element's name: ${outputElement.name}`);
outputElement.name = "sum"; // sets or updates the element's name
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLOutputElement.defaultValue`](/de/docs/Web/API/HTMLOutputElement/defaultValue)
- [`HTMLOutputElement.htmlFor`](/de/docs/Web/API/HTMLOutputElement/htmlFor)
- [`HTMLOutputElement.labels`](/de/docs/Web/API/HTMLOutputElement/labels)
