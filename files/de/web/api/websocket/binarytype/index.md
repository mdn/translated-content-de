---
title: "WebSocket: binaryType-Eigenschaft"
short-title: binaryType
slug: Web/API/WebSocket/binaryType
l10n:
  sourceCommit: fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

Die **`WebSocket.binaryType`**-Eigenschaft steuert den Typ der
binären Daten, die über die `WebSocket`-Verbindung empfangen werden.

## Wert

Ein String:

- `"blob"`
  - : Verwenden Sie [`Blob`](/de/docs/Web/API/Blob)-Objekte für binäre Daten. Dies ist der Standardwert.
- `"arraybuffer"`
  - : Verwenden Sie {{jsxref("ArrayBuffer")}}-Objekte für binäre Daten.

## Beispiele

```js
// Create WebSocket connection.
const socket = new WebSocket("ws://localhost:8080");

// Change binary type from "blob" to "arraybuffer"
socket.binaryType = "arraybuffer";

// Listen for messages
socket.addEventListener("message", (event) => {
  if (event.data instanceof ArrayBuffer) {
    // binary frame
    const view = new DataView(event.data);
    console.log(view.getInt32(0));
  } else {
    // text frame
    console.log(event.data);
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
