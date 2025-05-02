---
title: "RTCIceTransport: statechange Ereignis"
short-title: statechange
slug: Web/API/RTCIceTransport/statechange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebRTC")}}

Ein **`statechange`**-Ereignis tritt auf, wenn sich der Zustand des [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) ändert. Der [`state`](/de/docs/Web/API/RTCIceTransport/state) kann verwendet werden, um festzustellen, wie weit der Prozess des Prüfens, Verifizierens und Auswählens eines gültigen Kandidatenpaars fortgeschritten ist, bevor die beiden Peers erfolgreich für WebRTC-Kommunikation verbunden werden.

Dieses Ereignis kann nicht abgebrochen werden und löst keine Bubbling-Effekte aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("statechange", (event) => { })

onstatechange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Gegeben einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), `pc`, erstellt der folgende Code einen Ereignishandler, der eine Funktion namens `handleFailure()` aufruft, wenn der ICE-Transport in einen Fehlerzustand gerät.

```js
let iceTransport = pc.getSenders()[0].transport.iceTransport;

iceTransport.addEventListener(
  "statechange",
  (ev) => {
    if (iceTransport.state === "failed") {
      handleFailure(pc);
    }
  },
  false,
);
```

Der gleiche Code unter Verwendung der `onstatechange`-Ereignishandler-Eigenschaft sieht folgendermaßen aus:

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

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
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
