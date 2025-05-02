---
title: "HTMLFormElement: reset Ereignis"
short-title: reset
slug: Web/API/HTMLFormElement/reset_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das **`reset`** Ereignis wird ausgelöst, wenn ein {{HTMLElement("form")}} zurückgesetzt wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("reset", (event) => { })

onreset = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Dieses Beispiel verwendet [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) um auf Formular-Rücksetzungen zu hören und protokolliert den aktuellen [`Event.timeStamp`](/de/docs/Web/API/Event/timeStamp), wann immer dies geschieht.

### HTML

```html
<form id="form">
  <label>Test field: <input type="text" /></label>
  <br /><br />
  <button type="reset">Reset form</button>
</form>
<p id="log"></p>
```

### JavaScript

```js
function logReset(event) {
  log.textContent = `Form reset! Timestamp: ${event.timeStamp}`;
}

const form = document.getElementById("form");
const log = document.getElementById("log");
form.addEventListener("reset", logReset);
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML {{HTMLElement("form")}} Element
