---
title: "SerialPort: readable-Eigenschaft"
short-title: readable
slug: Web/API/SerialPort/readable
l10n:
  sourceCommit: c9773fc1268b974b6c009208b259c53954c839ef
---

{{SecureContext_Header}}{{APIRef("Web Serial API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`readable`**-Eigenschaft des [`SerialPort`](/de/docs/Web/API/SerialPort)-Interfaces gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurück, um Daten vom mit dem Port verbundenen Gerät zu empfangen. Die aus diesem Strom gelesenen Datenblöcke sind Instanzen von {{jsxref("Uint8Array")}}. Diese Eigenschaft ist nicht null, solange der Port geöffnet ist und kein schwerwiegender Fehler aufgetreten ist.

## Wert

Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream).

## Beispiele

Das folgende Beispiel zeigt, wie Daten von einem Port gelesen werden. Die äußere Schleife behandelt nicht-schwerwiegende Fehler und erstellt einen neuen Leser, bis ein schwerwiegender Fehler auftritt und `readable` `null` wird.

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
