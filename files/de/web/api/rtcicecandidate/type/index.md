---
title: "RTCIceCandidate: type-Eigenschaft"
short-title: type
slug: Web/API/RTCIceCandidate/type
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("WebRTC")}}

Die **[`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)**-Schnittstelle hat die schreibgeschützte Eigenschaft **`type`**, die den Typ des Kandidaten angibt, den das Objekt darstellt.

Der Wert des `type`-Feldes wird aus dem `candidateInfo`-Optionsobjekt entnommen, das dem [`RTCIceCandidate()`](/de/docs/Web/API/RTCIceCandidate/RTCIceCandidate)-Konstruktor übergeben wird. Sie können den Wert von `type` nicht direkt im Optionsobjekt angeben, aber sein Wert wird automatisch aus der `candidate` a-line des Objekts extrahiert (das `cand-type`-Feld), sofern es korrekt formatiert ist.

## Wert

Ein String, dessen Wert einer der unten definierten ist. Diese Kandidatentypen sind in Reihenfolge der Priorität aufgelistet; je weiter oben in der Liste, desto effizienter sind sie.

- `host`
  - : Der Kandidat ist ein Host-Kandidat, dessen IP-Adresse, wie in der [`RTCIceCandidate.address`](/de/docs/Web/API/RTCIceCandidate/address)-Eigenschaft angegeben, tatsächlich die echte Adresse des entfernten Peers ist.
- `srflx`
  - : Der Kandidat ist ein serverreflexiver Kandidat; die `ip` und der Port sind eine Zuordnung, die von einem NAT für einen Agenten bereitgestellt wird, wenn er ein Paket durch das NAT an einen Server sendet. Sie können vom [STUN](/de/docs/Glossary/STUN)-Server und [TURN](/de/docs/Glossary/TURN)-Server gelernt werden, um den Peer des Kandidaten anonym darzustellen.
- `prflx`
  - : Der Kandidat ist ein peerreflexiver Kandidat; die `ip` und der Port sind eine Zuordnung, die von einem NAT erstellt wird, wenn ein STUN-Request gesendet wird, um den Peer des Kandidaten anonym darzustellen.
- `relay`
  - : Der Kandidat ist ein Relay-Kandidat, der von einem [TURN](/de/docs/Glossary/TURN)-Server erhalten wurde. Die IP-Adresse des Relay-Kandidaten ist eine Adresse, die der TURN-Server verwendet, um die Medien zwischen den beiden Peers weiterzuleiten.

Wenn `type` `null` ist, fehlte diese Information in der a-line des
[`candidate`](/de/docs/Web/API/RTCIceCandidate/candidate), was dazu führen wird, dass
[`RTCPeerConnection.addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) eine
`OperationError`-Ausnahme auslöst.

## Beispiele

In diesem Beispiel wird der `type` des Kandidaten verwendet, um eine angepasste Benutzeroberfläche für Host-Kandidaten zu präsentieren (also diejenigen, bei denen die
[`ip`](/de/docs/Web/API/RTCIceCandidate/address) direkt auf den entfernten Peer verweist, anstatt auf einen Zwischenserver).

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
