---
title: "SerialPort: setSignals()-Methode"
short-title: setSignals()
slug: Web/API/SerialPort/setSignals
l10n:
  sourceCommit: 2de8605cc697ca93b02f0b7109082b694f8950ec
---

{{SecureContext_Header}}{{APIRef("Web Serial API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`setSignals()`**-Methode der [`SerialPort`](/de/docs/Web/API/SerialPort)-Schnittstelle setzt Steuersignale auf dem Port und gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn sie gesetzt sind.

## Syntax

```js-nolint
setSignals()
setSignals(options)
```

### Parameter

- `options` {{Optional_Inline}}

  - : Ein Objekt mit einem der folgenden Werte:

    - `dataTerminalReady`
      - : Ein Boolean, der angibt, ob das Betriebssystem angewiesen werden soll, das "data terminal ready" oder "DTR"-Signal am seriellen Port entweder zu behaupten (wenn true) oder aufzuheben (wenn false).
    - `requestToSend`
      - : Ein Boolean, der angibt, ob das Betriebssystem angewiesen werden soll, das "request to send" oder "RTS"-Signal am seriellen Port entweder zu behaupten (wenn true) oder aufzuheben (wenn false).
    - `break`
      - : Ein Boolean, der angibt, ob das Betriebssystem angewiesen werden soll, das "break"-Signal am seriellen Port entweder zu behaupten (wenn true) oder aufzuheben (wenn false).

### Rückgabewert

Ein {{jsxref("Promise")}}.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn der Port nicht geöffnet ist. Rufen Sie [`SerialPort.open()`](/de/docs/Web/API/SerialPort/open) auf, um diesen Fehler zu vermeiden.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn die Signale auf dem Gerät nicht gesetzt werden konnten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
