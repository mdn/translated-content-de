---
title: "DataTransferItem: getAsFile()-Methode"
short-title: getAsFile()
slug: Web/API/DataTransferItem/getAsFile
l10n:
  sourceCommit: b5583a21df2aeaebddd7e0eeb58ff690b013546b
---

{{APIRef("HTML Drag and Drop API")}}

Wenn das Element eine Datei ist, gibt die **`DataTransferItem.getAsFile()`**-Methode das {{domxref("File")}}-Objekt des Drag-Datenelements zurück. Wenn das Element keine Datei ist, gibt diese Methode `null` zurück.

## Syntax

```js-nolint
getAsFile()
```

### Parameter

Keine.

### Rückgabewert

- {{domxref("File")}}
  - : Wenn das Drag-Datenelement eine Datei ist, wird ein {{domxref("File")}}-Objekt zurückgegeben; andernfalls wird `null` zurückgegeben.

## Beispiele

Dieses Beispiel zeigt die Verwendung der `getAsFile()`-Methode in einem {{domxref("HTMLElement/drop_event", "drop")}}-Ereignishandler.

```js
function dropHandler(ev) {
  console.log("Drop");
  ev.preventDefault();
  const data = ev.dataTransfer.items;
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].kind === "string" && data[i].type.match("^text/plain")) {
      // Dieses Element ist der Zielknoten
      data[i].getAsString((s) => {
        ev.target.appendChild(document.getElementById(s));
      });
    } else if (data[i].kind === "string" && data[i].type.match("^text/html")) {
      // Drag-Datenelement ist HTML
      console.log("… Drop: HTML");
    } else if (
      data[i].kind === "string" &&
      data[i].type.match("^text/uri-list")
    ) {
      // Drag-Datenelement ist URI
      console.log("… Drop: URI");
    } else if (data[i].kind === "file" && data[i].type.match("^image/")) {
      // Drag-Datenelement ist eine Bilddatei
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

- {{domxref("DataTransfer.files")}}
