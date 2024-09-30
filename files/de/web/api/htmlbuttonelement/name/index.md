---
title: "HTMLButtonElement: name Eigenschaft"
short-title: name
slug: Web/API/HTMLButtonElement/name
l10n:
  sourceCommit: d064784c78ec30c87ec3c3d9681b147999fd782f
---

{{ApiRef("HTML DOM")}}

Die **`name`** Eigenschaft des [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) Interfaces gibt den Namen des {{HTMLElement("button")}} Elements an oder den leeren String, falls das Element keinen Namen hat. Sie spiegelt das [`name`](/de/docs/Web/HTML/Element/button#name) Attribut des Elements wider.

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
