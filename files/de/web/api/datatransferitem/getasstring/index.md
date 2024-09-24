---
title: "DataTransferItem: getAsString()-Methode"
short-title: getAsString()
slug: Web/API/DataTransferItem/getAsString
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("HTML Drag and Drop API")}}

Die **`DataTransferItem.getAsString()`**-Methode ruft den angegebenen Callback auf und übergibt die Zeichenfolgendaten des Drag-Daten-Eintrags als Argument, wenn die {{domxref("DataTransferItem.kind","Art")}} des Eintrags eine _einfache Unicode-Zeichenfolge_ ist (d. h. `kind` ist `string`).

## Syntax

```js-nolint
getAsString(callbackFn)
```

### Parameter

- `callbackFn`
  - : Eine Callback-Funktion, die folgende Argumente erhält:
    - `data`
      - : Die Zeichenfolgendaten des {{domxref("DataTransferItem")}}.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel zeigt die Verwendung der `getAsString()`-Methode als _Inlinefunktion_ in einem {{domxref("HTMLElement/drop_event", "drop")}}-Ereignishandler.

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
      // Drag-Daten-Eintrag ist HTML
      console.log("… Drop: HTML");
    } else if (
      data[i].kind === "string" &&
      data[i].type.match("^text/uri-list")
    ) {
      // Drag-Daten-Eintrag ist URI
      console.log("… Drop: URI");
    } else if (data[i].kind === "file" && data[i].type.match("^image/")) {
      // Drag-Daten-Eintrag ist eine Bilddatei
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

- {{domxref("DataTransfer.getData()")}}
