---
title: "SerialPort: setSignals()-Methode"
short-title: setSignals()
slug: Web/API/SerialPort/setSignals
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{SecureContext_Header}}{{APIRef("Web Serial API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`setSignals()`**-Methode der [`SerialPort`](/de/docs/Web/API/SerialPort)-Schnittstelle setzt Steuersignale am Port und gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn sie gesetzt sind.

## Syntax

```js-nolint
setSignals()
setSignals(options)
```

### Parameter

- `options` {{Optional_Inline}}
  - : Ein Objekt mit einem der folgenden Werte:
    - `dataTerminalReady`
      - : Ein boolescher Wert, der angibt, ob das Betriebssystem aufgefordert werden soll, das "data terminal ready" oder "DTR"-Signal am Seriellen Port zu setzen (falls true) oder zurückzusetzen (falls false).
    - `requestToSend`
      - : Ein boolescher Wert, der angibt, ob das Betriebssystem aufgefordert werden soll, das "request to send" oder "RTS"-Signal am Seriellen Port zu setzen (falls true) oder zurückzusetzen (falls false).
    - `break`
      - : Ein boolescher Wert, der angibt, ob das Betriebssystem aufgefordert werden soll, das "break"-Signal am Seriellen Port zu setzen (falls true) oder zurückzusetzen (falls false).

### Rückgabewert

Ein {{jsxref("Promise")}}.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn der Port nicht geöffnet ist. Rufen Sie [`SerialPort.open()`](/de/docs/Web/API/SerialPort/open) auf, um diesen Fehler zu vermeiden.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn die Signale am Gerät nicht gesetzt werden konnten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
