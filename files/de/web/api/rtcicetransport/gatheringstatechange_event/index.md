---
title: "RTCIceTransport: gatheringstatechange-Ereignis"
short-title: gatheringstatechange
slug: Web/API/RTCIceTransport/gatheringstatechange_event
l10n:
  sourceCommit: 8f3daa06271fa91d351d40ee59c2f07377025108
---

{{APIRef("WebRTC")}}

Ein **`gatheringstatechange`**-Ereignis wird an ein {{domxref("RTCIceTransport")}} gesendet, wenn sich der Kandidatensammlungsstatus von {{Glossary("ICE")}} ändert.

Der Sammlungsstatus, dessen aktueller Status in der {{domxref("RTCIceTransport.gatheringState", "gatheringState")}}-Eigenschaft des Transportobjekts gefunden werden kann, zeigt an, ob der ICE-Agent begonnen hat, Kandidaten auf diesem Transport zu sammeln, und wenn ja, ob er damit fertig ist.

Dieses Ereignis kann nicht abgebrochen werden und verbreitet sich nicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("gatheringstatechange", (event) => {});

ongatheringstatechange = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

Dieses Beispiel erstellt einen Handler für `gatheringstatechange`-Ereignisse auf jedem {{domxref("RTCRtpSender")}}, der mit einem gegebenen {{domxref("RTCPeerConnection")}} verbunden ist. Hier wird die Methode {{domxref("EventTarget.addEventListener", "addEventListener()")}} aufgerufen, um einen Listener für `gatheringstatechange`-Ereignisse hinzuzufügen:

```js
pc.getSenders().forEach((sender) => {
  sender.transport.iceTransport.addEventListener(
    "gatheringstatechange",
    (ev) => {
      let transport = ev.target;

      if (transport.gatheringState === "complete") {
        /* dieser Transport hat die Sammlung von Kandidaten abgeschlossen,
        aber andere arbeiten möglicherweise noch daran */
      }
    },
    false,
  );
});
```

Ebenso können Sie die `ongatheringstatechange`-Ereignishandler-Eigenschaft verwenden:

```js
pc.getSenders().forEach((sender) => {
  sender.transport.iceTransport.ongatheringstatechange = (ev) => {
    let transport = ev.target;

    if (transport.gatheringState === "complete") {
      /* dieser Transport hat die Sammlung von Kandidaten abgeschlossen,
         aber andere arbeiten möglicherweise noch daran */
    }
  };
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [WebRTC Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity)

### Verwandte RTCIceTransport-Ereignisse

- {{domxref("RTCIceTransport/statechange_event", "statechange")}}
- {{domxref("RTCIceTransport.selectedcandidatepairchange_event", "selectedcandidatepairchange")}}

### Verwandte RTCPeerConnection-Ereignisse

- {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}}
- {{domxref("RTCPeerConnection.signalingstatechange_event", "signalingstatechange")}}
- {{domxref("RTCPeerConnection.iceconnectionstatechange_event", "iceconnectionstatechange")}}
- {{domxref("RTCPeerConnection.icegatheringstatechange_event", "icegatheringstatechange")}}
- {{domxref("RTCPeerConnection.connectionstatechange_event", "connectionstatechange")}}
