---
title: "XMLHttpRequestEventTarget: load-Ereignis"
short-title: load
slug: Web/API/XMLHttpRequestEventTarget/load_event
l10n:
  sourceCommit: 0cc63ce1d7f43eb98746a908a9aba68ef6a36f7b
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Das `load`-Ereignis wird ausgelöst, wenn eine [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Transaktion erfolgreich abgeschlossen wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("load", (event) => { })

onload = (event) => { }
```

## Ereignistyp

Ein [`ProgressEvent`](/de/docs/Web/API/ProgressEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ProgressEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgelisteten Eigenschaften sind die Eigenschaften der übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`lengthComputable`](/de/docs/Web/API/ProgressEvent/lengthComputable) {{ReadOnlyInline}}
  - : Ein boolesches Kennzeichen, das angibt, ob die gesamte zu leistende Arbeit und die bereits geleistete Arbeit des zugrunde liegenden Prozesses berechenbar sind. Mit anderen Worten, es zeigt an, ob der Fortschritt messbar ist oder nicht.
- [`loaded`](/de/docs/Web/API/ProgressEvent/loaded) {{ReadOnlyInline}}
  - : Ein 64-Bit-Integerwert, der die bereits vom zugrunde liegenden Prozess geleistete Arbeit angibt. Der Anteil der erledigten Arbeit kann berechnet werden, indem der Wert dieser Eigenschaft durch `total` geteilt wird. Beim Herunterladen einer Ressource über HTTP wird nur der Hauptteil der HTTP-Nachricht gezählt, und Header sowie anderer Overhead werden nicht einbezogen.
- [`total`](/de/docs/Web/API/ProgressEvent/total) {{ReadOnlyInline}}
  - : Ein 64-Bit-Integerwert, der die gesamte Menge der Arbeit darstellt, die der zugrunde liegende Prozess zu leisten hat. Beim Herunterladen einer Ressource über HTTP ist dies der `Content-Length` (die Größe des Nachrichtenkörpers) und schließt die Header und anderen Overhead nicht ein.

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
  runXHR("image.jpg");
});

xhrButtonError.addEventListener("click", () => {
  runXHR("https://somewhere.org/i-dont-exist");
});

xhrButtonAbort.addEventListener("click", () => {
  runXHR("image.jpg").abort();
});
```

#### Ergebnis

{{ EmbedLiveSample('Usage with XMLHttpRequest', '100%', '150px') }}

### Verwendung mit XMLHttpRequestUpload

Sie können das `load`-Ereignis verwenden, um das erfolgreiche Beenden eines Uploads zu erkennen. Ein vollständiges Programmbeispiel, das eine Datei hochlädt und einen Fortschrittsbalken anzeigt, finden Sie auf der Hauptseite von [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload).

```js
// When the upload is finished, we hide the progress bar.
xhr.upload.addEventListener("load", (event) => {
  progressBar.classList.remove("visible");
  log.textContent = "Upload finished.";
  abortButton.disabled = true;
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`loadstart`](/de/docs/Web/API/XMLHttpRequestEventTarget/loadstart_event), [`loadend`](/de/docs/Web/API/XMLHttpRequestEventTarget/loadend_event), [`progress`](/de/docs/Web/API/XMLHttpRequestEventTarget/progress_event), [`error`](/de/docs/Web/API/XMLHttpRequestEventTarget/error_event), [`abort`](/de/docs/Web/API/XMLHttpRequestEventTarget/abort_event)
- [Überwachung des Fortschritts](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress)
