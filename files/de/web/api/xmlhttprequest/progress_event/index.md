---
title: "XMLHttpRequest: Fortschritt Ereignis"
short-title: Fortschritt
slug: Web/API/XMLHttpRequest/progress_event
l10n:
  sourceCommit: 9c78a44b9321fcd3fbe63d6f5b61ed749c2fa261
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Das **`progress`**-Ereignis wird periodisch ausgelöst, wenn eine Anfrage mehr Daten empfängt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("progress", (event) => {});

onprogress = (event) => {};
```

## Ereignistyp

Ein {{domxref("ProgressEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("ProgressEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften der übergeordneten Schnittstelle, {{domxref("Event")}}, verfügbar._

- {{domxref("ProgressEvent.lengthComputable", "lengthComputable")}} {{ReadOnlyInline}}
  - : Ein boolesches Flag, das angibt, ob die gesamte zu leistende Arbeit und die bereits geleistete Arbeit durch den zugrunde liegenden Prozess berechenbar sind. Mit anderen Worten, es zeigt an, ob der Fortschritt messbar ist oder nicht.
- {{domxref("ProgressEvent.loaded", "loaded")}} {{ReadOnlyInline}}
  - : Ein 64-Bit-unsigned Integer-Wert, der die Menge an Arbeit angibt, die bereits durch den zugrunde liegenden Prozess geleistet wurde. Der Anteil der geleisteten Arbeit kann berechnet werden, indem der Wert dieser Eigenschaft durch `total` geteilt wird. Beim Herunterladen einer Ressource über HTTP wird nur der Körper der HTTP-Nachricht gezählt, und es sind keine Header und anderer Overhead enthalten.
- {{domxref("ProgressEvent.total", "total")}} {{ReadOnlyInline}}
  - : Ein 64-Bit-unsigned Integer, der die gesamte Menge der Arbeit darstellt, die der zugrunde liegende Prozess im Begriff ist zu leisten. Beim Herunterladen einer Ressource über HTTP ist dies die `Content-Length` (die Größe des Nachrichtentextes) und schließt keine Header und anderen Overhead ein.

## Beispiele

### Live-Beispiel

#### HTML

```html
<div class="controls">
  <input
    class="xhr success"
    type="button"
    name="xhr"
    value="Klicken Sie, um XHR zu starten (Erfolg)" />
  <input
    class="xhr error"
    type="button"
    name="xhr"
    value="Klicken Sie, um XHR zu starten (Fehler)" />
  <input
    class="xhr abort"
    type="button"
    name="xhr"
    value="Klicken Sie, um XHR zu starten (Abbruch)" />
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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: {{domxref("XMLHttpRequest/loadstart_event", "loadstart")}}, {{domxref("XMLHttpRequest/load_event", "load")}}, {{domxref("XMLHttpRequest/loadend_event", "loadend")}}, {{domxref("XMLHttpRequest/error_event", "error")}}, {{domxref("XMLHttpRequest/abort_event", "abort")}}
- [Überwachen des Fortschritts](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress)
