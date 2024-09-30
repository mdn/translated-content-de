---
title: "HTMLFormElement: reset Ereignis"
short-title: reset
slug: Web/API/HTMLFormElement/reset_event
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef}}

Das **`reset`**-Ereignis wird ausgelöst, wenn ein {{HTMLElement("form")}} zurückgesetzt wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("reset", (event) => {});

onreset = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Dieses Beispiel verwendet [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um auf das Zurücksetzen von Formularen zu hören, und protokolliert den aktuellen [`Event.timeStamp`](/de/docs/Web/API/Event/timeStamp), sobald dies geschieht.

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
