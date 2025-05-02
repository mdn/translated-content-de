---
title: "XMLHttpRequest: loadstart-Event"
short-title: loadstart
slug: Web/API/XMLHttpRequest/loadstart_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Das **`loadstart`**-Ereignis wird ausgelöst, wenn eine Anfrage begonnen hat, Daten zu laden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("loadstart", (event) => { })

onloadstart = (event) => { }
```

## Ereignistyp

Ein [`ProgressEvent`](/de/docs/Web/API/ProgressEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ProgressEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften von der Elternschnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`lengthComputable`](/de/docs/Web/API/ProgressEvent/lengthComputable) {{ReadOnlyInline}}
  - : Ein boolesches Flag, das anzeigt, ob die gesamte Arbeit, die zu erledigen ist, und die bereits erledigte Arbeit durch den zugrunde liegenden Prozess berechenbar sind. Mit anderen Worten, es wird angezeigt, ob der Fortschritt messbar ist oder nicht.
- [`loaded`](/de/docs/Web/API/ProgressEvent/loaded) {{ReadOnlyInline}}
  - : Ein 64-Bit-ganzzahliger Wert ohne Vorzeichen, der die bereits vom zugrunde liegenden Prozess geleistete Arbeit angibt. Der geleistete Arbeitsanteil kann berechnet werden, indem der Wert dieser Eigenschaft durch `total` geteilt wird. Beim Herunterladen einer Ressource über HTTP zählt dies nur den Körper der HTTP-Nachricht und schließt Header und anderen Overhead aus.
- [`total`](/de/docs/Web/API/ProgressEvent/total) {{ReadOnlyInline}}
  - : Ein 64-Bit-ganzzahliger Wert ohne Vorzeichen, der die gesamte Arbeit repräsentiert, die der zugrunde liegende Prozess gerade in der Ausführung hat. Beim Herunterladen einer Ressource über HTTP ist dies die `Content-Length` (die Größe des Nachrichtentexts) und schließt die Header und anderen Overhead aus.

## Beispiele

### Live-Beispiel

#### HTML

```html
<div class="controls">
  <input
    class="xhr success"
    type="button"
    name="xhr"
    value="Click to start XHR (success)" />
  <input
    class="xhr error"
    type="button"
    name="xhr"
    value="Click to start XHR (error)" />
  <input
    class="xhr abort"
    type="button"
    name="xhr"
    value="Click to start XHR (abort)" />
</div>

<textarea readonly class="event-log"></textarea>
```

```css hidden
.event-log {
  width: 25rem;
  height: 4rem;
  border: 1px solid black;
  margin: 0.5rem;
  padding: 0.2rem;
}

input {
  width: 11rem;
  margin: 0.5rem;
}
```

#### JavaScript

```js
const xhrButtonSuccess = document.querySelector(".xhr.success");
const xhrButtonError = document.querySelector(".xhr.error");
const xhrButtonAbort = document.querySelector(".xhr.abort");
const log = document.querySelector(".event-log");

function handleEvent(e) {
  log.textContent = `${log.textContent}${e.type}: ${e.loaded} bytes transferred\n`;
}

function addListeners(xhr) {
  xhr.addEventListener("loadstart", handleEvent);
  xhr.addEventListener("load", handleEvent);
  xhr.addEventListener("loadend", handleEvent);
  xhr.addEventListener("progress", handleEvent);
  xhr.addEventListener("error", handleEvent);
  xhr.addEventListener("abort", handleEvent);
}

function runXHR(url) {
  log.textContent = "";

  const xhr = new XMLHttpRequest();
  addListeners(xhr);
  xhr.open("GET", url);
  xhr.send();
  return xhr;
}

xhrButtonSuccess.addEventListener("click", () => {
  runXHR("example-image.jpg");
});

xhrButtonError.addEventListener("click", () => {
  runXHR("https://example.com/notfound.jpg");
});

xhrButtonAbort.addEventListener("click", () => {
  runXHR("example-image.jpg").abort();
});
```

#### Ergebnis

{{ EmbedLiveSample('Live_example', '100%', '150px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`loadend`](/de/docs/Web/API/XMLHttpRequest/loadend_event), [`load`](/de/docs/Web/API/XMLHttpRequest/load_event), [`progress`](/de/docs/Web/API/XMLHttpRequest/progress_event), [`error`](/de/docs/Web/API/XMLHttpRequest/error_event), [`abort`](/de/docs/Web/API/XMLHttpRequest/abort_event)
- [Überwachung des Fortschritts](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress)
