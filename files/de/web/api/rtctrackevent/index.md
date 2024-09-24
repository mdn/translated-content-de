---
title: RTCTrackEvent
slug: Web/API/RTCTrackEvent
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die [WebRTC API](/de/docs/Web/API/WebRTC_API) Schnittstelle **`RTCTrackEvent`** repräsentiert das {{domxref("RTCPeerConnection.track_event", "track")}} Ereignis, das gesendet wird, wenn ein neuer {{domxref("MediaStreamTrack")}} zu einem {{domxref("RTCRtpReceiver")}} hinzugefügt wird, der Teil der {{domxref("RTCPeerConnection")}} ist.

Das Ziel ist das `RTCPeerConnection` Objekt, zu dem der Track hinzugefügt wird.

Dieses Ereignis wird von der WebRTC-Schicht an die Website oder Anwendung gesendet, daher müssen Sie normalerweise kein `RTCTrackEvent` selbst instanziieren.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("RTCTrackEvent.RTCTrackEvent", "RTCTrackEvent()")}}
  - : Erstellt und gibt ein neues `RTCTrackEvent` Objekt zurück. Sie werden wahrscheinlich keine neuen Track-Ereignisse selbst erstellen müssen, da sie typischerweise von der WebRTC-Infrastruktur erstellt und an den {{domxref("RTCPeerConnection.track_event", "ontrack")}} Ereignishandler der Verbindung gesendet werden.

## Instanz-Eigenschaften

_Da `RTCTrackEvent` auf {{domxref("Event")}} basiert, sind auch dessen Eigenschaften verfügbar._

- {{domxref("RTCTrackEvent.receiver", "receiver")}} {{ReadOnlyInline}}
  - : Der {{domxref("RTCRtpReceiver")}}, der von dem Track verwendet wird, der zur `RTCPeerConnection` hinzugefügt wurde.
- {{domxref("RTCTrackEvent.streams", "streams")}} {{ReadOnlyInline}} {{optional_inline}}
  - : Ein Array von {{domxref("MediaStream")}} Objekten, von denen jedes einen der Medienstreams darstellt, zu denen der hinzugefügte {{domxref("RTCTrackEvent.track", "track")}} gehört. Standardmäßig ist das Array leer, was einen streamlosen Track anzeigt.
- {{domxref("RTCTrackEvent.track", "track")}} {{ReadOnlyInline}}
  - : Der {{domxref("MediaStreamTrack")}}, der zur Verbindung hinzugefügt wurde.
- {{domxref("RTCTrackEvent.transceiver", "transceiver")}} {{ReadOnlyInline}}
  - : Der {{domxref("RTCRtpTransceiver")}}, der vom neuen Track verwendet wird.

## Track-Ereignistypen

Es gibt nur eine Art von Track-Ereignis.

### `track`

Das {{domxref("RTCPeerConnection.track_event", "track")}} Ereignis wird an die {{domxref("RTCPeerConnection")}} gesendet, wenn ein neuer Track zur Verbindung hinzugefügt wurde. Wenn das `track` Ereignis an den {{domxref("RTCPeerConnection.track_event", "ontrack")}} Handler der `RTCPeerConnection` ausgeliefert wird, hat das neue Medium seine Verhandlung für einen spezifischen {{domxref("RTCRtpReceiver")}} (der durch die {{domxref("RTCTrackEvent.receiver", "receiver")}} Eigenschaft des Ereignisses spezifiziert wird) abgeschlossen.

Darüber hinaus ist der {{domxref("MediaStreamTrack")}}, der durch den {{domxref("RTCRtpReceiver.track", "track")}} des Empfängers spezifiziert wird, derselbe, der durch den {{domxref("RTCTrackEvent.track", "track")}} des Ereignisses spezifiziert wird, und der Track wurde zu allen zugehörigen entfernten {{domxref("MediaStream")}} Objekten hinzugefügt.

Sie können einen `track` Ereignislistener hinzufügen, um benachrichtigt zu werden, wenn der neue Track verfügbar ist, sodass Sie beispielsweise dessen Medien an ein {{HTMLElement("video")}} Element anhängen können, entweder mit {{domxref("EventTarget.addEventListener", "RTCPeerConnection.addEventListener()")}} oder der `ontrack` Ereignishandler-Eigenschaft.

> [!NOTE]
> Es kann hilfreich sein, sich zu merken, dass Sie das `track` Ereignis erhalten, wenn ein neuer eingehender Track zu Ihrer Verbindung hinzugefügt wurde, und Sie {{domxref("RTCPeerConnection.addTrack", "addTrack()")}} aufrufen, um einen Track an das entfernte Ende der Verbindung hinzuzufügen, wodurch ein `track` Ereignis am entfernten Peer ausgelöst wird.

## Beispiel

Dieses einfache Beispiel erstellt einen Ereignislistener für das {{domxref("RTCPeerConnection.track_event", "track")}} Ereignis, das die {{domxref("HTMLMediaElement.srcObject", "srcObject")}} des {{HTMLElement("video")}} Elements mit der ID `videobox` auf den ersten Stream in der Liste setzt, die im {{domxref("RTCTrackEvent.streams", "streams")}} Array des Ereignisses übergeben wird.

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
