---
title: "RTCDTMFToneChangeEvent: RTCDTMFToneChangeEvent()-Konstruktor"
short-title: RTCDTMFToneChangeEvent()
slug: Web/API/RTCDTMFToneChangeEvent/RTCDTMFToneChangeEvent
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Der **`RTCDTMFToneChangeEvent()`**-Konstruktor erstellt ein neues
{{domxref("RTCDTMFToneChangeEvent")}}-Objekt.

## Syntax

```js-nolint
new RTCDTMFToneChangeEvent(type)
new RTCDTMFToneChangeEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist groß-/klein-schreibungsensitiv und Browser setzen es immer auf `tonechange`.
- `options` {{optional_inline}}

  - : Ein Objekt, das _zusätzlich zu den in {{domxref("Event/Event", "Event()")}} definierten Eigenschaften_ die folgenden Eigenschaften haben kann:

    - `tone` {{optional_inline}}
      - : Ein String, der ein einzelnes DTMF-Tonzeichen enthält, das gerade zu spielen begonnen hat, oder ein leerer String (`""`), um anzuzeigen, dass der vorherige Ton nicht mehr gespielt wird. Es ist standardmäßig `""`.
        Siehe [Tone characters](/de/docs/Web/API/RTCDTMFSender/toneBuffer#tone_buffer_format)
        für Details zu den erlaubten Zeichen.

### Rückgabewert

Ein neues {{domxref("RTCDTMFToneChangeEvent")}}-Objekt, konfiguriert gemäß den angegebenen Optionen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- [DTMF mit WebRTC verwenden](/de/docs/Web/API/WebRTC_API/Using_DTMF)
- Üblicher Zielort: {{domxref("RTCDTMFSender")}}.
