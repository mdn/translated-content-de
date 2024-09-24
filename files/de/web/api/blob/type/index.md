---
title: "Blob: Eigenschaft type"
short-title: type
slug: Web/API/Blob/type
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Die **`type`**-Eigenschaft der {{domxref("Blob")}}-Schnittstelle ist schreibgeschützt und gibt den {{Glossary("MIME type")}} der Datei zurück.

> [!NOTE]
> Basierend auf der aktuellen Implementierung werden Browser den Bytestream einer Datei nicht tatsächlich lesen, um den Medientyp zu bestimmen.
> Der Typ wird anhand der Dateierweiterung vermutet; eine PNG-Bilddatei, die in .txt umbenannt wird, würde "_text/plain_" und nicht "_image/png_" zurückgeben. Zudem ist `blob.type` im Allgemeinen nur für gängige Dateitypen wie Bilder, HTML-Dokumente, Audio und Video zuverlässig.
> Ungewöhnliche Dateierweiterungen würden einen leeren String zurückgeben.
> Die Konfiguration des Clients (zum Beispiel die Windows-Registry) kann sogar bei üblichen Typen zu unerwarteten Werten führen. **Entwickler sollten sich nicht ausschließlich auf diese Eigenschaft als Validierungsverfahren verlassen.**

## Wert

Ein String, der den MIME-Typ der Datei enthält, oder ein leerer String, wenn der
Typ nicht bestimmt werden konnte.

## Beispiele

Dieses Beispiel fordert den Benutzer auf, eine Anzahl von Dateien zu wählen, und überprüft dann jede Datei, um sicherzustellen, dass sie zu einem bestimmten Satz von Bilddateitypen gehört.

### HTML

```html
<input type="file" id="input" multiple />
<output id="output">Wählen Sie Bilddateien aus…</output>
```

```css hidden
output {
  display: block;
  margin-top: 16px;
}
```

### JavaScript

```js
// Unsere Anwendung erlaubt nur GIF-, PNG- und JPEG-Bilder
const allowedFileTypes = ["image/png", "image/jpeg", "image/gif"];

const input = document.getElementById("input");
const output = document.getElementById("output");

input.addEventListener("change", (event) => {
  const files = event.target.files;

  if (files.length === 0) {
    output.innerText = "Wählen Sie Bilddateien aus…";
    return;
  }

  const allAllowed = Array.from(files).every((file) =>
    allowedFileTypes.includes(file.type),
  );
  output.innerText = allAllowed
    ? "Alle Dateien sind in Ordnung!"
    : "Bitte wählen Sie nur Bilddateien.";
});
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Blob")}}
- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
