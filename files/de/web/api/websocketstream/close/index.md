---
title: "WebSocketStream: close()-Methode"
short-title: close()
slug: Web/API/WebSocketStream/close
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{APIRef("WebSockets API")}}{{SeeCompatTable}}{{AvailableInWorkers}}{{non-standard_header}}

Die **`close()`**-Methode der [`WebSocketStream`](/de/docs/Web/API/WebSocketStream)-Schnittstelle beendet die WebSocket-Verbindung. Die Methode kann optional ein Objekt akzeptieren, das einen benutzerdefinierten Code und/oder einen Grund enthält, warum die Verbindung geschlossen wurde.

## Syntax

```js-nolint
close()
close(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionen-Objekt, das die folgenden Eigenschaften enthält:
    - `closeCode` {{optional_inline}}
      - : Eine Zahl, die den Schließcode darstellt (siehe die vollständige Liste der [`CloseEvent`-Statuscodes](/de/docs/Web/API/CloseEvent/code#value)).
    - `reason` {{optional_inline}}
      - : Ein String, der eine menschenlesbare Beschreibung des Grundes darstellt, warum die Socket-Verbindung geschlossen wird. Die maximal erlaubte Länge für einen `reason`-String beträgt 123 Bytes. Der String wird automatisch als UTF-8 kodiert, wenn die Funktion aufgerufen wird.

> [!NOTE]
> Abhängig von der Serverkonfiguration und dem verwendeten Statuscode kann der Server einen benutzerdefinierten Code ignorieren und stattdessen einen gültigen Code wählen, der für den Schließgrund korrekt ist. Gültige Codes sind 1000 und jeder Code im Bereich von 3000 bis 4999, inklusive.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene `reason` länger als die maximal erlaubte Länge von 123 Bytes ist.

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

Derzeit nicht Teil einer Spezifikation. Siehe https://github.com/whatwg/websockets/pull/48 für den Standardisierungsfortschritt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebSocketStream: integration von Streams mit der WebSocket-API](https://developer.chrome.com/docs/capabilities/web-apis/websocketstream), developer.chrome.com (2020)
