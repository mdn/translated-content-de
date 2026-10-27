---
title: "RTCPeerConnection: track-Ereignis"
short-title: track
slug: Web/API/RTCPeerConnection/track_event
l10n:
  sourceCommit: ded0a8bc0b6622b4a95253e358c6a58a77ad2387
---

{{APIRef("WebRTC")}}

Das **`track`**-Ereignis wird an den `ontrack`-Event-Handler einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, nachdem einem [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver), der Teil der Verbindung ist, ein neuer Track hinzugefügt wurde.

Wenn dieses Ereignis ausgelöst wird, wurde der neue Track bereits vollständig zur Peer-Verbindung hinzugefügt. Einzelheiten finden Sie unter [Typen von Track-Ereignissen](/de/docs/Web/API/RTCTrackEvent#track_event_types).

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("track", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle eine Funktion zuweisen:

```js-nolint
ontrack = (event) => { }
```

## Ereignistyp

Ein [`RTCTrackEvent`](/de/docs/Web/API/RTCTrackEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("RTCTrackEvent")}}

## Beispiele

Dieses Beispiel zeigt Code, der eine neue [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellt und anschließend einen neuen Event-Handler für `track` hinzufügt.

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

Der Event-Handler weist den ersten Stream des neuen Tracks einem vorhandenen {{HTMLElement("video")}}-Element zu, das über die Variable `videoElement` identifiziert wird.

Sie können die Event-Handler-Funktion auch der Eigenschaft `ontrack` zuweisen, anstatt [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) zu verwenden. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `ontrack` hinzugefügte Event-Listener ersetzt werden.

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
