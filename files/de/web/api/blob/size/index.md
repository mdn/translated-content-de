---
title: "Blob: size-Eigenschaft"
short-title: size
slug: Web/API/Blob/size
l10n:
  sourceCommit: 84a9afd94f497d4173bde131731ef6bdf0b6135d
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Die **`size`** Eigenschaft des [`Blob`](/de/docs/Web/API/Blob)-Interfaces gibt die Größe des [`Blob`](/de/docs/Web/API/Blob) oder [`File`](/de/docs/Web/API/File) in Bytes zurück.

## Wert

Die Anzahl der Bytes der Daten, die im `Blob` (oder einem auf `Blob` basierenden Objekt, wie zum Beispiel einer [`File`](/de/docs/Web/API/File)) enthalten sind.

## Beispiele

Dieses Beispiel verwendet ein {{HTMLElement("input")}}-Element vom Typ `file`, um den Benutzer nach einer Gruppe von Dateien zu fragen, und iteriert dann über diese Dateien, um ihre Namen und Längen in Bytes auszugeben.

### HTML

```html
<input type="file" id="input" multiple />
<output id="output">Choose files…</output>
```

```css hidden
output {
  display: block;
  margin-top: 16px;
}
```

### JavaScript

```js
const input = document.getElementById("input");
const output = document.getElementById("output");

input.addEventListener("change", (event) => {
  output.innerText = "";

  for (const file of event.target.files) {
    output.innerText += `${file.name} has a size of ${file.size} bytes.\n`;
  }
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
