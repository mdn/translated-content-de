---
title: "RTCIceCandidate: relatedPort-Eigenschaft"
short-title: relatedPort
slug: Web/API/RTCIceCandidate/relatedPort
l10n:
  sourceCommit: 6ac312eb8e37e4ffc788fd1d7a4314456aef88f9
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`relatedPort`**-Eigenschaft des **[`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)**-Interfaces gibt die Portnummer von reflexiven oder Relay-Kandidaten an.

Wenn der Kandidat ein Host-Kandidat ist (das heißt, seine [`address`](/de/docs/Web/API/RTCIceCandidate/address) ist tatsächlich die echte IP-Adresse des entfernten Peers), ist `relatedPort` `null`.

Der Wert des `relatedPort`-Feldes wird aus dem `candidateInfo`-Optionsobjekt gesetzt, das an den [`RTCIceCandidate()`](/de/docs/Web/API/RTCIceCandidate/RTCIceCandidate)-Konstruktor übergeben wird. Sie können den Wert von `relatedPort` nicht direkt im Optionsobjekt angeben, aber sein Wert wird automatisch aus der `candidate`-a-line des Objekts extrahiert, wenn sie korrekt formatiert ist (das `rel-port`-Feld).

Die zugehörige Adresse ([`relatedAddress`](/de/docs/Web/API/RTCIceCandidate/relatedAddress)) und der Port werden von [ICE](/de/docs/Glossary/ICE) selbst überhaupt nicht verwendet; sie werden nur für Analyse- und Diagnosezwecke bereitgestellt, und ihr Vorhandensein kann durch Sicherheitssysteme blockiert werden, daher sollten Sie sich nicht darauf verlassen, dass sie Nicht-`null`-Werte haben.

## Wert

Ein vorzeichenloser 16-Bit-Wert, der die zugehörige Portnummer des Kandidaten enthält, falls vorhanden. Sowohl für Peer- als auch Server-reflexive Kandidaten beschreiben die zugehörige Adresse und der Port die Basis für diesen Kandidaten. Für Relay-Kandidaten bieten die zugehörige Adresse und der Port die von dem TURN-Server ausgewählte zugeordnete Adresse.

Für Host-Kandidaten ist `relatedPort` `null`, was bedeutet, dass das Feld nicht in der a-line des Kandidaten enthalten ist.

## Nutzungshinweise

Die zugehörige Adresse und der Port werden von ICE selbst nicht verwendet und sind nur für Diagnose- und Quality-of-Service-Zwecke vorhanden. Sie können tatsächlich aus Sicherheitsgründen weggelassen werden, können aber nützlich sein während der Fehlersuche, wenn sie vorhanden sind. Siehe das [Beispiel](#beispiele), das etwas davon zeigt.

Hier ist eine [SDP](/de/docs/Glossary/SDP)-Attributzeile (a-line), die einen durch den STUN-Server entdeckten ICE-Kandidaten beschreibt:

```plain
a=candidate:4234997325 1 udp 2043278322 192.0.2.172 6502 typ srflx raddr 198.51.100.45 rport 32768 generation 0
```

Der entfernte Port, `relatedPort`, ist die Nummer, die unmittelbar auf das `"rport"` Label in der a-line folgt, oder 32768.

## Beispiele

In diesem Beispiel wird der [`type`](/de/docs/Web/API/RTCIceCandidate/type) des Kandidaten überprüft und dann eine Debug-Ausgabe präsentiert, basierend auf dem Kandidatentyp, einschließlich des Typs des Kandidaten, der Adresse (`ip` und [`port`](/de/docs/Web/API/RTCIceCandidate/port)),
und der zugehörigen Adresse ([`relatedAddress`](/de/docs/Web/API/RTCIceCandidate/relatedAddress) und `relatedPort`).

```js
const ip = candidate.address;
const port = candidate.port;
const relIP = candidate.relatedAddress;
const relPort = candidate.relatedPort;

if (relIP && relPort) {
  console.log(
    `Candidate type '${type}' — contact address: ${ip} ${port}, related address: ${relIP} ${relPort}`,
  );
} else {
  console.log(`Host candidate address is ${ip} ${port}`);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Einführung in die WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)
- [WebRTC Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity)
- [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)
- [`RTCIceCandidate.relatedAddress`](/de/docs/Web/API/RTCIceCandidate/relatedAddress)
- [`RTCIceCandidate.address`](/de/docs/Web/API/RTCIceCandidate/address) und [`RTCIceCandidate.port`](/de/docs/Web/API/RTCIceCandidate/port)
