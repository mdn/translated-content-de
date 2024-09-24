---
title: "FileReader: Fehlerereignis"
short-title: Fehler
slug: Web/API/FileReader/error_event
l10n:
  sourceCommit: e43bfd9b4a6c363a4ba7ef6ffa64c09b38fd111b
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Das **`error`**-Ereignis des {{domxref("FileReader")}}-Interfaces wird ausgelöst, wenn das Lesen aufgrund eines Fehlers fehlgeschlagen ist (zum Beispiel, weil die Datei nicht gefunden oder nicht lesbar ist).

Dieses Ereignis kann nicht abgebrochen werden und es ist nicht auf andere Objekte übertragbar.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## Ereignistyp

Ein {{domxref("ProgressEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("ProgressEvent")}}

## Ereigniseigenschaften

_Erbt auch Eigenschaften von seinem Elternteil {{domxref("Event")}}_.

- {{domxref("ProgressEvent.lengthComputable")}} {{ReadOnlyInline}}
  - : Ein boolesches Flag, das angibt, ob die gesamte zu erledigende Arbeit und die bereits erledigte Arbeit durch den zugrunde liegenden Prozess berechenbar sind. Mit anderen Worten, es zeigt an, ob der Fortschritt messbar ist oder nicht.
- {{domxref("ProgressEvent.loaded")}} {{ReadOnlyInline}}
  - : Ein 64-Bit-unsigned Integer-Wert, der angibt, wie viel Arbeit bereits durch den zugrunde liegenden Prozess geleistet wurde. Das Verhältnis der geleisteten Arbeit kann berechnet werden, indem `total` durch den Wert dieser Eigenschaft geteilt wird. Beim Herunterladen einer Ressource über HTTP wird hier nur der Hauptteil der HTTP-Nachricht gezählt, ohne die Header und andere Overheads.
- {{domxref("ProgressEvent.total")}} {{ReadOnlyInline}}
  - : Ein 64-Bit-unsigned Integer, der die Gesamtmenge der Arbeit darstellt, die der zugrunde liegende Prozess derzeit ausführt. Beim Herunterladen einer Ressource über HTTP entspricht dies der `Content-Length` (der Größe des Hauptteils der Nachricht), ohne die Header und andere Overheads.

## Beispiele

```js
const fileInput = document.querySelector('input[type="file"]');
const reader = new FileReader();

function handleSelected(e) {
  const selectedFile = fileInput.files[0];
  if (selectedFile) {
    reader.addEventListener("error", () => {
      console.error(`Error occurred reading file: ${selectedFile.name}`);
    });

    reader.addEventListener("load", () => {
      console.log(`File: ${selectedFile.name} read successfully`);
    });

    reader.readAsDataURL(selectedFile);
  }
}

fileInput.addEventListener("change", handleSelected);
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: {{domxref("FileReader.loadstart_event", "loadstart")}}, {{domxref("FileReader.loadend_event", "loadend")}}, {{domxref("FileReader.progress_event", "progress")}}, {{domxref("FileReader.load_event", "load")}}, {{domxref("FileReader.abort_event", "abort")}}
