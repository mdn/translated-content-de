---
title: "WebSocketStream: close()-Methode"
short-title: close()
slug: Web/API/WebSocketStream/close
l10n:
  sourceCommit: 7a418e5d057adb45a0c7c4ec3b03baa8c3be18f4
---

{{APIRef("WebSockets API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`close()`**-Methode des [`WebSocketStream`](/de/docs/Web/API/WebSocketStream)-Interfaces schließt die WebSocket-Verbindung. Die Methode akzeptiert optional ein Objekt, das einen benutzerdefinierten Code und/oder Grund enthält, warum die Verbindung geschlossen wurde.

## Syntax

```js-nolint
close()
close(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden Eigenschaften:
    - `closeCode` {{optional_inline}}
      - : Eine Zahl, die den Schließungscode repräsentiert (siehe die vollständige Liste der [`CloseEvent`-Statuscodes](/de/docs/Web/API/CloseEvent/code#value)).
    - `reason` {{optional_inline}}
      - : Ein String, der eine menschenlesbare Beschreibung des Grundes darstellt, warum die Socket-Verbindung geschlossen wird. Die maximal erlaubte Länge für einen `reason`-String beträgt 123 Bytes. Der String wird automatisch als UTF-8 kodiert, wenn die Funktion aufgerufen wird.

> [!NOTE]
> Abhängig von der Serverkonfiguration und dem verwendeten Statuscode kann es sein, dass der Server einen benutzerdefinierten Code ignoriert und stattdessen einen gültigen Code verwendet, der für den Schließungsgrund korrekt ist. Gültige Codes sind 1000 und jeder Code im Bereich von 3000 bis einschließlich 4999.

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

- [WebSocketStream: Einbindung von Streams mit der WebSocket-API](https://developer.chrome.com/docs/capabilities/web-apis/websocketstream), developer.chrome.com (2020)
