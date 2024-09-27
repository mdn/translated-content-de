---
title: "HTMLOutputElement: Wert-Eigenschaft"
short-title: value
slug: Web/API/HTMLOutputElement/value
l10n:
  sourceCommit: 45eeb37ecd89511a64b756af9469189d7a59b95e
---

{{ APIRef("HTML DOM") }}

Die **`value`** Eigenschaft des [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement) Interfaces repräsentiert den Wert des {{htmlelement("output")}}-Elements als String, oder den leeren String, wenn kein Wert gesetzt ist. Sie gibt den Inhalt des Elements zurück oder setzt ihn, ähnlich der [`textContent`](/de/docs/Web/API/Node/textContent) Eigenschaft.

> [!NOTE]
> Wenn die `value` Eigenschaft eines `<output>` Elements gesetzt ist, wechselt das Element in den Wert-Modus und der Standardwert ist nur über die [`HTMLOutputElement.defaultValue`](/de/docs/Web/API/HTMLOutputElement/defaultValue) Eigenschaft zugänglich.

## Wert

Ein String, der den Inhalt des {{htmlelement("output")}} Elements enthält.

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
- [`HTMLOutputElement.defaultValue`](/de/docs/Web/API/HTMLOutputElement/defaultValue)
- [`HTMLOutputElement.labels`](/de/docs/Web/API/HTMLOutputElement/labels)
- [`HTMLOutputElement.htmlFor`](/de/docs/Web/API/HTMLOutputElement/htmlFor)
