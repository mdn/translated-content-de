---
title: "SerialPort: readable-Eigenschaft"
short-title: readable
slug: Web/API/SerialPort/readable
l10n:
  sourceCommit: 2de8605cc697ca93b02f0b7109082b694f8950ec
---

{{SecureContext_Header}}{{APIRef("Web Serial API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`readable`**-Schreibgeschützte Eigenschaft des {{domxref("SerialPort")}}-Interfaces gibt einen {{domxref("ReadableStream")}} zurück, um Daten vom an den Port angeschlossenen Gerät zu empfangen. Die aus diesem Stream gelesenen Blöcke sind Instanzen von {{jsxref("Uint8Array")}}. Diese Eigenschaft ist nicht null, solange der Port geöffnet und kein schwerwiegender Fehler aufgetreten ist.

## Wert

Ein {{domxref("ReadableStream")}}.

## Beispiele

Das folgende Beispiel zeigt, wie Daten von einem Port gelesen werden. Die äußere Schleife behandelt nicht-kritische Fehler, indem sie einen neuen Leser erstellt, bis ein schwerwiegender Fehler auftritt und `readable` null wird.

```js
while (port.readable) {
  const reader = port.readable.getReader();
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) {
        // |reader| wurde abgebrochen.
        break;
      }
      // Machen Sie etwas mit |value|…
    }
  } catch (error) {
    // Behandeln Sie |error|…
  } finally {
    reader.releaseLock();
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
