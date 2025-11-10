---
title: "DataTransferItem: getAsFile()-Methode"
short-title: getAsFile()
slug: Web/API/DataTransferItem/getAsFile
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{APIRef("HTML Drag and Drop API")}}

Wenn das Element eine Datei ist, gibt die **`DataTransferItem.getAsFile()`**-Methode das [`File`](/de/docs/Web/API/File)-Objekt des Drag-Datenobjekts zurück. Wenn das Element keine Datei ist, gibt diese Methode `null` zurück.

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

Dieses Beispiel zeigt die Verwendung der `getAsFile()`-Methode in einem [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignishandler.

```js
function dropHandler(ev) {
  console.log("Drop");
  ev.preventDefault();
  for (const item of ev.dataTransfer.items) {
    if (item.kind === "string" && item.type.match("^text/plain")) {
      // This item is the target node
      item.getAsString((s) => {
        ev.target.appendChild(document.getElementById(s));
      });
    } else if (item.kind === "string" && item.type.match("^text/html")) {
      // Drag data item is HTML
      console.log("… Drop: HTML");
    } else if (item.kind === "string" && item.type.match("^text/uri-list")) {
      // Drag data item is URI
      console.log("… Drop: URI");
    } else if (item.kind === "file" && item.type.match("^image/")) {
      // Drag data item is an image file
      const f = item.getAsFile();
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
