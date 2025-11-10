---
title: "RTCIceTransport: statechange Ereignis"
short-title: statechange
slug: Web/API/RTCIceTransport/statechange_event
l10n:
  sourceCommit: f71683f74da0078d9371c4d0c1ff9d3898fc7b59
---

{{APIRef("WebRTC")}}

Ein **`statechange`** Ereignis tritt auf, wenn der [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) den Zustand ändert. Der [`state`](/de/docs/Web/API/RTCIceTransport/state) kann verwendet werden, um festzustellen, wie weit der Prozess des Untersuchens, Überprüfens und Auswählens eines gültigen Kandidatenpaares fortgeschritten ist, bevor die beiden Peers für WebRTC-Kommunikation erfolgreich verbunden werden.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht propagiert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("statechange", (event) => { })

onstatechange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Angenommen, Sie haben eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), `pc`, erstellt, beinhaltet der folgende Code einen Ereignishandler, der eine Funktion namens `handleFailure()` aufruft, falls der ICE-Transport in einen Fehlerzustand übergeht.

```js
let iceTransport = pc.getSenders()[0].transport.iceTransport;

iceTransport.addEventListener("statechange", (ev) => {
  if (iceTransport.state === "failed") {
    handleFailure(pc);
  }
});
```

Der gleiche Code, unter Verwendung der `onstatechange` Ereignis-Handler-Eigenschaft, sieht folgendermaßen aus:

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
