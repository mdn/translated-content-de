---
title: "RTCPeerConnection: negotiationneeded Ereignis"
short-title: negotiationneeded
slug: Web/API/RTCPeerConnection/negotiationneeded_event
l10n:
  sourceCommit: f71683f74da0078d9371c4d0c1ff9d3898fc7b59
---

{{APIRef("WebRTC")}}

Ein **`negotiationneeded`** Ereignis wird an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn eine Verhandlung der Verbindung über den Signalisierungskanal erforderlich ist. Dies tritt sowohl während der Ersteinrichtung der Verbindung als auch jederzeit auf, wenn eine Änderung der Kommunikationsumgebung eine Neukonfiguration der Verbindung erfordert.

Das `negotiationneeded` Ereignis wird zuerst an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn Medien erstmals zur Verbindung hinzugefügt werden. Dies startet den Prozess der {{Glossary("ICE", "ICE")}} Verhandlung, indem Ihr Code angewiesen wird, ICE-Kandidaten über den Signalisierungsserver auszutauschen. Siehe [Signalisierungstransaktionsfluss](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling#signaling_transaction_flow) für eine Beschreibung des Signalisierungsprozesses, der mit einem `negotiationneeded` Ereignis beginnt.

Dieses Ereignis kann nicht abgebrochen werden und es wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("negotiationneeded", (event) => { })

onnegotiationneeded = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

In diesem Beispiel verwenden wir [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um einen Ereignis-Handler für `negotiationneeded` zu erstellen. Seine Aufgabe ist es, ein {{Glossary("SDP", "SDP")}} Angebot zu erstellen und es über den Signalisierungskanal an den entfernten Teilnehmer zu senden.

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

Nachdem das Angebot erstellt wurde, wird das lokale Ende konfiguriert, indem [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) aufgerufen wird, dann wird eine Signalisierungsnachricht erstellt und über den Signalisierungsserver an den entfernten Teilnehmer gesendet, um dieses Angebot mit dem anderen Teilnehmer zu teilen. Der andere Teilnehmer sollte diese Nachricht erkennen und daraufhin eine eigene [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellen, die entfernte Beschreibung mit [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) setzen und dann eine Antwort erstellen, die an den anbietenden Teilnehmer zurückgesendet wird.

Sie können auch einen Ereignis-Handler für das `negotiationneeded` Ereignis festlegen, indem Sie die Funktion des Ereignis-Handlers der Eigenschaft `onnegotiationneeded` zuweisen:

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

Für ein detaillierteres Beispiel siehe [Verhandlungsbeginn](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling#starting_negotiation).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
- [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)
- [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity)
- [Einführung in die WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)
