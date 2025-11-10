---
title: "HTMLFormElement: reset-Ereignis"
short-title: reset
slug: Web/API/HTMLFormElement/reset_event
l10n:
  sourceCommit: 6ba4f3b350be482ba22726f31bbcf8ad3c92a9c6
---

{{APIRef("HTML DOM")}}

Das **`reset`**-Ereignis wird ausgelöst, wenn ein {{HTMLElement("form")}} zurückgesetzt wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("reset", (event) => { })

onreset = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Dieses Beispiel verwendet [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um auf Zurücksetzungen des Formulars zu hören und protokolliert den aktuellen [`Event.timeStamp`](/de/docs/Web/API/Event/timeStamp), wann immer dies eintritt.

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
const form = document.getElementById("form");
const log = document.getElementById("log");

function logReset(event) {
  log.textContent = `Form reset! Timestamp: ${event.timeStamp}`;
}

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
