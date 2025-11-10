---
title: "RTCTrackEvent: RTCTrackEvent() Konstruktor"
short-title: RTCTrackEvent()
slug: Web/API/RTCTrackEvent/RTCTrackEvent
l10n:
  sourceCommit: c486da8298cdfdba0556a190d8e3f92e9aa117bb
---

{{APIRef("WebRTC")}}

Der **`RTCTrackEvent()`** Konstruktor erstellt und gibt ein neues [`RTCTrackEvent`](/de/docs/Web/API/RTCTrackEvent)-Objekt zurück, das konfiguriert ist, um den Track zu beschreiben, der der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) hinzugefügt wurde.

Im Allgemeinen müssen Sie diesen Konstruktor nicht verwenden, da `RTCTrackEvent`-Objekte von WebRTC erstellt und Ihrem `RTCPeerConnection`-Objekt durch den [`ontrack`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignishandler je nach Bedarf geliefert werden.

## Syntax

```js-nolint
new RTCTrackEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses. Es ist groß-/kleinschreibungssensitiv und Browser setzen ihn immer auf `track`.
- `options`
  - : Ein Objekt, das zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften die folgenden Eigenschaften haben kann:
    - `receiver`
      - : Der [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver), der verwendet wird, um die Mediendaten des Tracks zu empfangen.
    - `streams` {{optional_inline}}
      - : Ein Array von [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekten, das jeweils einen der Streams repräsentiert, die dem entsprechenden Track des Ereignisses entsprechen. Standardmäßig ist es ein leeres Array.
    - `track`
      - : Der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), mit dem das Ereignis verknüpft ist.
    - `transceiver`
      - : Der [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver), der mit dem Ereignis verknüpft ist.

### Rückgabewert

Ein neues [`RTCTrackEvent`](/de/docs/Web/API/RTCTrackEvent), das einen Track beschreibt, der der `RTCPeerConnection` hinzugefügt wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
