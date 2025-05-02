---
title: "RTCPeerConnection: track Ereignis"
short-title: track
slug: Web/API/RTCPeerConnection/track_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebRTC")}}

Das **`track`**-Ereignis wird an den `ontrack`-Ereignishandler auf [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)s gesendet, nachdem eine neue Spur zu einem [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) hinzugefügt wurde, der Teil der Verbindung ist.

Zum Zeitpunkt der Zustellung dieses Ereignisses wurde die neue Spur vollständig zur Peer-Verbindung hinzugefügt. Siehe [Track-Ereignistypen](/de/docs/Web/API/RTCTrackEvent#track_event_types) für Details.

Dieses Ereignis ist nicht abbrechbar und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

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
  - : Der [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver), der von der hinzugefügten Spur in der `RTCPeerConnection` verwendet wird.
- [`streams`](/de/docs/Web/API/RTCTrackEvent/streams) {{ReadOnlyInline}} {{optional_inline}}
  - : Ein Array von [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekten, von denen jedes einen der Medienstreams repräsentiert, zu denen die hinzugefügte [`track`](/de/docs/Web/API/RTCTrackEvent/track) gehört. Standardmäßig ist das Array leer, was auf eine spurlose Spur hinweist.
- [`track`](/de/docs/Web/API/RTCTrackEvent/track) {{ReadOnlyInline}}
  - : Die [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), die zur Verbindung hinzugefügt wurde.
- [`transceiver`](/de/docs/Web/API/RTCTrackEvent/transceiver) {{ReadOnlyInline}}
  - : Der [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver), der von der neuen Spur verwendet wird.

## Beispiele

Dieses Beispiel zeigt Code zur Erstellung einer neuen [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) und fügt einen neuen `track`-Ereignishandler hinzu.

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

pc.addEventListener(
  "track",
  (e) => {
    videoElement.srcObject = e.streams[0];
    hangupButton.disabled = false;
  },
  false,
);
```

Der Ereignishandler weist den ersten Stream der neuen Spur einem vorhandenen {{HTMLElement("video")}}-Element zu, das mithilfe der Variablen `videoElement` identifiziert wird.

Sie können die Ereignishandler-Funktion auch der `ontrack`-Eigenschaft zuweisen, anstatt [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) zu verwenden.

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
