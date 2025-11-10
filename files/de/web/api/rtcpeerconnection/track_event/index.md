---
title: "RTCPeerConnection: track-Ereignis"
short-title: track
slug: Web/API/RTCPeerConnection/track_event
l10n:
  sourceCommit: f71683f74da0078d9371c4d0c1ff9d3898fc7b59
---

{{APIRef("WebRTC")}}

Das **`track`**-Ereignis wird an den `ontrack`-Ereignis-Handler auf [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)s gesendet, nachdem ein neuer Track zu einem [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) hinzugefügt wurde, der Teil der Verbindung ist.

Zu dem Zeitpunkt, an dem dieses Ereignis ausgeliefert wird, wurde der neue Track vollständig zur Peer-Verbindung hinzugefügt. Siehe [Track-Ereignistypen](/de/docs/Web/API/RTCTrackEvent#track_event_types) für Details.

Dieses Ereignis kann nicht abgebrochen werden und steigt nicht auf.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("track", (event) => { })

ontrack = (event) => { }
```

## Ereignistyp

Ein [`RTCTrackEvent`](/de/docs/Web/API/RTCTrackEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("RTCTrackEvent")}}

## Ereigniseigenschaften

_Da `RTCTrackEvent` auf [`Event`](/de/docs/Web/API/Event) basiert, sind dessen Eigenschaften ebenfalls verfügbar._

- [`receiver`](/de/docs/Web/API/RTCTrackEvent/receiver) {{ReadOnlyInline}}
  - : Der [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver), der von dem Track verwendet wird, der zur `RTCPeerConnection` hinzugefügt wurde.
- [`streams`](/de/docs/Web/API/RTCTrackEvent/streams) {{ReadOnlyInline}} {{optional_inline}}
  - : Ein Array von [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekten, von denen jedes einen der Mediastreams darstellt, zu denen der hinzugefügte [`track`](/de/docs/Web/API/RTCTrackEvent/track) gehört. Standardmäßig ist das Array leer, was einen streamlosen Track anzeigt.
- [`track`](/de/docs/Web/API/RTCTrackEvent/track) {{ReadOnlyInline}}
  - : Der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), der zur Verbindung hinzugefügt wurde.
- [`transceiver`](/de/docs/Web/API/RTCTrackEvent/transceiver) {{ReadOnlyInline}}
  - : Der [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver), der von dem neuen Track verwendet wird.

## Beispiele

Dieses Beispiel zeigt Code, der eine neue [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellt und dann einen neuen `track`-Ereignis-Handler hinzufügt.

```js
pc = new RTCPeerConnection({
  iceServers: [
    {
      urls: "turn:fake.turn-server.url",
      username: "some username",
      credential: "some-password",
    },
  ],
});

pc.addEventListener("track", (e) => {
  videoElement.srcObject = e.streams[0];
  hangupButton.disabled = false;
});
```

Der Event-Handler weist den ersten Stream des neuen Tracks einem vorhandenen {{HTMLElement("video")}}-Element zu, das durch die Variable `videoElement` identifiziert wird.

Sie können die Event-Handler-Funktion auch der `ontrack`-Eigenschaft zuweisen, anstatt [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) zu verwenden.

```js
pc.ontrack = (e) => {
  videoElement.srcObject = e.streams[0];
  hangupButton.disabled = false;
  return false;
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
