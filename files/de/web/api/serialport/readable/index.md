---
title: "SerialPort: readable-Eigenschaft"
short-title: readable
slug: Web/API/SerialPort/readable
l10n:
  sourceCommit: 2de8605cc697ca93b02f0b7109082b694f8950ec
---

{{SecureContext_Header}}{{APIRef("Web Serial API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`readable`** schreibgeschützte Eigenschaft des [`SerialPort`](/de/docs/Web/API/SerialPort) Interface liefert einen [`ReadableStream`](/de/docs/Web/API/ReadableStream), um Daten vom mit dem Port verbundenen Gerät zu empfangen. Die von diesem Stream gelesenen Blöcke sind Instanzen von {{jsxref("Uint8Array")}}. Diese Eigenschaft ist nicht null, solange der Port geöffnet ist und kein schwerwiegender Fehler aufgetreten ist.

## Wert

Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream).

## Beispiele

Das folgende Beispiel zeigt, wie man Daten von einem Port liest. Die äußere Schleife behandelt nicht-schwerwiegende Fehler und erstellt einen neuen Leser, bis ein schwerwiegender Fehler auftritt und `readable` null wird.

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
