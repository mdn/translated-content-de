---
title: "FileReader: readAsText()-Methode"
short-title: readAsText()
slug: Web/API/FileReader/readAsText
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Die **`readAsText()`**-Methode des [`FileReader`](/de/docs/Web/API/FileReader)-Interfaces wird verwendet, um den Inhalt des angegebenen [`Blob`](/de/docs/Web/API/Blob) oder [`File`](/de/docs/Web/API/File) zu lesen. Wenn der Lesevorgang abgeschlossen ist, ändert sich die [`readyState`](/de/docs/Web/API/FileReader/readyState)-Eigenschaft auf `DONE`, das [`loadend`](/de/docs/Web/API/FileReader/loadend_event)-Ereignis wird ausgelöst, und die [`result`](/de/docs/Web/API/FileReader/result)-Eigenschaft enthält den Inhalt der Datei als Textstring.

> [!NOTE]
> Die [`Blob.text()`](/de/docs/Web/API/Blob/text)-Methode ist eine neuere, auf Promises basierende API, um eine Datei als Text zu lesen.

> [!NOTE]
> Diese Methode lädt den gesamten Inhalt der Datei in den Speicher und ist für große Dateien nicht geeignet. Bevorzugen Sie [`readAsArrayBuffer()`](/de/docs/Web/API/FileReader/readAsArrayBuffer) für große Dateien.

## Syntax

```js-nolint
readAsText(blob)
readAsText(blob, encoding)
```

### Parameter

- `blob`
  - : Der [`Blob`](/de/docs/Web/API/Blob) oder [`File`](/de/docs/Web/API/File), aus dem gelesen werden soll.
- `encoding` {{optional_inline}}
  - : Ein String, der die zu verwendende Kodierung für die zurückgegebenen Daten angibt. Standardmäßig wird UTF-8 angenommen, wenn dieser Parameter nicht angegeben ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### HTML

```html
<input type="file" /><br />
<p class="content"></p>
```

### JavaScript

```js
const content = document.querySelector(".content");
const fileInput = document.querySelector("input[type=file]");

fileInput.addEventListener("change", previewFile);

function previewFile() {
  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    // this will then display a text file
    content.innerText = reader.result;
  });

  if (file) {
    reader.readAsText(file);
  }
}
```

### Ergebnis

{{EmbedLiveSample("Examples", "100%", 240)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`FileReader`](/de/docs/Web/API/FileReader)
