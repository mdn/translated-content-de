---
title: "RTCPeerConnection: track-Ereignis"
short-title: track
slug: Web/API/RTCPeerConnection/track_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("WebRTC")}}

Das **`track`**-Ereignis wird an den `ontrack` Ereignis-Handler auf [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)s gesendet, nachdem ein neuer Track zu einem [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) hinzugefügt wurde, der Teil der Verbindung ist.

Zum Zeitpunkt der Übermittlung dieses Ereignisses wurde der neue Track vollständig zur Peer-Verbindung hinzugefügt. Siehe [Track-Ereignistypen](/de/docs/Web/API/RTCTrackEvent#track_event_types) für Details.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("track", (event) => { })

ontrack = (event) => { }
```

## Ereignistyp

Ein [`RTCTrackEvent`](/de/docs/Web/API/RTCTrackEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("RTCTrackEvent")}}

## Beispiele

Dieses Beispiel zeigt Code, der eine neue [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellt und dann einen neuen `track` Ereignis-Handler hinzufügt.

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

Der Ereignis-Handler weist den ersten Stream des neuen Tracks einem vorhandenen {{HTMLElement("video")}}-Element zu, das mit der Variablen `videoElement` identifiziert wird.

Sie können die Ereignis-Handler-Funktion auch der Eigenschaft `ontrack` zuweisen, anstatt [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) zu verwenden.

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
