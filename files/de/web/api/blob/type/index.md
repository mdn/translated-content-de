---
title: "Blob: type-Eigenschaft"
short-title: type
slug: Web/API/Blob/type
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`type`**-Eigenschaft der [`Blob`](/de/docs/Web/API/Blob)-Schnittstelle gibt den [MIME-Typ](/de/docs/Glossary/MIME_type) der Datei zurück.

> [!NOTE]
> Basierend auf der aktuellen Implementierung lesen Browser den Bytestream einer Datei nicht tatsächlich, um ihren Medientyp zu bestimmen.
> Es wird basierend auf der Dateiendung angenommen; eine PNG-Bilddatei, die in .txt umbenannt wird, würde "_text/plain_" und nicht "_image/png_" ergeben. Darüber hinaus ist `blob.type` in der Regel nur für gängige Dateitypen wie Bilder, HTML-Dokumente, Audio und Video zuverlässig.
> Ungewöhnliche Dateiendungen würden eine leere Zeichenfolge zurückgeben.
> Die Konfiguration des Clients (zum Beispiel der Windows-Registry) kann zu unerwarteten Werten selbst bei gängigen Typen führen. **Entwicklern wird geraten, sich nicht ausschließlich auf diese Eigenschaft als Validierungsschema zu verlassen.**

## Wert

Eine Zeichenkette, die den MIME-Typ der Datei enthält, oder eine leere Zeichenkette, wenn der Typ nicht bestimmt werden konnte.

## Beispiele

In diesem Beispiel wird der Benutzer aufgefordert, eine Anzahl von Dateien auszuwählen. Dann wird überprüft, ob jede Datei zu einem bestimmten Satz von Bilddateitypen gehört.

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
