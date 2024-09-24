---
title: "WebSocketStream: close() Methode"
short-title: close()
slug: Web/API/WebSocketStream/close
l10n:
  sourceCommit: bd8dbe863a306cf7114752bd936d012524b13517
---

{{APIRef("WebSockets API")}}{{SeeCompatTable}}

Die **`close()`** Methode des {{domxref("WebSocketStream")}}-Interfaces schließt die WebSocket-Verbindung. Die Methode akzeptiert optional ein Objekt, das einen benutzerdefinierten Code und/oder Grund enthält, der angibt, warum die Verbindung geschlossen wurde.

Ein alternativer Mechanismus zum Schließen eines `WebSocketStream` besteht darin, bei der Erstellung ein {{domxref("AbortSignal")}} in der [`signal`](/de/docs/Web/API/WebSocketStream/WebSocketStream#signal)-Option des Konstruktors anzugeben. Der zugehörige {{domxref("AbortController")}} kann dann verwendet werden, um die WebSocket-Verbindung zu schließen. Dies ist im Allgemeinen der bevorzugte Mechanismus. `close()` kann jedoch verwendet werden, wenn Sie einen benutzerdefinierten Code und/oder Grund angeben möchten.

## Syntax

```js-nolint
close()
close(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:
    - `closeCode` {{optional_inline}}
      - : Eine Zahl, die den Schließcode darstellt (sehen Sie sich die vollständige Liste der [`CloseEvent` Statuscodes](/de/docs/Web/API/CloseEvent/code#value) an).
    - `reason` {{optional_inline}}
      - : Ein String, der eine für Menschen lesbare Beschreibung des Grundes darstellt, warum die Socket-Verbindung geschlossen wird. Die maximal zulässige Länge für einen `reason`-String beträgt 123 Bytes. Der String wird automatisch als UTF-8 kodiert, wenn die Funktion aufgerufen wird.

> [!NOTE]
> Je nach Serverkonfiguration und dem verwendeten Statuscode kann es sein, dass der Server einen benutzerdefinierten Code zugunsten eines gültigen Codes, der für den Schließgrund korrekt ist, ignoriert. Gültige Codes sind 1000 und jeder Code im Bereich von 3000 bis einschließlich 4999.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `SyntaxError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der angegebene `reason` länger ist als die maximal zulässige Länge von 123 Bytes.

## Beispiele

```js
const wsURL = "wss://127.0.0.1/";
const wss = new WebSocketStream(wsURL);

setTimeout(() => {
  wss.close({
    code: 1000,
    reason: "That's all folks",
  });
}, 10000);
```

## Spezifikationen

Derzeit nicht Teil einer Spezifikation. Siehe https://github.com/whatwg/websockets/pull/48 für den Standardisierungsfortschritt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebSocketStream: integrating streams with the WebSocket API](https://developer.chrome.com/docs/capabilities/web-apis/websocketstream), developer.chrome.com (2020)
