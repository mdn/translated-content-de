---
title: "RTCErrorEvent: RTCErrorEvent() Konstruktor"
short-title: RTCErrorEvent()
slug: Web/API/RTCErrorEvent/RTCErrorEvent
l10n:
  sourceCommit: e7f93b8ebd8b26bd6fae71f7b0b6214a671a4ef9
---

{{APIRef("WebRTC")}}{{AvailableInWorkers}}

Der **`RTCErrorEvent()`** Konstruktor erzeugt ein neues [`RTCErrorEvent`](/de/docs/Web/API/RTCErrorEvent) Objekt.

Beachten Sie, dass Sie normalerweise kein Objekt dieser Art selbst erstellen.

## Syntax

```js-nolint
new RTCErrorEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Dies ist normalerweise `"error"`.
- `options`
  - : Ein Objekt, das _zusätzlich zu den im [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
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
