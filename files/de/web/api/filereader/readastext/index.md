---
title: "FileReader: Methode readAsText()"
short-title: readAsText()
slug: Web/API/FileReader/readAsText
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Die **`readAsText()`**-Methode des [`FileReader`](/de/docs/Web/API/FileReader)-Interfaces wird verwendet, um den Inhalt des angegebenen [`Blob`](/de/docs/Web/API/Blob) oder [`File`](/de/docs/Web/API/File) zu lesen.
Wenn der Lesevorgang abgeschlossen ist, ändert sich die [`readyState`](/de/docs/Web/API/FileReader/readyState)-Eigenschaft zu `DONE`, das [`loadend`](/de/docs/Web/API/FileReader/loadend_event)-Ereignis wird ausgelöst und die [`result`](/de/docs/Web/API/FileReader/result)-Eigenschaft enthält den Inhalt der Datei als Textzeichenfolge.

> [!NOTE]
> Die [`Blob.text()`](/de/docs/Web/API/Blob/text)-Methode ist eine neuere, auf Promises basierende API, um eine Datei als Text zu lesen.

> [!NOTE]
> Diese Methode lädt den gesamten Inhalt der Datei in den Speicher und ist daher nicht für große Dateien geeignet. Bevorzugen Sie für große Dateien [`readAsArrayBuffer()`](/de/docs/Web/API/FileReader/readAsArrayBuffer).

## Syntax

```js-nolint
readAsText(blob)
readAsText(blob, encoding)
```

### Parameter

- `blob`
  - : Das [`Blob`](/de/docs/Web/API/Blob) oder die [`File`](/de/docs/Web/API/File), aus der/dem gelesen werden soll.
- `encoding` {{optional_inline}}
  - : Ein String, der die zu verwendende Kodierung für die zurückgegebenen Daten angibt. Standardmäßig wird UTF-8 angenommen, wenn dieser Parameter nicht angegeben ist.

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
