---
title: "FileList: length-Eigenschaft"
short-title: length
slug: Web/API/FileList/length
l10n:
  sourceCommit: 8fd2ee72038310e3ecc387df235ffac1cb08775c
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Die **`length`**-Eigenschaft (nur lesbar) des {{domxref("FileList")}}-Interfaces gibt die Anzahl der Dateien in der `FileList` zurück.

## Wert

Eine Zahl, die die Anzahl der Dateien in der Liste angibt.

## Beispiele

### Anzahl der ausgewählten Dateien ausgeben

In diesem Beispiel verwenden wir `length`, um die Anzahl der Elemente in der `FileList` zu ermitteln.

#### HTML

```html
<input type="file" multiple />
<div class="output"></div>
```

#### JavaScript

```js
const fileInput = document.querySelector("input[type=file]");
const output = document.querySelector(".output");

fileInput.addEventListener("change", () => {
  const fileList = fileInput.files;
  output.textContent = `You've selected: ${fileList.length} file(s)`;
});
```

#### Ergebnis

{{EmbedLiveSample("Printing the number of files selected")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
