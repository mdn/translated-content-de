---
title: "RTCPeerConnection: negotiationneeded-Ereignis"
short-title: negotiationneeded
slug: Web/API/RTCPeerConnection/negotiationneeded_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebRTC")}}

Ein **`negotiationneeded`**-Ereignis wird an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn eine Verhandlung der Verbindung über den Signalisierungskanal erforderlich ist. Dies geschieht sowohl während der anfänglichen Einrichtung der Verbindung als auch zu jeder Zeit, wenn eine Änderung der Kommunikationsumgebung eine Neukonfiguration der Verbindung erfordert.

Das `negotiationneeded`-Ereignis wird zuerst an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn Medien erstmals zur Verbindung hinzugefügt werden. Dies startet den Prozess der {{Glossary("ICE", "ICE")}}-Verhandlung, indem Ihr Code angewiesen wird, mit dem Austausch von ICE-Kandidaten über den Signalisierungsserver zu beginnen. Siehe [Signalisierungs-Transaktionsablauf](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling#signaling_transaction_flow) für eine Beschreibung des Signalisierungsprozesses, der mit einem `negotiationneeded`-Ereignis beginnt.

Dieses Ereignis kann nicht abgebrochen werden und führt nicht zur Ausbreitung.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("negotiationneeded", (event) => { })

onnegotiationneeded = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

In diesem Beispiel verwenden wir [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um einen Ereignishandler für `negotiationneeded` zu erstellen. Seine Aufgabe ist es, ein {{Glossary("SDP", "SDP")}}-Angebot zu erstellen und es über den Signalisierungskanal an den entfernten Partner zu senden.

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

Nach der Erstellung des Angebots wird das lokale Ende durch den Aufruf von [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) konfiguriert; anschließend wird eine Signalisierungsnachricht erstellt und über den Signalisierungsserver an den entfernten Partner gesendet, um dieses Angebot mit dem anderen Partner zu teilen. Der andere Partner sollte diese Nachricht erkennen und daraufhin seine eigene [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellen, die Remote-Beschreibung mit [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) setzen und dann eine Antwort zurück an den anbietenden Partner senden.

Sie können auch einen Ereignishandler für das `negotiationneeded`-Ereignis setzen, indem Sie die Ereignishandler-Funktion der `onnegotiationneeded`-Eigenschaft zuweisen:

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

Für ein detaillierteres Beispiel siehe [Verhandlung beginnen](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling#starting_negotiation).

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
