---
title: "HTMLButtonElement: value-Eigenschaft"
short-title: value
slug: Web/API/HTMLButtonElement/value
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`value`**-Eigenschaft des [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Interfaces repräsentiert den Wert des {{htmlelement("button")}}-Elements als Zeichenkette oder die leere Zeichenkette, wenn kein Wert gesetzt ist. Sie spiegelt das [`value`](/de/docs/Web/HTML/Reference/Elements/button#value)-Attribut des Elements wider.

## Wert

Eine Zeichenkette, die den Wert des {{htmlelement("button")}}-Elements enthält.

## Beispiele

```js
const buttonElement = document.getElementById("given-name");
console.log(`value: ${buttonElement.value}`);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("button")}}
- [`HTMLButtonElement.type`](/de/docs/Web/API/HTMLButtonElement/type)
- [`HTMLButtonElement.labels`](/de/docs/Web/API/HTMLButtonElement/labels)
