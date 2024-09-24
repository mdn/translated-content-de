---
title: "HTMLOutputElement: Wert-Eigenschaft"
short-title: Wert
slug: Web/API/HTMLOutputElement/value
l10n:
  sourceCommit: 45eeb37ecd89511a64b756af9469189d7a59b95e
---

{{ APIRef("HTML DOM") }}

Die **`value`**-Eigenschaft des {{DOMxRef("HTMLOutputElement")}}-Interfaces repräsentiert den Wert des {{htmlelement("output")}}-Elements als Zeichenkette oder die leere Zeichenkette, wenn kein Wert gesetzt ist. Sie gibt den Inhalt des Elements zurück oder setzt ihn, ähnlich der {{domxref("Node.textContent","textContent")}}-Eigenschaft.

> [!NOTE]
> Wenn die `value`-Eigenschaft eines `<output>`-Elements gesetzt wird, wechselt das Element in den Wertmodus, und der Standardwert ist nur über die {{DOMXref("HTMLOutputElement.defaultValue")}}-Eigenschaft zugänglich.

## Wert

Eine Zeichenkette, die den Inhalt des {{htmlelement("output")}}-Elements enthält.

## Beispiele

```js
const outputElement = document.getElementById("log");
console.log(`value: ${outputElement.value}`);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("output")}}
- {{DOMXref("HTMLOutputElement.defaultValue")}}
- {{DOMXref("HTMLOutputElement.labels")}}
- {{DOMXref("HTMLOutputElement.htmlFor")}}
