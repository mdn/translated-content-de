---
title: "WebSocketStream: close()-Methode"
short-title: close()
slug: Web/API/WebSocketStream/close
l10n:
  sourceCommit: fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{APIRef("WebSockets API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`close()`**-Methode der [`WebSocketStream`](/de/docs/Web/API/WebSocketStream)-Schnittstelle schließt die WebSocket-Verbindung. Die Methode akzeptiert optional ein Objekt, das einen benutzerdefinierten Code und/oder Grund angibt, warum die Verbindung geschlossen wurde.

Ein alternativer Mechanismus zum Schließen eines `WebSocketStream` ist die Angabe eines [`AbortSignal`](/de/docs/Web/API/AbortSignal) in der [`signal`](/de/docs/Web/API/WebSocketStream/WebSocketStream#signal)-Option des Konstruktors bei der Erstellung. Der zugehörige [`AbortController`](/de/docs/Web/API/AbortController) kann dann verwendet werden, um die WebSocket-Verbindung zu schließen. Dies ist im Allgemeinen der bevorzugte Mechanismus. `close()` kann jedoch verwendet werden, wenn Sie einen benutzerdefinierten Code und/oder Grund angeben möchten.

## Syntax

```js-nolint
close()
close(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden Eigenschaften:
    - `closeCode` {{optional_inline}}
      - : Eine Zahl, die den Schließcode darstellt (siehe die vollständige Liste der [`CloseEvent`-Statuscodes](/de/docs/Web/API/CloseEvent/code#value)).
    - `reason` {{optional_inline}}
      - : Ein String, der eine menschenlesbare Beschreibung des Grundes darstellt, warum die Socket-Verbindung geschlossen wurde. Die maximal zulässige Länge für einen `reason`-String beträgt 123 Bytes. Der String wird automatisch als UTF-8 kodiert, wenn die Funktion aufgerufen wird.

> [!NOTE]
> Je nach Serverkonfiguration und verwendetem Statuscode kann der Server möglicherweise einen benutzerdefinierten Code zugunsten eines gültigen Codes ignorieren, der für den Schließgrund korrekt ist. Gültige Codes sind 1000 und jeder Code innerhalb des Bereichs von 3000 bis 4999, einschließlich.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
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

- [WebSocketStream: Integration von Streams mit der WebSocket API](https://developer.chrome.com/docs/capabilities/web-apis/websocketstream), developer.chrome.com (2020)
