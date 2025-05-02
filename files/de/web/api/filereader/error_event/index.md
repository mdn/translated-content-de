---
title: "FileReader: error event"
short-title: error
slug: Web/API/FileReader/error_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Das **`error`**-Ereignis der [`FileReader`](/de/docs/Web/API/FileReader)-Schnittstelle wird ausgelöst, wenn das Lesen aufgrund eines Fehlers fehlschlägt (zum Beispiel, weil die Datei nicht gefunden oder nicht lesbar ist).

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("error", (event) => { })

onerror = (event) => { }
```

## Ereignistyp

Ein [`ProgressEvent`](/de/docs/Web/API/ProgressEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ProgressEvent")}}

## Ereigniseigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten [`Event`](/de/docs/Web/API/Event)_.

- [`ProgressEvent.lengthComputable`](/de/docs/Web/API/ProgressEvent/lengthComputable) {{ReadOnlyInline}}
  - : Ein boolesches Flag, das angibt, ob die insgesamt zu erledigende Arbeit und die bereits erledigte Arbeit des zugrunde liegenden Prozesses berechenbar sind. Mit anderen Worten, es zeigt an, ob der Fortschritt messbar ist oder nicht.
- [`ProgressEvent.loaded`](/de/docs/Web/API/ProgressEvent/loaded) {{ReadOnlyInline}}
  - : Ein 64-Bit-Unsigned-Integer-Wert, der die Menge der bereits vom zugrunde liegenden Prozess durchgeführten Arbeit angibt. Das Verhältnis der erledigten Arbeit kann berechnet werden, indem `total` durch den Wert dieser Eigenschaft geteilt wird. Beim Herunterladen einer Ressource über HTTP zählt diese nur den Hauptteil der HTTP-Nachricht und schließt keine Header und andere Überheadskosten ein.
- [`ProgressEvent.total`](/de/docs/Web/API/ProgressEvent/total) {{ReadOnlyInline}}
  - : Ein 64-Bit-Unsigned-Integer, der die Gesamtarbeit darstellt, die der zugrunde liegende Prozess gerade durchführt. Beim Herunterladen einer Ressource über HTTP ist dies die `Content-Length` (die Größe des Hauptteils der Nachricht) und schließt die Header und andere Überheadkosten nicht ein.

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

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`loadstart`](/de/docs/Web/API/FileReader/loadstart_event), [`loadend`](/de/docs/Web/API/FileReader/loadend_event), [`progress`](/de/docs/Web/API/FileReader/progress_event), [`load`](/de/docs/Web/API/FileReader/load_event), [`abort`](/de/docs/Web/API/FileReader/abort_event)
