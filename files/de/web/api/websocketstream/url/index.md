---
title: "WebSocketStream: url-Eigenschaft"
short-title: url
slug: Web/API/WebSocketStream/url
l10n:
  sourceCommit: bd8dbe863a306cf7114752bd936d012524b13517
---

{{APIRef("WebSockets API")}}{{SeeCompatTable}}

Die schreibgeschützte **`url`**-Eigenschaft der {{domxref("WebSocketStream")}}-Schnittstelle gibt die URL des WebSocket-Servers zurück, mit dem die `WebSocketStream`-Instanz erstellt wurde.

## Wert

Ein String.

## Beispiele

```js
const wss = new WebSocketStream("wss://example.com/wss");

// Gibt "example.com/wss" in der Konsole aus
console.log(wss.url);
```

## Spezifikationen

Derzeit nicht Teil einer Spezifikation. Siehe https://github.com/whatwg/websockets/pull/48 für den Standardisierungsfortschritt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebSocketStream: integrating streams with the WebSocket API](https://developer.chrome.com/docs/capabilities/web-apis/websocketstream), developer.chrome.com (2020)
