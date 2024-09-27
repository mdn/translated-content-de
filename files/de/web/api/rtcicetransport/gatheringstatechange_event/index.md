---
title: "RTCIceTransport: gatheringstatechange Ereignis"
short-title: gatheringstatechange
slug: Web/API/RTCIceTransport/gatheringstatechange_event
l10n:
  sourceCommit: 8f3daa06271fa91d351d40ee59c2f07377025108
---

{{APIRef("WebRTC")}}

Ein **`gatheringstatechange`**-Ereignis wird an ein [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) gesendet, wenn sich der Zustand des [ICE](/de/docs/Glossary/ICE) Kandidatensammlungsstatus ändert.

Der Sammlungstatus, dessen aktueller Status in der [`gatheringState`](/de/docs/Web/API/RTCIceTransport/gatheringState) Eigenschaft des Transportobjekts gefunden werden kann, gibt an, ob der ICE-Agent begonnen hat, Kandidaten auf diesem Transport zu sammeln, und falls ja, ob er dies abgeschlossen hat.

Dieses Ereignis kann nicht abgebrochen werden und ist nicht vererbbar.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("gatheringstatechange", (event) => {});

ongatheringstatechange = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Dieses Beispiel erstellt einen Handler für `gatheringstatechange` Ereignisse auf jedem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender), der mit einer bestimmten [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verbunden ist. Hier wird die Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) aufgerufen, um einen Listener für `gatheringstatechange` Ereignisse hinzuzufügen:

```js
pc.getSenders().forEach((sender) => {
  sender.transport.iceTransport.addEventListener(
    "gatheringstatechange",
    (ev) => {
      let transport = ev.target;

      if (transport.gatheringState === "complete") {
        /* this transport has finished gathering candidates,
        but others may still be working on it */
      }
    },
    false,
  );
});
```

Ebenso können Sie die `ongatheringstatechange` Ereignishandler-Eigenschaft verwenden:

```js
pc.getSenders().forEach((sender) => {
  sender.transport.iceTransport.ongatheringstatechange = (ev) => {
    let transport = ev.target;

    if (transport.gatheringState === "complete") {
      /* this transport has finished gathering candidates,
         but others may still be working on it */
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
- [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity)

### Verwandte RTCIceTransport-Ereignisse

- [`statechange`](/de/docs/Web/API/RTCIceTransport/statechange_event)
- [`selectedcandidatepairchange`](/de/docs/Web/API/RTCIceTransport/selectedcandidatepairchange_event)

### Verwandte RTCPeerConnection-Ereignisse

- [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)
- [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event)
- [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)
- [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)
- [`connectionstatechange`](/de/docs/Web/API/RTCPeerConnection/connectionstatechange_event)
