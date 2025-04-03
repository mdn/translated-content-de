---
title: "DataTransferItem: getAsString()-Methode"
short-title: getAsString()
slug: Web/API/DataTransferItem/getAsString
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("HTML Drag and Drop API")}}

Die **`DataTransferItem.getAsString()`**-Methode ruft die gegebene Rückruffunktion mit den Zeichenfolgendaten des Drag-Datenobjekts als Argument auf, wenn das [`kind`](/de/docs/Web/API/DataTransferItem/kind) des Elements eine _einfache Unicode-Zeichenfolge_ ist (d.h. `kind` ist `string`).

## Syntax

```js-nolint
getAsString(callbackFn)
```

### Parameter

- `callbackFn`
  - : Eine Rückruffunktion, die folgende Argumente erhält:
    - `data`
      - : Die Zeichenfolgendaten des [`DataTransferItem`](/de/docs/Web/API/DataTransferItem).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel zeigt die Verwendung der `getAsString()`-Methode als _Inline-Funktion_ in einem [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignishandler.

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

- [`DataTransfer.getData()`](/de/docs/Web/API/DataTransfer/getData)
