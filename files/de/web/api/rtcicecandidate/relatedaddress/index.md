---
title: "RTCIceCandidate: Eigenschaft relatedAddress"
short-title: relatedAddress
slug: Web/API/RTCIceCandidate/relatedAddress
l10n:
  sourceCommit: 6ac312eb8e37e4ffc788fd1d7a4314456aef88f9
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`relatedAddress`** der **[`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)**-Schnittstelle ist eine Zeichenkette, die die **related address** eines Relay- oder reflexiven Kandidaten angibt.

Ist der Kandidat ein Host-Kandidat (das heißt, seine [`address`](/de/docs/Web/API/RTCIceCandidate/address) ist tatsächlich die reale IP-Adresse des entfernten Peers), ist `relatedAddress` `null`.

Der Wert des `relatedAddress`-Feldes wird aus dem `candidateInfo`-Optionsobjekt festgelegt, das dem [`RTCIceCandidate()`](/de/docs/Web/API/RTCIceCandidate/RTCIceCandidate)-Konstruktor übergeben wird. Sie können den Wert von `relatedAddress` nicht direkt im Optionsobjekt angeben, aber sein Wert wird automatisch aus der `candidate` a-line des Objekts extrahiert, sofern diese richtig formatiert ist (das Feld `rel-address`).

Die related address und der Port ([`relatedPort`](/de/docs/Web/API/RTCIceCandidate/relatedPort)) werden von [ICE](/de/docs/Glossary/ICE) selbst überhaupt nicht verwendet; sie dienen nur zu Analyse- und Diagnosezwecken, und ihre Aufnahme kann durch Sicherheitssysteme blockiert werden, daher sollten Sie sich nicht darauf verlassen, dass sie nicht-`null` Werte haben.

## Wert

Eine Zeichenkette, die die related address des Kandidaten enthält. Für beide, Peer- und Server-reflexive Kandidaten, sind die related address (und der related port) die Basis für diesen Server oder Peer-reflexiven Kandidaten. Für Relay-Kandidaten werden die related address und der Port auf die vom TURN-Server ausgewählte zugeordnete Adresse gesetzt.

Für Host-Kandidaten ist `relatedAddress` `null`, was bedeutet, dass das Feld nicht in die a-line des Kandidaten aufgenommen wird.

## Verwendungshinweise

Die related address ist in ICE-Kandidaten enthalten, obwohl sie von ICE selbst nicht verwendet wird. `relatedAddress` kann für Diagnosezwecke verwendet werden, indem die Beziehungen zwischen den verschiedenen Typen von Kandidaten und ihren Adressen sowie related addresses beobachtet werden. `relatedAddress` kann auch von Qualitäts-of-Service (QoS) Mechanismen genutzt werden.

Hier ist eine [SDP](/de/docs/Web/API/WebRTC_API/Protocols#sdp)-Attributzeile (a-line), die einen vom STUN-Server entdeckten ICE-Kandidaten beschreibt:

```plain
a=candidate:4234997325 1 udp 2043278322 192.0.2.172 6502 typ srflx raddr 198.51.100.45 rport 32768 generation 0
```

Die entfernte Adresse, `relatedAddress`, ist die gepunktete Quad (für IPv4) oder die durch Doppelpunkte getrennte 64-Bit-Adresse (für IPv6), die direkt auf den Text `"raddr"` folgt, oder `"198.51.100.45"`.

## Beispiele

In diesem Beispiel wird der [`type`](/de/docs/Web/API/RTCIceCandidate/type) des Kandidaten überprüft, und dann wird eine Debug-Ausgabe basierend auf dem Kandidatentyp präsentiert, einschließlich der [`ip`](/de/docs/Web/API/RTCIceCandidate/address) des Kandidaten und der `relatedAddress`.

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
- [WebRTC Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity)
- [Lebensdauer einer WebRTC-Session](/de/docs/Web/API/WebRTC_API/Session_lifetime)
- [`RTCIceCandidate.relatedPort`](/de/docs/Web/API/RTCIceCandidate/relatedPort)
- [`RTCIceCandidate.address`](/de/docs/Web/API/RTCIceCandidate/address) und [`RTCIceCandidate.port`](/de/docs/Web/API/RTCIceCandidate/port)
