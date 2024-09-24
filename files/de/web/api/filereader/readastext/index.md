---
title: "FileReader: Methode readAsText()"
short-title: readAsText()
slug: Web/API/FileReader/readAsText
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Die **`readAsText()`** Methode der {{domxref("FileReader")}} Schnittstelle wird verwendet, um den Inhalt des angegebenen {{domxref("Blob")}} oder {{domxref("File")}} zu lesen. Wenn der Lesevorgang abgeschlossen ist, ändert sich die {{domxref("FileReader.readyState","readyState")}} Eigenschaft zu `DONE`, das {{domxref("FileReader/loadend_event", "loadend")}} Ereignis wird ausgelöst, und die {{domxref("FileReader.result","result")}} Eigenschaft enthält den Inhalt der Datei als Textzeichenfolge.

> [!NOTE]
> Die {{domxref("Blob.text()")}} Methode ist eine neuere, auf Promises basierende API, um eine Datei als Text zu lesen.

> [!NOTE]
> Diese Methode lädt den gesamten Dateiinhalte in den Speicher und ist nicht für große Dateien geeignet. Verwenden Sie {{domxref("FileReader.readAsArrayBuffer", "readAsArrayBuffer()")}} für große Dateien.

## Syntax

```js-nolint
readAsText(blob)
readAsText(blob, encoding)
```

### Parameter

- `blob`
  - : Der {{domxref("Blob")}} oder {{domxref("File")}}, aus dem gelesen werden soll.
- `encoding` {{optional_inline}}
  - : Ein String, der die zu verwendende Codierung für die zurückgegebenen Daten angibt. Standardmäßig wird UTF-8 angenommen, wenn dieser Parameter nicht angegeben ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### HTML

```html
<input type="file" onchange="previewFile()" /><br />
<p class="content"></p>
```

### JavaScript

```js
function previewFile() {
  const content = document.querySelector(".content");
  const [file] = document.querySelector("input[type=file]").files;
  const reader = new FileReader();

  reader.addEventListener(
    "load",
    () => {
      // this will then display a text file
      content.innerText = reader.result;
    },
    false,
  );

  if (file) {
    reader.readAsText(file);
  }
}
```

### Ergebnis

{{EmbedLiveSample("Examples", "100%", 240)}}

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("FileReader")}}
