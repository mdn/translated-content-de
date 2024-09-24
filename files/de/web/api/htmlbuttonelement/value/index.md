---
title: "HTMLButtonElement: Eigenschaft value"
short-title: value
slug: Web/API/HTMLButtonElement/value
l10n:
  sourceCommit: 45eeb37ecd89511a64b756af9469189d7a59b95e
---

{{ APIRef("HTML DOM") }}

Die **`value`**-Eigenschaft der {{DOMxRef("HTMLButtonElement")}}-Schnittstelle repräsentiert den Wert des {{htmlelement("button")}}-Elements als Zeichenfolge oder die leere Zeichenfolge, wenn kein Wert gesetzt ist. Sie spiegelt das [`value`](/de/docs/Web/HTML/Element/button#value)-Attribut des Elements wider.

## Wert

Eine Zeichenfolge, die den Wert des {{htmlelement("button")}}-Elements enthält.

## Beispiele

```js
const buttonElement = document.getElementById("givenname");
console.log(`value: ${buttonElement.value}`);
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{HTMLElement("button")}}
- {{DOMXref("HTMLButtonElement.type")}}
- {{DOMXref("HTMLButtonElement.labels")}}
