---
title: "FileReader: progress-Ereignis"
short-title: progress
slug: Web/API/FileReader/progress_event
l10n:
  sourceCommit: e43bfd9b4a6c363a4ba7ef6ffa64c09b38fd111b
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Das **`progress`**-Ereignis der {{domxref("FileReader")}}-Schnittstelle wird periodisch ausgelöst, während der `FileReader` Daten liest.

Dieses Ereignis kann nicht abgebrochen werden und propagiert nicht.

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

_Erbt auch Eigenschaften von seinem übergeordneten {{domxref("Event")}}_.

- {{domxref("ProgressEvent.lengthComputable")}} {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Gesamtheit der zu erledigenden Arbeit und die bereits geleistete Arbeit des zugrunde liegenden Prozesses berechenbar ist. Mit anderen Worten, es gibt an, ob der Fortschritt messbar ist oder nicht.
- {{domxref("ProgressEvent.loaded")}} {{ReadOnlyInline}}
  - : Ein 64-Bit-Ganzzahlwert ohne Vorzeichen, der die bereits vom zugrunde liegenden Prozess geleistete Arbeit angibt. Das Verhältnis der geleisteten Arbeit kann berechnet werden, indem `total` durch den Wert dieser Eigenschaft geteilt wird. Beim Herunterladen einer Ressource über HTTP zählt dies nur den Hauptteil der HTTP-Nachricht und schließt Header und andere Overheads nicht ein.
- {{domxref("ProgressEvent.total")}} {{ReadOnlyInline}}
  - : Ein 64-Bit-Ganzzahlwert ohne Vorzeichen, der die gesamte Menge der Arbeit repräsentiert, die der zugrunde liegende Prozess derzeit ausführt. Beim Herunterladen einer Ressource über HTTP ist dies die `Content-Length` (die Größe des Hauptteils der Nachricht) und schließt die Header und andere Overheads nicht ein.

## Beispiele

### Lebendes Beispiel

#### HTML

```html
<div class="example">
  <div class="file-select">
    <label for="avatar">Wählen Sie ein Profilbild aus:</label>
    <input
      type="file"
      id="avatar"
      name="avatar"
      accept="image/png, image/jpeg" />
  </div>

  <img src="" class="preview" height="200" alt="Bildvorschau" />

  <div class="event-log">
    <label for="eventLog">Ereignisprotokoll:</label>
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

- Verwandte Ereignisse: {{domxref("FileReader.loadstart_event", "loadstart")}}, {{domxref("FileReader.loadend_event", "loadend")}}, {{domxref("FileReader.load_event", "load")}}, {{domxref("FileReader.error_event", "error")}}, {{domxref("FileReader.abort_event", "abort")}}
