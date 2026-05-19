---
title: "SerialPort: writable-Eigenschaft"
short-title: writable
slug: Web/API/SerialPort/writable
l10n:
  sourceCommit: 6fe7a18b80e55d9d25dcc16dfb010eec09460bb8
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die schreibgeschützte **`writable`**-Eigenschaft der [`SerialPort`](/de/docs/Web/API/SerialPort)-Schnittstelle gibt einen [`WritableStream`](/de/docs/Web/API/WritableStream) zurück, der zum Senden von Daten an das an den Port angeschlossene Gerät verwendet wird. An diesen Stream geschriebene Datenblöcke müssen Instanzen von {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}} oder {{jsxref("DataView")}} sein. Diese Eigenschaft ist nicht null, solange der Port geöffnet ist und kein schwerwiegender Fehler aufgetreten ist.

## Wert

Ein [`WritableStream`](/de/docs/Web/API/WritableStream).

## Beispiele

### Schreiben eines Strings auf einen Port

Das folgende Beispiel zeigt, wie ein String auf einen Port geschrieben wird. Ein [`TextEncoder`](/de/docs/Web/API/TextEncoder) konvertiert den String vor der Übertragung in ein `Uint8Array`.

```js
const encoder = new TextEncoder();
const writer = port.writable.getWriter();
await writer.write(encoder.encode("PING"));
writer.releaseLock();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
