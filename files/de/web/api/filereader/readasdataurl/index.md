---
title: "FileReader: readAsDataURL() Methode"
short-title: readAsDataURL()
slug: Web/API/FileReader/readAsDataURL
l10n:
  sourceCommit: 6b730e3cfdf0f51940b44efa71bd59c84ce76e71
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Die **`readAsDataURL()`** Methode des [`FileReader`](/de/docs/Web/API/FileReader) Interfaces wird verwendet, um die Inhalte des angegebenen [`Blob`](/de/docs/Web/API/Blob) oder [`File`](/de/docs/Web/API/File) zu lesen. Wenn der Lesevorgang beendet ist, wird die [`readyState`](/de/docs/Web/API/FileReader/readyState) Eigenschaft `DONE`, und das [`loadend`](/de/docs/Web/API/FileReader/loadend_event) Ereignis wird ausgelöst. Zu diesem Zeitpunkt enthält das [`result`](/de/docs/Web/API/FileReader/result) Attribut die Daten als [data: URL](/de/docs/Web/URI/Schemes/data), die die Daten der Datei als base64-codierter String darstellt.

> [!NOTE]
> Das [`result`](/de/docs/Web/API/FileReader/result) eines Blobs kann nicht
> direkt als Base64 dekodiert werden, ohne zuerst die Data-URL-Deklaration zu entfernen, die den
> Base64-codierten Daten vorangeht. Um nur den Base64-codierten String zu erhalten, entfernen Sie zuerst `data:*/*;base64,` aus dem Ergebnis.

## Syntax

```js-nolint
readAsDataURL(blob)
```

### Parameter

- `blob`
  - : Der [`Blob`](/de/docs/Web/API/Blob) oder [`File`](/de/docs/Web/API/File), aus dem gelesen werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Einzeldatendatei lesen

#### HTML

```html
<input type="file" onchange="previewFile()" /><br />
<img src="" height="200" alt="Image preview" />
```

#### JavaScript

```js
function previewFile() {
  const preview = document.querySelector("img");
  const file = document.querySelector("input[type=file]").files[0];
  const reader = new FileReader();

  reader.addEventListener(
    "load",
    () => {
      // convert image file to base64 string
      preview.src = reader.result;
    },
    false,
  );

  if (file) {
    reader.readAsDataURL(file);
  }
}
```

#### Ergebnis

{{EmbedLiveSample("Reading a single file", "100%", 240)}}

### Mehrere Dateien lesen

#### HTML

```html
<input id="browse" type="file" multiple />
<div id="preview"></div>
```

#### JavaScript

```js
function previewFiles() {
  const preview = document.querySelector("#preview");
  const files = document.querySelector("input[type=file]").files;

  function readAndPreview(file) {
    // Make sure `file.name` matches our extensions criteria
    if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
      const reader = new FileReader();

      reader.addEventListener(
        "load",
        () => {
          const image = new Image();
          image.height = 100;
          image.title = file.name;
          image.src = reader.result;
          preview.appendChild(image);
        },
        false,
      );

      reader.readAsDataURL(file);
    }
  }

  if (files) {
    Array.prototype.forEach.call(files, readAndPreview);
  }
}

const picker = document.querySelector("#browse");
picker.addEventListener("change", previewFiles);
```

#### Ergebnis

{{EmbedLiveSample("Reading multiple files", "100%", 240)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`FileReader`](/de/docs/Web/API/FileReader)
- [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static)
