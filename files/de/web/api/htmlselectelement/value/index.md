---
title: "HTMLSelectElement: Eigenschaft value"
short-title: value
slug: Web/API/HTMLSelectElement/value
l10n:
  sourceCommit: 7f38ec3d1324a031bc25e70b3c103ca78c2cf04d
---

{{ APIRef("HTML DOM") }}

Die **`HTMLSelectElement.value`**-Eigenschaft enthält den Wert des ersten ausgewählten {{htmlelement("option")}}-Elements, das mit diesem {{htmlelement("select")}}-Element verknüpft ist.

Diese Eigenschaft kann auch direkt gesetzt werden, zum Beispiel um basierend auf einer Bedingung einen Standardwert zu setzen.

## Wert

Ein String, der den Wert des ersten ausgewählten {{htmlelement("option")}}-Elements in diesem {{htmlelement("select")}}-Element enthält oder den leeren String, wenn keine Optionen ausgewählt sind.

## Beispiele

### Abrufen des ausgewählten Wertes

```html
<label for="bird-select">Wählen Sie einen Vogel:</label>

<select name="birds" id="bird-select">
  <option value="">--Bitte wählen Sie eine Option--</option>
  <option value="Scarlet ibis">Scarlet ibis</option>
  <option value="Marabou stork">Marabou stork</option>
  <option value="Roseate spoonbill">Roseate spoonbill</option>
</select>

<pre id="log"></pre>
```

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = text;
}

const select = document.querySelector("#bird-select");
select.addEventListener("change", () => {
  log(`Selection: ${select.value}`);
});
```

```css hidden
#log {
  height: 20px;
  padding: 0.5rem;
  border: 1px solid black;
}
```

{{EmbedLiveSample("Retrieving the selected value")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("select")}} HTML-Element, das dieses Interface implementiert.
