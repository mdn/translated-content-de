---
title: "RTCIceTransport: getRemoteCandidates()-Methode"
short-title: getRemoteCandidates()
slug: Web/API/RTCIceTransport/getRemoteCandidates
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}

Die **`getRemoteCandidates()`**-Methode des [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)-Interfaces gibt ein Array zurück, das ein [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) für jeden Kandidaten enthält, der während der aktuellen {{Glossary("ICE", "ICE")}}-Erfassungssitzung bisher vom entfernten Peers empfangen wurde.

Jedes Mal, wenn Ihr Signalisierungscode [`RTCPeerConnection.addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) aufruft, um einen empfangenen Kandidaten zur ICE-Sitzung hinzuzufügen, platziert der ICE-Agent ihn in der Liste, die von dieser Funktion zurückgegeben wird.

## Syntax

```js-nolint
getRemoteCandidates()
```

### Parameter

Keine.

### Rückgabewert

Ein Array, das ein [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)-Objekt für jeden bisher vom entfernten Peers empfangenen Kandidaten während der aktuellen ICE-Kandidatenerfassungssitzung enthält.

Es ist wichtig zu beachten, dass es keinen Weg gibt, diese entfernten Kandidaten mit kompatiblen lokalen Kandidaten zu korrelieren. Um das bisher beste gefundene Paar zu ermitteln, rufen Sie [`RTCIceTransport.getSelectedCandidatePair()`](/de/docs/Web/API/RTCIceTransport/getSelectedCandidatePair) auf.

## Beispiel

Dieses einfache Beispiel ruft die Liste der entfernten Kandidaten vom [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) für den ersten [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) auf der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) ab und gibt dann alle Kandidaten in der Liste auf der Konsole aus.

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
