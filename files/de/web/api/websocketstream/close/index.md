---
title: "WebSocketStream: close() Methode"
short-title: close()
slug: Web/API/WebSocketStream/close
l10n:
  sourceCommit: 3012d72b1793005230d862f912163ec78aee75bd
---

{{APIRef("WebSockets API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`close()`**-Methode des [`WebSocketStream`](/de/docs/Web/API/WebSocketStream)-Interfaces schließt die WebSocket-Verbindung. Die Methode akzeptiert optional ein Objekt, das einen benutzerdefinierten Code und/oder den Grund enthält, warum die Verbindung geschlossen wurde.

Ein alternativer Mechanismus zum Schließen eines `WebSocketStream` besteht darin, bei der Erstellung im Konstruktor ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) in der [`signal`](/de/docs/Web/API/WebSocketStream/WebSocketStream#signal)-Option anzugeben. Der zugehörige [`AbortController`](/de/docs/Web/API/AbortController) kann dann verwendet werden, um die WebSocket-Verbindung zu schließen. Dies ist im Allgemeinen der bevorzugte Mechanismus. Allerdings kann `close()` verwendet werden, wenn Sie einen benutzerdefinierten Code und/oder Grund angeben möchten.

## Syntax

```js-nolint
close()
close(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:
    - `closeCode` {{optional_inline}}
      - : Eine Zahl, die den Schließcode repräsentiert (siehe die vollständige Liste der [`CloseEvent`-Statuscodes](/de/docs/Web/API/CloseEvent/code#value)).
    - `reason` {{optional_inline}}
      - : Ein String, der eine für Menschen lesbare Beschreibung des Grundes darstellt, warum die Socket-Verbindung geschlossen wird. Die maximal zulässige Länge für einen `reason`-String beträgt 123 Bytes. Der String wird beim Aufruf der Funktion automatisch als UTF-8 kodiert.

> [!NOTE]
> Abhängig von der Serverkonfiguration und dem von Ihnen verwendeten Statuscode kann der Server entscheiden, einen benutzerdefinierten Code zu ignorieren und stattdessen einen gültigen Code zu verwenden, der korrekt für den Schließungsgrund ist. Gültige Codes sind 1000 und jeder Code im Bereich von 3000 bis 4999, einschließlich.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene `reason` länger als die maximal zulässige Länge von 123 Bytes ist.

## Beispiele

```js
const wsURL = "wss://127.0.0.1/";
const wss = new WebSocketStream(wsURL);

setTimeout(() => {
  wss.close({
    closeCode: 1000,
    reason: "That's all folks",
  });
}, 10000);
```

## Spezifikationen

Derzeit nicht Teil einer Spezifikation. Siehe https://github.com/whatwg/websockets/pull/48 für den Standardisierungsprozess.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebSocketStream: Integration von Streams in die WebSocket API](https://developer.chrome.com/docs/capabilities/web-apis/websocketstream), developer.chrome.com (2020)
