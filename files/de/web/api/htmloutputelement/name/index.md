---
title: "HTMLOutputElement: name-Eigenschaft"
short-title: name
slug: Web/API/HTMLOutputElement/name
l10n:
  sourceCommit: d064784c78ec30c87ec3c3d9681b147999fd782f
---

{{ApiRef("HTML DOM")}}

Die **`name`**-Eigenschaft der {{domxref("HTMLOutputElement")}}-Schnittstelle gibt den Namen des {{HTMLElement("output")}}-Elements an. Sie spiegelt das [`name`](/de/docs/Web/HTML/Element/output#name)-Attribut des Elements wider.

## Wert

Ein String, der den Namen des Elements darstellt.

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

- {{domxref("HTMLOutputElement.defaultValue")}}
- {{domxref("HTMLOutputElement.htmlFor")}}
- {{domxref("HTMLOutputElement.labels")}}
