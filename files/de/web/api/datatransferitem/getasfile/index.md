---
title: "DataTransferItem: Methode getAsFile()"
short-title: getAsFile()
slug: Web/API/DataTransferItem/getAsFile
l10n:
  sourceCommit: b5583a21df2aeaebddd7e0eeb58ff690b013546b
---

{{APIRef("HTML Drag and Drop API")}}

Wenn das Element eine Datei ist, gibt die Methode **`DataTransferItem.getAsFile()`** das [`File`](/de/docs/Web/API/File)-Objekt des Drag-Datenpunktes zurück. Wenn das Element keine Datei ist, gibt diese Methode `null` zurück.

## Syntax

```js-nolint
getAsFile()
```

### Parameter

Keine.

### Rückgabewert

- [`File`](/de/docs/Web/API/File)
  - : Wenn das Drag-Datenobjekt eine Datei ist, wird ein [`File`](/de/docs/Web/API/File)-Objekt zurückgegeben; andernfalls wird `null` zurückgegeben.

## Beispiele

Dieses Beispiel zeigt die Verwendung der `getAsFile()`-Methode in einem [`drop`](/de/docs/Web/API/HTMLElement/drop_event) Ereignishandler.

```js
function dropHandler(ev) {
  console.log("Drop");
  ev.preventDefault();
  const data = ev.dataTransfer.items;
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].kind === "string" && data[i].type.match("^text/plain")) {
      // This item is the target node
      data[i].getAsString((s) => {
        ev.target.appendChild(document.getElementById(s));
      });
    } else if (data[i].kind === "string" && data[i].type.match("^text/html")) {
      // Drag data item is HTML
      console.log("… Drop: HTML");
    } else if (
      data[i].kind === "string" &&
      data[i].type.match("^text/uri-list")
    ) {
      // Drag data item is URI
      console.log("… Drop: URI");
    } else if (data[i].kind === "file" && data[i].type.match("^image/")) {
      // Drag data item is an image file
      const f = data[i].getAsFile();
      console.log("… Drop: File");
    }
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DataTransfer.files`](/de/docs/Web/API/DataTransfer/files)
