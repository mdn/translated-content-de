---
title: "RTCIceTransport: selectedcandidatepairchange-Ereignis"
short-title: selectedcandidatepairchange
slug: Web/API/RTCIceTransport/selectedcandidatepairchange_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebRTC")}}

Ein **`selectedcandidatepairchange`**-Ereignis wird an ein [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) gesendet, wenn der {{Glossary("ICE", "ICE")}}-Agent ein neues Paar von Kandidaten auswählt, die die Endpunkte einer tragfähigen Verbindung beschreiben.

Das Paar von Kandidaten wird wiederum durch ein [`RTCIceCandidatePair`](/de/docs/Web/API/RTCIceCandidatePair)-Objekt beschrieben, das ein [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) enthält, welches das lokale Ende der Verbindung darstellt, und ein weiteres, das das entfernte Ende der Verbindung darstellt.

Zusammen können die Kandidaten zur Einrichtung einer Verbindung verwendet werden, die vom [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) und im weiteren Sinne von einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) genutzt werden kann.

Dieses Ereignis ist nicht abbruchfähig und wird nicht gebubbelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("selectedcandidatepairchange", (event) => {});

onselectedcandidatepairchange = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Dieses Beispiel erstellt einen Ereignis-Handler für `selectedcandidatepairchange`, der eine Anzeige aktualisiert, die dem Benutzer Informationen über den Fortschritt der ICE-Aushandlung für eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) namens `pc` liefert.

```js
let iceTransport = pc.getSenders[0].transport.iceTransport;
let localProtoElem = document.getElementById("local-protocol");
let remoteProtoElem = document.getElementById("remote-protocol");

iceTransport.addEventListener(
  "selectedcandidatepairchange",
  (ev) => {
    let pair = iceTransport.getSelectedCandidatePair();
    localProtoElem.innerText = pair.local.protocol.toUpperCase();
    remoteProtoElem.innerText = pair.remote.protocol.toUpperCase();
  },
  false,
);
```

Dies kann auch direkt durch Setzen der `onselectedcandidatepairchange`-Ereignis-Handler-Eigenschaft erfolgen.

```js
let iceTransport = pc.getSenders[0].transport.iceTransport;
let localProtoElem = document.getElementById("local-protocol");
let remoteProtoElem = document.getElementById("remote-protocol");

iceTransport.onselectedcandidatepairchange = (ev) => {
  let pair = iceTransport.getSelectedCandidatePair();
  localProtoElem.innerText = pair.local.protocol.toUpperCase();
  remoteProtoElem.innerText = pair.remote.protocol.toUpperCase();
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

- [`statechange`](/de/docs/Web/API/RTCIceTransport/statechange_event)
- [`gatheringstatechange`](/de/docs/Web/API/RTCIceTransport/gatheringstatechange_event)

### Verwandte RTCPeerConnection-Ereignisse

- [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)
- [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event)
- [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)
- [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)
- [`connectionstatechange`](/de/docs/Web/API/RTCPeerConnection/connectionstatechange_event)
