---
title: "RTCIceCandidate: relatedAddress-Eigenschaft"
short-title: relatedAddress
slug: Web/API/RTCIceCandidate/relatedAddress
l10n:
  sourceCommit: 6ac312eb8e37e4ffc788fd1d7a4314456aef88f9
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`relatedAddress`**-Eigenschaft des **[`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)**-Interfaces ist ein String, der die **zugehörige Adresse** eines Relay- oder reflexiven Kandidaten angibt.

Wenn der Kandidat ein Host-Kandidat ist (d. h., seine [`address`](/de/docs/Web/API/RTCIceCandidate/address) ist tatsächlich die echte IP-Adresse des entfernten Peers), ist `relatedAddress` `null`.

Der Wert des Feldes `relatedAddress` wird aus dem `candidateInfo`-Optionsobjekt festgelegt, das an den [`RTCIceCandidate()`](/de/docs/Web/API/RTCIceCandidate/RTCIceCandidate)-Konstruktor übergeben wird. Sie können den Wert von `relatedAddress` nicht direkt im Optionsobjekt angeben, aber sein Wert wird automatisch aus der `candidate` a-line des Objekts extrahiert, wenn sie korrekt formatiert ist (das `rel-address`-Feld).

Die zugehörige Adresse und der Port ([`relatedPort`](/de/docs/Web/API/RTCIceCandidate/relatedPort)) werden von [ICE](/de/docs/Glossary/ICE) selbst überhaupt nicht verwendet; sie werden nur zu Analyse- und Diagnosezwecken bereitgestellt, und ihre Einbeziehung kann durch Sicherheitssysteme blockiert werden, daher sollten Sie nicht darauf vertrauen, dass sie nicht-`null`-Werte haben.

## Wert

Ein String, der die zugehörige Adresse des Kandidaten enthält.
Für sowohl Peer- als auch Server-reflexive Kandidaten sind die zugehörige Adresse (und der zugehörige Port) die Basis für diesen Server- oder Peer-reflexiven Kandidaten.
Bei Relay-Kandidaten werden die zugehörige Adresse und der Port auf die vom TURN-Server ausgewählte abgebildete Adresse gesetzt.

Für Host-Kandidaten ist `relatedAddress` `null`, was bedeutet, dass das Feld nicht in der a-line des Kandidaten enthalten ist.

## Verwendungshinweise

Die zugehörige Adresse ist in ICE-Kandidaten enthalten, obwohl sie von ICE selbst nicht verwendet wird.
`relatedAddress` kann für Diagnosezwecke verwendet werden; indem die Beziehungen zwischen den verschiedenen Arten von Kandidaten und ihren Adressen und zugehörigen Adressen beobachtet werden.
`relatedAddress` kann auch von Quality-of-Service (QoS)-Mechanismen verwendet werden.

Hier ist eine [SDP](/de/docs/Web/API/WebRTC_API/Protocols#sdp)-Attributzeile (a-line), die einen vom STUN-Server entdeckten ICE-Kandidaten beschreibt:

```plain
a=candidate:4234997325 1 udp 2043278322 192.0.2.172 6502 typ srflx raddr 198.51.100.45 rport 32768 generation 0
```

Die entfernte Adresse, `relatedAddress`, ist die gepunktete Quad (für IPv4) oder durch Doppelpunkte abgegrenzte 64-Bit-Adresse (für IPv6) unmittelbar nach dem Text `"raddr"` oder `"198.51.100.45"`.

## Beispiele

In diesem Beispiel wird der [`type`](/de/docs/Web/API/RTCIceCandidate/type) des Kandidaten überprüft und basierend auf dem Kandidatentyp Debug-Ausgaben einschließlich der [`ip`](/de/docs/Web/API/RTCIceCandidate/address) und `relatedAddress` des Kandidaten bereitgestellt.

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
- [Lebensdauer einer WebRTC-Session](/de/docs/Web/API/WebRTC_API/Session_lifetime)
- [`RTCIceCandidate.relatedPort`](/de/docs/Web/API/RTCIceCandidate/relatedPort)
- [`RTCIceCandidate.address`](/de/docs/Web/API/RTCIceCandidate/address) und [`RTCIceCandidate.port`](/de/docs/Web/API/RTCIceCandidate/port)
