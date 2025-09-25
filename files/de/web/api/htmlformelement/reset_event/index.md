---
title: "HTMLFormElement: reset-Event"
short-title: reset
slug: Web/API/HTMLFormElement/reset_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("HTML DOM")}}

Das **`reset`**-Ereignis wird ausgelöst, wenn ein {{HTMLElement("form")}}-Element zurückgesetzt wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("reset", (event) => { })

onreset = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Dieses Beispiel verwendet [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um auf das Zurücksetzen von Formularen zu hören und das aktuelle [`Event.timeStamp`](/de/docs/Web/API/Event/timeStamp) zu protokollieren, wann immer dies geschieht.

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

- HTML {{HTMLElement("form")}}-Element
