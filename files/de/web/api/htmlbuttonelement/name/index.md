---
title: "HTMLButtonElement: name-Eigenschaft"
short-title: name
slug: Web/API/HTMLButtonElement/name
l10n:
  sourceCommit: d064784c78ec30c87ec3c3d9681b147999fd782f
---

{{ApiRef("HTML DOM")}}

Die **`name`**-Eigenschaft des {{domxref("HTMLButtonElement")}}-Interfaces gibt den Namen des {{HTMLElement("button")}}-Elements an oder die leere Zeichenfolge, wenn das Element keinen Namen hat. Sie spiegelt das [`name`](/de/docs/Web/HTML/Element/button#name)-Attribut des Elements wider.

## Wert

Eine Zeichenkette, die den Namen des Elements repräsentiert.

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

- {{domxref("HTMLButtonElement.value")}}
- {{domxref("HTMLButtonElement.type")}}
