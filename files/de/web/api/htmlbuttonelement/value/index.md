---
title: "HTMLButtonElement: value Eigenschaft"
short-title: value
slug: Web/API/HTMLButtonElement/value
l10n:
  sourceCommit: 45eeb37ecd89511a64b756af9469189d7a59b95e
---

{{ APIRef("HTML DOM") }}

Die **`value`**-Eigenschaft des [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Interfaces repräsentiert den Wert des {{htmlelement("button")}}-Elements als Zeichenkette oder die leere Zeichenkette, wenn kein Wert gesetzt ist. Sie spiegelt das [`value`](/de/docs/Web/HTML/Element/button#value)-Attribut des Elements wider.

## Wert

Eine Zeichenkette, die den Wert des {{htmlelement("button")}}-Elements enthält.

## Beispiele

```js
const buttonElement = document.getElementById("givenname");
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
