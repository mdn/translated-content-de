---
title: "RTCDTMFToneChangeEvent: RTCDTMFToneChangeEvent() Konstruktor"
short-title: RTCDTMFToneChangeEvent()
slug: Web/API/RTCDTMFToneChangeEvent/RTCDTMFToneChangeEvent
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Der **`RTCDTMFToneChangeEvent()`**-Konstruktor erstellt ein neues
[`RTCDTMFToneChangeEvent`](/de/docs/Web/API/RTCDTMFToneChangeEvent)-Objekt.

## Syntax

```js-nolint
new RTCDTMFToneChangeEvent(type)
new RTCDTMFToneChangeEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist Groß- und Kleinschreibung beachten, und Browser setzen es immer auf `tonechange`.
- `options` {{optional_inline}}

  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:

    - `tone` {{optional_inline}}
      - : Ein String, der ein einzelnes DTMF-Tonzeichen enthält, das gerade begonnen hat zu spielen, oder ein leerer String (`""`), um anzuzeigen, dass der vorherige Ton aufgehört hat zu spielen. Standardmäßig ist es `""`.
        Siehe [Tonzeichen](/de/docs/Web/API/RTCDTMFSender/toneBuffer#tone_buffer_format)
        für Details zu den zulässigen Zeichen.

### Rückgabewert

Ein neues [`RTCDTMFToneChangeEvent`](/de/docs/Web/API/RTCDTMFToneChangeEvent)-Objekt, konfiguriert gemäß den angegebenen Optionen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- [Verwendung von DTMF mit WebRTC](/de/docs/Web/API/WebRTC_API/Using_DTMF)
- Üblicher Zieltyp: [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender).
