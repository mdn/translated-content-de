---
title: "SerialPort: Schreibbare Eigenschaft"
short-title: writable
slug: Web/API/SerialPort/writable
l10n:
  sourceCommit: 2de8605cc697ca93b02f0b7109082b694f8950ec
---

{{SecureContext_Header}}{{APIRef("Web Serial API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`writable`** schreibgeschützte Eigenschaft des {{domxref("SerialPort")}}-Interfaces gibt einen {{domxref("WritableStream")}} zurück, um Daten an das mit dem Port verbundene Gerät zu senden. Die in diesen Stream geschriebenen Blöcke müssen Instanzen von {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}} oder {{jsxref("DataView")}} sein. Diese Eigenschaft ist solange nicht null, wie der Anschluss geöffnet ist und kein schwerwiegender Fehler aufgetreten ist.

## Wert

Ein {{domxref("WritableStream")}}

## Beispiele

Das folgende Beispiel zeigt, wie eine Zeichenkette an einen Port geschrieben wird. Ein {{domxref("TextEncoder")}} konvertiert die Zeichenkette vor der Übertragung in ein `Uint8Array`.

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
