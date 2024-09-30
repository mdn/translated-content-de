---
title: "FileList: item()-Methode"
short-title: item()
slug: Web/API/FileList/item
l10n:
  sourceCommit: 8fd2ee72038310e3ecc387df235ffac1cb08775c
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Die **`item()`**-Methode der [`FileList`](/de/docs/Web/API/FileList)-Schnittstelle gibt ein [`File`](/de/docs/Web/API/File)-Objekt zurück, das die Datei am angegebenen Index in der Dateiliste darstellt.

## Syntax

```js-nolint
item(index)
```

### Parameter

- `index`
  - : Der nullbasierte Index der Datei, die aus der Liste abgerufen werden soll.

### Rückgabewert

Ein [`File`](/de/docs/Web/API/File)-Objekt, das die angeforderte Datei darstellt.

## Beispiele

### Den Namen einer Datei ausgeben

In diesem Beispiel verwenden wir `item()`, um das erste Element in der `FileList` auszuwählen.

#### HTML

```html
<input type="file" />
<div class="output"></div>
```

#### JavaScript

```js
const fileInput = document.querySelector("input[type=file]");
const output = document.querySelector(".output");

fileInput.addEventListener("change", () => {
  const fileList = fileInput.files;
  if (fileList.length > 0) {
    const file = fileList.item(0);
    output.textContent = `You selected: ${file.name}`;
  }
});
```

#### Ergebnis

{{EmbedLiveSample("Printing the name of a file")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
