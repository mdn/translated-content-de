---
title: "RTCIceTransport: statechange-Ereignis"
short-title: statechange
slug: Web/API/RTCIceTransport/statechange_event
l10n:
  sourceCommit: ded0a8bc0b6622b4a95253e358c6a58a77ad2387
---

{{APIRef("WebRTC")}}

Ein **`statechange`**-Ereignis tritt auf, wenn sich der Zustand eines [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) ändert. Anhand von [`state`](/de/docs/Web/API/RTCIceTransport/state) lässt sich feststellen, wie weit das Prüfen, Verifizieren und Auswählen eines gültigen Kandidatenpaars fortgeschritten ist, bevor die beiden Peers für die WebRTC-Kommunikation erfolgreich verbunden werden.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht durch die DOM-Hierarchie weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("statechange", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onstatechange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Für eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) namens `pc` erstellt der folgende Code einen Event-Handler, der die Funktion `handleFailure()` aufruft, wenn der ICE-Transport in einen Fehlerzustand übergeht.

```js
let iceTransport = pc.getSenders()[0].transport.iceTransport;

iceTransport.addEventListener("statechange", (ev) => {
  if (iceTransport.state === "failed") {
    handleFailure(pc);
  }
});
```

Derselbe Code sieht mit der Event-Handler-Eigenschaft `onstatechange` wie folgt aus (beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onstatechange` hinzugefügte Event-Listener ersetzt werden):

```js
let iceTransport = pc.getSenders()[0].transport.iceTransport;

iceTransport.onstatechange = (ev) => {
  if (iceTransport.state === "failed") {
    handleFailure(pc);
  }
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC-API](/de/docs/Web/API/WebRTC_API)
- [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity)

### Verwandte RTCIceTransport-Ereignisse

- [`gatheringstatechange`](/de/docs/Web/API/RTCIceTransport/gatheringstatechange_event)
- [`selectedcandidatepairchange`](/de/docs/Web/API/RTCIceTransport/selectedcandidatepairchange_event)

### Verwandte RTCPeerConnection-Ereignisse

- [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)
- [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event)
- [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)
- [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)
- [`connectionstatechange`](/de/docs/Web/API/RTCPeerConnection/connectionstatechange_event)
