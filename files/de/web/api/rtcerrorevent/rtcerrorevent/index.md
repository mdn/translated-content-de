---
title: "RTCErrorEvent: RTCErrorEvent() Konstruktor"
short-title: RTCErrorEvent()
slug: Web/API/RTCErrorEvent/RTCErrorEvent
l10n:
  sourceCommit: 581220b4299dd4c44544f7c200440129067a9d9d
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

Der **`RTCErrorEvent()`** Konstruktor erstellt ein neues [`RTCErrorEvent`](/de/docs/Web/API/RTCErrorEvent) Objekt.

Beachten Sie, dass Sie normalerweise kein Objekt dieses Typs selbst erstellen werden.

## Syntax

```js-nolint
new RTCErrorEvent(type, options)
```

### Parameter

- `type`
  - : Ein Zeichenfolgenwert mit dem Namen des Ereignisses.
    Dies ist in der Regel `"error"`.
- `options`
  - : Ein Objekt, das, _zusätzlich zu den Eigenschaften, die in [`Event()`](/de/docs/Web/API/Event/Event) definiert sind_, die folgenden Eigenschaften haben kann:
    - `error`
      - : Ein [`RTCError`](/de/docs/Web/API/RTCError), der die Ursache und den Ort des Fehlers beschreibt.

### Rückgabewert

Ein neues `RTCErrorEvent` Objekt.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie Sie eine `RTCErrorEvent` Instanz erstellen könnten.

```js
// Construct an RTCError (used to initialize the event)
const rtcError = new RTCError(
  {
    errorDetail: "sdp-syntax-error",
    sdpLineNumber: 42,
  },
  "SDP syntax error on line 42",
);

// Construct the RTCErrorEvent, passing the RTCError
const event = new RTCErrorEvent("error", {
  error: rtcError, // required
  bubbles: true, // Optional (inherited from Event)
  cancelable: false, // Optional (inherited from Event)
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
