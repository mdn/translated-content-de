---
title: "RTCPeerConnection: negotiationneeded-Ereignis"
short-title: negotiationneeded
slug: Web/API/RTCPeerConnection/negotiationneeded_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebRTC")}}

Ein **`negotiationneeded`**-Ereignis wird an die {{domxref("RTCPeerConnection")}} gesendet, wenn eine Aushandlung der Verbindung über den Signalisierungskanal erforderlich ist.
Dies tritt sowohl während der initialen Einrichtung der Verbindung als auch jedes Mal auf, wenn eine Änderung der Kommunikationsumgebung eine Neukonfiguration der Verbindung erfordert.

Das `negotiationneeded`-Ereignis wird zuerst an die {{domxref("RTCPeerConnection")}} gesendet, wenn Medien erstmals zur Verbindung hinzugefügt werden. Dies startet den Prozess der {{Glossary("ICE")}}-Aushandlung, indem Ihr Code angewiesen wird, mit dem Austausch von ICE-Kandidaten über den Signalisierungsserver zu beginnen. Siehe [Signalfluss-Transaktion](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling#signaling_transaction_flow) für eine Beschreibung des Signalisierungsprozesses, der mit einem `negotiationneeded`-Ereignis beginnt.

Dieses Ereignis kann nicht abgebrochen werden und blubbert nicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder legen Sie eine Ereignishandler-Eigenschaft fest.

```js
addEventListener("negotiationneeded", (event) => {});

onnegotiationneeded = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

In diesem Beispiel verwenden wir {{domxref("EventTarget.addEventListener", "addEventListener()")}}, um einen Ereignishandler für `negotiationneeded` zu erstellen. Seine Aufgabe ist es, ein {{Glossary("SDP")}}-Angebot zu erstellen und es über den Signalisierungskanal an den entfernten Teilnehmer zu senden.

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

Nach der Erstellung des Angebots wird das lokale Ende durch den Aufruf von {{domxref("RTCPeerConnection.setLocalDescription()")}} konfiguriert; anschließend wird eine Signalisierungsnachricht erstellt und über den Signalisierungsserver an den entfernten Teilnehmer gesendet, um dieses Angebot mit dem anderen Teilnehmer zu teilen. Der andere Teilnehmer sollte diese Nachricht erkennen und darauf reagieren, indem er seine eigene {{domxref("RTCPeerConnection")}} erstellt, die Remote-Beschreibung mit {{domxref("RTCPeerConnection.setRemoteDescription", "setRemoteDescription()")}} setzt und dann eine Antwort erstellt, um sie an den anbietenden Teilnehmer zurückzusenden.

Sie können auch einen Ereignishandler für das `negotiationneeded`-Ereignis festlegen, indem Sie die Ereignishandler-Funktion der Eigenschaft `onnegotiationneeded` zuweisen:

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
