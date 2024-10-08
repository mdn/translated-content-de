---
title: "WebSocketStream: close() Methode"
short-title: close()
slug: Web/API/WebSocketStream/close
l10n:
  sourceCommit: fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{APIRef("WebSockets API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`close()`**-Methode der [`WebSocketStream`](/de/docs/Web/API/WebSocketStream) Schnittstelle schließt die WebSocket-Verbindung. Die Methode akzeptiert optional ein Objekt, das einen benutzerdefinierten Code und/oder einen Grund angibt, warum die Verbindung geschlossen wurde.

Ein alternatives Mechanismus zum Schließen eines `WebSocketStream` ist das Angeben eines [`AbortSignal`](/de/docs/Web/API/AbortSignal) in der [`signal`](/de/docs/Web/API/WebSocketStream/WebSocketStream#signal) Option des Konstruktors bei der Erstellung. Der zugehörige [`AbortController`](/de/docs/Web/API/AbortController) kann dann verwendet werden, um die WebSocket-Verbindung zu schließen. Dies ist im Allgemeinen der bevorzugte Mechanismus. `close()` kann jedoch verwendet werden, wenn Sie einen benutzerdefinierten Code und/oder Grund angeben möchten.

## Syntax

```js-nolint
close()
close(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:
    - `closeCode` {{optional_inline}}
      - : Eine Zahl, die den Schließcode darstellt (siehe die vollständige Liste der [`CloseEvent`-Statuscodes](/de/docs/Web/API/CloseEvent/code#value)).
    - `reason` {{optional_inline}}
      - : Ein String, der eine für Menschen lesbare Beschreibung des Grundes angibt, warum die Socket-Verbindung geschlossen wird. Die maximal zulässige Länge für einen `reason`-String beträgt 123 Bytes. Der String wird automatisch als UTF-8 kodiert, wenn die Funktion aufgerufen wird.

> [!NOTE]
> Abhängig von der Serverkonfiguration und dem verwendeten Statuscode kann der Server wählen, einen benutzerdefinierten Code zugunsten eines gültigen Codes zu ignorieren, der für den Schließgrund korrekt ist. Gültige Codes sind 1000 und jeder Code im Bereich von 3000 bis 4999, einschließlich.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der bereitgestellte `reason` länger ist als die maximal zulässige Länge von 123 Bytes.

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

Derzeit nicht Teil einer Spezifikation. Siehe https://github.com/whatwg/websockets/pull/48 für den Fortschritt der Standardisierung.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebSocketStream: Integration von Streams mit der WebSocket API](https://developer.chrome.com/docs/capabilities/web-apis/websocketstream), developer.chrome.com (2020)
