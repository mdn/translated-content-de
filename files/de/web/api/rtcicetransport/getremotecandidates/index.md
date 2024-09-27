---
title: "RTCIceTransport: getRemoteCandidates()-Methode"
short-title: getRemoteCandidates()
slug: Web/API/RTCIceTransport/getRemoteCandidates
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}

Die **`getRemoteCandidates()`**-Methode der [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)-Schnittstelle gibt ein Array zurück, das ein [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) für jeden der Kandidaten enthält, die bisher vom entfernten Partner während der aktuellen [ICE](/de/docs/Glossary/ICE)-Sitzung empfangen wurden.

Jedes Mal, wenn Ihr Signalisierungscode [`RTCPeerConnection.addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) aufruft, um einen empfangenen Kandidaten zur ICE-Sitzung hinzuzufügen, platziert der ICE-Agent ihn in der von dieser Funktion zurückgegebenen Liste.

## Syntax

```js-nolint
getRemoteCandidates()
```

### Parameter

Keine.

### Rückgabewert

Ein Array, das ein [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)-Objekt für jeden Kandidaten enthält, der bisher vom entfernten Partner während der aktuellen ICE-Kandidatensammlungssitzung empfangen wurde.

Es ist wichtig zu beachten, dass es keine Möglichkeit gibt, diese entfernten Kandidaten mit kompatiblen lokalen Kandidaten zu korrelieren.
Um das bisher beste gefundene Paar zu ermitteln, rufen Sie [`RTCIceTransport.getSelectedCandidatePair()`](/de/docs/Web/API/RTCIceTransport/getSelectedCandidatePair) auf.

## Beispiel

Dieses einfache Beispiel ruft die Liste der entfernten Kandidaten von der [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) für den ersten [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) auf der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) ab und gibt dann alle Kandidaten in der Liste in der Konsole aus.

```js
const remoteCandidates = pc
  .getSenders()[0]
  .transport.transport.getRemoteCandidates();

remoteCandidates.forEach((candidate, index) => {
  console.log(`Candidate ${index}: ${candidate.candidate}`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
