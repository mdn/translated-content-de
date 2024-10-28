---
title: "FileReader: progress Ereignis"
short-title: progress
slug: Web/API/FileReader/progress_event
l10n:
  sourceCommit: 87d974f5a37297d2b95ded0cd7a4301dacb3d3d8
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Das **`progress`** Ereignis des [`FileReader`](/de/docs/Web/API/FileReader)-Interfaces wird regelmäßig ausgelöst, während der `FileReader` Daten liest.

Dieses Ereignis kann nicht abgebrochen werden und löst keine weitere Ereignisausbreitung aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("progress", (event) => {});

onprogress = (event) => {};
```

## Ereignistyp

Ein [`ProgressEvent`](/de/docs/Web/API/ProgressEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ProgressEvent")}}

## Ereigniseigenschaften

_Erbt auch Eigenschaften von seinem Elternteil [`Event`](/de/docs/Web/API/Event)_.

- [`ProgressEvent.lengthComputable`](/de/docs/Web/API/ProgressEvent/lengthComputable) {{ReadOnlyInline}}
  - : Eine boolesche Flagge, die anzeigt, ob die Gesamtarbeit, die zu erledigen ist, und der bereits geleistete Arbeitsanteil durch den zugrunde liegenden Prozess kalkulierbar sind. Mit anderen Worten zeigt es an, ob der Fortschritt messbar ist oder nicht.
- [`ProgressEvent.loaded`](/de/docs/Web/API/ProgressEvent/loaded) {{ReadOnlyInline}}
  - : Ein 64-Bit unsigned integer Wert, der die bereits vom zugrunde liegenden Prozess geleistete Arbeit anzeigt. Das Verhältnis der geleisteten Arbeit kann berechnet werden, indem der Wert dieser Eigenschaft durch `total` geteilt wird. Beim Herunterladen einer Ressource über HTTP zählt dies nur den Inhalt der HTTP-Nachricht und schließt Header und anderen Overhead nicht ein.
- [`ProgressEvent.total`](/de/docs/Web/API/ProgressEvent/total) {{ReadOnlyInline}}
  - : Ein 64-Bit unsigned integer, der die Gesamtmenge an Arbeit darstellt, die der zugrunde liegende Prozess gerade ausführt. Beim Herunterladen einer Ressource über HTTP ist dies die `Content-Length` (die Größe des Nachrichtentextes), und schließt die Header und anderen Overhead nicht ein.

## Beispiele

### Live-Beispiel

#### HTML

```html
<div class="example">
  <div class="file-select">
    <label for="avatar">Choose a profile picture:</label>
    <input
      type="file"
      id="avatar"
      name="avatar"
      accept="image/png, image/jpeg" />
  </div>

  <img src="" class="preview" height="200" alt="Image preview" />

  <div class="event-log">
    <label for="eventLog">Event log:</label>
    <textarea readonly class="event-log-contents" id="eventLog"></textarea>
  </div>
</div>
```

```css hidden
img.preview {
  margin: 1rem 0;
}

.event-log-contents {
  width: 18rem;
  height: 5rem;
  border: 1px solid black;
  margin: 0.2rem;
  padding: 0.2rem;
  resize: none;
}

.example {
  display: grid;
  grid-template-areas:
    "select  log"
    "preview log";
}

.file-select {
  grid-area: select;
}

.preview {
  grid-area: preview;
}

.event-log {
  grid-area: log;
}

.event-log > label {
  display: block;
}
```

#### JavaScript

```js
const fileInput = document.querySelector('input[type="file"]');
const preview = document.querySelector("img.preview");
const eventLog = document.querySelector(".event-log-contents");
const reader = new FileReader();

function handleEvent(event) {
  eventLog.textContent += `${event.type}: ${event.loaded} bytes transferred\n`;

  if (event.type === "load") {
    preview.src = reader.result;
  }
}

function addListeners(reader) {
  reader.addEventListener("loadstart", handleEvent);
  reader.addEventListener("load", handleEvent);
  reader.addEventListener("loadend", handleEvent);
  reader.addEventListener("progress", handleEvent);
  reader.addEventListener("error", handleEvent);
  reader.addEventListener("abort", handleEvent);
}

function handleSelected(e) {
  eventLog.textContent = "";
  const selectedFile = fileInput.files[0];
  if (selectedFile) {
    addListeners(reader);
    reader.readAsDataURL(selectedFile);
  }
}

fileInput.addEventListener("change", handleSelected);
```

#### Ergebnis

{{ EmbedLiveSample('Live_example', '100%', '300px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`loadstart`](/de/docs/Web/API/FileReader/loadstart_event), [`loadend`](/de/docs/Web/API/FileReader/loadend_event), [`load`](/de/docs/Web/API/FileReader/load_event), [`error`](/de/docs/Web/API/FileReader/error_event), [`abort`](/de/docs/Web/API/FileReader/abort_event)
