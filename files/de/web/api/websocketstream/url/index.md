---
title: "WebSocketStream: url-Eigenschaft"
short-title: url
slug: Web/API/WebSocketStream/url
l10n:
  sourceCommit: fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{APIRef("WebSockets API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`url`** schreibgeschützte Eigenschaft der
[`WebSocketStream`](/de/docs/Web/API/WebSocketStream)-Schnittstelle gibt die URL des WebSocket-Servers zurück, mit dem die `WebSocketStream`-Instanz erstellt wurde.

## Wert

Ein String.

## Beispiele

```js
const wss = new WebSocketStream("wss://example.com/wss");

// Logs "example.com/wss" to the console
console.log(wss.url);
```

## Spezifikationen

Gegenwärtig nicht Teil einer Spezifikation. Siehe https://github.com/whatwg/websockets/pull/48 für den Standardisierungsfortschritt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebSocketStream: integrating streams with the WebSocket API](https://developer.chrome.com/docs/capabilities/web-apis/websocketstream), developer.chrome.com (2020)
