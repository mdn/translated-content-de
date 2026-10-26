---
title: "HTMLFormElement: reset-Ereignis"
short-title: reset
slug: Web/API/HTMLFormElement/reset_event
l10n:
  sourceCommit: 195b87dbb0e63aab27700b606fc96c4cd7982f64
---

{{APIRef("HTML DOM")}}

Das **`reset`**-Ereignis wird ausgelöst, wenn ein {{HTMLElement("form")}} zurückgesetzt wird.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("reset", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onreset = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Dieses Beispiel verwendet [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um auf das Zurücksetzen des Formulars zu reagieren. Jedes Mal, wenn dies geschieht, wird der aktuelle Wert von [`Event.timeStamp`](/de/docs/Web/API/Event/timeStamp) protokolliert.

### HTML

```html
<form id="form">
  <label>Test checkbox: <input type="checkbox" /></label>
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

- HTML-Element {{HTMLElement("form")}}
