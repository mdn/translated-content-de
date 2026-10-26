---
title: "FileReader: error-Ereignis"
short-title: error
slug: Web/API/FileReader/error_event
l10n:
  sourceCommit: 9a0e5c1cfa8d5079e22c410de757707706f1cc75
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Das **`error`**-Ereignis der [`FileReader`](/de/docs/Web/API/FileReader)-Schnittstelle wird ausgelöst, wenn das Lesen aufgrund eines Fehlers fehlschlägt (beispielsweise weil die Datei nicht gefunden wurde oder nicht lesbar ist).

Dieses Ereignis kann nicht abgebrochen werden und steigt nicht im DOM-Baum auf.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("error", (event) => { })
```

Alternativ können Sie die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle verwenden:

```js-nolint
onerror = (event) => { }
```

## Ereignistyp

Ein [`ProgressEvent`](/de/docs/Web/API/ProgressEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ProgressEvent")}}

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
