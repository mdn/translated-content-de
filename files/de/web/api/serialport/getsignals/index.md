---
title: "SerialPort: getSignals()-Methode"
short-title: getSignals()
slug: Web/API/SerialPort/getSignals
l10n:
  sourceCommit: c9773fc1268b974b6c009208b259c53954c839ef
---

{{SecureContext_Header}}{{APIRef("Web Serial API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`SerialPort.getSignals()`**-Methode der [`SerialPort`](/de/docs/Web/API/SerialPort)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt aufgelöst wird, das den aktuellen Status der Steuerungssignale des Ports enthält.

## Syntax

```js-nolint
getSignals()
```

### Parameter

Keine.

### Rückgabewert

Gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt aufgelöst wird, das die folgenden Mitglieder enthält:

- `clearToSend`
  - : Ein Boolean, der der anderen Seite einer seriellen Verbindung anzeigt, dass es in Ordnung ist, Daten zu senden.
- `dataCarrierDetect`
  - : Ein Boolean, der das Steuersignal umschaltet, das zur Kommunikation über eine serielle Verbindung benötigt wird.
- `dataSetReady`
  - : Ein Boolean, der anzeigt, ob das Gerät bereit ist, Daten zu senden und zu empfangen.
- `ringIndicator`
  - : Ein Boolean, der anzeigt, ob ein Klingelsignal über die serielle Verbindung gesendet werden soll.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn der Port nicht geöffnet ist. Rufen Sie [`SerialPort.open()`](/de/docs/Web/API/SerialPort/open) auf, um diesen Fehler zu vermeiden.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn die Signale des Geräts nicht gelesen werden konnten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
