---
title: "RTCIceTransport: gatheringstatechange-Event"
short-title: gatheringstatechange
slug: Web/API/RTCIceTransport/gatheringstatechange_event
l10n:
  sourceCommit: f71683f74da0078d9371c4d0c1ff9d3898fc7b59
---

{{APIRef("WebRTC")}}

Ein **`gatheringstatechange`**-Event wird an ein [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) gesendet, wenn sich der {{Glossary("ICE", "ICE")}} Kandidatensammlungszustand ändert.

Der Sammelzustand, dessen aktueller Status in der [`gatheringState`](/de/docs/Web/API/RTCIceTransport/gatheringState)-Eigenschaft des Transportobjekts gefunden werden kann, gibt an, ob der ICE-Agent begonnen hat, Kandidaten für diesen Transport zu sammeln, und falls ja, ob er dies abgeschlossen hat.

Dieses Ereignis ist nicht abbruchfähig und wird nicht propagiert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("gatheringstatechange", (event) => { })

ongatheringstatechange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

In diesem Beispiel wird ein Handler für `gatheringstatechange`-Ereignisse auf jedem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) erstellt, der mit einer bestimmten [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verknüpft ist. Hier wird die Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) aufgerufen, um einen Listener für `gatheringstatechange`-Ereignisse hinzuzufügen:

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
  );
});
```

Ebenso können Sie die `ongatheringstatechange`-Ereignis-Handler-Eigenschaft verwenden:

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

- [WebRTC-API](/de/docs/Web/API/WebRTC_API)
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
