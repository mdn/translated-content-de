---
title: "FileReader: Methode readAsDataURL()"
short-title: readAsDataURL()
slug: Web/API/FileReader/readAsDataURL
l10n:
  sourceCommit: 6b730e3cfdf0f51940b44efa71bd59c84ce76e71
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Die **`readAsDataURL()`** Methode der {{domxref("FileReader")}} Schnittstelle wird verwendet, um die Inhalte des angegebenen
{{domxref("Blob")}} oder {{domxref("File")}} zu lesen. Wenn der Lesevorgang abgeschlossen ist, wird die
{{domxref("FileReader.readyState","readyState")}} Eigenschaft `DONE`, und das
{{domxref("FileReader/loadend_event", "loadend")}} Ereignis wird ausgelöst. Zu diesem Zeitpunkt enthält das
{{domxref("FileReader.result","result")}} Attribut die Daten als [data: URL](/de/docs/Web/URI/Schemes/data), die die
Dateidaten als Base64-kodierter String darstellt.

> [!NOTE]
> Das {{domxref("FileReader.result","result")}} des Blobs kann nicht direkt als Base64 dekodiert werden, ohne zuerst die Data-URL-Deklaration vor den Base64-kodierten Daten zu entfernen. Um nur den Base64-kodierten String zu erhalten, entfernen Sie zuerst `data:*/*;base64,` aus dem Ergebnis.

## Syntax

```js-nolint
readAsDataURL(blob)
```

### Parameter

- `blob`
  - : Das {{domxref("Blob")}} oder {{domxref("File")}}, aus dem gelesen werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Einzelne Datei lesen

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
      // Bilddatei in Base64-String konvertieren
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
    // Sicherstellen, dass `file.name` unseren Kriterien für Erweiterungen entspricht
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

- {{domxref("FileReader")}}
- {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}}
