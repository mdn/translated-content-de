---
title: "RTCPeerConnection: track Ereignis"
short-title: track
slug: Web/API/RTCPeerConnection/track_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebRTC")}}

Das **`track`** Ereignis wird an den `ontrack` Ereignishandler auf [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)s gesendet, nachdem ein neuer Track zu einem [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) hinzugefügt wurde, der Teil der Verbindung ist.

Wenn dieses Ereignis ausgeliefert wird, wurde der neue Track vollständig zur Peer-Verbindung hinzugefügt. Siehe [Track Ereignistypen](/de/docs/Web/API/RTCTrackEvent#track_event_types) für Details.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("track", (event) => {});

ontrack = (event) => {};
```

## Ereignistyp

Ein [`RTCTrackEvent`](/de/docs/Web/API/RTCTrackEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("RTCTrackEvent")}}

## Ereigniseigenschaften

_Da `RTCTrackEvent` auf [`Event`](/de/docs/Web/API/Event) basiert, sind dessen Eigenschaften ebenfalls verfügbar._

- [`receiver`](/de/docs/Web/API/RTCTrackEvent/receiver) {{ReadOnlyInline}}
  - : Der [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver), der vom hinzufügten Track in der `RTCPeerConnection` verwendet wird.
- [`streams`](/de/docs/Web/API/RTCTrackEvent/streams) {{ReadOnlyInline}} {{optional_inline}}
  - : Ein Array von [`MediaStream`](/de/docs/Web/API/MediaStream) Objekten, die jeweils einen der Medienstreams darstellen, zu denen der hinzugefügte [`track`](/de/docs/Web/API/RTCTrackEvent/track) gehört. Standardmäßig ist das Array leer, was auf einen Stream-losen Track hinweist.
- [`track`](/de/docs/Web/API/RTCTrackEvent/track) {{ReadOnlyInline}}
  - : Der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), der zur Verbindung hinzugefügt wurde.
- [`transceiver`](/de/docs/Web/API/RTCTrackEvent/transceiver) {{ReadOnlyInline}}
  - : Der [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver), der vom neuen Track verwendet wird.

## Beispiele

Dieses Beispiel zeigt Code, der eine neue [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellt und dann einen neuen `track` Ereignishandler hinzufügt.

```js
pc = new RTCPeerConnection({
  iceServers: [
    {
      urls: "turn:fake.turnserver.url",
      username: "someusername",
      credential: "somepassword",
    },
  ],
});

pc.addEventListener(
  "track",
  (e) => {
    videoElement.srcObject = e.streams[0];
    hangupButton.disabled = false;
  },
  false,
);
```

Der Ereignishandler weist den ersten Stream des neuen Tracks einem vorhandenen {{HTMLElement("video")}} Element zu, welches über die Variable `videoElement` identifiziert wird.

Sie können die Ereignishandlerfunktion auch der `ontrack` Eigenschaft zuweisen, anstatt [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) zu verwenden.

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
