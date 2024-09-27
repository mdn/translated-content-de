---
title: "FileReader: readAsText() Methode"
short-title: readAsText()
slug: Web/API/FileReader/readAsText
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Die **`readAsText()`**-Methode des [`FileReader`](/de/docs/Web/API/FileReader)-Interfaces wird verwendet, um die Inhalte des angegebenen [`Blob`](/de/docs/Web/API/Blob) oder [`File`](/de/docs/Web/API/File) zu lesen. Sobald der Lesevorgang abgeschlossen ist, wird die [`readyState`](/de/docs/Web/API/FileReader/readyState)-Eigenschaft auf `DONE` geändert, das [`loadend`](/de/docs/Web/API/FileReader/loadend_event)-Ereignis wird ausgelöst, und die [`result`](/de/docs/Web/API/FileReader/result)-Eigenschaft enthält die Inhalte der Datei als Textzeichenfolge.

> [!NOTE]
> Die [`Blob.text()`](/de/docs/Web/API/Blob/text)-Methode ist eine neuere, Promise-basierte API, um eine Datei als Text zu lesen.

> [!NOTE]
> Diese Methode lädt den gesamten Dateiinhalt in den Speicher und ist nicht für große Dateien geeignet. Bevorzugen Sie [`readAsArrayBuffer()`](/de/docs/Web/API/FileReader/readAsArrayBuffer) für große Dateien.

## Syntax

```js-nolint
readAsText(blob)
readAsText(blob, encoding)
```

### Parameter

- `blob`
  - : Das [`Blob`](/de/docs/Web/API/Blob) oder [`File`](/de/docs/Web/API/File), aus dem gelesen werden soll.
- `encoding` {{optional_inline}}
  - : Ein Zeichenstring, der die zu verwendende Kodierung für die zurückgegebenen Daten angibt. Standardmäßig wird UTF-8 angenommen, wenn dieser Parameter nicht angegeben ist.

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

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`FileReader`](/de/docs/Web/API/FileReader)
