---
title: "RTCIceCandidate: type Eigenschaft"
short-title: type
slug: Web/API/RTCIceCandidate/type
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`type`** des **[`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)**-Interfaces gibt den Typ des Kandidaten an, den das Objekt darstellt.

Der Wert des `type`-Feldes wird aus dem `candidateInfo`-Optionsobjekt festgelegt, das an den [`RTCIceCandidate()`](/de/docs/Web/API/RTCIceCandidate/RTCIceCandidate)-Konstruktor übergeben wird. Sie können den Wert von `type` nicht direkt im Optionsobjekt angeben, aber sein Wert wird automatisch aus dem `candidate`-a-Zeile-Objekt extrahiert (dem `cand-type`-Feld), wenn es korrekt formatiert ist.

## Wert

Ein String, dessen Wert einer der unten definierten ist. Diese Kandidatentypen sind in der Reihenfolge der Priorität aufgelistet; je höher in der Liste, desto effizienter sind sie.

- `host`
  - : Der Kandidat ist ein Host-Kandidat, dessen IP-Adresse, wie in der [`RTCIceCandidate.address`](/de/docs/Web/API/RTCIceCandidate/address)-Eigenschaft angegeben, tatsächlich die echte Adresse des entfernten Peers ist.
- `srflx`
  - : Der Kandidat ist ein serverreflexiver Kandidat; die `ip` und der Port sind eine Bindung, die von einem NAT für einen Agenten zugewiesen wurde, als er ein Paket durch das NAT an einen Server gesendet hat. Sie können vom {{Glossary("STUN", "STUN")}}-Server und {{Glossary("TURN", "TURN")}}-Server erlernt werden, um den Peer des Kandidaten anonym darzustellen.
- `prflx`
  - : Der Kandidat ist ein peerreflexiver Kandidat; die `ip` und der Port sind eine Bindung, die von einem NAT zugewiesen wurde, als er eine STUN-Anfrage gesendet hat, um den Peer des Kandidaten anonym darzustellen.
- `relay`
  - : Der Kandidat ist ein Relay-Kandidat, der von einem {{Glossary("TURN", "TURN")}}-Server erhalten wurde. Die IP-Adresse des Relay-Kandidaten ist eine Adresse, die der TURN-Server verwendet, um die Medien zwischen den beiden Peers weiterzuleiten.

Wenn `type` `null` ist, fehlte diese Information in der a-Zeile des [`candidate`](/de/docs/Web/API/RTCIceCandidate/candidate), was dazu führt, dass [`RTCPeerConnection.addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) eine `OperationError`-Ausnahme auslöst.

## Beispiele

In diesem Beispiel wird der `type` des Kandidaten verwendet, um eine angepasste Benutzeroberfläche für Host-Kandidaten darzustellen (diejenigen, bei denen die [`ip`](/de/docs/Web/API/RTCIceCandidate/address) direkt auf den entfernten Peer und nicht auf einen Vermittler verweist).

```js
if (candidate.type === "host") {
  showHostControls();
} else {
  hideHostControls();
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Einführung in WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)
- [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity)
- [`RTCIceCandidate.tcpType`](/de/docs/Web/API/RTCIceCandidate/tcpType)
