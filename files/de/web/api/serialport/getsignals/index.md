---
title: "SerialPort: getSignals() Methode"
short-title: getSignals()
slug: Web/API/SerialPort/getSignals
l10n:
  sourceCommit: 6fe7a18b80e55d9d25dcc16dfb010eec09460bb8
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`getSignals()`**-Methode des [`SerialPort`](/de/docs/Web/API/SerialPort)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt aufgelöst wird, welches den aktuellen Zustand der Steuerungssignale des Ports enthält.

## Syntax

```js-nolint
getSignals()
```

### Parameter

Keine.

### Rückgabewert

Gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt aufgelöst wird, welches die folgenden Mitglieder enthält:

- `clearToSend`
  - : Ein boolean, der dem anderen Ende einer seriellen Verbindung anzeigt, dass es klar ist, Daten zu senden.
- `dataCarrierDetect`
  - : Ein boolean, der das Steuersignal ein- oder ausschaltet, das benötigt wird, um über eine serielle Verbindung zu kommunizieren.
- `dataSetReady`
  - : Ein boolean, der angibt, ob das Gerät bereit ist, Daten zu senden und zu empfangen.
- `ringIndicator`
  - : Ein boolean, der anzeigt, ob ein Ringsignal über die serielle Verbindung gesendet werden soll.

### Ausnahmen

Das zurückgegebene `Promise` wird mit einer der folgenden Ausnahmen abgelehnt:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wenn `getSignals()` aufgerufen wird, während der Port nicht geöffnet ist. Rufen Sie zuerst [`SerialPort.open()`](/de/docs/Web/API/SerialPort/open) auf, um den Port zu öffnen.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wenn die Signale auf dem Gerät nicht gelesen werden konnten.

## Beispiele

### Überprüfen, ob das Gerät bereit ist, Daten zu senden und zu empfangen

Das folgende Beispiel liest die Steuersignale von einem offenen Port und überprüft die `dataSetReady`-Eigenschaft, um festzustellen, ob das angeschlossene Gerät bereit ist, zu kommunizieren.

```js
const signals = await port.getSignals();
console.log(`Device ready: ${signals.dataSetReady}`);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
