---
title: "RTCIceTransport: selectedcandidatepairchange-Ereignis"
short-title: selectedcandidatepairchange
slug: Web/API/RTCIceTransport/selectedcandidatepairchange_event
l10n:
  sourceCommit: ded0a8bc0b6622b4a95253e358c6a58a77ad2387
---

{{APIRef("WebRTC")}}

Ein **`selectedcandidatepairchange`**-Ereignis wird an einen [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) gesendet, wenn der {{Glossary("ICE", "ICE")}}-Agent ein neues Kandidatenpaar auswählt, das die Endpunkte einer nutzbaren Verbindung beschreibt.

Das Kandidatenpaar wird durch ein [`RTCIceCandidatePair`](/de/docs/Web/API/RTCIceCandidatePair)-Objekt beschrieben. Dieses enthält einen [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) für den lokalen Endpunkt der Verbindung und einen weiteren für den entfernten Endpunkt.

Zusammen können die Kandidaten verwendet werden, um eine Verbindung herzustellen, die vom [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) und damit auch von einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) genutzt wird.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht nach oben weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("selectedcandidatepairchange", (event) => { })
```

Alternativ können Sie die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onselectedcandidatepairchange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Dieses Beispiel erstellt einen Event-Handler für `selectedcandidatepairchange`, der eine Anzeige aktualisiert. Sie informiert den Benutzer über den Fortschritt der ICE-Aushandlung für eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) namens `pc`.

```js
let iceTransport = pc.getSenders()[0].transport.iceTransport;
let localProtoElem = document.getElementById("local-protocol");
let remoteProtoElem = document.getElementById("remote-protocol");

iceTransport.addEventListener("selectedcandidatepairchange", (ev) => {
  let pair = iceTransport.getSelectedCandidatePair();
  localProtoElem.innerText = pair.local.protocol.toUpperCase();
  remoteProtoElem.innerText = pair.remote.protocol.toUpperCase();
});
```

Dies ist auch möglich, indem Sie die Event-Handler-Eigenschaft `onselectedcandidatepairchange` direkt setzen. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onselectedcandidatepairchange` hinzugefügte Event-Listener ersetzt werden.

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

- [WebRTC-API](/de/docs/Web/API/WebRTC_API)
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
