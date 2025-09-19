---
title: RTCTrackEvent
slug: Web/API/RTCTrackEvent
l10n:
  sourceCommit: f71683f74da0078d9371c4d0c1ff9d3898fc7b59
---

{{APIRef("WebRTC")}}

Die [WebRTC API](/de/docs/Web/API/WebRTC_API) Schnittstelle **`RTCTrackEvent`** repräsentiert das [`track`](/de/docs/Web/API/RTCPeerConnection/track_event) Ereignis, welches gesendet wird, wenn ein neuer [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) zu einem [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) hinzugefügt wird, der Teil der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) ist.

Das Ziel ist das `RTCPeerConnection` Objekt, zu dem der Track hinzugefügt wird.

Dieses Ereignis wird von der WebRTC-Schicht an die Website oder Anwendung gesendet, daher müssen Sie normalerweise kein `RTCTrackEvent` selbst instanziieren.

{{InheritanceDiagram}}

## Konstruktor

- [`RTCTrackEvent()`](/de/docs/Web/API/RTCTrackEvent/RTCTrackEvent)
  - : Erstellt und gibt ein neues `RTCTrackEvent` Objekt zurück. Sie werden wahrscheinlich keine neuen Track-Ereignisse selbst erstellen müssen, da diese typischerweise von der WebRTC-Infrastruktur erstellt und an den [`ontrack`](/de/docs/Web/API/RTCPeerConnection/track_event) Ereignishandler der Verbindung gesendet werden.

## Instanz-Eigenschaften

_Da `RTCTrackEvent` auf [`Event`](/de/docs/Web/API/Event) basiert, sind seine Eigenschaften ebenfalls verfügbar._

- [`receiver`](/de/docs/Web/API/RTCTrackEvent/receiver) {{ReadOnlyInline}}
  - : Der [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver), der von dem Track verwendet wird, welcher zu der `RTCPeerConnection` hinzugefügt wurde.
- [`streams`](/de/docs/Web/API/RTCTrackEvent/streams) {{ReadOnlyInline}} {{optional_inline}}
  - : Ein Array von [`MediaStream`](/de/docs/Web/API/MediaStream) Objekten, die jeweils einen der Medienströme repräsentieren, zu denen der hinzugefügte [`track`](/de/docs/Web/API/RTCTrackEvent/track) gehört. Standardmäßig ist das Array leer, was auf einen Track ohne Stream hinweist.
- [`track`](/de/docs/Web/API/RTCTrackEvent/track) {{ReadOnlyInline}}
  - : Der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), der zur Verbindung hinzugefügt wurde.
- [`transceiver`](/de/docs/Web/API/RTCTrackEvent/transceiver) {{ReadOnlyInline}}
  - : Der [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver), der von dem neuen Track verwendet wird.

## Track-Ereignistypen

Es gibt nur einen Typ von Track-Ereignis.

### `track`

Das [`track`](/de/docs/Web/API/RTCPeerConnection/track_event) Ereignis wird an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn ein neuer Track zur Verbindung hinzugefügt wurde. Zu dem Zeitpunkt, an dem das `track` Ereignis an den [`ontrack`](/de/docs/Web/API/RTCPeerConnection/track_event) Handler der `RTCPeerConnection` übermittelt wird, hat das neue Medium seine Verhandlung für einen bestimmten [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) abgeschlossen (der durch die Eigenschaft [`receiver`](/de/docs/Web/API/RTCTrackEvent/receiver) des Ereignisses angegeben wird).

Zusätzlich ist der durch den Receiver spezifizierte [`track`](/de/docs/Web/API/RTCRtpReceiver/track) identisch mit dem im Ereignis angegebenen [`track`](/de/docs/Web/API/RTCTrackEvent/track), und der Track wurde zu allen zugehörigen entfernten [`MediaStream`](/de/docs/Web/API/MediaStream) Objekten hinzugefügt.

Sie können einen Event-Listener für `track` hinzufügen, um benachrichtigt zu werden, wenn der neue Track verfügbar ist, sodass Sie dessen Medien zum Beispiel an ein {{HTMLElement("video")}} Element anhängen können, entweder durch die Verwendung von [`RTCPeerConnection.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder der `ontrack` Eventhandler-Eigenschaft.

> [!NOTE]
> Es kann hilfreich sein, sich zu merken, dass Sie das `track` Ereignis erhalten, wenn ein neuer eingehender Track Ihrer Verbindung hinzugefügt wurde, und Sie rufen [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) auf, um einen Track an das entfernte Ende der Verbindung hinzuzufügen, wodurch ein `track` Ereignis beim remote Peer ausgelöst wird.

## Beispiel

Dieses einfache Beispiel erstellt einen Event-Listener für das [`track`](/de/docs/Web/API/RTCPeerConnection/track_event) Ereignis, der die [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) des {{HTMLElement("video")}} Elements mit der ID `video-box` auf den ersten Stream in der Liste setzt, die im [`streams`](/de/docs/Web/API/RTCTrackEvent/streams) Array des Ereignisses übergeben wird.

```js
peerConnection.addEventListener("track", (e) => {
  let videoElement = document.getElementById("video-box");
  videoElement.srcObject = e.streams[0];
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
