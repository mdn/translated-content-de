---
title: "HTMLInputElement: files-Eigenschaft"
short-title: files
slug: Web/API/HTMLInputElement/files
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("File and Directory Entries API")}}

Die **`HTMLInputElement.files`**-Eigenschaft ermöglicht Ihnen den Zugriff auf die [`FileList`](/de/docs/Web/API/FileList), die mit dem [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)-Element ausgewählt wurde.

## Wert

Ein [`FileList`](/de/docs/Web/API/FileList)-Objekt, das die ausgewählten Dateien auflistet, falls vorhanden, oder `null`, wenn das **`HTMLInputElement`** nicht vom Typ `type="file"` ist.

## Beispiele

Das untenstehende Beispiel zeigt, wie Sie auf die **`HTMLInputElement.files`**-Eigenschaft zugreifen und den Namen, das Änderungsdatum, die Größe und den Typ jeder vom Benutzer ausgewählten Datei protokollieren können.

### HTML

```html
<input id="files" type="file" multiple />
```

### JavaScript

Beachten Sie, dass **`HTMLInputElement.files`** auch dann eine Instanz von [`FileList`](/de/docs/Web/API/FileList) zurückgibt, wenn keine Dateien ausgewählt sind.
Daher ist es sicher, mit {{JSxref("Statements/for...of", "for...of")}} darauf zu iterieren, ohne zu überprüfen, ob Dateien ausgewählt sind.

```js
const fileInput = document.getElementById("files");

console.log(fileInput.files instanceof FileList); // true even if empty

for (const file of fileInput.files) {
  console.log(file.name); // prints file name
  let fileDate = new Date(file.lastModified);
  console.log(fileDate.toLocaleDateString()); // prints legible date
  console.log(
    file.size < 1000 ? file.size : Math.round(file.size / 1000) + "KB",
  );
  console.log(file.type); // prints MIME type
}
```

## Spezifikationen

{{ Specifications }}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DataTransfer.files`](/de/docs/Web/API/DataTransfer/files)
