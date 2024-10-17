---
title: RTCTrackEvent
slug: Web/API/RTCTrackEvent
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{APIRef("WebRTC")}}

Die [WebRTC API](/de/docs/Web/API/WebRTC_API)-Schnittstelle **`RTCTrackEvent`** repräsentiert das [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignis, das gesendet wird, wenn ein neuer [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) zu einem [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) hinzugefügt wird, der Teil der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) ist.

Das Zielobjekt ist das `RTCPeerConnection`-Objekt, zu dem der Track hinzugefügt wird.

Dieses Ereignis wird von der WebRTC-Schicht an die Website oder Anwendung gesendet, daher werden Sie normalerweise kein `RTCTrackEvent` selbst instanziieren müssen.

{{InheritanceDiagram}}

## Konstruktor

- [`RTCTrackEvent()`](/de/docs/Web/API/RTCTrackEvent/RTCTrackEvent)
  - : Erstellt und gibt ein neues `RTCTrackEvent`-Objekt zurück. Sie werden wahrscheinlich keine neuen Track-Ereignisse selbst erstellen müssen, da diese typischerweise von der WebRTC-Infrastruktur erstellt und an den [`ontrack`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignishandler der Verbindung gesendet werden.

## Instanz-Eigenschaften

_Da `RTCTrackEvent` auf [`Event`](/de/docs/Web/API/Event) basiert, sind dessen Eigenschaften ebenfalls verfügbar._

- [`receiver`](/de/docs/Web/API/RTCTrackEvent/receiver) {{ReadOnlyInline}}
  - : Der [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver), der durch den Track verwendet wird, der zu der `RTCPeerConnection` hinzugefügt wurde.
- [`streams`](/de/docs/Web/API/RTCTrackEvent/streams) {{ReadOnlyInline}} {{optional_inline}}
  - : Ein Array von [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekten, von denen jedes einen der Medienstreams repräsentiert, zu denen der hinzugefügte [`track`](/de/docs/Web/API/RTCTrackEvent/track) gehört. Standardmäßig ist das Array leer, was auf einen streamlosen Track hinweist.
- [`track`](/de/docs/Web/API/RTCTrackEvent/track) {{ReadOnlyInline}}
  - : Der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), der zur Verbindung hinzugefügt wurde.
- [`transceiver`](/de/docs/Web/API/RTCTrackEvent/transceiver) {{ReadOnlyInline}}
  - : Der [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver), der durch den neuen Track verwendet wird.

## Track-Ereignistypen

Es gibt nur einen Typ von Track-Ereignis.

### `track`

Das [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignis wird an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn ein neuer Track zur Verbindung hinzugefügt wurde. Zu dem Zeitpunkt, zu dem das `track`-Ereignis an den [`ontrack`](/de/docs/Web/API/RTCPeerConnection/track_event)-Handler der `RTCPeerConnection` geliefert wird, hat das neue Medium seine Verhandlung für einen spezifischen [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) abgeschlossen (der durch die [`receiver`](/de/docs/Web/API/RTCTrackEvent/receiver)-Eigenschaft des Ereignisses angegeben ist).

Zusätzlich ist der durch den Receiver angegebene [`track`](/de/docs/Web/API/RTCRtpReceiver/track) derselbe wie der durch das Ereignis angegebene [`track`](/de/docs/Web/API/RTCTrackEvent/track), und der Track wurde zu allen zugehörigen entfernten [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekten hinzugefügt.

Sie können einen `track`-Ereignislistener hinzufügen, um benachrichtigt zu werden, wenn der neue Track verfügbar ist, damit Sie beispielsweise dessen Medien an ein {{HTMLElement("video")}}-Element anhängen können, entweder mit [`RTCPeerConnection.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder der `ontrack`-Ereignishandler-Eigenschaft.

> [!NOTE]
> Es kann hilfreich sein, sich daran zu erinnern, dass Sie das `track`-Ereignis erhalten, wenn ein neuer eingehender Track zu Ihrer Verbindung hinzugefügt wurde, und Sie rufen [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) auf, um einen Track zum entfernten Ende der Verbindung hinzuzufügen, was ein `track`-Ereignis beim entfernten Peer auslöst.

## Beispiel

Dieses einfache Beispiel erstellt einen Ereignislistener für das [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignis, das die [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) des {{HTMLElement("video")}}-Elements mit der ID `video-box` auf den ersten Stream in der im [`streams`](/de/docs/Web/API/RTCTrackEvent/streams)-Array des Ereignisses übergebenen Liste setzt.

```js
peerConnection.addEventListener(
  "track",
  (e) => {
    let videoElement = document.getElementById("video-box");
    videoElement.srcObject = e.streams[0];
  },
  false,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
