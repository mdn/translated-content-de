---
title: "HTMLSelectElement: value-Eigenschaft"
short-title: value
slug: Web/API/HTMLSelectElement/value
l10n:
  sourceCommit: 7f38ec3d1324a031bc25e70b3c103ca78c2cf04d
---

{{ APIRef("HTML DOM") }}

Die **`HTMLSelectElement.value`**-Eigenschaft enthält den Wert des ersten ausgewählten {{htmlelement("option")}}-Elements, das mit diesem {{htmlelement("select")}}-Element verknüpft ist.

Diese Eigenschaft kann auch direkt gesetzt werden, beispielsweise um einen Standardwert basierend auf einer bestimmten Bedingung festzulegen.

## Wert

Ein String, der den Wert des ersten ausgewählten {{htmlelement("option")}}-Elements in diesem {{htmlelement("select")}}-Element enthält, oder der leere String, wenn keine Optionen ausgewählt sind.

## Beispiele

### Den ausgewählten Wert abrufen

```html
<label for="bird-select">Choose a bird:</label>

<select name="birds" id="bird-select">
  <option value="">--Please choose an option--</option>
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

{{EmbedLiveSample("Den ausgewählten Wert abrufen")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("select")}} HTML-Element, welches diese Schnittstelle implementiert.
