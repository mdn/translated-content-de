---
title: "RTCTrackEvent: RTCTrackEvent() Konstruktor"
short-title: RTCTrackEvent()
slug: Web/API/RTCTrackEvent/RTCTrackEvent
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("WebRTC")}}

Der **`RTCTrackEvent()`** Konstruktor erstellt und gibt ein neues {{domxref("RTCTrackEvent")}} Objekt zurück,
das konfiguriert ist, um die Spur zu beschreiben, die zur {{domxref("RTCPeerConnection")}} hinzugefügt wurde.

Im Allgemeinen werden Sie diesen Konstruktor nicht verwenden müssen, da `RTCTrackEvent`
Objekte von WebRTC erstellt und dem `RTCPeerConnector` in Ihrem
{{domxref("RTCPeerConnection.track_event", "ontrack")}} Event-Handler entsprechend übergeben werden.

## Syntax

```js-nolint
new RTCTrackEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist case-sensitiv und Browser setzen es immer auf `track`.
- `options`
  - : Ein Objekt, das _zusätzlich zu den im {{domxref("Event/Event", "Event()")}} definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `receiver`
      - : Der {{domxref("RTCRtpReceiver")}}, der verwendet wird, um die Mediendaten der Spur zu empfangen.
    - `streams` {{optional_inline}}
      - : Ein Array von {{domxref("MediaStream")}} Objekten, die jeweils einen der Streams repräsentieren, die zur entsprechenden Spur des Ereignisses gehören.
        Es standardmäßig auf ein leeres Array gesetzt.
    - `track`
      - : Der {{domxref("MediaStreamTrack")}}, mit dem das Ereignis verknüpft ist.
    - `transceiver`
      - : Der {{domxref("RTCRtpTransceiver")}}, der mit dem Ereignis assoziiert ist.

### Rückgabewert

Ein neues {{domxref("RTCTrackEvent")}}, das eine Spur beschreibt, die der
`RTCPeerConnection` hinzugefügt wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
