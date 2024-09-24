---
title: "HTMLInputElement: files-Eigenschaft"
short-title: files
slug: Web/API/HTMLInputElement/files
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("File and Directory Entries API")}}

Die **`HTMLInputElement.files`**-Eigenschaft ermöglicht den Zugriff auf die {{domxref("FileList")}}, die mit dem [`<input type="file">`](/de/docs/Web/HTML/Element/input/file)-Element ausgewählt wurde.

## Wert

Ein {{domxref("FileList")}}-Objekt, das die ausgewählten Dateien auflistet, falls vorhanden, oder `null`, wenn das **`HTMLInputElement`** nicht vom `type="file"` ist.

## Beispiele

Das folgende Beispiel zeigt, wie Sie auf die **`HTMLInputElement.files`**-Eigenschaft zugreifen und den Namen, das Änderungsdatum, die Größe und den Typ jeder vom Benutzer ausgewählten Datei protokollieren können.

### HTML

```html
<input id="files" type="file" multiple />
```

### JavaScript

Beachten Sie, dass **`HTMLInputElement.files`** auch dann eine Instanz von {{domxref("FileList")}} zurückgibt, wenn keine Dateien ausgewählt sind.
Daher ist es sicher, es mit {{JSxref("Statements/for...of", "for...of")}} zu durchlaufen, ohne zu überprüfen, ob Dateien ausgewählt sind.

```js
const fileInput = document.getElementById("files");

console.log(fileInput.files instanceof FileList); // true, sogar wenn leer

for (const file of fileInput.files) {
  console.log(file.name); // druckt den Dateinamen
  let fileDate = new Date(file.lastModified);
  console.log(fileDate.toLocaleDateString()); // druckt lesbares Datum
  console.log(
    file.size < 1000 ? file.size : Math.round(file.size / 1000) + "KB",
  );
  console.log(file.type); // druckt den MIME-Typ
}
```

## Spezifikationen

{{ Specifications }}

## Browser-Kompatibilität

{{ Compat }}

## Siehe auch

- {{domxref("DataTransfer.files")}}
