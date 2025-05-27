---
title: "DataTransferItem: getAsString()-Methode"
short-title: getAsString()
slug: Web/API/DataTransferItem/getAsString
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{APIRef("HTML Drag and Drop API")}}

Die **`DataTransferItem.getAsString()`**-Methode ruft die gegebene Rückruffunktion mit den Zeichenfolgendaten des Drag-Data-Items als Argument auf, wenn der [`kind`](/de/docs/Web/API/DataTransferItem/kind) des Elements ein _einfacher Unicode-String_ ist (d.h. `kind` ist `string`).

## Syntax

```js-nolint
getAsString(callbackFn)
```

### Parameter

- `callbackFn`
  - : Eine Rückruffunktion, die die folgenden Argumente erhält:
    - `data`
      - : Die Stringdaten des [`DataTransferItem`](/de/docs/Web/API/DataTransferItem).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel zeigt die Verwendung der `getAsString()`-Methode als _Inline-Funktion_ in einem [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignishandler.

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

- [`DataTransfer.getData()`](/de/docs/Web/API/DataTransfer/getData)
