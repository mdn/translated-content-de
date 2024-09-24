---
title: "RTCIceTransport: Methode getRemoteCandidates()"
short-title: getRemoteCandidates()
slug: Web/API/RTCIceTransport/getRemoteCandidates
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}

Die Methode **`getRemoteCandidates()`** der {{domxref("RTCIceTransport")}}-Schnittstelle gibt ein Array zurück, das für jeden der vom entfernten Peer bisher empfangenen Kandidaten während der aktuellen {{Glossary("ICE")}}-Sitzung zum Sammeln von Kandidaten einen {{domxref("RTCIceCandidate")}} enthält.

Jedes Mal, wenn Ihr Signalisierungscode {{domxref("RTCPeerConnection.addIceCandidate()")}} aufruft, um einen empfangenen Kandidaten zur ICE-Sitzung hinzuzufügen, platziert der ICE-Agent diesen in der Liste, die von dieser Funktion zurückgegeben wird.

## Syntax

```js-nolint
getRemoteCandidates()
```

### Parameter

Keine.

### Rückgabewert

Ein Array, das ein {{domxref("RTCIceCandidate")}}-Objekt für jeden Kandidaten enthält, der bisher vom entfernten Peer während der aktuellen ICE-Kandidatensitzung empfangen wurde.

Es ist wichtig zu beachten, dass es keine Möglichkeit gibt, diese entfernten Kandidaten mit kompatiblen lokalen Kandidaten zu korrelieren. Um die bisher beste Übereinstimmung zu finden, rufen Sie {{domxref("RTCIceTransport.getSelectedCandidatePair()")}} auf.

## Beispiel

Dieses einfache Beispiel ruft die Liste der entfernten Kandidaten vom {{domxref("RTCIceTransport")}} für den ersten {{domxref("RTCRtpSender")}} auf der {{domxref("RTCPeerConnection")}} ab und gibt dann alle Kandidaten in der Liste in der Konsole aus.

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
