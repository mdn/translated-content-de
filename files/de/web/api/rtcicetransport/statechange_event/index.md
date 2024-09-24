---
title: "RTCIceTransport: statechange-Ereignis"
short-title: statechange
slug: Web/API/RTCIceTransport/statechange_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebRTC")}}

Ein **`statechange`**-Ereignis tritt auf, wenn sich der Zustand des {{domxref("RTCIceTransport")}} ändert. Der {{domxref("RTCIceTransport.state", "state")}} kann verwendet werden, um zu bestimmen, wie weit der Prozess des Überprüfens und Verifizierens eines gültigen Kandidatenpaars fortgeschritten ist, bevor die beiden Peers erfolgreich für WebRTC-Kommunikationen verbunden werden.

Dieses Ereignis kann nicht abgebrochen werden und löst keine Bubble aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("statechange", (event) => {});

onstatechange = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

Gegeben sei eine {{domxref("RTCPeerConnection")}}, `pc`, erzeugt der folgende Code einen Ereignis-Handler, der eine Funktion namens `handleFailure()` aufruft, wenn der ICE-Transport in einen Fehlzustand gerät.

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

- {{domxref("RTCIceTransport.gatheringstatechange_event", "gatheringstatechange")}}
- {{domxref("RTCIceTransport.selectedcandidatepairchange_event", "selectedcandidatepairchange")}}

### Verwandte RTCPeerConnection-Ereignisse

- {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}}
- {{domxref("RTCPeerConnection.signalingstatechange_event", "signalingstatechange")}}
- {{domxref("RTCPeerConnection.iceconnectionstatechange_event", "iceconnectionstatechange")}}
- {{domxref("RTCPeerConnection.icegatheringstatechange_event", "icegatheringstatechange")}}
- {{domxref("RTCPeerConnection.connectionstatechange_event", "connectionstatechange")}}
