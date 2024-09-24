---
title: "HTMLOutputElement: defaultValue-Eigenschaft"
short-title: defaultValue
slug: Web/API/HTMLOutputElement/defaultValue
l10n:
  sourceCommit: 4c8b7533087b60fb75e98de28ac6bccc4139e735
---

{{ APIRef("HTML DOM") }}

Die **`defaultValue`**-Eigenschaft des [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement)-Interfaces repräsentiert den Standard-Textinhalt dieses {{htmlelement("output")}}-Elements. Das Abrufen und Setzen dieses Werts entspricht dem Abrufen und Setzen von [`textContent`](/de/docs/Web/API/Node/textContent) auf dem {{htmlelement("output")}}.

## Wert

Ein String.

## Beispiele

Im folgenden Beispiel gibt die `defaultValue`-Eigenschaft weiterhin den ursprünglich im HTML geschriebenen Wert zurück. Änderungen an [`value`](/de/docs/Web/API/HTMLOutputElement/value) haben keinen Einfluss auf die `defaultValue`-Eigenschaft oder ihr `textContent` im DOM.

```html
<fieldset>
  <legend>Add two numbers</legend>
  <p>
    <input type="number" id="operand1" value="5" aria-label="First number" />
    +
    <input type="number" id="operand2" value="7" aria-label="Second number" />
    =
    <output
      id="result"
      for="operand1 operand2"
      aria-live="polite"
      aria-controls="output"
      >12</output
    >
  </p>
</fieldset>
<pre id="logs" aria-live="polite"></pre>
```

```js
const logs = document.getElementById("logs");
const operand1 = document.getElementById("operand1");
const operand2 = document.getElementById("operand2");
const result = document.getElementById("result");

function updateResult() {
  result.value = operand1.valueAsNumber + operand2.valueAsNumber;
  logs.innerText = `result.defaultValue: ${result.defaultValue}\nresult.value: ${result.value}`;
}

operand1.addEventListener("input", updateResult);
operand2.addEventListener("input", updateResult);
updateResult();
```

{{EmbedLiveSample("examples", "", "150")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("output")}}
- [`HTMLOutputElement.value`](/de/docs/Web/API/HTMLOutputElement/value)
