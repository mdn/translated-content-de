---
title: "SerialPort: Methode getSignals()"
short-title: getSignals()
slug: Web/API/SerialPort/getSignals
l10n:
  sourceCommit: 2de8605cc697ca93b02f0b7109082b694f8950ec
---

{{SecureContext_Header}}{{APIRef("Web Serial API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`SerialPort.getSignals()`**-Methode des [`SerialPort`](/de/docs/Web/API/SerialPort)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das zu einem Objekt aufgelöst wird, das den aktuellen Status der Steuerungssignale des Ports enthält.

## Syntax

```js-nolint
getSignals()
```

### Parameter

Keine.

### Rückgabewert

Gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt aufgelöst wird, das die folgenden Mitglieder enthält:

- `clearToSend`
  - : Ein Boolean, der dem anderen Ende einer seriellen Verbindung signalisiert, dass Daten gesendet werden können.
- `dataCarrierDetect`
  - : Ein Boolean, der das Steuersignal umschaltet, das für die Kommunikation über eine serielle Verbindung erforderlich ist.
- `dataSetReady`
  - : Ein Boolean, der angibt, ob das Gerät bereit ist, Daten zu senden und zu empfangen.
- `ringIndicator`
  - : Ein Boolean, der angibt, ob ein Klingelsignal über die serielle Verbindung gesendet werden soll.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn der Port nicht geöffnet ist. Rufen Sie [`SerialPort.open()`](/de/docs/Web/API/SerialPort/open) auf, um diesen Fehler zu vermeiden.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn die Signale auf dem Gerät nicht gelesen werden konnten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
