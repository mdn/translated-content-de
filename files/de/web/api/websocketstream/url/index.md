---
title: "WebSocketStream: url-Eigenschaft"
short-title: url
slug: Web/API/WebSocketStream/url
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{APIRef("WebSockets API")}}{{SeeCompatTable}}{{AvailableInWorkers}}{{non-standard_header}}

Die **`url`**-Schreibgeschützte Eigenschaft der [`WebSocketStream`](/de/docs/Web/API/WebSocketStream)-Schnittstelle gibt die URL des WebSocket-Servers zurück, mit dem die `WebSocketStream`-Instanz erstellt wurde.

## Wert

Ein String.

## Beispiele

```js
const wss = new WebSocketStream("wss://example.com/wss");

// Logs "example.com/wss" to the console
console.log(wss.url);
```

## Spezifikationen

Gehört derzeit zu keiner Spezifikation. Siehe https://github.com/whatwg/websockets/pull/48 für den Standardisierungsfortschritt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebSocketStream: Integration von Streams mit der WebSocket-API](https://developer.chrome.com/docs/capabilities/web-apis/websocketstream), developer.chrome.com (2020)
