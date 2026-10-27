---
title: "RTCIceTransport: gatheringstatechange-Ereignis"
short-title: gatheringstatechange
slug: Web/API/RTCIceTransport/gatheringstatechange_event
l10n:
  sourceCommit: ded0a8bc0b6622b4a95253e358c6a58a77ad2387
---

{{APIRef("WebRTC")}}

Ein **`gatheringstatechange`**-Ereignis wird an einen [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) gesendet, wenn sich dessen Status beim Sammeln von {{Glossary("ICE", "ICE")}}-Kandidaten ändert.

Der Sammelstatus, dessen aktueller Wert in der Eigenschaft [`gatheringState`](/de/docs/Web/API/RTCIceTransport/gatheringState) des Transportobjekts zu finden ist, gibt an, ob der ICE-Agent begonnen hat, Kandidaten für diesen Transport zu sammeln, und gegebenenfalls, ob er damit fertig ist.

Dieses Ereignis kann nicht abgebrochen werden und steigt nicht im DOM-Baum auf.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("gatheringstatechange", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
ongatheringstatechange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Dieses Beispiel erstellt einen Handler für `gatheringstatechange`-Ereignisse für jeden [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender), der mit einer bestimmten [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verknüpft ist. Hier wird die Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) aufgerufen, um einen Listener für `gatheringstatechange`-Ereignisse hinzuzufügen:

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

Ebenso können Sie die Event-Handler-Eigenschaft `ongatheringstatechange` verwenden. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `ongatheringstatechange` hinzugefügte Event-Listener ersetzt werden:

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
