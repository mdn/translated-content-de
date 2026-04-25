---
title: "SerialPort: setSignals()-Methode"
short-title: setSignals()
slug: Web/API/SerialPort/setSignals
l10n:
  sourceCommit: c9773fc1268b974b6c009208b259c53954c839ef
---

{{SecureContext_Header}}{{APIRef("Web Serial API")}}{{AvailableInWorkers("window_and_dedicated")}}

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
      - : Ein boolescher Wert, der angibt, ob das Betriebssystem angewiesen werden soll, das Signal "Data Terminal Ready" oder "DTR" am seriellen Port zu setzen (wenn true) oder zurückzusetzen (wenn false).
    - `requestToSend`
      - : Ein boolescher Wert, der angibt, ob das Betriebssystem angewiesen werden soll, das Signal "Request to Send" oder "RTS" am seriellen Port zu setzen (wenn true) oder zurückzusetzen (wenn false).
    - `break`
      - : Ein boolescher Wert, der angibt, ob das Betriebssystem angewiesen werden soll, das "Break"-Signal am seriellen Port zu setzen (wenn true) oder zurückzusetzen (wenn false).

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
