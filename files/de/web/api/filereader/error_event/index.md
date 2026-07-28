---
title: "FileReader: error Ereignis"
short-title: error
slug: Web/API/FileReader/error_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Das **`error`**-Ereignis des [`FileReader`](/de/docs/Web/API/FileReader)-Interfaces wird ausgelöst, wenn das Lesen aufgrund eines Fehlers fehlgeschlagen ist (zum Beispiel, weil die Datei nicht gefunden oder nicht lesbar war).

Dieses Ereignis ist nicht abbruchsicher und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("error", (event) => { })

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
