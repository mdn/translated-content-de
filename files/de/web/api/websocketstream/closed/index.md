---
title: "WebSocketStream: closed-Eigenschaft"
short-title: closed
slug: Web/API/WebSocketStream/closed
l10n:
  sourceCommit: fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{APIRef("WebSockets API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`closed`** der [`WebSocketStream`](/de/docs/Web/API/WebSocketStream)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt erfüllt wird, sobald die Socket-Verbindung geschlossen ist. Das Objekt enthält den Schließcode und den Grund.

## Wert

Ein Promise, das mit einem Objekt erfüllt wird, das die folgenden Eigenschaften enthält:

- `closeCode`
  - : Eine Zahl, die den Schließcode darstellt (siehe die vollständige Liste der [`CloseEvent`-Statuscodes](/de/docs/Web/API/CloseEvent/code#value)).
- `reason`
  - : Ein String, der eine menschenlesbare Beschreibung des Grundes darstellt, warum die Socket-Verbindung geschlossen wurde.

Das Promise wird abgelehnt, wenn die WebSocket-Verbindung nicht sauber geschlossen wurde (für einen sauberen Abschluss muss die zugehörige TCP-Verbindung _nach_ dem Abschluss des WebSocket-Schließen-Handshakes geschlossen werden).

## Beispiele

```js
const wsURL = "wss://127.0.0.1/";
const wss = new WebSocketStream(wsURL);

wss.closed.then((result) => {
  writeToScreen(
    `DISCONNECTED: code ${result.closeCode}, message "${result.reason}"`,
  );
  console.log("Socket closed", result.closeCode, result.reason);
});
```

Siehe [Verwendung von WebSocketStream zum Schreiben eines Clients](/de/docs/Web/API/WebSockets_API/Using_WebSocketStream) für ein vollständiges Beispiel mit vollständiger Erklärung.

## Spezifikationen

Zurzeit nicht Bestandteil einer Spezifikation. Siehe https://github.com/whatwg/websockets/pull/48 für den Standardisierungsfortschritt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebSocketStream: Integration von Streams mit der WebSocket API](https://developer.chrome.com/docs/capabilities/web-apis/websocketstream), developer.chrome.com (2020)
