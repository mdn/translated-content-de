---
title: "RTCDTMFToneChangeEvent: RTCDTMFToneChangeEvent() Konstruktor"
short-title: RTCDTMFToneChangeEvent()
slug: Web/API/RTCDTMFToneChangeEvent/RTCDTMFToneChangeEvent
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebRTC")}}

Der **`RTCDTMFToneChangeEvent()`** Konstruktor erzeugt ein neues
[`RTCDTMFToneChangeEvent`](/de/docs/Web/API/RTCDTMFToneChangeEvent) Objekt.

## Syntax

```js-nolint
new RTCDTMFToneChangeEvent(type)
new RTCDTMFToneChangeEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist case-sensitiv und Browser setzen ihn immer auf `tonechange`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `tone` {{optional_inline}}
      - : Ein String, der ein einzelnes DTMF-Tonzeichen enthält, das gerade zu spielen begonnen hat, oder ein leerer String (`""`), um anzuzeigen, dass der vorherige Ton aufgehört hat zu spielen. Der Standardwert ist `""`.
        Siehe [Tonzeichen](/de/docs/Web/API/RTCDTMFSender/toneBuffer#tone_buffer_format)
        für Details zu den erlaubten Zeichen.

### Rückgabewert

Ein neues [`RTCDTMFToneChangeEvent`](/de/docs/Web/API/RTCDTMFToneChangeEvent) Objekt, konfiguriert gemäß den bereitgestellten Optionen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- [Verwendung von DTMF mit WebRTC](/de/docs/Web/API/WebRTC_API/Using_DTMF)
- Sein üblicher Ziel: [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender).
