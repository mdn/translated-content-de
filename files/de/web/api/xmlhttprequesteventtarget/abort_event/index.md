---
title: "XMLHttpRequestEventTarget: abort-Ereignis"
short-title: abort
slug: Web/API/XMLHttpRequestEventTarget/abort_event
l10n:
  sourceCommit: d4f95d5a32920324e2502a556d8bdd9d7f446718
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Das `abort`-Ereignis wird ausgelöst, wenn eine Anfrage abgebrochen wurde, beispielsweise weil das Programm [`XMLHttpRequest.abort()`](/de/docs/Web/API/XMLHttpRequest/abort) aufgerufen hat.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("abort", (event) => { })
```

Alternativ können Sie einen Wert der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onabort = (event) => { }
```

## Ereignistyp

Ein [`ProgressEvent`](/de/docs/Web/API/ProgressEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ProgressEvent")}}

## Beispiele

### Verwendung mit XMLHttpRequest

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
  runXHR("/shared-assets/images/examples/balloon.jpg");
});

xhrButtonError.addEventListener("click", () => {
  runXHR("https://example.com/some-path");
});

xhrButtonAbort.addEventListener("click", () => {
  runXHR("/shared-assets/images/examples/balloon.jpg").abort();
});
```

#### Ergebnis

{{ EmbedLiveSample('Usage with XMLHttpRequest', '100%', '150px') }}

### Verwendung mit XMLHttpRequestUpload

Sie können das `abort`-Ereignis verwenden, um den Upload zu stoppen, bevor er abgeschlossen ist. Ein vollständiges Codebeispiel, das eine Datei hochlädt und einen Fortschrittsbalken anzeigt, finden Sie auf der Hauptseite zu [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload).

```js
// In case of an abort we hide the progress bar
// Note that this event can be listened to on the xhr object too
function errorAction(event) {
  progressBar.classList.remove("visible");
  log.textContent = `Upload failed: ${event.type}`;
}
xhr.upload.addEventListener("abort", errorAction);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`loadstart`](/de/docs/Web/API/XMLHttpRequestEventTarget/loadstart_event), [`load`](/de/docs/Web/API/XMLHttpRequestEventTarget/load_event), [`progress`](/de/docs/Web/API/XMLHttpRequestEventTarget/progress_event), [`error`](/de/docs/Web/API/XMLHttpRequestEventTarget/error_event), [`loadend`](/de/docs/Web/API/XMLHttpRequestEventTarget/loadend_event)
- [Fortschritt überwachen](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress)
