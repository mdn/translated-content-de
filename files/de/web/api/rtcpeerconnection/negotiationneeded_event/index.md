---
title: "RTCPeerConnection: negotiationneeded-Ereignis"
short-title: negotiationneeded
slug: Web/API/RTCPeerConnection/negotiationneeded_event
l10n:
  sourceCommit: ded0a8bc0b6622b4a95253e358c6a58a77ad2387
---

{{APIRef("WebRTC")}}

Ein **`negotiationneeded`**-Ereignis wird an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn die Verbindung über den Signalisierungskanal ausgehandelt werden muss. Dies geschieht sowohl beim erstmaligen Aufbau der Verbindung als auch immer dann, wenn eine Änderung der Kommunikationsumgebung eine Neukonfiguration der Verbindung erfordert.

Das `negotiationneeded`-Ereignis wird erstmals an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn der Verbindung zum ersten Mal Medien hinzugefügt werden. Dadurch beginnt die {{Glossary("ICE", "ICE")}}-Aushandlung: Ihr Code wird angewiesen, ICE-Kandidaten über den Signalisierungsserver auszutauschen. Eine Beschreibung des Signalisierungsprozesses, der mit einem `negotiationneeded`-Ereignis beginnt, finden Sie unter [Ablauf der Signalisierungstransaktion](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling#signaling_transaction_flow).

Dieses Ereignis kann nicht abgebrochen werden und wird nicht nach oben weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("negotiationneeded", (event) => { })
```

Alternativ können Sie die Funktion der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onnegotiationneeded = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

In diesem Beispiel verwenden wir [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um einen Event-Handler für `negotiationneeded` einzurichten. Er erstellt ein {{Glossary("SDP", "SDP")}}-Angebot und sendet es über den Signalisierungskanal an den entfernten Peer.

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

Nach dem Erstellen des Angebots wird die lokale Seite durch einen Aufruf von [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) konfiguriert. Anschließend wird eine Signalisierungsnachricht erstellt und über den Signalisierungsserver an den entfernten Peer gesendet, um ihm das Angebot zu übermitteln. Der andere Peer sollte diese Nachricht erkennen, eine eigene [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellen, die Remote Description mit [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) festlegen und anschließend eine Antwort erstellen, die er an den anbietenden Peer zurücksendet.

Sie können auch einen Event-Handler für das `negotiationneeded`-Ereignis festlegen, indem Sie die Event-Handler-Funktion der Eigenschaft `onnegotiationneeded` zuweisen. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onnegotiationneeded` hinzugefügte Event-Listener ersetzt werden:

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

- [WebRTC-API](/de/docs/Web/API/WebRTC_API)
- [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
- [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)
- [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity)
- [Einführung in WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)
