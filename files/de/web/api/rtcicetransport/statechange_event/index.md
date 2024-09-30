---
title: "RTCIceTransport: statechange Ereignis"
short-title: statechange
slug: Web/API/RTCIceTransport/statechange_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebRTC")}}

Ein **`statechange`**-Ereignis tritt auf, wenn sich der Zustand des [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) ändert. Der [`state`](/de/docs/Web/API/RTCIceTransport/state) kann verwendet werden, um zu bestimmen, wie weit der Prozess des Prüfens, Verifizierens und Auswählens eines gültigen Kandidatenpaares fortgeschritten ist, bevor die beiden Peers erfolgreich für WebRTC-Kommunikationen verbunden werden.

Dieses Ereignis ist nicht abbrechbar und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("statechange", (event) => {});

onstatechange = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Falls eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), `pc`, existiert, erstellt der folgende Code einen Ereignishandler, der eine Funktion namens `handleFailure()` aufruft, wenn der ICE-Transport in einen Fehlerzustand übergeht.

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

Der gleiche Code, unter Verwendung der `onstatechange`-Ereignishandler-Eigenschaft, sieht so aus:

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
