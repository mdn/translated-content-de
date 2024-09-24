---
title: "RTCIceCandidate: Eigenschaft relatedPort"
short-title: relatedPort
slug: Web/API/RTCIceCandidate/relatedPort
l10n:
  sourceCommit: 6ac312eb8e37e4ffc788fd1d7a4314456aef88f9
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`relatedPort`**-Eigenschaft des **{{domxref("RTCIceCandidate")}}**-Interfaces gibt die Portnummer reflexiver oder Relay-Kandidaten an.

Wenn der Kandidat ein Host-Kandidat ist (das heißt, seine {{domxref("RTCIceCandidate/address", "Adresse")}} ist tatsächlich die tatsächliche IP-Adresse des entfernten Peers), ist `relatedPort` `null`.

Der Wert des `relatedPort`-Feldes wird aus dem `candidateInfo`-Optionsobjekt festgelegt, das an den Konstruktor {{domxref("RTCIceCandidate.RTCIceCandidate", "RTCIceCandidate()")}} übergeben wird. Sie können den Wert von `relatedPort` nicht direkt im Optionsobjekt angeben, aber sein Wert wird automatisch aus der `candidate`-a-line des Objekts extrahiert, wenn sie richtig formatiert ist (das `rel-port`-Feld).

Die zugehörige Adresse ({{domxref("RTCIceCandidate.relatedAddress", "relatedAddress")}}) und der Port werden von {{Glossary("ICE")}} selbst überhaupt nicht verwendet; sie werden nur zu Analyse- und Diagnosezwecken bereitgestellt, und ihre Einbeziehung kann durch Sicherheitssysteme blockiert werden. Verlassen Sie sich also nicht darauf, dass sie nicht-`null`-Werte haben.

## Wert

Ein vorzeichenloser 16-Bit-Wert, der die zugehörige Portnummer des Kandidaten enthält, sofern vorhanden. Für sowohl Peer- als auch Server-reflexive Kandidaten beschreiben die zugehörige Adresse und der Port die Basis für diesen Kandidaten. Für Relay-Kandidaten liefern die zugehörige Adresse und der Port die von dem TURN-Server ausgewählte abgebildete Adresse.

Für Host-Kandidaten ist `relatedPort` `null`, was bedeutet, dass das Feld nicht in der a-line des Kandidaten enthalten ist.

## Nutzungshinweise

Die zugehörige Adresse und der Port werden von ICE selbst nicht verwendet und sind nur zu Diagnose- und Quality-of-Service-Zwecken vorhanden. Sie können aus Sicherheitsgründen tatsächlich weggelassen werden, sind jedoch, wenn vorhanden, ein nützliches Werkzeug während der Fehlerbehebung. Siehe das [Beispiel](#beispiele), das etwas davon zeigt.

Hier ist eine {{Glossary("SDP")}} Attributzeile (a-line), die einen von dem STUN-Server entdeckten ICE-Kandidaten beschreibt:

```plain
a=candidate:4234997325 1 udp 2043278322 192.0.2.172 6502 typ srflx raddr 198.51.100.45 rport 32768 generation 0
```

Der entfernte Port, `relatedPort`, ist die Zahl unmittelbar nach dem `"rport"`-Label in der a-line, also 32768.

## Beispiele

In diesem Beispiel wird der {{domxref("RTCIceCandidate.type", "Typ")}} des Kandidaten überprüft und dann Debugging-Ausgaben präsentiert, basierend auf dem Kandidatentyp, einschließlich des Kandidatentyps, der Adresse (`ip` und {{domxref("RTCIceCandidate.port", "port")}}) und der zugehörigen Adresse ({{domxref("RTCIceCandidate.relatedAddress", "relatedAddress")}} und `relatedPort`).

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

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Einführung in WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)
- [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity)
- [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)
- {{domxref("RTCIceCandidate.relatedAddress")}}
- {{domxref("RTCIceCandidate.address")}} und {{domxref("RTCIceCandidate.port")}}
