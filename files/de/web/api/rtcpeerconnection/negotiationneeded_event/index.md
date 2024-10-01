---
title: "RTCPeerConnection: negotiationneeded Ereignis"
short-title: negotiationneeded
slug: Web/API/RTCPeerConnection/negotiationneeded_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebRTC")}}

Ein **`negotiationneeded`** Ereignis wird an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn eine Aushandlung der Verbindung über den Signalisierungskanal erforderlich ist. Dies geschieht sowohl während der anfänglichen Einrichtung der Verbindung als auch jedes Mal, wenn eine Änderung der Kommunikationsumgebung eine Neukonfiguration der Verbindung erfordert.

Das `negotiationneeded` Ereignis wird zuerst an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verteilt, wenn Medien erstmals zur Verbindung hinzugefügt werden. Dies startet den Prozess der {{Glossary("ICE", "ICE")}} Verhandlung, indem Ihrem Code mitgeteilt wird, dass er beginnen soll, ICE-Kandidaten über den Signalisierungsserver auszutauschen. Siehe [Signalisierungsablauf](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling#signaling_transaction_flow) für eine Beschreibung des Signalisierungsprozesses, der mit einem `negotiationneeded` Ereignis beginnt.

Dieses Ereignis ist nicht abbrechbar und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("negotiationneeded", (event) => {});

onnegotiationneeded = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

In diesem Beispiel verwenden wir [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um einen Ereignishandler für `negotiationneeded` zu erstellen. Seine Aufgabe ist es, ein {{Glossary("SDP", "SDP")}}-Angebot zu erstellen und es über den Signalisierungskanal an den entfernten Peer zu senden.

```js
pc.addEventListener(
  "negotiationneeded",
  (ev) => {
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
  },
  false,
);
```

Nach der Erstellung des Angebots wird das lokale Ende konfiguriert, indem [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) aufgerufen wird; dann wird eine Signalisierungsnachricht erstellt und über den Signalisierungsserver an den entfernten Peer gesendet, um dieses Angebot mit dem anderen Peer zu teilen. Der andere Peer sollte diese Nachricht erkennen und durch die Erstellung seiner eigenen [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) folgen, die Remote-Beschreibung mit [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) einstellen und dann eine Antwort erstellen, die an den angebotenen Peer zurückgesendet wird.

Sie können auch einen Ereignishandler für das `negotiationneeded` Ereignis festlegen, indem Sie die Ereignishandlerfunktion der Eigenschaft `onnegotiationneeded` zuweisen:

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

Für ein detaillierteres Beispiel siehe [Aushandlung starten](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling#starting_negotiation).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
- [Lebenszyklus einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)
- [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity)
- [Einführung in WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)
