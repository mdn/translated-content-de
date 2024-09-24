---
title: "WebSocket: binaryType Eigenschaft"
short-title: binaryType
slug: Web/API/WebSocket/binaryType
l10n:
  sourceCommit: eba47bb55d10e6dc73f61dbefc9d3da2abf1fd78
---

{{APIRef("WebSockets API")}}

Die **`WebSocket.binaryType`**-Eigenschaft steuert den Typ der binären Daten, die über die WebSocket-Verbindung empfangen werden.

## Wert

Ein String:

- `"blob"`
  - : Verwendet {{domxref("Blob")}}-Objekte für binäre Daten. Dies ist der Standardwert.
- `"arraybuffer"`
  - : Verwendet {{jsxref("ArrayBuffer")}}-Objekte für binäre Daten.

## Beispiele

```js
// WebSocket-Verbindung erstellen.
const socket = new WebSocket("ws://localhost:8080");

// Ändern Sie den binären Typ von "blob" in "arraybuffer"
socket.binaryType = "arraybuffer";

// Hören Sie auf Nachrichten
socket.addEventListener("message", (event) => {
  if (event.data instanceof ArrayBuffer) {
    // binärer Frame
    const view = new DataView(event.data);
    console.log(view.getInt32(0));
  } else {
    // Text-Frame
    console.log(event.data);
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
