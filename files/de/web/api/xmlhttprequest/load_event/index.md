---
title: "XMLHttpRequest: load-Ereignis"
short-title: load
slug: Web/API/XMLHttpRequest/load_event
l10n:
  sourceCommit: 9c78a44b9321fcd3fbe63d6f5b61ed749c2fa261
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Das `load`-Ereignis wird ausgelöst, wenn eine {{domxref("XMLHttpRequest")}}-Transaktion erfolgreich abgeschlossen wurde.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("load", (event) => {});

onload = (event) => {};
```

## Ereignistyp

Ein {{domxref("ProgressEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("ProgressEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften stehen Eigenschaften von der übergeordneten Schnittstelle, {{domxref("Event")}}, zur Verfügung._

- {{domxref("ProgressEvent.lengthComputable", "lengthComputable")}} {{ReadOnlyInline}}
  - : Ein boolesches Flag, das angibt, ob die gesamte zu erledigende Arbeit und die bereits geleistete Arbeit von dem zugrunde liegenden Prozess berechenbar ist. Mit anderen Worten, es zeigt an, ob der Fortschritt messbar ist oder nicht.
- {{domxref("ProgressEvent.loaded", "loaded")}} {{ReadOnlyInline}}
  - : Ein 64-Bit-Unsigned-Integer-Wert, der die Menge der bereits vom zugrunde liegenden Prozess geleisteten Arbeit angibt. Der Anteil der geleisteten Arbeit kann berechnet werden, indem der Wert dieser Eigenschaft durch `total` geteilt wird. Beim Herunterladen einer Ressource über HTTP zählt dies nur den Hauptteil der HTTP-Nachricht und schließt Header und andere Overheads aus.
- {{domxref("ProgressEvent.total", "total")}} {{ReadOnlyInline}}
  - : Ein 64-Bit-Unsigned-Integer, der die gesamte Menge an Arbeit repräsentiert, die der zugrunde liegende Prozess im Gange hat. Beim Herunterladen einer Ressource über HTTP ist dies die `Content-Length` (die Größe des Hauptteils der Nachricht) und schließt die Header und andere Overheads aus.

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

{{ EmbedLiveSample('Live_example', '100%', '150px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: {{domxref("XMLHttpRequest/loadstart_event", "loadstart")}}, {{domxref("XMLHttpRequest/loadend_event", "loadend")}}, {{domxref("XMLHttpRequest/progress_event", "progress")}}, {{domxref("XMLHttpRequest/error_event", "error")}}, {{domxref("XMLHttpRequest/abort_event", "abort")}}
- [Fortschritt überwachen](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress)
