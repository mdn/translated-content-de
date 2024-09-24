---
title: "RTCIceCandidate: type-Eigenschaft"
short-title: type
slug: Web/API/RTCIceCandidate/type
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`type`**-Eigenschaft des **{{domxref("RTCIceCandidate")}}**-Interfaces gibt den Typ des Kandidaten an, den das Objekt darstellt.

Der Wert des `type`-Feldes wird aus dem `candidateInfo`-Optionsobjekt festgelegt, das dem {{domxref("RTCIceCandidate.RTCIceCandidate", "RTCIceCandidate()")}}-Konstruktor übergeben wird. Sie können den Wert von `type` nicht direkt im Optionsobjekt angeben, aber sein Wert wird automatisch aus der `candidate` a-line des Objekts (das `cand-type`-Feld) extrahiert, sofern es richtig formatiert ist.

## Wert

Ein String, dessen Wert einer der unten definierten ist. Diese Kanditatentypen sind in der Reihenfolge ihrer Priorität aufgelistet; je höher sie in der Liste stehen, desto effizienter sind sie.

- `host`
  - : Der Kandidat ist ein Host-Kandidat, dessen IP-Adresse, wie in der {{domxref("RTCIceCandidate.address")}}-Eigenschaft angegeben, tatsächlich die echte Adresse des Remote-Peers ist.
- `srflx`
  - : Der Kandidat ist ein serverreflexiver Kandidat; die `ip` und der Port
    sind eine Bindung, die von einem NAT-Agenten zugewiesen wurde, als er ein
    Paket durch das NAT an einen Server gesendet hat. Sie können vom {{Glossary("STUN")}}-Server und {{Glossary("TURN")}}-Server gelernt werden, um den Peer des Kandidaten anonym darzustellen.
- `prflx`
  - : Der Kandidat ist ein Peerreflexiver Kandidat; die `ip` und der Port
    sind eine Bindung, die von einem NAT zugewiesen wurde, als es eine STUN-Anfrage gesendet hat, um den Peer des Kandidaten anonym darzustellen.
- `relay`
  - : Der Kandidat ist ein Relay-Kandidat, der von einem {{Glossary("TURN")}}-Server erhalten wurde. Die IP-Adresse des Relay-Kandidaten ist eine Adresse, die der TURN-Server verwendet, um die Medien zwischen den beiden Peers weiterzuleiten.

Wenn `type` `null` ist, fehlte diese Information in der
a-line des {{domxref("RTCIceCandidate.candidate", "candidate")}}, was dazu führen wird, dass
{{domxref("RTCPeerConnection.addIceCandidate()")}} eine `OperationError`-Ausnahme auslöst.

## Beispiele

In diesem Beispiel wird der `type` des Kandidaten verwendet, um
eine angepasste Benutzeroberfläche für Host-Kandidaten bereitzustellen (bei denen die
{{domxref("RTCIceCandidate/address", "ip")}} direkt auf den Remote-Peer verweist und nicht
auf einen Vermittler).

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

- [WebRTC-API](/de/docs/Web/API/WebRTC_API)
- [Einführung in WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)
- [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity)
- {{domxref("RTCIceCandidate.tcpType")}}
