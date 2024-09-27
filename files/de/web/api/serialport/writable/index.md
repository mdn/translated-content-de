---
title: "SerialPort: writable-Eigenschaft"
short-title: writable
slug: Web/API/SerialPort/writable
l10n:
  sourceCommit: 2de8605cc697ca93b02f0b7109082b694f8950ec
---

{{SecureContext_Header}}{{APIRef("Web Serial API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`writable`** schreibgeschützte Eigenschaft der [`SerialPort`](/de/docs/Web/API/SerialPort)-Schnittstelle gibt einen [`WritableStream`](/de/docs/Web/API/WritableStream) zurück, um Daten an das mit dem Port verbundene Gerät zu senden. Die an diesen Stream geschriebenen Daten müssen Instanzen von {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}} oder {{jsxref("DataView")}} sein. Diese Eigenschaft ist nicht null, solange der Port geöffnet ist und kein schwerwiegender Fehler aufgetreten ist.

## Wert

Ein [`WritableStream`](/de/docs/Web/API/WritableStream)

## Beispiele

Das folgende Beispiel zeigt, wie eine Zeichenkette an einen Port geschrieben wird. Ein [`TextEncoder`](/de/docs/Web/API/TextEncoder) konvertiert die Zeichenkette vor der Übertragung in ein `Uint8Array`.

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
