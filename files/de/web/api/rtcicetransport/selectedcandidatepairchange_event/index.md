---
title: "RTCIceTransport: selectedcandidatepairchange-Ereignis"
short-title: selectedcandidatepairchange
slug: Web/API/RTCIceTransport/selectedcandidatepairchange_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebRTC")}}

Ein **`selectedcandidatepairchange`**-Ereignis wird an einen {{domxref("RTCIceTransport")}} gesendet, wenn der {{Glossary("ICE")}}-Agent ein neues Paar von Kandidaten auswählt, die die Endpunkte einer erreichbaren Verbindung beschreiben.

Das Paar von Kandidaten wird durch ein {{domxref("RTCIceCandidatePair")}}-Objekt beschrieben, das einen {{domxref("RTCIceCandidate")}} enthält, der das lokale Ende der Verbindung repräsentiert, und einen anderen, der das entfernte Ende der Verbindung repräsentiert.

Zusammen können die Kandidaten verwendet werden, um eine Verbindung herzustellen, die vom {{domxref("RTCIceTransport")}} und in der Folge von einer {{domxref("RTCPeerConnection")}} genutzt werden kann.

Dieses Ereignis kann nicht abgebrochen werden und blubbert nicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("selectedcandidatepairchange", (event) => {});

onselectedcandidatepairchange = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

Dieses Beispiel erstellt einen Ereignis-Handler für `selectedcandidatepairchange`, der eine Anzeige aktualisiert, die dem Benutzer Informationen über den Fortschritt der ICE-Aushandlung einer {{domxref("RTCPeerConnection")}} namens `pc` bereitstellt.

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

Dies kann auch durch das direkte Setzen der `onselectedcandidatepairchange`-Ereignis-Handler-Eigenschaft erfolgen.

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

- {{domxref("RTCIceTransport/statechange_event", "statechange")}}
- {{domxref("RTCIceTransport.gatheringstatechange_event", "gatheringstatechange")}}

### Verwandte RTCPeerConnection-Ereignisse

- {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}}
- {{domxref("RTCPeerConnection.signalingstatechange_event", "signalingstatechange")}}
- {{domxref("RTCPeerConnection.iceconnectionstatechange_event", "iceconnectionstatechange")}}
- {{domxref("RTCPeerConnection.icegatheringstatechange_event", "icegatheringstatechange")}}
- {{domxref("RTCPeerConnection.connectionstatechange_event", "connectionstatechange")}}
