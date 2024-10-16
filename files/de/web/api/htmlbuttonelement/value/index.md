---
title: "HTMLButtonElement: value-Eigenschaft"
short-title: value
slug: Web/API/HTMLButtonElement/value
l10n:
  sourceCommit: d47348199a379f68bea876a403eb510628ec4ccb
---

{{ APIRef("HTML DOM") }}

Die **`value`**-Eigenschaft des [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Interfaces repräsentiert den Wert des {{htmlelement("button")}}-Elements als Zeichenkette oder als leere Zeichenkette, wenn kein Wert gesetzt ist. Es spiegelt das [`value`](/de/docs/Web/HTML/Element/button#value)-Attribut des Elements wider.

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
