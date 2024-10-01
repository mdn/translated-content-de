---
title: "Blob: type-Eigenschaft"
short-title: type
slug: Web/API/Blob/type
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`type`**-Eigenschaft des [`Blob`](/de/docs/Web/API/Blob)-Interfaces gibt den {{Glossary("MIME_type", "MIME-Typ")}} der Datei zurück.

> [!NOTE]
> Basierend auf der aktuellen Implementierung lesen Browser den Bytestream einer Datei nicht, um den Medientyp zu bestimmen.
> Er wird basierend auf der Dateiendung angenommen; eine PNG-Bilddatei, die in .txt umbenannt wurde, würde "_text/plain_" und nicht "_image/png_" liefern. Darüber hinaus ist `blob.type` im Allgemeinen nur für gängige Dateitypen wie Bilder, HTML-Dokumente, Audio und Video zuverlässig.
> Unübliche Dateiendungen würden einen leeren String zurückgeben.
> Die Konfiguration des Clients (zum Beispiel die Windows-Registry) kann sogar bei gängigen Typen zu unerwarteten Werten führen. **Entwickler werden darauf hingewiesen, sich nicht ausschließlich auf diese Eigenschaft als Validierungsschema zu verlassen.**

## Wert

Ein String, der den MIME-Typ der Datei enthält, oder ein leerer String, wenn der Typ nicht bestimmt werden konnte.

## Beispiele

Dieses Beispiel bittet den Benutzer, eine Anzahl von Dateien auszuwählen, und überprüft dann jede Datei, um sicherzustellen, dass sie zu einer bestimmten Menge von Bilddateitypen gehört.

### HTML

```html
<input type="file" id="input" multiple />
<output id="output">Choose image files…</output>
```

```css hidden
output {
  display: block;
  margin-top: 16px;
}
```

### JavaScript

```js
// Our application only allows GIF, PNG, and JPEG images
const allowedFileTypes = ["image/png", "image/jpeg", "image/gif"];

const input = document.getElementById("input");
const output = document.getElementById("output");

input.addEventListener("change", (event) => {
  const files = event.target.files;

  if (files.length === 0) {
    output.innerText = "Choose image files…";
    return;
  }

  const allAllowed = Array.from(files).every((file) =>
    allowedFileTypes.includes(file.type),
  );
  output.innerText = allAllowed
    ? "All files clear!"
    : "Please choose image files only.";
});
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Blob`](/de/docs/Web/API/Blob)
- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
