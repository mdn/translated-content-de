---
title: "RTCIceCandidate: relatedAddress-Eigenschaft"
short-title: relatedAddress
slug: Web/API/RTCIceCandidate/relatedAddress
l10n:
  sourceCommit: 6ac312eb8e37e4ffc788fd1d7a4314456aef88f9
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`relatedAddress`**-Eigenschaft des **{{domxref("RTCIceCandidate")}}**-Interfaces ist ein String, der die **verwandte Adresse** eines Relay- oder Reflexiv-Kandidaten angibt.

Wenn der Kandidat ein Host-Kandidat ist (d. h. seine {{domxref("RTCIceCandidate/address", "Adresse")}} tatsächlich die echte IP-Adresse des Remote-Peers ist), ist `relatedAddress` `null`.

Der Wert des `relatedAddress`-Feldes wird aus dem `candidateInfo`-Optionsobjekt festgelegt, das an den {{domxref("RTCIceCandidate.RTCIceCandidate", "RTCIceCandidate()")}}-Konstruktor übergeben wird. Sie können den Wert von `relatedAddress` nicht direkt im Optionsobjekt angeben, aber sein Wert wird automatisch aus der `candidate`-a-Zeile des Objekts extrahiert, wenn diese richtig formatiert ist (dem `rel-address`-Feld).

Die verwandte Adresse und der Port ({{domxref("RTCIceCandidate.relatedPort", "relatedPort")}}) werden von {{Glossary("ICE")}} selbst überhaupt nicht verwendet; sie werden nur zu Analyse- und Diagnosezwecken bereitgestellt, und ihre Einbeziehung kann durch Sicherheitssysteme blockiert werden. Verlassen Sie sich daher nicht darauf, dass sie Nicht-`null`-Werte haben.

## Wert

Ein String, der die verwandte Adresse des Kandidaten enthält. Für sowohl Peer- als auch Serverreflexiv-Kandidaten sind die verwandte Adresse (und der verwandte Port) die Basis für diesen Server oder Peerreflexiv-Kandidaten. Bei Relay-Kandidaten werden die verwandte Adresse und der verwandte Port auf die von dem TURN-Server gewählte zugeordnete Adresse gesetzt.

Bei Host-Kandidaten ist `relatedAddress` `null`, was bedeutet, dass das Feld nicht in der a-Zeile des Kandidaten enthalten ist.

## Anwendungshinweise

Die verwandte Adresse ist in ICE-Kandidaten enthalten, obwohl sie von ICE selbst nicht verwendet wird. `relatedAddress` kann für Diagnosezwecke genutzt werden, indem die Beziehungen zwischen den verschiedenen Typen von Kandidaten und ihren Adressen und verwandten Adressen beobachtet werden. `relatedAddress` kann auch von Quality-of-Service-(QoS)-Mechanismen verwendet werden.

Hier ist eine [SDP](/de/docs/Web/API/WebRTC_API/Protocols#sdp)-Attributzeile (a-Zeile), die einen ICE-Kandidaten beschreibt, der vom STUN-Server entdeckt wurde:

```plain
a=candidate:4234997325 1 udp 2043278322 192.0.2.172 6502 typ srflx raddr 198.51.100.45 rport 32768 generation 0
```

Die entfernte Adresse, `relatedAddress`, ist die gepunktete Quad-Adresse (für IPv4) oder die durch Doppelpunkte getrennte 64-Bit-Adresse (für IPv6), die unmittelbar auf den Text `"raddr"` folgt, oder `"198.51.100.45"`.

## Beispiele

In diesem Beispiel wird der {{domxref("RTCIceCandidate.type", "Typ")}} des Kandidaten überprüft, und dann wird eine Debug-Ausgabe basierend auf dem Kandidatentyp präsentiert, einschließlich der {{domxref("RTCIceCandidate/address", "IP")}} des Kandidaten und `relatedAddress`.

```js
switch (candidate.type) {
  case "host":
    console.log(`Host candidate's IP address is ${candidate.address}`);
    break;
  case "srflx":
    console.log(
      `Server reflexive candidate's base address is ${candidate.relatedAddress}; reachable at ${candidate.address}`,
    );
    break;
  case "prflx":
    console.log(
      `Peer reflexive candidate's base address is ${candidate.relatedAddress}; reachable at ${candidate.address}`,
    );
    break;
  case "relay":
    console.log(
      `Relay candidate's address assigned by the TURN server is ${candidate.relatedAddress}; reachable at ${candidate.address}`,
    );
    break;
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
- [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)
- {{domxref("RTCIceCandidate.relatedPort")}}
- {{domxref("RTCIceCandidate.address")}} und {{domxref("RTCIceCandidate.port")}}
