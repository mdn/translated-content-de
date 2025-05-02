---
title: "XMLHttpRequest: loadend event"
short-title: loadend
slug: Web/API/XMLHttpRequest/loadend_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Das **`loadend`**-Ereignis wird ausgelöst, wenn eine Anfrage abgeschlossen ist, egal ob erfolgreich (nach [`load`](/de/docs/Web/API/XMLHttpRequest/load_event)) oder erfolglos (nach [`abort`](/de/docs/Web/API/XMLHttpRequest/abort_event) oder [`error`](/de/docs/Web/API/XMLHttpRequest/error_event)).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("loadend", (event) => { })

onloadend = (event) => { }
```

## Ereignistyp

Ein [`ProgressEvent`](/de/docs/Web/API/ProgressEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ProgressEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften sind die Eigenschaften der übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`lengthComputable`](/de/docs/Web/API/ProgressEvent/lengthComputable) {{ReadOnlyInline}}
  - : Ein boolesches Flag, das angibt, ob die insgesamt zu leistende Arbeit und die bereits geleistete Arbeit des zugrunde liegenden Prozesses berechenbar ist. Mit anderen Worten, es gibt an, ob der Fortschritt messbar ist oder nicht.
- [`loaded`](/de/docs/Web/API/ProgressEvent/loaded) {{ReadOnlyInline}}
  - : Ein 64-Bit-Unsigned-Integer-Wert, der die Menge der bereits vom zugrunde liegenden Prozess geleisteten Arbeit angibt. Der Fortschrittsanteil kann berechnet werden, indem dieser Wert durch `total` geteilt wird. Beim Herunterladen einer Ressource über HTTP zählt dies nur den Hauptteil der HTTP-Nachricht und schließt Header und anderen Overhead aus.
- [`total`](/de/docs/Web/API/ProgressEvent/total) {{ReadOnlyInline}}
  - : Ein 64-Bit-Unsigned-Integer, der die Gesamtmenge der Arbeit angibt, die der zugrunde liegende Prozess dabei ist zu leisten. Beim Herunterladen einer Ressource über HTTP ist dies die `Content-Length` (die Größe des Hauptteils der Nachricht) und schließt die Header und anderen Overhead aus.

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
  runXHR(
    "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json",
  );
});

xhrButtonError.addEventListener("click", () => {
  runXHR("http://i-dont-exist");
});

xhrButtonAbort.addEventListener("click", () => {
  runXHR(
    "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json",
  ).abort();
});
```

#### Ergebnis

{{ EmbedLiveSample('Live_example', '100%', '150px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`loadstart`](/de/docs/Web/API/XMLHttpRequest/loadstart_event), [`load`](/de/docs/Web/API/XMLHttpRequest/load_event), [`progress`](/de/docs/Web/API/XMLHttpRequest/progress_event), [`error`](/de/docs/Web/API/XMLHttpRequest/error_event), [`abort`](/de/docs/Web/API/XMLHttpRequest/abort_event)
- [Fortschrittsüberwachung](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress)
