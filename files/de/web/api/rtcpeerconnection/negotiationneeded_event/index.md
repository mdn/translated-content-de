---
title: "RTCPeerConnection: negotiationneeded event"
short-title: negotiationneeded
slug: Web/API/RTCPeerConnection/negotiationneeded_event
l10n:
  sourceCommit: f4c221962681b1472cd57da60379ad7825fe5081
---

{{APIRef("WebRTC")}}

Ein **`negotiationneeded`**-Ereignis wird an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn eine Aushandlung der Verbindung über den Signalisierungskanal erforderlich ist.
Dies geschieht sowohl während der anfänglichen Einrichtung der Verbindung als auch immer dann, wenn eine Änderung der Kommunikationsumgebung eine Neukonfiguration der Verbindung erfordert.

Das `negotiationneeded`-Ereignis wird erstmals an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn Medien erstmals zur Verbindung hinzugefügt werden. Dadurch wird der Prozess der {{Glossary("ICE", "ICE")}}-Aushandlung gestartet, indem Ihr Code angewiesen wird, mit dem Austausch von ICE-Kandidaten über den Signalisierungsserver zu beginnen. Eine Beschreibung des Signalisierungsprozesses, der mit einem `negotiationneeded`-Ereignis beginnt, finden Sie unter [Ablauf der Signalisierungstransaktion](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling#signaling_transaction_flow).

Dieses Ereignis ist nicht abbrechbar und wird nicht weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Event-Handler-Eigenschaft fest.

```js-nolint
addEventListener("negotiationneeded", (event) => { })

onnegotiationneeded = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

In diesem Beispiel verwenden wir [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um einen Event-Handler für `negotiationneeded` zu erstellen. Seine Aufgabe besteht darin, ein {{Glossary("SDP", "SDP")}}-Angebot zu erstellen und es über den Signalisierungskanal an den Remote-Peer zu senden.

```js
pc.addEventListener("negotiationneeded", (ev) => {
  pc.createOffer()
    .then((offer) => pc.setLocalDescription(offer))
    .then(() =>
      sendSignalingMessage({
        type: "video-offer",
        sdp: pc.localDescription,
      }),
    )
    .catch((err) => {
      // handle error
    });
});
```

Nach dem Erstellen des Angebots wird das lokale Ende durch Aufrufen von [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) konfiguriert; anschließend wird eine Signalisierungsnachricht erstellt und über den Signalisierungsserver an den Remote-Peer gesendet, um dieses Angebot mit dem anderen Peer zu teilen. Der andere Peer sollte diese Nachricht erkennen und anschließend eine eigene [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellen, die Remote-Beschreibung mit [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) festlegen und dann eine Antwort erstellen, die an den Peer gesendet wird, der das Angebot gemacht hat.

Sie können auch einen Event-Handler für das `negotiationneeded`-Ereignis festlegen, indem Sie die Event-Handler-Funktion der Eigenschaft `onnegotiationneeded` zuweisen:

```js
pc.onnegotiationneeded = (ev) => {
  pc.createOffer()
    .then((offer) => pc.setLocalDescription(offer))
    .then(() =>
      sendSignalingMessage({
        type: "video-offer",
        sdp: pc.localDescription,
      }),
    )
    .catch((err) => {
      // handle error
    });
};
```

Ein ausführlicheres Beispiel finden Sie unter [Aushandlung starten](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling#starting_negotiation).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
- [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)
- [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity)
- [Einführung in WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)
