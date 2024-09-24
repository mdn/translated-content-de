---
title: "RTCPeerConnection: track-Ereignis"
short-title: track
slug: Web/API/RTCPeerConnection/track_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebRTC")}}

Das **`track`**-Ereignis wird an den `ontrack`-Ereignishandler auf {{domxref("RTCPeerConnection")}}s gesendet, nachdem ein neuer Track zu einem {{domxref("RTCRtpReceiver")}} hinzugefügt wurde, der Teil der Verbindung ist.

Zu dem Zeitpunkt, an dem dieses Ereignis ausgeliefert wird, ist der neue Track vollständig zur Peer-Verbindung hinzugefügt. Weitere Details finden Sie unter [Track-Ereignistypen](/de/docs/Web/API/RTCTrackEvent#track_event_types).

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandlereigenschaft.

```js
addEventListener("track", (event) => {});

ontrack = (event) => {};
```

## Ereignistyp

Ein {{domxref("RTCTrackEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("RTCTrackEvent")}}

## Ereigniseigenschaften

_Da `RTCTrackEvent` auf dem {{domxref("Event")}} basiert, sind dessen Eigenschaften ebenfalls verfügbar._

- {{domxref("RTCTrackEvent.receiver", "receiver")}} {{ReadOnlyInline}}
  - : Der {{domxref("RTCRtpReceiver")}}, der vom hinzugefügten Track zur `RTCPeerConnection` verwendet wird.
- {{domxref("RTCTrackEvent.streams", "streams")}} {{ReadOnlyInline}} {{optional_inline}}
  - : Ein Array von {{domxref("MediaStream")}}-Objekten, von denen jedes einen der Mediastreams repräsentiert, zu denen der hinzugefügte {{domxref("RTCTrackEvent.track", "track")}} gehört. Standardmäßig ist das Array leer, was auf einen streamlosen Track hinweist.
- {{domxref("RTCTrackEvent.track", "track")}} {{ReadOnlyInline}}
  - : Der {{domxref("MediaStreamTrack")}}, der zur Verbindung hinzugefügt wurde.
- {{domxref("RTCTrackEvent.transceiver", "transceiver")}} {{ReadOnlyInline}}
  - : Der {{domxref("RTCRtpTransceiver")}}, der von dem neuen Track verwendet wird.

## Beispiele

Dieses Beispiel zeigt Code, der eine neue {{domxref("RTCPeerConnection")}} erstellt und dann einen neuen `track`-Ereignishandler hinzufügt.

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

Der Ereignishandler weist den ersten Stream des neuen Tracks einem vorhandenen {{HTMLElement("video")}}-Element zu, das mit der Variable `videoElement` identifiziert wird.

Sie können die Ereignishandlerfunktion auch der `ontrack`-Eigenschaft zuweisen, anstatt {{domxref("EventTarget.addEventListener", "addEventListener()")}} zu verwenden.

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
