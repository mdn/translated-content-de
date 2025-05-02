---
title: "RTCIceTransport: selectedcandidatepairchange Ereignis"
short-title: selectedcandidatepairchange
slug: Web/API/RTCIceTransport/selectedcandidatepairchange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebRTC")}}

Ein **`selectedcandidatepairchange`** Ereignis wird an ein [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) gesendet, wenn der {{Glossary("ICE", "ICE")}} Agent ein neues Paar von Kandidaten auswählt, die die Endpunkte einer funktionsfähigen Verbindung beschreiben.

Das Kandidatenpaar wird durch ein [`RTCIceCandidatePair`](/de/docs/Web/API/RTCIceCandidatePair) Objekt beschrieben, das ein [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) enthält, das das lokale Ende der Verbindung repräsentiert, und ein weiteres, das das entfernte Ende der Verbindung repräsentiert.

Zusammen können die Kandidaten verwendet werden, um eine Verbindung herzustellen, die von dem [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) und, in der Folge, von einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) genutzt werden kann.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht gebubbelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("selectedcandidatepairchange", (event) => { })

onselectedcandidatepairchange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Dieses Beispiel erstellt einen Ereignishandler für `selectedcandidatepairchange`, der eine Anzeige aktualisiert, die dem Benutzer Informationen über den Fortschritt der ICE-Verhandlung für eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) namens `pc` bereitstellt.

```js
let iceTransport = pc.getSenders()[0].transport.iceTransport;
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

Dies kann auch durch direktes Setzen der `onselectedcandidatepairchange` Ereignishandler-Eigenschaft erreicht werden.

```js
let iceTransport = pc.getSenders()[0].transport.iceTransport;
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

### Verwandte RTCIceTransport Ereignisse

- [`statechange`](/de/docs/Web/API/RTCIceTransport/statechange_event)
- [`gatheringstatechange`](/de/docs/Web/API/RTCIceTransport/gatheringstatechange_event)

### Verwandte RTCPeerConnection Ereignisse

- [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)
- [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event)
- [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)
- [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)
- [`connectionstatechange`](/de/docs/Web/API/RTCPeerConnection/connectionstatechange_event)
