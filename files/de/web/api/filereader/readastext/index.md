---
title: "FileReader: readAsText()-Methode"
short-title: readAsText()
slug: Web/API/FileReader/readAsText
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Die **`readAsText()`**-Methode der [`FileReader`](/de/docs/Web/API/FileReader)-Schnittstelle wird verwendet, um den Inhalt des angegebenen [`Blob`](/de/docs/Web/API/Blob) oder [`File`](/de/docs/Web/API/File) zu lesen. Wenn der Lesevorgang abgeschlossen ist, wird die [`readyState`](/de/docs/Web/API/FileReader/readyState)-Eigenschaft auf `DONE` geändert, das [`loadend`](/de/docs/Web/API/FileReader/loadend_event)-Ereignis wird ausgelöst und die [`result`](/de/docs/Web/API/FileReader/result)-Eigenschaft enthält den Inhalt der Datei als Textstring.

> [!NOTE]
> Die [`Blob.text()`](/de/docs/Web/API/Blob/text)-Methode ist eine neuere, auf Versprechen basierende API, um eine Datei als Text zu lesen.

> [!NOTE]
> Diese Methode lädt den gesamten Inhalt der Datei in den Speicher und ist für große Dateien nicht geeignet. Verwenden Sie für große Dateien besser [`readAsArrayBuffer()`](/de/docs/Web/API/FileReader/readAsArrayBuffer).

## Syntax

```js-nolint
readAsText(blob)
readAsText(blob, encoding)
```

### Parameter

- `blob`
  - : Der [`Blob`](/de/docs/Web/API/Blob) oder [`File`](/de/docs/Web/API/File), aus dem gelesen werden soll.
- `encoding` {{optional_inline}}
  - : Ein String, der die zu verwendende Kodierung für die zurückgegebenen Daten angibt. Standardmäßig wird UTF-8 angenommen, wenn dieser Parameter nicht angegeben wird.

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

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`FileReader`](/de/docs/Web/API/FileReader)
