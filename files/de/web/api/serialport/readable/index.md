---
title: "SerialPort: readable-Eigenschaft"
short-title: readable
slug: Web/API/SerialPort/readable
l10n:
  sourceCommit: 6fe7a18b80e55d9d25dcc16dfb010eec09460bb8
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`readable`**-Eigenschaft der [`SerialPort`](/de/docs/Web/API/SerialPort)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurückgibt, um Daten von dem Gerät zu empfangen, das mit dem Port verbunden ist. Die aus diesem Stream gelesenen Blöcke sind Instanzen von {{jsxref("Uint8Array")}}. Diese Eigenschaft ist nicht null, sofern der Port geöffnet ist und kein schwerwiegender Fehler aufgetreten ist.

## Wert

Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream).

## Beispiele

Das folgende Beispiel zeigt, wie man Daten von einem Port liest. Die äußere Schleife behandelt nicht-schwerwiegende Fehler und erstellt einen neuen Leser, bis ein schwerwiegender Fehler auftritt und `readable` `null` wird.

```js
while (port.readable) {
  const reader = port.readable.getReader();
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) {
        // |reader| has been canceled.
        break;
      }
      // Do something with |value|…
    }
  } catch (error) {
    // Handle |error|…
  } finally {
    reader.releaseLock();
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
