---
title: "RTCPeerConnection: track Ereignis"
short-title: track
slug: Web/API/RTCPeerConnection/track_event
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{APIRef("WebRTC")}}

Das **`track`**-Ereignis wird an den `ontrack`-Ereignishandler auf [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)s gesendet, nachdem ein neuer Track zu einem [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) hinzugefügt wurde, der Teil der Verbindung ist.

Zum Zeitpunkt der Zustellung dieses Ereignisses wurde der neue Track vollständig zur Peer-Verbindung hinzugefügt. Einzelheiten finden Sie unter [Track-Ereignistypen](/de/docs/Web/API/RTCTrackEvent#track_event_types).

Dieses Ereignis kann nicht abgebrochen werden und es wird nicht gebubbelt.

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
  - : Der [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver), der von dem hinzugefügten Track zur `RTCPeerConnection` verwendet wird.
- [`streams`](/de/docs/Web/API/RTCTrackEvent/streams) {{ReadOnlyInline}} {{optional_inline}}
  - : Ein Array von [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekten, die jeweils einen der Medienströme darstellen, zu denen der hinzugefügte [`track`](/de/docs/Web/API/RTCTrackEvent/track) gehört. Standardmäßig ist das Array leer, was auf einen streamlosen Track hinweist.
- [`track`](/de/docs/Web/API/RTCTrackEvent/track) {{ReadOnlyInline}}
  - : Der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), der zur Verbindung hinzugefügt wurde.
- [`transceiver`](/de/docs/Web/API/RTCTrackEvent/transceiver) {{ReadOnlyInline}}
  - : Der [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver), der vom neuen Track verwendet wird.

## Beispiele

Dieses Beispiel zeigt Code, der eine neue [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellt und dann einen neuen `track`-Ereignishandler hinzufügt.

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

Der Ereignishandler ordnet den ersten Stream des neuen Tracks einem bestehenden {{HTMLElement("video")}}-Element zu, das mit der Variablen `videoElement` identifiziert wird.

Sie können die Ereignishandlungsfunktion auch der `ontrack`-Eigenschaft zuweisen, anstatt [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) zu verwenden.

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
