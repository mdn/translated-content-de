---
title: RTCTrackEvent
slug: Web/API/RTCTrackEvent
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die [WebRTC API](/de/docs/Web/API/WebRTC_API) Schnittstelle **`RTCTrackEvent`** repräsentiert das [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignis, das gesendet wird, wenn ein neues [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) zu einem [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) hinzugefügt wird, der Teil der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) ist.

Das Ziel ist das `RTCPeerConnection`-Objekt, zu dem der Track hinzugefügt wird.

Dieses Ereignis wird von der WebRTC-Schicht an die Webseite oder Anwendung gesendet, sodass Sie in der Regel kein `RTCTrackEvent` selbst instanziieren müssen.

{{InheritanceDiagram}}

## Konstruktor

- [`RTCTrackEvent()`](/de/docs/Web/API/RTCTrackEvent/RTCTrackEvent)
  - : Erstellt und gibt ein neues `RTCTrackEvent`-Objekt zurück. Sie werden wahrscheinlich keine neuen Track-Ereignisse selbst erstellen müssen, da sie typischerweise von der WebRTC-Infrastruktur erstellt und an den [`ontrack`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignishandler der Verbindung gesendet werden.

## Instanz-Eigenschaften

_Da `RTCTrackEvent` auf [`Event`](/de/docs/Web/API/Event) basiert, sind dessen Eigenschaften ebenfalls verfügbar._

- [`receiver`](/de/docs/Web/API/RTCTrackEvent/receiver) {{ReadOnlyInline}}
  - : Der [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver), der von dem Track verwendet wird, der der `RTCPeerConnection` hinzugefügt wurde.
- [`streams`](/de/docs/Web/API/RTCTrackEvent/streams) {{ReadOnlyInline}} {{optional_inline}}
  - : Ein Array von [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekten, die jeweils einen der Medienströme darstellen, zu denen der hinzugefügte [`track`](/de/docs/Web/API/RTCTrackEvent/track) gehört. Standardmäßig ist das Array leer, was auf einen streamlosen Track hinweist.
- [`track`](/de/docs/Web/API/RTCTrackEvent/track) {{ReadOnlyInline}}
  - : Der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), der der Verbindung hinzugefügt wurde.
- [`transceiver`](/de/docs/Web/API/RTCTrackEvent/transceiver) {{ReadOnlyInline}}
  - : Der [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver), der von dem neuen Track verwendet wird.

## Track-Ereignistypen

Es gibt nur einen Typ von Track-Ereignis.

### `track`

Das [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignis wird an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn ein neuer Track zur Verbindung hinzugefügt wurde. Zu dem Zeitpunkt, an dem das `track`-Ereignis an den [`ontrack`](/de/docs/Web/API/RTCPeerConnection/track_event)-Handler der `RTCPeerConnection` geliefert wird, hat das neue Medium seine Verhandlung für einen bestimmten [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) abgeschlossen (der durch die [`receiver`](/de/docs/Web/API/RTCTrackEvent/receiver)-Eigenschaft des Ereignisses angegeben wird).

Zusätzlich ist der vom Receiver angegebene [`track`](/de/docs/Web/API/RTCRtpReceiver/track) derselbe, der durch die [`track`](/de/docs/Web/API/RTCTrackEvent/track)-Eigenschaft des Ereignisses angegeben wird, und der Track wurde zu allen zugehörigen entfernten [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekten hinzugefügt.

Sie können einen `track`-Ereignislistener hinzufügen, um benachrichtigt zu werden, wenn der neue Track verfügbar ist, sodass Sie beispielsweise sein Medium an ein {{HTMLElement("video")}}-Element anhängen können, entweder durch Verwendung von [`RTCPeerConnection.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder der `ontrack`-Ereignishandlereigenschaft.

> [!NOTE]
> Es kann hilfreich sein, sich vor Augen zu halten, dass Sie das `track`-Ereignis empfangen, wenn ein neuer eingehender Track zu Ihrer Verbindung hinzugefügt wurde, und dass Sie [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) aufrufen, um einen Track zur entfernten Seite der Verbindung hinzuzufügen, wodurch ein `track`-Ereignis auf dem entfernten Peer ausgelöst wird.

## Beispiel

Dieses einfache Beispiel erstellt einen Ereignislistener für das [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignis, der die [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) des {{HTMLElement("video")}}-Elements mit der ID `videobox` auf den ersten Stream in der Liste setzt, die im [`streams`](/de/docs/Web/API/RTCTrackEvent/streams)-Array des Ereignisses übergeben wird.

```js
peerConnection.addEventListener(
  "track",
  (e) => {
    let videoElement = document.getElementById("videobox");
    videoElement.srcObject = e.streams[0];
  },
  false,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
