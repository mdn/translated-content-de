---
title: "SerialPort: setSignals()-Methode"
short-title: setSignals()
slug: Web/API/SerialPort/setSignals
l10n:
  sourceCommit: 2de8605cc697ca93b02f0b7109082b694f8950ec
---

{{SecureContext_Header}}{{APIRef("Web Serial API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`setSignals()`**-Methode der {{domxref("SerialPort")}}-Schnittstelle setzt Steuersignale am Port und gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald sie gesetzt sind.

## Syntax

```js-nolint
setSignals()
setSignals(options)
```

### Parameter

- `options` {{Optional_Inline}}

  - : Ein Objekt mit einem der folgenden Werte:

    - `dataTerminalReady`
      - : Ein boolescher Wert, der angibt, ob das Betriebssystem aufgefordert werden soll, das "Data Terminal Ready" oder "DTR"-Signal am seriellen Port entweder zu setzen (wenn true) oder zu löschen (wenn false).
    - `requestToSend`
      - : Ein boolescher Wert, der angibt, ob das Betriebssystem aufgefordert werden soll, das "Request to Send" oder "RTS"-Signal am seriellen Port entweder zu setzen (wenn true) oder zu löschen (wenn false).
    - `break`
      - : Ein boolescher Wert, der angibt, ob das Betriebssystem aufgefordert werden soll, das "Break"-Signal am seriellen Port entweder zu setzen (wenn true) oder zu löschen (wenn false).

### Rückgabewert

Ein {{jsxref("Promise")}}.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird zurückgegeben, wenn der Port nicht geöffnet ist. Rufen Sie {{domxref("SerialPort.open()")}} auf, um diesen Fehler zu vermeiden.
- `NetworkError` {{domxref("DOMException")}}
  - : Wird zurückgegeben, wenn die Signale auf dem Gerät nicht gesetzt werden konnten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
