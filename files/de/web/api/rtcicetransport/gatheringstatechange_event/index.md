---
title: "RTCIceTransport: gatheringstatechange Ereignis"
short-title: gatheringstatechange
slug: Web/API/RTCIceTransport/gatheringstatechange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebRTC")}}

Ein **`gatheringstatechange`**-Ereignis wird an einen [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) gesendet, wenn sich der ICE-Kandidatensammlungszustand ändert.

Der Sammlungszustand, dessen aktueller Status in der [`gatheringState`](/de/docs/Web/API/RTCIceTransport/gatheringState)-Eigenschaft des Transportobjekts gefunden werden kann, gibt an, ob der ICE-Agent begonnen hat, Kandidaten für diesen Transport zu sammeln, und falls ja, ob er damit fertig ist.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("gatheringstatechange", (event) => { })

ongatheringstatechange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Dieses Beispiel erstellt einen Handler für `gatheringstatechange`-Ereignisse auf jedem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender), der mit einer gegebenen [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) assoziiert ist. Hier wird die [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Methode aufgerufen, um einen Listener für `gatheringstatechange`-Ereignisse hinzuzufügen:

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
