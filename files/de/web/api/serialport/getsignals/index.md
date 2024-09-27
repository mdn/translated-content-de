---
title: "SerialPort: getSignals() Methode"
short-title: getSignals()
slug: Web/API/SerialPort/getSignals
l10n:
  sourceCommit: 2de8605cc697ca93b02f0b7109082b694f8950ec
---

{{SecureContext_Header}}{{APIRef("Web Serial API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`SerialPort.getSignals()`**-Methode der [`SerialPort`](/de/docs/Web/API/SerialPort)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt aufgelöst wird, welches den aktuellen Zustand der Steuerungssignale des Ports enthält.

## Syntax

```js-nolint
getSignals()
```

### Parameter

Keine.

### Rückgabewert

Gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt aufgelöst wird, welches die folgenden Mitglieder enthält:

- `clearToSend`
  - : Ein boolescher Wert, der dem anderen Ende einer seriellen Verbindung anzeigt, dass es in Ordnung ist, Daten zu senden.
- `dataCarrierDetect`
  - : Ein boolescher Wert, der das benötigte Steuersignal umschaltet, um über eine serielle Verbindung zu kommunizieren.
- `dataSetReady`
  - : Ein boolescher Wert, der anzeigt, ob das Gerät bereit ist, Daten zu senden und zu empfangen.
- `ringIndicator`
  - : Ein boolescher Wert, der anzeigt, ob ein Klingelsignal über die serielle Verbindung gesendet werden soll.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn der Port nicht geöffnet ist. Rufen Sie [`SerialPort.open()`](/de/docs/Web/API/SerialPort/open) auf, um diesen Fehler zu vermeiden.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn die Signale auf dem Gerät nicht gelesen werden konnten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
