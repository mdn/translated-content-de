---
title: "FileReader: readAsDataURL() Methode"
short-title: readAsDataURL()
slug: Web/API/FileReader/readAsDataURL
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Die **`readAsDataURL()`**-Methode der [`FileReader`](/de/docs/Web/API/FileReader)-Schnittstelle wird verwendet, um den Inhalt des angegebenen [`Blob`](/de/docs/Web/API/Blob) oder [`File`](/de/docs/Web/API/File) zu lesen. Wenn der Lesevorgang abgeschlossen ist, wird die [`readyState`](/de/docs/Web/API/FileReader/readyState)-Eigenschaft `DONE`, und das [`loadend`](/de/docs/Web/API/FileReader/loadend_event)-Ereignis wird ausgelöst. Zu diesem Zeitpunkt enthält das [`result`](/de/docs/Web/API/FileReader/result)-Attribut die Daten als [data: URL](/de/docs/Web/URI/Reference/Schemes/data), die die Daten der Datei als Base64-kodierten String darstellt.

> [!NOTE]
> Das [`result`](/de/docs/Web/API/FileReader/result) des Blobs kann nicht direkt als Base64 decodiert werden, ohne zuerst die Data-URL-Deklaration zu entfernen, die den Base64-kodierten Daten vorausgeht. Um nur den Base64-kodierten String zu erhalten, entfernen Sie zuerst `data:*/*;base64,` aus dem Ergebnis.

## Syntax

```js-nolint
readAsDataURL(blob)
```

### Parameter

- `blob`
  - : Der [`Blob`](/de/docs/Web/API/Blob) oder die [`File`](/de/docs/Web/API/File), von dem gelesen werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Lesen einer einzelnen Datei

#### HTML

```html
<input type="file" /><br />
<img src="" height="200" alt="Image preview" />
```

#### JavaScript

```js
const preview = document.querySelector("img");
const fileInput = document.querySelector("input[type=file]");

fileInput.addEventListener("change", previewFile);

function previewFile() {
  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    // convert image file to base64 string
    preview.src = reader.result;
  });

  if (file) {
    reader.readAsDataURL(file);
  }
}
```

#### Ergebnis

{{EmbedLiveSample("Lesen einer einzelnen Datei", "100%", 240)}}

### Lesen mehrerer Dateien

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
    if (/\.(?:jpe?g|png|gif)$/i.test(file.name)) {
      const reader = new FileReader();

      reader.addEventListener("load", () => {
        const image = new Image();
        image.height = 100;
        image.title = file.name;
        image.src = reader.result;
        preview.appendChild(image);
      });

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

{{EmbedLiveSample("Lesen mehrerer Dateien", "100%", 240)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`FileReader`](/de/docs/Web/API/FileReader)
- [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static)
