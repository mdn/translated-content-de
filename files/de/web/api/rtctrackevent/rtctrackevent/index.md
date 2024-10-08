---
title: "RTCTrackEvent: RTCTrackEvent() Konstruktor"
short-title: RTCTrackEvent()
slug: Web/API/RTCTrackEvent/RTCTrackEvent
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("WebRTC")}}

Der **`RTCTrackEvent()`**-Konstruktor erstellt und gibt ein neues [`RTCTrackEvent`](/de/docs/Web/API/RTCTrackEvent)-Objekt zurück, das konfiguriert ist, um den Track zu beschreiben, der zur [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) hinzugefügt wurde.

Im Allgemeinen werden Sie diesen Konstruktor nicht benötigen, da `RTCTrackEvent`-Objekte von WebRTC erstellt und an den [`ontrack`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignishandler Ihres `RTCPeerConnector` nach Bedarf geliefert werden.

## Syntax

```js-nolint
new RTCTrackEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist groß- und kleinschreibungsempfindlich und Browser setzen es immer auf `track`.
- `options`
  - : Ein Objekt, das, _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_, folgende Eigenschaften haben kann:
    - `receiver`
      - : Der [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver), der verwendet wird, um die Medien des Tracks zu empfangen.
    - `streams` {{optional_inline}}
      - : Ein Array von [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekten, die jeweils die Streams darstellen, die den entsprechenden Track des Ereignisses bilden.
        Standardmäßig ist es ein leeres Array.
    - `track`
      - : Der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), mit dem das Ereignis verknüpft ist.
    - `transceiver`
      - : Der [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver), der mit dem Ereignis verknüpft ist.

### Rückgabewert

Ein neues [`RTCTrackEvent`](/de/docs/Web/API/RTCTrackEvent), das einen Track beschreibt, der zur `RTCPeerConnection` hinzugefügt wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
