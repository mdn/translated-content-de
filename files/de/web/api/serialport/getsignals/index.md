---
title: "SerialPort: getSignals()-Methode"
short-title: getSignals()
slug: Web/API/SerialPort/getSignals
l10n:
  sourceCommit: 2de8605cc697ca93b02f0b7109082b694f8950ec
---

{{SecureContext_Header}}{{APIRef("Web Serial API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`SerialPort.getSignals()`**-Methode der {{domxref("SerialPort")}}-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt aufgelöst wird, das den aktuellen Zustand der Steuerungssignale des Ports enthält.

## Syntax

```js-nolint
getSignals()
```

### Parameter

Keine.

### Rückgabewert

Gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt aufgelöst wird, das die folgenden Mitglieder enthält:

- `clearToSend`
  - : Ein Boolean-Wert, der dem anderen Ende einer seriellen Verbindung anzeigt, dass es bereit ist, Daten zu senden.
- `dataCarrierDetect`
  - : Ein Boolean-Wert, der das Steuerungssignal umschaltet, das für die Kommunikation über eine serielle Verbindung erforderlich ist.
- `dataSetReady`
  - : Ein Boolean-Wert, der angibt, ob das Gerät bereit ist, Daten zu senden und zu empfangen.
- `ringIndicator`
  - : Ein Boolean-Wert, der anzeigt, ob ein Klingelsignal über die serielle Verbindung gesendet werden soll.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird zurückgegeben, wenn der Port nicht geöffnet ist. Rufen Sie {{domxref("SerialPort.open()")}} auf, um diesen Fehler zu vermeiden.
- `NetworkError` {{domxref("DOMException")}}
  - : Wird zurückgegeben, wenn die Signale auf dem Gerät nicht gelesen werden konnten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
