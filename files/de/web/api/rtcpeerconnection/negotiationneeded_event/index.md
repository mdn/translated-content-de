---
title: "RTCPeerConnection: negotiationneeded Ereignis"
short-title: negotiationneeded
slug: Web/API/RTCPeerConnection/negotiationneeded_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebRTC")}}

Ein **`negotiationneeded`** Ereignis wird an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn eine Aushandlung der Verbindung über den Signalisierungskanal erforderlich ist. Dies tritt sowohl während der initialen Einrichtung der Verbindung auf als auch jedes Mal, wenn eine Änderung der Kommunikationsumgebung eine Neukonfiguration der Verbindung erfordert.

Das `negotiationneeded` Ereignis wird erstmals an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn Medien zum ersten Mal zur Verbindung hinzugefügt werden. Dies startet den Prozess der [ICE](/de/docs/Glossary/ICE) Aushandlung, indem Ihr Code angewiesen wird, mit dem Austausch von ICE-Kandidaten über den Signalisierungsserver zu beginnen. Siehe [Signalisierungs-Transaktionsablauf](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling#signaling_transaction_flow) für eine Beschreibung des Signalisierungsprozesses, der mit einem `negotiationneeded` Ereignis beginnt.

Dieses Ereignis kann nicht abgebrochen werden und blubbert nicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("negotiationneeded", (event) => {});

onnegotiationneeded = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

In diesem Beispiel verwenden wir [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um einen Ereignis-Handler für `negotiationneeded` zu erstellen. Seine Aufgabe ist es, ein [SDP](/de/docs/Glossary/SDP) Angebot zu erstellen und es über den Signalisierungskanal an den entfernten Teilnehmer zu senden.

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

Nachdem das Angebot erstellt wurde, wird das lokale Ende durch Aufrufen von [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) konfiguriert; dann wird eine Signalisierungsnachricht erstellt und über den Signalisierungsserver an den entfernten Teilnehmer gesendet, um dieses Angebot mit dem anderen Teilnehmer zu teilen. Der andere Teilnehmer sollte diese Nachricht erkennen und folglich seine eigene [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellen, indem er die entfernte Beschreibung mit [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) setzt und dann eine Antwort erstellt, die an den anbietenden Teilnehmer zurückgesendet wird.

Sie können auch einen Ereignis-Handler für das `negotiationneeded` Ereignis einrichten, indem Sie die Ereignis-Handler-Funktion der `onnegotiationneeded` Eigenschaft zuweisen:

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

Für ein detaillierteres Beispiel siehe [Aushandlung beginnen](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling#starting_negotiation).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC-API](/de/docs/Web/API/WebRTC_API)
- [Signalisierung und Videotelefonie](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
- [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)
- [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity)
- [Einführung in WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)
